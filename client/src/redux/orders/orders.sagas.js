import { all, call, put, takeLatest } from "redux-saga/effects";
import { OrdersActionTypes } from "./orders.types";
import { getNextOrders } from '../../firebase/firebase.utils';
import { FetchNextOrdersFailure, FetchNextOrdersSuccess } from "./orders.actions";
//  WORKERS
function* fetchNextOrdersWorker(action) {
    const { userId, cursorIdx, limit } = action.payload;

    try {
        const nextOrders = yield getNextOrders(userId, limit, cursorIdx);
        yield put(FetchNextOrdersSuccess(nextOrders));
    } catch (error) {
        put(FetchNextOrdersFailure(error));
    }
}


//EFFECTS

function* onFetchNexOrders() {
    yield takeLatest(
        OrdersActionTypes.FETCH_NEXT_ORDERS,
        fetchNextOrdersWorker
    )
}

export function* orderSagas() {
    yield all([
        call(onFetchNexOrders)
    ]);
}