import React from "react";
import Navbar from "./Components/Navbar/Navbarr";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

import Routing from "./Components/Routing";
import Homesection from "./Components/Homesection/Homesection";
import Slider from "./Components/Slider/Slider";
import { Box, Grid } from "@mui/material";
import Banners from "./Components/Banner/Banners";
import Products from "./Components/Productsall/Products";
import PageNotFound from "./Error/PageNotFound";

// import Display from "./Components/DisplayItems/Display";
const App = () => {
  return (
    <>
      <Navbar />
      <Header />

      <Routing />
      {/* <Banners /> */}
      {/* <Products /> */}
      <Footer />
    
    </>
  );
};

export default App;




// import React from "react";
// import Navbar from "./Components/Navbar/Navbarr";
// import Header from "./Components/Header/Header";
// import Footer from "./Components/Footer/Footer";

// // import Routing from "./Components/Routing";
// import Homesection from "./Components/Homesection/Homesection";
// import Slider from "./Components/Slider/Slider";
// import { Box, Grid } from "@mui/material";
// import Banners from "./Components/Banner/Banners";
// import Products from "./Components/Productsall/Products";
// import Display from "./Components/DisplayItems/Display";
// import Trending from "./Components/TrendingSection/Trending";
// import PlantCards from "./Components/PlantCards/PlantCards";
// import GridFor from "./Components/GridFor/GridFor";
// import Available from "./Components/AvailablePlaystore/Available";
// import Routing from './Components/Routing'
// import SingleProducts from "./pages/SingleProducts/SingleProducts";

// const App = () => {
//   return (
//     <>
//       <Navbar />
 
//       <Header />
//      <Routing/>
//       <Slider/>
//       <Homesection/>
//       <Display/>
//       <PlantCards/>
//       <Trending/>
//       <GridFor />
//       <Available />

//       <Routing /> 
     
     
//       <Footer />
//     </>
//   );
// };

// export default App;
