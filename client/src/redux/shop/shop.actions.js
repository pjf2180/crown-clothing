import shopActionTypes from './shop.types'
import { firestore , convertCollectionSnapshotToMap } from '../../firebase/firebase.utils'


export const updateCollections = collectionsMap => ({
    type: shopActionTypes.UPDATE_COLLECTIONS,
    payload: collectionsMap
});

export const fetchCollectionsStart = () => ({
    type: shopActionTypes.FETCH_COLLECTIONS_START
});
export const fetchCollectionsSuccess = (collectionMap) => ({
    type: shopActionTypes.FETCH_COLLECTION_SUCCESS,
    payload: collectionMap
});
export const fetchCollectionsFailed = (errorMessage) => ({
    type: shopActionTypes.FETCH_COLLECTION_FAIL,
    payload: errorMessage
});

export const fetchCollectionsStartAsync = () => {

    return dispatch => {

        const collectionRef = firestore.collection('collections');
        dispatch(fetchCollectionsStart());

        collectionRef.get()
            .then((snapshot) => {
                const collectionMap = convertCollectionSnapshotToMap(snapshot);
                dispatch(fetchCollectionsSuccess(collectionMap))
            })
            .catch(reason => {
                console.log(reason)
                dispatch(fetchCollectionsFailed(reason.message))
            })
    }
}