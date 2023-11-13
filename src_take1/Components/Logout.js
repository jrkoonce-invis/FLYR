import React from "react"

const Logout = () => {

    // This will instantly refresh the page which will complete the logout
    // This is neccessary because react-router changes the route to "/logout"
    // without talking to the backend

    // This fix works on build but not when the server runs because the server
    // and the frontend are on different ports. Should work in production.
    React.useEffect(() => {
        window.location.reload();
      }, []);

    return (
        <div></div>
    )
}

export default Logout
