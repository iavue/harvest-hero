import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';



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

export default function PrimarySearchAppBar() {

  const dispatch = useDispatch();
  const [searchInput, setSearchInput] = useState('');
  const items = useSelector(store => store.searchReducer);

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

    <ul>
      {items.map(item => (
        <Box key={item.id}>
          <img src={item.image_path} style={{ maxWidth: '150px' }} />
          <br />
          <button onClick={addToList}>Add to Cart</button>
          <br />
          <Typography variant="h5">
            {item.title}
          </Typography>

          <Typography>
            {item.description}
          </Typography>

          <Link to={`/vendorStore/${item.user_id}`}>{item.name}</Link>
          {/* <Link to={`/vendorStore`}>{item.name}</Link>
            <VendorStore props={item.user_id} /> */}
        </Box>
      ))}
    </ul>
  </>
  );
}