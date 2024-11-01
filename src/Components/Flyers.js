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
            // console.log(response.data)
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
                <div className="z-0 md:fixed md:left-[calc(50vw)]">
                    <Svg></Svg>
                    <p className="animate-bounce block md:hidden">Tap a flyer for more information</p>
                    <p className="animate-bounce hidden md:block">Click a flyer for more information</p>
                </div>
            }
            {flyerData.map((item, idx) => {

                // date comparison
                var date = new Date();
                var mydate = new Date(item.date);

                let time_diff = mydate.getTime() - date.getTime();
                let days_diff = Math.round(time_diff / (1000 * 3600 * 24)) + 1;

                // console.log(date, mydate, time_diff, days_diff)

                let item_filtertime = "";

                if (days_diff <= 1) {
                    item_filtertime = "24"
                } else if (days_diff <= 7) {
                    item_filtertime = "week"
                } else if (days_diff <= 21) {
                    item_filtertime = "month"
                }

                if (item.isValid == "TRUE" &&  (selectedFilters.length == 0 || 
                                                selectedFilters.split(",").includes(item.filter_location) || 
                                                selectedFilters.split(",").includes(item_filtertime) || 
                                                (selectedFilters.split(",").includes(item.cate1) && item.cate1 != "") || 
                                                (selectedFilters.split(",").includes(item.cate2) && item.cate2 != "") || 
                                                (selectedFilters.split(",").includes(item.cate3) && item.cate3 != "") ||
                                                (selectedFilters.split(",").includes(item.link) && item.cate3 != "") )
                                                && date <= mydate) {
                    return <FlyerCard key={idx} imageData={item.imageData} org={item.org} date={item.date} loc={item.loc} cate1={item.cate1} cate2={item.cate2} cate3={item.cate3} link={item.link} mongoid={item._id} linkClicks={item.linkClicks} flyerClicks={item.flyerClicks} />
                }
            })}
            <div className="h-24 md:h-0"></div>
        </div>
    )
}

export default Flyers