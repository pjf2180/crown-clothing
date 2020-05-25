import { CartActionTypes } from './cart.types'

export const ToggleCartHiddenAction = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
});
export const AddItemToCartAction = (cartItem) => ({
    type: CartActionTypes.ADD_ITEM,
    payload: cartItem
});
export const ClearItemAction = (cartItem) => ({
    type: CartActionTypes.CLEAR_ITEM,
    payload: cartItem
});
export const ClearCartAction = () => ({
    type: CartActionTypes.CLEAR_CART
})
export const RemoveItemAction = (cartItem) => ({
    type: CartActionTypes.REMOVE_ITEM,
    payload: cartItem
})