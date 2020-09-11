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

export const editAdminProduct = (product, collectionName) => ({
    type: AdminTypes.EDIT_ADMIN_PRODUCT,
    payload: { product, collectionName }
});
export const editAdminProductSuccess = () => ({
    type: AdminTypes.EDIT_ADMIN_PRODUCT_SUCCESS
});
export const editAdminProductFailure = (error) => ({
    type: AdminTypes.EDIT_ADMIN_PRODUCT_FAILURE,
    payload: { error }
});