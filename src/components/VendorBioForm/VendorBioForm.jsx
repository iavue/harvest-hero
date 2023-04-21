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

    const [editing, setEditing] = useState(true); // State to track if form is being edited or not
    const [bioEditing, setBioEditing] = useState(true);
    const [bioIdToEdit, setBioIdToEdit] = useState('')
    const [newVendorName, setNewVendorName] = useState('');
    const [newBioDescription, setNewBioDescription] = useState('');
    const [newLocation, setNewLocation] = useState('');
    const [newPmtMethods, setNewPmtMethods] = useState('');
    const [newStallNum, setNewStallNum] = useState('');
    const dispatch = useDispatch();

    const submitHandler = (event) => {
        console.log('Inside submitHandler() for VendorBioForm!!!');
        event.preventDefault();
        console.log('What is inside my newBio for VendorBioForm:', newBio);
        if (newBio.vendor_name && newBio.bio_description && newBio.location && newBio.pmt_methods && newBio.stall_num) {
            dispatch({ type: 'ADD_BIO', payload: newBio });
            setEditing(false); // Set editing state to false after submitting the form
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

    function updateBio(id) {
        let updatedBio = {
            title: newTitle,
            description: newDescription,
            id
        }

        dispatch({
            type: 'EDIT_BIO',
            payload: updatedItem
        })
        setIdToEdit('')
    }


    return (
        <>
            {editing ? (
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
            ) : (bioEditing ? (
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
                // <div>
                //     <p>Name: {newBio.vendor_name}</p>
                //     <p>Stall #: {newBio.stall_num}</p>
                //     <p>Payment methods accepted: {newBio.pmt_methods}</p>
                //     <p>Bio: {newBio.bio_description}</p>
                //     <p>Location: {newBio.location}</p>
                //     <button onClick={() => setBioEditing(false)}>Edit</button>
                // </div>
            ) : (
                <div>
                    <input value={newVendorName} onChange={(event) => setNewVendorName(event.target.value)}></input>
                    <input value={newBioDescription} onChange={(event) => setNewVendorName(event.target.value)}></input>
                    <input value={newLocation} onChange={(event) => setNewLocation(event.target.value)}></input>
                    <input value={newPmtMethods} onChange={(event) => setNewPmtMethods(event.target.value)}></input>
                    <input value={newStallNum} onChange={(event) => setNewStallNum(event.target.value)}></input>
                    {/* TO DO: fix the way how this is supposed to be showing!!!!!
                    After clicking save changes the update should be sent to the server => database to update the what's
                    in the database. 
                    Then the above DIV should display instead with the updated info from the DB!!! */}
                    {/* <button onClick={() => updateBio(newBio.id)}>Save Changes</button> */}
                    {/* <button onClick={() => setBioEditing(false)}>Save Changes</button> */}
                </div>
            )
            )}
        </>
    )
}

export default VendorBioForm;