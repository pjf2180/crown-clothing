import { UserActionTypes } from './user.types'

export const setCurrentUserAction = user => ({
    type: UserActionTypes.SET_USER_ACTION,
    payload: user
})
export default setCurrentUserAction;