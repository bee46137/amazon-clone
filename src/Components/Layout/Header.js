import React from 'react';
import {useContext} from'react';
import { Link } from 'react-router-dom'
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import ShoppingContext from '../../context/shopping/shoppingContext';
import { auth } from '../../firebase'


const Header = () => {

    const shoppingContext = useContext(ShoppingContext);
    const { basket, user } = shoppingContext;

    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }
            return (    
                <header className='header'>
                <Link to='/Home'>
                    <img  
                    className='header-logo' 
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"            
                    alt="Amazon Logo" 
                    />
                </Link>

                <div className="header-search">
                    <input className="header-input" type="text" placeholder="Search Amazon..."/>
                    <SearchIcon className="search_icon" />
                </div> 

                <nav className="header-nav">
                    <Link to={!user && '/Login'}>
                        <div className='header-option' onClick={handleAuthentication}>
                            <span className="header-option-1">Hello {!user ? 'Guest' : user.email}</span>
                            <span className='header=option-2'>{user ? 'Sign Out' : 'Sign In'}</span>
                        </div>
                    </Link>
                    <Link to="/ReturnsAndOrders">
                        <div className='header-option'>
                            <span className="header-option-1">Returns</span>
                            <span className='header=option-2'>& Orders</span>
                        </div>
                    </Link>
                    
                        <div className='header-option'>
                            <span className="header-option-1">Your</span>
                            <span className='header=option-2'>Prime</span>
                        </div>

                    <Link to={user !==null? '/Checkout' : '/Login'}>
                        <div className='header-option-basket'>
                            <ShoppingBasketIcon className='shopping-icon'/>
                            <span className='header-option-2 header-basket-count'>{basket?.length}</span>
                        </div>
                    </Link>
                </nav>
                </header>

  )
};

export default Header;