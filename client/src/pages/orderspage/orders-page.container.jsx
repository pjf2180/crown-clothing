import { connect } from 'react-redux'
import { compose } from 'redux'
import { createStructuredSelector } from 'reselect'
import OrdersPage from '../orderspage/orders-page.component'
import WithSpinner from '../../components/with-spinner/with-spinner.component'
import { selectCurrentUser, selectLoadingUser } from '../../redux/user/user.selector'
import { FetchNextOrders } from '../../redux/orders/orders.actions';
import { selectFetchedOrders, selectLoadingOrder } from '../../redux/orders/orders.selectors'

const mapStateToProps = createStructuredSelector({
    isLoading: selectLoadingUser,
    orders: selectFetchedOrders,
    currentUser: selectCurrentUser,
    loadingOrders: selectLoadingOrder
});
const mapDispatchToProps = dispatch => ({
    loadNextOrders: (userId, startAfter, limit) =>
        dispatch(FetchNextOrders(userId, startAfter, limit))
});
const OrderPageContainer = compose(
    connect(mapStateToProps, mapDispatchToProps),
    WithSpinner
)(OrdersPage);

export default OrderPageContainer;