import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function BioDisplay() {
    console.log('Inside BioDisplay()!!');

    const user = useSelector((store) => store.user);
    const bio = useSelector((store) => store.bioReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: "FETCH_ITEMS" });
    }, []);

    return(
        <p>This is where the bio will display!</p>
    )
}

export default BioDisplay;