import React from 'react'
import { useEffect } from 'react';
import { fetchAdminCollection } from '../../redux/admin/admin.actions';
import AdminCollection from './admin-collection.component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectAdminCollection, selectAdminCollectionLoading } from '../../redux/admin/admin.selectors'


function AdminCollectionContainer({ fetchAdminCollection, collection, isLoading, match, history}) {
    useEffect(() => {
        const { collectionId } = match.params;
        fetchAdminCollection(collectionId);
    }, []);

    const onItemSelected = collectionItem => {
        history.push(`${match.url}/${collectionItem.id}`)
    }

    const collectionItems = collection ? collection.items : [];
    const collectionTitle = collection ? collection.title : '';

    return <AdminCollection
        isLoading={isLoading}
        collectionItems={collectionItems}
        collectionTitle={collectionTitle}
        onItemSelected={onItemSelected} />
}
const mapStateToProps = createStructuredSelector({
    collection: selectAdminCollection,
    isLoading: selectAdminCollectionLoading
})
const mapDispatchToProps = dispatch => ({
    fetchAdminCollection: (collectionId) => dispatch(fetchAdminCollection(collectionId))
})
export default connect(mapStateToProps, mapDispatchToProps)(AdminCollectionContainer);