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

    const userSnapshot = await userDocRef.get();

    if (!userSnapshot.exists) {
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

export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged(userAuth => {
            unsubscribe();
            resolve(userAuth);
        }, reject);
    });
}

export async function editProduct(product, collectionName) {
    const batch = firestore.batch();
    const querySnap = await firestore.collection('collections')
        .where('title', '==', collectionName)
        .get();

    const productCollectionRef = querySnap.docs[0].ref;

    // get all existing items of collection

    const productCollectionDocSnap = await productCollectionRef.get();
    const { items } = productCollectionDocSnap.data();

    const newItemsList = items.map(item => {
        if (item.id === product.id) {
            return {
                id: product.id,
                imageUrl: product.imageUrl,
                name: product.name,
                price: parseInt(product.price)
            }
        }
        return item;
    });

    //adding public product to batch
    batch.set(productCollectionRef,
        {
            title: collectionName,
            items: newItemsList
        });

    //add admin product to batch
    const adminProductCollectionRef = productCollectionRef.collection('admin')
        .doc('collectionItems');

    // read current admin items list
    const adminProductCollectionSnap = await adminProductCollectionRef.get();
    const currentAdminItems = adminProductCollectionSnap.data().items;
    const newAdminItems = currentAdminItems.map(item => {
        if (item.id === product.id) { return product }
        return item
    });

    batch.set(adminProductCollectionRef, {
        title: collectionName,
        items: newAdminItems
    })

    await batch.commit()
        .then(() => console.log('Product updated succesfully'))
        .catch(reason => console.log(reason));

}

export const syncAdminCollection = async () => {
    const adminProduct_props = {
        online: true,
        inStock: true
    }
    const collectionSnap = await firestore.collection('collections').get()
    console.log(collectionSnap);
    const writeProms = collectionSnap.docs.map(collectionDoc => {

        const collectionData = collectionDoc.data();
        let adminCollectionData = { ...collectionData };
        // adding admin properties to collection copy
        adminCollectionData.items = adminCollectionData.items
            .map(item => ({ ...adminProduct_props, ...item }));
        console.log(adminCollectionData);

        const collectionDocRef = collectionDoc.ref;
        return collectionDocRef.collection('admin')
            .doc('collectionItems').set(adminCollectionData);
    });

    await Promise.all(writeProms);
}

export async function getAdminCollection(collectionName) {
    const collectionSnap = await firestore.collection('collections')
        .where('title', '==', collectionName).get();
    if (collectionSnap.docs.length === 0) { return undefined }
    const docDataSnap = collectionSnap.docs[0];
    let docData = docDataSnap.data();
    // patch meanwhile admin collection is unexistent
    docData.items = docData.items.map(item => ({ ...item, inStock: true, online: true }))
    return { collectionId: docDataSnap.id, ...docData, };
}
/**
 * @param  {} userId - User UID related to the orders
 * @param  {} limit - Especifies how many orders of the next orders to fetch
 * @param  {} startAfterId - UID used as starting point to get the orders
 * @returns {} orders - An array of the next orders found
 */
export async function getNextOrders(userId, limit, startAfterId) {
    // build query
    const ordersCollectionRef = firestore.collection('orders');
    let query = ordersCollectionRef
        .where('userId', '==', userId)
        .limit(limit);

    if (startAfterId) {
        const startAfterDocRef = await ordersCollectionRef.doc(startAfterId).get();
        query = query.startAfter(startAfterDocRef);
    }

    const querySnapshot = await query.get();

    const orders = querySnapshot.docs
        .map(docSnap => ({ orderId: docSnap.id, ...docSnap.data() }));

    return orders;
}

export async function getCollectionInsights() {
    const collectionInsightsSnap = await firestore.collection('collectionsInsights').get();
    const results  = collectionInsightsSnap.docs.map(snap => {
        return snap.data()
    });
    return results;
}

export async function addAdminCollections() {
    const collections = getTestCollections();
    const collectionRef = firestore.collection('collectionsInsights');
    const batch = firestore.batch();
    collections.forEach(c => {
        const collectionInsightDocRef = collectionRef.doc();
        batch.set(collectionInsightDocRef, c);
    });
    await batch.commit();
}

export const signOut = () => {
    return auth.signOut();
}

const app = firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();

export const firestore = firebase.firestore(app);

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWIthGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;


// test data
export const JACKETS = {
    title: 'Hats',
    items: [
        {
            id: 1,
            name: 'Brown Brim',
            imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
            price: 25
        },
        {
            id: 2,
            name: 'Blue Beanie',
            imageUrl: 'https://i.ibb.co/ypkgK0X/blue-beanie.png',
            price: 18
        },
        {
            id: 3,
            name: 'Brown Cowboy',
            imageUrl: 'https://i.ibb.co/QdJwgmp/brown-cowboy.png',
            price: 35
        },
        {
            id: 4,
            name: 'Grey Brim',
            imageUrl: 'https://i.ibb.co/RjBLWxB/grey-brim.png',
            price: 25
        },
        {
            id: 5,
            name: 'Green Beanie',
            imageUrl: 'https://i.ibb.co/YTjW3vF/green-beanie.png',
            price: 18
        },
        {
            id: 6,
            name: 'Palm Tree Cap',
            imageUrl: 'https://i.ibb.co/rKBDvJX/palm-tree-cap.png',
            price: 14
        },
        {
            id: 7,
            name: 'Red Beanie',
            imageUrl: 'https://i.ibb.co/bLB646Z/red-beanie.png',
            price: 18
        },
        {
            id: 8,
            name: 'Wolf Cap',
            imageUrl: 'https://i.ibb.co/1f2nWMM/wolf-cap.png',
            price: 14
        },
        {
            id: 9,
            name: 'Blue Snapback',
            imageUrl: 'https://i.ibb.co/X2VJP2W/blue-snapback.png',
            price: 16
        }
    ]
}



export const collections = [
    {
        collectionId: 'RliVpImYIFci6M60A6Ma',
        name: 'Hats',
        realTimeUsers: 467,
        totalVisits: 12678,
        visitDuration: 90,
        imageUrl: 'https://i.ibb.co/cvpntL1/hats.png'
    },
    {
        collectionId: '3dxdGRgjhu0d9KHOsRdQ',
        name: 'Jackets',
        realTimeUsers: 467,
        totalVisits: 12678,
        visitDuration: 90,
        imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png'
    },
    {
        collectionId: 'EHwuWBQ8muhjVljW3TFB',
        name: 'Sneakers',
        realTimeUsers: 467,
        totalVisits: 12678,
        visitDuration: 90,
        imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png'
    },
    {
        collectionId: 'vOfIGAZy5mUpeL86wva3',
        name: 'Womens',
        realTimeUsers: 467,
        totalVisits: 12678,
        visitDuration: 90,
        imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png'
    },
    {
        collectionId: 'GUHAj7E4pNHdNaecapmR',
        name: 'Mens',
        realTimeUsers: 467,
        totalVisits: 12678,
        visitDuration: 90,
        imageUrl: 'https://i.ibb.co/R70vBrQ/men.png'
    },
];
function getTestCollections() {
    return collections;
}