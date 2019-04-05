import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
import Welcome from './Welcome';
import Feature from './Feature';
import Signup from './auth/Signup';
import Signout from './auth/Signout';
import Signin from './auth/Signin';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="ui container">
        <Route path="/" component={Welcome} exact />
        <Route path="/signup" component={Signup} />
        <Route path="/signout" component={Signout} />
        <Route path="/signin" component={Signin} />
        <Route path="/feature" component={Feature} />
      </div>
    </BrowserRouter>
  );
}

export default App;
