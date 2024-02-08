import React from "react";
import Input from "./input";

function SignIn() {

    return (<>
        <div className="flex flex-col justify-center items-center w-screen h-screen">
            <div className="border-2 border-black p-16 rounded-xl">
                <label className="flex justify-center w-full">Signin</label>
                <Input placeholder={"Name"} type={"text"} label={"Name"} />
                <Input placeholder={"Email"} type={"email"} label={"Email"} />
                <Input placeholder={"Password"} type={"Password"} label={"Password"} />
                <Input placeholder={"Confirm"} type={"Password"} label={"Confirm"} />
                <div className="flex justify-center w-full mt-4">
                    <input type="submit" className="border-2 border-black p-1 rounded-lg" />
                </div>
            </div>
        </div>
    </>)

}

export default SignIn
