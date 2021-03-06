import { combineReducers } from 'redux'
import userReducer from './user/user.reducer'
import cartReducer from './cart/cart.reducer'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { directoryReducer } from './directory/directory.reducer'
import { shopReducer } from './shop/shop.reducer'
import { productDetailReducer } from './product-detail/product-detail.reducer'
import { collectionReducer } from './admin/admin.reducer'
import { ordersReducer } from './orders/orders.reducer'
import { collectionInsightsReducer } from './collection-insights/collection-insights.reducer'
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer,
    admin: collectionReducer,
    adminProductDetail: productDetailReducer,
    orders: ordersReducer,
    collectionInsights: collectionInsightsReducer
});

export default persistReducer(persistConfig, rootReducer);
