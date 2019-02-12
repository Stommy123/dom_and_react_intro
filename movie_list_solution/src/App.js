import React, { Component } from 'react';
import { data } from './data/movieData';
import Movies from './components/Movies';
import NavBar from './components/NavBar';
import MovieForm from './components/MovieForm';
import Flash from './components/Flash';
import Search from './components/Search';

class App extends Component {
	state = {
		movies: [],
		flash: {
			message: String(),
			open: false,
			type: String(),
		},
	};

	componentDidMount() {
		const { movies } = data;
		this.setState({ movies });
	};

	createMovie = movie => {
		const { movies } = this.state;
		const newMovie = { id: movies.length, ...movie }
		const flash = {
			open: true,
			message: 'Movie successfully recorded',
			type: 'notice',
		};
		movies.push(newMovie);
		this.setState({ movies, flash });
	};

	deleteMovie = id => {
		const { movies } = this.state;
		const filteredmovies = movies.filter(movie => movie.id !== id);
		const flash = {
			open: true,
			message: 'Movie successfully deleted',
			type: 'alert'
		};
		this.setState({ movies: filteredmovies, flash });
	};

	handleSearch = event => {
		const searchText = event.target.value;
		const regexp = RegExp(searchText, 'i');
		let { movies } = this.state;
		const flash = { message: String(), open: false, type: String() };
		if (searchText.trim() !== String()) movies = movies.filter(movie => regexp.test(movie.name));
		else movies = data.movies;
		this.setState({ movies, flash });
	};

	render() {
		const { movies, flash: { message, open, type } } = this.state;
		return [
			<NavBar />,
			<Search handleSearch={this.handleSearch} />,
			<Movies movies={movies} deleteMovie={this.deleteMovie} />,
			<MovieForm createMovie={this.createMovie} />,
			<Flash
				message={message}
				open={open}
				type={type}
			/>
		];
	};
};

export default App;
