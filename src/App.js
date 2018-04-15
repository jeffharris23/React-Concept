import React, { Component } from 'react';
import Header from './shared/header/Header';
import Main from './shared/main/Main';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header/>
        <Main/>
      </div>
    );
  }
}

export default App;
