define(["moudelService"],function(t){t.register.factory("studentsvc",["$q","$http","$location","authservice","ENV","restservice",function(t,e,n,s,i,r){var u=function(){i._isNeedCheckLoginState=!0,r.call(this,u)};return u.prototype={getstudentbyid:function(){return this.url=i._baseurl+i._api.studentcourse,i._params={id:"1"},this.get()},getstudents:function(){return this.url=i._baseurl+i._api.students,i._params={id:"123"},this.get()},GetQQChannelInfo:function(){return this.url="http://ws.union.open.uat.qa.nt.ctripcorp.com/amservice/api/amcommonsoaservice/json/GetQQChannelInfo",i._params={UID:"shouq_test_idqq1"},this.post()}},function(){return new u}}])});