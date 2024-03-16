// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** interfaceAnalysis GET /api/analysis/interface/analysis */
export async function interfaceAnalysisUsingGET(options?: { [key: string]: any }) {
  return request<API.ResultListInterfaceAnalysisVo>('/api/analysis/interface/analysis', {
    method: 'GET',
    ...(options || {}),
  });
}
