import React, {useContext} from 'react'
import ShoppingContext from '../context/shopping/shoppingContext';
import './CheckoutProduct.css';

const CheckoutProduct = ({ id, image, title, rating, price, hideButton }) => {

  const shoppingContext = useContext(ShoppingContext);
  const { removeFromBasket } = shoppingContext;

  const removeFromBasketHandler = () => {
    removeFromBasket({id: id});
  }
  console.log(id, title, image, price, rating)

  return (
    <>
    <div className='checkout-product'>
       <img
        className='checkout-product-image' 
        src={image}
        alt=""
        />
        <div className='checkout-product-info'>

            <p className='checkout-product-title'>
                {title}
            </p>
            
            <p className="checkout-product-price">
                <p>
                    <strong>{price}</strong>
                    <big>$</big>
                </p>
            </p>

            <div className="checkout-product-rating">
                    {Array(rating).fill().map((_, i) => (
                    <p> ⭐️ </p>
                    ))} 
            </div>

            {!hideButton && 
            <button 
              className='' 
              onClick={removeFromBasketHandler}>
                    Remove from basket
            </button>}

        </div>
    </div>
    </>
  )
};

export default CheckoutProduct;