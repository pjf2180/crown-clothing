import { takeLatest, all, call, put } from "redux-saga/effects";
import UserActionTypes from '../../redux/user/user.types';
import { ClearCartAction } from '../../redux/cart/cart.actions';

export function* clearCart() {
    yield put(ClearCartAction());
}

export function* onSignOutSuccess() {
    yield takeLatest(
        UserActionTypes.SIGN_OUT_SUCCESS,
        clearCart);
}

export function* cartSagas() {
    yield all([
        call(onSignOutSuccess)
    ]);
}