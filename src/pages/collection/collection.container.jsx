import { compose } from 'redux'
import { createStructuredSelector } from 'reselect'
import { isCollectionsLoaded } from '../../redux/shop/shop.selectors';
import CollectionPage from '../../pages/collection/collection.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import { connect } from 'react-redux';

const mapStateToProps = createStructuredSelector({
    isLoading: (state) => !isCollectionsLoaded(state)
});

const CollectionPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionPage);

export default CollectionPageContainer;