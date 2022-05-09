import React from 'react';
import {Link} from 'react-router-dom';
import './Login.css'

function Login() {
  return (
    <div className='login'>
      <Link to='/'>
        <img 
        className='login_logo'
        alt=''
        src='https://cdn.freebiesupply.com/images/large/2x/amazon-logo-transparent.png'
        />
      </Link>
      <div className='login_container'>
           <h1>Sign In</h1>
           <form>
              <h5>Email</h5>
              <input type='text' />
              <h5>Password</h5>
              <input type='password'/>

              <button>Sign In</button>
           </form>

           <p>By Signing In, you agree to Amazon's 
             Conditions of Use and Privacy Notice.</p>
      </div>

    </div>
  )
}

export default Login