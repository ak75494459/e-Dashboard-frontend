import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
export default function SignUp() {

    const[name,setName]=useState("")
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const[confirmPassword,setConfirmPassword]=useState("")
    const navigate = useNavigate();
     
  
  const fetchData= async()=>{
     console.log({name,email,password,confirmPassword})
     let result = await fetch(`${process.env.REACT_APP_BASE_API_URL}/signUp`,{
      method:"post",
      body: JSON.stringify({name,email,password,confirmPassword}),
      headers:{
        'content-Type':'application/json'
      }
     });
     result =await result.json();
     console.warn(result)
       navigate("/")
     localStorage.setItem("user",JSON.stringify(result.result))
     localStorage.setItem("token",JSON.stringify(result.token))
     
  }
   

  return (
    <div>
      <div className="bigSignUpContainer">
     <div className="signUpContainer">
         <div className="container">
             <h1>Sign UP</h1>
             <label htmlFor="name">Enter your name:</label>
             <input type="text" name="name" id="name" placeholder="Enter your name" value={name} onChange={(e)=>{setName(e.target.value)}}/>
             <label htmlFor="email">Enter your E-mail :</label>
             <input type="email" name="email" id="email" placeholder="Enter your E-mail" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
             <label htmlFor="setPassowrd">Set password:</label>
             <input type="password" name="setPassowrd" id="setPassword" placeholder="Set password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
             <label htmlFor="confirmPassword">Confirm password:</label>
             <input type="password" name="confirmPassword" id="confirmPassword" placeholder="confirm password" value={confirmPassword} onChange={(e)=>{setConfirmPassword(e.target.value)}} />
             <button className="btnForSignUp" onClick={fetchData}>Sign Up</button>
             
         </div>
         <a href="login" className='loginbtn'>Login Now</a>
     </div>
      </div>  
    </div>
  )
}
