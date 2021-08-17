import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AppHeader from '../components/app-bar';
import Login from './login';

const Screens = () => (
  <>
    <AppHeader />
    <Router>
      <Route exact path="/" component={Login} />
      <Route exact path="/login" component={Login} />
    </Router>
  </>
);

export default Screens;
