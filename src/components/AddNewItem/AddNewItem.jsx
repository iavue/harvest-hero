import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function AddNewItem() {

    // let [newItem, setNewItem] = useState({ title: '', description: '' });

    // const dispatch = useDispatch();
    // const history = useHistory();

    // const submitHandler = (event) => {
    //     console.log('Inside submitHandler()!!!');
    //     event.preventDefault();

    //     if (newItem.title && newItem.description) {
    //         dispatch({ type: 'ADD_ITEM', payload: newItem });
    //         history.push('/profile');
    //     }

    // }

    // const setItem = (event) => {
    //     let targetInputField = event.target.id;
    //     switch (targetInputField) {
    //         case '1':
    //             setNewItem({ ...newItem, title: event.target.value })
    //             break;
    //         case '2':
    //             setNewItem({ ...newItem, description: event.target.value })
    //             break;
    //         default:
    //             console.log('Missing Input');
    //             break;
    //     }
    //     console.log('newItem:', newItem);
    // }

    // return (<>
    //     <form onSubmit={submitHandler}>

    //         {/* <div className="container"> */}

    //         <input id='1' placeholder="title" value={newItem.title} onChange={setItem}></input>
    //         <input id='2' placeholder="description" value={newItem.description} onChange={setItem}></input>
    //         <button type="submit">Add Item</button>

    //         {/* </div> */}

    //     </form>
    //     </>
    // );

    // TESTING CODE BELOW HERE!!!!

    const [newItem, setNewItem] = useState({ title: '', description: '' });
    const [image, setImage] = useState(null);

    const dispatch = useDispatch();
    const history = useHistory();

    const handleImageChange = (event) => {
        setImage(event.target.files[0]);
    };

    const submitHandler = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('title', newItem.title);
        formData.append('description', newItem.description);
        formData.append('image', image);

        if (newItem.title && newItem.description) {
                dispatch({ type: 'ADD_ITEM', payload: formData });
                history.push('/profile');
            }
    };

    const setItem = (event) => {
        let targetInputField = event.target.id;
        switch (targetInputField) {
            case '1':
                setNewItem({ ...newItem, title: event.target.value });
                break;
            case '2':
                setNewItem({ ...newItem, description: event.target.value });
                break;
            default:
                console.log('Missing Input');
                break;
        }
    };

    return (
        <>
            <form onSubmit={submitHandler}>
                <input
                    id="1"
                    placeholder="title"
                    value={newItem.title}
                    onChange={setItem}
                />
                <input
                    id="2"
                    placeholder="description"
                    value={newItem.description}
                    onChange={setItem}
                />
                <input type="file" name="image" onChange={handleImageChange} />
                <button type="submit">Add Item</button>
            </form>
        </>)

}

export default AddNewItem;
