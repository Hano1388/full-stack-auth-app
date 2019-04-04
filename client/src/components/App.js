import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
}

export default App;
