import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'


class PrivateRoute extends React.Component {
  constructor(props) {
    super(props);
  }
 

  render() {
    return (

    <Route render={(props) => (
        this.props.auth.isAuthenticated() === true
        ? <this.props.component {...props} auth={this.props.auth} />
        : <Redirect to='/login'/>
    )} />
    );
  }
}

export default PrivateRoute;