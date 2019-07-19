/*
 *
 * 获取queryString字段
 * */
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

/**
 * 校验身份证号
 * @param cardNo 身份证号
 * @returns {身份证对象}
 */
function getIdCardInfo(cardNo) {
    var info = {
        isTrue: false, // 身份证号是否有效。默认为 false
        year: null,// 出生年。默认为null
        month: null,// 出生月。默认为null
        day: null,// 出生日。默认为null
        isMale: false,// 是否为男性。默认false
        isFemale: false // 是否为女性。默认false
    };

    if (!cardNo || (15 != cardNo.length && 18 != cardNo.length)) {
        info.isTrue = false;
        return info;
    }

    if (15 == cardNo.length) {
        var year = cardNo.substring(6, 8);
        var month = cardNo.substring(8, 10);
        var day = cardNo.substring(10, 12);
        var p = cardNo.substring(14, 15); // 性别位
        var birthday = new Date(year, parseFloat(month) - 1, parseFloat(day));
        // 对于老身份证中的年龄则不需考虑千年虫问题而使用getYear()方法
        if (birthday.getYear() != parseFloat(year)
            || birthday.getMonth() != parseFloat(month) - 1
            || birthday.getDate() != parseFloat(day)) {
            info.isTrue = false;
        } else {
            info.isTrue = true;
            info.year = birthday.getFullYear();
            info.month = birthday.getMonth() + 1;
            info.day = birthday.getDate();
            if (p % 2 == 0) {
                info.isFemale = true;
                info.isMale = false;
            } else {
                info.isFemale = false;
                info.isMale = true;
            }
        }
        return info;
    }

    if (18 == cardNo.length) {
        var year = cardNo.substring(6, 10);
        var month = cardNo.substring(10, 12);
        var day = cardNo.substring(12, 14);
        var p = cardNo.substring(14, 17);
        var birthday = new Date(year, parseFloat(month) - 1, parseFloat(day));
        // 这里用getFullYear()获取年份，避免千年虫问题
        if (birthday.getFullYear() != parseFloat(year)
            || birthday.getMonth() != parseFloat(month) - 1
            || birthday.getDate() != parseFloat(day)) {
            info.isTrue = false;
            return info;
        }

        var Wi = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2, 1];// 加权因子
        var Y = [1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2];// 身份证验证位值.10代表X

        // 验证校验位
        var sum = 0; // 声明加权求和变量
        var _cardNo = cardNo.split("");

        if (_cardNo[17].toLowerCase() == 'x') {
            _cardNo[17] = 10;// 将最后位为x的验证码替换为10方便后续操作
        }
        for (var i = 0; i < 17; i++) {
            sum += Wi[i] * _cardNo[i];// 加权求和
        }
        var i = sum % 11;// 得到验证码所位置

        if (_cardNo[17] != Y[i]) {
            return info.isTrue = false;
        }

        info.isTrue = true;
        info.year = birthday.getFullYear();
        info.month = birthday.getMonth() + 1;
        info.day = birthday.getDate();

        if (p % 2 == 0) {
            info.isFemale = true;
            info.isMale = false;
        } else {
            info.isFemale = false;
            info.isMale = true;
        }
        return info;
    }
    return info;
}

/**
 * 校验手机号码
 * @param phoneStr 手机号
 * @returns {boolean}
 */
function checkPhone(phoneStr) {
    var reg = /^1[3|4|5|7|8][0-9]{9}$/;
    return reg.test(phoneStr);
}

/**
 * 检查是否为空
 * @param content 需要检查的字段
 * @returns {boolean}
 */
function checkNull(data) {
    if (typeof(data) == 'number') {
        return false;
    } else if (typeof(data) == 'string') {
        if (data.trim()) {
            return false;
        } else {
            return true;
        }
    }

}

/**
 * 获取倒计时 分 秒
 */
function getExpireTime(expireTime) {
    var minutes = Math.floor(expireTime / 60);
    var seconds = expireTime % 60;
    return {
        minutes: minutes,
        seconds: seconds
    };
}

var SimUtil = {
    /**
     * 判断三星手机机型
     */
    isSM: function () {
        var ua = navigator.userAgent;
        var specialDevices = ['SM-N7508V'];
        var bSM = false;
        for (var i = 0; i < specialDevices.length; i++) {
            if (ua.indexOf(specialDevices[i]) >= 0) {
                bSM = true;
                break;
            }
        }
        return bSM;
    },
};
Object.size = function (obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};

/**
 * 客户端处理公共code
 * @param response 浏览器返回信息
 * @param func 非公共code处理函数
 */
function handleRes(response, func) {
    switch (response.code) {
        case 99:
            $.alert('', response.desc);
            break;
        case 1313:
        case 1312:
            setTimeout(function () {
                $.toast(ErrorMsg.sessionAlreadyLogin, 'text', function () {
                    closeWindowFromNative();
                    if (/iPhone/i.test(navigator.userAgent)) {
                        setTimeout(function () {
                            ssoFromNative();
                        }, 500)
                    } else {
                        ssoFromNative();
                    }
                });
            }, 200);
            break;
        default:
            func && func();
    }
}

/**
 * 针对第三方空间的修改
 * 针对的问题：toast去掉transition之后，不触发transitionEnd事件，以至于callback不回调
 */
+function ($) {
    "use strict";

    var defaults;

    var show = function (html, className) {

        className = className || "";
        var mask = $("<div class='weui_mask_transparent'></div>").appendTo(document.body);

        var tpl = '<div class="weui_toast ' + className + '">' + html + '</div>';
        var dialog = $(tpl).appendTo(document.body);

        dialog.show();
        dialog.addClass("weui_toast_visible");
    };
    var hide = function (callback) {
        $(".weui_mask_transparent").remove();
        $(".weui_toast_visible").removeClass("weui_toast_visible").transitionEnd(function () {
            var $this = $(this);
            $this.remove();
            callback && callback($this);
        });
    };
    var toastHide = function (callback) {
        $(".weui_mask_transparent").remove();
        $(".weui_toast_visible").removeClass("weui_toast_visible");
        callback && callback();
    };

    $.toast = function (text, style, callback) {
        if (typeof style === "function") {
            callback = style;
        }
        var className;
        if (style == "cancel") {
            className = "weui_toast_cancel";
        } else if (style == "forbidden") {
            className = "weui_toast_forbidden";
        } else if (style == "text") {
            className = "weui_toast_text";
        }
        show('<i class="weui_icon_toast"></i><p class="weui_toast_content">' + (text || "已经完成") + '</p>', className);

        setTimeout(function () {
            toastHide(callback);
        }, toastDefaults.duration);
    }

    $.showLoading = function (text) {
        var html = '<div class="weui_loading">';
        for (var i = 0; i < 12; i++) {
            html += '<div class="weui_loading_leaf weui_loading_leaf_' + i + '"></div>';
        }
        html += '</div>';
        html += '<p class="weui_toast_content">' + (text || "") + '</p>';
        show(html, 'weui_loading_toast');
    }

    $.hideLoading = function () {
        hide();
    }

    var toastDefaults = $.toast.prototype.defaults = {
        duration: 1500
    }

}($);

var platform = {
    android: /Android/i.test(navigator.userAgent),
    ios: /iPhone/i.test(navigator.userAgent),
    wechat: /micromessenger/i.test(navigator.userAgent) || /MicroMessenger/i.test(navigator.userAgent),
    qq: /MQQBrowser/i.test(navigator.userAgent) || /QQ/i.test(navigator.userAgent),
    wePlatform: /WEAPP/i.exec(navigator.userAgent) != null ? true : false  //适配we理财app客户端内不识别302跳转的情况
};

/**
 * 获取页面名称
 * @returns 页面名称
 */
function getPathName() {
    var path = window.location.pathname;
    return path.split('/').pop();
}

/**
 * 获取页面html名称
 * @returns 页面html名称
 */
function getHtmlName() {
    return getPathName().replace('.html', '');
}

/**
 * 获取页面html名称
 * @returns 页面html名称
 */
function getHtmlNameForGio() {
    return getHtmlName().replace('-', '_');
}

/**
 * 获取完整路径的相对路径.如：/static/public
 * @returns {*|string}
 */
function getRelativePath() {
    var aElement = document.createElement('a');
    aElement.setAttribute('href', '.');
    return aElement.pathname;
}

function getSchemeUrl(urlName) {
    var apiPrefix = window.location.protocol + '//' + window.location.host;
    var baseUrl = apiPrefix + getRelativePath();
    var schemeBase = 'rrdloan://webview?url=';
    if (platform.android || platform.ios) {
        urlName = schemeBase + baseUrl + urlName;
    }
    return urlName;
}

/**
 * 获取完成URL地址
 * @param urlName
 * @returns {string}
 */
function getWholePath(urlName) {
    var apiPrefix = window.location.protocol + '//' + window.location.host;
    return apiPrefix + getRelativePath() + urlName;
}

/**
 * 客户端通过scheme打开url
 * @param urlName
 */
function openSchemeUrl(urlName) {
    window.location.href = getSchemeUrl(urlName);
}

var queryStr = queryString();
var source = queryStr['source'] || '';
var origin = queryStr['origin'] || '';
var ClientConfig = {
    /*scheme:必须*/
    scheme_IOS: 'rrdloan://',
    scheme_Adr: 'rrdloan://splash',
    android_url: '',
    ios_url: '',
    appLinkForYingyongbao: 'https://a.app.qq.com/o/simple.jsp?pkgname=com.ucredit.financial.android',
    timeout: 600
};
if (!source || source === 'rrd') {
    //自己推广渠道的包
    ClientConfig['android_url'] = 'https://at.umeng.com/mOnuCi';
    ClientConfig['ios_url'] = 'https://at.umeng.com/HDKzui';
} else {
    //非自己推广渠道的包
    ClientConfig['android_url'] = 'https://at.umeng.com/XX9Xfm';
    ClientConfig['ios_url'] = 'https://at.umeng.com/Gb8DCC';
}

function getAppLink() {
    var appLink = ClientConfig.appLinkForYingyongbao;
    if (platform.wechat || platform.qq || platform.wePlatform) {
        appLink = ClientConfig.appLinkForYingyongbao;
    } else if (platform.ios) {
        appLink = ClientConfig['ios_url'];
    } else if (platform.android) {
        appLink = ClientConfig['android_url'];
    }
    return appLink;
}

function isShowPersonalCondition() {
    var rrdOrigin = queryStr['rrdorigin'] || '';
    if (rrdOrigin.indexOf('03010') == 0) {
        return true;
    }
    return false;
}

function isShowFundParty() {
    var rrdOrigin = queryStr['rrdorigin'] || '';
    var fundPrefixArray = ['03008','03013','03018','03012'];
    var rrdOriginPrefix = rrdOrigin.substr(0,5);
    return fundPrefixArray.indexOf(rrdOriginPrefix) !== -1;
}

function isShowUCTip() {
    var rrdOrigin = queryStr['rrdorigin'] || '';
    var fundPrefixArray = ['03021'];
    var rrdOriginPrefix = rrdOrigin.substr(0,5);
    return fundPrefixArray.indexOf(rrdOriginPrefix) !== -1;
}

function isShowZhongrunTip() {
    var rrdOrigin = queryStr['rrdorigin'] || '';
    var fundPrefixArray = ['03030'];
    var rrdOriginPrefix = rrdOrigin.substr(0,5);
    return fundPrefixArray.indexOf(rrdOriginPrefix) !== -1;
}

function isOriginStartWith(firstFive) {
    firstFive = typeof firstFive == 'number' ? firstFive.toString() : firstFive;
    var rrdOrigin = queryStr['rrdorigin'] || '';
    if (rrdOrigin.indexOf(firstFive) == 0) {
        return true;
    }
    return false;
}

/**
 * 迅雷渠道
 * @returns {boolean}
 */
function isShowXunlei() {
    var rrdOrigin = queryStr['rrdorigin'] || '';
    if (rrdOrigin.indexOf('09059') == 0) {
        return true;
    }
    return false;
}

function getRRdVersion() {
    var version = queryStr['RRD-Version'];
    if (!version) {
        version = 0;
    } else {
        version = Number(version);
    }
    return version;
}

/**
 * encrypt string
 * @param str
 */
function encExchange(str) {
    if (/^\d+$/.test(str)) {
        str = str.toString();
    }
    var arr = str.split('');
    arr.reverse();
    for (var i = 1; i < arr.length; i = i + 2) {
        var temp = arr[i - 1];
        arr[i - 1] = arr[i];
        arr[i] = temp;
    }
    return arr.join('');
}

/**
 * 千位计算符
 * @param num
 * @returns {*|string}
 */
function milliFormat(num) {
    var DIGIT_PATTERN = /(^|\s)\d+(?=\.?\d*($|\s))/g;
    var MILLI_PATTERN = /(?=(?!\b)(\d{3})+$)/g;
    return num && num.toString().replace(DIGIT_PATTERN, function (m) {
        return m.replace(MILLI_PATTERN, ',');
    })
}

function isJsonString(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

/**
 * 修改电话号码
 */

!(function () {
    var telP = $('.copyright p:last');
    var text = telP.text() || '';
    var rrdOrigin = queryStr['rrdorigin'] || '';
    var isBaiduOrigin = false;
    if (rrdOrigin.indexOf('02001') == 0 || rrdOrigin.indexOf('03011') == 0) {
        isBaiduOrigin = true;
    }

    if (telP.length && /联系电话/.test(text)) {
        if (isBaiduOrigin) {
            telP.html('联系电话: 010-83421682');
        } else {
            telP.html('联系电话: 400-699-3906');
        }
    }
})();

function getWebmainApi(url) {
    return '/webmain' + url;
}