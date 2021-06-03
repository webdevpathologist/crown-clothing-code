import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51IpAV7SBmeRTu0fPQXem5PO9Rbz2Fr1PIuk7xnxsjq7A8MHqaAYiwWRmEtYUbUfsHnhqoeDmb2urKOA8wyWgg3pL00eYgUEdw9';

  const onToken = token => {
    console.log(token);
    alert('Payment Successfull!');
  };

  return (
    <StripeCheckout
      label='Place Order'
      name='Crown Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your Total is ₹${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
