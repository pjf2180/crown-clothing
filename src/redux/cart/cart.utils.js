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