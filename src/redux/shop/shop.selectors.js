import { createSelector } from 'reselect'

const shopSelector = state => state.shop;

export const selectShopCollections = createSelector(
    shopSelector,
    shop => shop.collections
);
export const selectCollectionsForPreview = createSelector(
    selectShopCollections,
    collections => collections ? Object.values(collections) : []
);
export const selectCollection = collectionId =>
    createSelector(
        selectShopCollections,
        collections => (collections ? collections[collectionId] : null));
