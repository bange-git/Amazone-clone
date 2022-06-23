import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';
import ProductCheckout from './ProductCheckout'
import { useStateValue } from './StateProvider';
import FlipMove from 'react-flip-move';
 

function Checkout() {
  const [{basket, user}, dispatch] = useStateValue();
  return (
    <div className='checkout'>
      <div className='checkout_left'>
        {/* <img
        className='checkout_add'
        src='https://images-eu.ssl-images-amazon.com/images/G/31/gateway-2015/amazonshop/Desktop_Banner_Recruitment_Website.jpg'
        alt=''
        /> */}
        <div>
           <h1> Review Your Order</h1>
        </div>

        <div>
          <h5>Hello, {user?.email}</h5>
          <h2 className='checkout_title'>Your Shopping Basket is ready</h2>
          <hr className='line'/>
        {/*shopping basket*/}
        {basket.map((item, index)=>
        <ProductCheckout 
        key={index}
        id={item.id}
        title={item.title}
        image={item.image}
        price={item.price}
        rating={item.rating}
        />
        )}
        </div>

      </div>

      <div className='checkout_right'>
        <Subtotal/>

      </div>

    </div>
  )
}

export default Checkout