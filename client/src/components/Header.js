import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
  const [homeClass, setHomeClass] = useState('item');
  const [signinClass, setSinginClass] = useState('item');
  const [signupClass, setSignupClass] = useState('item');
  const [signoutClass, setSignoutClass] = useState('item');

  const changeClassNames = (className) => {
    className = className || window.location.pathname.substr(1);
    className === 'home'? setHomeClass('active item') : setHomeClass('item');
    className === 'signin'? setSinginClass('active item') : setSinginClass('item');
    className === 'signup'? setSignupClass('active item') : setSignupClass('item');
    className === 'signout'? setSignoutClass('active item') : setSignoutClass('item');
  }

  return(
    <div className="ui container">
      <div className="ui four item pointing menu">
        <Link
          className={homeClass}
          onClick={() => changeClassNames('home') }
          to="/home"
        >Redux auth</Link>
        <Link
          className={signinClass}
          onClick={() => changeClassNames('signin') }
          to="/signin"
        >Sign In</Link>
        <Link
          className={signupClass}
          onClick={() => changeClassNames('signup') }
          to="/signup"
        >Sign Up</Link>
        <Link
          className={signoutClass}
          onClick={() => changeClassNames('signout') }
          to="/signout"
        >Sign Out</Link>
      </div>
    </div>
  );
};

export default Header;
