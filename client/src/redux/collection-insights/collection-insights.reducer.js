import { createReducer, on } from '../helpers.redux';
import { CollectionInsightsTypes } from './collection-insights.types'

const initialState = {
    items: [],
    loading: false,
    error: false
}

const reducer = createReducer(
    initialState,
    on(CollectionInsightsTypes.FETCH_COLLECTION_INSIGHTS, (state) => {
        return {
            ...state,
            loading: true
        }
    }),
    on(CollectionInsightsTypes.FETCH_COLLECTION_INSIGHTS_SUCCESS, (state, { items }) => {
        return {
            ...state,
            items: [...items],
            loading: false
        }
    }),
    on(CollectionInsightsTypes.FETCH_COLLECTION_INSIGHTS_FAILURE, (state, { error }) => {
        return {
            ...state,
            error,
            loading: false
        }
    }),
)

export const collectionInsightsReducer = (state, action) => {
    return reducer(state, action);
}