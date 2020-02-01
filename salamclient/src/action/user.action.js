import { userLoginAPI } from '../api/user.api'

export const UserFilters = {
    USER_LOGIN_PENDING: 'USER_LOGIN_PENDING',
    USER_LOGIN_SUCCESS: 'USER_LOGIN_SUCCESS',
    USER_LOGIN_FAILED: 'USER_LOGIN_FAILED'
}

export const userLoginPending = () => ({
    type: UserFilters.USER_LOGIN_PENDING
})

export const userLoginCompleted = data => ({
    type: UserFilters.USER_LOGIN_SUCCESS,
    payload: data
})

export const userLoginFailed = (error) => ({
    type: UserFilters.USER_LOGIN_FAILED,
    error
})


export const userLoginAction = (data) => {
    return dispatch => {
        dispatch(userLoginPending())
        userLoginAPI('user/Login', data)
            .then(response => {
                dispatch(userLoginCompleted(response.data))
            })
            .catch(error => {
                dispatch(userLoginFailed(error))
            })
    }
}
