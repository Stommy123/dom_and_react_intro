import React, { Component } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import red from '@material-ui/core/colors/red';
import lightGreen from '@material-ui/core/colors/lightGreen';

class Flash extends Component {
  static getDerivedStateFromProps(nextProps) {
    return nextProps;
  }
  state = { open: false, message: String(), type: String() };

  handleClose = _ => this.setState({ open: false, message: String(), type: String() });

  render() {
    const { open, message, type } = this.state;
    const backgroundColor = { alert: red[500], notice: lightGreen[500] }[type];
    return (
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        open={open}
        autoHideDuration={3000}
        onClose={this.handleClose}
      >
        <SnackbarContent message={message} style={{ backgroundColor }} />
      </Snackbar>
    );
  }
}

export default Flash;
