import React, { useEffect } from 'react'
import "./CheckoutProduct.css"
import { useStateValue } from './StateProvider'

const CheckoutProduct = ({id, image, title, price, rating}) => {


  const [{basket}, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: id,
    })
  }

  return (
    <div className='checkoutProduct'>
      <div className='image__container'>
      <img className='checkoutProduct__image' src={image}/>
      </div>
        
        <div className='checkoutProduct__info'>
            <p className='checkoutProduct__title'>{title}</p>
            <p className='checkoutProduct__price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className='checkoutProduct__rating'>
            {Array(rating).fill().map(() =>(
                <span key={Math.random()} className="fa fa-star checked"></span>
              ))}
            </div>
            <button onClick={removeFromBasket}>Remove from the basket</button>
        </div>
    </div>
  )
}

export default CheckoutProduct