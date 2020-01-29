import {CartFilters} from '../action/cart.action';

const initialState = {
    pending: false,
    cartTotal: null,
    error: null
}

export function cartReducer(state = initialState, action) {
    switch(action.type) {
        case CartFilters.CART_UPDATE_PENDING: 
            return {
                ...state,
                pending: true
            }
        case CartFilters.CART_UPDATE_SUCCESS:
            return {
                ...state,
                pending: false,
                cartTotal: action.payload
            }
        case CartFilters.CART_UPDATE_FAILED:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default: 
            return state;
    }
}