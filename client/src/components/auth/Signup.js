import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class Signup extends Component {

  renderFields = ({input, label, meta, type}) => {
    return (
      <div className="form-group">
        <label htmlFor={input.name}>{label}</label>
        <input {...input} type={type} className="form-control" />
      </div>
    );
  }
  render() {
    return (
      <div className="ui segment">
        <form>
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

export default reduxForm({
  form: 'signup'
}) (Signup);
