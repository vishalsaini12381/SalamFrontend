import { postRequest } from '../Utility/helper'

export const addToCartAPI = (url,data) => postRequest(url, data)
export const fetchMyCartAPI = (url,data) => postRequest(url, data)