var pathname = getPathName();
var queryStr = queryString();
var host = window.location.host;
var rrdorigin = queryStr['rrdorigin'] || 'default';
jQuery.support.cors = true;
$(function(){
    var config = {
        isScrolling: false,
        timeHandler: null,
        isIdentifyingCodeBtnUsable:true,
        isLoading: false,
        isGotVerifyCode: false,
        $advantage: $('.advantage'),
        $layer: $('.layer'),
        $interval: $('.form .code'),
        $submit: $('.form .btn'),
        $gotop: $('.layer .btn'),
        $errorMsg: $('.error-msg'),
        $phone: $('#mobile'),
        $sms: $('#sms'),
        $sTitle: $('#sTitle'),
        $sDesc: $('#sDesc'),
        $form: $('.form'),
        $success: $('.success'),

        urlInfo: queryString(),

        mobile: '',
        sms: '',
        $loading: $('.transparent-mask')
    };
    $.showLoading = function(){
        config.$loading.show();
    }
    $.hideLoading = function(){
        config.$loading.hide();
    }


    config.$interval.click(function(){
        if( config.isLoading || !config.isIdentifyingCodeBtnUsable ){
            return;
        }
        hideErrorMsg();

        if( isMobileUsable() && config.isIdentifyingCodeBtnUsable ){
            startTimer();
            fetchSmscode();
        }
    });

    config.$submit.click(function(){
        hideErrorMsg();
        if( !isMobileUsable() || !isSmsUsable() ){
            return;
        }
        register();
    });

    function fetchSmscode(){
        $.showLoading('');
        config.$sms.val('');
        config.$sms.trigger('input');
        rrdNodeHttp.request({
            url: getWebmainApi('/account/send-verify-code'),
            data: {
                mobile: config.mobile,
                type: 'needCheckRegister'
            },
            success: function (res) {
                $.hideLoading();
                res = res || {};
                if (res.data && res.data.result === 1) {
                    $.toast('验证码已发送','text');
                    config.isGotVerifyCode = true;
                } else if( res.code === 1308 ){
                    goSuccess(2);
                } else {
                    showErrorMsg(res.desc || '未知错误')
                }
                
                if (!res.data || res.data.result !== 1) {
                    statUtil.vdsTrack('page_pc_getcode_fail',{
                        page_pc_getcode_fail_code : res.code || '-1',
                        page_pc_getcode_fail_desc : res.desc || '未知错误'
                    })
                }
            },
            error: function (error) {
                $.hideLoading();
                showErrorMsg('网络异常，请稍后重试')
            }
        });
    }

    function register(){
        var inviterMobile = CryptoJS.AES.decrypt(decodeURIComponent(queryStr.code || ''), 'iadnerner').toString(CryptoJS.enc.Utf8);
        var regData = {
            mobile: config.mobile,
            code: config.sms,
            rrdorigin: config.urlInfo.rrdorigin || 'default'
        };
        if (!!inviterMobile) {
            regData['inviter_mobile'] = inviterMobile;
        }
        $.showLoading('');
        var options = {
            url: getWebmainApi('/account/login-register-by-code'),
            data: regData,
            success: function (res) {
                $.hideLoading();
                var resData = res.data || {};
                if (res.code == 0 && !!resData.mobile && resData.action === 'register') {
                    goSuccess();
                    statUtil.vdsTrack("page_pc_register_success");
                    // todo
                    config.$phone.text('');
                    config.$sms.text('');
                    config.mobile = '';
                    config.sms = '';
                    config.$phone.trigger('input');
                    config.$sms.trigger('input');
                    try {
                        var unikey = res.data['unique_key'] || '';
                        if (unikey !== '') {
                            _vds.push(['setCS1', 'user_id', unikey]);
                        }
                    } catch (e) {}
                    try {
                        lpPlugins.callback();
                    } catch (e) {}
                } else {
                    var vdsFailObj = {};
                    vdsFailObj['page_pc_register_fail_code'] = res.code;
                    vdsFailObj['page_pc_register_fail_desc'] = res.desc;
                    if( resData.action === 'login' ){
                        vdsFailObj['page_pc_register_fail_code'] = -100;
                        vdsFailObj['page_pc_register_fail_desc'] = '已注册';
                    }
                    statUtil.vdsTrack("page_pc_register_fail", vdsFailObj);
                    if (res.code == 1308 || resData.action == 'login') {
                        //如果已注册
                        goSuccess(2);
                    } else {
                        showErrorMsg(res.desc || '未知错误');
                    }
                }
            },
            error: function (error) {
                $.hideLoading();
                showErrorMsg('网络异常，请稍后重试');
            }
        };
        rrdNodeHttp.request(options);
    }
    function goSuccess(flag){
        flag = flag || 1;
        var resultText = {
            def : {
                title : '恭喜您注册成功',
                desc : '扫描二维码, 即刻激活额度'
            },
            registed : {
                title : '您已注册人人贷借款',
                desc : '扫描二维码, 立刻开始借款'
            }
        }
        var finalText = flag === 1 ? resultText.def : resultText.registed;
        config.$sTitle.text(finalText.title);
        config.$sDesc.text(finalText.desc);
        config.$form.hide();
        config.$success.show();
    }

    function isMobileUsable(){
        var mobile = config.$phone.val();
        var isUsable = checkPhone(mobile);
        if( !isUsable ){
            var desc = '手机号格式不正确，请修改后重新提交';
            desc = mobile.length === 0 ? '请输入您的手机号':desc;
            showErrorMsg(desc);
            config.mobile = '';
            statUtil.vdsTrack("page_pc_mobile_error",{page_pc_mobile_error_msg:desc});
        } else {
            config.mobile = mobile;
        }
        return isUsable;
    }

    function isSmsUsable(){
        var sms = config.$sms.val();
        var testSms = /^\d{6}$/.test(sms);
        var isUsable = testSms && config.isGotVerifyCode;
        if (!testSms || !config.isGotVerifyCode) {
            var desc = '验证码不正确，请核实后重新提交';
            desc = sms.length === 0 ? '请输入验证码':desc;
            desc = config.isGotVerifyCode ? desc : '请先获取验证码';
            statUtil.vdsTrack("page_pc_code_error",{ page_pc_code_error_msg:desc });
            showErrorMsg(desc);
            config.sms = '';
        } else {
            config.sms = sms;
        }
        return isUsable;
    }

    function showErrorMsg(msg){
        config.$errorMsg.text(msg).show();
    }

    function hideErrorMsg(){
        config.$errorMsg.hide().text('');
    }

    // 倒计时
    function startTimer(){
        var identifyingCodeTimeRemain = 59;
        config.isIdentifyingCodeBtnUsable = false;
        config.$interval.addClass('code-disable');
        config.$interval.prop('disabled',true);
        config.$interval.text('重发' + identifyingCodeTimeRemain + 's');
        config.timeHandler = setTimeout(function () {
            identifyingCodeTimeRemain--;
            if (identifyingCodeTimeRemain === 0) {
                config.isIdentifyingCodeBtnUsable = true;
                clearTimeout(config.timeHandler);
                config.$interval.text('获取验证码');
                config.$interval.removeClass('code-disable');
                config.$interval.prop('disabled',false);
            } else {
                config.$interval.text('重发' + identifyingCodeTimeRemain + 's');
                config.timeHandler = setTimeout(arguments.callee, 1000);
            }
        }, 1000);
    }

    // 处理浮层
    config.$gotop.click(function(){
        config.isScrolling = true;
        $('html,body').animate({scrollTop: 0}, 300,function(){
            config.isScrolling = false;
        });
    });
    // 处理placeholder
    $('.item label').click(function(){
        $(this).siblings('input').focus();
    });
    $('.item input').on('input propertychange',function(){
        var val = $(this).val();
        if( val.length ){
            $(this).siblings('label').hide();
        } else {
            $(this).siblings('label').show();
        }
        hideErrorMsg();
    });
    config.$phone.on('input',function(){
        var val = $(this).val();
        if( val.length > 11 ){
            $(this).val( val.substr(0,11) );
        }
    });
    $('.transparent-mask').click(function(e){
        e.preventDefault();
        e.stopPropagation();
        return false;
    });
});