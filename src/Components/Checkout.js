import React, {useContext} from 'react';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import ShoppingContext from '../context/shopping/shoppingContext';
import Subtotal from './Subtotal';

const Checkout = () => {

    const shoppingContext = useContext (ShoppingContext);
    const { basket, user } = shoppingContext;
    console.log(basket)

  return (
    <div className='checkout'>
        <div className='checkout-left'>
            <img 
                className="checkout-ad"
                src='https://www.wordstream.com/wp-content/uploads/2021/07/banner-ads-examples-aws.jpg'
                alt=''
            />
            <div>
                <h3>Hello, {user?.email} </h3>
                <h2 className='checkout-title'>Your Shopping Basket: </h2>
                {basket.map(item => (<CheckoutProduct 
                                        id={item.id} 
                                        title={item.title} 
                                        image={item.image} 
                                        price={item.price} 
                                        rating={item.rating} 
                                    />))}
                                    
            </div>
            {console.log(basket.item)}        
            </div>
        <div className='checkout-right'>
            <Subtotal/>
        </div>
    </div>
  )
}

export default Checkout;