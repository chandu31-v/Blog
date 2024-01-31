import React from "react";
import { useFormik } from "formik";
import { validate } from "./yupValidate"
import authService from "../../webapp/account";

function Login() {

    const createFormik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
            //confirmPassword: ""
        },
        validationSchema: validate,
        onSubmit: (values, action) => {
            try {
                //console.log(values.name,values.email,values.password)
                authService.createAccount(values.name,values.email,values.password)
                action.resetForm()
            } catch (err) {
                throw err
            }
        }
    })

    return (<>
        <div className="flex flex-col items-center">
            <h1>Sign Up</h1>
            {/* Forms */}
            <div className=" border-2 border-gray-500 rounded-3xl p-10">
                <form onSubmit={createFormik.handleSubmit}>
                    {/* Name */}
                    <div className="flex m-1">
                        <h3 className="">Name:</h3>
                        <div className="flex justify-end w-full">
                            <input
                                type="text" name="name"
                                className="border-2 border-black rounded-lg ml-2"
                                value={createFormik.values.name}
                                onChange={createFormik.handleChange} />
                        </div>
                    </div>

                    {/* Email */}
                    <div className="flex m-1">
                        <h3 className="">Email:</h3>
                        <div className="flex justify-end w-full">
                            <input
                                type="email" name="email"
                                className="border-2 border-black rounded-lg ml-2"
                                value={createFormik.values.email}
                                onChange={createFormik.handleChange} />
                        </div>
                    </div>

                    {/* Password */}
                    <div className="flex m-1">
                        <h3 className="">Password:</h3>
                        <div className="flex justify-end w-full">
                            <input
                                type="password" name="password"
                                className="border-2 border-black rounded-lg ml-2"
                                value={createFormik.values.password}
                                onChange={createFormik.handleChange} />
                        </div>
                    </div>

                    <div className="flex m-1">
                        {/* <h3 className="">Confirm Password:</h3>
                    <div className="flex justify-end w-full">
                        <input
                            type="text" name="name"
                            className="border-2 border-black rounded-lg ml-2"
                            value={createFormik.values.name}
                            onChange={createFormik.handleChange} />
                    </div> */}
                    </div>

                    <div className="flex justify-center">
                        <button type="submit" className="border-2 border-black px-2 rounded-md">Login</button>
                    </div>
                </form>

            </div>
        </div>
    </>)
}

export default Login