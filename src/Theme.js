import { createTheme } from "@mui/material";

const Theme = createTheme({
  palette: {
    primary: {
      
       main: "#FFFFFF",
      light: "#0BB00C",
      // light: "#FF6B6B",
      Textlight:"#FFF700"
    
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  typography: {
    // Add custom typography styles if needed
  },
  // Add more theme customization options as needed
});

export default Theme;
