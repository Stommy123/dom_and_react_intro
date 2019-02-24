import React, { Component } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import red from '@material-ui/core/colors/red';
import lightGreen from '@material-ui/core/colors/lightGreen';

class Flash extends Component {

    state = { open: false, message: String(), type: String() };

    componentWillReceiveProps(props) {
        const { open, message, type } = props;
        this.setState({ open, message, type });
    };

    handleClose = event => this.setState({ open: false, message: String(), type: String() });

    render() {
        const colors = { alert: red[500], notice: lightGreen[500] };
        const { open, message, type } = this.state;
        return (
            <Snackbar
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
            }}
            open={open}
            autoHideDuration={3000}
            onClose={this.handleClose}
            >
                <SnackbarContent
                message={message}
                style={{ backgroundColor: colors[type] }}
                />
            </Snackbar>
        )
    };
};

export default Flash;