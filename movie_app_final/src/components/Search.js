import React from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

const Search = ({ handleSearch }) => (
  <Paper style={{ margin: 10, padding: 10 }}>
    <TextField id="search" label="Search" type="search" margin="normal" fullWidth onChange={handleSearch} />
  </Paper>
);

export default Search;
