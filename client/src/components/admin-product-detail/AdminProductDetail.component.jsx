import React, { useEffect, Fragment } from 'react';
import './admin-product-detail.styles.scss';
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import { useState } from 'react';


//temporary
import { collectionItems } from '../admin-collection/admin-collection.component'

export default function AdminProductDetail(props) {
    const [product, setProduct] = useState(undefined);
    useEffect(() => {
        const { productId } = props.match.params;
        const product = collectionItems.find(p => p.id == productId);
        setProduct(product);

    }, [props.match.params.productId]);

    const onInputChange = (event) => {
        const { name, value } = event.target;
        setProduct({ ...product, [name]: value })
    }
    const onSave = (e)=>{
        e.preventDefault()
        console.log(product);
        //call update product action
    }
    return (
        <div className="admin-product__details">
            {
                product ? (<Fragment>
                    <div className="admin-product__image"/>
                    <h3>{product.name}</h3>
                    <form onSubmit={onSave}>
                        <FormInput
                            type="text"
                            name="name"
                            value={product.name}
                            label="Product name" onChange={onInputChange} />
                        <FormInput
                            type="number"
                            name="price"
                            value={product.price}
                            label="Item price" onChange={onInputChange} />
                        <CustomButton type="submit">Save</CustomButton>
                    </form>
                </Fragment>)
                    :
                    <h3>Loading</h3>
            }


        </div>
    )
}
