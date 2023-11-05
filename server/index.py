from flask import Flask, request, render_template, jsonify
from bson import json_util, ObjectId
from flask_cors import CORS
import base64, json, os, io

# MongoDB
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi

app = Flask(__name__,  static_url_path='', static_folder='build', template_folder='build')
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

UPLOAD_FOLDER = "build/static"  # Directory to store uploaded files
app.config["UPLOAD_FOLDER"] = UPLOAD_FOLDER

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


# serve user-side react website
@app.route("/")
def root():
    return render_template("index.html")


# API returns accepted flyers
@app.route("/flyers", methods=["GET"])
def flyers():
    flyerData = db.FlyerData
    mongoData = list(flyerData.find({}))

    for item in mongoData:
        item["imageData"] = str(base64.b64encode(item["imageData"]).decode('utf-8'))

    # https://www.mongodb.com/community/forums/t/how-should-i-handle-objectid-with-flask/178220
    # Return data as JSON
    return jsonify(json.loads(json_util.dumps(mongoData)))


# API retrives uploaded flyer data
@app.route("/upload", methods=["POST"])
def upload():
    # uploads fild to flyer directory
    file = request.files['file']
    # file.save(os.path.join(app.config['UPLOAD_FOLDER'], file.filename))

    # adds data to flyer data
    data = json.loads(request.form["data"])
    data["isValid"] = "TRUE"
    data["filename"] = file.filename

    image_data = file.read()
    image_data = io.BytesIO(image_data).read()
    print("image_data", image_data)
    data["imageData"] = image_data

    # Need this to update FLYER_DATA with POSTed data
    # FLYER_DATA.append(data)

    flyerData = db.FlyerData
    flyerData.insert_one(data)

    # response of approval
    return 'File uploaded successfully'



if __name__ == '__main__':
    app.run(port=8000)
