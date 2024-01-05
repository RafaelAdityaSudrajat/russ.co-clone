import React, { useEffect, useRef, useState } from 'react';
import Header from '../../component/header/Header';
import ProductCard from '../../component/productCard/ProductCard';
import Hero from './Hero';
import './Home.css';
import Products from '../../DataProducts';
import Footer from '../../component/footer/Footer';
import { gsap, Power3 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Pastikan telah mengimpor ScrollTrigger
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const slogan = [
    'Wah gak nyangka ternyata ini brand indonesia! Bangga banget, Kualitasnya Internasional!, Keren Russ',
    'God Product Im not saying compliment, this my hones review, Prooud for Russ',
    'Seperti slogan mereka, gue pake russ karena bangga sama diri sendiri gue atas apa semua yang udah gua kerjain',
  ];
  const productListRef = useRef(null);
  const productCardsRef = useRef([]);
  const [trigerSlogan, setTrigerSlogan] = useState(0);
  const intervalSloganIdRef = useRef(null);
  const lastMouseEnterTimeRef = useRef(0);

  const handleMouseEnter = () => {
    console.log('Mouse enter');
    // Hentikan interval slogan jika sedang berjalan
    if (intervalSloganIdRef.current) {
      clearInterval(intervalSloganIdRef.current);
    }
  };

  const handleMouseLeave = () => {
    console.log('Mouse leave');

    // Hitung selisih waktu sejak terakhir kali mouse enter
    const elapsedTime = Date.now() - lastMouseEnterTimeRef.current;

    // Jalankan kembali interval slogan setelah selisih waktu
    setTimeout(() => {
      intervalSloganIdRef.current = setInterval(() => {
        if (trigerSlogan < 2) {
          setTrigerSlogan((prev) => prev + 1);
        } else {
          setTrigerSlogan(0);
        }
      }, 3000);
    }, Math.max(0, 3000 - elapsedTime));
  };

  useEffect(() => {
    // Set interval slogan pertama kali
    intervalSloganIdRef.current = setInterval(() => {
      if (trigerSlogan < 2) {
        setTrigerSlogan((prev) => prev + 1);
      } else {
        setTrigerSlogan(0);
      }
    }, 3000);

    return () => {
      // Hentikan interval slogan ketika komponen dibongkar
      clearInterval(intervalSloganIdRef.current);
    };
  }, [trigerSlogan]);

  useGSAP(() => {
    gsap.from('.Text__Slogan', { opacity: 0, y: 20 });
  }, [trigerSlogan]);

  useGSAP(() => {
    const productCards = document.querySelectorAll('.ProductCard__Container');

    productCards.forEach((card, index) => {
      const duration = (index % 4) * 0.3 + 0.3; // Durasi berdasarkan indeks produk

      const cardTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: card,
          start: 'top 80%',
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
    <>
      <Header />
      <Hero />
      <div className="Images__Banner">
        <img
          src="https://www.russ.co.id/cdn/shop/files/WE_MAKE_EVERYTHING_1400x.jpg?v=1697199557"
          alt="banner"
        />
      </div>
      <div className="Colection__Wrapper">
        <div className="left">
          <div className="Wrapper__Contain__Button">
            <p>RUSS ADULT</p>
            <button>View Produk</button>
          </div>
        </div>
        <div className="right">
          <div className="Wrapper__Contain__Button">
            <p>RUSS KIDS</p>
            <button>View Produk</button>
          </div>
        </div>
      </div>

      <div className="Text__Center">
        <h3 className="Text__Limited">LIMITED TIME! EXTRA 85% OFF</h3>
        <h1 className="Text__Promo">12.12 SALE</h1>
      </div>

      <div className="ProductList__Container" ref={productListRef}>
        <div className="Wrapper__ProductList">
          {Products.slice(0, 8).map((item, i) => (
            <ProductCard
              products={item}
              key={i}
              index={i}
              ref={(el) => (productCardsRef.current[i] = el)}
            />
          ))}
        </div>
      </div>

      <div className="Button__ViewMoreDetail__Wrapper">
        <div className="Button__ViewMoreDetail">
          <p>VIEW MORE DETAIL</p>
          <div className="background"></div>
        </div>
      </div>

      <div className="Banner__NewARival"></div>
      <div className="Text__Center">
        <h3 className="Text__Limited">LATEST COLLECTION WITH EXTRA 68% OFF</h3>
        <h1 className="Text__Promo">NEW ARRIVAL</h1>
      </div>

      <div className="ProductList__Container" ref={productListRef}>
        <div className="Wrapper__ProductList">
          {Products.slice(9, 17).map((item, i) => (
            <ProductCard
              products={item}
              key={i}
              index={i}
              ref={(el) => (productCardsRef.current[i] = el)}
            />
          ))}
        </div>
      </div>

      <div className="Button__ViewMoreDetail__Wrapper">
        <div className="Button__ViewMoreDetail">
          <p>VIEW MORE PRODUCTS</p>
          <div className="background"></div>
        </div>
      </div>

      <div
        className="Slogan_Container"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="Slogan__Wrapper">
          <p className="Text__Slogan">{slogan[trigerSlogan]}</p>
          <div className="Slogan__WrapperCircle">
            {Array.from({ length: 3 }).map((item, i) => (
              <div
                className={`circle ${i == trigerSlogan ? 'activeSlogan' : ''}`}
                key={i}
                onClick={() => setTrigerSlogan(i)}
              ></div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
