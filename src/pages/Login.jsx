import * as React from 'react';
import { NavLink } from 'react-router-dom';
import LoginBtn from '../shared/login/LoginBtn';


class Login extends React.Component {
  constructor(props) {
    super(props);

    console.log(props);

  }
 

  render() {
    return (
      <div className="page">
        {
            
        this.props.auth.isAuthenticated() && (
            <div>
                <h1>Logout</h1>
                <p>Please click link below</p>
                <LoginBtn auth={this.props.auth} />
            </div>
        )
        }
        {
        !this.props.auth.isAuthenticated() && (
            <div>
                <h1>Login</h1>
                <p>Please click link below</p>
                <LoginBtn auth={this.props.auth} />
            </div>
        )
        }
        
        
      </div>
    );
  }
}

export default Login;
