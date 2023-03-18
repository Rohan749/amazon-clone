import React, { useEffect } from 'react'
import "./Product.css"
import {useStateValue} from "./StateProvider"
import AOS from 'aos';
import 'aos/dist/aos.css';

const Product = ({ id, title, image, price, rating }) => {
  useEffect(() => {
    AOS.init();
  }, [])


  const [state, dispatch] = useStateValue();

  const addToBasket = () => {
    //Dispatch Item to basket.
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  }

  return (
    <div data-aos="fade-zoom-in" className='product'>
        <div className='product__info'>
            <p className='product__title'>{title}</p>
            
            <p className='product__price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className='product__rating'>
              {Array(rating).fill().map((_, i) =>(
                <span key={Math.random()} className="fa fa-star checked"></span>
              ))}
            </div>
        </div>
        <img src={image} className='product__image'/>
        <button onClick={addToBasket}>Add to Basket</button>
    </div>
  )
}

export default Product