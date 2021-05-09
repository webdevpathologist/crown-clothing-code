import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector} from 'reselect';

import CheckOutItem from '../../components/checkout-item/checkout.item.component';
import {SelectCartItems,SelectCartSum} from '../../redux/cart/cart.selectors';
import StripeCheckoutButton from '../../components/stripe-button/stripe.button.component';

import './checkout.styles.scss';

const CheckOut=({cartitems,totalvalue})=>(
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
        {
            cartitems.map(item=>(
                <CheckOutItem key={item.id} CartItem={item}/>
            ))
        }

        <div className='total'>{totalvalue}</div>
        <div className='test-warning'>   
            As this is a Test Build, Use the Card details below when placing orders
            <br/><br/>
            Card Number : 4242 4242 4242 4242
            <br/>
            Expiry Date : 01/22
            <br/>
            CVV : Any 3 numbers of your choice 😜
        </div>
        <StripeCheckoutButton price={totalvalue}/>

    </div>
);

const mapStatetoProps=createStructuredSelector({
    cartitems:SelectCartItems,
    totalvalue:SelectCartSum
});

export default connect(mapStatetoProps)(CheckOut);