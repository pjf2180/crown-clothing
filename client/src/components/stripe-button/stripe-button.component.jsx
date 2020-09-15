import React from 'react';
import 'react-stripe-checkout';
import './stripe-button.scss';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from '../../redux/user/user.selector';

const StripeButton = ({ price, items, currentUser }) => {
  const priceForStripe = price * 100;
  const publicKey = 'pk_test_HWgXCcBi72pfuf0EExzjXmn000tWtSFIAP';
  console.log(items);
  const onToken = token => {
    console.log(token);
    axios({
      url: 'payment',
      method: 'post',
      data: {
        token,
        amount: priceForStripe,
        itemsAsIds: items,
        userId: currentUser?.id
      }
    }).then(response => {
      console.log(response);
      alert('Payment was succesful')
    }).catch(error => {
      console.log('Payment error: ', JSON.parse(error));
      alert(
        'There was an issue with your payment'
      );
    })

  }


  return (
    <StripeCheckout
      label='Pay now'
      name='Crwn Clothing'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $ ${price}`}
      amount={priceForStripe}
      panelLabel='Pay now'
      token={onToken}
      stripeKey={publicKey}
    />
  )
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})
export default connect(mapStateToProps)(StripeButton);
