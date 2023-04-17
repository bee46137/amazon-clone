import React from 'react';
import './Products.css';
import Product from './Product'

const Products = () => {
  return (
    <>
    <div className="products-row">
        <Product 
          id='1' 
          title='Apple AirPods (2nd Generation) Wireless Earbuds with Lightning Charging Case Included. 
          Over 24 Hours of Battery Life, Effortless Setup. Bluetooth Headphones for iPhone'
          image="https://m.media-amazon.com/images/I/61Zh467pKjL._AC_SX679_.jpg"
          rating = {4}
          price={24.99}
        />
        <Product 
          id='2' 
          title='Apple 2021 10.2-inch iPad (Wi-Fi, 64GB) - Space Gray (9th Generation)'
          image="https://m.media-amazon.com/images/I/61NGnpjoRDL._AC_SX679_.jpg"
          rating ={4}
          price={99.99} 
        />
    </div>
    <div className='products-row'>
    <Product 
          id='3' 
          title='Seagate Portable 2TB External Hard Drive HDD — USB 3.0 for PC, Mac, PlayStation, & 
          Xbox -1-Year Rescue Service (STGX2000400)'
          image="https://m.media-amazon.com/images/I/81tjLksKixL._AC_SX679_.jpg"
          rating ={3}
          price={61.99}
        />
        <Product 
          id='4' 
          title='Logitech MK270 Wireless Keyboard And Mouse Combo For Windows, 2.4 GHz Wireless, 
          Compact Mouse, 8 Multimedia And Shortcut Keys, For PC, Laptop - Black'
          image="https://m.media-amazon.com/images/I/61pUul1oDlL._AC_SX679_.jpg"
          rating ={4}
          price={22.99}
        />
        <Product 
          id='5' 
          title='HP 24mh FHD Monitor - Computer Monitor with 23.8-Inch IPS Display (1080p) - Built-In 
          Speakers and VESA Mounting - Height/Tilt Adjustment for Ergonomic Viewing - HDMI and DisplayPort 
          - (1D0J9AA#ABA)
          '
          image="https://m.media-amazon.com/images/I/91fAU6mxFsL._AC_SX679_.jpg"
          rating ={4}
          price={174.99}
        />
    </div>
    <div className="products-row">
        <Product 
          id='6' 
          title='Logitech C920x HD Pro Webcam, Full HD 1080p/30fps Video Calling, Clear Stereo Audio, 
          HD Light Correction, Works with Skype, Zoom, FaceTime, Hangouts, PC/Mac/Laptop/Macbook/Tablet - 
          Black'
          image="https://m.media-amazon.com/images/I/71iNwni9TsL._AC_SX679_.jpg"
          rating ={5}
          price={70}
        />
        <Product 
          id='7' 
          title='Logitech H390 Wired Headset for PC/Laptop, Stereo Headphones with Noise Cancelling 
          Microphone, USB, In-Line Controls, Works with Chromebook - Black'
          image="https://m.media-amazon.com/images/I/61CqYq+xwNL._AC_SY300_SX300_.jpg"
          rating ={2}
          price={89.99}
        />
    </div>
    </>
  )
}

export default Products;
