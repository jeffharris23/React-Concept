import * as React from 'react';
import './login.css';


class LoginBtn extends React.Component {
    auth;
  constructor(props) {
    super(props);
  }  

  login = (e) => {
    e.preventDefault();
    this.props.auth.login();
  }

  logout = (e) => {
    e.preventDefault();
    this.props.auth.logout();
  }  

  render() {

    return (
        <div className="login-wrap">
          {
            
            this.props.auth.isAuthenticated() && (
              <a href="#" onClick={(e) => {this.logout(e)}} className="btn btn-dark btn-sm">Logout</a>
              )
          }
          {
          !this.props.auth.isAuthenticated() && (
            <a href="#" onClick={(e) => {this.login(e)}} className="btn btn-dark btn-sm">Login</a>
            )
          }
        </div>
    );
  }
}

export default LoginBtn;