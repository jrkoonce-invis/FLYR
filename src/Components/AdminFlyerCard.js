import React from "react"
import axios from "axios"



const FlyerCard = ({imageData, org, date, loc, pointOfContact, filename, mongoid}) => {

    const url = "../../admin"

    // date comparison
    var q = new Date();
    var m = q.getMonth();
    var d = q.getDay();
    var y = q.getFullYear();

    var currdate = new Date(y, m, d);
    var mydate = new Date(date);

    const deleteFlyer = async () => {
        await axios.delete(url, { params : { "mongoid" : mongoid["$oid"] } })
        // await axios.delete("http://127.0.0.1:8000/flyers", { params : { "mongoid" : mongoid["$oid"] } })
          .then((response) => {
            console.log(response)
          });
    }

    const acceptFlyer = async () => {
        await axios.put(url, null, { params : { "mongoid" : mongoid["$oid"] } })
        // await axios.put("http://127.0.0.1:8000/flyers", { params : { "mongoid" : mongoid["$oid"] } })
          .then((response) => {
            console.log(response)
          });
    }

    return (
        <div>
            {currdate <= mydate ? (
              <img src={`data:image/png;base64,${imageData}`}/>
            ) : (
              <img className="opacity-50" src={`data:image/png;base64,${imageData}`}/>
            )}
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