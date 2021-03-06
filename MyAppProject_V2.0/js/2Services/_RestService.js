/*
 * TODO rest 基础服务
 */
define(["moudelService"], function(moudelService) {

	moudelService.constant('ENV', {
		'_timeout': 5000,
		'_baseurl': '../jsondata/',
		'_type': "POST",
		'_params': {},
		'_api': {
			studentcourse: "studentcourse.json",
			students: "students.json"
		}
	});

	moudelService.factory("authservice", function($rootScope, $location, $cookieStore) {
			/*
			 *	TODO 基础服务：身份验证服务
			 */
			var authSvc = {
				checkAuth: function(event, callback) {
					var userInfoStr = Horse.util.getCookie("UserInfo");
					var userInfo = JSON.parse(userInfoStr);
					$rootScope.UserInfo = userInfo;
					if (Horse.validate.objIsNull(userInfo) || Horse.validate.isNull(userInfo.token)) {
						if ($location.absUrl().toLowerCase().indexOf("login") >= 0) {
							return;
						}!Horse.validate.objIsNull(event) && event.preventDefault();
						Horse.alert.init({
							title: "登录失败",
							content: "您目前为非登陆状态，请登录~",
							callback: function() {
								Horse.validate.isFunction(callback) && callback(false);
							},
							cancelCallBack: function() {
								Horse.validate.isFunction(callback) && callback(false);
							}
						});
						return;
					}
					Horse.validate.isFunction(callback) && callback(true);
					return;
				},
				checkAuthSync: function() {
					var userInfoStr = Horse.util.getCookie("UserInfo");
					var userInfo = JSON.parse(userInfoStr);
					$rootScope.UserInfo = userInfo;
					if (Horse.validate.objIsNull(userInfo) || Horse.validate.isNull(userInfo.token)) {
						return false;
					}
					return true;
				}
			};
			return authSvc;
		})
		/*
		 *	TODO 基础服务：rest服务
		 */
		.factory("restservice", ['$rootScope', '$location', '$q', '$http', 'ENV', 'authservice', function($rootScope, $location, $q, $http, ENV, authservice) {
			function restservice(ENV, apiName) {
				var current = this;
				authservice.checkAuth(null, function(ret) {
					if (ret) {
						current.url = ENV._baseurl + apiName;
						return;
					}
					window.location.href = "../#/login";
				})
			}
			restservice.prototype = {
				get: function() {
					var deferred = $q.defer(); //声明延后执行
					var promise = deferred.promise;
					if (Horse.validate.isNull(this.url)) {
						return promise;
					}
					$http({
						method: 'GET',
						url: this.url,
						params: ENV._params
					}).success(function(data, header, config, status) {
						deferred.resolve(data); //声明执行成功
					}).error(function(data, header, config, status) {
						deferred.reject(data); //声明执行失败
					});
					return promise; //返回承诺，返回获取数据的API
				},
				post: function() {
					var deferred = $q.defer(); //声明延后执行
					var promise = deferred.promise;
					if (Horse.validate.isNull(this.url)) {
						return promise;
					}
					$http({
						method: 'POST',
						url: this.url,
						params: ENV._params
					}).success(function(data, header, config, status) {
						deferred.resolve(data); //声明执行成功
					}).error(function(data, header, config, status) {
						deferred.reject(data); //声明执行失败
					});
					return promise; //返回承诺，返回获取数据的API
				}
			};
			return restservice;
		}]);
});