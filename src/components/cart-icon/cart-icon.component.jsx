import React from 'react'
import './cart-icon.styles.scss'
import { ReactComponent as ShoppingIcon } from '../../assets/original.svg'
import { connect } from 'react-redux'
import {ToggleCartHiddenAction} from '../../redux/cart/cart.actions'


const CartIcon = ({ toggleCartHidden }) => (
    <div onClick={() => toggleCartHidden()} className="cart-icon">
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">0</span>
    </div>
);
const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(ToggleCartHiddenAction())
})
export default connect(null, mapDispatchToProps)(CartIcon);