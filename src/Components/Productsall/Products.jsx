import React from 'react';
import { Card, CardMedia, Typography, Button, Box, CardActionArea, CardContent, CardActions, Rating } from '@mui/material';
import { Carddata } from '../../Dummydata';
import { Palette } from '@mui/icons-material';
import Theme from '../../Theme';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'; // Import the shopping cart icon
import PaymentIcon from '@mui/icons-material/Payment'; // Import the payment icon
// import './Products.css'; // Import your CSS file for additional styling if needed

export default function Products() {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center'   }}>
      {Carddata.map((product) => (
        <Card key={product.id} sx={{ width: 200, margin: '10px', padding:'2rem'}}>
          <CardActionArea>
            <CardMedia
              sx={{ height: 200 ,borderRadius:'10px'}}
              component="img"
              image={product.img}
              title={product.Title}
            />
            <Box   sx={{textAlign:'left',  marginTop:'1rem'  }}>
              <Typography sx={{fontSize:'18px',color:Theme.palette.primary.light,   textAlign:'left'}}   >
                {product.Name}
              </Typography>
              <Typography sx={{fontSize:'15px',   textAlign:'left'}}   >
                {product.Title}
              </Typography>
            </Box>
            <Rating   size='small' name="read-only" value={product.Value} readOnly />

          </CardActionArea>
          <CardActions sx={{marginTop:'3rem ' , display:"flex", justifyContent:'left' }}   >
          <Button size="small" sx={{ bgcolor: '#0BB00C', fontSize:'11px'}} variant="contained" startIcon={<ShoppingCartIcon />}>
              Add Cart
            </Button>
            <Button size="small" sx={{ bgcolor: '#0BB00C' ,fontSize:'11px'}} variant="contained" startIcon={<PaymentIcon />}>
              Buy
            </Button>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
}
