import { addToCartAPI } from '../api/cart.api'

export const CartFilters = {
    CART_UPDATE_PENDING: 'CART_UPDATE_PENDING',
    CART_UPDATE_SUCCESS: 'CART_UPDATE_SUCCESS',
    CART_UPDATE_FAILED: 'CART_UPDATE_FAILED'
}

export const updateCartCount = cartTotal => ({
    type: 'CART_UPDATE_SUCCESS',
    payload : cartTotal
})

export const addToCartAction = (data) => {
    return dispatch => {
        addToCartAPI('user/addToCart',data)
        .then(response => {
            dispatch(updateCartCount(response.data.cartTotal))
        })
        .catch(error=>{
            console.log('------------->>')
        })
    }
}
