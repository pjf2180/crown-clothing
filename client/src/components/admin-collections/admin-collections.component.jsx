import React from 'react'
import './admin-collections.styles.scss'
import CollectionCard from '../collection-card/collection-card.component';

const collections = [
    {
        collectionId: 'RliVpImYIFci6M60A6Ma',
        name: 'Hats',
        realTimeUsers: 467,
        totalVisits: 12678,
        visitDuration: 90,
        imageUrl: 'https://i.ibb.co/cvpntL1/hats.png'
    },
    {
        collectionId: '3dxdGRgjhu0d9KHOsRdQ',
        name: 'Jackets',
        realTimeUsers: 467,
        totalVisits: 12678,
        visitDuration: 90,
        imageUrl: 'https://i.ibb.co/cvpntL1/hats.png'
    },
    {
        collectionId: 'EHwuWBQ8muhjVljW3TFB',
        name: 'Sneakers',
        realTimeUsers: 467,
        totalVisits: 12678,
        visitDuration: 90,
        imageUrl: 'https://i.ibb.co/cvpntL1/hats.png'
    },
    {
        collectionId: 'vOfIGAZy5mUpeL86wva3',
        name: 'Womens',
        realTimeUsers: 467,
        totalVisits: 12678,
        visitDuration: 90,
        imageUrl: 'https://i.ibb.co/cvpntL1/hats.png'
    },
    {
        collectionId: 'GUHAj7E4pNHdNaecapmR',
        name: 'Mens',
        realTimeUsers: 467,
        totalVisits: 12678,
        visitDuration: 90,
        imageUrl: 'https://i.ibb.co/cvpntL1/hats.png'
    },
];

export default function AdminCollections({ history, match }) {
    console.log(match)
    const onCollectionSelected = (collectionId) => {
        console.log(collectionId);
        history.push(`${match.path}/${collectionId}`);
    }
    return <div className="admin-collection__grid">
        {
            collections.map((c, idx) => <CollectionCard key={idx} {...c} onDetailsClick={onCollectionSelected} />)
        }
    </div>
}

