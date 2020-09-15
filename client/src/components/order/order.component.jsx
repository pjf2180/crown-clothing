import React from 'react'
import './order.styles.scss';

import OrderProductHeader from '../../components/order-product-header/order-product-header.component';
import OrderProduct from '../../components/order-product/order-product.component';

export default function Order({ order }) {
    return (
        <div className="order__main">
            <OrderProductHeader
                timestamp={order.createdAt.seconds}
                total={order.total} />

            <div className="order__section order__content">
                {
                    order.items.map((product, idx) => (
                        <OrderProduct key={idx} {...product} />
                    ))
                }
            </div>
        </div>
    )
}
