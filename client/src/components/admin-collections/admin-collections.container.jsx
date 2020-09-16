import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import AdminCollections from './admin-collections.component';
import { selectCollectioInsightsLoading, selectCollectioInsights } from '../../redux/collection-insights/collection-insights.selectors'
import { FetchCollectionInsights } from '../../redux/collection-insights/collection-insights.actions'

export function AdminCollectionContainer({ isLoading, collections, startInsightsFetching }) {

    useEffect(() => {
        startInsightsFetching();
    }, []);

    return <AdminCollections isLoading={isLoading} collections={collections} />
}

const mapStateToProps = createStructuredSelector({
    isLoading: selectCollectioInsightsLoading,
    collections: selectCollectioInsights
});
const mapDispatchToProps = dispatch => ({
    startInsightsFetching: () => dispatch(FetchCollectionInsights())
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminCollectionContainer);

