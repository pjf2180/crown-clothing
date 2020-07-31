import React from 'react'
import CollectionItemContainer from './collection-item.styles'
import CustomButton from '../custom-button/custom-button.component'
import { AddItemToCartAction } from '../../redux/cart/cart.actions'
import { connect } from 'react-redux';

const CollectionItem = ({ item, addItemToCart }) => {
    const { name, price, imageUrl } = item;

    return (
        <CollectionItemContainer>
            <div
                className="image"
                style={{ backgroundImage: `url(${imageUrl})` }}>
            </div>
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <CustomButton className="custom-button" onClick={() => addItemToCart(item)} inverted >Add to Cart</CustomButton>
        </CollectionItemContainer>
    )
};

const mapDispatchToProps = dispatch => ({
    addItemToCart: item => dispatch(AddItemToCartAction(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);