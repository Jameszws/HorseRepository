define([],function(){var e={setCookie:function(e,t,i){"object"==typeof t&&(t=JSON.stringify(t));var n=this.getsec(i),o=new Date;o.setTime(o.getTime()+1*n),document.cookie=e+"="+escape(t)+";expires="+o.toGMTString()},getCookie:function(e){var t,i=new RegExp("(^| )"+e+"=([^;]*)(;|$)"),n=!1;if(document.cookie.match(i)&&(t=document.cookie.match(i),n=!0),!n)return null;try{return JSON.parse(unescape(t[2]))}catch(e){return unescape(t[2])}return null},delCookie:function(e,t,i){var n=new Date;n.setTime(n.getTime()-31536e6);var o=this.getCookie(e);if(null!=o){if(Horse.validate.isNull(i)&&(i="/"),Horse.validate.isNull(t))return void(document.cookie=e+"="+o+";expires="+n.toGMTString());document.cookie=e+"="+o+";expires="+n.toGMTString()+";domain="+t+";path="+i}},getsec:function(e){var t=1*e.substring(1,e.length),i=e.substring(0,1);return"s"==i?1e3*t:"h"==i?60*t*60*1e3:"d"==i?24*t*60*60*1e3:void 0}};return e});