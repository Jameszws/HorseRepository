define(["angular"],function(r){var e=r.module("myapp.service",["ngCookies"]);return e.config(["$controllerProvider","$compileProvider","$filterProvider","$provide",function(r,o,i,n){e.register={service:n.service,factory:n.factory,constant:n.constant}}]),e});