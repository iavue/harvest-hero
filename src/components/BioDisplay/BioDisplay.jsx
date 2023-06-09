import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import button from '@mui/material/Button';
import '@fontsource/roboto/400.css';
import TextField from '@mui/material/TextField';
import './BioDisplay.css'
import { Typography, Box, Chip } from "@mui/material";


function BioDisplay() {
    console.log('Inside BioDisplay()!!');

    const user = useSelector((store) => store.user);
    console.log('what is in my user at biodisplay.jsx:', user);
    const bio = useSelector((store) => store.bioReducer);
    console.log('what is in my bio at biodisplay.jsx:', bio);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: "FETCH_BIO" });
    }, []);

    // TO DO: set up useState here for idToEdit, new vendor_name, etc.....
    // const [idToEdit, setIdToEdit] = useState('')
    const [idToEdit, setIdToEdit] = useState('');
    const [newVendorName, setNewVendorName] = useState('');
    const [newStallNum, setNewStallNum] = useState('');
    const [newPmtMethods, setNewPmtMethods] = useState('');
    const [newBioDescription, setNewBioDescription] = useState('');
    const [newLocation, setNewLocation] = useState('');

    function addInputField(singleBio) {
        setIdToEdit(singleBio.id)
        setNewVendorName(singleBio.vendor_name)
        setNewStallNum(singleBio.stall_num)
        setNewPmtMethods(singleBio.pmt_methods)
        setNewBioDescription(singleBio.bio_description)
        setNewLocation(singleBio.location)
        console.log('What is item.user_id:', singleBio.user_id); // these should match
        console.log('What is user.id:', user.id); // these should match
    }

    function updateBio(id) {
        let updatedBio = {
            vendor_name: newVendorName,
            bio_description: newBioDescription,
            location: newLocation,
            pmt_methods: newPmtMethods,
            stall_num: newStallNum,
            id
        }

        dispatch({
            type: 'EDIT_BIO',
            payload: updatedBio
        })
        setIdToEdit('')
    }

    const render = () => {

        const filteredBio = bio.filter(singleBio => singleBio.user_id === user.id);

        return filteredBio.length ? (
            filteredBio.map((singleBio) => (
                <div className="motherContainer" key={singleBio.id}>
                    <Box backgroundColor="#ffffff" sx={{ p: 3, boxShadow: 3, borderRadius: 1, width: "320px" }}>
                        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                            <Typography variant="h4">{singleBio.vendor_name}</Typography>
                            <Box sx={{ ml: 2 }}>
                                <Chip label={`Stall #${singleBio.stall_num}`} variant="outlined" />
                            </Box>
                        </Box>
                        {/* <Typography variant="subtitle1" gutterBottom>
                            Payment methods accepted: {singleBio.pmt_methods}
                        </Typography> */}
                        <Typography variant="body1" gutterBottom>
                            Payment options:
                        </Typography>
                        <Typography sx={{ mb: '10px'}}>{singleBio.pmt_methods}</Typography>
                        <Typography variant="body1" gutterBottom>
                            {singleBio.bio_description}
                        </Typography>
                        <Typography variant="subtitle2" gutterBottom>
                            Our location: {singleBio.location}
                        </Typography>

                        {/* <div><Typography variant="h4" sx={{ mb: 1 }}>{singleBio.vendor_name}</Typography></div>
                    <div><Typography sx={{ mb: 1 }}>Stall #: {singleBio.stall_num}</Typography></div>
                    <div><Typography sx={{ mb: 1 }}>Payment methods accepted: </Typography></div>
                    <div><Typography sx={{ mb: 1 }}>{singleBio.pmt_methods}</Typography></div>
                    <br />
                    <div><Typography sx={{ mb: 2 }}>{singleBio.bio_description}</Typography></div>
                    <br />
                    <div><Typography>Our location: {singleBio.location}</Typography></div> */}
                        {singleBio.user_id === user.id ? (
                            <div>
                                {idToEdit === singleBio.id ?
                                    <div>
                                        <TextField style={{ marginBottom: "10px", marginTop: "10px" }} size="small" label="Display name" placeholder="display name" value={newVendorName} onChange={(event) => setNewVendorName(event.target.value)}></TextField>
                                        <TextField style={{ marginBottom: "10px" }} size="small" label="Stall #" placeholder="stall #" value={newStallNum} onChange={(event) => setNewStallNum(event.target.value)}></TextField>
                                        <TextField style={{ marginBottom: "10px" }} multiline size="small" label="Payment options" placeholder="payment options" value={newPmtMethods} onChange={(event) => setNewPmtMethods(event.target.value)}></TextField>
                                        <TextField style={{ marginBottom: "10px" }} multiline label="Bio description" placeholder="bio description" value={newBioDescription} onChange={(event) => setNewBioDescription(event.target.value)}></TextField>
                                        <TextField style={{ marginBottom: "10px" }} size="small" label="Location" placeholder="location" value={newLocation} onChange={(event) => setNewLocation(event.target.value)}></TextField>
                                        <button className="save-changes" onClick={() => updateBio(singleBio.id)}>Save</button>
                                    </div>
                                    :
                                    <button className="edit-bio" variant="outlined" onClick={() => addInputField(singleBio)}>Edit</button>
                                }
                            </div>
                        ) : (<></>)}
                    </Box>
                </div>
            )) // end .map()
        ) : (
            <div></div>
        );
    };
    return (
        <>
            {render()}
        </>);

} // end BioDisplay
export default BioDisplay;