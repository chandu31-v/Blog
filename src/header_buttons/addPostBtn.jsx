import React from "react";
import { useNavigate } from "react-router-dom"

function AddPost() {

    const navigate = useNavigate()
    const handleClick = () => {
        navigate("/addPost")
    }

    return (<>
        <div className="hover:bg-white px-4 mx-2 py-1 rounded-xl">
            <button onClick={handleClick}>Add Post</button>
        </div>
    </>)

}

export default AddPost
