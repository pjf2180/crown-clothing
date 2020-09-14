import React, { useEffect, lazy, Suspense, Fragment } from 'react';
import GlobalStyle from './global-styles';
import { default as Header } from './components/header/header.container';

//Router
import { Route, Switch, Redirect } from 'react-router-dom'
//Redux
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from './redux/user/user.selector'
import { checkUserSession } from './redux/user/user.actions';

import LoadingSpinner from './components/loading-spinner/loading-spinner'
import ErrorBoundary from './components/error-boundary/error-boundary.component'

//lazy loaded Components
const SignInAndSignUpPage = lazy(() => import('./components/sign-in-sign-up/sign-in-sign-up.component'));
const AdminPage = lazy(() => import('./pages/adminpage/admin-page.component'));
const UserPage = lazy(() => import('./pages/userpage/user-page.component'));

const App = ({ currentUser, checkUserSession }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);
  console.log(currentUser);
  return (
    <Fragment>
      <GlobalStyle />
      <Header />
      <div className="app__router-container">
        <Switch>
          <ErrorBoundary>
            <Suspense fallback={<LoadingSpinner />}>

              <Route path="/" component={UserPage} />
              <Route path="/admin" component={AdminPage} />

              <Route exact path="/signIn"
                render={() => currentUser ?
                  (<Redirect to='/'></Redirect>)
                  :
                  (<SignInAndSignUpPage></SignInAndSignUpPage>)} />

            </Suspense>
          </ErrorBoundary>

        </Switch>
      </div>

    </Fragment >
  );
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});
const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
