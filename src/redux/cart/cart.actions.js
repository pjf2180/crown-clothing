import { CartActionTypes } from './cart.types'

export const ToggleCartHiddenAction = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
});
export const AddItemToCartAction = (cartItem) => ({
    type: CartActionTypes.ADD_ITEM,
    payload: cartItem
});