import React from 'react'
import './order-product.styles.scss';

export default function OrderProduct({ name, quantity, price, imageUrl }) {
    return (
        <div className="order-product__main">

            <div className="order-product__product-img"
                style={{ background: `url(${imageUrl}) center center/cover` }}>
            </div>

            <div className="order-product__product-info">
                <h3>{name}</h3>
                <h4>{quantity} X ${price}</h4>
                <h4 className="order-product__total">${parseFloat(quantity * price)}</h4>
            </div>

        </div>
    )
}
