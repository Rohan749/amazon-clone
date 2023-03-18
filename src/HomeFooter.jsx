import { react } from "react";
import "./HomeFooter.css";
import lnkdnlogo from "./Images/lnkdnlogo.svg";
import twttrlogo from "./Images/twttrlogo.svg";
import instlogo from "./Images/instlogo.svg";
import gmlogo from "./Images/gmlogo.svg";
import fblogo from "./Images/fblogo.svg";

const HomeFooter = () => {
  return (
    <>
      <div className="homeFooter__body">
      </div>
      <div className="homeFooter">
        <div className="homeFooter__col col1">
          <h2>Amazon</h2>
          <p>Work Hard. Have Fun. Create History</p>
        </div>
        <div className="homeFooter__col col2">
          <div className="footer_li">
            <a href="#">Help Center</a>
          </div>
          <div className="footer_li">
            <a href="#">Blog</a>
          </div>
          <div className="footer_li">
            <a href="#">Selling</a>
          </div>
          <div className="footer_li">
            <a href="#">Buying</a>
          </div>
        </div>
        <div className="homeFooter__col col3">
          <div className="footer_li">
            <a href="#">About Us</a>
          </div>
          <div className="footer_li">
            <a href="#">Privacy</a>
          </div>
          <div className="footer_li">
            <a href="#">Terms</a>
          </div>
          <div className="footer_li">
            <a href="#">Contact</a>
          </div>
          <div className="footer_li">
            <a href="#">FAQs</a>
          </div>
        </div>
        <div className="homeFooter__col col4">
          <div className="footer_li">
            <a href="#">Career</a>
          </div>
          <div className="footer_li">
            <a href="#">Join Us</a>
          </div>
          <div className="footer_li">
            <a href="#">Branding</a>
          </div>
        </div>
        <div className="homeFooter__col col5">
          <div className="footer_li">Reach Us at</div>
          <div className="homeFooter__icons">
            <nav>
              <a>
                <img src={lnkdnlogo} />
              </a>
            </nav>
            <nav>
              <a>
                <img src={twttrlogo} />
              </a>
            </nav>
            <nav>
              <a>
                <img src={instlogo} />
              </a>
            </nav>
            <nav>
              <a>
                <img src={gmlogo} />
              </a>
            </nav>
            <nav>
              <a>
                <img src={fblogo} />
              </a>
            </nav>
          </div>
        </div>
      </div>
      <div className="copyrights">
        Copyrights &#169; 2022 Amazon-Clone. All Rights Reserved.
      </div>
    </>
  );
};

export default HomeFooter;
