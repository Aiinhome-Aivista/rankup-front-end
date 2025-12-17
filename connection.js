import apiService from './src/service/apiService.js';

const BASE_URL = 'http://122.163.121.176:3019/v1/';
/* const BASE_URL = 'http://157.173.221.226:3019/v1/'; */

export const GET_APIS = {
  fetchSubjects: `${BASE_URL}get_subjects/subjects`,
};

export const POST_APIS = {
  initiateLogin: `${BASE_URL}auth/login/initiate`,
  verifyLogin: `${BASE_URL}auth/login/verify`,
  individualRegister: `${BASE_URL}auth/register`,
  instituteRegister: `${BASE_URL}institute/register`,
  addChild: `${BASE_URL}child/add`,
}

export const initiateLoginApi = async (data) => {
  return apiService(POST_APIS.initiateLogin, {
    method: 'POST',
    body: data,
  });
};

export const verifyLoginApi = async (data) => {
  return apiService(POST_APIS.verifyLogin, {
    method: 'POST',
    body: data,
  });
};
