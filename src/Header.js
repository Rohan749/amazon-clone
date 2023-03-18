import React, { useEffect } from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { getAuth } from "firebase/auth";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  const auth = getAuth();

  useEffect(() => {
    AOS.init();
  }, [])

  const handleAuthentication = () => {
    if(user) {
      auth.signOut();
    }
  }

  return (
    <>
      <div data-aos="fade-zoom-in" className="header">
        <Link to="/">
          <img
            src="https://www.pngplay.com/wp-content/uploads/3/White-Amazon-Logo-Background-PNG-Image.png"
            className="header__logo"
          />
        </Link>
        <div className="header__search">
          <input className="header__searchInput" type="text" />
          <SearchIcon className="header__searchIcon" />
        </div>
        <div className="header__nav">
          <Link to={!user && "/login"}>
            <div onClick={handleAuthentication} className="header__option">
              <span className="header__optionLineOne">Hello {!user ? 'Guest': user.email}</span>
              <span className="header__optionLineTwo">{ user ? 'Sign Out': 'Sign In'}</span>
            </div>
          </Link>
          <div className="header__option header__remove">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
          <div className="header__option header__remove">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
          <Link to="/checkout">
            <div className="header__optionBasket">
              <ShoppingCartIcon />

              {/*The "?" is called optional chaining. Mtlb if undefined is returned, it won't freak out.*/}
              <span className="header__optionLineTwo header__basketCount">
                {basket?.length}
              </span>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
