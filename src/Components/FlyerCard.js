import React from "react"
import axios from "axios"

const FlyerCard = ({imageData, org, date, loc, cate1, cate2, cate3, link, mongoid, linkClicks, flyerClicks}) => {
      
        const url = "../../admin"    
    
        const [flipped, setFlipped] = React.useState(false)

        const addFlyerClick = async () => {
            console.log(flyerClicks, Number(flyerClicks) + 1)
            await axios.put(url, { params : { "mongoid" : mongoid["$oid"], 
                                                                "updatedLinkClicks" : linkClicks, 
                                                                "updatedFlyerClicks" : (flyerClicks + 1) 
                                                            } })
            // await axios.put("http://127.0.0.1:8000/flyers", null,  { params : { "mongoid" : mongoid["$oid"], 
            //                                                                 "updatedLinkClicks" : linkClicks, 
            //                                                                 "updatedFlyerClicks" : (Number(flyerClicks) + 1) 
            //                                                                 } })
              .then((response) => {
                // console.log(response)
              });
        }

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

                addFlyerClick()

            } else {
                setCardStyle("grid justify-items-center content-center flipcard")
                setBackStyle("object-scale-down card__face card__face--back absolute w-full h-full")
                setFlipped(false)
            }
        }

    return (
        <div>

            {/* MOBILE VIEW */}
            {/* <div className="snap-center snap-always scene sm:hover:scale-110 duration-500 mt-5 mb-5 w-[90vw] cursor-pointer h-auto sm:h-[60vh] sm:w-auto block md:hidden" onClick={addFlyerClick}>
                <a href={link} target="_block">
                <div className={cardstyle}>
                    <img className={frontstyle} src={`data:image/png;base64,${imageData}`}/>
                    <div className={backstyle}>
                        <div className="object-scale-down w-full h-full bg-base-200 flex flex-col gap-8 justify-center items-center">
                        </div>
                    </div>
                </div>
                </a>
            </div> */}

            {/* COMPUTER VIEW */}
            <div className="snap-center snap-always scene sm:hover:scale-110 duration-500 mt-5 mb-1 md:mb-5 w-[90vw] md:w-auto cursor-pointer h-auto sm:h-[60vh]" onClick={handleFlip}>
                <div className={cardstyle}>
                    <img className={frontstyle} src={`data:image/png;base64,${imageData}`}/>
                    <div className={backstyle}>
                        <div className="w-full h-full bg-base-200 flex flex-col gap-8 justify-center items-center overflow-contain">

                            <div className="p-6 bg-base-300 rounded-lg border-4 border-white max-w-[80%]">
                                <p className="text-pretty"><b>Organization:</b> {org}</p>
                                <p className="text-pretty"><b>Date:</b> {date}</p>
                                <p className="text-pretty"><b>Location:</b> {loc}</p>
                                {link && link != "" &&
                                    <p className="text-pretty z-50 hidden md:block"><b>Website:</b> <a className="underline z-50" target="_blank" href={link}>Click Here</a></p>
                                }                         
                            </div>

                            {/* <div className="flex flex-row items-center gap-1">
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
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>

            {link && link != "" &&
                <p className="text-pretty z-50 block md:hidden"><b>Website:</b> <a className="underline z-50" target="_blank" href={link}>{link.substring(0,40)+"..."}</a></p>
            }                         

        </div>
    )
}

export default FlyerCard