App.js

import React, { Component } from 'react';
import Search from './components/Search';

class App extends React.Component {
  state = {
    dog_URL: undefined,
  }
  getDogs = async (e) => {
    e.preventDefault();
    const api_call = await fetch(`https://random.dog/woof.json`);
    const data = await api_call.json();
    const dog_url = data.url;
    this.setState({
      result_URL: dog_url
    })
  }
  render() {
    return (
      <div className="container">
          <Search
            getDogs={this.getDogs}
        </div>

      );
  }
}

export default App;

class Search extends React.Component {
  render() {
      return (
          <form onSubmit={this.props.getDogs}>
              <input type="text" name="q" placeholder="search for..." />
              <br />
              <Button> Search </Button>
              <br />
// <p> Dog link: <a href="{this.props.dog_url}">{this.props.dog_url}</a> </p>
<p> Dog link: <a href="{this.props.dog_url}">{this.props.dog_url}</a> </p>
        </form>
          )
  }
}

export default Search;