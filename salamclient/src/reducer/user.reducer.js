import { toast } from "react-toastify";
import { UserFilters } from '../action/user.action';

const initialState = {
    pending: false,
    response: null,
    error: null,
    message: '',
    showMessage: false,
    isLoggedIn: false,
    authenticateState:null
}

export function userReducer(state = initialState, action) {
    switch (action.type) {
        case UserFilters.USER_LOGIN_PENDING:
            return {
                ...state,
                pending: true,
                showMessage: false,
                isLoggedIn: false
            }
        case UserFilters.USER_LOGIN_SUCCESS:
            toast.success(action.payload.message);
            return {
                ...state,
                pending: false,
                authenticateState: action.payload,
                ...action.payload
            }
        case UserFilters.USER_LOGIN_FAILED:
            toast.error(action.error);
            return {
                ...state,
                error:action.error,
                pending: false,
                isLogin: false
            }
        default:
            return state;
    }
}