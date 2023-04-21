import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';


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
    const [bioEditing, setBioEditing] = useState(true); // State to track if form is being edited or not

    // check for the formSubmitted flag in localStorage when the component mounts. 
        // If the flag is present, we set bioEditing to false so that the form is not displayed.
    useEffect(() => {
        const formSubmitted = localStorage.getItem('formSubmitted');
        if (formSubmitted) {
            setBioEditing(false);
        }
    }, []);

    // Called when the submit button is pressed
    const submitHandler = (event) => {
        event.preventDefault();
        console.log('Inside submitHandler() for VendorBioForm!!!');
        console.log('What is inside my newBio for VendorBioForm:', newBio);
        if (newBio.vendor_name && newBio.bio_description && newBio.location && newBio.pmt_methods && newBio.stall_num) {
            dispatch({ type: 'ADD_BIO', payload: newBio });
            localStorage.setItem('formSubmitted', 'true');
            setBioEditing(false);
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
        {bioEditing ? (
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
                {/* onsubmit, the onSubmit handler will set editing to false.
                        once editing = false, then the below div will render and we
                        will not see the form anymore. */}

            </div>

        </form>
        ) : (
            <div>
              
            </div>
        )} 
        </>
    )
}

export default BioForm;