import React from 'react'
import './checkout-item.styles.scss'
import { connect } from 'react-redux'
import { ClearItemAction, RemoveItemAction, AddItemToCartAction } from '../../redux/cart/cart.actions'

const CheckoutItem = ({ item, addItem, removeItem, clearCartItem }) => {
    const { name, price, quantity, id, imageUrl } = item;
    return (
        <div className="checkout-item">
            <span></span>
            <div className="image-container">
                <img src={imageUrl} alt="item" />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={() => removeItem(item)}>&#10094;</div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={() => addItem(item)}>&#10095;</div>
            </span>
            <span className="price">{price}</span>
            <div className="remove-button" onClick={() => clearCartItem(id)}>&#10005;</div>
        </div>
    )
};
const mapDispatchToProps = dispatch => ({
    addItem: (cartItem) => dispatch(AddItemToCartAction(cartItem)),
    removeItem: (cartItem) => dispatch(RemoveItemAction(cartItem)),
    clearCartItem: (cartItemId) => dispatch(ClearItemAction(cartItemId)),
})
export default connect(null, mapDispatchToProps)(CheckoutItem);