define([],function(){var e={set:function(e,n){window.sessionStorage.setItem(e,JSON.stringify(n))},get:function(e){try{return JSON.parse(window.sessionStorage.getItem(e))}catch(n){return console.log(n),window.sessionStorage.getItem(e)}},remove:function(e){window.sessionStorage.removeItem(e)},clear:function(){window.sessionStorage.clear()}};return e});