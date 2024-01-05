import React, { useRef, useEffect } from 'react';
import './ProductCard.css';
import { gsap, Power3 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

const ProductCard = ({ products, index }) => {
  return (
    <div className="ProductCard__Container">
      <div className="Wrapper_ProductCard">
        <div className="img">
          <img src={products.images} alt="Product" />
        </div>
        <div className="contain">
          <h2 className="ProductCard__Title">{products.title}</h2>
          <div className="Prices">
            <p className="ProductCard__Price">{products.price}</p>
            <p className="ProductCard__Diskon">
              <del>{products.diskon}</del>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
