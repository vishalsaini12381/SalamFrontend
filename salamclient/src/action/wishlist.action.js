import { addToWishlistAPI } from '../api/cart.api'

export const WishlistFilters = {
    WISHLIST_UPDATE_PENDING: 'WISHLIST_UPDATE_PENDING',
    WISHLIST_UPDATE_SUCCESS: 'WISHLIST_UPDATE_SUCCESS',
    WISHLIST_UPDATE_FAILED: 'WISHLIST_UPDATE_FAILED'
}

export const updateWishlist = data => ({
    type: WishlistFilters.WISHLIST_UPDATE_SUCCESS,
    payload : data
})

export const addToWishlistAction = (data) => {
    return dispatch => {
        addToCartAPI('user/addToWishlist',data)
        .then(response => {
            dispatch(updateWishlist(response.data))
        })
        .catch(error=>{
            console.log('------------->>')
        })
    }
}
