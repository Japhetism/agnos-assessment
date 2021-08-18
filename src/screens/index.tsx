import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './home';

const Screens = () => (
  <>
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/home" component={Home} />
    </Router>
  </>
);

export default Screens;
