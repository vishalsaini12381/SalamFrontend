import { getRequest, postRequest, putRequest, patchRequest  } from '../Utility/helper'

export const addToCartAPI = (url,data) => postRequest(url, data)