import { all, call, takeLatest, put } from "redux-saga/effects";
import { AdminTypes } from "../admin/admin.types";
import { editProduct } from '../../firebase/firebase.utils'
import { editAdminProductSuccess, editAdminProductFailure } from '../admin/admin.actions'

//workers
function* editProductWorker(action) {
    console.log(action);
    const { collectionName, product } = action.payload;
    try {
        yield editProduct(product, collectionName);
        yield put(editAdminProductSuccess())
    } catch (error) {
        yield put(editAdminProductFailure(error))
    }
}

//effects
function* editProductEffect() {
    yield takeLatest(
        AdminTypes.EDIT_ADMIN_PRODUCT,
        editProductWorker
    )
}

export function* productDetailSagas() {
    yield all([
        call(editProductEffect)
    ])
}