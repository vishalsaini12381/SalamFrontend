import axios from 'axios';
import { retrieveItem } from './Config';
import { SERVER_URL,LOCAL_SERVER_URL } from './Constant';
export const request = async (path, data, method) => {
  let token = localStorage.getItem('token')

  return axios({
    method,
    url: `${LOCAL_SERVER_URL}${path}`,
    headers: {
      'Content-Type': 'application/json',
      authenticate: token
    },
    data
  });
};

export const getRequest = (server_url, path, data) =>
  request(server_url, path, data, 'GET');
export const postRequest = (path, data) =>
  request(path, data, 'POST');
export const patchRequest = (path, data) => request(path, data, 'PATCH');
export const deleteRequest = (path, data) => request(path, data, 'DELETE');
export const putRequest = (path, data) => request(path, data, 'PUT');
