import React from 'react';
import './ProductCheckout.css';
import { useStateValue } from './StateProvider';

function ProductCheckout({id, title, image, price, rating}) {
  
  const [{basket}, dispatch] = useStateValue()

  const RemoveProduct = ()=>{
    dispatch({
      type:"REMOVE_PRODUCT",
      id:id
    })
  }
  
  return (
    <div className='checkoutProduct'>
      <img  className='checkoutProduct_image'
       src={image}
       alt=''
      />

      <div className='checkoutProduct_info'>
        <p className='checkoutProduct_title'>{title}</p>
        <p className='checkoutProduct_price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className='checkoutProduct_rating'>
           {Array(rating)
           .fill()
           .map((_, i)=> <p>⭐</p>)}
        </div>

        <button onClick={RemoveProduct}>Remove from basket</button>
        
      </div>

    </div>
  )
}

export default ProductCheckout