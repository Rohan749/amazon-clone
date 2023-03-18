import React, { useEffect } from 'react'
import { useStateValue } from "./StateProvider" 
import "./Payment.css"
import CheckoutProduct from "./CheckoutProduct"
import { Link } from 'react-router-dom'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import AOS from "aos";
import "aos/dist/aos.css";

const Payment = () => {

    useEffect(() => {
        AOS.init();
      }, []);

    const [{basket, user}, dispatch] = useStateValue();
    const stripe = useStripe();
    const elements = useElements();

  return (
    <>
        <div data-aos="fade-zoom-in" className='payment'>
            <div className='payment__container'>

                <h1>
                    Checkout {<Link to="/checkout">{basket?.length} items</Link>}
                </h1>

                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Delivery Address</h3>
                    </div>
                    <div className='payment__address'>
                        <p>{user?.email}</p>
                        <p>123 KS Layout</p>
                        <p>Karnataka, Bengaluru</p>
                    </div>
                </div>
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Review Items and Delivery</h3>
                    </div>
                    <div className='payment__items'>
                        {basket.map(item => (
                            <CheckoutProduct 
                                id = {item.id}
                                title = {item.title}
                                image = {item.image}
                                price = {item.price}
                                rating = {item.rating}
                            />
                        ))}
                    </div>
                </div>
                <div className='payment__section payment_last'>
                    <div className='payment__title'>
                        <h3>Payment Method</h3>
                    </div>
                    <div className='payment__details'>
                        {/* Payment Stripe se hoga */}
                        <CardElement />
                    </div>
                    <div className='payment__btndiv'>
                        <button className='payment__button'>Make Payment</button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Payment