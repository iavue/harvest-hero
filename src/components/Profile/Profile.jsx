import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import VendorBioForm from '../VendorBioForm/VendorBioForm';
import VendorsItemsList from '../VendorsItemsList/VendorsItemsList';

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function Profile() {

    return (
        <>
        <VendorBioForm />
        
        <VendorsItemsList />
        </>
    )
}

export default Profile;
