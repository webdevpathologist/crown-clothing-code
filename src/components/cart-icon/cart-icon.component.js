import React from 'react';
import { connect } from "react-redux";

import {ReactComponent as ShoppingBag} from '../../assets/shopping-bag.svg'
import {ToggleCartHidden} from '../../redux/cart/cart.actions';

import './cart-icon.styles.scss';


const CartIcon=({ToggleCartHidden})=>(
    <div className='cart-icon' onClick={ToggleCartHidden}>
    <ShoppingBag className='shopping-icon'/>
    <span className='item-count'>0</span>
    </div>
);

const mapDispatchtoProps=dispatch=>({
    ToggleCartHidden:()=>dispatch(ToggleCartHidden())
    
})

export default connect(null,mapDispatchtoProps)(CartIcon);