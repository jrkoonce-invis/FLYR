import React from "react"
import { useNavigate } from "react-router-dom"

// components
import Flyers from "./Components/AdminFlyers"

const Admin = () => {
    const navigate = useNavigate()

    const logout = () => {
        navigate("/logout")
    }

    return (
        <div>
            <button onClick={logout}>LOGOUT</button>
            <Flyers />
        </div>
    )
}

export default Admin