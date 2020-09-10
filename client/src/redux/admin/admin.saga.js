import { takeLatest, all, put, call } from 'redux-saga/effects';
import { AdminTypes } from '../admin/admin.types'
import { FetchAdminCollectionSuccess, fetchAdminCollectionFailure } from '../admin/admin.actions';
import {  getAdminCollection } from '../../firebase/firebase.utils'

function* fetchAdminCollectionWorker(action) {
    const { collectionId } = action.payload;
    try {
        const collection = yield getAdminCollection(collectionId);
        console.log(collection);
        yield put(FetchAdminCollectionSuccess(collection))
    } catch (error) {
        yield put(fetchAdminCollectionFailure(error))
    }
}


export function* fetchAdminCollectionEffect() {
    yield takeLatest(
        AdminTypes.FETCH_ADMIN_COLLECTION,
        fetchAdminCollectionWorker
    );
}

export function* adminSagas() {
    yield all([
        call(fetchAdminCollectionEffect)
    ]);
}