import { createSelector } from 'reselect'

const cartSelector = state => state.cart;

export const selectCartitems = createSelector(
    cartSelector,
    cart => cart.items || []
);
export const selectCartItemCount = createSelector(
    selectCartitems,
    (cartItems = []) =>
        cartItems
            .reduce((acumulator, cartItem) =>
                (acumulator + cartItem.quantity), 0)
);
export const selectCartHidden = createSelector(
    cartSelector,
    cart => cart.hidden
);
export const selectCartTotal = createSelector(
    selectCartitems,
    (cartItems) => {
        const total = cartItems.reduce((acumVal, current) =>
            (acumVal + current.quantity * current.price), 0);
        return total;
    }
);