import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

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
                <div key={singleBio.id}>
                    <div>{singleBio.vendor_name}</div>
                    <div><p>Stall #: </p>{singleBio.stall_num}</div>
                    <div><p>Payment methods accepted: </p>{singleBio.pmt_methods}</div>
                    <div>{singleBio.bio_description}</div>
                    <div>{singleBio.location}</div>
                    {singleBio.user_id === user.id ? (
                        <div>
                            {idToEdit === singleBio.id ?
                                <div>
                                    <input value={newVendorName} onChange={(event) => setNewVendorName(event.target.value)}></input>
                                    <input value={newStallNum} onChange={(event) => setNewStallNum(event.target.value)}></input>
                                    <input value={newPmtMethods} onChange={(event) => setNewPmtMethods(event.target.value)}></input>
                                    <input value={newBioDescription} onChange={(event) => setNewBioDescription(event.target.value)}></input>
                                    <input value={newLocation} onChange={(event) => setNewLocation(event.target.value)}></input>
                                    <button onClick={() => updateBio(singleBio.id)}>Save Changes</button>
                                </div>
                                :
                                <button onClick={() => addInputField(singleBio)}>Edit Bio</button>
                            }
                        </div>
                    ) : (<></>)}
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