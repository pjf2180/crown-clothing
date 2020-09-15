import { OrdersActionTypes } from "./orders.types";

export const FetchNextOrders = (userId, startAfter, limit) => ({
    type: OrdersActionTypes.FETCH_NEXT_ORDERS,
    payload: { userId, startAfter, limit }
});
export const FetchNextOrdersFailure = (error) => ({
    type: OrdersActionTypes.FETCH_NEXT_ORDERS_FAILURE,
    payload: { error }
});
export const FetchNextOrdersSuccess = (nextOrders) => ({
    type: OrdersActionTypes.FETCH_NEXT_ORDERS_SUCCESS,
    payload: { nextOrders }
});