import React from "react"
import axios from "axios"

// components
import FlyerCard from "./FlyerCard"

const Flyers = ({className}) => {

    const [flyerData, setFlyerData] = React.useState([])

    const fetchData = async () => {
        await axios.get("http://127.0.0.1:8000/flyers")
          .then((response) => {
            console.log(response.data)
            setFlyerData(response.data)
          });
    }

    React.useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className={className}>
            {flyerData.map((item, idx) => {
                if (item.isValid == "TRUE") {
                    return <FlyerCard key={idx} path={item.filename} org={item.org} date={item.date} loc={item.loc} />
                }
            })}
        </div>
    )
}

export default Flyers