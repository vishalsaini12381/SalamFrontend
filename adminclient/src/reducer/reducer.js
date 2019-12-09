import {combineReducers} from 'redux';

function inititateState (state = {authenticateState : ''},action) {
    console.log('FFFFFFFFFFFFFFFFFFFF',action);
    if(action.type === 'authenticate') {
        return {
            authenticateState : action.payload,
            email : action.email,
            name  : action.name,
            mobile: action.mobile,
            image : action.image,
            vendorId : action.vendorId,
            adminStatus : action.adminStatus,
            address : action.address,
            accountType : action.accountType,
            city : action.city,
            streetName : action.streetName,
            storeEmail : action.storeEmail,
            storeName  : action.storeName,
            // featured   : action.featured,
        }
    }
    return state;
} 

function productReduce (state = {productState : ''},action) {
    if(action.type === 'product'){
        return{
            // productState : action.payload,
            name : action.name,
            storeName : action.storeName,
            productId : action.productId,
            productName :  action.productName,
            productPrice :  action.productPrice,
            discount : action.discount,
            category : action.category,
            subCategory : action.subCategory,
            brandName : action.brandName,
            quantity : action.quantity,
            aboutProduct : action.aboutProduct,
            file : action.file,
            // userId : action.userId,
        }
    }
    return state;
}

export default combineReducers ({
    inititateState,
    productReduce
})