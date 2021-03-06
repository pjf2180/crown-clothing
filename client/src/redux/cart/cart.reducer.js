import { CartActionTypes } from './cart.types'
import { addItemToCart, clearItemFromCart, removeItem } from './cart.utils'

const INITIAL_STATE = {
    hidden: true,
    items: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                items: addItemToCart([...state.items], action.payload)
            }
        case CartActionTypes.CLEAR_ITEM:
            return {
                ...state,
                items: clearItemFromCart([...state.items], action.payload)
            }
        case CartActionTypes.CLEAR_CART:
            return {
                ...state,
                items: []
            }
        case CartActionTypes.REMOVE_ITEM:
            return {
                ...state,
                items: removeItem([...state.items], action.payload)
            }
        default:
            return state;
    }
}

export default cartReducer;