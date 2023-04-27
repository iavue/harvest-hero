import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

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

    // return (
    //     <>
    //         <form onSubmit={submitHandler}>
    //             <input type="file" name="image" onChange={handleImageChange} />
    //             <input
    //                 id="1"
    //                 placeholder="title"
    //                 value={newItem.title}
    //                 onChange={setItem}
    //             />
    //             <input
    //                 id="2"
    //                 placeholder="description"
    //                 value={newItem.description}
    //                 onChange={setItem}
    //             />
    //             <button type="submit">Add Item</button>
    //         </form>
    //     </>)

    return (
        <Box component="form" onSubmit={submitHandler} sx={{ '& > :not(style)': { m: 10, width: '25ch' } }}>
            <Stack direction="column" spacing={2}>

                <input type="file" name="image" onChange={handleImageChange} />

                <TextField
                    id="1"
                    label="Title"
                    variant="outlined"
                    value={newItem.title}
                    onChange={setItem}
                />

                <TextField
                    id="2"
                    label="Description"
                    variant="outlined"
                    value={newItem.description}
                    onChange={setItem}
                />

                <Button type="submit" variant="outlined">Add Item</Button>

            </Stack>
        </Box>
    )

}

export default AddNewItem;
