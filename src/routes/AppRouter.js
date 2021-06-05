import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route
} from 'react-router-dom';
import { Users } from '../components/Users';

export const AppRouter = () => {
  return (
    <Router>
        <Switch>
            <Route path='/' exact component={ Users } />
            <Redirect from='*' to='/' />
        </Switch>
    </Router>
  );
}
