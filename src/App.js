import React from 'react';
import './App.css';
import  HomePage  from './pages/homepage/home-page.component'
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'
import SignInAndSignUpPage from './components/sign-in-sign-up/sign-in-sign-up.component'
import {Route, Switch} from 'react-router-dom'


export const HatsPage = ()=> (
  <div>
    <h1>Hats Page!</h1>
  </div>
)
function App() {
  return (
    <div>
    <Header></Header>
    <Switch>
      <Route exact path="/" component={ HomePage } ></Route>
      <Route path="/shop" component={ ShopPage }></Route>
      <Route path="/signIn" component={ SignInAndSignUpPage }></Route>
    </Switch>
    </div>
    
  );
}

export default App;
