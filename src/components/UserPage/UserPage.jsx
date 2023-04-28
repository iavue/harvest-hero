import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
// import VendorBioForm from '../VendorBioForm/VendorBioForm';
import BioForm from '../BioForm/BioForm';
import { Typography } from '@mui/material';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  return (
    <div className="container">
      <Typography variant="h2">Welcome, {user.username}!</Typography>
      <Typography>Your ID is: {user.id}</Typography>
      {user.access_level === 'vendor' && <BioForm />}
      {/* <LogOutButton className="btn" /> */}
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
