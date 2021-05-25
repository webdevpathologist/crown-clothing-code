import { connect } from "react-redux";
import {createStructuredSelector} from 'reselect';
import {compose} from 'redux';

import {selectIsCollectionLoaded} from '../../redux/shop/shop.selector';
import WithSpinner from '../../components/spinner/spinner.component';
import CollectionPage from './collection.page.component';


const mapStateToProps=createStructuredSelector({
    isLoading:(state)=>!selectIsCollectionLoaded(state)
});

const CollectionPageContainer=compose(connect(mapStateToProps),WithSpinner)(CollectionPage);

export default CollectionPageContainer;