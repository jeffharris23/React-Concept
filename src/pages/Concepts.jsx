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
                <ConceptRow name="Routing" status="Completed"/>
                <ConceptRow name="Forms/Validation (Formik, Yup)" status="Completed"/>
                <ConceptRow name="State Management (Redux)" status="Completed"/>
                <ConceptRow name="React's version of Services" status="Completed"/>
                <ConceptRow name="Auth (AuthO)" status="Completed"/>
                <ConceptRow name="Authenticated Route (auth guard)" status="Completed"/>
                <ConceptRow name="Interceptors/Middleware (add route class to body)" status="Incomplete"/>
                <ConceptRow name="CLI stuff (component generators, build stuff)" status="Incomplete"/>
                <ConceptRow name="Lazy Loading" status="Incomplete"/>
                <ConceptRow name="Integrate Css Compiler (Scss)" status="Incomplete"/>
                <ConceptRow name="Animations" status="Incomplete"/>
                <ConceptRow name="3rd Party API" status="Incomplete"/>
                <ConceptRow name="GraphQL" status="Incomplete"/>                                                                                  
              </tbody>
            </table>            
        </div>
  
    );
  }
}

export default Concepts;