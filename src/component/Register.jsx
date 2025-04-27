import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { registerAction } from "../store/store";
import { useNavigate } from "react-router-dom";
import { Formik, useFormik } from "formik";
import { registerSchema } from "../schemas";

// function Register() {

//     const navigate = useNavigate();
//     const dispatch = useDispatch();
//     const userName = useRef();
//     const userEmail = useRef();
//     const userPass = useRef();
//     const userNumber = useRef();
//     const userConfirmPass = useRef();
//     const [formError , setFromError] = useState({});

//     const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

//     function generateString(length) {
//       let result = '';
//       const charactersLength = characters.length;
//       for (let i = 0; i < length; i++) {
//         result += characters.charAt(Math.floor(Math.random() * charactersLength));
//       }
//       return result;
//     }

//     const userRegister = (e) => {
//       e.preventDefault();
//       const userVal = {
//         userName : userName.current.value,
//         userEmail : userEmail.current.value,
//         userPass: userPass.current.value,
//         userNumber: userNumber.current.value,
//         userConfirmPass : userConfirmPass.current.value,
//       }
//       setFromError(fromValidate(userVal));
//     if( Object.keys(formError).length === undefined ) {

//       dispatch(registerAction.register({
//         name: userName.current.value,
//         email: userEmail.current.value,
//         password: userPass.current.value,
//         number: userNumber.current.value,
//         id: generateString(5)
//       }));
//      navigate("/login");
//     }

//     }

//     const fromValidate = (val) => {
//       const error = {};
//        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i;

//        if(!val.userName) {
//         error.nameError = "Name  is required !!!"
//        }

//        if(!val.userEmail) {
//         error.emailError = "Email is required !!!"
//        }else if(!regex.test(val.userEmail)) {
//       error.emailError = "Not a email formate!!!";
//     }

//        if(!val.userPass) {
//         error.passError = "Password is required !!!"
//        }else if(val.userPass.length < 8) {
//         error.passError = "Password must be 8 character long!!"
//       }
//         console.log(isNaN(val.userNumber)    ,val.userNumber);
//        if(!val.userNumber) {
//         error.numberError = "Number is requiredv !!!!"
//       }else if(isNaN(val.userNumber)) {
//         error.numberError ="Only Numbers !!!"
//       }else if(val.userNumber.length < 10) {
//         console.log('h')
//         error.numberError = "Number must be 10 digits !!!"
//        }

//        if(val.userConfirmPass !== val.userPass) {
//         error.confirmPassError = "Password is not match !!!"
//        }
//       return error;
//     }

//   return (
//     <div className="login-formContainer">
//     <h1>Regiser</h1>
//     <form >
//       <div>
//         <input type="text" placeholder='Enter Name' ref={userName} name='name'/>
//          <p>{formError.nameError}</p>
//       </div>
//       <div>
//         <input type="text" placeholder='Enter Phone Number' ref={userNumber} name='number' />
//          <p>{formError.numberError}</p>
//       </div>
//       <div>
//         <input type="text" placeholder='Enter Email' ref={userEmail} name='email'/>
//          <p>{formError.emailError}</p>
//       </div>
//       <div>
//         <input type="text" placeholder="Enter Password" ref={userPass} name='password' />
//           <p>{formError.passError}</p>
//       </div>
//       <div>
//         <input type="text" placeholder="Enter Confirm Password" ref={userConfirmPass} name='confirmPassword' />
//           <p>{formError.confirmPassError}</p>
//       </div>

//         <button className='btn btn-primary' onClick={ userRegister }>Register</button>
//     </form>
// </div>
//   )
// }

// export default Register

const initialVal = {
  name: "",
  number: "",
  email: "",
  password: "",
  confirmPassword: "",
};
function Register() {
  const navigate = useNavigate();
      const dispatch = useDispatch();

      const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    function generateString(length) {
      let result = "";
      const charactersLength = characters.length;
      for (let i = 0; i < length; i++) {
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        );
      }
      return result;
    }
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialVal,
    validationSchema: registerSchema,
    onSubmit: (values) => {

      dispatch(registerAction.register({
              name: values.name,
              email: values.email,
              password: values.password,
              number: values.number,
              id: generateString(5)
            }));
           navigate("/login");

     
    },
  });
  return (
    <div className="login-formContainer">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Enter Name"
            name="name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          { errors.name && touched.name ?  <p>{errors.name}</p> : null}
         
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter Phone Number"
            name="number"
            value={values.number}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          { errors.number && touched.number ?   <p>{errors.number}</p> : null}
         
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter Email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          { errors.email && touched.email ?   <p>{errors.email}</p> : null}
        
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter Password"
            name="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          { errors.password && touched.password ?   <p>{errors.password}</p> : null}
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter Confirm Password"
            name="confirmPassword"
            value={values.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
          />
           { errors.confirmPassword && touched.confirmPassword ?   <p>{errors.confirmPassword}</p> : null}
              </div>

        <button className="btn btn-primary" type="submit"> Register</button>
      </form>
    </div>
  );
}

export default Register;
