import React from 'react'
import './product-selector.styles.scss'

export default function ProductSelector() {
    return (
        <div className="product-selector__list-container">
            <div className="product-selector__list">
                <ul>
                    <li className="product-selector__item product-selector__item-selected">
                        <div className="product-selector__image-container">
                            image
                        </div>
                        <div className="product-selector__info">
                            <div>Product name</div>
                            <div>$9</div>
                            <div>launched: 7/9/2019</div>
                        </div>
                    </li>
                    <li className="product-selector__item">
                        <div className="product-selector__image-container">
                            image
                        </div>
                        <div className="product-selector__info">
                            <div>Product name</div>
                            <div>$9</div>
                            <div>launched: 7/9/2019</div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}
