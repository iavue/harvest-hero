import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

function VendorBioForm() {
    console.log('Inside VendorBioForm()!');

    let [newBio, setNewBio] = useState({
        vendor_name: '',
        bio_description: '',
        location: '',
        pmt_methods: '',
        stall_num: ''
    });

    const dispatch = useDispatch();

    const submitHandler = (event) => {
        console.log('Inside submitHandler() for VendorBioForm!!!');
        event.preventDefault();
        console.log('What is inside my newBio for VendorBioForm:', newBio);
        if (newBio.vendor_name && newBio.bio_description && newBio.location && newBio.pmt_methods && newBio.stall_num) {
            dispatch({ type: 'ADD_BIO', payload: newBio });
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
        <form onSubmit={submitHandler}>

            <div className="container">

                {/* Image upload might become a stretch. 
                    Need to figure out how to get images to stay on the DOM using multer! */}
                {/* <p>Select a profile image to upload.</p>
                <input type="file"></input> */}

                <input id='1' placeholder="name" value={newBio.vendor_name} onChange={setBio}></input>
                <input id='2' placeholder="bio" value={newBio.bio_description} onChange={setBio}></input>
                <input id='3' placeholder="location" value={newBio.location} onChange={setBio}></input>
                <input id='4' placeholder="payment methods accepted" value={newBio.pmt_methods} onChange={setBio}></input>
                <input id='5' placeholder="stall number" value={newBio.stall_num} onChange={setBio}></input>
                <button type="submit">✔️</button>

            </div>

        </form>
    )
}

export default VendorBioForm;