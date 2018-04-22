import * as React from 'react';
import { NavLink } from 'react-router-dom';
import Avatar from '../avatar/Avatar';
import './header.css';
import NameContext from '../../state/context';

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
                                    <NavLink exact to='/form' className="nav-item nav-link" activeClassName="active">Form</NavLink>
                                </div>
                            </div>
                            <NameContext.Consumer>
                            {userName => <Avatar userName={userName}/>}
                            </NameContext.Consumer>
                            
                  
                </div>
            </nav>
        );
    }
}

export default Header;
