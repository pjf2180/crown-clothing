import React from 'react';
import './orders-page.styles.scss';

import CustomButton from '../../components/custom-button/custom-button.component';
import Order from '../../components/order/order.component'
import LoadingSpinner from '../../components/loading-spinner/loading-spinner'

function OrdersPage({ orders, loadNextOrders, currentUser, loadingOrders }) {
    const onViewMore = () => {
        const lastOrder = orders[orders.length - 1];
        loadNextOrders(currentUser.id, lastOrder.orderId, 1);
    }
    if(currentUser===null){ return <h2>Sign in to view your orders.</h2>}
    return (
        <div className="orders-page__main">
            <h1>Your orders</h1>
            <div className="orders-page__list">
                {
                    orders.map((order) =>
                        <div key={order.orderId} className="orders-page__order">
                            <Order order={order} />
                        </div>)
                }
            </div>
            <CustomButton onClick={onViewMore}>
                View more
                <span className="orders-page__loading">
                    {loadingOrders ? <LoadingSpinner fitOnContainer={true} /> : null}
                </span></CustomButton>
        </div>
    )
}

export default OrdersPage;