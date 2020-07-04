export const addItemToCart = (currentitems, itemToAdd) => {
    const existingItem = currentitems.find(i => i.id === itemToAdd.id);

    if (!existingItem) {
        return [...currentitems, { ...itemToAdd, quantity: 1 }];
    } else {
        return currentitems.map(item => {
            return item.id === itemToAdd.id ?
                { ...item, quantity: item.quantity + 1 }
                :
                { ...item }
        })
    }
}
export const removeItem = (currentItems, itemToRemove) => {
    const existingItem = currentItems.find(i => i.id === itemToRemove.id);

    if (existingItem?.quantity === 1) {
        return currentItems.filter(item => item.id !== itemToRemove.id)
    }
    return currentItems.map(item => {
        return itemToRemove.id === item.id ? { ...item, quantity: itemToRemove.quantity - 1 } : item;
    })
}
export const clearItemFromCart = (currentItems, itedmId) => {
    return currentItems.filter(i => i.id !== itedmId);
}