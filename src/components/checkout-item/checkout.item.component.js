import React from 'react';
import {connect} from 'react-redux';

import {AddItem,DeleteItemInCart,DeleteItemInCheckout} from '../../redux/cart/cart.actions'

import './checkout.item.styles.scss';


const CheckOutItem =({CartItem,clearitem,additem,removeitem})=>{
    const {name,price,imageUrl,quantity}=CartItem
    return(
    <div className='checkout-item'>
        <div className='image-container'>
            <img alt='item' src={imageUrl}/>             
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>
            <div className='arrow' onClick={()=>removeitem(CartItem)}>&#10094;</div>
                <span className='value'>{quantity}</span>
            <div className='arrow' onClick={()=>additem(CartItem)}>&#10095;</div>
        </span>
        <span className='price'>{price}</span>
        <div className='remove-button' onClick={()=>clearitem(CartItem)}>&#10005;</div>

    </div>
)}

const mapDispatchToProps=dispatch=>({
    clearitem:item=>dispatch(DeleteItemInCart(item)),
    additem:item=>dispatch(AddItem(item)),
    removeitem:item=>dispatch(DeleteItemInCheckout(item))
    
}) 

export default connect(null,mapDispatchToProps)(CheckOutItem);