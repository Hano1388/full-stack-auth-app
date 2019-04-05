import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends React.Component {
  renderLinks() {
    if (this.props.authenticated) {
      return (
        <React.Fragment>
          <Link className="item" to="/signout">Sign Out</Link>
          <Link className="item" to="/feature">Feature</Link>
        </React.Fragment>
      );
    } else {
      return(
        <React.Fragment>
          <Link className="item" to="/signin">Sign In</Link>
          <Link className="item" to="/signup">Sign Up</Link>
        </React.Fragment>
      );
    }
  }
  render() {
    return(
      <div className="ui container">
        <div className="ui three item pointing menu">
          <Link className="item" to="/">Redux auth</Link>
          {this.renderLinks()}
        </div>
      </div>
    );
  }
};

const mapStateToProps = state => {
  const { authenticated } = state.auth;
  return { authenticated }
}

export default connect(mapStateToProps)(Header);
