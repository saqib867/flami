// import FeedbackBox from './FeedbackBox'

// import React, { useRef, useEffect, useState } from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';


// // import required modules
// import { Pagination, Navigation } from 'swiper/modules';

// export default function Slider() {
//   const [swiperSlidesPerView, setSwiperSlidesPerView] = useState('1');

//   useEffect(() => {
//     // Check window width and set the number of slides per view
//     const handleResize = () => {
//       if (window.innerWidth > 980) {
//         setSwiperSlidesPerView('3');
//       } else {
//         setSwiperSlidesPerView('1');
//       }
//     };

//     // Attach the resize event listener
//     window.addEventListener('resize', handleResize);

//     // Call handleResize initially
//     handleResize();
//     // Clean up the event listener
//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);
//   return (
//     <>
//       <Swiper
//         slidesPerView={swiperSlidesPerView}
//         spaceBetween={20}
//         pagination={{
//           clickable: true,
//           enabled: false
//         }}
//         // autoplay={true}
//         navigation={true}
//         modules={[Navigation, Pagination]}
//         className="mySwiper"
//       >
//         <SwiperSlide>
//           <FeedbackBox image="/reviews/REVIEW1.webp" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <FeedbackBox image="/reviews/REVIEW2.webp" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <FeedbackBox image="/reviews/REVIEW3.webp" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <FeedbackBox image="/reviews/REVIEW4.webp" />
//         </SwiperSlide>

//       </Swiper>
//     </>
//   );
// }


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
          <FeedbackBox image="/reviews/REVIEW6.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <FeedbackBox image="/reviews/REVIEW10.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <FeedbackBox image="/reviews/REVIEW11.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <FeedbackBox image="/reviews/REVIEW1.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <FeedbackBox image="/reviews/REVIEW2.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <FeedbackBox image="/reviews/REVIEW3.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <FeedbackBox image="/reviews/REVIEW4.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <FeedbackBox image="/reviews/REVIEW5.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <FeedbackBox image="/reviews/REVIEW7.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <FeedbackBox image="/reviews/REVIEW8.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <FeedbackBox image="/reviews/REVIEW9.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <FeedbackBox image="/reviews/REVIEW12.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <FeedbackBox image="/reviews/REVIEW13.webp" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
