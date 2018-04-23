import * as React from 'react';
import { NavLink } from 'react-router-dom';


class Callback extends React.Component {
  constructor(props) {
    super(props);

      if (/access_token|id_token|error/.test(window.location.hash)) {
        props.auth.handleAuthentication();
      }    
  }
 

  render() {
    return (
      <div className="page">
        <p>loading...</p>
      </div>
    );
  }
}

export default Callback;
