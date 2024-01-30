import React from "react";
import Home from "./homeBtn";
import AllPost from "./allPostBtn";
import AddPost from "./addPostBtn"
import Logout from "./logoutBtn";

function Header() {


    return (<>
        <div className="flex bg-slate-300 p-1">
            <div className="w-20">
                <img src={null} alt="logo" />
            </div>
            <div className="flex w-full justify-end">
                <Home />
                <AllPost />
                <AddPost />
                <Logout />
            </div>

        </div>
    </>)

}

export default Header
