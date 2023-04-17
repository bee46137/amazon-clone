import React from 'react';
import './NotFound.css';
import {Link} from 'react-router-dom';

const NotFound = () => {
  return (
    <Link to='/' >   
        <div className="not-found">
        
            <img 
            src='https://images-na.ssl-images-amazon.com/images/G/01/error/title._TTD_.png'
            alt='page not found'
            />
            <img
            src='https://images-na.ssl-images-amazon.com/images/G/01/error/80._TTD_.jpg'
            alt='not found'
            /> 
        
        </div>       
    </Link>    
  )
}

export default NotFound