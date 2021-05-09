import React from 'react';
import {connect} from 'react-redux';

import CollectionItem from '../../components/collection-item/collection.item.component';
import {SelectCollection} from '../../redux/shop/shop.selector';

import './collection.page.styles.scss';

const Collection=({collections})=>{
    const {title,items}=collections
    return(
        <div className='collection-page'>
            <h2 className='title'>{title}</h2>
            <div className='items'>
            {
                items.map(item=>(
                    <CollectionItem id={item.id} item={item}/>
                    )
                    )
            }
            </div>
        </div>

    )
}

const mapStatetoProps=(state,ownProps)=>({
    collections:SelectCollection(ownProps.match.params.collectionid)(state)
})

export default connect(mapStatetoProps)(Collection);