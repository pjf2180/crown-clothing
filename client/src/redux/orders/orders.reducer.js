import { OrdersActionTypes } from "./orders.types"
import { unionWith } from 'lodash'

export const INITIAL_STATE = {
    fetchedOrders: [],
    isLoading: false,
    error: null
}

export function ordersReducer(state = INITIAL_STATE, action) {
    const { payload } = action;
    switch (action.type) {
        case OrdersActionTypes.FETCH_NEXT_ORDERS:
            return {
                ...state,
                isLoading: true
            }
        case OrdersActionTypes.FETCH_NEXT_ORDERS_SUCCESS:
            const nextOrders = [...payload.nextOrders];
            const allOrders = [...state.fetchedOrders, ...nextOrders];
            const fetchedOrders = unionWith(
                allOrders,
                nextOrders, (ordA, ordB) => ordA.orderId === ordB.orderId);
            return {
                ...state,
                isLoading: false,
                error: null,
                fetchedOrders
            }
        case OrdersActionTypes.FETCH_NEXT_ORDERS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: payload.error
            }
        default:
            return state;
    }
}