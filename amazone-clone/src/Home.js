import React from 'react';
import Product from './Product'
import './Home.css'

function Home() {
  return (
    <div className='home'>
      <div className='home_container'>
        <img
        src='https://m.media-amazon.com/images/I/61N83xtyr6L._SX3000_.jpg'
        alt='Home page'
        className='home_image'
        />

        <div className='home_row'>
          <Product 
          id={1}
          title="the best selling healthy product chain"
           price={29.99}
           image="https://m.media-amazon.com/images/I/71MtgeQPRtS._AC_UL640_FMwebp_QL65_.jpg"
          rating={5}
          />
          <Product
          id={2}
           title="the best selling healthy product chain"
           price={29.99}
          image="https://images-na.ssl-images-amazon.com/images/I/811aUa8DcxL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
          rating={4}
          />
        </div>

        <div className='home_row'>
           <Product
          id={3}
           title="Showing results for activity tracker and smart watches"
           price={30.99}
          image="https://images-na.ssl-images-amazon.com/images/I/811aUa8DcxL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
          rating={3}
           />
           <Product
            id={4}
           title="Kindle Oasis – Now with adjustable warm light – Ad-Supported"
           price={14.99}
           image="https://m.media-amazon.com/images/I/81S-xWVH8kL._AC_SY200_.jpg"
          rating={5}
           />
           <Product 
            id={5}
           title="Apple iPhone 12 Pro Max, 128GB, Pacific Blue - Unlocked (Renewed Premium)"
           price={13.99}
          image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_2x._SY608_CB432774322_.jpg"
          rating={4}
           />
        </div>

        <div className='home_row'>
          <Product  id={6}
           title="Kindle Oasis – Now with adjustable warm light – Ad-Supported"
           price={10.99}
           image="https://m.media-amazon.com/images/I/61ekV91t9qL._AC_SX679_.jpg"
          rating={5}/>
        </div>


      </div>


    </div>
  )
}

export default Home