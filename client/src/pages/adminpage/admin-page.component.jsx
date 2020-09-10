import React from 'react'
import AdminCollections from '../../components/admin-collections/admin-collections.component';
import AdminCollection from '../../components/admin-collection/admin-collection.component';
import AdminProductDetail from '../../components/admin-product-detail/AdminProductDetail.component';
import { Switch, Route } from 'react-router-dom'

export const AdminPage = ({ match }) => {
    console.log('admin page render')
    return (
        <div>
            <Switch>
                <Route exact path={`${match.path}`} component={AdminCollections}></Route>
                <Route exact path={`${match.path}/:collectionId`} component={AdminCollection}></Route>
                <Route path={`${match.path}/:collectionId/:productId`} component={AdminProductDetail} ></Route>
            </Switch>
        </div>

    )
}

export default AdminPage;
