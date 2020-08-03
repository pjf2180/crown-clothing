import React from 'react'
import CustomButton from '../custom-button/custom-button.component'
import CartDropdownContainer from './cart-dropdown.styles'
import { connect } from 'react-redux'
import CartItem from '../cart-item/cart-item.component';
import { selectCartitems } from '../../redux/cart/cart.selectors'
import { ToggleCartHiddenAction } from '../../redux/cart/cart.actions'
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom'

const CartDropdown = ({ cartItems, history, dispatch }) => {
    return (
        <CartDropdownContainer>
            <div className="cart-items">
                {
                    cartItems.map(cartItem => (<CartItem key={cartItem.id} item={cartItem}></CartItem>))
                }
                {
                    cartItems.length === 0 ? <span className="empty-message">No items inside your cart.</span> : null
                }
            </div>
            <CustomButton onClick={() => {
                history.push('/checkout');
                dispatch(ToggleCartHiddenAction())
            }}>Checkout</CustomButton>
        </CartDropdownContainer>
    )
};

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartitems
});

const connectedComponent = connect(mapStateToProps)(CartDropdown);

export default withRouter(connectedComponent);