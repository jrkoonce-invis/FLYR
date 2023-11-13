import React from "react"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

// Pages
import User from "./User"
import Admin from "./Admin";
import Logout from "./Components/Logout";

const App = () => {

    return (
        <Router>
            <Routes>
                <Route path="/admin" element={<Admin />} />
                <Route path="/" element={<User />} />
                <Route path="/logout" element={<Logout />} />
            </Routes>
        </Router>
    )
}

export default App
