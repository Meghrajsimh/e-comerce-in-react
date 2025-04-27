import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { loginAction } from '../store/store';
import {  useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { loginSchema } from '../schemas';


export const Login = () => {
  const userName = useRef();
  const userPass = useRef();

  const [formError, setFormError] =  useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState(false);

  const loginUser = (e) => {
    e.preventDefault();
    const name = userName.current.value;
    const pass = userPass.current.value;   
  
    const updateVal =  {
      email: name,
      pass : pass,
    }
  
    setFormError(formValidate(updateVal));
     console.log(formError);
      if(Object.keys(formError).length === 0) {
        console.log('hi')

      const useData = JSON.parse(localStorage.getItem("userRegisterData")) || [];
      const findUser = useData.filter((ele)=> ele.email === name && ele.password === pass );
      
      if(findUser.length > 0){
        sessionStorage.setItem("isLog", JSON.stringify(1));
        sessionStorage.setItem("userInfo", JSON.stringify(findUser[0].id))
        dispatch(loginAction.isLog());
        navigate("/");
        setError(false)
      }else {
        setError(true);
      }
    }

  }




  const formValidate =  (val) => {
    const errors = {};
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i;

    if(!val.email) {
      errors.emailErr =  "Email is Required!!!";
    }else if(!regex.test(val.email)) {
      errors.emailErr = "Not a email formate!!!";
    }
    
    if(!val.pass) {
      
      errors.passErr = "Password is required!!"
    }else if(val.pass.length < 8) {
      errors.passErr = "Password must be 8 character long!!"
    }
    return errors;
  }

 
  return (
    <div className="login-formContainer">
       {error ? (<p className='main-error'>User name and Password is wrong </p>): null}
        <h1>Log In</h1>
        <form >
          <div>
            <input type="text" placeholder='Enter Email' ref={userName}/>
            <p>{formError.emailErr}</p>
            </div>
            <div>
            <input type="text" placeholder="Enter Password" ref={userPass} />
            <p>{formError.passErr}</p>
            </div>
            <button type='button' className='btn btn-primary' onClick={loginUser}>Log In</button>
        </form>
    </div>
  )
}
// const initailVal = {
//   email: "",
//   password: ""
// }
// export const Login = () => {

//   const dispatch = useDispatch();
//     const navigate = useNavigate();
//   const {values, errors, touched, handleChange, handleSubmit, handleBlur} = useFormik({
//     initialValues: initailVal,
//     validationSchema:loginSchema,
//     onSubmit: (val) => {
//       const useData = JSON.parse(localStorage.getItem("userRegisterData")) || [];
//             const findUser = useData.filter((ele)=> ele.email === val.email && ele.password === val.password );
//             if(findUser.length > 0){
//               sessionStorage.setItem("isLog", JSON.stringify(1));
//               sessionStorage.setItem("userInfo", JSON.stringify(findUser[0].id))
//               dispatch(loginAction.isLog());
//               navigate("/");
//             }else{
//               console.log('p')
//             }
//     }
//   })
// return (
//   <div className="login-formContainer">
//       <h1>Log In</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <input type="text" placeholder='Enter Email or username' name="email"  value={values.email} onChange={handleChange} onBlur={handleBlur}/>
//           { errors.email && touched.email ?   <p>{errors.email}</p> : null}
//           </div>
//           <div>
//           <input type="text" placeholder="Enter Password"  name="password" value={values.password} onChange={handleChange} onBlur={handleBlur}/>
//           { errors.password && touched.password ?   <p>{errors.password}</p> : null }
//           </div>
//           <button type='submit' className='btn btn-primary'  >Log In</button>
//       </form>
//   </div>
// )
// }
