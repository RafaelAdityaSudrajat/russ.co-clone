import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="Container__Footer">
      <div className="Wrapper__Footer">
        <div className="Card__Footer">
          <div className="title__Footer">
            <h1>CONTACT US</h1>
          </div>
          <div className="Text__Footer">
            <span>+62 8111 111 9328</span>
            <span>russofficial28@gmail.com</span>
          </div>
        </div>

        <div className="Card__Footer">
          <div className="title__Footer">
            <h1>MARKETPLACE</h1>
          </div>
          <div className="Text__Footer">
            <span>Shopee</span>
            <span>Tiktokshop</span>
            <span>Lazada</span>
            <span>Tokopedia</span>
            <span>Blibli</span>
            <span>Russ Kids</span>
          </div>
        </div>

        <div className="Card__Footer">
          <div className="title__Footer">
            <h1>FLAGSHIP STORE </h1>
          </div>
          <div className="Text__Footer">
            <span>Bandung | Jl. Sultan Agung no 27</span>
            <span>Bandung | Jl. Ir. H. Djuanda no 125</span>
            <span>Tangerang | Jl. Beringin Raya no 37</span>
            <span>Medan | Jl. Dr. Mansyur no 125</span>
            <span>Pekanbaru | Jl. Letjend S. Parman no 76</span>
            <span>Bogor | Bogor Trade Mall, GF</span>
          </div>
        </div>

        <div className="Card__Footer">
          <div className="title__Footer">
            <h1>FLAGSHIP STORE </h1>
          </div>
          <div className="Text__Footer">
            <input type="text" placeholder="Enter Your Email Adress" />
            <div className="Button__ViewMoreDetail">
              <p>VIEW MORE DETAIL</p>
              <div className="background"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
