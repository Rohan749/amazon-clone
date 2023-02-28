import React from "react";
import "./Home.css";
import Product from "./Product";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          src="https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2022/11/netflix-india.jpeg?ssl=1"
          className="home__image"
        />
        <div className="home__row">
          <Product
            title="The lean Startup"
            key="45654987765"
            image="https://m.media-amazon.com/images/I/81-QB7nDh4L.jpg"
            price={29.99}
            rating={5}
          />
          <Product
            title="The lean Startup"
            key="78066666687"
            image="https://m.media-amazon.com/images/I/61CvLSymGwL._SL1500_.jpg"
            price={29.99}
            rating={5}
          />
          <Product
            title="The lean Startup"
            key="2345098756"
            image="https://m.media-amazon.com/images/I/71TawoxTk6L._UY500_.jpg"
            price={29.99}
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            title="The lean Startup"
            key="467897546"
            image="https://4.imimg.com/data4/OX/VM/MY-35263749/men-s-casual-shirt-500x500.jpg"
            price={29.99}
            rating={5}
          />
          <Product
            title="The lean Startup"
            key="345098645"
            image="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/61tl-Fi6-uL._AC_SL1500_.jpg"
            price={29.99}
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            title="The lean Startup"
            key="467897546"
            image="https://4.imimg.com/data4/OX/VM/MY-35263749/men-s-casual-shirt-500x500.jpg"
            price={29.99}
            rating={5}
          />
          <Product
            title="The lean Startup"
            key="345098645"
            image="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/61tl-Fi6-uL._AC_SL1500_.jpg"
            price={29.99}
            rating={5}
          />
          <Product
            title="The lean Startup"
            key="65498787"
            image="https://m.media-amazon.com/images/I/51-7Z9G1NaL._SL1500_.jpg"
            price={29.99}
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            title="The lean Startup"
            key="876867876"
            image="https://www.ikea.com/in/en/images/products/vimle-3-seat-sofa-gunnared-medium-grey__0514368_pe639441_s5.jpg"
            price={29.99}
            rating={5}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
