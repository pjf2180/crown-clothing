import React from 'react'
import './admin-collections.styles.scss'
import CollectionCard from '../collection-card/collection-card.component';

const collections = [
    {
        name: 'Hats',
        realTimeUsers: 467,
        totalVisits: 12678,
        visitDuration: 90,
        imageUrl: 'https://i.ibb.co/cvpntL1/hats.png'
    },
    {
        name: 'Jackets',
        realTimeUsers: 467,
        totalVisits: 12678,
        visitDuration: 90,
        imageUrl: 'https://i.ibb.co/cvpntL1/hats.png'
    },
    {
        name: 'Sneakers',
        realTimeUsers: 467,
        totalVisits: 12678,
        visitDuration: 90,
        imageUrl: 'https://i.ibb.co/cvpntL1/hats.png'
    },
    {
        name: 'Womens',
        realTimeUsers: 467,
        totalVisits: 12678,
        visitDuration: 90,
        imageUrl: 'https://i.ibb.co/cvpntL1/hats.png'
    },
    {
        name: 'Mens',
        realTimeUsers: 467,
        totalVisits: 12678,
        visitDuration: 90,
        imageUrl: 'https://i.ibb.co/cvpntL1/hats.png'
    },
];

export default function AdminCollections({ history, match }) {
    console.log(match)
    const onCollectionSelected = (collectionName) => {
        console.log(collectionName);
        history.push(`${match.path}/${collectionName}`);
    }
    return <div className="admin-collection__grid">
        {
            collections.map((c, idx) => <CollectionCard key={idx} {...c} onDetailsClick={onCollectionSelected} />)
        }
    </div>
}

