/** Copyright (c) 2016 WIMI5. All rights reserved. */ (function(){var h=h||{},n=this;function p(a){a=a.split(".");var b=n;!(a[0]in b)&&b.execScript&&b.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)b=b[d]?b[d]:b[d]={}};"undefined"!==typeof h&&p("PENGO.shared.log.logger");
(function(){function a(c){this.f(c);this.g(!1);this.closed=!1}var b,d,k,l;a.prototype={o:{"%l":function(c,m,a){return a.n?(m=a.k[c],a.c[m]?a.c[m][0]+c+a.c[m][1]:c):c},"%d":function(c,a,b){return d(new Date,b.i)},"%c":function(c,a,b){try{var f=arguments.callee.caller.caller.caller.caller}catch(e){return"anonymous"}return!f||!f.name?"anonymous":f.name},"%m":function(c,a){return a}},c:{bold:["\u001b[1m","\u001b[22m"],italic:["\u001b[3m","\u001b[23m"],underline:["\u001b[4m","\u001b[24m"],blink:["\u001b[5m",
"\u001b[25m"],inverse:["\u001b[7m","\u001b[27m"],white:["\u001b[37m","\u001b[39m"],grey:["\u001b[90m","\u001b[39m"],black:["\u001b[30m","\u001b[39m"],blue:["\u001b[34m","\u001b[39m"],cyan:["\u001b[36m","\u001b[39m"],green:["\u001b[32m","\u001b[39m"],magenta:["\u001b[35m","\u001b[39m"],red:["\u001b[31m","\u001b[39m"],yellow:["\u001b[33m","\u001b[39m"]},m:function(c,a){for(var b=this.d,f=this.d.split(" "),e,g=0;g<f.length;g++)e=this.o[f[g]],void 0!==e&&(e=e(c,a,this),b=b.replace(f[g],e));return b},
f:function(a){a=a||{};this.d=a.format||"%l - %d %c : %m";this.e=a.level||1;this.i=a.dateFormat||"dd/mm/yy hh:MM:ss:LL";this.a=a.levels||{debug:1,info:2,warn:3,error:4,sec:5,fatal:6};this.e=this.a[a.level]||1;this.n=a.showColors||!1;this.k=a.levelColors||{debug:"white",info:"green",warn:"yellow",error:"red",sec:"red",fatal:"blink"};this.b=a.transports||{console:new b.console.Console}},log:function(a,b,d){if(this.closed)throw new k("The logger is closed",l.INVALID_STATE);var f=this.a[a];if(void 0===
f)throw new k("Level ' + msgLevel + ' not supported",l.INVALID_CONFIG);if(b&&""!==b&&f>=this.e){var e=b;this.d&&(e=this.m(a,b));if(d&&d instanceof Array)for(b=0;b<d.length;b++)if(a=this.b[d[b]],void 0===a)console.log();else switch(f){case this.a.warn:a.warn(e);break;case this.a.error:case this.a.fatal:a.error(e);break;default:a.log(e)}else for(var g in this.b)switch(f){case this.a.warn:this.b[g].warn(e);break;case this.a.error:case this.a.fatal:this.b[g].error(e);break;default:this.b[g].log(e)}}},
g:function(a){var b;if(a)for(b in this.a)this[b]=function(){};else{var d=this;for(b in this.a)(function(){var a=b;d[b]=function(b,c){d.log(a,b,c)}})()}},close:function(){for(var a in this.b)this.b[a].close();this.closed=!0},h:function(a,b){if("string"===typeof a)this.b.name=b;else throw new k("Transport name invalid",l.INVALID_DATA);},l:function(a){"string"===typeof a&&delete this.b.name}};"undefined"!==typeof exports?(b=require("./transports/console"),d=require("pengo.libutil/dateFormat"),k=require("pengo.liberror/pengoError"),
l=require("pengo.liberror/codes").p,module.j=a):window.PENGO.shared.log.logger.resolve=function(){var c=null;return{dependencies:function(a){b=a.log.transports;d=a.util.dateFormat.dateFormat;k=a.pengoError.pengoError.PengoError;l=a.pengoError.codes.codes},implementation:{getInstance:function(){null===c&&(c=new a);return c}}}};"undefined"!==typeof h&&(a.prototype.setConfig=a.prototype.f,a.prototype.setSilent=a.prototype.g,a.prototype.addTransport=a.prototype.h,a.prototype.removeTransport=a.prototype.l)})();"undefined"!==typeof h&&p("PENGO.shared.log.transports.console");
(function(){function a(){}a.prototype={name:"console",log:function(a){console.log(a)},warn:function(a){console.warn?console.warn(a):console.log(a)},error:function(a){console.error?console.error(a):console.log(a)},close:function(){console.log("closed!")}};"undefined"!==typeof exports?module.j=a:window.PENGO.shared.log.transports.console.resolve=function(){return{dependencies:void 0,implementation:{Console:a}}};"undefined"!==typeof h&&(a.prototype.log=a.prototype.log,a.prototype.warn=a.prototype.warn,
a.prototype.error=a.prototype.error,a.prototype.close=a.prototype.close)})();})();
