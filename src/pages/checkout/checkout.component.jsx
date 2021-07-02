import React, { useContext } from 'react';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

import { CartContext } from '../../providers/cart/cart.provider';

import './checkout.styles.scss';

const CheckoutPage = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <div className='checkout-page'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map(cartItem => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className='total'>TOTAL: ₹{cartTotal}</div>
        <div className='test-warning'>   
            As this is a Test Build, Use the Card details below when placing orders
            <br/><br/>
            Card Number : 4242 4242 4242 4242
            <br/>
            Expiry Date : 01/22
            <br/>
            CVV : Any 3 numbers of your choice 😜
        </div>
        <StripeCheckoutButton price={cartTotal}/>

    </div>
  );
};

export default CheckoutPage;
