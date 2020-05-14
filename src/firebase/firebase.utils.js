import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDxTzEs69pq7pqatGXscl7I6Eew2W3Pfyc",
    authDomain: "crown-clothing-46683.firebaseapp.com",
    databaseURL: "https://crown-clothing-46683.firebaseio.com",
    projectId: "crown-clothing-46683",
    storageBucket: "crown-clothing-46683.appspot.com",
    messagingSenderId: "111953835864",
    appId: "1:111953835864:web:067891cca1888a5044d72d"
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWIthGoogle = ()=> auth.signInWithPopup(provider);

export default firebase;