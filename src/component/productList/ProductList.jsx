import React, { useRef } from 'react';
import './ProductList.css';
import { gsap, Power3 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Pastikan telah mengimpor ScrollTrigger
import { useGSAP } from '@gsap/react';
import ProductCard from '../productCard/ProductCard';

gsap.registerPlugin(ScrollTrigger);

const ProductList = ({ products }) => {
  const productListRef = useRef(null);
  const productCardsRef = useRef([]);

  useGSAP(() => {
    const productCards = document.querySelectorAll('.ProductCard__Container');

    productCards.forEach((card, index) => {
      const duration = (index % 4) * 0.3 + 0.3; // Durasi berdasarkan indeks produk

      const cardTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: card,
          start: 'top 80%',
          markers: true,
        },
      });

      cardTimeline.from(card, {
        opacity: 0,
        y: 50,
        duration,
        ease: Power3.easeOut,
      });
    });
  }, []);

  return (
    <div className="ProductList__Container" ref={productListRef}>
      <div className="Wrapper__ProductList">
        {products.map((item, i) => (
          <ProductCard
            products={item}
            key={i}
            index={i}
            ref={(el) => (productCardsRef.current[i] = el)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
