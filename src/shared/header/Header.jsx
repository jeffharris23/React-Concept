import * as React from 'react';
import { NavLink } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light ">
            <div className="container">
                <div className="row">
                    <a className="navbar-brand" href="#">Concept App</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>                
                    <div className="collapse navbar-collapse pull-right" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <NavLink exact to='/' className="nav-item nav-link" activeClassName="active">Home</NavLink>
                            <NavLink exact to='/concepts' className="nav-item nav-link" activeClassName="active">Concepts</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
  }
}

export default Header;
