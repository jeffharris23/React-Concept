import React from 'react';
import ConceptRow from '../components/ConceptRow';

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
                <ConceptRow name="Routing" sub="Used React Router 4" status="Completed"/>
                <ConceptRow name="Forms/Validation" sub="Used third party form libraries: Formik, Yup." status="Completed"/>
                <ConceptRow name="State Management" sub="Redux" status="Completed"/>
                <ConceptRow name="React's version of Services" sub="Created a high level auth provider and passed down to components through props...Not sure if this is the best way..." status="Completed"/>
                <ConceptRow name="Auth" sub="Integrated with 3rd party auth system Auth0." status="Completed"/>
                <ConceptRow name="Authenticated Route/Route Guard" sub={"<div>The top level <a href='/dashboard'>dashboard</a> page is protected and can only be accessed when logged in.</div>"} status="Completed"/>
                <ConceptRow name="Interceptors/Middleware" sub="Used react-router-redux. Listened for route change to add wrapper class." status="Completed"/>
                <ConceptRow name="Lazy Loading" status="Incomplete"/>
                <ConceptRow name="CSS Compiler (Scss)" status="Incomplete"/>    
                <ConceptRow name="Animations" status="Incomplete"/>           
                <ConceptRow name="PWA Stuff" status="Incomplete"/>
                <ConceptRow name="CLI stuff (component generators, build stuff)" status="Incomplete"/>
                <ConceptRow name="3rd Party API" status="Incomplete"/>
                <ConceptRow name="GraphQL" status="Incomplete"/>                                                                                  
              </tbody>
            </table>            
        </div>
  
    );
  }
}

export default Concepts;