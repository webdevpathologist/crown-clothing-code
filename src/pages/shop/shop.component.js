import React from 'react';
import {Route} from 'react-router-dom';
import { connect } from "react-redux";


import CollectionOverviewContainer from '../../components/collection-overview/collection.overview.container';
import CollectionPageContainer from '../collection/collection.page.container';
import {fetchCollectionsStartAsync} from '../../redux/shop/shop.actions';





class Shop extends React.Component{

//   state={
//       loading:true
//   };
    

//     autologout_snapshot = null;

    componentDidMount(){

        const {fetchCollectionsStartAsync}=this.props;
        fetchCollectionsStartAsync();


        // const {updateCollections} =this.props;
        // const collectionRef=firestore.collection('collections');

        // // console.log('component mounting started');

        // // fetch('https://firestore.googleapis.com/v1/projects/ztm-crown-clothing/databases/(default)/documents/collections')
        // // .then(response=>response.json())
        // // .then(collections=>console.log(collections));

        // collectionRef.get().then(snapshot=>{
        //     const collectionMap=(convertCollectionsSnapshotToMap(snapshot));

        //      updateCollections(collectionMap);
        //     this.setState({loading:false});
            
        // });

        // // console.log('component mounting completed');
    }

    render(){
        const {match} = this.props;

        console.log(match.path);

        return(
            <div className='shop-page'>
                <Route 
                exact path={`${match.path}`} 
                component={CollectionOverviewContainer}
                />
                <Route 
                path={`${match.path}/:collectionid`} 
                component={CollectionPageContainer}
                />
            </div>
        )
        }
    }

const mapDispatchToProps= dispatch=>({
  fetchCollectionsStartAsync:()=>dispatch(fetchCollectionsStartAsync())
});


export default connect(null,mapDispatchToProps)(Shop);