import * as React from 'react';
import { NavLink } from 'react-router-dom';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit (event) {
      console.log('Form value: ' + this.state.name);
      event.preventDefault();
  }  

  render() {
    return (
      <div className="page">
        <h1>Home</h1>
        <p>
          This is a sample react app. I've built all this stuff in Angular and
          now want to dig into React's way off doing similar functionality.
          <NavLink to="/concepts">
            Visit the concepts page to see the roadmap.
          </NavLink>
        </p>
        <div className="max-width pt-4">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                placeholder="Enter your name"
                value={this.state.name}
                onChange={this.handleChange}
              />
              <small className="form-text text-muted">
                State test, enter your name to have it added to the top right of
                global nav.
              </small>
            </div>
            <input type="submit" value="Sumbit" className="btn btn-primary" disabled={this.state.name === ''}/>
          </form>
        </div>
      </div>
    );
  }
}

export default Home;
