define(["moudelService"],function(e){e.constant("ENV",{_timeout:5e3,_baseurl:"../jsondata/",_type:"POST",_params:{},_api:{studentcourse:"studentcourse.json",students:"students.json"},_isNeedCheckLoginState:!0}),e.factory("authservice",["$rootScope","$location","$cookieStore",function(e,t,o){var n={checkAuth:function(o,n){var i=Horse.zCookieStorage.getCookie("UserInfo");if(e.UserInfo=i,Horse.validate.objIsNull(i)||Horse.validate.isNull(i.token)){if(t.absUrl().toLowerCase().indexOf("login")>=0)return;return!Horse.validate.objIsNull(o)&&o.preventDefault(),void Horse.alert.init({title:"登录失败",content:"您目前为非登陆状态，请登录~",callback:function(){Horse.validate.isFunction(n)&&n(!1)},cancelCallBack:function(){Horse.validate.isFunction(n)&&n(!1)}})}Horse.validate.isFunction(n)&&n(!0)},checkAuthSync:function(){var t=Horse.zCookieStorage.getCookie("UserInfo");return e.UserInfo=t,!Horse.validate.objIsNull(t)&&!Horse.validate.isNull(t.token)}};return n}]).factory("restservice",["$rootScope","$location","$q","$http","ENV","authservice",function(e,t,o,n,i,r){function c(e,t){Horse.validate.isFunction(e)&&Horse.util.extend(e.prototype,c.prototype);i._isNeedCheckLoginState&&r.checkAuth(null,function(e){e||(window.location.href="../#/login")})}return c.prototype={get:function(){var e=o.defer(),t=e.promise;return i._isNeedCheckLoginState&&!r.checkAuthSync()?(Horse.alert.init({title:"登录失败",content:"您目前为非登陆状态，请登录~",callback:function(){window.location.href="../#/login"},cancelCallBack:function(){window.location.href="../#/login"}}),t):Horse.validate.isNull(this.url)?t:(n({method:"GET",url:this.url,params:i._params,timeout:i._timeout}).success(function(t,o,n,i){e.resolve(t)}).error(function(t,o,n,i){e.reject(t)}),t)},post:function(){var e=o.defer(),t=e.promise;return i._isNeedCheckLoginState&&!r.checkAuthSync()?(Horse.alert.init({title:"登录失败",content:"您目前为非登陆状态，请登录~",callback:function(){window.location.href="../#/login"},cancelCallBack:function(){window.location.href="../#/login"}}),t):Horse.validate.isNull(this.url)?t:(n({method:"POST",url:this.url,params:i._params,timeout:i._timeout}).success(function(t,o,n,i){e.resolve(t)}).error(function(t,o,n,i){e.reject(t)}),t)}},c}])});