import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './login';

const Screens = () => (
  <>
    <Router>
      <Route exact path="/" component={Login} />
      <Route exact path="/login" component={Login} />
    </Router>
  </>
);

export default Screens;
