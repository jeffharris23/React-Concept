import React, { Component } from 'react';
import Header from './shared/header/Header';
import Main from './shared/main/Main';
import NameContext from './state/context';


class App extends Component {

  constructor(props) {
    super(props);

  }  
  render() {
    return (
      <NameContext.Provider value="">
        <div className="wrapper">
          <Header auth={this.props.auth}/>
          <Main auth={this.props.auth} />
        </div>
      </NameContext.Provider>
    );
  }
}

export default App;
