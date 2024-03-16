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
    interfaceRequestMethod?: number;
    /** 接口请求参数 */
    interfaceRequestParams?: string;
    /** 接口请求参数编码格式 */
    interfaceRequestParamsCharset?: number;
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
    interfaceRequestMethod?: number;
    interfaceRequestParams?: string;
    interfaceRequestParamsCharset?: number;
    interfaceRequestParamsMime?: string;
    interfaceResponseHeader?: string;
    interfaceStatus?: number;
    interfaceToken?: string;
    interfaceVendor?: string;
    interfaceVendorName?: string;
    updateTime?: string;
  };

  type ApiUser = {
    createTime?: string;
    id?: number;
    updateTime?: string;
    userAccesskey?: string;
    userAccount?: string;
    userAvatar?: string;
    userEmail?: string;
    userLoginIp?: string;
    userLoginTime?: string;
    userName?: string;
    userPassword?: string;
    userPhone?: string;
    userPrivatekey?: string;
    userProfile?: string;
    userPublickey?: string;
    userRole?: number;
    userSecretkey?: string;
    userStatus?: number;
  };

  type DeleteInterfaceInfoForm = {
    /** 接口id数组 */
    ids?: (number | undefined)[];
  };

  type DeleteUserInfoForm = {
    /** 用户id数组 */
    ids?: number[];
  };

  type forbidUserUsingPUTParams = {
    /** id */
    id: number;
  };

  type getVerificationCodeUsingGETParams = {
    /** userAccount */
    userAccount: string;
    /** operate */
    operate: number;
  };

  type InterfaceAnalysisVo = {
    interfaceName?: string;
    invokeNum?: number;
  };

  type InvokeInterfaceForm = {
    /** 接口id */
    id?: number;
    /** 用户上送的参数 */
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
    userStatus?: number;
  };

  type offlineInterfaceInfoUsingPUTParams = {
    /** id */
    id?: number;
  };

  type onlineInterfaceInfoUsingPUTParams = {
    /** id */
    id?: number;
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

  type PageApiUser = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: ApiUser[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type permitUserUsingPUTParams = {
    /** id */
    id: number;
  };

  type queryInterfaceInfoByIdUsingGETParams = {
    /** id */
    id: number;
  };

  type QueryInterfaceInfoForm = {
    /** 创建时间 */
    createTime?: string;
    current?: number;
    /** 接口描述 */
    interfaceDescription?: string;
    /** 访问主机 */
    interfaceHost?: string;
    /** 接口名称 */
    interfaceName?: string;
    /** 访问路径 */
    interfacePath?: string;
    /** 接口请求方法类型 */
    interfaceRequestMethod?: number;
    /** 接口请求参数编码格式 */
    interfaceRequestParamsCharset?: number;
    /** 接口请求参数MIME类型 */
    interfaceRequestParamsMime?: string;
    /** 接口状态 */
    interfaceStatus?: number;
    /** 接口提供系统 */
    interfaceVendor?: string;
    /** 接口提供系统名 */
    interfaceVendorName?: string;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
    start?: number;
    /** 更新时间 */
    updateTime?: string;
  };

  type QueryUserInfoForm = {
    /** 创建时间 */
    createTime?: string;
    current?: number;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
    start?: number;
    /** 更新时间 */
    updateTime?: string;
    /** 用户账号 */
    userAccount?: string;
    /** 用户邮箱 */
    userEmail?: string;
    /** 用户登录ip */
    userLoginIp?: string;
    /** 用户登录时间 */
    userLoginTime?: string;
    /** 用户昵称 */
    userName?: string;
    /** 用户电话 */
    userPhone?: string;
    /** 用户状态 */
    userStatus?: number;
  };

  type ResultApiInterfaceInfo = {
    code?: number;
    data?: ApiInterfaceInfo;
    message?: string;
  };

  type ResultListInterfaceAnalysisVo = {
    code?: number;
    data?: InterfaceAnalysisVo[];
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

  type ResultPageApiUser = {
    code?: number;
    data?: PageApiUser;
    message?: string;
  };

  type Resultstring = {
    code?: number;
    data: string;
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
    interfaceRequestMethod?: number;
    /** 接口请求参数 */
    interfaceRequestParams?: string;
    /** 接口请求参数编码格式 */
    interfaceRequestParamsCharset?: number;
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
    /** 验证码 */
    verificationCode?: string;
  };

  type UserRegisterForm = {
    /** 确认密码 */
    checkPassword?: string;
    /** 用户名 */
    userAccount?: string;
    /** 密码 */
    userPassword?: string;
    /** 验证码 */
    verificationCode?: string;
  };
}
