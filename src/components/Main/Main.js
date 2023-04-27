import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
// import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import VendorStore from '../VendorStore/VendorStore';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

function Main() {
    console.log('Inside Main()!!!!');
    const dispatch = useDispatch();
    const [searchInput, setSearchInput] = useState('');
    const items = useSelector(store => store.searchReducer);
    console.log('what is inside items from main.js:', items);

    // TO DO: Decide if we want to turn on useEffect to clear the search list after every page refresh!
    // useEffect(() => {
    //     dispatch({
    //         type: 'CLEAR_ITEM_LIST'
    //     }); 
    // }, []);

    const onSearch = (evt) => {
        evt.preventDefault();
        console.log('what is inside items from main.js:', items);
        dispatch({
            type: 'SEARCH_FOR_ITEMS',
            payload: searchInput
        });
    }

    const addToList = () => {
        console.log('Inside addToList');
    }

    return (
        <>
            <form onSubmit={onSearch}>
                <input
                    placeholder="find something"
                    type="text"
                    value={searchInput}
                    onChange={evt => setSearchInput(evt.target.value)}
                />
                <input type="submit" value="Search" />
            </form>

            <ul>
                {items.map(item => (
                    <Box key={item.id}>
                        <img src={item.image_path} style={{ maxWidth: '150px' }} />
                        <br />
                        <button onClick={addToList}>Add to Shopping List</button>
                        <br />
                        <Typography variant="h5">
                            {item.title}
                        </Typography>
                        <br />
                        <Typography>
                            {item.description}
                        </Typography>
                        <br />
                        <Link to={`/vendorStore/${item.user_id}`}>{item.name}</Link>
                        {/* <Link to={`/vendorStore`}>{item.name}</Link>
                            <VendorStore props={item.user_id} /> */}
                    </Box>
                ))}
            </ul>
        </>
    )
}

export default Main;