import React from 'react'
import './shop.styles.scss'
import CollectionOverview from '../../components/collection-overview/collection-overview.component'
import { Route } from 'react-router-dom'
import CollectionPage from '../collection/collection.component'
import { firestore, convertCollectionSnapshotToMap } from '../../firebase/firebase.utils'
import { connect } from 'react-redux'
import { updateCollections } from '../../redux/shop/shop.actions'
import WithSpinner from '../../components/with-spinner/with-spinner.component'

const CollectionWithSpinner = WithSpinner(CollectionPage);
const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);

class ShopPage extends React.Component {

    state = {
        isLoading: true
    };

    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const { updateCollections } = this.props;
        const collectionRef = firestore.collection('collections');
        this.unsubscribeFromSnapshot = collectionRef.get()
            .then((snapshot) => {
                const collectionMap = convertCollectionSnapshotToMap(snapshot);
                updateCollections(collectionMap);
                this.setState({ isLoading: false });
            })
    }
    render() {
        const { match } = this.props;
        const { isLoading } = this.state;
        return (
            <div className="shop-page">
                <Route exact path={`${match.path}`} render={props => (<CollectionOverviewWithSpinner isLoading={isLoading} {...props} />)}></Route>
                <Route path={`${match.path}/:collectionId`} render={props => (<CollectionWithSpinner isLoading={isLoading} {...props} />)}></Route>
            </div>
        )
    }
    componentWillUnmount() {
        this.unsubscribeFromSnapshot();
    }
}
const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
});

export default connect(null, mapDispatchToProps)(ShopPage);