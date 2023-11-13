import React from "react"


const FlyerCard = ({imageData, org, date, loc}) => {
    return (
        <div className="">
            <img src={`data:image/png;base64,${imageData}`}/>
            <div className="">
                <p>Organization: {org}</p>
                <br></br>
                <p>Date: {date}</p>
                <br></br>
                <p>Location: {loc}</p>
            </div>
        </div>
    )
}

export default FlyerCard