import * as React from 'react';
import { NavLink } from 'react-router-dom';


class Dashboard extends React.Component {
  constructor(props) {
    super(props);
   
  }
 

  render() {
    return (
      <div className="page">
        <h1>Dashboard</h1>
        <p>This is a private page that is only accesible if you're logged in.</p>
      </div>
    );
  }
}

export default Dashboard;
