import React from "react";
import "./Display.css";
import Product from "../images/Img3Card.jpg";
import Product_two from "../images/Img4Card.jpg";
import animation from "../images/animation.png";
// import parallaxx from "../images/parallax1.jpg";
import { Box, Button, Divider } from "@mui/material";
// import poster from '../images/Poster.webp'
import { TypeAnimation } from 'react-type-animation';
import { Parallax } from "react-parallax";
import PlantCards from "../PlantCards/PlantCards";
import { Link } from "react-router-dom";



export default function Display() {
  return (
    // <Parallax   blur={10} bgImage={parallaxx} strength={400}>
    <div id="Framed">
      
      <div className="Texts">
    
      {/* <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'NurseryTree Products' ,
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'NurseryTree  Manny Products' ,
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'NurseryTree Manny Types' ,
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'NurseryTree Manny Discount' ,
        1000, // wait 1s before replacing "Mice" with "Hamsters"
       
      ]}
      // wrapper="span"
      speed={20}
      
      style={{ fontSize: '2em', display: 'inline-block', fontWeight:'600', color:'ActiveBorder'  }}
      repeat={Infinity}
    />
    <br /> */}
     {/* <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
       
        'offer Now',
        1000,
        'Hurry up',
        1000,
        'Fast plant lovers',
        1000
      ]}
      wrapper="span"
      speed={20}
      style={{ fontSize: '2em', display: 'inline-block', fontWeight:'500', color:'wheat'  }}
      repeat={Infinity}
    /> */}
        <h1>
          {" "}
          NurseryTree Products <br /> Offer Now
        </h1>
        <p>
          Pick from 100+ beautiful Plants. Perfect keepsake gifts for Nature.
        </p>

        <h2 className="MRP">
          {" "}
          Starts at Rs. <span>250</span>
        </h2>
<Link to="/Products">
        <Button  className="animationbtn"     sx={{bgcolor:'#0BB00C'}} variant="contained"> More </Button>
        </Link>
   
      </div>
  


{/* <Box   sx={{display:'flex', gap:'2rem',  width:'100%'     }} >     */}
    <div className="Framed_IMG">
        <img src={Product} alt="Products" className="poster" />
      </div>
      <div className="Framed_IMG">
        <img src={animation} alt="Products" className="poster" />
    
      </div>
      <div className="Framed_IMG">
        <img src={Product_two} alt="Products" className="poster" />
    
      </div>
      {/* </Box> */}



   

    </div>




  );
}





