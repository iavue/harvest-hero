import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

function VendorBioForm() {
    console.log('Inside VendorBioForm()!');

    let [newBio, setNewBio] = useState({ vendor_name: '', 
    bio_description: '', 
    location: '',
    pmt_methods: '',
    stall_num: ''});

    const dispatch = useDispatch();

    const submitHandler = (event) => {
        console.log('Inside submitHandler()!!!');
        event.preventDefault();
        if (newBio.vendor_name && newBio.bio_description && newBio.location && newBio.pmt_methods && newBio.stall_num) {
            dispatch({ type: 'ADD_BIO', payload: newBio });
        }
    }


    return (
        <form onSubmit={submitHandler}>

            <div className="container">

            {/* Image upload might become a stretch. 
                    Need to figure out how to get images to stay on the DOM using multer! */}
            {/* <p>Select a profile image to upload.</p>
                <input type="file"></input> */}

            <input id='1' placeholder="name" value={newBio.vendor_name} onChange={setItem}></input>
            <input id='2' placeholder="bio" value={newBio.bio_description} onChange={setItem}></input>
            <input id='3' placeholder="location" value={newBio.location} onChange={setItem}></input>
            <input id='4' placeholder="payment methods accepted" value={newBio.pmt_methods} onChange={setItem}></input>
            <input id='5' placeholder="stall number" value={newBio.stall_num} onChange={setItem}></input>
            <button type="submit">✔️</button>

            </div>

        </form>
    )
}

export default VendorBioForm;