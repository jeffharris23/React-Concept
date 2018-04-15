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
        <div className="max-width pt-4">
          <form>
            <div className="form-group">
              <label for="name">Name</label>
              <input type="text" className="form-control" id="name" placeholder="Enter your name" />
              <small class="form-text text-muted">
                State test, enter your name to have it added to the top right of global nav.
              </small>              
            </div>
            <button type="submit" className="btn btn-primary">Enter</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Home;