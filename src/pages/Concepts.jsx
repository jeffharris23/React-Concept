import * as React from 'react';

class Concepts extends React.Component {
  render() {
    return (
        <div className="page">
            <h1>Concepts</h1>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Feature</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Routing</th>
                  <td>Completed</td>
                </tr>
                <tr>
                  <th scope="row">Basic Form Stuff</th>
                  <td>Not Completed</td>
                </tr>                   
                <tr>
                  <th scope="row">State Management (Context/Redux/Mobx)</th>
                  <td>Not Completed</td>
                </tr>             
                <tr>
                  <th scope="row">3rd Party API</th>
                  <td>Not Completed</td>
                </tr>
                <tr>
                  <th scope="row">Firebase/OAuth Authentication</th>
                  <td>Not Completed</td>
                </tr>
                <tr>
                  <th scope="row">GraphQL</th>
                  <td>Not Completed</td>
                </tr>              
              </tbody>
            </table>            
        </div>
        
    );
  }
}

export default Concepts;