import React from "react";
import { useNavigate } from "react-router-dom"

function Logout() {

    const navigate = useNavigate()
    const handleClick = () => {
        navigate("/logout")
    }

    return (<>
        <div className="hover:bg-white px-4 mx-2 py-1 rounded-xl">
            <button onClick={handleClick}>Logout</button>
        </div>
    </>)

}

export default Logout
