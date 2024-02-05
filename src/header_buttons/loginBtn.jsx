import React from "react";
import { useNavigate } from "react-router-dom"
import { userLoggedIn } from "../redux/slice/slice";
import { useDispatch } from "react-redux";

function Login() {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleClick = () => {
        navigate("/login")
        //dispatch(userLoggedIn())
    }

    return (<>
        <div className="hover:bg-white px-4 mx-2 py-1 rounded-xl">
            <button onClick={handleClick}>Login</button>
        </div>
    </>)

}

export default Login
