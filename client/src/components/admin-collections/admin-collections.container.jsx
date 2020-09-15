import { connect } from 'react-redux'
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect'
import WithSpinner from '../with-spinner/with-spinner.component'
import AdminCollections from './admin-collections.component';


const mapStateToProps = state => ({
    isLoading: true,
    collections: []
})

const AdminCollectionContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(AdminCollections);

export default AdminCollectionContainer;
