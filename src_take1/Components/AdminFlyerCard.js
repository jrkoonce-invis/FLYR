import React from "react"
import axios from "axios"


const FlyerCard = ({imageData, org, date, loc, pointOfContact, filename}) => {

    const deleteFlyer = async () => {
        await axios.delete("http://127.0.0.1:8000/admin", { params : { "filename" : filename } })
          .then((response) => {
            console.log(response)
          });
    }

    const acceptFlyer = async () => {
        await axios.put("http://127.0.0.1:8000/admin", null, { params : { "filename" : filename } })
          .then((response) => {
            console.log(response)
          });
    }

    return (
        <div className="card">
            <img src={`data:image/png;base64,${imageData}`}/>
            <div>
                <p>Organization: {org}</p>
                <br></br>
                <p>Date: {date}</p>
                <br></br>
                <p>Location: {loc}</p>
                <br></br>
                <p>POC: {pointOfContact}</p>
                <br></br>
                <button onClick={acceptFlyer}>ACCEPT</button>
                <br></br><br></br>
                <button onClick={deleteFlyer}>DELETE</button>
            </div>
        </div>
    )
}

export default FlyerCard