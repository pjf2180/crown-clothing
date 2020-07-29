import React from 'react'
import './shop.styles.scss'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchCollectionsStart } from '../../redux/shop/shop.actions'
import CollectionOverviewContainer from '../../components/collection-overview/collection-overview.container'
import CollectionPageContainer from '../collection/collection.container'
import { useEffect } from 'react'

const ShopPage = ({ fetchCollectionsStart, match }) => {

    useEffect(() => {
        fetchCollectionsStart();
    },[fetchCollectionsStart]);

    return (
        <div className="shop-page">
            <Route exact path={`${match.path}`} component={CollectionOverviewContainer}></Route>
            <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer}></Route>
        </div>
    );

}

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(null, mapDispatchToProps)(ShopPage);