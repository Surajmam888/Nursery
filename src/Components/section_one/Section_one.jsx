import React from 'react'
import './Section_one.css'
import PlantCards from '../PlantCards/PlantCards'
import Slider from '../Slider/Slider'
import { Typography } from '@mui/material'


export default function Section_one() {
  return (
    <div id='section_one' >
 <Typography sx={{marginLeft:'2rem',   fontSize:'2rem'}}  >

popular plant

 </Typography>
      <PlantCards/>
    </div>
  )
}
