import React from "react"


const FlyerCard = ({imageData, org, date, loc, cate1, cate2, cate3}) => {
      
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
                    <div className="object-scale-down w-full h-full bg-base-200 flex flex-col gap-8 justify-center items-center">

                        <div className="p-6 bg-base-300 rounded-lg border-4 border-white max-w-[80%]">
                            <p className="text-pretty"><b>Organization:</b> {org}</p>
                            <p className="text-pretty"><b>Date:</b> {date}</p>
                            <p className="text-pretty"><b>Location:</b> {loc}</p>
                        </div>

                        <div className="flex flex-col items-center gap-1">
                            {cate1 != "" && 
                                <div class="badge badge-primary">{cate1}</div>
                            }
                            <p></p>
                            {cate2 != "" && 
                                <div class="badge badge-secondary">{cate2}</div>
                            }
                            <p></p>
                            {cate3 != "" && 
                                <div class="badge badge-accent">{cate3}</div>
                            }
                        </div>
                        
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FlyerCard