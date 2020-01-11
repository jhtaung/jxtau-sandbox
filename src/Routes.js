import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Charts from './views/Charts';
import Dashboard from './views/Dashboard';
import Layout from './views/Layout';
import Login from './views/Login';
import Profile from './views/Profile';
import Manga from './views/Manga';
import Register from './views/Register';
import Tables from './views/Tables';
import NotFound from './views/NotFound';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/"><Layout content={<Dashboard />} /></Route>
        <Route exact path="/charts"><Layout content={<Charts />} /></Route>
        <Route exact path="/dashboard"><Layout content={<Dashboard />} /></Route>
        <Route exact path="/login"><Layout content={<Login />} /></Route>
        <Route exact path="/manga"><Layout content={<Manga />} /></Route>
        <Route exact path="/profile"><Layout content={<Profile />} /></Route>
        <Route exact path="/register"><Layout content={<Register />} /></Route>
        <Route exact path="/tables"><Layout content={<Tables />} /></Route>

        <Route exact path="/not-found"><Layout content={<NotFound />} /></Route>
        <Redirect to="/not-found" />
      </Switch>
    </Router>
  );
};

export default Routes;
