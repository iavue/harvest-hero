import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import BioForm from '../BioForm/BioForm';
import BioDisplay from '../BioDisplay/BioDisplay';
import VendorsItemsList from '../VendorsItemsList/VendorsItemsList';
import './Profile.css';


// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function Profile() {

    return (
        <div id="parentContainer">
            <div className="child-1"><BioDisplay /></div>
            <div className="child-2"><VendorsItemsList /></div>
        </div>
    )
}

export default Profile;
