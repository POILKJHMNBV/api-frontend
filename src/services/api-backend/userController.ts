// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 删除用户信息 DELETE /api/user/delete */
export async function deleteUserInfoUsingDELETE(
  body: API.DeleteUserInfoForm,
  options?: { [key: string]: any },
) {
  return request<API.Resultlong>('/api/user/delete', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 禁用用户 PUT /api/user/forbid/${param0} */
export async function forbidUserUsingPUT(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.forbidUserUsingPUTParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Resultlong>(`/api/user/forbid/${param0}`, {
    method: 'PUT',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 获取验证码 GET /api/user/getVerificationCode */
export async function getVerificationCodeUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getVerificationCodeUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.Resultstring>('/api/user/getVerificationCode', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 分页查询用户信息 POST /api/user/list/page */
export async function listUserInfoByPageUsingPOST(
  body: API.QueryUserInfoForm,
  options?: { [key: string]: any },
) {
  return request<API.ResultPageApiUser>('/api/user/list/page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

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

/** 启用用户 PUT /api/user/permit/${param0} */
export async function permitUserUsingPUT(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.permitUserUsingPUTParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Resultlong>(`/api/user/permit/${param0}`, {
    method: 'PUT',
    params: { ...queryParams },
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
