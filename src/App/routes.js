import React from 'react';
import { Route, Switch } from 'react-router';
import Home from './views/Home';
import NoRoute from './views/NoRoute';
import Counter from './views/Counter';
import LinkerTest from './views/LinkTest';
import NavBar from './components/NavBar';

const routes = (
  <div>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/counter" component={Counter} />
      <Route path="/link" component={LinkerTest} />
      <Route component={NoRoute} />
    </Switch>
  </div>
)

export default routes

// <Route path="/hello" component={Hello} />
// <Route path="/counter" component={Counter} />