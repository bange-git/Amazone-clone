import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
//import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';


function Header() {
  const [{basket, user}, dispatch] = useStateValue([]);
 
  const handleAuthentication = () => {
    if(user){
      auth.signOut();
    }
  }
 
  return (
    <div className='header'>
      <Link to={!user ? "/login" : "/"}>
        <img 
         className='header_logo'
         src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
         alt='Amazon Logo'
        />
        </Link>
      <div className='header_search'>
        <input
        className='header_searchInput'
        type='text'
        />
        <SearchIcon className='header_searchIcon'/>
      </div>

      <div className='header_nav'>
      <Link to='/login'>
      <div onClick={handleAuthentication} className='header_option'>
        <span className='header_optionLineOne'>
           Hello {!user ? 'Guest' : user?.email}
        </span> 
        <span className='header_optionLineTwo'>
          {user ? 'Sign Out':'Sign In'}
        </span> 
      </div>
      </Link>
      <div className='header_option'>
        <span className='header_optionLineOne'>
           Returns
        </span> 
        <span className='header_optionLineTwo'>
           Orders
        </span> 
      </div>
      <div className='header_option'>
        <span className='header_optionLineOne'>
           Your
        </span> 
        <span className='header_optionLineTwo'>
           Prime
        </span> 
      </div>
      <Link to='/checkout'>
      <div className='header_optionbasket'>
        <ShoppingCartIcon />
        <span className='header_optionLineTwo basket_count'>{basket?.length}</span> 
        
      </div>
      </Link>
      </div>
        

    </div>
  )
}

export default Header