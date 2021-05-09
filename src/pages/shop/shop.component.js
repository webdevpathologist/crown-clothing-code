import React from 'react';
import {Route} from 'react-router-dom';

import CollectionOverview from '../../components/collection.overview/collection.overview.component';
import Collection from '../collection/collection.page.component';


const Shop =({match})=>{
    console.log(match);
        return(
            <div className='shop-page'>
                <Route exact path={`${match.path}`} component={CollectionOverview} />
                <Route path={`${match.path}/:collectionid`} component={Collection}/>
            </div>
        )
        }

export default Shop;