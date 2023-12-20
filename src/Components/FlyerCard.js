import React from "react"


const FlyerCard = ({imageData, org, date, loc}) => {
      
        const [flipped, setFlipped] = React.useState(false)

        // const [cardstyle, setCardStyle] = React.useState("grid justify-items-center h-screen content-center flipcard")
        // // hover:scale-105 duration-500 
        // const [frontstyle, setFrontStyle] = React.useState("object-scale-down h-[calc(100vh-8rem)] card__face")
        // const [backstyle, setBackStyle] = React.useState("h-[calc(100vh-8rem)] card__face card__face--back absolute pt-30 w-full top-[calc(4rem)]")

        // const handleFlip = () => {
        //     if (!flipped) {
        //         setCardStyle("grid justify-items-center h-screen content-center flipcard is-flipped")
        //         setBackStyle("h-[calc(100vh-8rem)] card__face card__face--back absolute w-full top-[calc(4rem)]")
        //         setFlipped(true)
        //     } else {
        //         setCardStyle("grid justify-items-center h-screen content-center flipcard")
        //         setBackStyle("h-[calc(100vh-8rem)] card__face card__face--back absolute w-full top-[calc(4rem)]")
        //         setFlipped(false)
        //     }
        // }

        const [cardstyle, setCardStyle] = React.useState("grid justify-items-center content-center flipcard")
        const [frontstyle, setFrontStyle] = React.useState("object-scale-down sm:h-[60vh] card__face")
        const [backstyle, setBackStyle] = React.useState("object-scale-down card__face card__face--back absolute w-full h-full")

        const handleFlip = () => {
            if (!flipped) {
                setCardStyle("grid justify-items-center content-center flipcard is-flipped")
                setBackStyle("object-scale-down card__face card__face--back absolute w-full h-full")
                setFlipped(true)
            } else {
                setCardStyle("grid justify-items-center content-center flipcard")
                setBackStyle("object-scale-down card__face card__face--back absolute w-full h-full")
                setFlipped(false)
            }
        }

    return (
        <div className="snap-center snap-always scene sm:hover:scale-110 duration-500 cursor-pointer mt-5 mb-5 w-[90vw] h-auto sm:h-[60vh] sm:w-auto" onClick={handleFlip}>
            <div className={cardstyle}>
                <img className={frontstyle} src={`data:image/png;base64,${imageData}`}/>
                <div className={backstyle}>
                    <div className="object-scale-down w-full h-full bg-base-200 grid justify-items-center items-center">
                        
                        <div> 
                            <p>Organization: {org}</p>
                            <p>Date: {date}</p>
                            <p>Location: {loc}</p>
                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FlyerCard