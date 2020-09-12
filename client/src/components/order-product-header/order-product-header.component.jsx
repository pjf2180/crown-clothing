import React from 'react'

export default function OrderProductHeader({ timestamp, total }) {
    return (
        <div className="order__section order__header">
            <div className="order__date-container">
                <h4>Placed order on:</h4>
                <h3>07/12/2019</h3>
            </div>
            <div className="order__date-container">
                <h4>Total</h4>
                <h3>${total}</h3>
            </div>
        </div>
    )
}
