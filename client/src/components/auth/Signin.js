import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { signin } from '../../actions';

class Signin extends Component {

  renderFields = ({input, label, meta, type}) => {
    return (
      <div className="form-group">
        <label htmlFor={input.name}>{label}</label>
        <input {...input} type={type} className="form-control" />
      </div>
    );
  }

  onFormSubmit = (formValues) => {
    this.props.signin(formValues, () => {
      this.props.history.push('/feature');
    });
  }

  renderErrors = () => {
    if(this.props.errorMessage) {
      return <div className="ui error message">{this.props.errorMessage}</div>;
    } else {
      return null;
    }
  }
  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="ui segment">
         {this.renderErrors()}
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
          <button type="submit" className="ui primary button">Sign In</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { errorMessage: state.auth.errorMessage }
}

export default compose (
   connect(mapStateToProps, { signin }),
   reduxForm({form: 'signup'})
)(Signin);
