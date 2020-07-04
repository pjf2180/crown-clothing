import React from 'react'
import './collection-item.styles.scss'
import CustomButton from '../custom-button/custom-button.component'
import { AddItemToCartAction } from '../../redux/cart/cart.actions'
import { connect } from 'react-redux';

const CollectionItem = ({ item, addItemToCart }) => {
    const { name, price, imageUrl } = item;

    return (
        <div className="collection-item">
            <div
                className="image"
                style={{ backgroundImage: `url(${imageUrl})` }}>

            </div>
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <CustomButton className="custom-button" onClick={() => addItemToCart(item)} inverted >Add to Cart</CustomButton>
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    addItemToCart: item => dispatch(AddItemToCartAction(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);