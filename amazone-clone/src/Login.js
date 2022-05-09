import React, {useState} from 'react';
import {Link, useNavigate } from 'react-router-dom';
import './Login.css';
import {auth} from './firebase.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"


function Login() {
  const navigate= useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = async(e) =>{
     e.preventDefault()
     try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      console.log(userCredential.user)
      navigate('/');
      }
    catch(error){
      console.log(error)
    }
  };

  const register = async(e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      console.log(userCredential.user)
      navigate('/');
      }
    catch(error){
      console.log(error)
    }
    // auth.createUserWithEmailAndPassword(email, password)
    // .then((auth) => {
    //   //it is successfully created a new user with email & password
    //   console.log(auth);
    // }).catch(error => alert(error.message))
  }

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

              <button onClick={signIn} className='login_signInButton'>Sign In</button>
           </form>

           <p className='login_terms'>By Signing In, you agree to Amazon's 
             fake clone Conditions of Use and Privacy Notice.</p>

          <button onClick={register} className='login_registerButton'>Create an Amazon account</button>
      </div>

    </div>
  )
}

export default Login