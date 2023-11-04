from flask import Flask, request, render_template
from flask_cors import CORS
import base64, json, os

app = Flask(__name__,  static_url_path='', static_folder='build', template_folder='build')
CORS(app)

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

    # image_file = open("static/flyer1.png", "rb")
    # encoded_string = base64.b64encode(image_file.read())
    # image_file2 = open("static/flyer2.png", "rb")
    # encoded_string2 = base64.b64encode(image_file2.read())

    return FLYER_DATA


# API retrives uploaded flyer data
@app.route("/upload", methods=["POST"])
def upload():
    # uploads fild to flyer directory
    file = request.files['file']
    file.save(os.path.join(app.config['UPLOAD_FOLDER'], file.filename))

    # adds data to flyer data
    data = json.loads(request.form["data"])
    data["isValid"] = "TRUE"
    data["filename"] = file.filename

    FLYER_DATA.append(data)

    # response of approval
    return 'File uploaded successfully'



if __name__ == '__main__':
    app.run(port=8000)
