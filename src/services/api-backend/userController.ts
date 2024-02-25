// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 加载登录用户信息 GET /api/user/loadUserInfo */
export async function loadUserInfoUsingGET(options?: { [key: string]: any }) {
  return request<API.ResultLoginUserVO>('/api/user/loadUserInfo', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 用户登录 POST /api/user/login */
export async function userLoginUsingPOST(
  body: API.UserLoginForm,
  options?: { [key: string]: any },
) {
  return request<API.Resultstring>('/api/user/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 退出登录 GET /api/user/logout */
export async function logoutUsingGET(options?: { [key: string]: any }) {
  return request<API.Resultobject>('/api/user/logout', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 用户注册 POST /api/user/register */
export async function userRegisterUsingPOST(
  body: API.UserRegisterForm,
  options?: { [key: string]: any },
) {
  return request<API.Resultlong>('/api/user/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
