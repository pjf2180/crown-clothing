import React from 'react'
import './cart-dropdown.styles.scss'
import CustomButton from '../custom-button/custom-button.component'
import { connect } from 'react-redux'
import CartItem from '../cart-item/cart-item.component';

const CartDropdown = ({ cartItems }) => {
    console.log(cartItems)
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    cartItems.map(cartItem => (<CartItem key={cartItem.id} item={cartItem}></CartItem>))
                }
            </div>
                <CustomButton>Checkout</CustomButton>
        </div>
    )
};

const mapStateToProps = (state) => ({
    cartItems: state.cart.items
})

export default connect(mapStateToProps)(CartDropdown);