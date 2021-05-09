import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {SelectCollectionPreview} from '../../redux/shop/shop.selector';
import CollectionPreview from '../../components/collection-preview/collection.preview.component';

import './collection.overview.styles.scss';


const CollectionsOverview=({collections})=>(
    <div className='collection-overview'>
    {
        collections.map(({id,...otherCollectionProps})=>(
            <CollectionPreview key={id} {...otherCollectionProps}/>
    ))
    }
    </div>
);

const mapStatetoProps=createStructuredSelector({
    collections:SelectCollectionPreview
}) 

export default connect(mapStatetoProps)(CollectionsOverview);
