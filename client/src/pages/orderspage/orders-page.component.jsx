import React from 'react';
import './orders-page.styles.scss';
import OrderProductHeader from '../../components/order-product-header/order-product-header.component';
import OrderProduct from '../../components/order-product/order-product.component';

function OrdersPage() {

    const orderProducts = [
        {
            name: 'Adidas NMD',
            quantity: 2,
            price: 220,
            imageUrl: 'https://i.ibb.co/0s3pdnc/adidas-nmd.png'
        },
        {
            name: 'Adidas Yeezy',
            quantity: 1,
            price: 280,
            imageUrl: 'https://i.ibb.co/dJbG1cT/yeezy.png'
        },
    ];
    const order = {
        products: orderProducts,
        total: 54.99,
        timestamp: 123435
    }
    return (
        <div>
            <h1>Your orders</h1>
            <div className="order__main">
                <OrderProductHeader timestamp={order.timestamp} total={order.total} />
                <div className="order__section order__content">
                    {
                        order.products.map((product,idx) => (
                            <OrderProduct key={idx} {...product} />
                        ))
                    }
                </div>
            </div>

        </div>
    )
}

export default OrdersPage;