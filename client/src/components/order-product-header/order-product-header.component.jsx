import React from 'react'
import moment from 'moment'

export default function OrderProductHeader({ timestamp, total }) {
    console.log(timestamp)
    const date = new Date(timestamp);
    const dateStr = moment(date).format('MMMM Do YYYY');
    return (
        <div className="order__section order__header">
            <div className="order__date-container">
                <h4>Placed order on:</h4>
                <h3>{dateStr}</h3>
            </div>
            <div className="order__date-container">
                <h4>Total</h4>
                <h3>${total}</h3>
            </div>
        </div>
    )
}
