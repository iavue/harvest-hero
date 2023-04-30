import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useSelector} from 'react-redux';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector(store => store.errors);
  // const accessLevel = useSelector(store => store.user.access_level);
  const dispatch = useDispatch();

  const login = (event) => {
    event.preventDefault();

    if (username && password) {
      dispatch({
        type: 'LOGIN',
        payload: {
          username: username,
          password: password,
          // accessLevel: accessLevel, STRETCH: will need to ensure we are sending the accessLevel (without this, nothing breaks anyway)
        },
      });
    } else {
      dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  }; // end login

  return (
    <Box component="form" className="formPanel" onSubmit={login} sx={{ '& > :not(style)': { m: 10, width: '25ch' } }}>
      <Typography variant="h2">Login</Typography>
      {errors.loginMessage && (
        <h3 className="alert" role="alert">
          {errors.loginMessage}
        </h3>
      )}
      <Stack direction="column" spacing={2}>
      <div>
        <label htmlFor="username">
          Username:
          <TextField
            sx={{backgroundColor: 'white', }}
            type="text"
            name="username"
            required
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="password">
          Password:
          <TextField
            sx={{backgroundColor: 'white', }}
            type="password"
            name="password"
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
      </div>
      <div>
        <Button sx={{backgroundColor: 'white', }} className="btn" type="submit" name="submit" value="Log In" variant="outlined">Log In</Button>
      </div>
      </Stack>
    </Box>
  );
}

export default LoginForm;
