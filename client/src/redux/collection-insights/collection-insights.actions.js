import { CollectionInsightsTypes } from './collection-insights.types';
export const FetchCollectionInsights = () => ({
    type: CollectionInsightsTypes.FETCH_COLLECTION_INSIGHTS
});
export const FetchCollectionInsightsSuccess = (items) => ({
    type: CollectionInsightsTypes.FETCH_COLLECTION_INSIGHTS_SUCCESS,
    payload: { items }
});
export const FetchCollectionInsightsFailure = () => ({
    type: CollectionInsightsTypes.FETCH_COLLECTION_INSIGHTS_FAILURE
});