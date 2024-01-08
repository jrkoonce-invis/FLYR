from flask import Flask, request, render_template, jsonify, redirect
from bson import json_util
from flask_cors import CORS
import base64, json, os, io
from bson.objectid import ObjectId

# Auth0 imports
from os import environ as env
from urllib.parse import quote_plus, urlencode
from authlib.integrations.flask_client import OAuth
from dotenv import find_dotenv, load_dotenv
from flask import redirect, session, url_for

# Auth0 enviroment import
ENV_FILE = find_dotenv()
if ENV_FILE:
    load_dotenv(ENV_FILE)

# MongoDB imports
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi


app = Flask(__name__,  static_url_path='', static_folder='build', template_folder='build')
app.secret_key = env.get("APP_SECRET_KEY") # get secret key (Auth0)
CORS(app)

uri = "mongodb+srv://flyr:buildillinois@flyr.u2onar1.mongodb.net/?retryWrites=true&w=majority"

# Create a new client and connect to the server
client = MongoClient(uri, server_api=ServerApi('1'))

# Send a ping to confirm a successful connection
try:
    client.admin.command('ping')
    print("Pinged your deployment. You successfully connected to MongoDB!")
except Exception as e:
    print(e)

db = client.Flyr

FLYER_DATA = [
    {
        "filename": "flyer1.png",
        "org": "testorg1",
        "date": "10/23/24",
        "loc": "SCD",
        "isValid": "TRUE"
    },
    {
        "filename": "flyer2.png",
        "org": "testorg2",
        "date": "10/23/24",
        "loc": "Your Mom's House",
        "isValid": "TRUE"
    },
    {
        "filename": "flyer3.jpg",
        "org": "testorg3",
        "date": "10/23/24",
        "loc": "SCD",
        "isValid": "TRUE"
    },
    {
        "filename": "flyer4.png",
        "org": "testorg4",
        "date": "10/23/24",
        "loc": "CIF",
        "isValid": "TRUE"
    },
    {
        "filename": "flyer5.png",
        "org": "testorg5",
        "date": "10/23/24",
        "loc": "BIF",
        "isValid": "TRUE"
    },
    {
        "filename": "flyer6.png",
        "org": "testorg6",
        "date": "10/23/24",
        "loc": "Grainger",
        "isValid": "TRUE"
    },

]

oauth = OAuth(app)

# Auth0 register client
oauth.register(
    "auth0",
    client_id=env.get("AUTH0_CLIENT_ID"),
    client_secret=env.get("AUTH0_CLIENT_SECRET"),
    client_kwargs={
        "scope": "openid profile email",
    },
    server_metadata_url=f'https://{env.get("AUTH0_DOMAIN")}/.well-known/openid-configuration'
)



# Auth0 login test
@app.route("/login")
def login():
    return oauth.auth0.authorize_redirect(
        redirect_uri=url_for("callback", _external=True)
    )

@app.route("/callback", methods=["GET", "POST"])
def callback():
    token = oauth.auth0.authorize_access_token()
    session["user"] = token
    return redirect("/admin")

# @app.route("/authorize", methods=["GET"])
# def authorize():
#     token = request.headers.get('Authorization')
#     print(token)
#     try:
#             user = oauth.auth0.parse_id_token(token)
#             return jsonify({'message': 'Valid token', 'user': user})
#     except Exception as e:
#             return jsonify({'message': 'Invalid token', 'error': str(e)})
#     else:
#         return jsonify({'message': 'No token provided'})

@app.route("/logout")
def logout():
    session.clear()
    return redirect(
        "https://" + env.get("AUTH0_DOMAIN")
        + "/v2/logout?"
        + urlencode(
            {
                "returnTo": url_for("root", _external=True),
                "client_id": env.get("AUTH0_CLIENT_ID"),
            },
            quote_via=quote_plus,
        )
    )


# serve user-side react website
@app.route("/")
def root():
    return render_template("index.html")

# API returns accepted flyers
@app.route("/flyers", methods=["GET", "PUT"])
def flyers():
    flyerData = db.FlyerData

    if request.method == "GET":
        mongoData = list(flyerData.find({}))

        for item in mongoData:
            item["imageData"] = str(base64.b64encode(item["imageData"]).decode('utf-8'))

        # https://www.mongodb.com/community/forums/t/how-should-i-handle-objectid-with-flask/178220
        # Return data as JSON
        return jsonify(json.loads(json_util.dumps(mongoData)))
    elif request.method == "PUT":
        mongoid = request.args.get("mongoid")

        linkClicks = request.args.get("updatedLinkClicks")
        flyerClicks = request.args.get("updatedFlyerClicks")
        print("curr", flyerClicks)

        filter = {"_id": ObjectId(mongoid)}
        update = {"$set": {"linkClicks": linkClicks}, "$set": {"flyerClicks": flyerClicks}}

        print(ObjectId(mongoid))

        count = flyerData.count_documents(filter)
        print(count)

        res = flyerData.update_one(filter, update)
        print(res.modified_count)

        return "Updated Clicks Successfully"


# API retrieves uploaded flyer data
@app.route("/upload", methods=["POST"])
def upload():
    file = request.files['file']

    # adds data to flyer data
    data = json.loads(request.form["data"])
    data["isValid"] = "FALSE"
    data["filename"] = file.filename
    data["linkClicks"] = 0
    data["flyerClicks"] = 0

    image_data = file.read()
    image_data = io.BytesIO(image_data).read()
    data["imageData"] = image_data

    flyerData = db.FlyerData
    flyerData.insert_one(data)

    # response of approval
    return 'File uploaded successfully'


# delete or accept flyer from admin
@app.route("/admin", methods=["GET", "DELETE", "PUT"])
def admin():

    if request.method == "GET":
        if (session.get("user")):
            return render_template("index.html", session=session.get('user'), pretty=json.dumps(session.get('user'), indent=4))
        else:
            return redirect("/login")

    flyerData = db.FlyerData

    if request.method == "PUT":
        mongoid = request.args.get("mongoid")

        filter = {"_id": (ObjectId(mongoid))}
        update = {"$set": {"isValid": "TRUE"}}

        print(ObjectId(mongoid))

        count = flyerData.count_documents(filter)
        print(count)

        res = flyerData.update_one(filter, update)
        print(res.modified_count)

        return "Accepted flyer successfully"

    if request.method == "DELETE":
        mongoid = request.args.get("mongoid")
        print(mongoid, ObjectId(mongoid))
        if ObjectId(mongoid):
            count = flyerData.count_documents({"_id": (ObjectId(mongoid))})
            print(count, ObjectId(mongoid))
            flyerData.delete_one({"_id": ObjectId(mongoid)})
        return "Deleted flyer successfully"


if __name__ == '__main__':
    app.run(host="0.0.0.0", port=8000)
