import * as React from 'react';
import { NavLink } from 'react-router-dom';


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageName: 'Home'
    };

  }
 

  render() {
    return (
      <div className="page">
        <h1>{ this.state.pageName }</h1>
        <p>
          This is a sample react app. I've built all this stuff in Angular and
          now want to dig into React's way off doing similar functionality.
          <NavLink to="/concepts">
            Visit the concepts page to see the feature set roadmap.
          </NavLink>
        </p>
      </div>
    );
  }
}

export default Home;
