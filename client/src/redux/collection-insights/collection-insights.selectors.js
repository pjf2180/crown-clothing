import { createSelector } from 'reselect'

const selectCollectioInsightsState = state => state.collectionInsights;

export const selectCollectioInsights = createSelector(
    selectCollectioInsightsState,
    collectionInsightsState => collectionInsightsState.items
);
export const selectCollectioInsightsLoading = createSelector(
    selectCollectioInsightsState,
    collectionInsightsState => collectionInsightsState.loading
);