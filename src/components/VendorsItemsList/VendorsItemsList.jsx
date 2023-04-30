import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import VendorBioForm from '../VendorBioForm/VendorBioForm';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import '@fontsource/roboto/400.css';
import { positions } from '@mui/system';
import './VendorsItemsList.css';
import TextField from '@mui/material/TextField';

function VendorsItemsList() {

    const user = useSelector((store) => store.user);
    const items = useSelector((store) => store.itemsReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: "FETCH_ITEMS" });
    }, []);

    const [idToEdit, setIdToEdit] = useState('')
    const [newTitle, setNewTitle] = useState('')
    const [newDescription, setNewDescription] = useState('')

    function addInputField(item) {
        setIdToEdit(item.id)
        setNewTitle(item.title)
        setNewDescription(item.description)
        console.log('What is item.user_id:', item.user_id); // these should match
        console.log('What is user.id:', user.id); // these should match
    }

    function updateItem(id) {
        let updatedItem = {
            title: newTitle,
            description: newDescription,
            id
        }

        dispatch({
            type: 'EDIT_ITEM',
            payload: updatedItem
        })
        setIdToEdit('')
    }

    // const render = () => {

    //     const filteredItems = items.filter(item => item.user_id === user.id);

    //     return filteredItems.length ? (
    //         filteredItems.map((item) => (
    //             <Paper elevation={6} sx={{ maxWidth: 280, mb: 4, mx: "auto", p: 2}}>
    //             <Box sx={{ m: 8, }} key={item.id}>
    //                 <img src={item.image_path} style={{maxWidth: '150px'}} alt={item.title}/>
    //                 <br />
    //                 <Typography variant="h5" sx={{ mt: 2 }}>{item.title}</Typography>
    //                 <br />
    //                 <Typography >{item.description}</Typography>
    //                 {item.user_id === user.id ? (

    //                     <div>

    //                         {/* this means if true do this, else do that */}
    //                         {/* this onClick resets the state every time to make it match the item id that is clicked on */}
    //                         {/* if item.id matches idToEdit show input fields otherwise show edit button  */}
    //                         <Button variant="outlined" sx={{ mr: 1, my: 3 }} startIcon={<DeleteIcon />} onClick={() => dispatch({ type: 'DELETE_ITEM', payload: item.id })}>Delete</Button>
    //                         {idToEdit === item.id ?
    //                             <div>
    //                                 {/* these are inline functions, they do the same as making a function above */}
    //                                 <input value={newTitle} onChange={(event) => setNewTitle(event.target.value)}></input>

    //                                 <input value={newDescription} onChange={(event) => setNewDescription(event.target.value)}></input>

    //                                 <Button variant="outlined" sx={{ my: 3 }} onClick={() => updateItem(item.id)}>Save Changes</Button>
    //                             </div>
    //                             :
    //                             <Button variant="outlined" onClick={() => addInputField(item)}>Edit</Button>
    //                         }


    //                     </div>

    //                 ) : (
    //                     <> 
    //                     </>
    //                 )}
    //             </Box>
    //             </Paper>
    //         )) // end .map()
    //     ) : (
    //         <p>0 items in your catalog</p>
    //         // Return "0 items in your catalog" if filteredItems.length is not true (does not have anything inside the 'filteredItemsDou' array)
    //     );
    // };

    const render = () => {

        const filteredItems = items.filter(item => item.user_id === user.id);

        return filteredItems.length ? (
            filteredItems.map((item) => (
                <Paper elevation={2} sx={{ maxWidth: 334, mb: 2, mx: 'auto', p: 2 }}>
                    <Box key={item.id}>
                        <img src={item.image_path} style={{ maxWidth: '300px' }} alt={item.title} />
                        <Typography variant="h5" sx={{ mt: 0 }}>{item.title}</Typography>
                        <Typography sx={{ mt: 2 }}>{item.description}</Typography>
                        {item.user_id === user.id ? (
                            <Box sx={{ mt: 2, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <Button className='deleteBtn' startIcon={<IconButton aria-label="delete">
                                    <DeleteIcon />
                                </IconButton>} onClick={() => dispatch({ type: 'DELETE_ITEM', payload: item.id })}></Button>
                                {idToEdit === item.id ?
                                    <div sx={{ display: "flex", alignItems: "center" }}>
                                        <TextField style={{ marginBottom: "20px" }} id="outlined-textarea1" className="textField" label="Title" placeholder="Title" multiline value={newTitle} onChange={(event) => setNewTitle(event.target.value)} sx={{ mr: 2 }} />
                                        <br />
                                        <TextField style={{ marginBottom: "20px" }} id="outlined-textarea2" className="textField" label="Description" placeholder="Description" multiline value={newDescription} onChange={(event) => setNewDescription(event.target.value)} sx={{ mr: 2 }} />
                                        <Button variant="outlined" onClick={() => updateItem(item.id)}>Save Changes</Button>
                                    </div>
                                    :
                                    <Button variant="outlined" onClick={() => addInputField(item)}>Edit</Button>
                                }
                            </Box>
                        ) : null}
                    </Box>
                </Paper>
            )) // end .map()
        ) : (
            <Typography variant="body1" sx={{ mt: 2 }}>0 items in your catalog</Typography>
            // Return "0 items in your catalog" if filteredItems.length is not true (does not have anything inside the 'filteredItemsDou' array)
        );
    };

    return <>{render()}</>;
}

export default VendorsItemsList;
