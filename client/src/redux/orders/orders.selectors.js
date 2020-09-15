import { createSelector } from 'reselect'
import { selectCurrentUser } from '../user/user.selector'

const selectOrdersState = state => state.orders;

export const selectFetchedOrders = createSelector(
    selectOrdersState,
    selectCurrentUser,
    (ordersState, currentUser) => {
        const { latestOrder } = currentUser;
        return [latestOrder, ...ordersState.fetchedOrders]
    }
)

export const selectLoadingOrder = createSelector(
    selectOrdersState,
    ordersState => ordersState.isLoading
)