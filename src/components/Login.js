import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../css/login.css'

export default function Login() {
    const navigate = useNavigate();
    useEffect(()=>{
        document.body.style.backgroundColor ="aliceblue"
        return ()=>{
        document.body.style.backgroundColor =""
        };
     },[]);

     const [email,setEmail] = useState("")
     const [password,setPassowrd] = useState("")

     const fetchData=async()=>{
        console.log({email,password})
        let result = await fetch(`${process.env.REACT_APP_BASE_API_URL}/login`,{
            method:"post",
            body: JSON.stringify({email,password}),
            headers:{
              'content-Type':'application/json'
            }
           });
           result =await result.json();
           console.warn(result)
            if(result.token){
                localStorage.setItem("user",JSON.stringify(result.User));
                localStorage.setItem("token",JSON.stringify(result.token));

                navigate("/")
            }else{
                alert("please put correct email and password")
            }
     }

  return (
    <div className='container-sm my-5'>
      <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label" >Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={(e)=>{setPassowrd(e.target.value)}} />
  </div>
  <button type="submit" className="btn btn-primary" onClick={fetchData}>Submit</button>
    </div>
  )
}
