import { Box, Typography } from "@mui/material";
import React from "react";
import "./Trending.css";

import { Bcircledata } from "../../Dummydata";
import Theme from "../../Theme";
import { TypeAnimation } from "react-type-animation";
import { Parallax } from "react-parallax";



const Trending = () => {
  const { palette } = Theme;
  return (
    <>





      <Box className="Trending">
        <Box className="box">
        {/* <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        ' NurseryTree Trending' ,
        1000, // wait 1s before replacing "Mice" with "Hamsters"
       
        'Trending' ,
        1000, // wait 1s before replacing "Mice" with "Hamsters"
       
       
      ]}
      // wrapper="span"
      speed={20}
      
      style={{ fontSize: '2.5em',  fontWeight:'500',   textAlign:'center',display:'flex', justifyContent:'center', color:'#0BB00C' }}
      repeat={Infinity}
    /> */}
        {/* <TypeAnimation  
      sequence={[
        // Same substring at the start will only be typed out once, initially
        
        // 'NurseryTree Trending' ,
        // 1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Products' ,
        1000, // wait 1s before replacing "Mice" with "Hamsters"
         'special Products ' ,
        1000, // wait 1s before replacing "Mice" with "Hamsters"
       
      ]}
      // wrapper="span"
      speed={20}
      
      style={{ fontSize: '2.2em',  fontWeight:'500',  textAlign:'center',display:'flex', justifyContent:'center', color:'black', }}
      repeat={Infinity}
    /> */}
        <p className="Heading">Trending  <span className="spn_Hover"   > Products</span>  </p>

          {/* <p className="Heading">Trending</p> */}
        </Box>
       

        <Box className="InerBox">
     
          {Bcircledata.map((item) => (
            <Box>
              <img src={item.Image} alt="" />
              <Typography color={palette.primary.light}>{item.Title}</Typography>
            </Box>
            ))}
        </Box>
      </Box>


      {/* <CareAdviser/> */}
      {/* </Parallax> */}
    </>
  );
};

export default Trending;
