'use strict'
/**
 * Created by zhouchao on 18/10/2017
 *
 * 请求node端的网路库
 */
var nodeKeyCon = {
    a0: '7BASSFB3500078C381B6F28F27561962',
    a1: '7BASSFB3501178C281B6F28F27561962',
    a2: '7BASSFB3515078C681B6F28F27561962',
    a3: '7BASSFB3503178C181B6F28F27561962',
    a4: '7BA1C8FB3500078C81B6F28F27561962',
    a5: '7BASSFB35022078C81B6F28F27561962',
    a6: '7BADC8FB3500078C81B6F28F27561962',
    a7: '7BA1C1FB3500078C81B6F28F27561962',
    a8: '7BA138FB3500078C81B6F28F27561962',
    a9: '7BA168FB3500078C81B6F28F27561962'
};
window.navigater = nodeKeyCon;
var targetIndex = [[[[]]]][0][0][0].length;
var targetGoalIndex = Math.abs(~targetIndex) << 2;
var targetPrefix = (typeof ![]).toLocaleLowerCase().substr(5, 1);
var temp = nodeKeyCon[targetPrefix + targetIndex];
nodeKeyCon[targetPrefix + targetIndex] = nodeKeyCon[targetPrefix + targetGoalIndex];
nodeKeyCon[targetPrefix + targetGoalIndex] = temp;

var ua = ['23', '72', '72', '64', '6c', '6f', '61', '6e', '77', '65', '62', '61', '70', '70', '23'];
var product = [82, 82, 68, 45, 67, 104, 97, 110, 110, 101, 108];
var webapp = [119, 101, 98, 97, 112, 112];
var productid = [82, 82, 68, 45, 83, 69, 83, 83, 73, 79, 78];
var productidc = [82, 82, 68, 45, 83, 101, 115, 115, 105, 111, 110];
var productSub = [82, 82, 68, 45, 84, 105, 109, 101, 115, 116, 97, 109, 112];
var language = [82, 82, 68, 45, 67, 67];
for (var i = 0; i < ua.length; i++) {
    ua[i] = parseInt('0x' + ua[i]);
}
nodeKeyCon.userAgent = String.fromCharCode.apply('', ua);
nodeKeyCon.product = String.fromCharCode.apply('', product);
nodeKeyCon.webapp = String.fromCharCode.apply('', webapp);
nodeKeyCon.productid = String.fromCharCode.apply('', productid);
nodeKeyCon.productidc = String.fromCharCode.apply('', productidc);
nodeKeyCon.productSub = String.fromCharCode.apply('', productSub);
nodeKeyCon.language = String.fromCharCode.apply('', language);

var rrdNodeHttp = (function (api) {
    /**
     *
     * @param session  客户端传递过来的session
     * @param option   网络请求相关配置
     *
     * change log:
     * 12-11:
     *     支持可配置参数： channel(根据channel，配置相对路径的前缀，分别为webapp及webmain。当channel为非webapp时，请求的body体会加密)
     */
    api.request = function (option, session) {
        if (typeof(option.data) !== 'object') {
            console.log('请输入符合条件的数据');
            return;
        }
        var apiConfig = {
            url: option.url,
            type: option.type || "post",
            traditional: true,
            // data: JSON.stringify(option.data) || '',
            async: option.async || true,
            dataType: 'json',
            processData: (option.processData === undefined ? true : option.processData),
            contentType: (option.contentType === undefined ? 'application/json; charset=utf-8' : option.contentType),
            headers: {
                'RRD-Source': 'web',
                'RRD-Timestamp': +(new Date),
                'RRD-Channel': option.channel || 'web'
            },
            timeout: option.timeout || 30000,
            beforeSend: option.beforeSend,
            complete: option.complete,
            success: function (res) {
                // $.hideLoading();
                option.success && option.success(res);
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                // $.hideLoading();
                if (option.error) {
                    option.error();
                }

                try {
                    var vdsFailObj = {
                        h5_netlib_request_error_msg: ''
                    };
                    var arr = [XMLHttpRequest, textStatus, errorThrown];
                    for (var i = 0; i < arr.length; i++) {
                        if (typeof arr[i] === 'string') {
                            vdsFailObj.h5_netlib_request_error_msg += arr[i] + '_____';
                        } else {
                            vdsFailObj.h5_netlib_request_error_msg += JSON.stringify(arr[i]) + '_____';
                        }
                    }
                    var date = new Date();
                    var current_time = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + '-' + date.getHours();
                    vdsFailObj.h5_netlib_request_error_msg = vdsFailObj.h5_netlib_request_error_msg + ' ,currentTime: ' + current_time;
                    vdsFailObj.h5_netlib_request_userAgent = navigator.userAgent;
                    vdsFailObj.h5_netlib_request_url = option.url;
                    statUtil.vdsTrack('h5_netlib_request_error', vdsFailObj);
                } catch (e) {
                }

                // else {
                //     $.alert(ErrorMsg.networkError, '');
                // }
            }
        };
        // console.log(JSON.stringify(option.data));
        // var encryptedData = CryptoJS.AES.encrypt(JSON.stringify(option.data), CryptoJS.enc.Utf8.parse(navigater.a0), {
        //     mode: CryptoJS.mode.ECB,
        //     padding: CryptoJS.pad.Pkcs7
        // });
        // console.log(encryptedData.toString());
        // var encryptedStr = encryptedData.ciphertext.toString();
        // console.log(encryptedStr);
        // var encryptedHexStr = CryptoJS.enc.Hex.parse(encryptedStr);
        // var encryptedBase64Str = CryptoJS.enc.Base64.stringify(encryptedHexStr);
        // var test1 = CryptoJS.AES.decrypt(encryptedBase64Str, CryptoJS.enc.Utf8.parse(navigater.a0), {
        //     mode: CryptoJS.mode.ECB,
        //     padding: CryptoJS.pad.Pkcs7
        // });
        // console.log(test1.toString(CryptoJS.enc.Utf8));
        if (option.url.indexOf('webmain') != -1 || option.url.indexOf('invite-new') != -1) {
            var encryptedData = CryptoJS.AES.encrypt(JSON.stringify(option.data), CryptoJS.enc.Utf8.parse(navigater.a0), {
                mode: CryptoJS.mode.ECB,
                padding: CryptoJS.pad.Pkcs7
            });
            var encryptedStr = encryptedData.ciphertext.toString();
            apiConfig.data = JSON.stringify({
                data: encryptedStr
            });
        } else {
            apiConfig.data = JSON.stringify(option.data) || '';
        }
        var current = Date.now();
        var cc = current;
        if (session) {
            apiConfig.headers[navigater.productid] = session;
            cc = [current, navigater.userAgent, session].join('');
        }
        cc = encExchange(cc);
        cc = CryptoJS.AES.encrypt(cc, CryptoJS.enc.Utf8.parse(navigater.a0), {
            mode: CryptoJS.mode.ECB,
            padding: CryptoJS.pad.Pkcs7
        }).toString();
        apiConfig.headers[navigater.language] = cc;
        apiConfig.headers[navigater.productSub] = current;
        var webappHost = window.location.host === 'loan.renrendai.com' ? 'loannode.renrendai.com' : '172.16.1.76:90';
        // var transferPath = option.channel === 'webapp' ? '/webapp' : '/webmain';
        apiConfig.url = window.location.protocol + '//' + webappHost + apiConfig.url;

        // header params transfer to query
        var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串  
        var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && userAgent.indexOf("Opera") === -1;
        var lowerIE = false;
        if (isIE) {
            var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
            reIE.test(userAgent);
            var fIEVersion = parseFloat(RegExp["$1"]);
            if (fIEVersion == 8 || fIEVersion == 9) {
                lowerIE = true;
            }
        }

        if (lowerIE) {
            var headerArray = [];
            for (var hd in apiConfig.headers) {
                headerArray.push(hd.toLocaleLowerCase() + '=' + encodeURIComponent(apiConfig.headers[hd]));
            }
            apiConfig.url = apiConfig.url + '?' + headerArray.join('&');
        }
        $.ajax(apiConfig);
    };
    return api;
})(rrdNodeHttp || (rrdNodeHttp = {}));