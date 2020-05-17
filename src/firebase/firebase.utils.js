import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDEmoIfyOsGA3ps0BDLeWF0htWJhsK4180",
    authDomain: "crwn-clothing-7da3d.firebaseapp.com",
    databaseURL: "https://crwn-clothing-7da3d.firebaseio.com",
    projectId: "crwn-clothing-7da3d",
    storageBucket: "crwn-clothing-7da3d.appspot.com",
    messagingSenderId: "218145457317",
    appId: "1:218145457317:web:f4ef64f9e6b87d907df94c"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const userDocRef = firestore.collection('users')
        .doc(userAuth.uid);

    const userSnapshot = await userDocRef.get();

    if (!userSnapshot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userDocRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })

        } catch (e) {
            console.error('Error creating user', e);
        }
    }
    return userDocRef;
}

const app = firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();

export const firestore = firebase.firestore(app);

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWIthGoogle = () => auth.signInWithPopup(provider);

export default firebase;