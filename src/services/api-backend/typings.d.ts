declare namespace API {
  type AddInterfaceInfoForm = {
    /** 接口描述 */
    interfaceDescription?: string;
    /** 访问主机 */
    interfaceHost?: string;
    /** 接口名称 */
    interfaceName?: string;
    /** 访问路径 */
    interfacePath?: string;
    /** 接口请求头 */
    interfaceRequestHeader?: string;
    /** 接口请求方法类型 */
    interfaceRequestMethod?: string;
    /** 接口请求参数 */
    interfaceRequestParams?: string;
    /** 接口请求参数编码格式 */
    interfaceRequestParamsCharset?: string;
    /** 接口请求参数MIME类型 */
    interfaceRequestParamsMime?: string;
    /** 接口响应头 */
    interfaceResponseHeader?: string;
    /** 接口提供系统 */
    interfaceVendor?: string;
    /** 接口提供系统名 */
    interfaceVendorName?: string;
  };

  type ApiInterfaceInfo = {
    createTime?: string;
    id?: number;
    interfaceDelete?: number;
    interfaceDescription?: string;
    interfaceHost?: string;
    interfaceName?: string;
    interfacePath?: string;
    interfacePublishUserid?: number;
    interfaceRequestHeader?: string;
    interfaceRequestMethod?: string;
    interfaceRequestParams?: string;
    interfaceRequestParamsCharset?: string;
    interfaceRequestParamsMime?: string;
    interfaceResponseHeader?: string;
    interfaceStatus?: number;
    interfaceToken?: string;
    interfaceVendor?: string;
    interfaceVendorName?: string;
    updateTime?: string;
  };

  type deleteInterfaceInfoUsingDELETEParams = {
    /** ids */
    ids: number;
  };

  type InvokeInterfaceForm = {
    id?: number;
    userRequestParam?: string;
  };

  type LoginUserVO = {
    id?: number;
    userAccesskey?: string;
    userAccount?: string;
    userAvatar?: string;
    userEmail?: string;
    userName?: string;
    userPhone?: string;
    userProfile?: string;
    userPublickey?: string;
    userRole?: string;
    userSecretkey?: string;
  };

  type offlineInterfaceInfoUsingPUTParams = {
    /** id */
    id: number;
  };

  type onlineInterfaceInfoUsingPUTParams = {
    /** id */
    id: number;
  };

  type OrderItem = {
    asc?: boolean;
    column?: string;
  };

  type PageApiInterfaceInfo = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: ApiInterfaceInfo[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type queryInterfaceInfoByIdUsingGETParams = {
    /** id */
    id: number;
  };

  type QueryInterfaceInfoForm = {
    current?: number;
    /** 接口id */
    id?: number;
    /** 接口是否删除 */
    interfaceDelete?: number;
    /** 接口描述 */
    interfaceDescription?: string;
    /** 访问主机 */
    interfaceHost?: string;
    /** 接口名称 */
    interfaceName?: string;
    /** 访问路径 */
    interfacePath?: string;
    /** 接口发布人 */
    interfacePublishUserid?: number;
    /** 接口响应头 */
    interfaceRequestHeader?: string;
    /** 接口请求方法类型 */
    interfaceRequestMethod?: string;
    /** 接口请求参数 */
    interfaceRequestParams?: string;
    /** 接口请求参数编码格式 */
    interfaceRequestParamsCharset?: string;
    /** 接口请求参数MIME类型 */
    interfaceRequestParamsMime?: string;
    /** 接口响应头 */
    interfaceResponseHeader?: string;
    /** 接口状态 */
    interfaceStatus?: number;
    /** 接口token */
    interfaceToken?: string;
    /** 接口提供系统 */
    interfaceVendor?: string;
    /** 接口提供系统名 */
    interfaceVendorName?: string;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
  };

  type ResultApiInterfaceInfo = {
    code?: number;
    data?: ApiInterfaceInfo;
    message?: string;
  };

  type ResultLoginUserVO = {
    code?: number;
    data?: LoginUserVO;
    message?: string;
  };

  type Resultlong = {
    code?: number;
    data?: number;
    message?: string;
  };

  type Resultobject = {
    code?: number;
    data?: Record<string, any>;
    message?: string;
  };

  type ResultPageApiInterfaceInfo = {
    code?: number;
    data?: PageApiInterfaceInfo;
    message?: string;
  };

  type Resultstring = {
    code?: number;
    data?: string;
    message?: string;
  };

  type UpdateInterfaceInfoForm = {
    /** 接口id */
    id?: number;
    /** 接口描述 */
    interfaceDescription?: string;
    /** 访问主机 */
    interfaceHost?: string;
    /** 接口名称 */
    interfaceName?: string;
    /** 访问路径 */
    interfacePath?: string;
    /** 接口响应头 */
    interfaceRequestHeader?: string;
    /** 接口请求方法类型 */
    interfaceRequestMethod?: string;
    /** 接口请求参数 */
    interfaceRequestParams?: string;
    /** 接口请求参数编码格式 */
    interfaceRequestParamsCharset?: string;
    /** 接口请求参数MIME类型 */
    interfaceRequestParamsMime?: string;
    /** 接口响应头 */
    interfaceResponseHeader?: string;
    /** 接口提供系统 */
    interfaceVendor?: string;
    /** 接口提供系统名 */
    interfaceVendorName?: string;
  };

  type UserLoginForm = {
    /** 用户名 */
    userAccount?: string;
    /** 密码 */
    userPassword?: string;
  };

  type UserRegisterForm = {
    /** 确认密码 */
    checkPassword?: string;
    /** 用户名 */
    userAccount?: string;
    /** 密码 */
    userPassword?: string;
  };
}
