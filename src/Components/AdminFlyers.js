import React from "react"
import axios from "axios"

// components
import FlyerCard from "./AdminFlyerCard"

const Flyers = ({className}) => {

    const url = "../../flyers"

    const [isChecked, setIsChecked] = React.useState(false)
    const [flyerData, setFlyerData] = React.useState([])
    const [showAllFlyers, setShowAllFlyers] = React.useState("FALSE")

    const fetchData = async () => {
        // await axios.get("http://127.0.0.1:8000/flyers")
        await axios.get(url)
          .then((response) => {
            console.log(response.data)
            setFlyerData(response.data)
          });
    }

    const handleChange = (event) => {
        setIsChecked(event.target.checked)

        if (event.target.checked) {
            setShowAllFlyers("TRUE")
        } else {
            setShowAllFlyers("FALSE")
        }
        
      };

    React.useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>
            <div><h3>Check to access all flyers: </h3><input type="checkbox" checked={isChecked} onChange={handleChange} /></div>
            <div className="grid grid-cols-3 gap-4">
                {flyerData.map((item, idx) => {

                    if (item.isValid == "FALSE" || showAllFlyers == "TRUE") {
                        return <FlyerCard key={idx} imageData={item.imageData} org={item.org} date={item.date} loc={item.loc} pointOfContact={item.pointOfContact} filename={item.filename} mongoid={item._id} />
                    }
                })}
            </div>
        </div>
    )
}

export default Flyers