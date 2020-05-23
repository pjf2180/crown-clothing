import React from 'react'
import './cart-icon.styles.scss'
import { ReactComponent as ShoppingIcon } from '../../assets/original.svg'
import { connect } from 'react-redux'
import { ToggleCartHiddenAction } from '../../redux/cart/cart.actions'
import { selectCartItemCount } from '../../redux/cart/cart.selectors'

const CartIcon = ({ quantity, toggleCartHidden }) => {
    console.log('I was rendered')
    return (
        <div onClick={() => toggleCartHidden()} className="cart-icon">
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">{quantity}</span>
        </div>
    )
};
const mapStateToProps = state => ({
    quantity: selectCartItemCount(state)
})
const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(ToggleCartHiddenAction())
})
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);