import React from "react"

// components
import FlyerCard from "./FlyerCard"

const Flyers = ({className}) => {

    const flyerCards = []
    const count = 10

    for (let i = 0; i < count; i++) {
        flyerCards.push(<FlyerCard count={i}></FlyerCard>)
    }

    return (
        <div className={className}>
            {flyerCards}
        </div>
    )
}

export default Flyers