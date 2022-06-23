// eslint-disable-next-line  
import React, {useEffect} from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Checkout from './Checkout'
import Login from './Login';
import { auth } from './firebase';
import {useStateValue} from './StateProvider';
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe('pk_test_51Ky56nFpUDQpM74LszyICC1OrSoRMC9AhNWlnYAQTzh9bHx0FNLHKMlcygAIYVxMCXIYMimqlZI5zStp9MAmlSVx00N7bgqLtj')


function App() {
const [{}, dispatch] = useStateValue();

  useEffect(() => {
      //Will only run once the app componet loads...
    auth.onAuthStateChanged(authUser =>{
      console.log('THE USER IS >>>', authUser);
      if(authUser){
        //the user just logged in/ was logged in
        dispatch({
          type:'SET_USER',
          user:authUser
        })
      }else{
        //the user is logged out
        dispatch({
          type:'SET_USER',
          user: null
        })
      }
    })
   
  }, []);

 

  return (
   <Router>
    <div className="App">
    
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/checkout" element={<><Header /><Checkout /></>}></Route>
        <Route path="/payment" element={<Elements stripe={promise}><Payment /></Elements>}></Route>
        <Route path='/' element={<><Header /><Home /></>}></Route>
      </Routes>

    </div>
    </Router>
    
  );
}

export default App;
