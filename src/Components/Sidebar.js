import React from "react"

// components
import PostButton from "./PostButton"

// css
import "../CSS/Sidebar.css"

const Sidebar = ({className}) => {
    return (
        <div className={className}>
            <img className="logo" src={require("../Assets/LOGO_DM.png")}  alt={"Logo"}/>
            <div className="filters">
                <p>Filter 1</p>
                <p>Filter 2</p>
                <p>Filter 3</p>
                <PostButton className="postButton"></PostButton>
            </div>
        </div>
    )
}

export default Sidebar