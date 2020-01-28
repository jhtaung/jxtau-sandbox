import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import {
  Anime,
  Calendar,
  Charts,
  Dashboard,
  Layout,
  Login,
  Profile,
  Register,
  Table,
  NotFound
} from './views';

const Routes = () => {
  const getPath = path => process.env.PUBLIC_URL + path;
  return (
    <Router>
      <Switch>
        <Route exact path={getPath('/')}><Layout content={<Dashboard />} /></Route>
        <Route exact path={getPath('/calendar')}><Layout content={<Calendar />} /></Route>
        <Route exact path={getPath('/charts')}><Layout content={<Charts />} /></Route>
        <Route exact path={getPath('/dashboard')}><Layout content={<Dashboard />} /></Route>
        <Route exact path={getPath('/login')}><Layout content={<Login />} /></Route>
        <Route exact path={getPath('/manga')}><Layout content={<Anime />} /></Route>
        <Route exact path={getPath('/profile')}><Layout content={<Profile />} /></Route>
        <Route exact path={getPath('/register')}><Layout content={<Register />} /></Route>
        <Route exact path={getPath('/table')}><Layout content={<Table />} /></Route>

        <Route exact path={getPath('/not-found')}><Layout content={<NotFound />} /></Route>
        <Redirect to={getPath('/not-found')} />
      </Switch>
    </Router>
  );
};

export default Routes;
