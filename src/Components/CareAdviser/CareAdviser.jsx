import React from "react";
import "./CareAdviser.css";
import InspirationIMG1 from "../images/Adviser.jpg";
import { Button, Typography } from "@mui/material";
import { TypeAnimation } from "react-type-animation";
import parallaxx from "../images/parallax2.jpg";
import { Parallax } from "react-parallax";

const CareAdviser = () => {
  return (


    // <Parallax   blur={0} bgImage={parallaxx} strength={200}>
    <div id="IdeasInspiration" className="IdeasInspirationContainer">
     
      <div className="IdeasInspiration_Text">
    <h1>Care  <span  className="spn_hover" > Adviser</span> </h1>
      {/* <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'NurseryTree Products' ,
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'NurseryTree Products   ' ,
        1000, // wait 1s before replacing "Mice" with "Hamsters"
       
      ]}
      // wrapper="span"
      speed={30}
      className=""
      style={{ fontSize: '3em', display: 'inline-block', fontWeight:'700'   }}
      repeat={Infinity}
    /> */}
    <br />
      {/* <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'and Products  Care' ,
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'and  Adviser' ,
        1000, // wait 1s before replacing "Mice" with "Hamsters"
       
      ]}
      // wrapper="span"
      speed={30}
      // className="Animation2"
      style={{ fontSize: '3em', display: 'inline-block', fontWeight:'700', color:'black'  }}
      repeat={Infinity}
    /> */}
        {/* <h1>Care  <span  className="spn_hover" > Adviser</span> </h1> */}
        <Typography variant="body1" sx={{}}   >
        "An Additional Plant Protection Advisor is a nation-level advisor to the Government of India. The Directorate of Plant Protection, Quarantine & Storage (DPQS) is run by the Plant Protection Adviser. The DPQS is India's National Plant Protection Organization (NPPO). The NPPO's responsibilities include"
        </Typography>

        <div className="IdeasInspiration_list">
          <ul>
            <li>Providing technical inputs to promote safe trade.</li>
            <li>Phytosanitary inspection.</li>
            <li>Treatment.</li>
            <li>Certification.</li>
                     <li>Ensuring the availability of safe and quality pesticides.</li>
            <li>Promoting Integrated Pest management.</li>
            <li>Streamlining quarantine measures.</li>
          </ul>


         
        </div>

<a href="https://www.google.com/search?q=adviser+plant&oq=adviser+plant+&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRg7MgYIAhBFGDsyCAgDEEUYJxg7MgYIBBBFGEAyCggFEAAYChgWGB7SAQg0OTAyajBqN6gCALACAA&sourceid=chrome&ie=UTF-8">
        <Button  className="animationbtn"     sx={{bgcolor:'#0BB00C'}} variant="contained"> More </Button>
        </a>
      </div>
      <div className="IdeasInspiration_Image">
        <img src={parallaxx} alt="Ideas and Inspiration" />
      </div>
    </div>
    // </Parallax>
  );
};

export default CareAdviser;




