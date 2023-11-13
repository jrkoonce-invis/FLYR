import React from "react"
import axios from "axios"

// components
import FlyerCard from "./FlyerCard"
import { ReactComponent as Svg } from "../Assets/Dual Ball-1s-200px(1).svg";

const Flyers = ({className}) => {

    const [flyerData, setFlyerData] = React.useState([])
    const [loaded, setLoaded] = React.useState(false)

    const fetchData = async () => {
        await axios.get("http://127.0.0.1:8000/flyers")
          .then((response) => {
            console.log(response.data)
            setLoaded(true)
            setFlyerData(response.data)
          });
    }

    React.useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className="">
            <div className="">
                {!loaded &&
                    <Svg></Svg>
                }
                {flyerData.map((item, idx) => {
                    if (item.isValid == "TRUE") {
                        return <FlyerCard key={idx} imageData={item.imageData} org={item.org} date={item.date} loc={item.loc} />
                    }
                })}
            </div>
        </div>
    )
}

export default Flyers