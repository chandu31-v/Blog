import React from "react";
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux";
import { userLoggedOut } from "../redux/slice/slice";
import authService from "../../appWrite/account";

function Logout() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleClick = () => {
        authService.Logout()
        dispatch(userLoggedOut())
        navigate("/")
    }

    return (<>
        <div className="hover:bg-white px-4 mx-2 py-1 rounded-xl">
            <button onClick={handleClick}>Logout</button>
        </div>
    </>)

}

export default Logout
