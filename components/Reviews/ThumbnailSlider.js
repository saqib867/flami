import React, { useRef, useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Navigation } from 'swiper/modules';
import FeedbackBox from './FeedbackBox';

export default function Slider() {
  const [swiperSlidesPerView, setSwiperSlidesPerView] = useState('1');

  useEffect(() => {
    // Check window width and set the number of slides per view
    const handleResize = () => {
      if (window.innerWidth > 980) {
        setSwiperSlidesPerView('2');
      } else {
        setSwiperSlidesPerView('1');
      }
    };

    // Attach the resize event listener
    window.addEventListener('resize', handleResize);

    // Call handleResize initially
    handleResize();
    // Clean up the event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <>
      <Swiper navigation={true} slidesPerView={swiperSlidesPerView} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <FeedbackBox image="/reviews/1.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <FeedbackBox image="/reviews/2.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <FeedbackBox image="/reviews/3.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <FeedbackBox image="/reviews/4.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <FeedbackBox image="/reviews/5.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <FeedbackBox image="/reviews/6.webp" />
        </SwiperSlide>

      </Swiper>
    </>
  );
}
