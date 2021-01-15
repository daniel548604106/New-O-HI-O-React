import React from 'react';
import { TextField, FormLabel, Button } from '@material-ui/core';
const Login = () => {
  return (
    <div style={{ display: 'flex ', flexDirection: 'column' }}>
      <FormLabel label="Email">
        <TextField id="outlined-basic" label="Email" variant="outlined" />
      </FormLabel>
      <TextField id="outlined-basic" label="Password" variant="outlined" />
      <TextField id="outlined-basic" label="Confirm Password" variant="outlined" />
      <Button variant="contained" style={{ backgroundColor: 'black', color: 'white' }}>
        Login
      </Button>
    </div>
  );
};

export default Login;
