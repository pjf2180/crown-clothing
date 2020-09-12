import React from 'react';
import './orders-page.styles.scss';


function OrdersPage() {
    return (
        <div>
            <h1>Your orders</h1>

            <div className="order__main">
                <div className="order__section order__header">
                    <div className="order__date-container">
                        <h4>Placed order on:</h4>
                        <h3>07/12/2019</h3>
                    </div>
                    <div className="order__date-container">
                        <h4>Total</h4>
                        <h3>$54.99</h3>
                    </div>
                </div>
                <div className="order__section order__content">

                    <div className="order-product__main">

                        <div className="order-product__product-img"
                            style={{ background: `url(https://i.ibb.co/0s3pdnc/adidas-nmd.png) center center/cover` }}>
                        </div>

                        <div className="order-product__product-info">
                            <h3>Sneakers</h3>
                            <h4>5 X $20</h4>
                            <h4 className="order-product__total">$100</h4>
                        </div>

                    </div>
                    <div className="order-product__main">

                        <div className="order-product__product-img"
                            style={{ background: `url(https://i.ibb.co/0s3pdnc/adidas-nmd.png) center center/cover` }}>
                        </div>

                        <div className="order-product__product-info">
                            <h3>Sneakers</h3>
                            <h4>5 X $20</h4>
                            <h4 className="order-product__total">$100</h4>
                        </div>

                    </div>
                    <div className="order-product__main">

                        <div className="order-product__product-img"
                            style={{ background: `url(https://i.ibb.co/0s3pdnc/adidas-nmd.png) center center/cover` }}>
                        </div>

                        <div className="order-product__product-info">
                            <h3>Sneakers</h3>
                            <h4>5 X $20</h4>
                            <h4 className="order-product__total">$100</h4>
                        </div>

                    </div>


                </div>
            </div>

        </div>
    )
}

export default OrdersPage;