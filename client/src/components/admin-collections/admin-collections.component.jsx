import React from 'react'
import './admin-collections.styles.scss'
import CollectionCard from '../collection-card/collection-card.component';
import WithSpinner from '../with-spinner/with-spinner.component';
import { withRouter } from 'react-router-dom';

export function AdminCollections({ collections, history, match }) {
    const onCollectionSelected = (collectionId) => {
        history.push(`${match.path}/${collectionId}`);
    }
    return <div className="admin-collection__grid">
        {
            collections.map((c) =>
                <CollectionCard key={c.collectionId} {...c} onDetailsClick={onCollectionSelected} />)
        }
    </div>
}
export default withRouter(WithSpinner(AdminCollections));