import { createSelector } from 'reselect'

const selectOrdersState = state => state.orders;

export const selectFetchedOrders = createSelector(
    selectOrdersState,
    (ordersState) => {
        return [...ordersState.fetchedOrders]
    }
)

export const selectLoadingOrder = createSelector(
    selectOrdersState,
    ordersState => ordersState.isLoading
)