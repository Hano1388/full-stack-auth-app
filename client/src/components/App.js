import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
import Welcome from './Welcome';
import Feature from './Feature';
import Signup from './auth/Signup';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="ui container">
        <Route path="/home" component={Welcome} exact />
        <Route path="/signup" component={Signup} />
        <Route path="/feature" component={Feature} />
      </div>
    </BrowserRouter>
  );
}

export default App;
