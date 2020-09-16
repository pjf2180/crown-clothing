import { all, call, put, takeLatest } from "redux-saga/effects";
import { CollectionInsightsTypes } from '../collection-insights/collection-insights.types'
import { FetchCollectionInsightsFailure, FetchCollectionInsightsSuccess } from '../collection-insights/collection-insights.actions'
//WORKERS
function* fetchCollectionInsightsWorker(action) {
    try {
        yield (put(FetchCollectionInsightsSuccess([])))
    } catch (error) {
        yield (put(FetchCollectionInsightsFailure(error)))
    }
}

//EFFECTS
function* fetchInsightsEffect() {
    yield takeLatest(
        CollectionInsightsTypes.FETCH_COLLECTION_INSIGHTS,
        fetchCollectionInsightsWorker
    )
}

export function* collectionInsightsSagas() {
    yield all([
        call(fetchInsightsEffect)
    ])
}