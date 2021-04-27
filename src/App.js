import React from 'react';
import './App.css';
import {Switch,Route} from 'react-router-dom';


import HomePage from './pages/homepage/homepage.component';
import Shop from './pages/shop/shop.component';
import Signin from './pages/signin_up/signinup.component';
import Header from './components/header/header.component';
import { auth,createUserProfDoc } from './components/firebase/firebase.utils';

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
    this.autologout = auth.onAuthStateChanged(async userAuth=>{
      // this.setState({current_user:user})
      // createUserProfDoc(user);
      // console.log(user);
      if(userAuth){
        const user=await createUserProfDoc(userAuth);
        user.onSnapshot(snapShot=>{
          // console.log(snapShot.data());
          this.setState({
            current_user:{
              id:snapShot.id,
              ...snapShot.data()
            }
          });

          console.log(this.state.current_user);
        });
      }
      else{
        this.setState({current_user:userAuth});
      }
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
