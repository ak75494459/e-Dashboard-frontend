import React from 'react'
import { Link, useNavigate} from 'react-router-dom'

export default function Navbar() {

    const Navigate = useNavigate();
    const logoutClick=()=>{
      localStorage.clear();
      Navigate("/signup")
    }
    const auth = localStorage.getItem("user")

  return (
    <>
    {
      auth ?
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item mx-1">
          <Link className="nav-link" aria-current="page" to="/">Products</Link>
        </li>
        <li className="nav-item mx-1">
          <Link className="nav-link" to="/addproduct">Add Products</Link>
        </li>
        <li className="nav-item mx-1">
          <Link className="nav-link" to="/profile">Profile</Link>
        </li>
        <li className="nav-item mx-1"  onClick={logoutClick}>
        <Link className="nav-link" to="/signup">Logout({JSON.parse(auth).name})</Link>
        </li>
        </ul>
        </div>
        </div>
        </nav>:
       
        <Link className="nav-link" to="/signup"></Link>
        
      
    
  


      }
      </>
    
  )
}
