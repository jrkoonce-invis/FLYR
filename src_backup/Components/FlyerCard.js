import React from "react"

// css
import "../CSS/FlyerCard.css"


const FlyerCard = ({imageData, org, date, loc}) => {
    return (
        <div className="card">
            <img src={`data:image/png;base64,${imageData}`}/>
            <div className="info">
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