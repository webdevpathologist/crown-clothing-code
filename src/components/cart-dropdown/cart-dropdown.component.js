import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {withRouter} from 'react-router-dom';

import CustomButton from '../custom-button/custom.button.component';
import CartItem from '../cart-item/cart.item.component';
import {SelectCartItems} from '../../redux/cart/cart.selectors';
import {ToggleCartHidden} from '../../redux/cart/cart.actions';

import './cart-dropdown.styles.scss';

const CartDropdown=({CartItems,history,dispatch})=>{
    
    return(<div className='cart-dropdown'>
    <div className='cart-items'>
    {
        CartItems.length
        ?
        (CartItems.map(Item=>(<CartItem key={Item.id} item={Item} />)))
        :
        <span className='empty-message'>Cart is Empty</span>
    }
    
    </div>
    <CustomButton onClick={() => {
        history.push('/checkout');
        dispatch(ToggleCartHidden())
    }}>
    Check Out
    </CustomButton>
    </div>)
};

const mapStatetoProps = createStructuredSelector({
    CartItems:SelectCartItems
});

export default withRouter(connect(mapStatetoProps)(CartDropdown));
