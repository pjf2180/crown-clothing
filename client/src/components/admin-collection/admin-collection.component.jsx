import React from 'react';
import './admin-collection.styles.scss';

export const collectionItems = [
    {
        id: 1,
        name: 'Brown Brim',
        price: '45',
        inStock: true,
        online: true
    },
    {
        id: 2,
        name: 'Blue beanie',
        price: '18',
        inStock: true,
        online: true
    },
    {
        id: 3,
        name: 'Brown Cowboy',
        price: '35',
        inStock: true,
        online: false
    }
]

export default function AdminCollection({ match, history }) {

    const onItemSelected = (item) => {
        console.log(item);
        console.log(match);
        console.log(history);
        history.push(`${match.url}/${item.id}`)
    }
    const { collectionId } = match.params;
    return (
        <div className="admin-collection__main">
            <h3>{collectionId}</h3>
            <ul className="admin-collection__list">
                {
                    collectionItems.map((item) => {
                        return <div key={item.id} className="admin-collection__list-item" onClick={() => onItemSelected({ ...item })}>
                            <div className="admin-collection__product-img">

                            </div>
                            <div className={`admin-collection__product-caption 
                            ${item.online ? 'green-lf-border' : 'red-lf-border'}`}>
                                <h4>
                                    {item.name}

                                </h4>
                                <h5>
                                    ${item.price}

                                </h5>
                                <p>
                                    {item.inStock ? 'In stock' : 'Out of stock'}

                                </p>

                            </div>

                        </div>
                    })
                }

            </ul>
        </div>
    )
}
