import React from "react"

// css
import "../CSS/FlyerCard.css"

// components
// import { Button, Card } from "react-bootstrap";

const FlyerCard = ({count}) => {
    return (
        <div className="card">
            Card Number {count}: Some quick example text
        </div>
    )
}

export default FlyerCard