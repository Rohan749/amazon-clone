import React, { useEffect } from 'react'
import "./Subtotal.css"
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import { useNavigate } from 'react-router-dom';
import { getBasketTotal } from './reducer';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Subtotal = () => {

    useEffect(() => {
        AOS.init();
      }, []);
    

    const history = useNavigate();

    const [ {basket}, dispatch] = useStateValue();
    let sum = 0;


  return (
    <div data-aos="fade-zoom-in"
     className='subtotal'>
        <CurrencyFormat 
            renderText={(value) => (
                <>
                    <p>
                        Subtotal ({basket.length} items):
                        <strong>{value}</strong>
                    </p>
                    <small className='subtotal__gift'>
                        <input type="checkbox" />This Order
                        contains a gift
                    </small>
                </>
  )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeperator={true}
            prefix={"$"}
        />
        <button onClick={e=>history("/payment")}>Proceed to checkout</button>
    </div>
  )
}

export default Subtotal