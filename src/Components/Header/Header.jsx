import React, { useEffect, useState } from "react";
import {
  AppBar,
  Badge,
  IconButton,
  InputBase,
  Toolbar,
  Typography,
  styled,
  alpha,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Grid,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";
import { useCart } from "../Functionality/snackbars";
import Login from "../../pages/LoginModal/Login";
import HeaderLOGO from "../images/LOGOO.png";
import Theme from "../../Theme";
import Searchbar from "./Searchbar";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Navbarr from "../Navbar/Navbarr";
import './Header.css'






const { palette } = Theme;
const Navbar = styled(AppBar)(({ theme, scrolled }) => ({
  backgroundColor: scrolled ? palette.primary.main : palette.primary.main, // Change color here
  transition: "background-color 0.3s",
  [theme.breakpoints.up("sm")]: {
    paddingLeft: theme.spacing(10),
  },
}));




const Header = () => {
  const { palette } = Theme;
  const { cartItems } = useCart();
  const [isModalOpen, setModalOpen] = useState(false);
  const [isDrawerOpen, setDrawerOpen] = useState(false);
const [scrolled, setScrolled] = useState(false);




useEffect(() => {
  const handleScroll = () => {
    const isScrolled = window.scrollY > 50;
    if (isScrolled !== scrolled) {
      setScrolled(isScrolled);
    }
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, [scrolled]);



  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  const handleDrawerItemClick = () => {
    setDrawerOpen(false);
  };



  const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor:'LightGray',
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
    
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

  return (

    <> 


    
        <div  className="Flex__box"  >
        
  

      <Navbar   
      // scrolled={scrolled} 
        sx={{
          backgroundColor: palette.primary.main,
          color: "initial",
position:'sticky'
      }}
       
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: {
              md: "space-between",
              sm: "flex-end",
              xs: "flex-end",
            },
          }}
        >
          {/* Hamburger Button */}
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer}
            sx={{ display: { md: "none", sm: "flex", xs: "flex" } }}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            variant="h"
            component="div"
            sx={{
              display: { md: "block", sm: "block", xs: "block" },
              "& img": {
                // width: "100%",
                // maxWidth: "150px",
                height: "auto",
              },
            }}
          >
            <Link to="/">
              <img src={HeaderLOGO} alt=""   className="img_logo"    />
            </Link>
          </Typography>

          {/* <Box
            sx={{
              display:'flex',
              justifySelf:'right',
              width: "100%",
              marginLeft: "3rem",
              maxWidth: 300,
            }}
          >
            <Searchbar />
          </Box> */}
          <Search    >
             <SearchIconWrapper>
               <SearchIcon />
             </SearchIconWrapper>
             <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>



          <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
            <Typography
              onClick={openModal}
              sx={{
                ":hover": { color: palette.primary.light },
                display: { md: "flex", sm: "flex", xs: "none" },
                alignItems: "center",
                cursor: "pointer",
                color:'black'
              }}
            >
              <IconButton color="">
                <PersonIcon sx={{ marginBottom: "2px" , ":hover": { color: palette.primary.light }}} />
              </IconButton>
              Login
            </Typography>
            <Login isOpen={isModalOpen} onClose={closeModal} />

            <Link
              style={{ textDecoration: "none", color: "initial" }}
              to="/AddCart"
            >
              <Typography
                sx={{
                  cursor: "pointer",
                  ":hover": { color: palette.primary.light },
                  display: { md: "flex", sm: "none", xs: "none" },
                  alignItems: "center",
                }}
              >
                <IconButton color="inherit">
                  <Badge badgeContent={cartItems} color="primary">
                    <LocalGroceryStoreIcon />
                  </Badge>
                </IconButton>
                Cart
              </Typography>
            </Link>
          </div>
        </Toolbar>
      </Navbar>

      <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer}>
        <List sx={{ display: "flex", flexDirection: "column", width: "10rem" }}>
          <ListItem button onClick={handleDrawerItemClick}>
            <Link to="" style={{ textDecoration: "none", color: "inherit" }}>
              <ListItemText onClick={openModal} primary="Login" />
            </Link>
          </ListItem>
          <ListItem button onClick={handleDrawerItemClick}>
            <Link
              to="/AddCart"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <ListItemText primary="Cart" />
            </Link>
          </ListItem>
          {/* Add more items as needed... */}
        </List>
      </Drawer>
    </div>
    </>
  
  );
};

export default Header;













































// demo
// import React, { useEffect, useState } from "react";
// import {
//   AppBar,
//   Badge,
//   IconButton,
//   InputBase,
//   Toolbar,
//   Typography,
//   styled,
//   alpha,
//   Box,
//   Drawer,
//   List,
//   ListItem,
//   ListItemText,
// } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
// import SearchIcon from "@mui/icons-material/Search";
// import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
// import SupportAgentIcon from "@mui/icons-material/SupportAgent";
// import PersonIcon from "@mui/icons-material/Person";
// import { Link } from "react-router-dom";
// import { useCart } from "../Functionality/snackbars";
// import Login from "../../pages/LoginModal/Login";
// import HeaderLOGO from "../images/LOGO.jpg";
// import Theme from "../../Theme";
// import Searchbar from "./Searchbar";
// import Navbarr from "../Navbar/Navbarr";

// const { palette } = Theme;

// const Navbar = styled(AppBar)(({ theme, scrolled }) => ({
//   backgroundColor: scrolled ? alpha(palette.primary.main, 0.9) : "transparent",
//   transition: "background-color 0.3s",
//   boxShadow: scrolled ? theme.shadows[2] : "none",
//   [theme.breakpoints.up("sm")]: {
//     paddingLeft: theme.spacing(10),
//   },
// }));

// const Header = () => {
//   const { palette } = Theme;
//   const { cartItems } = useCart();
//   const [isModalOpen, setModalOpen] = useState(false);
//   const [isDrawerOpen, setDrawerOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const isScrolled = window.scrollY > 50;
//       if (isScrolled !== scrolled) {
//         setScrolled(isScrolled);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [scrolled]);

//   const openModal = () => {
//     setModalOpen(true);
//   };

//   const closeModal = () => {
//     setModalOpen(false);
//   };

//   const toggleDrawer = () => {
//     setDrawerOpen(!isDrawerOpen);
//   };

//   const handleDrawerItemClick = () => {
//     setDrawerOpen(false);
//   };

//   return (
//     <>
//       <Box>
//         <Navbar  sx={{bgcolor:'white',position:'sticky'}}  >
//           <Toolbar
//             sx={{
//               display: "flex",
//               justifyContent: {
//                 md: "space-between",
//                 sm: "flex-end",
//                 xs: "flex-end",
//               },
//             }}
//           >
//             {/* Hamburger Button */}
//             <IconButton
//               edge="start"
//               color="inherit"
//               aria-label="menu"
//               onClick={toggleDrawer}
//               sx={{ display: { md: "none", sm: "flex", xs: "flex" } }}
//             >
//               <MenuIcon />
//             </IconButton>

//             <Typography
//               variant="h"
//               component="div"
//               sx={{
//                 display: { md: "block", sm: "block", xs: "block" },
//                 "& img": {
//                   width: "100%",
//                   maxWidth: "150px",
//                   height: "auto",
//                 },
//               }}
//             >
//               <Link to="/">
//                 <img src={HeaderLOGO} alt="" />
//               </Link>
//             </Typography>

//             <Box
//               sx={{
//                 display: "flex",
//                 justifySelf: "right",
//                 width: "100%",
//                 marginLeft: "3rem",
//                 maxWidth: 300,
//               }}
//             >
//               <Searchbar />
//             </Box>

//             <div
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 gap: "2rem",
//               }}
//             >
//               <Typography
//                 onClick={openModal}
//                 sx={{
//                   ":hover": { color: palette.primary.light },
//                   display: { md: "flex", sm: "flex", xs: "none" },
//                   alignItems: "center",
//                   cursor: "pointer",
//                   color: "black",
//                 }}
//               >
//                 <IconButton color="">
//                   <PersonIcon sx={{ marginBottom: "2px", ":hover": { color: palette.primary.light } }} />
//                 </IconButton>
//                 Login
//               </Typography>
//               <Login isOpen={isModalOpen} onClose={closeModal} />

//               <Link
//                 style={{ textDecoration: "none", color: "initial" }}
//                 to="/AddCart"
//               >
//                 <Typography
//                   sx={{
//                     cursor: "pointer",
//                     ":hover": { color: palette.primary.light },
//                     display: { md: "flex", sm: "none", xs: "none" },
//                     alignItems: "center",
//                   }}
//                 >
//                   <IconButton color="inherit">
//                     <Badge badgeContent={cartItems} color="primary">
//                       <LocalGroceryStoreIcon />
//                     </Badge>
//                   </IconButton>
//                   Cart
//                 </Typography>
//               </Link>
//             </div>
//           </Toolbar>
//         </Navbar>

//         <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer}>
//           <List sx={{ display: "flex", flexDirection: "column", width: "10rem" }}>
//             <ListItem button onClick={handleDrawerItemClick}>
//               <Link to="" style={{ textDecoration: "none", color: "inherit" }}>
//                 <ListItemText onClick={openModal} primary="Login" />
//               </Link>
//             </ListItem>
//             <ListItem button onClick={handleDrawerItemClick}>
//               <Link
//                 to="/AddCart"
//                 style={{ textDecoration: "none", color: "inherit" }}
//               >
//                 <ListItemText primary="Cart" />
//               </Link>
//             </ListItem>
//             {/* Add more items as needed... */}
//           </List>
//         </Drawer>
//       </Box>
//     </>
//   );
// };

// export default Header;


// import * as React from 'react';
// import { styled, alpha } from '@mui/material/styles';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import InputBase from '@mui/material/InputBase';
// import Badge from '@mui/material/Badge';
// import MenuItem from '@mui/material/MenuItem';
// import Menu from '@mui/material/Menu';
// import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
// import MenuIcon from '@mui/icons-material/Menu';
// import SearchIcon from '@mui/icons-material/Search';
// import NotificationsIcon from '@mui/icons-material/Notifications';
// import MoreIcon from '@mui/icons-material/MoreVert';
// import LoginIcon from '@mui/icons-material/Login';
// import HeaderLOGO from "../images/LOGOO.png";
// import { AccountCircle } from '@mui/icons-material';
// import { Button, Drawer, List, ListItem, ListItemText } from '@mui/material';
// import { useCart } from '../Functionality/snackbars';
// import { useState } from 'react';
// import Login from "../../pages/LoginModal/Login";
// import { Link } from 'react-router-dom';
// import Theme from '../../Theme';

// const Search = styled('div')(({ theme }) => ({
//   position: 'relative',
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: alpha(theme.palette.common.white, 0.15),
//   '&:hover': {
//     backgroundColor:'LightGray',
//   },
//   marginRight: theme.spacing(2),
//   marginLeft: 0,
//   width: '100%',
//   [theme.breakpoints.up('sm')]: {
//     marginLeft: theme.spacing(3),
//     width: 'auto',
//   },
// }));

// const SearchIconWrapper = styled('div')(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: '100%',
//   position: 'absolute',
//   pointerEvents: 'none',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: 'inherit',
//   '& .MuiInputBase-input': {
//     padding: theme.spacing(1, 1, 1, 0),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create('width'),
//     width: '100%',
//     [theme.breakpoints.up('md')]: {
//       width: '20ch',
//     },
//   },
// }));

// export default function PrimarySearchAppBar() {
//   const { palette } = Theme;
//   const { cartItems } = useCart();
//   const [isModalOpen, setModalOpen] = useState(false);
//   const [isDrawerOpen, setDrawerOpen] = useState(false);






//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

//   const isMenuOpen = Boolean(anchorEl);
//   const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

//   const handleProfileMenuOpen = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMobileMenuClose = () => {
//     setMobileMoreAnchorEl(null);
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//     handleMobileMenuClose();
//   };

//   const handleMobileMenuOpen = (event) => {
//     setMobileMoreAnchorEl(event.currentTarget);
//   };



//   const openModal = () => {
//     setModalOpen(true);
//   };

//   const closeModal = () => {
//     setModalOpen(false);
//   };

//   const toggleDrawer = () => {
//     setDrawerOpen(!isDrawerOpen);
//   };

//   const handleDrawerItemClick = () => {
//     setDrawerOpen(false);
//   };





//   const menuId = 'primary-search-account-menu';
//   const renderMenu = (
//     <Menu
//       anchorEl={anchorEl}
//       anchorOrigin={{
//         vertical: 'top',
//         horizontal: 'right',
//       }}
//       id={menuId}
//       keepMounted
//       transformOrigin={{
//         vertical: 'top',
//         horizontal: 'right',
//       }}
//       open={isMenuOpen}
//       onClose={handleMenuClose}
//     >
//       <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
//       <MenuItem onClick={handleMenuClose}>My Account</MenuItem>
//     </Menu>
//   );

//   const mobileMenuId = 'primary-search-account-menu-mobile';
//   const renderMobileMenu = (
//     <Menu
//       anchorEl={mobileMoreAnchorEl}
//       anchorOrigin={{
//         vertical: 'top',
//         horizontal: 'right',
//       }}
//       id={mobileMenuId}
//       keepMounted
//       transformOrigin={{
//         vertical: 'top',
//         horizontal: 'right',
//       }}
//       open={isMobileMenuOpen}
//       onClose={handleMobileMenuClose}
//     >
//       <MenuItem>
//         <IconButton size="large" aria-label="show 4 new mails" color="inherit">
//           <Badge badgeContent={4} color="error">
//             <LoginIcon/>
//           </Badge>
//         </IconButton>
//         <p>Messages</p>
//       </MenuItem>
//       <MenuItem>
//         <IconButton
//           size="large"
//           aria-label="show 17 new notifications"
//           color="inherit"
//         >
//           <Badge badgeContent={17} color="error">
//             <NotificationsIcon />
//           </Badge>
//         </IconButton>
//         <p>Notifications</p>
//       </MenuItem>
//       <MenuItem onClick={handleProfileMenuOpen}>
//         <IconButton
//           size="large"
//           aria-label="account of current user"
//           aria-controls="primary-search-account-menu"
//           aria-haspopup="true"
//           color="inherit"
//         >
//           <AccountCircle />
//         </IconButton>
//         <p>Profile</p>
//       </MenuItem>
//     </Menu>
//   );

//   return (

//     <>
//     <Box sx={{ flexGrow: 1 }}>



//       <AppBar   sx={{bgcolor:'white',   color:'initial',   }} >
//         <Toolbar>
//           <IconButton
//             size="large"
//             edge="start"
//             color="inherit"
//             aria-label="open drawer"
//             onClick={toggleDrawer}
//           sx={{ display: { md: "none", sm: "flex", xs: "flex" } }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography
//             variant="h4"
//             noWrap
//             component="div"
//             sx={{ display: { xs: 'none', sm: 'block' } }}
//           >
//             <img src={HeaderLOGO} alt="Nursery"  style={{marginTop:'0.5rem'}}  width={200}  />
          
//           </Typography>
//           <Search    >
//             <SearchIconWrapper>
//               <SearchIcon />
//             </SearchIconWrapper>
//             <StyledInputBase
//               placeholder="Search…"
//               inputProps={{ 'aria-label': 'search' }}
//             />
//           </Search>
//           <Box sx={{ flexGrow: 1 }} />
//           <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
//   {/* <IconButton 
  
//     onClick={openModal}
//     sx={{ color: 'Black', "&:hover": { color: '#0BB00C' } }}  // Apply color change on hover
//     size="small" 
//     aria-label="Login"
//   > */}
//     {/* <LoginIcon /> */}
//     <Button  sx={{ color: 'Black', "&:hover": { color: '#0BB00C' } }}  startIcon={<LoginIcon/>}  onClick={openModal}>Login</Button>
//   {/* </IconButton> */}
//   <Link
//     style={{ textDecoration: "none", color: "initial" }}
//     to="/AddCart"
//   >
//     <IconButton
//      sx={{ color: 'Black', "&:hover": { color: '#0BB00C' } }} 
//       size="large"
//       // aria-label="show 17 new notifications"
//       color="inherit"
//     >
//       <Badge badgeContent={cartItems} color="primary">
//         <LocalGroceryStoreIcon />
//       </Badge>
//       <Typography>Cart</Typography>
//     </IconButton>
//   </Link>
  
//   <IconButton
//     size="large"
//     edge="end"
//     aria-label="account of current user"
//     aria-controls={menuId}
//     aria-haspopup="true"
//     onClick={handleProfileMenuOpen}
//     color="inherit"
//   >
//     <AccountCircle />
//   </IconButton>
// </Box>

//           <Login isOpen={isModalOpen} onClose={closeModal} />
//           <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
//             <IconButton
//               size="large"
//               aria-label="show more"
//               aria-controls={mobileMenuId}
//               aria-haspopup="true"
//               onClick={handleMobileMenuOpen}
//               color="inherit"
//             >
//               <MoreIcon />
//             </IconButton>
//           </Box>
//         </Toolbar>
//       </AppBar>
//       {renderMobileMenu}
//       {renderMenu}
    
//       <Drawer anchor="center" open={isDrawerOpen} onClose={toggleDrawer}>
// <List sx={{ display: "flex", flexDirection: "column", width: "30rem" }}>
//             <ListItem button onClick={handleDrawerItemClick}>
//                <Link to="" style={{ textDecoration: "none", color: "inherit" }}>
//                <ListItemText onClick={openModal} primary="Login" />
//              </Link>
//             </ListItem>
//           <ListItem button onClick={handleDrawerItemClick}>
//               <Link
//                 to="/AddCart"
//                 style={{ textDecoration: "none", color: "inherit" }}
//               >
//                 <ListItemText primary="Cart" />
//               </Link>
//             </ListItem>
//             {/* Add more items as needed... */}
//           </List>
//         </Drawer>
//     </Box>
  

// </>
//   );
// }



