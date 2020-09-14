import { createSelector } from 'reselect'

const selectUser = state => state.user;

export const selectLoadingUser = createSelector(
    selectUser,
    user => user.isLoading
);
export const selectCurrentUser = createSelector(
    selectUser,
    user => user.currentUser
);
export const selectIsAdminUser = createSelector(
    selectCurrentUser,
    currentUser => currentUser?.roles['admin']
);
export const selectUserLastOrder = createSelector(
    selectCurrentUser,
    currentUser => currentUser?.latestOrder
);
