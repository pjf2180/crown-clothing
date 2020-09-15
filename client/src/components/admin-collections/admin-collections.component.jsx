import React from 'react'
import './admin-collections.styles.scss'
import CollectionCard from '../collection-card/collection-card.component';

export default function AdminCollections({ collections, history, match }) {
    const onCollectionSelected = (collectionId) => {
        console.log(collectionId);
        history.push(`${match.path}/${collectionId}`);
    }
    return <div className="admin-collection__grid">
        {
            collections.map((c) =>
                <CollectionCard key={c.collectionId} {...c} onDetailsClick={onCollectionSelected} />)
        }
       {null}
    </div>
}

