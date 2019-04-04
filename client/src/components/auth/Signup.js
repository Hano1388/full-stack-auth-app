import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { signup } from '../../actions';

class Signup extends Component {

  renderFields = ({input, label, meta, type}) => {
    return (
      <div className="form-group">
        <label htmlFor={input.name}>{label}</label>
        <input {...input} type={type} className="form-control" />
      </div>
    );
  }

  onFormSubmit = (formValues) => {
    this.props.signup(formValues);
  }
  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="ui segment">
        <form onSubmit={handleSubmit(this.onFormSubmit)}>
            <Field
              name="email"
              type="email"
              component={this.renderFields}
              label="Email"
              autoComplete="none"
            />
            <Field
              name="password"
              type="password"
              component={this.renderFields}
              label="Password"
              autoComplete="none"
            />
          <button type="submit" className="ui primary button">Sign Up</button>
        </form>
      </div>
    );
  }
}

export default compose (
   connect(null, { signup }),
   reduxForm({form: 'signup'})
)(Signup);
