import * as React from 'react';
import Userform from '../components/Userform';

class Form extends React.Component {
  render() {
    return (
        <div className="page">
            <h1>Form</h1>
            <p>Sample form below using Formik/Yup form builder. This form connects to simple state management with Redux. State is not persistent, just here to demo Redux.</p>
            <div className="max-width pt-4">
                <Userform/>
            </div>          
        </div>
        
    );
  }
}

export default Form;