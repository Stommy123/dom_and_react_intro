import React, { Component } from 'react';
import { MOVIES } from './data';
import { Movies, NavBar, MovieForm, Flash, Search } from './components';
import { GlobalContext } from './context';

class App extends Component {
  static contextType = GlobalContext.Consumer;
  state = { movies: MOVIES, filteredMovies: MOVIES };
  createMovie = movie => {
    const { movies } = this.state;
    const lastMovie = movies[movies.length - 1];
    const { dispatch } = this.context;
    dispatch.flash.setFlash({ open: true, message: 'Movie successfully record', type: 'notice' });
    const newMoviesList = [...movies, { id: lastMovie.id + 1, ...movie }];
    this.setState({ movies: newMoviesList, filteredMovies: newMoviesList });
  };

  deleteMovie = id => _ => {
    const { movies } = this.state;
    const filteredMovies = movies.filter(movie => movie.id !== id);
    const { dispatch } = this.context;
    dispatch.flash.setFlash({ open: true, message: 'Movie successfully deleted', type: 'alert' });
    this.setState({ movies: filteredMovies, filteredMovies });
  };

  handleSearch = event => {
    const { movies } = this.state;
    const searchText = event.target.value || String();
    const filteredMovies = searchText
      ? movies.filter(({ name }) => name.toLowerCase().includes(searchText.toLowerCase()))
      : movies;
    const flash = { message: String(), open: false, type: String() };
    this.setState({ filteredMovies, flash });
  };

  render() {
    const { filteredMovies } = this.state;
    const {
      state: { flash },
      dispatch
    } = this.context;
    return (
      <>
        <NavBar />
        <Search handleSearch={this.handleSearch} />
        <Movies movies={filteredMovies} deleteMovie={this.deleteMovie} />
        <MovieForm createMovie={this.createMovie} />
        <Flash {...flash} handleClose={dispatch.flash.resetFlash} />
      </>
    );
  }
}

export default App;
