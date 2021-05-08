import React from 'react';
import {connect} from 'react-redux';

import {AddItem,DeleteItem,DeleteItemCheckout} from '../../redux/cart/cart.actions'

import './checkout.item.styles.scss';


const CheckOutItem =({CartItem,additem,deleteitem,removeitem})=>{
    const {name,price,imageUrl,quantity}=CartItem
    return(
    <div className='checkout-item'>
        <div className='image-container'>
            <img alt='item' src={imageUrl}/>             
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>
            <div className='arrow' onClick={()=>deleteitem(CartItem)}>&#10094;</div>
                <span className='value'>{quantity}</span>
            <div className='arrow' onClick={()=>additem(CartItem)}>&#10095;</div>
        </span>
        <span className='price'>{price}</span>
        <div className='remove-button' onClick={()=>removeitem(CartItem)}>&#10005;</div>
    </div>
)}

const mapDispatchToProps=dispatch=>({
    additem:item=>dispatch(AddItem(item)),
    deleteitem:item=>dispatch(DeleteItem(item)),
    removeitem:item=>dispatch(DeleteItemCheckout(item))
});

export default connect(null,mapDispatchToProps)(CheckOutItem);