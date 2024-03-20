import React, { useEffect, useState } from "react";
import "./Homesection.css";
import { Box } from "@mui/material";
import Theme from "../../Theme";
import { data } from "../../Dummydata";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, } from "swiper/modules";
import { Parallax } from "react-parallax";

const Homesection = () => {
  const theme = Theme;
  const [swiperSlidesPerView, setSwiperSlidesPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < theme.breakpoints.values.sm) {
        setSwiperSlidesPerView(3);
      } else {
        setSwiperSlidesPerView(8);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [theme.breakpoints.values.sm]);

  const slides = data.map((item) => (
    <SwiperSlide key={item.id}>
      
        <Box   className="top">
        <img src={item.img} className="img" alt={`Slide ${item.id}`}   c    />
      </Box>
 
    </SwiperSlide>
  ));

  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      className="mySwiper"
      spaceBetween={0}
      slidesPerView={swiperSlidesPerView}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
    >
      {slides}
    </Swiper>
  );
};

export default Homesection;


