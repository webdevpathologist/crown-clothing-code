import React from 'react';
import { connect } from "react-redux";

import {ReactComponent as ShoppingBag} from '../../assets/shopping-bag.svg';
import {ToggleCartHidden} from '../../redux/cart/cart.actions';
import {SelectCartItemsCount} from '../../redux/cart/cart.selectors';


import './cart-icon.styles.scss';


const CartIcon=({ToggleCartHidden,ItemCount})=>(
    <div className='cart-icon' onClick={ToggleCartHidden}>
    <ShoppingBag className='shopping-icon'/>
    <span className='item-count'>{ItemCount}</span>
    </div>
);

const mapDispatchtoProps=dispatch=>({
    ToggleCartHidden:()=>dispatch(ToggleCartHidden())
    
});

const mapStatetoProps=(state)=>({
    ItemCount:SelectCartItemsCount(state)
});

export default connect(mapStatetoProps,mapDispatchtoProps)(CartIcon);