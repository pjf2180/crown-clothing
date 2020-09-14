import React, { Fragment } from 'react';
import './orders-page.styles.scss';
import OrderProductHeader from '../../components/order-product-header/order-product-header.component';
import OrderProduct from '../../components/order-product/order-product.component';
import CustomButton from '../../components/custom-button/custom-button.component';

function OrdersPage({ lastOrder }) {

    return (
        <div className="orders-page__main">
            <h1>Your orders</h1>
            <div className="order__main">
                <OrderProductHeader timestamp={lastOrder.createdAt.seconds} total={lastOrder.total} />
                <div className="order__section order__content">
                    {
                        lastOrder.items.map((product,idx) => (
                            <OrderProduct key={idx} {...product} />
                        ))
                    }
                </div>
            </div>
            <CustomButton>View more</CustomButton>        
        </div>
    )
}

export default OrdersPage;