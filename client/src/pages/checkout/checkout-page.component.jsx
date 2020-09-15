import React from 'react';
import CheckoutPageContainer from './checkout-page.styles'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCartitems, selectCartTotal } from '../../redux/cart/cart.selectors'
import StripeButton from '../../components/stripe-button/stripe-button.component'

const CheckoutPage = ({ cartItems, cartTotal }) => (

  <CheckoutPageContainer>
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>

    {
      cartItems.map(cartItem => (
        <CheckoutItem key={cartItem.id} item={cartItem}></CheckoutItem>
      ))
    }
    <div className="total">Total: ${cartTotal}</div>
    <div className="test-warning">
      *Please use the following credit card for testing purposes* <br />
      4242 4242 4242 4242 - Exp: 01/20 - cvv:123
    </div>
    <StripeButton className='stripe-btn' price={cartTotal} items={cartItems}/>
  </CheckoutPageContainer>
  // <div className="checkout-page">

  // </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartitems,
  cartTotal: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);

