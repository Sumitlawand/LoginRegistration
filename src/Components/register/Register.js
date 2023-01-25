import React from "react";
import { useState } from "react";
import "./Register.css";
import axios from "axios";


const Register=()=>{

    const [user , setUser] = useState({
      name:"",
      email:"",
      password:"",

      reEnterpassword:"",


    });

    const handelchange = (e)=>{
     const {name, value} = e.target
     setUser({
        ...user,
        [name] : value
     })
    }

    const register=()=>{
        const {name, email, password, reEnterpassword} = user
        if(name && email && password && (password === reEnterpassword)){
          
            axios.post("http://localhost:9002/register", user)
            .then( reg => console.log())
        }else{
            alert("envalid Input")
        }
       

    }


    return(

        <div className="register">
        <img src='./images/logo.png' alt=''></img>
        <h1>Register</h1>
        <input type='text' name="name" value={user.name} placeholder="Your Name" onChange={handelchange}></input>
    <br />
    <input type='email' name="email" value={user.email} placeholder="Your Email" onChange={handelchange}></input>
    <br />
    <input type='password' name="password" value={user.password} placeholder="Your Password" onChange={handelchange}></input>
    <br /> 
    <input type='password' name="reEnterpassword" value={user.reEnterpassword} placeholder="Re-enter Password" onChange={handelchange}></input>
    <br />  <br />
    <button className="button" type="Submit" onClick={ register }>Register </button>  <br />
    or  <br />
    <button className="button" type="Submit">Login </button>
        
    </div>
    )
}

export default Register;
