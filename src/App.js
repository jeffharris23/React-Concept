import React, { Component } from 'react';
import ClassWrap from './components/ClassWrap'



class App extends Component {

  constructor(props) {
    super(props);

  }  
  render() {
    return (
      <ClassWrap auth={this.props.auth}/>
    );
  }
}

export default App;
