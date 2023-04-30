import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';

function RegisterForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [accountType, setAccountType] = useState('');
  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();

  const registerUser = (event) => {
    event.preventDefault();

    dispatch({
      type: 'REGISTER',
      payload: {
        username: username,
        password: password,
        accountType: accountType,
      },
    });
  }; // end registerUser

  return (
    <Box component="form" className="formPanel" onSubmit={registerUser} sx={{ '& > :not(style)': { m: 10, width: '25ch' } }}>
      <Typography variant="h2">Register User</Typography>
      {errors.registrationMessage && (
        <h3 className="alert" role="alert">
          {errors.registrationMessage}
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
            value={username}
            required
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
            value={password}
            required
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="accountType">
          Account Type:
          <select
            style={{ width: '200px' }}
            name="accountType"
            value={accountType}
            required
            onChange={(event) => setAccountType(event.target.value)}>
              <option value="" disabled selected> -- select an option -- </option>
              <option value="customer">Customer</option>
              <option value="vendor">Vendor</option>
          </select>
        </label>
      </div>
      <div>
        <Button sx={{backgroundColor: 'white', }} variant="outlined" className="btn" type="submit" name="submit" value="Register">Register</Button>
        {/* <input className="btn" type="submit" name="submit" value="Register" /> */}
      </div>
      </Stack>
    </Box>
  );
}

export default RegisterForm;
