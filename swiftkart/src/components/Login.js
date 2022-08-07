import React from 'react'
import './login.css'
import { Link } from "react-router-dom";

function Login() {
  // function gomain(){
  //   navigator 
  // }

  
   
  return (
    <div>
      <div className='tdiv'>

      </div>
      <div className='bdiv'>
      </div>
      <div className='box'>
            {/* <img   src='assets\cartlogo.jpg' alt='logo image'/> */}
        <div className='logo'>
            {/* <img  className='logo' src='../assets/cartlogo.jpg' alt='logo'/> */}

        </div>
        <div  className='row'>
        <form>
           <label >USER NAME</label>
           <input  className='username'/><br></br>
           <label>PASSWORD</label>
           <input className='passed'/>
           <Link to='/main'>
             <button className='loginbutton' >Login</button>
           </Link>
        </form>

        </div>
      </div>
      
    </div>
  )
}

export default Login
