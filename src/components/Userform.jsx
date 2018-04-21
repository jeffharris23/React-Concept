import React, { Component } from 'react';
import { Formik, Form, Field } from 'formik';
import Yup from 'yup';
import isEmpty from 'lodash/isEmpty';
import TextInput from '../components/TextInput';

export default class Userform extends Component {
  render() {
    return (
      <div className="addGameForm">
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
            name: '',
            email: '',
          }}
          onSubmit={(values, actions) => {
            // this could also easily use props or other
            // local state to alter the behavior if needed
            // this.props.sendValuesToServer(values)
 
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2))
              actions.setSubmitting(false)
            }, 1000)
          }}
          render={({ values, touched, errors, dirty, isSubmitting }) => (
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
                disabled={isSubmitting || !isEmpty(errors) || !dirty}
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

