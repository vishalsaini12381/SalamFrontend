import { fetchProductListAPI, fetchProductDetailAPI } from '../api/product.api'
import { updateCartCount } from './cart.action';

export const ProductFilters = {
    FETCH_PRODUCT_LIST_PENDING: 'FETCH_PRODUCT_LIST_PENDING',
    FETCH_PRODUCT_LIST_SUCCESS: 'FETCH_PRODUCT_LIST_SUCCESS',
    FETCH_PRODUCT_LIST_FAILED: 'FETCH_PRODUCT_LIST_FAILED',
    FETCH_PRODUCT_DETAIL_PENDING: 'FETCH_PRODUCT_DETAIL_PENDING',
    FETCH_PRODUCT_DETAIL_SUCCESS: 'FETCH_PRODUCT_DETAIL_SUCCESS',
    FETCH_PRODUCT_DETAIL_FAILED: 'FETCH_PRODUCT_DETAIL_FAILED'
}

const fetchProductListPending = () => ({
    type: ProductFilters.FETCH_PRODUCT_LIST_PENDING
})

const fetchProductListCompleted = (payload) => ({
    type: ProductFilters.FETCH_PRODUCT_LIST_SUCCESS,
    payload
})

const fetchProductListFailed = (error) => ({
    type: ProductFilters.FETCH_PRODUCT_LIST_FAILED,
    error
})

export const fetchProductListAction = (userId) => {
    return dispatch => {
        dispatch(fetchProductListPending());
        fetchProductListAPI('user/fetchHomeProduct', { userId })
            .then(response => {
                dispatch(updateCartCount({ cartTotal: response.data.cartTotal }))
                dispatch(fetchProductListCompleted(response.data));
            })
            .catch(error => {
                dispatch(fetchProductListFailed(error))
            })
    }
}

const fetchProductDetailPending = () => ({
    type: ProductFilters.FETCH_PRODUCT_DETAIL_PENDING
})

const fetchProductDetailCompleted = (payload) => ({
    type: ProductFilters.FETCH_PRODUCT_DETAIL_SUCCESS,
    payload
})

const fetchProductDetailFailed = (error) => ({
    type: ProductFilters.FETCH_PRODUCT_DETAIL_FAILED,
    error
})

export const fetchProductDetailAction = (data) => {
    return dispatch => {
        dispatch(fetchProductDetailPending());
        fetchProductDetailAPI('user/productDetail', data)
            .then(response => {
                let subCategory = '';
                if (response.data.productData
                    && response.data.productData
                    && response.data.productData.subCategoryId) {
                    subCategory = response.data.productData.subCategoryId.subcategory
                }
                // console.log({
                //     productData: response.data.productData,
                //     subCategory,
                //     similarProduct: response.data.similarProduct
                // })
                dispatch(fetchProductDetailCompleted({
                    productData: response.data.productData,
                    subCategory,
                    similarProduct: response.data.similarProduct
                }));
            })
            .catch(error => {
                dispatch(fetchProductDetailFailed(error))
            })
    }
}
