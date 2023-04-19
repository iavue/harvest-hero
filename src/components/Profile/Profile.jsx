import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function Profile() {

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

    const render = () => {
        const filteredItems = items.filter(item => item.user_id === user.id);
        
        return filteredItems.length ? (
            filteredItems.map((item) => (
                <li key={item.id}>
                    {item.title}
                    {item.description}
                    {item.user_id === user.id ? (

                        <div>

                            {/* this means if true do this, else do that */}
                            {/* this onClick resets the state every time to make it match the item id that is clicked on */}
                            {/* if item.id matches idToEdit show input fields otherwise show edit button  */}

                            {idToEdit === item.id ?
                                <div>
                                    {/* these are inline functions, they do the same as making a function above */}
                                    <input value={newTitle} onChange={(event) => setNewTitle(event.target.value)}></input>

                                    <input value={newDescription} onChange={(event) => setNewDescription(event.target.value)}></input>

                                    <button onClick={() => updateItem(item.id)}>Save Changes</button>
                                </div>
                                :
                                <button onClick={() => addInputField(item)}>Edit</button>
                            }
                                <button onClick={() => dispatch({ type: 'DELETE_ITEM', payload: item.id })}>Delete</button>

                        </div>

                    ) : (
                        <> 
                        </>
                    )}
                </li>
            )) // end .map()
        ) : (
            <li>Page loading...</li>
            // Return "Page loading..." if filteredItems.length is not true (does not have anything inside the 'filteredItemsDou' array)
        );
    };
    return <ul>{render()}</ul>;
}

export default Profile;
