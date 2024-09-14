import React from 'react';
import { Box, Typography, TextField, Button, Grid, Link, useTheme } from '@mui/material';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';
import "./footer.css";

const Footer = () => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

  return (
    <Box
      sx={{
        backgroundColor: isDarkMode ? '#121212' : '#000',
        color: '#fff',
        padding: '20px 40px',
        width: '100%',
        margin: '0 auto', 
      }}
    >
      <div className='w-[80%] m-auto '>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={3}>
            <Typography variant="h5" gutterBottom>
              Exclusive
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Subscribe
            </Typography>
            <Typography variant="body1" gutterBottom>
              Get 10% off your first order
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <TextField
                placeholder="Enter your email"
                size="small"
                sx={{
                  backgroundColor: '#fff',
                  borderRadius: '4px',
                  marginRight: '10px',
                  '& input': { padding: '8px 12px' },
                }}
              />
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#fff',
                  color: '#000',
                  minWidth: '36px',
                  padding: '8px 12px',
                }}
              >
                &gt;
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography variant="h5" gutterBottom>
              Support
            </Typography>
            <Typography variant="body1" gutterBottom>
              111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
            </Typography>
            <Typography variant="body1" gutterBottom>
              exclusive@gmail.com
            </Typography>
            <Typography variant="body1" gutterBottom>
              +88015-88888-9999
            </Typography>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Typography variant="h5" gutterBottom>
              Account
            </Typography>
            <Link href="#" color="inherit" underline="none" variant="body1">
              My Account
            </Link>
            <br />
            <Link href="#" color="inherit" underline="none" variant="body1">
              Cart
            </Link>
            <br />
            <Link href="#" color="inherit" underline="none" variant="body1">
              Wishlist
            </Link>
            <br />
            <Link href="#" color="inherit" underline="none" variant="body1">
              Shop
            </Link>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Typography variant="h5" gutterBottom>
              Quick Link
            </Typography>
            <Link href="#" color="inherit" underline="none" variant="body1">
              Privacy Policy
            </Link>
            <br />
            <Link href="#" color="inherit" underline="none" variant="body1">
              Terms Of Use
            </Link>
            <br />
            <Link href="#" color="inherit" underline="none" variant="body1">
              FAQ
            </Link>
            <br />
            <Link href="#" color="inherit" underline="none" variant="body1">
              Contact
            </Link>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Typography variant="h5" gutterBottom>
              Social
            </Typography>
            <ul className="wrapper">
              <li className="icon facebook">
                <span className="tooltip">Facebook</span>
                <Facebook />
              </li>
              <li className="icon twitter">
                <span className="tooltip">Twitter</span>
                <Twitter />
              </li>
              <li className="icon instagram">
                <span className="tooltip">Instagram</span>
                <Instagram />
              </li>
            </ul>
          </Grid>
        </Grid>
        <Typography variant="body1" align="center" sx={{ marginTop: '20px', padding: "30px 0px 0px 0px" }}>
          © Copyright Rimel 2022. All rights reserved
        </Typography>
      </div>
    </Box>
  );
};

export default Footer;
