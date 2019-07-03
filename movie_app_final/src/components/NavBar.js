import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const NavBar = _ => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="title" color="inherit" style={{ flexGrow: 1 }}>
        Movie List!
      </Typography>
      <Typography variant="subheading" color="inherit">
        Tommy@Tommy.com
      </Typography>
      <Button color="inherit">Logout</Button>
    </Toolbar>
  </AppBar>
);

export default NavBar;
