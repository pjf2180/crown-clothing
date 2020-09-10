import { AdminTypes } from './admin.types';

export const fetchAdminCollection = (collectionId) => ({
    type: AdminTypes.FETCH_ADMIN_COLLECTION,
    payload: { collectionId }
});
export const FetchAdminCollectionSuccess = (collection) => ({
    type: AdminTypes.FETCH_ADMIN_COLLECTION_SUCCESS,
    payload: { collection }
});
export const fetchAdminCollectionFailure = (error) => ({
    type: AdminTypes.FETCH_ADMIN_COLLECTION_FAILURE,
    payload: { error }
});