import React from "react";
import "./ClintReview.css";
import ClintReviewSlider from "./ClintReviewSlider";
import { TypeAnimation } from "react-type-animation";
// import CustomerssSlider from './CustomerssSlider'
import parallaxx from '../images/parallax.jpg'
import { Parallax } from "react-parallax";
import { Divider } from "@mui/material";


const ClintReview = () => {
  return (
    // <Parallax  blur={1} bgImage={parallaxx} strength={400}>
    <div id="Customerssaying">
      {/* <Divider sx={{width:'50rem',   display:{sm:'none',md:'block'  ,lg:'block'} ,color:'ActiveBorder'   }} /> */}
      <div className="Customerssaying_Text">
      {/* <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'What our customers are saying' ,
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'customers are saying' ,
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'What our customers are saying' ,
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        ' What our customers are saying' ,
        1000, // wait 1s before replacing "Mice" with "Hamsters"
       
      ]}
      // wrapper="span"
      speed={20}
      
      style={{ fontSize: '2em', display: 'inline-block', fontWeight:'500', color:'#0BB00C'  }}
      repeat={Infinity}
    /> */}
        <h1> customers are    <span  className="spn_hove">  saying</span></h1>
        <p>4.5 rating out of 24404 reviews</p>
      </div>
    

<div   className="clintReview"  >

<ClintReviewSlider/>


</div>


    </div>
    // </Parallax>
  );
};

export default ClintReview;
