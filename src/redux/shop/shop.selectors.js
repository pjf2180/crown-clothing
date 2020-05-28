import { createSelector } from 'reselect'

const shopSelector = state => state.shop;

export const selectShopCollections = createSelector(
    shopSelector,
    shop => shop.collections
);
export const selectCollectionsForPreview = createSelector(
    shopSelector,
    shop => Object.values(shop.collections)
);
export const selectCollection = collectionId =>
    createSelector(
        selectShopCollections,
        collections => (collections[collectionId]) )
