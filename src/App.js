import React from 'react';
import './App.css';
import {Switch,Route,Redirect} from 'react-router-dom';
import { connect } from "react-redux";
import {createStructuredSelector} from 'reselect';


import HomePage from './pages/homepage/homepage.component';
import Shop from './pages/shop/shop.component';
import Signin from './pages/signin_up/signinup.component';
import Header from './components/header/header.component';
import CheckOut from './pages/checkout/checkout.component';
import { auth,createUserProfDoc } from './components/firebase/firebase.utils';
import {setCurrentUser} from './redux/user/user.actions';
import {SelectCurrentUser} from './redux/user/user.selectors';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state={
      current_user:null,
      isloggedin:false
    }
  }

  autologout=null;

  componentDidMount(){
    const {setCurrentUser} = this.props;

    this.autologout = auth.onAuthStateChanged(async userAuth=>{
      // this.setState({current_user:user})
      // createUserProfDoc(user);
      // console.log(user);
      if(userAuth){
        const user=await createUserProfDoc(userAuth);
        user.onSnapshot(snapShot=>{

          // console.log(snapShot.data());
          this.props.setCurrentUser({
          
              id:snapShot.id,
              ...snapShot.data()
            });
          });

          // console.log(this.state.current_user);
      }
      else{
        setCurrentUser(userAuth);
      }
      
    });
  }

  componentWillUnmount(){
    this.autologout();
  }

  render() {
    return (
      <div>
        <Header/>
        <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/shop' component={Shop}/>
        <Route exact path='/checkout' component={CheckOut}/>
        <Route exact path='/signin' render={()=>this.props.current_user ? (
          <Redirect to='/'/>
          ) : (
            <Signin/>
            )
          }
          />
        </Switch>
      </div>
    );
  }
}

const mapStatetoProps=createStructuredSelector({
  current_user:SelectCurrentUser

})

const mapDispatchtoProps=dispatch=>({
  setCurrentUser:user=>dispatch(setCurrentUser(user))
});


export default connect(mapStatetoProps,mapDispatchtoProps)(App);
