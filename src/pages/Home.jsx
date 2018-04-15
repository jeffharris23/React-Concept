import * as React from 'react';
import { NavLink } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div className="page">
        <h1>Home</h1>
        <p>This is a sample react app. I've built all this stuff in Angular and now want to dig into React's way off doing similar functionality. 
          <NavLink to="/concepts">Visit the concepts page to see the roadmap.</NavLink>
        </p>
      </div>
    );
  }
}

export default Home;