import React, { Component } from 'react';
import { connect } from 'react-redux';

export default ChildComponent => {
  class ComposedComponent extends Component {
    componentDidMount() {
      this.navigateMe();
    }

    componentDidUpdate() {
      this.navigateMe();
    }

    navigateMe() {
      if(!this.props.auth) {
        this.props.history.push('/');
      }
    }
    render() {
      return <ChildComponent {...this.props}/>;
    }
  }

  const mapStateToProps = (state) => {
    return { auth: state.auth.authenticated };
  }

  return connect(mapStateToProps)(ComposedComponent);
}
