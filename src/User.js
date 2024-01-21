import React, { useCallback } from "react"

// components
import Sidebar from "./Components/Sidebar";
import Flyers from "./Components/Flyers";

// css
import "./CSS/main.css"

const User = () => {

    const [arrowvis, setArrowvis] = React.useState("w-12 h-12 animate-bounce")

    const handleScroll = useCallback(() => {
        setArrowvis("w-12 h-12 opacity-0 duration-500 animate-bounce")
    }, [])

    const postClick = () => {
        setArrowvis("w-12 h-12 opacity-0 animate-bounce")
    }

    const refreshLogo = () => {
        window.location.reload();
    }

    // Displaying filters sidebar on mobile view
    const [filters, setFilters] = React.useState(false)
    const onHamburgerClick = () => {
        setFilters(!filters)
    }

    // Filtering based on user selection
    const [selectedFilters, setSelectedFilters] = React.useState("")

    return (
        <div>
            {/* TOP BAR */}
            {/* <div className="bg-blue-200 fixed w-screen h-24 top-0 "></div> */}

            {/* SIDEBAR */}
            <div className="w-60 h-[screen-8rem] hidden fixed md:block">
                <Sidebar postClick={postClick} setSelectedFilters={setSelectedFilters} selectedFilters={selectedFilters}></Sidebar>
            </div>

            {/* MOBILE TOPBAR */}
            <div className="z-30 h-[1in] w-screen m-0 fixed bg-base-100 md:hidden flex flex-row items-center pl-5 pr-5 justify-between">

                    <div className="">
                        <img className="object-contain w-[.7in] h-[.7in] hover:cursor-pointer" src={require(".//Assets/LOGO_DM.png")}  alt={"Logo"} onClick={refreshLogo} />
                    </div>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" dataSlot="icon" className="w-[.4in] h-[.4in] cursor-pointer" onClick={onHamburgerClick}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>

            </div>

            {/* MOBILE FILTERS */}
            <div className={`w-screen h-screen md:hidden duration-[400ms] fixed z-40 bg-base-100 ${
                filters ? "translate-x-0" : "translate-x-[-100vw]"
                }`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" dataSlot="icon" className="w-[.4in] h-[.4in] cursor-pointer mt-[.3in] ml-[85vw]" onClick={onHamburgerClick}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>

                <Sidebar postClick={postClick} setSelectedFilters={setSelectedFilters} selectedFilters={selectedFilters}></Sidebar>
            </div>

            {/* FLYERS SECTION */}
            <div className="z-0 block h-[calc(100vh)] pt-[1in] md:h-screen md:p-0 md:ml-60 overflow-hidden">
                <Flyers handleScroll={handleScroll} selectedFilters={selectedFilters}></Flyers>
                <div className="h-32"></div>
            </div>

            {/* ARROW SCROLL ANIMATION */}
            {/* <div className="fixed bottom-0 w-full left-[calc(50vw+15rem-2rem+.5rem-8rem)] animate-bounce">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={arrowvis}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75" />
                </svg>
            </div> */}

            {/* MORE INFO */}
            
        </div>
    )
}

export default User