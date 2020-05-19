export const SET_USER_ACTION = '[App js] Set User';
export const setCurrentUserAction = user => ({
    type: SET_USER_ACTION,
    payload: user
})
export default setCurrentUserAction;