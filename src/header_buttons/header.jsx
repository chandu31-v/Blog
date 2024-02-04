import React from "react";
import Home from "./homeBtn";
import AllPost from "./allPostBtn";
import AddPost from "./addPostBtn";
import Logout from "./logoutBtn";
import Login from "./loginBtn"
import { useSelector } from "react-redux";

function Header() {

    const loginState = useSelector(state=>state.loginState)
    console.log(loginState)

    return (<>
        <div className="flex bg-slate-300 p-1">
            <div className="w-20">
                <img src={null} alt="logo" />
            </div>
            <div className="flex w-full justify-end">
                <Home />
                <AllPost />
                <AddPost />
                { loginState ? <Logout/> : <Login/>}
            </div>

        </div>
    </>)

}

export default Header
