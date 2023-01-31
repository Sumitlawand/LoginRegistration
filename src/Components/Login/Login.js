import React from "react";
import "./Login.css";
import { useState } from "react";
import { getValue } from "@testing-library/user-event/dist/utils";
import axios from "axios";
import { useHistory } from "react-router-dom";



const Login = ({setLoginUser}) => {

    const [log, setLog ]=useState({

        name:"",
        password:"",
    })

    const History = useHistory()

    


     const handelchange = (e) =>{
       const{name ,value} = e.target
       setLog({
        ...log,
        [name] : value
       })
     }


      const login = () =>{
         axios.post("http://localhost:9002/login", log)
         .than(res =>alert("Sussfuily loged in"))
        //  setLoginUser(res.data.user)
         History.push("/")

      }




    return(
         
        <div className="login">
         
            <img src='./images/logo.png' alt=''></img>
            <h1>Login</h1>
        <input type='email'name=''  vale='' onChange={handelchange} placeholder="Enter your Email Address"></input>
        <br />
        <input type='password'name='' vale='' onChange={handelchange}  placeholder="Enter your Password"></input>
        <br />  <br />
        <button className="button" onClick={login} type="Submit">Login </button>  <br />
        or  <br />
        <button className="button" type="Submit" onClick={() => History.push("/Register") }>Register </button>
        
        </div>
    )

}

export default Login;