import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDxmYylrCW7Hct1-S304FmCQOgOsEUQ-nE",
    authDomain: "dev-crwn-clothing.firebaseapp.com",
    databaseURL: "https://dev-crwn-clothing.firebaseio.com",
    projectId: "dev-crwn-clothing",
    storageBucket: "dev-crwn-clothing.appspot.com",
    messagingSenderId: "113751327638",
    appId: "1:113751327638:web:b2d4f2f8353be7cb4913b7"
};
/**
 * @param  {} userAuth
 * @param  {} additionalData - Any additional data beside displayName, email and createdAt
 * @description Will store the logged in user data into firestore if it doesn't already exist
 */
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userDocRef = firestore.collection('users')
        .doc(userAuth.uid);

    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
        await userDocRef.set({
            uid: userAuth.uid,
            displayName,
            email,
            createdAt,
            ...additionalData
        })

    } catch (e) {
        console.error('Error creating user', e);
    }

    return userDocRef;
}

export const addCollectionsAndDocuments = async (collectionKey, collectionDocuments) => {
    const collectionRef = firestore.collection(collectionKey);
    console.log(collectionDocuments);

    const batch = firestore.batch();

    collectionDocuments.forEach(doc => {
        batch.set(collectionRef.doc(), { ...doc });
    });
    await batch.commit()
        .then(() => console.log('Doc written succesfully'))
        .catch(reason => console.log(reason));

}

export const convertCollectionSnapshotToMap = (collectionSnapshot) => {
    const transformedCollection = collectionSnapshot.docs.map(doc => {
        const { title, items } = doc.data();
        return {
            id: doc.id,
            routeName: encodeURI(title.toLowerCase()),
            title,
            items
        }
    });

    const collectionMap = transformedCollection.reduce((mapObj, currentVal) => {
        const key = currentVal.title.toLowerCase();
        mapObj[key] = currentVal;
        return mapObj;
    }, {});

    return collectionMap
}

const app = firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();

export const firestore = firebase.firestore(app);

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWIthGoogle = () => auth.signInWithPopup(provider);

export default firebase;