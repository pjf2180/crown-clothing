import React from 'react';
import './App.css';
import  HomePage  from './pages/homepage/home-page.component'
import ShopPage from './pages/shop/shop.component'
import {Route, Switch} from 'react-router-dom'


export const HatsPage = ()=> (
  <div>
    <h1>Hats Page!</h1>
  </div>
)
function App() {
  return (
    <div>
    <Switch>
      <Route exact path="/" component={ HomePage } ></Route>
      <Route path="/shop" component={ ShopPage }></Route>
    </Switch>
    </div>
    
  );
}

export default App;
