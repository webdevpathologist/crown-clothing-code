import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector} from 'reselect';

import CheckOutItem from '../../components/checkout-item/checkout.item.component';
import {SelectCartItems,SelectCartSum} from '../../redux/cart/cart.selectors';

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

    </div>
);

const mapStatetoProps=createStructuredSelector({
    cartitems:SelectCartItems,
    totalvalue:SelectCartSum
});

export default connect(mapStatetoProps)(CheckOut);