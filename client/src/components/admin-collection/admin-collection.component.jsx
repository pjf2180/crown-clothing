import React from 'react';
import './admin-collection.styles.scss';
import WithSpinner from '../with-spinner/with-spinner.component';


export function AdminCollection({ collectionItems, collectionTitle, onItemSelected }) {

    return <div className="admin-collection__main">
        <h3>{collectionTitle}</h3>
        <ul className="admin-collection__list">
            {
                collectionItems.map((item) => {
                    return <div key={item.id}
                        className="admin-collection__list-item"
                        onClick={() => onItemSelected({ ...item })}>
                        <div className="admin-collection__product-img"
                            style={{ background: `url(${item.imageUrl}) center center/cover` }}>
                        </div>
                        <div className={`admin-collection__product-caption 
                            ${item.online ? 'green-lf-border' : 'red-lf-border'}`}>
                            <h4>{item.name}</h4>
                            <h5>${item.price}</h5>
                            <p>{item.inStock ? 'In stock' : 'Out of stock'}</p>
                        </div>
                    </div>
                })
            }
        </ul>
    </div>
}

export default WithSpinner(AdminCollection);



