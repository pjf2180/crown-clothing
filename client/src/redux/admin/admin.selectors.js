import { createSelector } from 'reselect';


const selectAdminState = state => state.admin;

export const selectAdminCollection = createSelector(
    selectAdminState,
    adminState => {
        return adminState.collection;
    }
);

export const selectAdminCollectionLoading = createSelector(
    selectAdminState,
    adminState => {
        return adminState.loading;
    }
);

export const selectAdminProduct = (productId) => {
    return createSelector(
        selectAdminCollection,
        collection => {
            if (!collection) { return null }
            return collection.items.find(item => item.id === productId)
        }
    );
}

