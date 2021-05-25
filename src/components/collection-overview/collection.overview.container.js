import { connect } from "react-redux";
import {createStructuredSelector} from 'reselect';
import {compose} from 'redux';

import {selectIsCollectionFetching} from '../../redux/shop/shop.selector';
import WithSpinner from '../../components/spinner/spinner.component';
import CollectionOverview from '../../components/collection-overview/collection.overview.component';

const mapStateToProps=createStructuredSelector({
    isLoading:selectIsCollectionFetching
});

const CollectionOverviewContainer=compose(connect(mapStateToProps),WithSpinner)(CollectionOverview);

export default CollectionOverviewContainer;