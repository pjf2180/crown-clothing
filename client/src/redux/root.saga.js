import { all, call } from 'redux-saga/effects';
import { fetchCollectionsStart } from '../redux/shop/shop.saga';
import { userSagas } from './user/user.saga';
import { cartSagas } from './cart/cart.saga';
import { adminSagas } from './admin/admin.saga';
import { productDetailSagas } from './product-detail/product-detail.saga'
import { orderSagas } from './orders/orders.sagas';
import { collectionInsightsSagas } from './collection-insights/collection-insights.sagas';


export default function* rootSaga() {
    yield all([
        call(userSagas),
        call(fetchCollectionsStart),
        call(cartSagas),
        call(adminSagas),
        call(productDetailSagas),
        call(orderSagas),
        call(collectionInsightsSagas)
    ]);
}