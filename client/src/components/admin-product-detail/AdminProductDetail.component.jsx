import React, { useEffect, Fragment } from 'react';
import './admin-product-detail.styles.scss';
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import { connect } from 'react-redux';
import { selectAdminProduct, selectAdminCollectionLoading } from '../../redux/admin/admin.selectors';
import { fetchAdminCollection, editAdminProduct } from '../../redux/admin/admin.actions';
import WithSpinner from '../with-spinner/with-spinner.component';
import { useState } from 'react';

export function AdminProductDetail({ product, onSave }) {
    const [productState, setProductState] = useState(product);

    const onInputChange = (event) => {
        const { name, value } = event.target;
        setProductState({ ...product, [name]: value })
    }

    const save = (e) => {
        e.preventDefault();
        onSave(productState)
    }

    return (
        <div className="admin-product__details">
            {
                <Fragment>
                    <div className="admin-product__image"
                        style={{ background: `url(${product.imageUrl}) center center/cover` }}>
                    </div>
                    <h3>{productState.name}</h3>
                    <form onSubmit={save}>
                        <FormInput
                            type="text"
                            name="name"
                            value={productState.name}
                            label="Product name"
                            handleChange={onInputChange} />
                        <FormInput
                            type="number"
                            name="price"
                            value={productState.price}
                            label="Item price"
                            handleChange={onInputChange} />
                        <CustomButton type="submit">Save</CustomButton>
                    </form>
                </Fragment>
            }
        </div >
    )
}

const AdminProductDetailWithSpinner = WithSpinner(AdminProductDetail)

function ProductDetailContainer({ fetchAdminCollection, editProduct, product, isLoading, match }) {
    useEffect(() => {
        const { collectionId } = match.params;
        fetchAdminCollection(collectionId);
    }, []);

    const saveProduct = product => {
        const { collectionId } = match.params;
        editProduct(collectionId, product);
    }

    return <AdminProductDetailWithSpinner
        isLoading={isLoading || product === null}
        product={product} onSave={saveProduct} />
}

const mapStateToProps = (state, props) => {
    const { productId } = props.match.params;
    return {
        product: selectAdminProduct(parseInt(productId))(state),
        isLoading: selectAdminCollectionLoading(state)
    }
}
const mapDispatchToProps = dispatch => ({
    editProduct: (collectionName, product) => dispatch(editAdminProduct(product, collectionName)),
    fetchAdminCollection: (collectionId) => dispatch(fetchAdminCollection(collectionId))
})
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailContainer);