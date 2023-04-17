import React from 'react';
import './Home.css';
import Products from './Products';

const Home = () => {
  return (
    <div className="home">
        <div className="home-container">
          <img className="home-image"
          src="https://m.media-amazon.com/images/I/61um60VOoeL._SX3000_.jpg"
          alt="easter basket filled with easter eggs"
          />
          <Products />
        </div>
    </div>
  )
}

export default Home;