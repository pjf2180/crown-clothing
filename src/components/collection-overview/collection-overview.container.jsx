import collectionOverviewComponent from "./collection-overview.component";
import { compose } from "redux";
import { selectIsFetching } from '../../redux/shop/shop.selectors';
import { connect } from "react-redux";
import WithSpinner from "../with-spinner/with-spinner.component";
import { createStructuredSelector } from "reselect";


const mapStateToProps = createStructuredSelector({
    isLoading: selectIsFetching
});

const CollectionOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(collectionOverviewComponent);

export default CollectionOverviewContainer;