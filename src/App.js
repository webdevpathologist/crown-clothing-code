import React from 'react';
import './App.css';
import {Switch,Route} from 'react-router-dom';


import HomePage from './pages/homepage/homepage.component';
import Shop from './pages/shop/shop.component';
import Signin from './pages/signin_up/signinup.component';
import Header from './components/header/header.component';
import { auth } from './components/firebase/firebase.utils';

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
    this.autologout = auth.onAuthStateChanged(user=>{
      this.setState({current_user:user})
      console.log(user);
    });
  }

  componentWillUnmount(){
    this.autologout();
  }

  render() {
    return (
      <div>
        <Header current_user={this.state.current_user}/>
        <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/shop' component={Shop}/>
        <Route exact path='/signin' component={Signin}/>
        </Switch>
      </div>
    );
  }
}
export default App;
