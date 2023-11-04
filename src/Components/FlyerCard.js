import React from "react"

// css
import "../CSS/FlyerCard.css"


const FlyerCard = ({path, org, date, loc}) => {
    return (
        <div className="card">
            <img src={`static/${path}`}/>
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