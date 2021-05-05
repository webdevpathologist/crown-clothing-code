import React from 'react';
import {connect} from 'react-redux';

import CustomButton from '../custom-button/custom.button.component';
import CartItem from '../cart-item/cart.item.component';

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

const mapStatetoProps = ({cart:{CartItems}})=>({
    CartItems
})

export default connect(mapStatetoProps)(CartDropdown);
