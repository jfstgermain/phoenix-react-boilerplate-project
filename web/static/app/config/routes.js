import { IndexRoute, Route }        from 'react-router';
import React                        from 'react';
// import MainLayout                   from '../layouts/main';
import AuthenticatedContainer       from '../containers/authenticated';
// import HomeIndexView                from '../views/home';
import RegistrationsNew             from '../views/registrations/new';
import SessionsNew                  from '../views/sessions/new';
// import BoardsShowView               from '../views/boards/show';
// import CardsShowView                from '../views/cards/show';
import Actions                      from '../actions/sessions';

export default function configRoutes(store) {
  const _ensureAuthenticated = (nextState, replace, cb) => {
    const { dispatch } = store;
    const { session } = store.getState();
    const { currentUser } = session;

    if (localStorage.getItem('phoenixAuthToken')) {
      if (!currentUser) {
        dispatch(Actions.currentUser());
      }
    } else {
      replace('/sign_in');
    }

    cb();
  };

  return (
    <Route component={MainLayout}>
      <Route path="/sign_up" component={RegistrationsNew} />
      <Route path="/sign_in" component={SessionsNew} />

      <Route path="/" component={AuthenticatedContainer} onEnter={_ensureAuthenticated}>
        <IndexRedirect to="/posts" />
        // <Route path="/posts" component={PostsShowView} />
        //
        // <Route path="/boards/:id" component={BoardsShowView}>
        //   <Route path="cards/:id" component={CardsShowView}/>
        // </Route>
      </Route>
    </Route>
  );
}
