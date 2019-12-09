import {combineReducers} from 'redux';

function inititateState (state = {authenticateState: ''}, action) {
    // console.log('reducer',action);
    if(action.type === 'authenticate'){
        return {
            authenticateState : action.payload,
            name        : action.name,
            email       : action.email,
            image       : action.image,
            type        : action.Type,
            userId      : action.userId,
            mobile      : action.mobile,
            storeName   : action.storeName,
            storeEmail  : action.storeEmail,
            storeMobile : action.storeMobile,
            streetName  : action.streetName,
            address     : action.address,
            lat         : action.lat,
            lng         : action.lng,
            city        : action.city,
            zipCode     : action.zipCode,
            // productId   : action.productId,
        }
    }
    return state;
}

function productReduce(state = {productState:""},action){
    console.log('reducer',action);
    if(action.type === 'product'){
        return {
            // product : action.product,
            name : action.name,
            productId : action.productId,
            file1: action.file1,
            file2: action.file2,
            file3: action.file3,
            file4: action.file4,
            productName: action.productName,
            productPrice : action.productPrice,
            discount :  action.discount,
            businesscategory : action.businesscategory,
            category: action.category,
            subCategory: action.subCategory,
            brandName: action.brandName,
            quantity: action.quantity,
            aboutProduct : action.aboutProduct,
            storeName : action.storeName,
        }
    }
    return state;
}

function editProductReduce(state = {editProductState:""},action){
    // console.log('reducer',action);
    if(action.type === 'editproduct'){
        return {
            product : action.product,
            productId : action.productId,
            file: action.file,
            productName: action.productName,
            productPrice : action.productPrice,
            discount :  action.discount,
            businesscategory : action.businesscategory,
            category: action.category,
            subCategory: action.subCategory,
            brandName: action.brandName,
            quantity: action.quantity,
            aboutProduct : action.aboutProduct,
        }
    }
    return state;
}

export default combineReducers ({
    inititateState,
    productReduce,
    editProductReduce
})