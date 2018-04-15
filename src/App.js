import React, { Component } from 'react';
import Header from './shared/header/Header';
import Main from './shared/main/Main';
import NameContext from './state/context';


class App extends Component {
  render() {
    return (
      <NameContext.Provider value="">
        <div className="wrapper">
          <Header/>
          <Main/>
        </div>
      </NameContext.Provider>
    );
  }
}

export default App;
