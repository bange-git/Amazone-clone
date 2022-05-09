import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Login.css'

function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


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
              <input type='text' value={email} 
              onChange={(e)=>setEmail(e.target.value)}
              />
              <h5>Password</h5>
              <input type='password' value={password}
              onChange={(e)=>setPassword(e.target.value)}
              />

              <button className='login_signInButton'>Sign In</button>
           </form>

           <p className='login_terms'>By Signing In, you agree to Amazon's 
             fake clone Conditions of Use and Privacy Notice.</p>

          <button className='login_registerButton'>Create an Amazon account</button>
      </div>

    </div>
  )
}

export default Login