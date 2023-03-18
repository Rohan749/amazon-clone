import React, { useEffect } from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";
import AOS from 'aos';
import 'aos/dist/aos.css';


const Checkout = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [{basket, user}, dispatch] = useStateValue();

  return (
    <div data-aos="fade-zoom-in" className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonPay/LPAOffers/April/Prime/Store/V2/LPA501_1500x250.jpg"
          alt="Ad"
        />
        <div>
          <h3>Hello, {user && user?.email}</h3>
            <h2 className="checkout__title">Your shopping basket</h2>
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
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
