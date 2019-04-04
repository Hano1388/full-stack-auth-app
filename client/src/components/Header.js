import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
  return(
    <div className="ui container">
      <div className="ui four item menu">
        <Link
          className="item"
          to="/home"
        >Redux auth</Link>
        <Link
          className="item"
          to="/signin"
        >Sign In</Link>
        <Link
          className="item"
          to="/signup"
        >Sign Up</Link>
        <Link
          className="item"
          to="/signout"
        >Sign Out</Link>
      </div>
    </div>
  );
};

export default Header;
