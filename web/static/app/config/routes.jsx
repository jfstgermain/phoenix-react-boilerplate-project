import React from 'react';
import { IndexRedirect, Router, Route } from 'react-router';
import {
  routerActions,
} from 'react-router-redux';
import { UserAuthWrapper } from 'redux-auth-wrapper';
import { DefaultLayout } from '../layouts/default';
import {
  RegistrationNew as RegistrationNewView,
  SessionNew as SessionNewView,
  PostList as PostListView,
} from '../views';

export default function configRoutes(store, routerHistory) {
  // Redirects to /login by default
  const UserIsAuthenticated = new UserAuthWrapper({
    authSelector: state => state.user, // how to get the user state
    redirectAction: routerActions.replace, // the redux action to dispatch for redirect
    wrapperDisplayName: 'UserIsAuthenticated', // a nice name for this auth check
  });

  // const Authenticated = UserIsAuthenticated((props) => props.children);
  // const _ensureAuthenticated = (nextState, replace, cb) => {
  //   const { dispatch } = store;
  //   const { session } = store.getState();
  //   const { currentUser } = session;
  //
  //   if (localStorage.getItem('phoenixAuthToken')) {
  //     if (!currentUser) {
  //       dispatch(Actions.currentUser());
  //     }
  //   } else {
  //     replace('/sign_in');
  //   }
  //
  //   cb();
  // };

  return (
    <Router history={routerHistory}>
      <Route path="/" component={DefaultLayout}>
        <IndexRedirect to="/posts" />

        <Route path="/sign_up" component={RegistrationNewView} />
        <Route path="/sign_in" component={SessionNewView} />

        <Route component={new UserIsAuthenticated(props => props.children)}>
          <Route path="/posts" component={PostListView} />
        </Route>
      </Route>
    </Router>
  );
}
