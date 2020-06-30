import { all, call } from 'redux-saga/effects';
import { fetchCollectionsStart } from '../redux/shop/shop.saga';
import { userSagas } from './user/user.saga';
import { cartSagas } from './cart/cart.saga'
export default function* rootSaga() {
    yield all([
        call(userSagas),
        call(fetchCollectionsStart),
        call(cartSagas)
    ]);
}