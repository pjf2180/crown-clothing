import React from 'react'
import './cart-dropdown.styles.scss'
import CustomButton from '../custom-button/custom-button.component'
import { connect } from 'react-redux'
import CartItem from '../cart-item/cart-item.component';
import { selectCartitems } from '../../redux/cart/cart.selectors'

const CartDropdown = ({ cartItems }) => {
    console.log(cartItems)
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    cartItems.map(cartItem => (<CartItem key={cartItem.id} item={cartItem}></CartItem>))
                }
                {
                    cartItems.length === 0 ? <p>No items</p> : null
                }
            </div>
            <CustomButton>Checkout</CustomButton>
        </div>
    )
};

const mapStateToProps = (state) => ({
    cartItems: selectCartitems(state)
})

export default connect(mapStateToProps)(CartDropdown);