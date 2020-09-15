import React, { lazy } from 'react'
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom'
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selector';

const HomePage = lazy(() => import('../homepage/home-page.component'));
const ShopPage = lazy(() => import('../shop/shop.component'));
const CheckoutPage = lazy(() => import('../checkout/checkout-page.component'));
const OrdersPage = lazy(() => import('../orderspage/orders-page.container'));

function UserPage({ match, currentUser }) {
    const { path } = match;
    return (
        <div>
            <Switch>
                <Route exact path={`${path}`} component={HomePage} ></Route>
                <Route path={`${path}shop`} component={ShopPage}></Route>
                <Route path={`${path}orders`} component={OrdersPage}></Route>
                <Route path={`${path}checkout`} component={CheckoutPage}></Route>
            </Switch>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
})
export default connect(mapStateToProps)(UserPage);