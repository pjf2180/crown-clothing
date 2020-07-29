import React, { useEffect } from 'react';
import GlobalStyle from './global-styles'

//Components
import HomePage from './pages/homepage/home-page.component'
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'
import SignInAndSignUpPage from './components/sign-in-sign-up/sign-in-sign-up.component'
import CheckoutPage from './pages/checkout/checkout-page.component';
//Router
import { Route, Switch, Redirect } from 'react-router-dom'
//Redux
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from './redux/user/user.selector'
import { checkUserSession } from './redux/user/user.actions';

const App = ({ currentUser, checkUserSession }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} ></Route>
        <Route path="/shop" component={ShopPage}></Route>
        <Route exact path="/checkout" component={CheckoutPage}></Route>
        <Route exact path="/signIn"
          render={() => currentUser ?
            (<Redirect to='/'></Redirect>)
            :
            (<SignInAndSignUpPage></SignInAndSignUpPage>)}></Route>
      </Switch>
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
