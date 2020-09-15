
export function createReducer(initialState, ...onCalls) {
    const actionMap = {};

    [...onCalls].forEach(onCall => {
        actionMap[onCall.actionType] = onCall.handler
    });

    return (state = initialState, action) =>
        reduce(state, action, actionMap);
}
function reduce(state, action, actionMap) {

    const handler = actionMap[action.type]
    if (handler) {
        //returns new state object
        return handler(state, action.payload)
    }
    return state;
}
export function on(actionType, actionHandler) {
    return {
        actionType,
        handler: actionHandler
    }
}

export function addOne(entityItem, state) {
    return [...state.items, entityItem]
}
export function addMany(items, state) {
    return [...state.items, ...items];
}