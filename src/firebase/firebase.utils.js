import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAFlZCNHDvt_X16vcgOAzdpJ2BdvuRUcqo",
  authDomain: "ztm-crown-clothing.firebaseapp.com",
  projectId: "ztm-crown-clothing",
  storageBucket: "ztm-crown-clothing.appspot.com",
  messagingSenderId: "914444432607",
  appId: "1:914444432607:web:c9e9eab2de8be25a6de56a",
  measurementId: "G-REJJKW6CZV"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
