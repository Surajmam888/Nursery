// import React from "react";
// import Homesection from "../Components/Homesection/Homesection";
// import MainSlider from "../Components/Slider/MainSlider";
// import Available from "../Components/AvailablePlaystore/Available";
// import PlantCards from "../Components/PlantCards/PlantCards";
// import Trending from "../Components/TrendingSection/Trending";
// import GridFor from "../Components/GridFor/GridFor";
// import Slider from "../Components/Slider/Slider";
// import { Box, Typography } from "@mui/material";
// import Display from "../Components/DisplayItems/Display";
// const Allmodules = () => {
//   return (
//     <>

//       <Slider />
//       <Homesection />
//       <Display/>

//         <PlantCards />
//         <PlantCards />

//       <Trending />

//       <GridFor />
//       <Available />
//     </>
//   );
// };

// export default Allmodules;

import React from "react";
import Slider from "../Components/Slider/Slider";
import Homesection from "../Components/Homesection/Homesection";
import Display from "../Components/DisplayItems/Display";
import PlantCards from "../Components/PlantCards/PlantCards";
import Trending from "../Components/TrendingSection/Trending";
import GridFor from "../Components/GridFor/GridFor";
import CareAdviser from "../Components/CareAdviser/CareAdviser";
import ClintReview from "../Components/ClintReview/ClintReview";
import Available from "../Components/AvailablePlaystore/Available";
import Section_one from "../Components/section_one/Section_one";
import Banner from "../Components/Banner/Banners";

const Allmodules = () => {
  return (
    <>
      <Slider />
      <Homesection />
      <Display />
      <Section_one />
      {/* <PlantCards /> */}

      <Trending />

      <GridFor />
      <CareAdviser />
      <Banner />
      <ClintReview />
      <Available />
    </>
  );
};

export default Allmodules;
