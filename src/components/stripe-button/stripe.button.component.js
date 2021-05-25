import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton =({price})=>{

    const StripePrice=price*100;
    const publickey='pk_test_51IpAV7SBmeRTu0fPQXem5PO9Rbz2Fr1PIuk7xnxsjq7A8MHqaAYiwWRmEtYUbUfsHnhqoeDmb2urKOA8wyWgg3pL00eYgUEdw9';

    const onToken=token=>{
        console.log(token);
        alert('Payment Completed Successfully');
    }

    return (

        <StripeCheckout
        label='Place Order'
        name='Crown Clothing'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`Your Bill Amount is ₹ ${price}`}
        amount={StripePrice}
        panelLabel='Pay Now'
        token={onToken}   
        stripeKey={publickey}
        />       
    )

}

export default StripeCheckoutButton;