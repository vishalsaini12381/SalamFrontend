import { toast } from "react-toastify";
import { ProductFilters } from '../action/product.action';

const initialState = {
    pending: false,
    response: null,
    error: null,
    message: '',
    showMessage: false,
    productList: [],
    showLoader: false,
    productDetail: {},
    subCategory: '',
    similarProduct: []
}

export function productReducer(state = initialState, action) {
    switch (action.type) {
        case ProductFilters.FETCH_PRODUCT_LIST_PENDING:
            return {
                ...state,
                pending: true,
                showMessage: false,
                productList: [],
                showLoader: true
            }
        case ProductFilters.FETCH_PRODUCT_LIST_SUCCESS:
            return {
                ...state,
                pending: false,
                productList: action.payload.productList,
                showLoader: false
            }
        case ProductFilters.FETCH_PRODUCT_LIST_FAILED:
            toast.error(action.error);
            return {
                ...state,
                pending: false,
                productList: [],
                showLoader: false
            }
        case ProductFilters.FETCH_PRODUCT_DETAIL_PENDING:
            return {
                ...state,
                pending: true,
                showMessage: false,
                productDetail: {},
                subCategory: '',
                similarProduct: [],
                showLoader: true
            }
        case ProductFilters.FETCH_PRODUCT_DETAIL_SUCCESS:
            return {
                ...state,
                pending: false,
                productDetail: action.payload.productData,
                subCategory: action.payload.subCategory,
                similarProduct: action.payload.similarProduct,
                showLoader: false
            }
        case ProductFilters.FETCH_PRODUCT_DETAIL_FAILED:
            toast.error(action.error);
            return {
                ...state,
                pending: false,
                productList: [],
                productDetail: {},
                subCategory: '',
                similarProduct: [],
                showLoader: false,
            }
        default:
            return state;
    }
}