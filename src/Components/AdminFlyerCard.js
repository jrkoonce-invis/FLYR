import React from "react"
import axios from "axios"



const FlyerCard = ({imageData, org, date, loc, pointOfContact, filename, mongoid, cate1, cate2, cate3, link}) => {

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
        // await axios.delete("http://127.0.0.1:8000/admin", { params : { "mongoid" : mongoid["$oid"] } })
          .then((response) => {
            console.log(response)
          });
    }

    const acceptFlyer = async () => {
        await axios.put(url, null, { params : { "mongoid" : mongoid["$oid"] } })
        // await axios.put("http://127.0.0.1:8000/admin", null, { params : { "mongoid" : mongoid["$oid"] } })
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
            <div className="rounded-md bg-primary">
                <p>Organization: {org}</p>
                <p>Date: {date}</p>
                <p>Location: {loc}</p>
                <p>POC: {pointOfContact}</p>
                <p>Cate1: {cate1}</p>
                <p>Cate2: {cate2}</p>
                <p>Cate3: {cate3}</p>
                <p>Link: <a href={link} target="_blank" className="underline">Click Here</a></p>
                <br></br>
                <button className="btn btn-neutral" onClick={acceptFlyer}>ACCEPT</button>
                <br></br><br></br>
                <button className="btn btn-neutral" onClick={deleteFlyer}>DELETE</button>
            </div>
        </div>
    )
}

export default FlyerCard