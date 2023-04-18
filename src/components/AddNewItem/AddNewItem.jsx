import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function AddNewItem() {

    let [newItem, setNewItem] = useState({ title: '', description: '', dateHarvested: '' });
    // const [title, setTitle] = useState('');
    // const [description, setDescription] = useState('');
    // const [dateHarvested, setDateHarvested] = useState('');

    const submitHandler = (event) => {
        console.log('Inside submitHandler()!!!');
        event.preventDefault();
        if (newItem.title && newItem.description && newItem.dateHarvested) {
            dispatch({ type: 'ADD_ITEM', payload: newItem });
            history.push('/profile');
        }
    }

    const setItem = (event) => {
        let targetInputField = event.target.id;
        switch (targetInputField) {
            case '1':
                setNewItem({ ...newItem, title: event.target.value })
                break;
            case '2':
                setNewItem({ ...newItem, description: event.target.value })
                break;
            case '3':
                setNewItem({ ...newItem, dateHarvested: event.target.value })
                break;
            default:
                console.log('Missing Input');
                break;
        }
        console.log('newItem:', newItem);
    }

    return (
        <form onSubmit={submitHandler}>

            {/* <div className="container"> */}

            {/* Image upload might become a stretch. 
                    Need to figure out how to get images to stay on the DOM using multer! */}
            {/* <p>Select an image to upload.</p>
                <input type="file"></input> */}

            <input id='1' placeholder="title" value={newItem.title} onChange={setItem}></input>
            <input id='2' placeholder="description" value={newItem.description} onChange={setItem}></input>
            <input id='3' type="date" placeholder="date harvested" value={newItem.dateHarvested} onChange={setItem}></input>
            <button type="submit">Add Item</button>

            {/* </div> */}

        </form>
    );
}

export default AddNewItem;
