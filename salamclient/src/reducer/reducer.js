import {combineReducers} from 'redux';

function inititateState (state = {authenticateState :''} , action) {
        console.log('reducer',action);
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
            country : action.country
        }
    }
    return state;
}

export default combineReducers ({
    inititateState
})