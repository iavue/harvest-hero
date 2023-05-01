import React from 'react';
import { Typography } from '@mui/material';

function AboutPage() {
  return (
    <div className="container">
      <div>
        <Typography variant="h4">Technologies used</Typography>
        <Typography>React, Redux, Sagas, PostgreSQL, Node, Express, Multer, Sweet Alert, Material UI, JavaScript, CSS, HTML </Typography>
        <br/>
        <Typography variant="h4">Looking ahead...</Typography>
        <Typography>Functionality for vendors to generate a QR code for their profile and have a QR code sign at their stall for customers to scan. </Typography>
        <br />
        <Typography variant="h4">Thank you</Typography>
        <Typography>Prime instructors and staff, my cohort, mentors, friends and family, for all your support and encouragement.</Typography>
        <br />
        <img src="./linkedin_qr.jpg"/>
        <br />
        <Typography>linkedin.com/in/ia-vue/</Typography>
        <Typography>iavue.dev@gmail.com</Typography>
        <br />
        {/* <Typography variant="h4">About</Typography>
        <Typography>HarvestHero streamlines the experience for both vendors and customers at farmers’ markets. The application empowers vendors to update their profiles with a bio description of their farms and add pictures and descriptions
          of their produce to their inventory. And customers can use HarvestHero to effortlessly locate vendors, see payment options, and explore the fresh produce available.
        </Typography> */}
      </div>
    </div>
  );
}

export default AboutPage;
