import { ListItemSecondaryAction } from '@mui/material';
import React, { useState, useEffect } from 'react';
import './Payment.css';
import ProductCheckout from './ProductCheckout';
import {useStateValue } from './StateProvider';
import { Link, useNavigate } from 'react-router-dom';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import {getTotal} from './reducer';
// import {PaymentElement} from '@stripe/react-stripe-js';
import axios from './axios';


function Payment() {
 const [{basket, user}, dispatch] = useStateValue();

 const navigate = useNavigate();
const stripe = useStripe();
const elements = useElements();

const [succeeded, setSucceeded] = useState(false);
const [processing, setProcessing] = useState("");
const [error, setError] = useState(null);
const [disabled, setDisabled] = useState(true);
const [clientSecret, setClientSecret] = useState();
useEffect(() => {
   //generate the special stripe secret wc allows us to charge customer
   const getClientSecret = async () =>{
     const response = await axios({
       method:'post',
       //stripe expects the total in a currency subunits
       url:`/payments/create?total=${getTotal(basket) * 100}`
     });
     setClientSecret(response.data.clientSecret);
   }
   getClientSecret();
  }, [basket])

const handleSubmit = async(e) => {
//Do all the fancy stripe stuffs here
e.preventDefault();
setProcessing(true);
const payload = await stripe.confirmCardPayment(clientSecret, {
  payment_method:{
    card: elements.getElement(CardElement)
  }
}).then(({paymentInternt}) => {
  //paymentIntent = payment confirmation
  setSucceeded(true);
  setError(null);
  setProcessing(false);
  navigate.replace('/orders');
})
}

const handleChange = (e) => {
//Listen for changes in the CardElement
//and display any errors as the customer types their card details
setDisabled(e.empty);
setError(e.error ? e.error.message :"")

}

const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      color: "#303238",
      fontSize: "16px",
      fontFamily: "sans-serif",
      fontSmoothing: "antialiased",
      "::placeholder": {
        color: "#CFD7DF"
      }
    },
    invalid: {
      color: "#e5424d",
      ":focus": {
        color: "#303238"
      }
    }
  }
};
  return (
    <div className='payment'>
      <div className='payment_container'>
        <h1>
          Checkout (<Link to='/checkout'>
            {basket?.length} items
          </Link>)
        </h1>
        <div className='payment_section'>
          <div className='payment_title'>
            <h3>Delivery Address</h3>
          </div>
          <div className='payment_address'>
            <p>{user?.email}</p>
            <p>123 React Lane</p>
            <p>Los Angeles, CA</p>
          </div>
        </div>

        <div className='payment_section'>
          <div className='payment_title'>
             <h3>Review items and delivery</h3>
          </div>
          <div className='payment_items'>
            {basket.map((item, index) => (
              <ProductCheckout
              key={index}
               id={item.id}
               title={item.title}
               image={item.image}
               price={item.price}
               rating={item.rating}
              
              />
            ))}

          </div>

        </div>

        <div className='payment_section'>
          <div className='payment_title'>
            <h3>Payment Method</h3>
          </div>
          <div className='payment_details'>
            <div className="FormRow">
               <CardElement />
               <p>i am fine</p>
            </div>
          <form onSubmit={handleSubmit}>
            <CardElement onChange={handleChange}/>
             <div className='payment_priceContainer'>
                <CurrencyFormat
                renderText={(value)=>(
                  <>
                    <h3>Order Total: {value}</h3>
                  </>
                )}
                decimalScale={2}
                value={getTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
                
                />
                <button disabled={processing || disabled || succeeded}>
                   <span>{processing ? <p>Processing</p>: 'Buy Now'}</span>
                </button>
             </div>
             {error && <div>{error}</div>}
          </form>
          </div>

        </div>

      </div>

    </div>
  )
}

export default Payment