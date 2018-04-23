import React, { Component } from 'react';
import { Formik, Form, Field } from 'formik';
import Yup from 'yup';
import TextInput from '../components/TextInput';
import { connect } from 'react-redux'; 
import { updateUser } from '../store/actions/'

const mapDispatchToProps = {
  updateUser,
};

function mapStateToProps(state) {
  return { user: state.rootReducer.user };
}

class Userform extends Component {
  constructor(props) {
    super(props);
      this.state = {
        showForm: false
      };

    console.log(props);

  }  

  toggleSavedMessage = () => {
    this.setState({
      showForm : !this.state.showForm
    });
  }

  render() {
    return (
      <div className="addGameForm">
        <div className={`${this.state.showForm ? '' : 'sr-only'} alert alert-success`}>
         Form Saved!
        </div>  
        <div className="alert alert-warning">
          Current Saved User State: <br/>
          <code>
            {JSON.stringify(this.props.user)}
          </code>
        </div>
        <Formik
          validationSchema={Yup.object().shape(
            {
              name: Yup.string()
                .min(3, 'Name must be at least 2 characters long.')
                .required('Name is required.'),
              email: Yup.string()
                .email('Enter a valid email.')
                .required('Email is required.'),                
            }
          )}
          initialValues={{
            name: this.props.user.name,
            email: this.props.user.email,        
          }}
          onSubmit={(values, actions) => {
            // this could also easily use props or other
            // local state to alter the behavior if needed
            // this.props.sendValuesToServer(values)
            // setTimeout(() => {
            //   alert(JSON.stringify(values, null, 2))
            //   actions.setSubmitting(false)
            // }, 1000)
            this.props.updateUser(values);
            this.toggleSavedMessage();

            setTimeout(this.toggleSavedMessage,3000);
          }}
          render={({ values, touched, errors, dirty, isSubmitting, isValid }) => (
            <Form>
              <Field
                type="text"
                name="name"
                label="Name"
                component={TextInput}
              />
              <Field
                type="email"
                name="email"
                label="Email"
                component={TextInput}
              />              
              <button
                type="submit"
                className="btn btn-primary"
                disabled={ !isValid }
              >
                Submit
              </button>
            </Form>
          )}
        />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Userform);