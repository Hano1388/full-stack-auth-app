import React, { Component } from 'react';

class Signup extends Component {
  render() {
    return (
      <div className="ui segment">
        <form>
          <fieldset>
            <label>Email</label>
          </fieldset>
          <fieldset>
            <label>Password</label>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default Signup;
