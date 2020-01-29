import { addToCartAPI, fetchMyCartAPI } from '../api/cart.api'

export const CartFilters = {
    USER_REQUIRED: 'USER_REQUIRED',
    CART_UPDATE_PENDING: 'CART_UPDATE_PENDING',
    CART_UPDATE_SUCCESS: 'CART_UPDATE_SUCCESS',
    CART_UPDATE_FAILED: 'CART_UPDATE_FAILED',
    FETCH_CART_PENDING: 'FETCH_CART_PENDING',
    FETCH_CART_SUCCESS: 'FETCH_CART_SUCCESS',
    FETCH_CART_FAILED: 'FETCH_CART_FAILED',
}

const updateCartCount = data => ({
    type: CartFilters.CART_UPDATE_SUCCESS,
    payload: data
})

const userAuthRequired = () => ({
    type: CartFilters.USER_REQUIRED
})

export const addToCartAction = (data) => {
    return dispatch => {
        if (data.userId === undefined)
            return dispatch(userAuthRequired())

        addToCartAPI('user/addToCart', data)
            .then(response => {
                dispatch(updateCartCount(response.data))  
            })
            .catch(error => {
                console.log('------------->>')
            })
    }
}

const fetchCartPending = () => ({
    type: CartFilters.FETCH_CART_PENDING
})

const fetchCartCompleted = (payload) => ({
    type: CartFilters.FETCH_CART_SUCCESS,
    payload
})

const fetchCartFailed = (error) => ({
    type: CartFilters.FETCH_CART_FAILED,
    error
})

export const fetchMyCartAction = (data) => {
    return dispatch => {
        if (data.userId === undefined)
            return dispatch(userAuthRequired())

        dispatch(fetchCartPending());

        fetchMyCartAPI('user/myCart', data)
            .then(response => {
                let subTotalCartAmount = 0;
                let totalCartItem = 0;
                if (Array.isArray(response.data.product)) {
                    response.data.product.map(item => {
                        subTotalCartAmount += parseFloat(item.total)
                        totalCartItem += parseInt(item.quantity)
                    })
                }
                dispatch(fetchCartCompleted({
                    myCart: response.data.product,
                    subTotalCartAmount,
                    totalCartAmount: subTotalCartAmount + 15,
                    totalCartItem
                }))
            })
            .catch(error => {
                dispatch(fetchCartFailed(error))
            })
    }
}