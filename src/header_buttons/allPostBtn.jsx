import React from "react";
import { useNavigate } from "react-router-dom"

function AllPost() {

    const navigate = useNavigate()
    const handleClick = () => {
        navigate("/allPost")
    }

    return (<>
        <div className="hover:bg-white px-4 mx-2 py-1 rounded-xl">
            <button onClick={handleClick}>All Post</button>
        </div>
    </>)

}

export default AllPost
