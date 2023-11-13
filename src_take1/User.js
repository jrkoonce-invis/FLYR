import React from "react"

// components
import Sidebar from "./Components/Sidebar";
import Flyers from "./Components/Flyers";

// css
import "./CSS/main.css"

const User = () => {
    return (
        <div className="flex-col">
            <div className="bg-pal-dark h-32 w-screen grid items-center fixed">
                <div className="left-0 w-60 grid justify-items-center">
                    <img className="w-24" src={require("./Assets/LOGO_DM.png")}  alt={"Logo"}/>
                </div>
            </div>
            <div className="flex-row pt-32">
                <Sidebar></Sidebar>
                <div className="w-auto h-screen ml-60">
                    <Flyers></Flyers>
                </div>
            </div>
        </div>
    )
}

export default User