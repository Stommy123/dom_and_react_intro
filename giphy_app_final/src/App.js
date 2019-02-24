import React, { Component } from "react";
import axios from "axios";
import SearchForm from "./components/SearchForm";
import GifList from "./components/GifList";

class App extends Component {
  state = { gifs: [], loading: true };

  componentDidMount() {
    this.performSearch();
  }

  performSearch = async (query = "cats") => {
    const {
      data: { data }
    } = await axios.get(
      `http://api.giphy.com/v1/gifs/search?q=${query}&limit=24&api_key=dc6zaTOxFJmzC`
    );
    this.setState({ gifs: data, loading: false });
  };

  render() {
    const { gifs, loading } = this.state;
    return (
      <div className="App">
        <div className="main-header">
          <div className="inner">
            <h1 className="main-title">Gif Search</h1>
            <SearchForm onSearch={this.performSearch} />
          </div>
        </div>
        <div className="main-content">
          {loading ? <p>Loading...</p> : <GifList data={gifs} />}
        </div>
      </div>
    );
  }
}

export default App;
