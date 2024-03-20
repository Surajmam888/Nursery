// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import "./Slider.css";
// import { Autoplay, Navigation } from "swiper/modules";
// import { silder } from "../../Dummydata";

// export default function Slider() {
//   return (
//     <>
//       <Swiper
//         autoplay={{
//           delay: 2500,
//           disableOnInteraction: false,
//         }}
//         navigation={true}
//         modules={[Navigation, Autoplay]}
//         className="mySwiper"
//         breakpoints={{
//           // When window width is <= 768px, set slidesPerView to 1
//           768: {
//             slidesPerView: 1,
//           },
//           // When window width is <= 992px, set slidesPerView to 2
//           992: {
//             slidesPerView:1,
//           },
//           // When window width is <= 1200px, set slidesPerView to 3
//           1200: {
//             slidesPerView: 1,
//           },
//         }}
//       >
//         {silder.map((item) => (
//           <SwiperSlide key={item.id}>
//             <img src={item.img} alt={`slider ${item.id}`} className="swiper-img" />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </>
//   );
// }


import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
// import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Slider.css';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { silder } from '../../Dummydata';
import { Box } from '@mui/material';



export default function Slider() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>

    <Box sx={{ pt:"0px" ,pr:'5px',pl:'5px',    }}  > 
     
      <Swiper
      id='Home'
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >

{silder.map((item) => (
          <SwiperSlide key={item.id} >
            <img src={item.img} alt={`slider ${item.id}`} style={{ height: '80vh' }} />
          </SwiperSlide>
        ))}


        {/* // <SwiperSlide><img src={SPoster} alt="" /></SwiperSlide>
        // <SwiperSlide><img src={SPoster2} alt="" /></SwiperSlide>
        // <SwiperSlide><img src={SPoster3} alt="" /></SwiperSlide>
        // <SwiperSlide><img src={SPoster4} alt="" /></SwiperSlide>
        // <SwiperSlide><img src={SPoster5} alt="" /></SwiperSlide> */}
     
        
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
      </Box>
    </>
  );
}













