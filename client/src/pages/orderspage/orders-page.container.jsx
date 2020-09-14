import { connect } from 'react-redux'
import { compose } from 'redux'
import { createStructuredSelector } from 'reselect'
import OrdersPage from '../orderspage/orders-page.component'
import WithSpinner from '../../components/with-spinner/with-spinner.component'
import { selectUserLastOrder, selectLoadingUser } from '../../redux/user/user.selector'

const mapStateToProps = createStructuredSelector({
    lastOrder: selectUserLastOrder,
    isLoading: selectLoadingUser
});

const OrderPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(OrdersPage);

export default OrderPageContainer;