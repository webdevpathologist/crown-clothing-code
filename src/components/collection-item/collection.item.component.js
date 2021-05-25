import React from 'react';
import {connect} from 'react-redux';

import CustomButton from '../custom-button/custom.button.component';
import {AddItem} from '../../redux/cart/cart.actions';

import './collection.item.styles.scss';


const CollectionItem=({item,AddItem})=>{
    const {name,price,imageUrl}=item;
    return(

    <div className='collection-item'>
        <div 
            className='image'
            style={{
                backgroundImage:`url(${imageUrl})`
            }}
        />
        <div className='collection-footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>

        </div>
        <CustomButton className='custom-button' onClick={()=>AddItem(item)} inverted>Add to Cart</CustomButton>
    </div>

)};

const mapDispatchtoProps=dispatch=>({
    AddItem:item=>dispatch(AddItem(item))
});

export default connect(null,mapDispatchtoProps)(CollectionItem);