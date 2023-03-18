import React, { useEffect } from "react";
import "./Home.css";
import Product from "./Product";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className="home">
        <div className="home__container">
          <img
            data-aos="fade-zoom-in"
            src="https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2022/11/netflix-india.jpeg?ssl=1"
            className="home__image"
          />
          <div className="home__row">
          <Product
              title="Excel Sofa/Furnitures | Wood | Upholstery | Minimalist | Ergonomic"
              key="876867876"
              image="https://www.ikea.com/in/en/images/products/vimle-3-seat-sofa-gunnared-medium-grey__0514368_pe639441_s5.jpg"
              price={94.99}
              rating={4}
            />
            <Product
              title="Mass Gainer | Protein | Workout | Muscle | Supplement"
              key="78066666687"
              image="https://m.media-amazon.com/images/I/61CvLSymGwL._SL1500_.jpg"
              price={9.87}
              rating={4}
              
            />
            <Product
              title="Nike Shoes | Sneakers | Athleisure | Flyknit | Air Max"
              key="2345098756"
              image="https://m.media-amazon.com/images/I/71TawoxTk6L._UY500_.jpg"
              price={29.99}
              rating={5}
              
            />
          </div>
          <div className="home__row">
            <Product
              title="Denim | Jeans | Indigo | Levi's | Raw denim | Distressed denim"
              key="467897546"
              image="https://4.imimg.com/data4/OX/VM/MY-35263749/men-s-casual-shirt-500x500.jpg"
              price={45.99}
              rating={5}
              
            />
            <Product
              title="Boat Headphones | Wireless | Waterproof | Bluetooth | Noise cancelling"
              key="345098645"
              image="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/61tl-Fi6-uL._AC_SL1500_.jpg"
              price={41.99}
              rating={2}
              
            />
          </div>
          <div className="home__row">
            <Product
              title="Allen Solley | Apparel | Formalwear | Casualwear | Brand"
              key="467897546"
              image="https://4.imimg.com/data4/OX/VM/MY-35263749/men-s-casual-shirt-500x500.jpg"
              price={2.99}
              rating={3}
              
            />
            <Product
              title="RealMe Headphones | Wireless | Waterproof | Bluetooth | Noise cancelling"
              key="345098645"
              image="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/61tl-Fi6-uL._AC_SL1500_.jpg"
              price={26.99}
              rating={5}
              
            />
            <Product
              title="Noise Tune Active | Wireless | Waterproof | Bluetooth | Noise cancelling"
              key="65498787"
              image="https://m.media-amazon.com/images/I/51-7Z9G1NaL._SL1500_.jpg"
              price={67.99}
              rating={1}
              
            />
          </div>
          <div className="home__row">
            <Product
              title="Excel Sofa/Furnitures | Wood | Upholstery | Minimalist | Ergonomic"
              key="876867876"
              image="https://www.ikea.com/in/en/images/products/vimle-3-seat-sofa-gunnared-medium-grey__0514368_pe639441_s5.jpg"
              price={94.99}
              rating={4}
            />
          </div>
        </div>
      </div>
      <div className="home">
        <div className="home__container">
          <div className="home__row">
            <Product
              title="The lean Startup | Entrepreneurship | Business | Innovation | Agile"
              key="45654987765"
              image="https://m.media-amazon.com/images/I/81-QB7nDh4L.jpg"
              price={12.99}
              rating={5}
              
            />
            <Product
              title="Mass Gainer | Protein | Workout | Muscle | Supplement"
              key="78066666687"
              image="https://m.media-amazon.com/images/I/61CvLSymGwL._SL1500_.jpg"
              price={9.87}
              rating={5}
              
            />
            <Product
              title="Nike Shoes | Sneakers | Athleisure | Flyknit | Air Max"
              key="2345098756"
              image="https://m.media-amazon.com/images/I/71TawoxTk6L._UY500_.jpg"
              price={29.99}
              rating={5}
              
            />
          </div>
          <div className="home__row">
            <Product
              title="Denim | Jeans | Indigo | Levi's | Raw denim | Distressed denim | "
              key="467897546"
              image="https://4.imimg.com/data4/OX/VM/MY-35263749/men-s-casual-shirt-500x500.jpg"
              price={45.99}
              rating={5}
              
            />
            <Product
              title="Boat Headphones | Wireless | Waterproof | Bluetooth | Noise cancelling"
              key="345098645"
              image="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/61tl-Fi6-uL._AC_SL1500_.jpg"
              price={41.99}
              rating={5}
              
            />
          </div>
          <div className="home__row">
            <Product
              title="Allen Solley | Apparel | Formalwear | Casualwear | Brand"
              key="467897546"
              image="https://4.imimg.com/data4/OX/VM/MY-35263749/men-s-casual-shirt-500x500.jpg"
              price={2.99}
              rating={5}
              
            />
            <Product
              title="RealMe Headphones | Wireless | Waterproof | Bluetooth | Noise cancelling"
              key="345098645"
              image="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/61tl-Fi6-uL._AC_SL1500_.jpg"
              price={26.99}
              rating={5}
            />
            <Product
              title="Noise Tune Active | Wireless | Waterproof | Bluetooth | Noise cancelling"
              key="65498787"
              image="https://m.media-amazon.com/images/I/51-7Z9G1NaL._SL1500_.jpg"
              price={67.99}
              rating={5}
            />
          </div>
          <div className="home__row">
            <Product
              title="Excel Sofa/Furnitures | Wood | Upholstery | Minimalist | Ergonomic"
              key="876867876"
              image="https://www.ikea.com/in/en/images/products/vimle-3-seat-sofa-gunnared-medium-grey__0514368_pe639441_s5.jpg"
              price={94.99}
              rating={5}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
