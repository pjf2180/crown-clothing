import React from 'react';
import 'react-stripe-checkout';
import './stripe-button.scss';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publicKey = 'pk_test_HWgXCcBi72pfuf0EExzjXmn000tWtSFIAP';

  const onToken = token => {
    console.log(token);
    axios({
      url: 'payment',
      method: 'post',
      data: {
        token,
        amount: priceForStripe
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
  );

}

export default StripeButton;
