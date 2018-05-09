import * as React from 'react';
import { NavLink } from 'react-router-dom';
import LoginBtn from '../login/LoginBtn';
import './header.css';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return { user: state.user };
}

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          navOpen: false
        };
    }    

    toggleNav = () => {
        this.setState({
            navOpen : !this.state.navOpen
        });
    }
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light ">
                <div className="container">
                    <button className="navbar-toggler" type="button">
                        <span className="navbar-toggler-icon" onClick={this.toggleNav}></span>
                    </button>                
                    <div className={`${this.state.navOpen ? '' : 'collapse'} navbar-collapse pull-right`} id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <NavLink exact to='/' className="nav-item nav-link" activeClassName="active">Home</NavLink>
                            <NavLink exact to='/concepts' className="nav-item nav-link" activeClassName="active">Concepts</NavLink>
                            <NavLink exact to='/form' className="nav-item nav-link" activeClassName="active">Form <small>(redux)</small></NavLink>
                            <NavLink exact to='/dashboard' className="nav-item nav-link" activeClassName="active">Dashboard <small>(Logged in Only)</small></NavLink>
                        </div>
                    </div>
                    <LoginBtn auth={this.props.auth}/>                  
                </div>
            </nav>
        );
    }
}

export default connect(mapStateToProps)(Header);

