function authenticate(resp){
    return dispatch =>{
        console.log('AAAAAAAAAAAAAAAAaa',resp.payload);
        dispatch({
            type : 'authenticate',
            email : resp.payload.email,
            name  : resp.payload.name,
            mobile: resp.payload.mobile,
            image : resp.payload.image, 
            vendorId : resp.payload.vendorId,
            adminStatus : resp.payload.adminStatus,
            address : resp.payload.address,
            accountType : resp.payload.accountType,
            city : resp.payload.city,
            streetName : resp.payload.streetName,
            storeEmail : resp.payload.storeEmail,
            storeName  : resp.payload.storeName,
            // featured   : resp.payload.featured,
        })
    }
}

function product(resp){
    return dispatch =>{
        // console.log('AAAAAAAAAAAAAAAAaa',resp.payload);
        dispatch({
            type : 'product',
            name : resp.payload.name,
            storeName : resp.payload.storeName,
            productId : resp.payload.productId,
            productName :  resp.payload.productName,
            productPrice :  resp.payload.productPrice,
            discount : resp.payload.discount,
            category : resp.payload.category,
            subCategory : resp.payload.subCategory,
            brandName : resp.payload.brandName,
            quantity : resp.payload.quantity,
            aboutProduct : resp.payload.aboutProduct,
            file : resp.payload.file,
            // userId : resp.payload.userId,
        })        
    }
}

export default {
    authenticate,
    product
}