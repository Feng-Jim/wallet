;(function (win) {
    var urlInfo = queryStr;
    var pluginName = urlInfo.plugin || '';
    var plugins = {
        'toutiao_zht': {
            init: function () {
                (function (root) {
                    root._tt_config = true;
                    var ta = document.createElement('script');
                    ta.type = 'text/javascript';
                    ta.async = true;
                    ta.src = document.location.protocol + '//' + 's3.pstatp.com/bytecom/resource/track_log/src/toutiao-track-log.js';
                    ta.onerror = function () {
                        var request = new XMLHttpRequest();
                        var web_url = window.encodeURIComponent(window.location.href);
                        var js_url = ta.src;
                        var url = '//ad.toutiao.com/link_monitor/cdn_failed?web_url=' + web_url + '&js_url=' + js_url + '&convert_id=71881528513';
                        request.open('GET', url, true);
                        request.send(null);
                    }
                    var s = document.getElementsByTagName('script')[0];
                    s.parentNode.insertBefore(ta, s);
                })(window);
            },
            callback: function (options) {
                _taq.push({convert_id: "71881528513", event_type: "form"});
            }
        },
        'toutiao_zht2': {
            init: function () {
                (function (root) {
                    root._tt_config = true;
                    var ta = document.createElement('script');
                    ta.type = 'text/javascript';
                    ta.async = true;
                    ta.src = document.location.protocol + '//' + 's1.pstatp.com/bytecom/resource/track_log/src/toutiao-track-log.js';
                    ta.onerror = function () {
                        var request = new XMLHttpRequest();
                        var web_url = window.encodeURIComponent(window.location.href);
                        var js_url = ta.src;
                        var url = '//ad.toutiao.com/link_monitor/cdn_failed?web_url=' + web_url + '&js_url=' + js_url + '&convert_id=75745844702';
                        request.open('GET', url, true);
                        request.send(null);
                    }
                    var s = document.getElementsByTagName('script')[0];
                    s.parentNode.insertBefore(ta, s);
                })(window);
            },
            callback: function (options) {
                _taq.push({convert_id: "75745844702", event_type: "button"});
            }
        },
        'toutiao_pr': {
            init: function () {
                (function (root) {
                    root._tt_config = true;
                    var ta = document.createElement('script');
                    ta.type = 'text/javascript';
                    ta.async = true;
                    ta.src = document.location.protocol + '//' + 's3.pstatp.com/bytecom/resource/track_log/src/toutiao-track-log.js';
                    ta.onerror = function () {
                        var request = new XMLHttpRequest();
                        var web_url = window.encodeURIComponent(window.location.href);
                        var js_url = ta.src;
                        var url = '//ad.toutiao.com/link_monitor/cdn_failed?web_url=' + web_url + '&js_url=' + js_url + '&convert_id=71888732362';
                        request.open('GET', url, true);
                        request.send(null);
                    }
                    var s = document.getElementsByTagName('script')[0];
                    s.parentNode.insertBefore(ta, s);
                })(window);
            },
            callback: function (options) {
                _taq.push({convert_id: "71888732362", event_type: "form"});
            }
        },
        'toutiao_pr2': {
            init: function () {
                (function (root) {
                    root._tt_config = true;
                    var ta = document.createElement('script');
                    ta.type = 'text/javascript';
                    ta.async = true;
                    ta.src = document.location.protocol + '//' + 's1.pstatp.com/bytecom/resource/track_log/src/toutiao-track-log.js';
                    ta.onerror = function () {
                        var request = new XMLHttpRequest();
                        var web_url = window.encodeURIComponent(window.location.href);
                        var js_url = ta.src;
                        var url = '//ad.toutiao.com/link_monitor/cdn_failed?web_url=' + web_url + '&js_url=' + js_url + '&convert_id=76052906628';
                        request.open('GET', url, true);
                        request.send(null);
                    }
                    var s = document.getElementsByTagName('script')[0];
                    s.parentNode.insertBefore(ta, s);
                })(window);
            },
            callback: function (options) {
                _taq.push({convert_id: "76052906628", event_type: "form"});
            }
        },
        'toutiao_pr3': {
            init: function () {
                (function (root) {
                    root._tt_config = true;
                    var ta = document.createElement('script');
                    ta.type = 'text/javascript';
                    ta.async = true;
                    ta.src = document.location.protocol + '//' + 's1.pstatp.com/bytecom/resource/track_log/src/toutiao-track-log.js';
                    ta.onerror = function () {
                        var request = new XMLHttpRequest();
                        var web_url = window.encodeURIComponent(window.location.href);
                        var js_url = ta.src;
                        var url = '//ad.toutiao.com/link_monitor/cdn_failed?web_url=' + web_url + '&js_url=' + js_url + '&convert_id=87904056688';
                        request.open('GET', url, true);
                        request.send(null);
                    }
                    var s = document.getElementsByTagName('script')[0];
                    s.parentNode.insertBefore(ta, s);
                })(window);
            },
            callback: function (options) {
                _taq.push({convert_id: "87904056688", event_type: "form"})
            }
        },
        'toutiao_pr4': {
            init: function () {
                (function (root) {
                    root._tt_config = true;
                    var ta = document.createElement('script');
                    ta.type = 'text/javascript';
                    ta.async = true;
                    ta.src = document.location.protocol + '//' + 's1.pstatp.com/bytecom/resource/track_log/src/toutiao-track-log.js';
                    ta.onerror = function () {
                        var request = new XMLHttpRequest();
                        var web_url = window.encodeURIComponent(window.location.href);
                        var js_url = ta.src;
                        var url = '//ad.toutiao.com/link_monitor/cdn_failed?web_url=' + web_url + '&js_url=' + js_url + '&convert_id=1600511415674883';
                        request.open('GET', url, true);
                        request.send(null);
                    }
                    var s = document.getElementsByTagName('script')[0];
                    s.parentNode.insertBefore(ta, s);
                })(window);
            },
            callback: function (options) {
                _taq.push({convert_id: "1600511415674883", event_type: "form"})
            }
        },
        'toutiao_jx': {
            init: function () {
                (function(root) {
                    root._tt_config = true;
                    var ta = document.createElement('script'); ta.type = 'text/javascript'; ta.async = true;
                    ta.src = document.location.protocol + '//' + 's1.pstatp.com/bytecom/resource/track_log/src/toutiao-track-log.js';
                    ta.onerror = function () {
                        var request = new XMLHttpRequest();
                        var web_url = window.encodeURIComponent(window.location.href);
                        var js_url  = ta.src;
                        var url = '//ad.toutiao.com/link_monitor/cdn_failed?web_url=' + web_url + '&js_url=' + js_url + '&convert_id=1603843909236776';
                        request.open('GET', url, true);
                        request.send(null);
                    }
                    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ta, s);
                })(window);
            },
            callback: function (options) {
                _taq.push({convert_id:"1603843909236776", event_type:"view"});
            }
        },
        'uc_c1': {
            init: function () {
                var jsUrlToMine = document.location.protocol + '//' + 'image.uc.cn/s/uae/g/0s/ad/utracking.js';
                (function (w, d, t, s, q, m, n) {
                    if (w.utq) return;
                    q = w.utq = function () {
                        q.process ? q.process(arguments) : q.queue.push(arguments);
                    };
                    q.queue = [];
                    m = d.getElementsByTagName(t)[0];
                    n = d.createElement(t);
                    n.src = s;
                    n.async = true;
                    m.parentNode.insertBefore(n, m);
                })(window, document, 'script', jsUrlToMine);
                utq('set', 'convertMode', true);
                utq('set', 'trackurl', 'huichuan.sm.cn/lp');
            },
            callback: function (options) {
                utq('track', 'CompleteRegistration', '20622');
            }
        },
        uc_c3: {
            init: function(){
                (function(w,d,t,s,q,m,n){
                    if(w.utq)return;
                    q=w.utq=function(){
                        q.process?q.process(arguments):q.queue.push(arguments);
                    };
                    q.queue=[];
                    m=d.getElementsByTagName(t)[0];
                    n=d.createElement(t);
                    n.src=s;
                    n.async=true;
                    m.parentNode.insertBefore(n,m);
                })(window,document,'script','https://image.uc.cn/s/uae/g/0s/ad/utracking.js');
                utq('set', 'convertMode', true);
                utq('set', 'trackurl', 'huichuan.sm.cn/lp');
            },
            callback: function(){
                utq('track', 'CompleteRegistration', '123995');
            }
        },
        "uc_c4": {
            init: function(){
                (function(w, d, t, s, q, m, n) {
                    if (w.utq)
                        return;
                    q = w.utq = function() {
                        q.process ? q.process(arguments) : q.queue.push(arguments);
                    }
                    ;
                    q.queue = [];
                    m = d.getElementsByTagName(t)[0];
                    n = d.createElement(t);
                    n.src = s;
                    n.async = true;
                    m.parentNode.insertBefore(n, m);
                })(window, document, 'script', 'https://image.uc.cn/s/uae/g/0s/ad/utracking.js');
                utq('set', 'convertMode', true);
                utq('set', 'trackurl', 'huichuan.sm.cn/lp');
            },
            callback: function(){
                utq('track', 'CompleteRegistration', '127572');
            }
        },
        //ocpa
        'tencent_ocpa1': {
            init: function () {

            },
            callback: function () {
                rrdNodeHttp.request({
                    url: ('/auth/ocpa/tencent/track'),
                    data: {
                        click_id: urlInfo['qz_gdt'] || '',
                        // url: 'http://www.loan.renrendai.com/static/public/lp.html'
                        url: [location.protocol, '//', location.host, location.pathname].join('')
                    },
                    success: function (res) {

                    },
                    error: function (error) {

                    }
                });
            }
        },
        //安与吉ocpa
        'tencent_ayj': {
            init: function () {

            },
            callback: function () {
                rrdNodeHttp.request({
                    url: ('/auth/ocpa/tencent/track'),
                    data: {
                        click_id: urlInfo['qz_gdt'] || '',
                        channel: 'ayj',
                        // url: 'http://www.loan.renrendai.com/static/public/lp.html'
                        url: [location.protocol, '//', location.host, location.pathname].join('')
                    },
                    success: function (res) {

                    },
                    error: function (error) {

                    }
                });
            }
        },
        'toutiao_ws1': {
            init: function () {
                (function (root) {
                    root._tt_config = true;
                    var ta = document.createElement('script');
                    ta.type = 'text/javascript';
                    ta.async = true;
                    ta.src = document.location.protocol + '//' + 's1.pstatp.com/bytecom/resource/track_log/src/toutiao-track-log.js';
                    ta.onerror = function () {
                        var request = new XMLHttpRequest();
                        var web_url = window.encodeURIComponent(window.location.href);
                        var js_url = ta.src;
                        var url = '//ad.toutiao.com/link_monitor/cdn_failed?web_url=' + web_url + '&js_url=' + js_url + '&convert_id=92957135520';
                        request.open('GET', url, true);
                        request.send(null);
                    }
                    var s = document.getElementsByTagName('script')[0];
                    s.parentNode.insertBefore(ta, s);
                })(window);
            },
            callback: function (options) {
                _taq.push({convert_id: "92957135520", event_type: "form"})
            }
        },
        'toutiao_ws2': {
            init: function () {
                (function (root) {
                    root._tt_config = true;
                    var ta = document.createElement('script');
                    ta.type = 'text/javascript';
                    ta.async = true;
                    ta.src = document.location.protocol + '//' + 's1.pstatp.com/bytecom/resource/track_log/src/toutiao-track-log.js';
                    ta.onerror = function () {
                        var request = new XMLHttpRequest();
                        var web_url = window.encodeURIComponent(window.location.href);
                        var js_url = ta.src;
                        var url = '//ad.toutiao.com/link_monitor/cdn_failed?web_url=' + web_url + '&js_url=' + js_url + '&convert_id=92957413782';
                        request.open('GET', url, true);
                        request.send(null);
                    }
                    var s = document.getElementsByTagName('script')[0];
                    s.parentNode.insertBefore(ta, s);
                })(window);
            },
            callback: function (options) {
                _taq.push({convert_id: "92957413782", event_type: "form"})
            }
        },
        'UC_yunrui2': {
            init: function () {
                (function (w, d, t, s, q, m, n) {
                    if (w.utq) return;
                    q = w.utq = function () {
                        q.process ? q.process(arguments) : q.queue.push(arguments);
                    };
                    q.queue = [];
                    m = d.getElementsByTagName(t)[0];
                    n = d.createElement(t);
                    n.src = s;
                    n.async = true;
                    m.parentNode.insertBefore(n, m);
                })(window, document, 'script', 'https://image.uc.cn/s/uae/g/0s/ad/utracking.js');
                utq('set', 'convertMode', true);
                utq('set', 'trackurl', 'huichuan.sm.cn/lp');
            },
            callback: function () {
                utq('track', 'CompleteRegistration', '42687');
            }
        },
        'toutiao_xh': {
            init: function () {
                (function (root) {
                    root._tt_config = true;
                    var ta = document.createElement('script');
                    ta.type = 'text/javascript';
                    ta.async = true;
                    ta.src = document.location.protocol + '//' + 's1.pstatp.com/bytecom/resource/track_log/src/toutiao-track-log.js';
                    ta.onerror = function () {
                        var request = new XMLHttpRequest();
                        var web_url = window.encodeURIComponent(window.location.href);
                        var js_url = ta.src;
                        var url = '//ad.toutiao.com/link_monitor/cdn_failed?web_url=' + web_url + '&js_url=' + js_url + '&convert_id=93585982908';
                        request.open('GET', url, true);
                        request.send(null);
                    }
                    var s = document.getElementsByTagName('script')[0];
                    s.parentNode.insertBefore(ta, s);
                })(window);
            },
            callback: function () {
                _taq.push({convert_id: "93585982908", event_type: "form"});
            }
        },
        'toutiao_ws3': {
            init: function () {
                (function (root) {
                    root._tt_config = true;
                    var ta = document.createElement('script');
                    ta.type = 'text/javascript';
                    ta.async = true;
                    ta.src = document.location.protocol + '//' + 's1.pstatp.com/bytecom/resource/track_log/src/toutiao-track-log.js';
                    ta.onerror = function () {
                        var request = new XMLHttpRequest();
                        var web_url = window.encodeURIComponent(window.location.href);
                        var js_url = ta.src;
                        var url = '//ad.toutiao.com/link_monitor/cdn_failed?web_url=' + web_url + '&js_url=' + js_url + '&convert_id=93918562586';
                        request.open('GET', url, true);
                        request.send(null);
                    }
                    var s = document.getElementsByTagName('script')[0];
                    s.parentNode.insertBefore(ta, s);
                })(window);
            },
            callback: function () {
                _taq.push({convert_id: "93918562586", event_type: "form"});
            }
        },
        'toutiao_rd1': { //睿道-1
            init: function () {
                (function(root) {
                    root._tt_config = true;
                    var ta = document.createElement('script'); ta.type = 'text/javascript'; ta.async = true;
                    ta.src = document.location.protocol + '//' + 's1.pstatp.com/bytecom/resource/track_log/src/toutiao-track-log.js';
                    ta.onerror = function () {
                        var request = new XMLHttpRequest();
                        var web_url = window.encodeURIComponent(window.location.href);
                        var js_url  = ta.src;
                        var url = '//ad.toutiao.com/link_monitor/cdn_failed?web_url=' + web_url + '&js_url=' + js_url + '&convert_id=1611384141260855';
                        request.open('GET', url, true);
                        request.send(null);
                    }
                    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ta, s);
                })(window);
            },
            callback: function () {
                _taq.push({convert_id:"1611384141260855", event_type:"form"})
            }
        },
        'sz360': { //睿道-1
            init: function () {
                (function(b,a,e,h,f,c,g,s){
                    b[h]=b[h]||function(){(b[h].c=b[h].c||[]).push(arguments)};
                    b[h].s=!!c;g=a.getElementsByTagName(e)[0];s=a.createElement(e);
                    s.src="//s.union.360.cn/"+f+".js";
                    s.defer=!0;s.async=!0;g.parentNode.insertBefore(s,g)
                })(window,document,"script","_qha",277220,false);
            },
            callback: function () {
                (function(w,n){
                    w[n] = typeof w[n] === 'function' ? w[n]:function(){
                    (w[n].c = w[n].c || []).push(arguments);
                    }
                    var now = new Date();
                    var ram = Math.random() * 1e7;
                    var id = now.getTime() + '' + parseInt(ram);
                    _qha('send', {
                     et: 31,
                     order: [{
                        id: id,/* 注册id, 必填项*/
                        orderType:'1'
                     }]
                    });
                  })(window, '_qha');
            }
        },
        'UC_pz2': {
            init: function () {
                (function (w, d, t, s, q, m, n) {
                    if (w.utq) return;
                    q = w.utq = function () {
                        q.process ? q.process(arguments) : q.queue.push(arguments);
                    };
                    q.queue = [];
                    m = d.getElementsByTagName(t)[0];
                    n = d.createElement(t);
                    n.src = s;
                    n.async = true;
                    m.parentNode.insertBefore(n, m);
                })(window, document, 'script', 'https://image.uc.cn/s/uae/g/0s/ad/utracking.js');
                utq('set', 'convertMode', true);
                utq('set', 'trackurl', 'huichuan.sm.cn/lp');
            },
            callback: function () {
                utq('track', 'CompleteRegistration', '30759');
            }
        },
        'UC_yunrui3': {
            init: function () {
                (function (w, d, t, s, q, m, n) {
                    if (w.utq) return;
                    q = w.utq = function () {
                        q.process ? q.process(arguments) : q.queue.push(arguments);
                    };
                    q.queue = [];
                    m = d.getElementsByTagName(t)[0];
                    n = d.createElement(t);
                    n.src = s;
                    n.async = true;
                    m.parentNode.insertBefore(n, m);
                })(window, document, 'script', 'https://image.uc.cn/s/uae/g/0s/ad/utracking.js');
                utq('set', 'convertMode', true);
                utq('set', 'trackurl', 'huichuan.sm.cn/lp');
            },
            callback: function () {
                utq('track', 'CompleteRegistration', '73272');
            }
        },
        'bd_b18k3_zhy': {
            init: function () {
                window._agl = [];
                (function () {
                    _agl.push(
                        ['production', '_f7L2XwGXjyszb4d1e2oxPybgD']
                    );
                    (function () {
                        var agl = document.createElement('script');
                        agl.type = 'text/javascript';
                        agl.async = true;
                        agl.src = 'https://fxgate.baidu.com/angelia/fcagl.js';
                        var s = document.getElementsByTagName('script')[0];
                        s.parentNode.insertBefore(agl, s);
                    })();
                })();
            },
            callback: function () {
                window._agl && window._agl.push(['track', ['success', {t: 3}]]);
            }
        },
        'bd_a18_zhy':{
            init: function(){
                window._agl = [];
                (function () {
                    _agl.push(
                        ['production', '_f7L2XwGXjyszb4d1e2oxPybgD']
                    );
                    (function () {
                        var agl = document.createElement('script');
                        agl.type='text/javascript';
                        agl.async = true;
                        agl.src = 'https://fxgate.baidu.com/angelia/fcagl.js';
                        var s = document.getElementsByTagName('script')[0];
                        s.parentNode.insertBefore(agl, s);
                    })();
                })();
            },
            callback: function () {
                window._agl && window._agl.push(['track', ['success', {t: 3}]]);
            }
        },
        'bd_b18k2_zhy': {
            init: function () {
                window._agl = [];
                (function () {
                    _agl.push(['production', '_f7L2XwGXjyszb4d1e2oxPybgD']);
                    (function () {
                        var agl = document.createElement('script');
                        agl.type = 'text/javascript';
                        agl.async = true;
                        agl.src = 'https://fxgate.baidu.com/angelia/fcagl.js';
                        var s = document.getElementsByTagName('script')[0];
                        s.parentNode.insertBefore(agl, s);
                    })();
                })();
            },
            callback: function () {
                window._agl && window._agl.push(['track', ['success', {t: 3}]]);
            }
        },
        'bd_b18ka': {
            init: function () {
                window._agl = window._agl || [];
                (function () {
                    _agl.push(
                        ['production', '_f7L2XwGXjyszb4d1e2oxPybgD']
                    );
                    (function () {
                        var agl = document.createElement('script');
                        agl.type ='text/javascript';
                        agl.async = true;
                        agl.src = 'https://fxgate.baidu.com/angelia/fcagl.js?production=_f7L2XwGXjyszb4d1e2oxPybgD';
                        var s = document.getElementsByTagName('script')[0];
                        s.parentNode.insertBefore(agl, s);
                    })();
                })();
            },
            callback: function () {
                window._agl && window._agl.push(['track', ['success', {t: 3}]]);
            }
        },
        'tuia': {
            init: function () {
                (function () {
                    var agl = document.createElement('script');
                    agl.type = 'text/javascript';
                    agl.async = true;
                    agl.src = '//yun.tuisnake.com/h5-mami/log_copy.js';
                    var s = document.getElementsByTagName('script')[0];
                    s.parentNode.insertBefore(agl, s);
                })();
            },
            callback: function () {
                console.log('ok');
            }
        },
        //猎鹰ocpa
        'tencent_lieyin': {
            init: function () {

            },
            callback: function () {
                rrdNodeHttp.request({
                    url: ('/auth/ocpa/tencent/track'),
                    data: {
                        click_id: urlInfo['qz_gdt'] || '',
                        channel: 'lieyin',
                        // url: 'http://www.loan.renrendai.com/static/public/lp.html'
                        url: [location.protocol, '//', location.host, location.pathname].join('')
                    },
                    success: function (res) {

                    },
                    error: function (error) {

                    }
                });
            }
        },
        //点我ocpa
        'tencent_dianwo': {
            init: function () {

            },
            callback: function () {
                rrdNodeHttp.request({
                    url: ('/auth/ocpa/tencent/track'),
                    data: {
                        click_id: urlInfo['qz_gdt'] || '',
                        channel: 'dianwo',
                        // url: 'http://www.loan.renrendai.com/static/public/lp.html'
                        url: [location.protocol, '//', location.host, location.pathname].join('')
                    },
                    success: function (res) {

                    },
                    error: function (error) {

                    }
                });
            }
        },
        'tencent_yima2': {
            init: function () {

            },
            callback: function () {
                rrdNodeHttp.request({
                    url: ('/auth/ocpa/tencent/track'),
                    data: {
                        click_id: urlInfo['qz_gdt'] || '',
                        channel: 'yima2',
                        // url: 'http://www.loan.renrendai.com/static/public/lp.html'
                        url: [location.protocol, '//', location.host, location.pathname].join('')
                    },
                    success: function (res) {

                    },
                    error: function (error) {

                    }
                });
            }
        },
        'tencent_yima3': {
            init: function () {},
            callback: function () {
                rrdNodeHttp.request({
                    url: ('/auth/ocpa/tencent/track'),
                    data: {
                        click_id: urlInfo['qz_gdt'] || '',
                        channel: 'yima3',
                        // url: 'http://www.loan.renrendai.com/static/public/lp.html'
                        url: [location.protocol, '//', location.host, location.pathname].join('')
                    },
                    success: function (res) {},
                    error: function (error) {}
                });
            }
        },       
        'tencent_ang2': {
            init: function () {},
            callback: function () {
                rrdNodeHttp.request({
                    url: ('/auth/ocpa/tencent/track'),
                    data: {
                        click_id: urlInfo['qz_gdt'] || '',
                        channel: 'ang2',
                        url: [location.protocol, '//', location.host, location.pathname].join('')
                    },
                    success: function (res) {},
                    error: function (error) {}
                });
            }
        },
        //微信朋友圈API
        'wechat_one': {
            init: function () {

            },
            callback: function () {
                rrdNodeHttp.request({
                    url: ('/wechat/track'),
                    data: {
                        click_id: urlInfo['gdt_vid'] || '',
                        channel: 'wechat_one',
                        // url: 'http://www.loan.renrendai.com/static/public/lp.html'
                        url: [location.protocol, '//', location.host, location.pathname].join('')
                    },
                    success: function (res) {

                    },
                    error: function (error) {

                    }
                });
            }
        },
        //微信 资金周转助手公众号
        'wechat_helper': {
            init: function () {},
            callback: function () {
                rrdNodeHttp.request({
                    url: ('/wechat/track'),
                    data: {
                        click_id: urlInfo['gdt_vid'] || '',
                        channel: 'wechat_helper',
                        // url: 'http://www.loan.renrendai.com/static/public/lp.html'
                        url: [location.protocol, '//', location.host, location.pathname].join('')
                    },
                    success: function (res) {},
                    error: function (error) {}
                });
            }
        },
        //微信 人人贷借款订阅号
        'wechat_order': {
            init: function () {},
            callback: function () {
                rrdNodeHttp.request({
                    url: ('/wechat/track'),
                    data: {
                        click_id: urlInfo['gdt_vid'] || '',
                        channel: 'wechat_order',
                        // url: 'http://www.loan.renrendai.com/static/public/lp.html'
                        url: [location.protocol, '//', location.host, location.pathname].join('')
                    },
                    success: function (res) {},
                    error: function (error) {}
                });
            }
        },
        mmu1: {
            init: function () {
                (function (root) {
                    window.logsMomoUserId = "180604171117334";
                    var jsonpScript = document.createElement("script");
                    jsonpScript.type = "text/javascript";
                    jsonpScript.src = "https://s.momocdn.com/w/u/others/custom/conver/mycustom/converjsonp.js?r=" + Math.ceil(Math.random() * 10);
                    var heads = document.getElementsByTagName('script')[0];
                    heads.parentNode.insertBefore(jsonpScript, heads);
                })(window);
            },
            callback: function () {
                window.sendLosMeth && window.sendLosMeth("submit");
            }
        },
        mmu2: {
            init: function () {
                (function (root) {
                    window.logsMomoUserId = "180604173617338";
                    var jsonpScript = document.createElement("script");
                    jsonpScript.type = "text/javascript";
                    jsonpScript.src = "https://s.momocdn.com/w/u/others/custom/conver/mycustom/converjsonp.js?r=" + Math.ceil(Math.random() * 10);
                    var heads = document.getElementsByTagName('script')[0];
                    heads.parentNode.insertBefore(jsonpScript, heads);
                })(window);
            },
            callback: function () {
                window.sendLosMeth && window.sendLosMeth("submit");
            }
        },
        mmu3: {
            init: function () {
                (function (root) {
                    window.logsMomoUserId = "180604164517332";
                    var jsonpScript = document.createElement("script");
                    jsonpScript.type = "text/javascript";
                    jsonpScript.src = "https://s.momocdn.com/w/u/others/custom/conver/mycustom/converjsonp.js?r=" + Math.ceil(Math.random() * 10);
                    var heads = document.getElementsByTagName('script')[0];
                    heads.parentNode.insertBefore(jsonpScript, heads);
                })(window);
            },
            callback: function () {
                window.sendLosMeth && window.sendLosMeth("submit");
            }
        },
    };

    win.lpPlugins = plugins;
    if (pluginName != '' && !!plugins[pluginName]) {
        win.lpPlugins[pluginName].init();
    }
    win.lpPlugins.callback = function (options) {
        if (pluginName != '' && !!plugins[pluginName]) {
            win.lpPlugins[pluginName].callback(options);
        }
    }
})(window);