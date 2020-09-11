import React, { lazy } from 'react'
import { Switch, Route } from 'react-router-dom'

const HomePage = lazy(() => import('../homepage/home-page.component'));
const ShopPage = lazy(() => import('../shop/shop.component'));
const CheckoutPage = lazy(() => import('../checkout/checkout-page.component'));

export default function UserPage({ match }) {
    const { path } = match;
    return (
        <div>
            <Switch>
                <Route exact path={`${path}`} component={HomePage} ></Route>
                <Route path={`${path}shop`} component={ShopPage}></Route>
                <Route path={`${path}checkout`} component={CheckoutPage}></Route>
            </Switch>
        </div>
    )
}
