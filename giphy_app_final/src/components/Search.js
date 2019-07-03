import React, { Component } from 'react';

class SearchForm extends Component {
  state = { searchText: String() };

  onSearchChange = e => this.setState({ searchText: e.target.value });

  handleSubmit = e => {
    e.preventDefault();
    const { searchText } = this.state;
    this.props.onSearch(searchText);
    this.setState({ searchText: String() });
  };

  render() {
    const { searchText } = this.state;
    return (
      <form className="search-form" onSubmit={this.handleSubmit}>
        <label className="is-hidden" htmlFor="search">
          Search
        </label>
        <input type="search" onChange={this.onSearchChange} name="search" value={searchText} placeholder="Search..." />
        <button type="submit" id="submit" className="search-button">
          <i className="material-icons icn-search" />
        </button>
      </form>
    );
  }
}

export default SearchForm;
