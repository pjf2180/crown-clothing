import React from 'react';
import './App.css';
import HomePage from './pages/homepage/home-page.component'
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'
import SignInAndSignUpPage from './components/sign-in-sign-up/sign-in-sign-up.component'
import { Route, Switch } from 'react-router-dom'
import { auth, createUserProfileDocument } from './/firebase/firebase.utils'
import { connect } from 'react-redux'
import { setCurrentUserAction } from './redux/user/user.actions'

export const HatsPage = () => (
  <div>
    <h1>Hats Page!</h1>
  </div>
)
class App extends React.Component {

  
  unsubscribeFromAuth = null;
  
  componentDidMount() {

    const { setCurrentuser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {//if logged in
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot => {
          setCurrentuser({
            id: snapshot.id,
            ...snapshot.data()
          });
        });
      } else {
        setCurrentuser(userAuth);
      }

    })
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path="/" component={HomePage} ></Route>
          <Route path="/shop" component={ShopPage}></Route>
          <Route path="/signIn" component={SignInAndSignUpPage}></Route>
        </Switch>
      </div >

    );
  }
}
const mapDispatchToProps = dispatch => ({
  setCurrentuser: user => dispatch(setCurrentUserAction(user))
})

export default connect(null, mapDispatchToProps)(App);
