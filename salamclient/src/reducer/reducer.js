import {combineReducers} from 'redux';
import { cartReducer } from '../reducer/cart.reducer'

function inititateState (state = {authenticateState :''} , action) {
    if(action.type === 'authenticate'){
        return{
            // authenticateState : action.payload,
            userId     : action.userId,
            firstName  : action.firstName,
            lastName   : action.lastName,
            email      : action.email,
            Type       : action.Type,
            mobile     : action.mobile,
            gender     : action.gender,
            dob        : action.dob,
            streetAddress : action.streetAddress,
            zipcode  : action.zipcode,
            city : action.city,
            state : action.state,
            country : action.country,
            cartTotal : action.cartTotal
        }
    }
    return state;
}

export default combineReducers ({
    inititateState,
    cart : cartReducer
})