import { createSelector } from 'reselect'

const COLLECTION_ID_MAP = {
    hats: 1,
    sneakers: 2,
    jackets: 3,
    womens: 4,
    mens: 5
};

const shopSelector = state => state.shop;

export const selectShopCollections = createSelector(
    shopSelector,
    shop => shop.collections
);
export const selectCollection = collectionId =>
    createSelector(
        selectShopCollections,
        collections =>
            collections.find(c => c.id === COLLECTION_ID_MAP[collectionId]));
