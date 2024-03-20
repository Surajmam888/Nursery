// import * as React from "react";
// import Box from "@mui/material/Box";
// import ImageList from "@mui/material/ImageList";
// import ImageListItem from "@mui/material/ImageListItem";
// import Theme from "../../Theme";
// import { Typography } from "@mui/material";
// // import { Scale } from "@mui/icons-material";

// export default function MasonryImageList() {
//   const { palette } = Theme;
//   return (
//     <Box sx={{ width: "100%", marginTop: "2rem" }}>
//       <Box
//         sx={{
//           minHeightheight: 450,
//           padding: "2rem",
//           borderRadius: "2rem",
//           backgroundColor: palette.primary.main,
//         }}
//       >
//         <Typography variant="h5" sx={{ textAlign: "center" }}>
//           Garden Decor & Care Adviser
//         </Typography>
//         <ImageList variant="masonry" cols={4} gap={10}>
//           {itemData.map((item) => (
//             <ImageListItem key={item.img}>
//               <img
//                 srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
//                 src={`${item.img}?w=248&fit=crop&auto=format`}
//                 alt={item.title}
//                 loading="lazy"
//               />
//             </ImageListItem>
//           ))}
//         </ImageList>
//       </Box>
//     </Box>
//   );
// }

// const itemData = [
//   {
//     img: "https://images.unsplash.com/photo-1621948470827-d245077791aa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9sb3dlciUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D",
//     title: "Bed",
//   },
//   {
//     img: "https://plus.unsplash.com/premium_photo-1682129447821-6b7330caaeea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8R2FyZGVuJTIwRGVjb3IlMjAlMjYlMjBDYXJlfGVufDB8fDB8fHww",
//     title: "Books",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1703113690930-fc391676e0de?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fEdhcmRlbiUyMERlY29yJTIwJTI2JTIwQ2FyZXxlbnwwfHwwfHx8MA%3D%3D",
//     title: "Sink",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3",
//     title: "Kitchen",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fEdhcmRlbiUyMERlY29yJTIwJTI2JTIwQ2FyZXxlbnwwfHwwfHx8MA%3D%3D",
//     title: "Blinds",
//   },
//   {
//     img: "https://plus.unsplash.com/premium_photo-1683134213628-b40ba2c99af8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fEdhcmRlbiUyMERlY29yJTIwJTI2JTIwQ2FyZXxlbnwwfHwwfHx8MA%3D%3D",
//     title: "Blinds",
//   },

//   {
//     img: "https://images.unsplash.com/photo-1572085313466-6710de8d7ba3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fEdhcmRlbiUyMERlY29yJTIwJTI2JTIwQ2FyZXxlbnwwfHwwfHx8MA%3D%3D",
//     title: "Laptop",
//   },
// ];

import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Theme from "../../Theme";
import { Divider, Grid, Typography } from "@mui/material";
import "./Gridfor.css"; // Import the CSS file
// import CareAdviser from "../CareAdviser/careAdviser";
import { TypeAnimation } from "react-type-animation";

export default function MasonryImageList() {
  const { palette } = Theme;
  return (

    <>  
    
    
     <Box className="MasonryImageList-container">
       {/* <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Garden Decor &' ,
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'NurseryTree Products   ' ,
        1000, // wait 1s before replacing "Mice" with "Hamsters"
       
      ]}
      // wrapper="span"
      speed={30}
      
      style={{ fontSize: '2.5em',  fontWeight:'700', textAlign:'center',display:'flex', justifyContent:'center', color:'#0BB00C' }}
      repeat={Infinity}
    /> */}

      {/* <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
       
        'Care Adviser' ,
        1000, // wait 1s before replacing "Mice" with "Hamsters"
       
      ]}
      // wrapper="span"
      speed={30}
      
      style={{ fontSize: '2em',  fontWeight:'700', textAlign:'center',display:'flex', justifyContent:'center',   }}
      repeat={Infinity}
    /> */}
      <Box className="MasonryImageList-box">
     
        <p className="MasonryImageList-title">Garden Decor & <span className="spn_hover"> Care Adviser</span>
        </p>

        <Grid container spacing={2}>
          {itemData.map((item) => (
            <Grid
              item
              spacing={1}
              sm={12}
              xs={12}
              md={2}
              lg={4}
              key={item.img}
              className="MasonryImageList-item"
            >
              <img
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=248&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
                className="MasonryImageList-img"
              />
            </Grid>
          ))}
        </Grid>
      </Box>
  

  

    </Box>
   
      </>
 
  );
}

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fEdhcmRlbiUyMERlY29yJTIwJTI2JTIwQ2FyZXxlbnwwfHwwfHx8MA%3D%3D",
    title: "Blinds",
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1682129447821-6b7330caaeea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8R2FyZGVuJTIwRGVjb3IlMjAlMjYlMjBDYXJlfGVufDB8fDB8fHww",
    title: "Books",
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1682129447821-6b7330caaeea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8R2FyZGVuJTIwRGVjb3IlMjAlMjYlMjBDYXJlfGVufDB8fDB8fHww",
    title: "Books",
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1682129447821-6b7330caaeea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8R2FyZGVuJTIwRGVjb3IlMjAlMjYlMjBDYXJlfGVufDB8fDB8fHww",
    title: "Books",
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1682129447821-6b7330caaeea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8R2FyZGVuJTIwRGVjb3IlMjAlMjYlMjBDYXJlfGVufDB8fDB8fHww",
    title: "Books",
  },
  {
    img: "https://images.unsplash.com/photo-1703113690930-fc391676e0de?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fEdhcmRlbiUyMERlY29yJTIwJTI2JTIwQ2FyZXxlbnwwfHwwfHx8MA%3D%3D",
    title: "Sink",
  },
  {
    img: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3",
    title: "Kitchen",
  },
  {
    img: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fEdhcmRlbiUyMERlY29yJTIwJTI2JTIwQ2FyZXxlbnwwfHwwfHx8MA%3D%3D",
    title: "Blinds",
  },
  {
    img: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fEdhcmRlbiUyMERlY29yJTIwJTI2JTIwQ2FyZXxlbnwwfHwwfHx8MA%3D%3D",
    title: "Blinds",
  },

  // Add more item data here...
];
