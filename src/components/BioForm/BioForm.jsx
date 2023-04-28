import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import '@fontsource/roboto/400.css';



function BioForm() {
    console.log('inside BioForm()!!');

    let [newBio, setNewBio] = useState({
        vendor_name: '',
        bio_description: '',
        location: '',
        pmt_methods: '',
        stall_num: ''
    });
    const dispatch = useDispatch();
    const history = useHistory();
    // const user = useSelector((store) => store.user);
    // const formStatus = useSelector((store) => store.formStatusReducer);
    // console.log('what is in formStatus:', formStatus);

    // Called when the submit button is pressed
    const submitHandler = (event) => {
        event.preventDefault();
        console.log('Inside submitHandler() for BioForm!!!');
        console.log('What is inside my newBio for BioForm:', newBio);
       
        if (newBio.vendor_name && newBio.bio_description && newBio.location && newBio.pmt_methods && newBio.stall_num) {
            dispatch({ type: 'ADD_BIO', payload: newBio });
            history.push('/profile');
            // dispatch({ type: 'UPDATE_FORM_STATUS', payload: true });
        }
    }

    const setBio = (event) => {
        let targetInputField = event.target.id;
        switch (targetInputField) {
            case '1':
                setNewBio({ ...newBio, vendor_name: event.target.value })
                break;
            case '2':
                setNewBio({ ...newBio, bio_description: event.target.value })
                break;
            case '3':
                setNewBio({ ...newBio, location: event.target.value })
                break;
            case '4':
                setNewBio({ ...newBio, pmt_methods: event.target.value })
                break;
            case '5':
                setNewBio({ ...newBio, stall_num: event.target.value })
                break;
            default:
                console.log('Missing Input');
                break;
        }
        console.log('newBio:', newBio);
    }

    return (
        <>
        {/* {!user.profile_form_submitted && !formStatus.profile_form_submitted ? ( */}
        <Box component="form" onSubmit={submitHandler} sx={{ '& > :not(style)': { m: 6} }}>
     
            <div className="container">

                {/* Image upload might become a stretch. 
                        Need to figure out how to get images to stay on the DOM using multer! */}
                {/* <p>Select a profile image to upload.</p>
                            <input type="file"></input> */}
                <Typography variant="h4" style={{ marginBottom: "20px" }}>Add your bio</Typography>
                <TextField id='1' style={{ marginBottom: "10px" }} label="Display Name" placeholder="name" size="small" value={newBio.vendor_name} onChange={setBio}></TextField>
                <TextField id='5' style={{ marginBottom: "10px" }} label="Stall #" placeholder="stall number" size="small" value={newBio.stall_num} onChange={setBio}></TextField>
                <TextField id='4' style={{ marginBottom: "10px" }} label="Payment Methods Accepted" placeholder="payment methods accepted" multiline value={newBio.pmt_methods} onChange={setBio}></TextField>
                <TextField id='2' style={{ marginBottom: "10px" }} label="Bio Description" placeholder="bio" multiline value={newBio.bio_description} onChange={setBio}></TextField>
                <TextField id='3' style={{ marginBottom: "10px" }} label="Location" placeholder="location" size="small" value={newBio.location} onChange={setBio}></TextField>
                <br />
                <Button variant="outlined" type="submit">Submit</Button>
                {/* onsubmit, the onSubmit handler will set profile_form_submitted to true.
                        once profile_form_submitted = true, then the below empty div will render and we
                        will never see the form anymore. */}

            </div>
    
        </Box>
        {/* ) : (
            <div>
             
            </div>
        )}  */}
        </>
    )
}

export default BioForm;