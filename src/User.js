import React, { useCallback } from "react"

// components
import Sidebar from "./Components/Sidebar";
import Flyers from "./Components/Flyers";

// css
import "./CSS/main.css"

const User = () => {

    const [arrowvis, setArrowvis] = React.useState("w-12 h-12")

    const handleScroll = useCallback(() => {
        setArrowvis("w-12 h-12 opacity-0 duration-500")
    }, [])

    const postClick = () => {
        setArrowvis("w-12 h-12 opacity-0")
    }

    return (
        <div>
            {/* TOP BAR */}
            {/* <div className="bg-blue-200 fixed w-screen h-24 top-0 "></div> */}

            {/* SIDEBAR */}
            <div className="w-60 h-[screen-8rem] fixed">
                <Sidebar postClick={postClick}></Sidebar>
            </div>

            {/* FLYERS SECTION */}
            <div className="ml-60 h-[screen]">
                <Flyers handleScroll={handleScroll}></Flyers>
            </div>

            {/* ARROW SCROLL ANIMATION */}
            <div className="fixed bottom-0 w-full left-[calc(50vw+15rem-2rem+.5rem-8rem)] animate-bounce">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={arrowvis}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75" />
                </svg>
            </div>
        </div>
    )
}

export default User