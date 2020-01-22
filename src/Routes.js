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
  const getPath = path => process.env.PUBLIC_URL + path;
  return (
    <Router>
      <Switch>
        <Route exact path={getPath('/')}><Layout content={<Dashboard />} /></Route>
        <Route exact path={getPath('/charts')}><Layout content={<Charts />} /></Route>
        <Route exact path={getPath('/dashboard')}><Layout content={<Dashboard />} /></Route>
        <Route exact path={getPath('/login')}><Layout content={<Login />} /></Route>
        <Route exact path={getPath('/manga')}><Layout content={<Manga />} /></Route>
        <Route exact path={getPath('/profile')}><Layout content={<Profile />} /></Route>
        <Route exact path={getPath('/register')}><Layout content={<Register />} /></Route>
        <Route exact path={getPath('/tables')}><Layout content={<Tables />} /></Route>

        <Route exact path={getPath('/not-found')}><Layout content={<NotFound />} /></Route>
        <Redirect to={getPath('/not-found')} />
      </Switch>
    </Router>
  );
};

export default Routes;
