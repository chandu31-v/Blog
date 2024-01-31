import * as Yup from "yup"

export const validate = Yup.object().shape({
    name:Yup.string().required("Enter name"),
    email:Yup.string().email("Invalid email").required("Enter email"),
    password:Yup.string().min(6,"minimum 6 char").required("Password required"),
    //confirmPassword:Yup.string().min(6,"minimum 6 char").required("")
})
