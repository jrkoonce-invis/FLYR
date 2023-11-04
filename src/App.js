import React from "react"

// components
import Sidebar from "./Components/Sidebar";
import Flyers from "./Components/Flyers";

// css
import "./CSS/App.css"

const App = () => {
    return (
        <div className="content">
            <Sidebar className="sidebar"></Sidebar>
            <Flyers className="flyers"></Flyers>
        </div>
    )
}

export default App
