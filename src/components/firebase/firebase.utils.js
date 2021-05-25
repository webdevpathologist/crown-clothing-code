import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config={
    apiKey: "AIzaSyAFlZCNHDvt_X16vcgOAzdpJ2BdvuRUcqo",
    authDomain: "ztm-crown-clothing.firebaseapp.com",
    projectId: "ztm-crown-clothing",
    storageBucket: "ztm-crown-clothing.appspot.com",
    messagingSenderId: "914444432607",
    appId: "1:914444432607:web:c9e9eab2de8be25a6de56a",
    measurementId: "G-REJJKW6CZV"
  };

export const createUserProfDoc=async(userAuth,otherData)=>{
  if(!userAuth) return;

  // console.log(firestore.doc('users/i6oNz0BQGdptJd1JiIAA'));
  const user=firestore.doc(`users/${userAuth.uid}`);

  const snapshot=await user.get();
  // console.log(snapshot);

  if(!snapshot.exists){
    const {displayName,email}=userAuth;
    const createdAt=new Date();

    try {
      await user.set({
        displayName,
        email,
        createdAt,
        ...otherData
      })
      
    } catch (error) {
      console.log('error creating user',error.message);      
    }
  }
  return user;
};


export const addCollectionAndDocuments=async (collectionKey,objectsToAdd)=>{
  const collectionRef=firestore.collection(collectionKey);
  // console.log(collectionRef);
  // console.log(objectsToAdd);

  const batchWrite=firestore.batch();
  objectsToAdd.forEach(element => { 
    const newDocRef=collectionRef.doc(element.title);
    // console.log(newDocRef);  
    batchWrite.set(newDocRef,element); 

  });

  return await batchWrite.commit();

};

export const convertCollectionsSnapshotToMap=(collections)=>{

  const transformedCollection=collections.docs.map(doc=>{
  
    const {title,items}=doc.data();
    return{
      routeName:encodeURI(title.toLowerCase()),
      id:doc.id,
      title,
      items
    }
  });

  // console.log(transformedCollection);
  return transformedCollection.reduce((accumulator,collection)=>{
    accumulator[collection.title.toLowerCase()]=collection;
    return accumulator;
  },{})

}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore=firebase.firestore();

const provider=new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signinwithGoogle=()=>auth.signInWithPopup(provider);

export default firebase;