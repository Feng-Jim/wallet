/*
 * API Url相关
 * */

var APIConfig = {
    /**
     * 征信 ：方式选择
     */
    creditChoose: '/credit/choose',
    /**
     * 征信 ：提交问题
     */
    questionSubmit: '/credit/question',
    /**
     * 征信 ： 银联图片验证码
     */
    creditImageCode: '/credit/union-imagecode',
    /**
     * 征信 ：验证卡号
     */
    creditBankNo: '/credit/union-pay',
    /**
     * 征信 ：银联发送验证码
     */
    creditUnionSms: '/credit/union-sms',
    /**
     * 征信 ：银联问题认证
     */
    creditUnionCheck: '/credit/union-check',
    /*
     征信授权书签名-签新协议
     */
    signContract: "/loan/signContract",
    /*
     划扣协议银行信息获取
     */
    getBankInfo: "/loan/getBankInfo",
    /*
     管理服务协议
     */
    getContractData: "/loan/getContractData",
    /*
     借款协议
     */
    getLoanAgreementData: "/loan/getLoanAgreementData",
    /*
     获取协议状态
     */
    checkContractTime: "/loan/checkContractTime",
    /*
     征信授权书签名-签老协议
     */
    signContractOld: "/loan/signContractOld",
    /**
     * 征信查询授权书
     */
    getUserInfo: '/loan/getUserInfo',
    /*
     *  还款计划书
     * */
    getRepaymentPlan: '/loan/predict-plan',
    /*
     *  获取意见反馈内容
     * */
    getFeedback: '/mine/getFeedback',
    /*
     * 获取 省市区
     * */
    getArea: '/data/area',
    /*
     * 提交 单位信息,适用于 培训贷客户
     * */
    submitCompany: '/auth/company',
    /*
     * 提交 单位信息,适用于 非培训贷客户
     * */
    submitCompanyCommon: '/auth/company-common',
    /*
     * 征信 跳过流程
     * */
    authSkip: '/auth/skip',
    zhimaSign: '/zhima/sign',
    zhimaSignCallback: '/zhima/signCallBack',
    /*
     * 征信 跳转scheme
     * */
    creditScheme: '/auth/credit-scheme',
    /*
     * 状态保护
     * */
    stateScheme: '/personal/state-scheme',
    /*
     * 获取微信分享的config
     * */
    wechatConfig: '/wechat/getconfig',
    /**
     * 获取 授权委托书
     */
    lendSign: '/protocol/getLendContent',
    deducSign: '/protocol/getDeducContent',
    deducSignNew: '/protocol/getDeducContentNew',
    manageSign: '/protocol/getManageContent',
    person_query: '/protocol/getPersonQuery',
    repaymentSign: '/protocol/getRepayment',
    supplementSign: '/protocol/getSupplement',
    riskNotice: '/protocol/getRiskNotice',
    number_cert_sign: '/protocol/getNumberCert',
    ContractTypeOld: 'old',
    ContractTypeNew: 'new'
};
var ErrorMsg = {
    networkError: '呃！服务器出小差了',
    networkNotSteady: '网络不稳定，请重新加载',
    overtimePrompt: '登录已超时，请重新登录征信账号',
    sessionAlreadyLogin: '已在其他设备登录'
};
var PromptMsg = {
    waiting: '请稍候',
    loading: '加载中',
};