import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { Button, Card, CardActions, CardContent, CardMedia } from '@mui/material';


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

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

    // ORIGINAL
    // return (
    //     <>
    //         <form onSubmit={onSearch}>
    //             <input
    //                 placeholder="find something"
    //                 type="text"
    //                 value={searchInput}
    //                 onChange={evt => setSearchInput(evt.target.value)}
    //             />
    //             <input type="submit" value="Search" />
    //         </form>

    //         <ul>
    //             {items.map(item => (
    //                 <Box key={item.id}>
    //                     <img src={item.image_path} style={{ maxWidth: '150px' }} />
    //                     <br />
    //                     <button onClick={addToList}>Add to Cart</button>
    //                     <br />
    //                     <Typography variant="h5">
    //                         {item.title}
    //                     </Typography>

    //                     <Typography>
    //                         {item.description}
    //                     </Typography>

    //                     <Link to={`/vendorStore/${item.user_id}`}>{item.name}</Link>
    //                     {/* <Link to={`/vendorStore`}>{item.name}</Link>
    //                         <VendorStore props={item.user_id} /> */}
    //                 </Box>
    //             ))}
    //         </ul>
    //     </>
    // )

    return (<>
        <Box component="form" onSubmit={onSearch} sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Search type="text"
                        value={searchInput}
                        onChange={evt => setSearchInput(evt.target.value)}>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="see what's in season"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                </Toolbar>
            </AppBar>

        </Box>

        <div>
            {items.map(item => (
                <Card key={item.id} sx={{ display: 'flex', maxWidth: '400px', margin: 'auto', my: '10px', mx: '5px' }}>
                    <CardMedia component="img" image={item.image_path} alt={item.title} sx={{ width: '40%' }} />
                    <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: '60%' }}>
                        <Typography variant="h5" component="h2" gutterBottom>
                            {item.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {item.description}
                        </Typography>
                        <Link to={`/vendorStore/${item.user_id}`} style={{ fontSize: '.9rem',}}>
                            {item.name}
                        </Link>
                        <CardActions sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                            <button className="add-to-cart" onClick={addToList}>
                                Add to Cart
                            </button>
                        </CardActions>
                    </CardContent>
                </Card>
            ))}
        </div>
    </>
    );

}

export default Main;