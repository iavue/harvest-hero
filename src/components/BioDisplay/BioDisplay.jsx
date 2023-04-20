import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function BioDisplay() {
    console.log('Inside BioDisplay()!!');

    const user = useSelector((store) => store.user);
    console.log('what is in my user at biodisplay.jsx:', user);
    const bio = useSelector((store) => store.bioReducer); // my bioReducer has my items!!! WTF WHY!!!! supposed to be farmer descriptions stuff
    console.log('what is in my bio at biodisplay.jsx:', bio);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: "FETCH_BIO" });
    }, []);

    const render = () => {

        const filteredBio = bio.filter(singleBio => singleBio.user_id === user.id);

        return (<>
            {filteredBio.map(singleBio => (
                <div key={singleBio.id}>
                    <div>{singleBio.vendor_name}</div>
                    <div><p>Stall #: </p>{singleBio.stall_num}</div>
                    <div><p>Payment methods accepted: </p>{singleBio.pmt_methods}</div>
                    <div>{singleBio.bio_description}</div>
                    <div>{singleBio.location}</div>
                </div>
            ))}
        </>);
    };

    return (
        <>
            {render()}
        </>
    );
}

export default BioDisplay;