import {
  AppBar,
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import Theme from "../../Theme";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
const Dropdown = () => {
  const { primary } = Theme;
  return (
    <>
      <Box sx={{ display: { sm: "none", md: "block", xs: "none" } }}>
        <List sx={{ display: "flex", width: "30rem" }} dense>
          <ListItem>
            <ListItemText primary="Single" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Single" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Single" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Single" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Single" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Single" />
          </ListItem>
        </List>
      </Box>
    </>
  );
};

export default Dropdown;
