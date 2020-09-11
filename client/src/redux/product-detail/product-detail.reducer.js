import { AdminTypes } from '../admin/admin.types';

const INITIAL_STATE = {
    success: false,
    loading: false,
    error: false
}

export const productDetailReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case AdminTypes.EDIT_ADMIN_PRODUCT:
            return {
                ...state,
                loading: true
            }
        case AdminTypes.EDIT_ADMIN_PRODUCT_SUCCESS:
            return {
                ...state,
                success: true,
                loading: false,
                error: null
            }
        case AdminTypes.EDIT_ADMIN_PRODUCT_FAILURE:
            return {
                ...state,
                loading: false,
                error: true
            }
        default:
            return state;
    }
}
