import React, { Fragment, useEffect } from 'react'
import AdminCollections from '../../components/admin-collections/admin-collections.component';
import AdminCollection from '../../components/admin-collection/admin-collection.container';
import AdminProductDetail from '../../components/admin-product-detail/AdminProductDetail.component';
import AdminSignIn from '../../components/admin-sign-in/admin-sign-in.component';
import { Switch, Route } from 'react-router-dom';

const AdminPage = ({ match }) => {

    return (
        <Fragment>
            <Switch>
                <Route exact path={`${match.path}`} component={AdminCollections}></Route>
                <Route exact path={`${match.path}/signin`} component={AdminSignIn}></Route>
                <Route exact path={`${match.path}/:collectionId`} component={AdminCollection}></Route>
                <Route path={`${match.path}/:collectionId/:productId`} component={AdminProductDetail} ></Route>
            </Switch>
        </Fragment>

    )
}

export default AdminPage;