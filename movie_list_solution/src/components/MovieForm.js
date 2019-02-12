import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

class MovieForm extends Component {
    state = {
        name: String(),
        director: String(),
    }

    handleInputChange = field => event => this.setState({ [field]: event.target.value });

    handleSubmit = event => {
        event.preventDefault();
        const { name, director } = this.state;
        const newMovie = { name, director };
        this.props.createMovie(newMovie);
        this.setState({ name: String(), director: String() });
    }

    render() {
        const { name, director } = this.state;
        return (
            <Paper style={{ margin: 10, padding: 10 }}>
                <form
                style={{ display: 'flex', flexWrap: 'wrap' }}
                noValidate
                onSubmit={ this.handleSubmit}
                >
                    <Grid container spacing={24}>
                        <Grid item md={8} xs={12}>
                            <TextField
                            label="Name"
                            id="Movie-Id"
                            value={name}
                            onChange={this.handleInputChange('name')}
                            margin="normal"
                            fullWidth
                            />
                        </Grid>
                        <Grid item md={8} xs={12}>
                            <TextField 
                            label="Director"
                            id="director"
                            value={director}
                            onChange={this.handleInputChange('director')}
                            margin="normal"
                            fullWidth
                            />
                        </Grid>
                    </Grid>
                    <Button
                    variant="contained"
                    color="primary"
                    onClick={this.handleSubmit}>
                        Create movie!
                    </Button>
                </form>
            </Paper>
        )
    }
};

export default MovieForm;