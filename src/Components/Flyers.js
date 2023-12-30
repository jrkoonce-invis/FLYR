import React from "react"
import axios from "axios"

// components
import FlyerCard from "./FlyerCard"
import { ReactComponent as Svg } from "../Assets/Dual Ball-1s-200px(1).svg";

const Flyers = ({handleScroll, selectedFilters}) => {

    const url = "../../flyers"

    const [flyerData, setFlyerData] = React.useState([])
    const [loaded, setLoaded] = React.useState(false)

    const fetchData = async () => {
        // await axios.get("http://127.0.0.1:8000/flyers")
        await axios.get(url)
          .then((response) => {
            console.log(response.data)
            setLoaded(true)
            setFlyerData(response.data.sort(() => Math.random() - 0.5))
          });
    }

    React.useEffect(() => {
        fetchData()
    }, [])

    return (
        <div onScroll={handleScroll} className="grid xl:grid-cols-2 grid-cols-1 justify-items-center snap-y snap-mandatory h-full overflow-auto no-scrollbar scroll-pb-[1in] md:scroll-pb-0">
            {!loaded &&
                <div className="md:fixed md:left-[calc(50vw)]">
                    <Svg></Svg>
                </div>
            }
            {flyerData.map((item, idx) => {

                // date comparison
                var q = new Date();
                var m = q.getMonth();
                var d = q.getDay();
                var y = q.getFullYear();

                var date = new Date(y, m, d);
                var mydate = new Date(item.date);

                if (item.isValid == "TRUE" &&  (selectedFilters.length == 0 || 
                                                selectedFilters.split(",").includes(item.filter_location) || 
                                                selectedFilters.split(",").includes(item.filter_time) || 
                                                (selectedFilters.split(",").includes(item.cate1) && item.cate1 != "") || 
                                                (selectedFilters.split(",").includes(item.cate2) && item.cate2 != "") || 
                                                (selectedFilters.split(",").includes(item.cate3) && item.cate3 != "") )
                                                && date <= mydate) {
                    return <FlyerCard key={idx} imageData={item.imageData} org={item.org} date={item.date} loc={item.loc} cate1={item.cate1} cate2={item.cate2} cate3={item.cate3} />
                }
            })}
        </div>
    )
}

export default Flyers