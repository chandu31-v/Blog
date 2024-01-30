import React from "react";
import { useNavigate } from "react-router-dom"

function Home() {

    const navigate = useNavigate()
    const handleClick = () => {
        navigate("/")
    }

    return (<>
        <div className="hover:bg-white px-4 mx-2 py-1 rounded-xl">
            <button onClick={handleClick}>Home</button>
        </div>
    </>)

}

export default Home
