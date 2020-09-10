
import { AdminTypes } from './admin.types'

const INITIAL_STATE = {
    collection: null,
    loading: false,
    error: false

}

export const adminReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case AdminTypes.FETCH_ADMIN_COLLECTION:
            return {
                ...state,
                loading: true
            }
        case AdminTypes.FETCH_ADMIN_COLLECTION_SUCCESS:
            return {
                ...state,
                loading: false,
                collection: action.payload.collection
            }
        case AdminTypes.FETCH_ADMIN_COLLECTION_FAILURE:
            return {
                ...state,
                loading: false,
                error: true
            }
        default:
            return state;
    }
}