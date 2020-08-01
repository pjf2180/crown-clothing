import React, { Suspense, lazy } from 'react'
import './shop.styles.scss'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchCollectionsStart } from '../../redux/shop/shop.actions'
import { useEffect } from 'react'
import LoadingSpinner from '../../components/loading-spinner/loading-spinner'
//Lazy loaded components
const CollectionOverviewContainer = lazy(() => import('../../components/collection-overview/collection-overview.container'));
const CollectionPageContainer = lazy(() => import('../collection/collection.container'));

const ShopPage = ({ fetchCollectionsStart, match }) => {

    useEffect(() => {
        fetchCollectionsStart();
    }, [fetchCollectionsStart]);

    return (
        <div className="shop-page">
            <Suspense fallback={<LoadingSpinner/>}>
                <Route exact path={`${match.path}`} component={CollectionOverviewContainer}></Route>
                <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer}></Route>
            </Suspense>
        </div>
    );

}

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(null, mapDispatchToProps)(ShopPage);