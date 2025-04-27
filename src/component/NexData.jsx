import React from 'react'
import { useRef, useState } from 'react'
function NexData() {
    const email = useRef();
    const pass = useRef();
    const [formError, setForm] = useState({})

   const loginForm = () => {
    const emailValue = email.current.value;
    const password = pass.current.value;
     const updateVal = {
      email: emailValue,
      pass: password
     }

    const erros = formValidate(updateVal);
     setForm(erros);
    
     if(Object.keys(erros).length === 0) {
     
     }else {
      console.log('not');
     }
   }

   const formValidate = (val) => {
    const errors = {};
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i;

    if(!val.email) {
      errors.emailErr = "Enter Email!!!";
    }else if(!regex.test(val.email)) {
      errors.emailErr = "Not a Emial Formate!!!"
    }

    if(!val.pass) {
      errors.passErr = "Enter Password!!!";
    }else if(val.pass.length < 8) {
      errors.passErr = "Password should be 8 characters long!!!"
    }
  //  console.log(errors);
    return errors;

   }
  return (
    <div>
        <form >
    <div>
      <input type="text" placeholder='Enter Email or username' ref={email} />
      <p>{formError.emailErr}</p>
      </div>
      <div>
      <input type="text" placeholder="Enter Password" ref={pass}/>
     <p>{formError.passErr}</p>
      </div>
      <button type='button' className='btn btn-primary' onClick={ loginForm } >Log In</button>
  </form></div>
  )
}

export default NexData