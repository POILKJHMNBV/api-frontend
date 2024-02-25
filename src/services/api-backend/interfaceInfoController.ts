// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 添加接口信息 POST /api/interfaceInfo/add */
export async function addInterfaceInfoUsingPOST(
  body: API.AddInterfaceInfoForm,
  options?: { [key: string]: any },
) {
  return request<API.Resultlong>('/api/interfaceInfo/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除接口信息 DELETE /api/interfaceInfo/delete */
export async function deleteInterfaceInfoUsingDELETE(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteInterfaceInfoUsingDELETEParams,
  options?: { [key: string]: any },
) {
  return request<API.Resultlong>('/api/interfaceInfo/delete', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 查询接口详情信息 GET /api/interfaceInfo/info/${param0} */
export async function queryInterfaceInfoByIdUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.queryInterfaceInfoByIdUsingGETParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.ResultApiInterfaceInfo>(`/api/interfaceInfo/info/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 测试调用接口 POST /api/interfaceInfo/invoke */
export async function invokeInterfaceUsingPOST(
  body: API.InvokeInterfaceForm,
  options?: { [key: string]: any },
) {
  return request<API.Resultobject>('/api/interfaceInfo/invoke', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 分页查询接口信息 POST /api/interfaceInfo/list/page */
export async function listInterfaceInfoByPageUsingPOST(
  body: API.QueryInterfaceInfoForm,
  options?: { [key: string]: any },
) {
  return request<API.ResultPageApiInterfaceInfo>('/api/interfaceInfo/list/page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 接口下线 PUT /api/interfaceInfo/offline/${param0} */
export async function offlineInterfaceInfoUsingPUT(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.offlineInterfaceInfoUsingPUTParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Resultlong>(`/api/interfaceInfo/offline/${param0}`, {
    method: 'PUT',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 接口上线 PUT /api/interfaceInfo/online/${param0} */
export async function onlineInterfaceInfoUsingPUT(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.onlineInterfaceInfoUsingPUTParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Resultlong>(`/api/interfaceInfo/online/${param0}`, {
    method: 'PUT',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 更新接口信息 PUT /api/interfaceInfo/update */
export async function updateInterfaceInfoUsingPUT(
  body: API.UpdateInterfaceInfoForm,
  options?: { [key: string]: any },
) {
  return request<API.Resultlong>('/api/interfaceInfo/update', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
