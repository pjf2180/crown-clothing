import { SET_USER_ACTION } from './user.actions'

const INITIAL_STATE = {
    currentUser: null
}
const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_USER_ACTION:
            return {
                ...state,
                currentUser: action.payload
            }
        default:
            return state;

    }
}

export default userReducer;