import React from "react";

function Input({ label, type = "text", placeholder, ...props }) {

    return (<>
        <div className="flex p-1">
            <div className="flex justify-start w-full">
                {label && <label>{label}</label>}
            </div>
            <div className="flex justify-items-end w-full">
                <input type={type} placeholder={` ${placeholder}`}
                    className={`border-2 border-black rounded-lg ml-2`} {...props} />
            </div>
        </div>
    </>)
}

export default Input
