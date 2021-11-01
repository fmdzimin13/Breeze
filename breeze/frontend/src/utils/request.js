import axios from '@/utils/axios.js';
import { setJwtTokens, updateAccessToken, checkAccessToken } from '@/utils/jwt.js'
// import SERVER from '@/api/drf.js';


export const requestLogin = async (url, headers) => {
  try {
    const response = await axios.get(url, { headers });
    console.log(response, '로그인_백에서 받은 응답 확인')
    if (response.status === 201) {
      console.log('응답 성공')
      console.log(response.data['access_token'], '액세스토큰')
      if (response.data.access_token) setJwtTokens(response)
      return response.data;
    }
    throw new Error();
  } catch (e) {

    throw new Error(e);
  }
};

export const requestLogout = async (url, data, headers) => {
  try {
    // const params = {params: {'id': headers}}
    // const response = await axios.post(url, data, params);
    const response = await axios.post(url, data, { headers });
    console.log(response, '로그아웃_백에서 받은 응답 확인')
    if (response.status === 200) {
      //로그아웃 시, 토큰에 관한 조치가 따로 필요하지 않다
      return 'success';
    }
    throw new Error();
  } catch (e) {
    throw new Error(e);
  }
};

export const requestCheck = async (url, headers) => {
  try {
    const response = await axios.get(url, { headers });
    console.log(response, '토큰 체크_백에서 받은 응답 확인')
    if (response.status === 201) {
      const isExpired = checkAccessToken(response)
      //한 페이지에서 오래 머무르는 경우에 로그인을 풀기 위한 중간 과정으로 
      //여기서는 토큰 갱신을 하지 않고, 만료 여부만 넘긴다
      return isExpired;
    }
    throw new Error();
  } catch (e) {

    throw new Error(e);
  }
};

export const requestGet = async (url, headers) => {
  try {
    const response = await axios.get(url, { headers });
    console.log(response, 'get 요청_백에서 받은 응답 확인')
    if (response.status === 201) {
      if (response.data['access_token']) updateAccessToken(response);
      return response.data;
    }
    throw new Error();
  } catch (e) {

    throw new Error(e);
  }
};

export const requestPost = async (url, data, headers) => {
  try {
    const response = await axios.post(url, data, { headers });
    console.log(response, 'post 요청_백에서 받은 응답 확인')
    if (response.status === 201) {
      if (response.data['access_token']) updateAccessToken(response);
      return response.data;
    }
    throw new Error();
  } catch (e) {
    throw new Error(e);
  }
};

export const requestPut = async (url, data, headers) => {
  try {
    const response = await axios.put(url, data, { headers });
    console.log(response, 'put 요청_백에서 받은 응답 확인')
    if (response.status === 201) {
      if (response.data['access_token']) updateAccessToken(response);
      return response.data;
    }
    throw new Error();
  } catch (e) {
    throw new Error(e);
  }
};

export const requestDelete = async (url, headers) => {
  try {
    const response = await axios.delete(url, { headers });
    console.log(response, 'delete 요청_백에서 받은 응답 확인')
    if (response.status === 201) {
      if (response.data['access_token']) updateAccessToken(response);
      return response.data;
    }
    throw new Error();
  } catch (e) {
    throw new Error(e);
  }
};
