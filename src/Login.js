import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
function Login() {
    const[data,setData]=useState({
        username:'',
        email:'',
        password:'',
        confirmpassword:'',
    })
    const{username,email,password,confirmpassword}=data;
    const changeHandler= e =>{
        setData({...data,[e.target.name]:[e.target.value]})
    }
    const submitHandler= e=>{
        e.preventDefault();
        if(password===confirmpassword){
            console.log(data);
        }
       else{
        console.log("passwords are not matched")
       }
    }
    return (
        <div className='login-container'>
           
            <form onSubmit={submitHandler} className='form'>
                <h2>Log-in here</h2>
                <input type='text' name='username'placeholder='username' value={username} onChange={changeHandler} /><br/>
                <input type='email' name='email'placeholder='email' value={email}onChange={changeHandler} /><br/>
                <input type='password' name='password'placeholder='password' value={password} onChange={changeHandler} /><br/>
                <button type='login'>Login</button>
            </form>
        </div>  
    )
}

export default Login;