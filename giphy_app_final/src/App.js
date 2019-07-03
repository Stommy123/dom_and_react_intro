import React, { Component } from 'react';
import axios from 'axios';
import { Search, GifList } from './components';
import { generateUrl } from './utils';

class App extends Component {
  state = { gifs: [], loading: true };

  componentDidMount() {
    this.performSearch();
  }

  performSearch = async (query = 'cats') => {
    const { data: { data: gifs } = {} } = await axios.get(generateUrl(query));
    this.setState({ gifs, loading: false });
  };

  render() {
    const { gifs, loading } = this.state;
    return (
      <div className="App">
        <div className="main-header">
          <div className="inner">
            <h1 className="main-title">Gif Search</h1>
            <Search onSearch={this.performSearch} />
          </div>
        </div>
        <div className="main-content">{loading ? <p>Loading...</p> : <GifList data={gifs} />}</div>
      </div>
    );
  }
}

export default App;
