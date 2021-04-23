import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config={
    put your own config here
  }

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore=firebase.firestore();

const provider=new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signinwithGoogle=()=>auth.signInWithPopup(provider);

export default firebase;