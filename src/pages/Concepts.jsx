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
                  <td>Completed <i className="fas fa-check green"></i></td>
                </tr>
                <tr>
                  <th scope="row">Forms/Validation (Formik, Yup)</th>
                  <td>Completed <i className="fas fa-check green"></i></td>
                </tr> 
                <tr>
                  <th scope="row">State Management (Redux)</th>
                  <td>Completed <i className="fas fa-check green"></i></td>
                </tr> 
                <tr>
                  <th scope="row">React's version of Services</th>
                  <td>Completed (Auth) <i className="fas fa-check green"></i></td>
                </tr>   
                <tr>
                  <th scope="row">Auth (AuthO)</th>
                  <td>Completed <i className="fas fa-check green"></i></td>
                </tr>   
                <tr>
                  <th scope="row">Authenticated Route (auth guard)</th>
                  <td>Not Complete <i className="fas fa-times red"></i></td>
                </tr>                                    
                <tr>
                  <th scope="row">CLI stuff (component generators, build stuff)</th>
                  <td>Not Complete <i className="fas fa-times red"></i></td>
                </tr>                            
                <tr>
                  <th scope="row">Lazy Loading</th>
                  <td>Not Complete <i className="fas fa-times red"></i></td>
                </tr>          
                <tr>
                  <th scope="row">Integrate Css Compiler (Scss)</th>
                  <td>Not Complete <i className="fas fa-times red"></i></td>
                </tr>                          
                <tr>
                  <th scope="row">Animations</th>
                  <td>Not Complete <i className="fas fa-times red"></i></td>
                </tr>                                 

                <tr>
                  <th scope="row">Interceptors</th>
                  <td>Not Complete <i className="fas fa-times red"></i></td>
                </tr>                                                              
                <tr>
                  <th scope="row">3rd Party API</th>
                  <td>Not Complete <i className="fas fa-times red"></i></td>
                </tr>

                <tr>
                  <th scope="row">GraphQL</th>
                  <td>Not Complete <i className="fas fa-times red"></i></td>
                </tr>              
              </tbody>
            </table>            
        </div>
  
    );
  }
}

export default Concepts;