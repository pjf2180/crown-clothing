import React from 'react'
import './preview-collection.styles.scss'
import CollectionItem from '../collection-item/collection-item'


const PreviewCollection = ({ title, items, itemCount = 4 }) => (
    <div className="collection-preview">
        <h1>{title.toUpperCase()}</h1>
        <div className="preview">
            {
                items
                    .filter((item, idx) => idx < itemCount)
                    .map(item => (
                        <CollectionItem key={item.id} item={item} />
                    ))
            }
        </div>
    </div>
)

export default PreviewCollection;