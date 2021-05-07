import React from 'react';
import {connect} from 'react-redux';

import CustomButton from '../custom-button/custom.button.component';
import CartItem from '../cart-item/cart.item.component';
import {SelectCartItems} from '../../redux/cart/cart.selectors';

import './cart-dropdown.styles.scss';

const CartDropdown=({CartItems})=>(
    <div className='cart-dropdown'>
    <div className='cart-items'>
    {
        CartItems.map(Item=>(

            <CartItem key={Item.id} item={Item} />
        ))
    }
    
    </div>
    <CustomButton>Check Out</CustomButton>
    </div>
);

const mapStatetoProps = (state)=>({
    CartItems:SelectCartItems(state)
})

export default connect(mapStatetoProps)(CartDropdown);
