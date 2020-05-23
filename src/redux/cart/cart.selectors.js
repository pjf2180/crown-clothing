import { createSelector } from 'reselect'

const cartSelector = state => state.cart;

export const selectCartitems = createSelector(
    cartSelector,
    cart => cart.items
)
export const selectCartItemCount = createSelector(
    selectCartitems,
    cartItems => cartItems.reduce((acumulator, cartItem) => (acumulator + cartItem.quantity), 0)
)