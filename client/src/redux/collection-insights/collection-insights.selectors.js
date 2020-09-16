import { createSelector } from 'reselect'

const selectCollectioInsightsState = state => state.collectionInsights;

export const selectCollectioInsights = createSelector(
    selectCollectioInsightsState,
    collectionInsightsState => collectionInsightsState.items
);