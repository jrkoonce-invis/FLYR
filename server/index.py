from flask import Flask, render_template, send_file
from flask_cors import CORS
import base64, json

app = Flask(__name__,  static_url_path='', static_folder='build', template_folder='build')
CORS(app)

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
@app.route("/flyers", methods=['GET'])
def flyers():

    # image_file = open("static/flyer1.png", "rb")
    # encoded_string = base64.b64encode(image_file.read())
    # image_file2 = open("static/flyer2.png", "rb")
    # encoded_string2 = base64.b64encode(image_file2.read())

    data = ["flyer1.png", "flyer2.png", "flyer3.jpg", "flyer4.png", "flyer5.png", "flyer6.png"]
    return FLYER_DATA


if __name__ == '__main__':
    app.run(port=8000)
