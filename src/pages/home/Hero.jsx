import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import './Hero.css';
import { useRef } from 'react';

const images = [
  'https://www.russ.co.id/cdn/shop/files/CAMPAIGN_4.1_ea0aa356-2d54-4f1a-af91-957886f7315c_1400x.jpg?v=1703225460',
  'https://www.russ.co.id/cdn/shop/files/DESKTOP_HEADER_CAMPAIGN_2_1400x.jpg?v=1697199558',
  'https://www.russ.co.id/cdn/shop/files/DESKTOP_HEADER_CAMPAIGN_1_1400x.jpg?v=1697199558',
  'https://www.russ.co.id/cdn/shop/files/DESKTOP_HEADER_CAMPAIGN_3_1400x.jpg?v=1697199558',
  'https://www.russ.co.id/cdn/shop/files/DESKTOP_HEADER_CAMPAIGN_4_1400x.jpg?v=1697199558',
];

const Hero = () => {
  const [trigger, setTrigger] = useState(0);
  const [fade, setFade] = useState(false);

  const tombol = useRef(null);

  useEffect(() => {
    const myInterval = setInterval(() => {
      setFade(true); // Aktifkan efek fade
      setTimeout(() => {
        if (trigger < images.length - 1) {
          setTrigger((prev) => prev + 1);
        } else {
          setTrigger(0);
        }
        setFade(false); // Matikan efek fade setelah perubahan gambar
      }, 500); // Durasi efek fade (500 milidetik)
    }, 3000); // Ganti gambar setiap 3 detik (3000 milidetik)

    return () => clearInterval(myInterval);
  }, [trigger]);

  useGSAP(() => {
    // gsap code here..
    if (trigger > 0) {
      gsap.from(tombol.current, { y: 100, duration: 1, opacity: 1 });
    }

    // <-- automatically reverted
  }, [trigger]);
  return (
    <div className="Container__Hero">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt=""
          className={`${index === trigger ? 'active' : ''} ${
            fade ? 'fade' : ''
          }`}
        />
      ))}
      <div className="Container__Circle">
        {Array.from({ length: images.length }, (_, index) => (
          <div
            key={index}
            className={`circle ${index === trigger ? 'active' : ''}`}
            onClick={() => setTrigger(index)}
          ></div>
        ))}
      </div>

      {trigger != 0 ? <button ref={tombol}>Ayo Beli Sekarang</button> : ''}
    </div>
  );
};

export default Hero;
