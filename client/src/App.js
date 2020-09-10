import React, { useEffect, lazy, Suspense } from 'react';
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
const HomePage = lazy(() => import('./pages/homepage/home-page.component'));
const ShopPage = lazy(() => import('./pages/shop/shop.component'));
const CheckoutPage = lazy(() => import('./pages/checkout/checkout-page.component'));
const SignInAndSignUpPage = lazy(() => import('./components/sign-in-sign-up/sign-in-sign-up.component'));
const AdminPage = lazy(() => import('./pages/adminpage/admin-page.component'));

const App = ({ currentUser, checkUserSession }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <GlobalStyle />
      <Header />
      <div className="app__router-container">
        <Switch>
          <ErrorBoundary>
            <Suspense fallback={<LoadingSpinner />}>
              <Route exact path="/" component={HomePage} ></Route>
              <Route path="/shop" component={ShopPage}></Route>
              <Route exact path="/checkout" component={CheckoutPage}></Route>
              <Route exact path="/signIn"
                render={() => currentUser ?
                  (<Redirect to='/'></Redirect>)
                  :
                  (<SignInAndSignUpPage></SignInAndSignUpPage>)}>
              </Route>
              <Route path="/admin" component={AdminPage}></Route>
            </Suspense>
          </ErrorBoundary>

        </Switch>
      </div>

    </div >
  );
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});
const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
