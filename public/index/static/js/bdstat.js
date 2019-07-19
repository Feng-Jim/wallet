/**
 *growingio统计
 */
var _vds = _vds || [];
window._vds = _vds;
(function () {
    _vds.push(['setAccountId', 'bcefa7ae4a57ec9d']);
    (function () {
        var vds = document.createElement('script');
        vds.type = 'text/javascript';
        vds.async = true;
        vds.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'assets.growingio.com/vds.js';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(vds, s);
    })();
})();

(function () {
    var rrdCollect = document.createElement('script');
    rrdCollect.type = 'text/javascript';
    rrdCollect.async = true;
    //todo 记得修改线上地址
    rrdCollect.src = ('https:' == document.location.protocol ? 'https://loan.renrendai.com/static' : 'http://loan.renrendai.com/static') + '/public/asset/js/config/collect.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(rrdCollect, s);
})();

!(function () {
    // 此方法已在commonutil中实现，但此js文件加载位置不固定，
    // 有可能在加载此文件时未加载commonutil.js
    // 故在此新定义
    function queryString() {
        var query_string = {};
        var query = window.location.search.substring(1);
        var vars = query.split("&");
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split(/=(.+)/);
            // If first entry with this name
            if (typeof query_string[pair[0]] === "undefined") {
                query_string[pair[0]] = decodeURIComponent(pair[1]);
                // If second entry with this name
            } else if (typeof query_string[pair[0]] === "string") {
                //如果已有的话，则不加入
                // var arr = [query_string[pair[0]], decodeURIComponent(pair[1])];
                // query_string[pair[0]] = arr;
                // If third or later entry with this name
            } else {
                query_string[pair[0]].push(decodeURIComponent(pair[1]));
            }
        }
        return query_string;
    }

    var unikey = queryString()['RRD-Unikey'] || '';
    if (unikey !== '') {
        _vds.push(['setCS1', 'user_id', unikey]);
    }
})();
/**
 *  百度统计相关
 */
var _hmt = _hmt || [];
(function () {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?58f04f221c267f7c131540ac47cf0718";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
})();
var Stat_Sort = {
    deduction: {
        'new': 'deduction_new',
        old: 'deduction_old'
    },
    lendSign: {
        'new': 'lend_sign_new',
        old: 'lend_sign_old'
    },
    manageAgreement: {
        'new': 'manageAgreement_new',
        old: 'manageAgreement_old'
    }
};
/*
 * Google统计相关
 * */
(function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function () {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date();
    a = s.createElement(o),
        m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-96121189-1', 'auto');
ga('send', 'pageview');
/*
 * 统计相关配置信息
 * */
var Stat_Message = {
    submitButtonMsg: '点击提交按钮',
    timeoutPopUpToLoginButton: '超时弹窗点击登录按钮',
    submittedPopUpConfirmButton: '提交成功弹窗点击确定按钮',
    supportBankListButton: '点击查看支持银行列表按钮',
    pbcAnswerError: '征信错误汇集',
    contract_msg: {
        getData: '获取合同数据',
        submit: '提交'
    }
};
var Stat_ID = {
    questionGetCreditQueryCodePageSubmitButton: 'QuestionGetCreditQueryCodePageSubmitButton',
    questionGetCreditQueryCodePageTimeoutPopUpToLoginButton: 'QuestionGetCreditQueryCodePageTimeoutPopUpToLoginButton',
    questionGetCreditQueryCodePageSubmittedPopUpConfirmButton: 'QuestionGetCreditQueryCodePageSubmittedPopUpConfirmButton',
    bankCardGetCreditQueryCodePageSubmitButton: 'BankCardGetCreditQueryCodePageSubmitButton',
    bankCardGetCreditQueryCodePageSupportBankListButton: 'BankCardGetCreditQueryCodePageSupportBankListButton',
    bankCardGetCreditQueryCodePageTimeoutPopupToLoginButton: 'BankCardGetCreditQueryCodePageTimeoutPopupToLoginButton',
    bankCardGetCreditQueryCodePageSubmittedPopupConfirmButton: 'BankCardGetCreditQueryCodePageSubmittedPopupConfirmButton',
};
/*
 * 统计操作类
 * */
var statUtil = {
    trackEvent: function (eventCategory, eventAction, eventLabel, eventValue) {
        _hmt.push(['_trackEvent', eventCategory, eventAction, eventLabel, eventValue]);
        ga('send', 'event', eventCategory, eventAction, eventLabel, eventValue);
    },
    vdsTrack: function (eventName, options) {
        try {
            window._vds.track(eventName, options);
        } catch (e) {
            console.log(e);
        }
    }

};