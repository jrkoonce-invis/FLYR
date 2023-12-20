import React from "react"
import axios from "axios"

// components
import FlyerCard from "./FlyerCard"
import { ReactComponent as Svg } from "../Assets/Dual Ball-1s-200px(1).svg";

const Flyers = ({handleScroll}) => {

    const url = "../../flyers"

    const [flyerData, setFlyerData] = React.useState([])
    const [loaded, setLoaded] = React.useState(false)

    const fetchData = async () => {
        // await axios.get("http://127.0.0.1:8000/flyers")
        await axios.get(url)
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
        <div onScroll={handleScroll} className="grid xl:grid-cols-2 grid-cols-1 justify-items-center snap-y snap-mandatory h-screen overflow-auto no-scrollbar scroll-pb-[1in] md:scroll-pb-0">
            {!loaded &&
                <div className="md:fixed md:left-[calc(50vw)]">
                    <Svg></Svg>
                </div>
            }
            {flyerData.map((item, idx) => {
                if (item.isValid == "TRUE") {
                    return <FlyerCard key={idx} imageData={item.imageData} org={item.org} date={item.date} loc={item.loc} />
                }
            })}
        </div>
    )
}

export default Flyers