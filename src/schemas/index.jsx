import * as Yup from "yup";

export const registerSchema =  Yup.object({
    name: Yup.string().min(2).max(25).required("Please Enter Your Name!!!"),
    email: Yup.string().email().required("Please Enter Email !!!"),
    number: Yup.number().min(8).required("Please Enter Number !!!"),
    password: Yup.string().min(8).max(30).required("Please Enter Password !!!"),
    confirmPassword: Yup.string().required("Please Enter confirm Password !!!").oneOf([Yup.ref("password"), null], "Password must match!!!")
});

export const loginSchema = Yup.object({
    email: Yup.string().email().required("Please Enter email !!!"),
    password: Yup.string().min(8).required("Please Enter Password !!!")
})