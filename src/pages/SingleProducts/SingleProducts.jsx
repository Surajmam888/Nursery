// import React, { useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { Carddata } from '../../Dummydata';
// import { Box, Button, Container, IconButton, Rating, Snackbar } from '@mui/material';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import BoltIcon from '@mui/icons-material/Bolt';
// import Theme from '../../Theme';
// import GridFor from '../../Components/GridFor/GridFor';
// import { useCart } from '../../Components/Functionality/snackbars';
// import PlantCards from '../../Components/PlantCards/PlantCards';
// import CloseIcon from '@mui/icons-material/Close';
// import './SingleProducts.css'

// const SingleProducts = () => {
//   const { addToCart } = useCart();
//   const { palette } = Theme;
//   const { productId } = useParams();
//   const thisProduct = Carddata.find((prod) => prod.id === productId);

//   const [cartItems, setCartItems] = useState([]);
//   const [openSnackbar, setOpenSnackbar] = React.useState(false);
//   const [snackbarMessage, setSnackbarMessage] = React.useState('');
//   const navigate = useNavigate();

//   const handleAddToCart = () => {
//     addToCart();
//     setCartItems((prevItems) => [...prevItems, thisProduct]);
//     showSnackbar(`${thisProduct.Name} added to cart`);
//   };

//   const handleGoToCart = () => {
//     navigate('/addCart');
//   };

//   const handleSnackbarClose = (event, reason) => {
//     if (reason === 'clickaway') {
//       return;
//     }
//     setOpenSnackbar(false);
//   };

//   const showSnackbar = (message) => {
//     setSnackbarMessage(message);
//     setOpenSnackbar(true);
//   };

//   return (
//     <div>
//       <Snackbar
//         open={openSnackbar}
//         autoHideDuration={3000}
//         onClose={handleSnackbarClose}
//         message={snackbarMessage}
//         action={
//           <React.Fragment>
//             <IconButton
//               size="small"
//               aria-label="close"
//               color="inherit"
//               onClick={handleSnackbarClose}
//             >
//               <CloseIcon fontSize="small" />
//             </IconButton>
//           </React.Fragment>
//         }
//       />

//       <Container fixed>
//         <Box
//           className="product-container"
//           // sx={{
//           //   bgcolor: palette.primary.main,
//           //   minHeight: '80vh',
//           //   marginTop: '1rem',
//           //   padding: '5rem',
//           //   display: { xs: 'block', md: 'flex' },
//           // }}
//         >
//           <Box className="product-image" >
//             <img src={thisProduct.img} alt="" />
//           </Box>

//           <Box className="product-details" >
//             <h1>{thisProduct.Name}</h1>
//             <Rating size="small" name="simple-controlled" value={thisProduct.Value} />
//             <h1 style={{ color: palette.primary.light }}> ₹ {thisProduct.price}</h1>
//             <h5> {thisProduct.Title}</h5>
//             <p> {thisProduct.description}</p>

//             <Box
//               className="button-container"
//               // sx={{
//               //   display: 'flex',
//               //   minWidth: '10rem',
//               //   gap: '2rem',
//               //   marginTop: '5rem',
//               //   justifyContent: 'flex-end',
//               // }}
//             >
//               <Button
//                 onClick={handleAddToCart}
//                 startIcon={<ShoppingCartIcon />}
//                 sx={{
//                   mt: '0.1rem',
//                   color: palette.primary.main,
//                   backgroundColor:palette. primary.light,
//                   ':hover': { bgcolor: '#ff6b6b86' },
//                 }}
//                 variant="contained"
//               >
//                 Add Cart
//               </Button>
//               <Button
//               size='small'
//                 onClick={handleGoToCart}
//                 startIcon={<BoltIcon />}
//                 sx={{
//                   mt: '0.1rem',
//                   color: palette.primary.main,
//                   backgroundColor:palette. primary.light,
//                   ':hover': { bgcolor: '#ff6b6bc6' },
//                 }}
//                 variant="contained"
//               >
//                 BUY NOW
//               </Button>
//             </Box>
//           </Box>
//         </Box>
//         <PlantCards/>
//         {/* <GridFor /> */}
//       </Container>
//     </div>
//   );
// };

// export default SingleProducts;

import React, { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { Carddata } from "../../Dummydata";
import {
  Box,
  Button,
  Container,
  IconButton,
  Rating,
  Snackbar,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BoltIcon from "@mui/icons-material/Bolt";
import Theme from "../../Theme";
import GridFor from "../../Components/GridFor/GridFor";
import { useCart } from "../../Components/Functionality/snackbars";
import PlantCards from "../../Components/PlantCards/PlantCards";
import CloseIcon from "@mui/icons-material/Close";
import "./SingleProducts.css";

const SingleProducts = () => {
  const { addToCart } = useCart();
  const { palette } = Theme;
  const { productId } = useParams();
  const thisProduct = Carddata.find((prod) => prod.id === productId);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const [snackbarMessage, setSnackbarMessage] = React.useState("");

  useEffect(() => {
    // Scroll to top when pathname changes
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    // Close snackbar when pathname changes
    setOpenSnackbar(false);
  }, [pathname]);

  const handleAddToCart = () => {
    addToCart();
    setSnackbarMessage(`${thisProduct.Name} added to cart`);
    setOpenSnackbar(true); // Open snackbar when product is added to cart
  };

  const handleGoToCart = () => {
    navigate("/addCart");
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  return (
    <div>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        message={snackbarMessage}
        action={
          <React.Fragment>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleSnackbarClose}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />

      <Container fixed>
        <Box className="product-container">
          <Box className="product-image">
            <img src={thisProduct.img} alt="" />
          </Box>

          <Box className="product-details">
            <h1>{thisProduct.Name}</h1>
            <Rating
              size="small"
              name="simple-controlled"
              value={thisProduct.Value}
            />
            <h1 style={{ color: palette.primary.light }}>
              {" "}
              ₹ {thisProduct.price}
            </h1>
            <h5> {thisProduct.Title}</h5>
            <p> {thisProduct.description}</p>

            <Box className="button-container">
              <Button
                onClick={handleAddToCart}
                startIcon={<ShoppingCartIcon />}
                sx={{
                  mt: "0.1rem",
                  color: palette.primary.main,
                  backgroundColor: palette.primary.light,
                  ":hover": { bgcolor: "#ff6b6b86" },
                }}
                variant="contained">
                Add Cart
              </Button>
              <Button
                onClick={handleGoToCart}
                startIcon={<BoltIcon />}
                sx={{
                  mt: "0.1rem",
                  color: palette.primary.main,
                  backgroundColor: palette.primary.light,
                  ":hover": { bgcolor: "#ff6b6bc6" },
                }}
                variant="contained">
                BUY NOW
              </Button>
            </Box>
          </Box>
        </Box>
        <PlantCards />
      </Container>
    </div>
  );
};

export default SingleProducts;
