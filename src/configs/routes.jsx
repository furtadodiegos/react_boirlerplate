import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Home from '../pages/home';

export default () => (
  <BrowserRouter>
    <Route
      render={({ location }) => (
        <TransitionGroup>
          <CSSTransition key={location.key} classNames="fade" timeout={500}>
            <Switch location={location}>
              <Route exact path="/" component={Home} />
              {/*<Route exact path="/private" component={WithAuthMiddleware(PrivateRoute)} />*/}
              <Redirect to="/" />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )}
    />
  </BrowserRouter>
);
