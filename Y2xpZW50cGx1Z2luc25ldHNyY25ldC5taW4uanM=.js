/** Copyright (c) 2016 WIMI5. All rights reserved. */ (function(){var k=void 0,v=!0;function w(){return function(){}};var y;
y=function(p){function t(){var d=this;p.rpc.endpoint.Endpoint.call(this);this.T=new p.rpc.schema.Schema;this.p={};this.H=function(d){try{JSON.parse(JSON.stringify(d))}catch(a){throw new f("JSON "+d+" format is invalid.",e.INVALID_DATA);}};this.G=function(d,a){function h(q){0===d.localeCompare(q)&&(b.off("MSG_REGISTERED",h),a(b.getRemoteRecipientProtocol(d)))}if(b.isRemoteRecipientAvailable(d))a(b.getRemoteRecipientProtocol(d));else b.on("MSG_REGISTERED",h)};this.I=function(b,a,h){var q;h.s&&d.H(b);
q=b[this.flags.FIELD]&d.flags.CODIFY;delete b[this.flags.FIELD];return d.T.validate(JSON.parse(JSON.stringify(b,u)),{decode:q},a,h)};this.X=function(b,a,h){h.s&&d.H(b);h.u&&(b[this.flags.FIELD]|=d.flags.CODIFY);return d.T.validate(JSON.parse(JSON.stringify(b,u)),{encode:h.u},a,h)};this.Z=function(b,a,h){a[d.message.ID]=m++;l.w(b,a,function(q,g){q?(r.error("[RPC]["+b+"]["+a[d.message.METHOD]+"]["+a[d.message.ID]+"] Error "+JSON.stringify(q)+"."),h&&h.call(this,q)):g&&g[d.message.ERROR]?(r.error("[RPC]["+
b+"]["+a[d.message.METHOD]+"]["+a[d.message.ID]+"] Error in JSON RPC protocol "+JSON.stringify(g[d.message.ERROR])+"."),h&&h.call(this,new f(g[d.message.ERROR][d.error.MESSAGE],g[d.message.ERROR][d.error.CODE]))):h&&h.call(this,k,g&&g[d.message.RESULT])})};this.Y=function(b,a){l.send(b,a,function(h){h&&r.error("[RPC]["+b+"]["+a[d.message.METHOD]+"] Error in notify "+JSON.stringify(h)+".")},d)};this.call=function(b,a,h,q,g,c){function r(a){try{p[d.message.PARAMS]=d.X(a,u,q)}catch(h){g&&g.call(c||this,
h);return}g&&"function"===typeof g?d.Z(b,p,function(h,b){if(h)g&&g.call(c||this,h);else{try{a=d.I(b,F,q)}catch(e){g&&g.call(c||this,e)}g&&g.call(c||this,k,a)}}):d.Y(b,p)}function m(a,h){a?g&&g.call(c||this,a):r(h)}try{n(b,a,h)}catch(s){g&&g.call(c||this,s);return}if(l.P()){q||(q={});q.F=q.F||v;q.u=q.u||v;q.s=q.s||!1;var p={},t,u,F;p[d.message.METHOD]=b+"."+a;p[d.message.JSONRPC]=d.VERSION;d.G(b,function(b){if(t=b.requests[a]||b.notifications[a])if(u=t.request.schema,F=t.response.schema,h&&"function"===
typeof h)try{h&&h.call(c||this,b,m)}catch(d){g&&g.call(c||this,d)}else r(h||{});else g&&g.call(c||this,new f("Method "+a+" not found."))})}else g&&g.call(c||this,new f("We are disconnected from server, try again later",e.NETWORK_ERROR))};this.bind=function(c,a,h,q,g){h||(h={});h.F=h.F||v;h.u=h.u||v;h.s=h.s||!1;d.G(c,function(l){s(l,a)?d.exposeNotifications(c,a)?(d.p[c]||(d.p[c]={}),d.p[c][a]=function(a,b){var g;g=a[d.message.METHOD].split(".").pop();if(a[d.message.ID])r.error("["+b+"][RPC]["+c+"]  ID received "+
a[d.message.ID]+" not expected.");else try{a[d.message.PARAMS]=d.I(a[d.message.PARAMS],l.notifications.server[g].request.schema,h),d.handleNotification(a[d.message.METHOD],a[d.message.PARAMS])}catch(q){q.code===e.NOT_FOUND&&l.notifications.server[g]?r.debug("["+b+"][RPC]["+c+"]  Method "+g+" not binded."):r.error("["+b+"][RPC]["+c+"]  Unexpected error "+q+".")}},b.S(c,d.p[c][a],function(a){a?q&&q.call(g||this,new f("[RPC]["+c+"] Error "+a+" found registering remoteService.",e.INVALID_DATA)):q&&q.call(g||
this,k,{service:c})},d)):q&&q.call(g||this,new f("Exposing notification error "+c+" protocol.",e.INVALID_DATA)):q&&q.call(g||this,new f("Notifications not found in "+c+" protocol.",e.NOT_FOUND))})};this.pa=function(c,a,h,q){d.p[c]&&d.p[c][a]?b.D(c,d.p[c][a],function(b){b?h&&h.call(q||this,b):(d.unExposeNotifications(c,a),h&&h.call(q||this))}):h&&h.call(q||this)};this.t=w()}function u(b,c){return c===k?null:c}function n(b,c,a){if(!b||"string"!==typeof b)throw new f("Remote service "+b+" parameter must be 'string' and is "+
typeof b,e.INVALID_DATA);if(!c||"string"!==typeof c)throw new f("Method "+c+" parameter must be 'string' and is "+typeof c,e.INVALID_DATA);if("function"!==typeof a&&"object"!==typeof a&&"undefined"!==typeof a)throw new f("'datacallback' parameter must be a 'Function' or an 'Object', but it is "+typeof a,e.INVALID_DATA);}function s(b,c){for(var a in c)if(!b.notifications.server[a])return!1;return v}var f=p.pengoError.pengoError.PengoError,e=p.pengoError.codes.codes,r=k,l=k,b=k,c,m=1;t.prototype={start:w(),
stop:w(),f:function(b){r=b},k:function(b){l=b},U:function(c){b=c},j:function(b){c&&c!==b&&c.off("CONNECTION_LOST",this.t);if(c=b)c.on("CONNECTION_LOST",this.t);return c!==k},C:w()};p.inheritance.inheritance.inherits(t,p.rpc.endpoint.Endpoint);return t};var z;
z=function(p){function t(){var a=this;this.a=new p.net.msg.Msg;this.h={};this.A=[];this.c={};this.J=k;Object.defineProperty(this,"_state",{get:function(){return a.J},set:function(b){a.J=b;for(var c;0!=a.A.length;)c=a.A.shift(),b===c.state&&c.N&&c.N.call(c.ba||this,b,a.readyState)},enumerable:v,configurable:v});this.b=a.d.DISCONNECTED;this.onconnect=function(){a.b=a.d.PENDING_VERIFICATION};this.la=function(h){var d=a.a.getData(),g,f,r;try{if(a.b!==a.d.PENDING_VERIFICATION)b.error("["+h+"] Verification control msg received a invalid state, expected state "+a.d.PENDING_VERIFICATION+
" and is "+a.b+", just drop msg."),a.g&&a.g.call(a.o||a,new n("Invalid state, expected state "+a.d.PENDING_VERIFICATION+" and is "+a.b,s.sa)),a.g=k,a.o=k;else if(g=d[e.messageChunks.COMMAND],g!==e.commands.VERIFY)b.warn("["+h+"] Control type msg received with commmand "+g+" not reconogized, just drop msg.");else if(f=d[e.messageChunks.RESULT],f!==e.results.OK)b.error("["+h+"] Verified session msg received with result "+f+" this must be an error, not verified connection must be close."),a.disconnect(f);
else{r=d[e.messageChunks.DATA];var m=r[e.commandDataChunks.verify.sessionID];if(m!==a.c.i)b.warn("["+h+"] Something wrong happen with validation expected session "+a.c.i+" received "+m),a.disconnect(e.error.codes.SESSION_NOT_VALID);else{var p=r[e.commandDataChunks.verify.userID];p?(a.c.v=p,a.c.K=r[e.commandDataChunks.verify.anonymous],a.g?(a.b=a.d.VERIFIED,a.g.call(a.o||a,k,e.results.OK),a.g=k,a.o=k,b.debug("Successful connected using session "+JSON.stringify(a.c)),c.emit("CONNECTION_ESTABLISHED",
{type:a.n||"platform",data:a.m||{}}),a.l&&a.l.setUser({userID:a.c.v,sid:a.c.i},k,k),a.c.K?a.l&&a.l.emit("users","anonymous",l&&l.id):a.l&&a.l.emit("users","login",l&&l.id)):(b.error(" Not verification callback found on validation of session "+m),a.disconnect(e.results.KO))):(b.warn("["+h+"] Something wrong happen with validation expected a valid userID and received "+p),a.disconnect(e.error.codes.SESSION_NOT_VALID))}}}catch(t){b.error("Something wrong "+t+" verificating connection."),a.g.call(a.o||
a,k,e.results.OK)}};this.onmessage=function(c){if(c)if("string"===typeof c)b.error("MSG received "+c+" as string not allowed.",s.INVALID_TYPE);else{a.a.createMsg();a.a.setBuffer(c);a.a.deSerialize();c=a.a.getHeader("GUID");var d=a.a.getHeader("RECIPIENT"),g=a.a.getHeader("TYPE");switch(g){case a.a.types.CONTROL:if(a.b!==a.d.PENDING_VERIFICATION){b.error("Session verification msg received with at invalid states  "+a.b+" , just drop it.");break}a.la(c);break;case a.a.types.REQUEST:if(a.b!==a.d.VERIFIED){b.warn("["+
c+"] Received a request msg with at invalid states "+a.b+" , just drop it.");break}b.error("["+c+"] received a msg type "+g+" not allowed. Only ERROR, RESPONSE and NOTIFY");break;case a.a.types.RESPONSE:case a.a.types.ERROR:if(a.b!==a.d.VERIFIED){b.warn("["+c+"] Received a error msg with at invalid states "+a.b+" , just drop it.");break}d=a.h[c];if(!d){b.error("["+c+"] msg type "+g+" received and not pending request found, problably will be timeouted.");break}delete a.h[c];if(g===a.a.types.ERROR){d[0].call(d[1]||
this,new n(a.a.getData().error,a.a.getData().code));break}d[0].call(d[1]||this,k,a.a.getData());break;case a.a.types.NOTIFY:if(a.b!==a.d.VERIFIED){b.warn("["+c+"] Received a msg with at invalid states "+a.b+" , just drop it.");break}m.dispatch(d,[a.a.getData()])}}else b.error("MSG received "+c+" not valid.",s.INVALID_TYPE)};this.onerror=function(a){b.error("Error received from server "+a)};this.R=function(d,e){b.debug("Disconnected from "+u(a.c.i,a.n,a.m)+" type "+a.n+" with data "+a.m+" with code "+
d+" reason "+e);a.qa();a.g?(a.g.call(a.o||a,k,d,e),a.g=k,a.o=k):(a.n=k,a.m=k,a.c.i=k,a.c.v=k,a.b=a.d.DISCONNECTED,a.oa(),c.emit("CONNECTION_LOST",{type:a.n||"platform",data:a.m||{},code:d,reason:e}))};this.ma=function(){for(var b in a.h)(function(b,c){Date.now()>c[2]+c[3]&&(delete a.h[b],c[0].call(c[1]||this,new n("["+b+"] msg expired ",s.TIMEOUT)))})(b,a.h[b])};this.oa=function(){for(var b in a.h)(function(b,c){delete a.h[b];c[0].call(c[1]||this,new n("["+b+"] msg deleted on disconnection ",s.r))})(b,
a.h[b])};this.w=function(b,c,g,e,l){if("function"!==typeof g)throw new n("Callback type must be a 'function' and is "+typeof g,s.q);if(!b||!c)g&&g.call(e||this,new n("Unable to send msg with an invalid recipient "+b+" or an invalid json "+c,s.q));else if(a.b!==a.d.VERIFIED)g&&g.call(e||this,new n("Unable to send msg with an invalid states "+a.b,s.r));else{try{b=m.getRemoteRecipient(b);if(!b){g&&g.call(e||this,new n("Remote recipient not found "+b,s.q));return}var p=f.generate();a.a.createMsg();a.a.setHeader("GUID",
p);a.a.setHeader("RECIPIENT",b);a.a.setHeader("TYPE",a.a.types.REQUEST);a.a.setData(c);a.a.serialize();d.send(a.e,a.a.getBuffer())}catch(t){g&&g.call(e||this,t);return}a.h[p]=[g,e,Date.now(),l||r.ia]}};this.send=function(b,c,g,e){if(!b||!c)g&&g.call(e||this,new n("Unable to send msg with an invalid recipient "+b+" or an invalid json.",s.q));else if(a.b!==a.d.VERIFIED)g&&g.call(e||this,new n("Unable to send msg with an invalid states "+a.b,s.r));else try{(b=m.getRemoteRecipient(b))?(a.a.createMsg(),
a.a.setHeader("GUID",f.generate()),a.a.setHeader("RECIPIENT",b),a.a.setHeader("TYPE",a.a.types.NOTIFY),a.a.setData(c),a.a.serialize(),d.send(a.e,a.a.getBuffer()),g&&g.call(e||this,k)):g&&g.call(e||this,new n("Remote recipient not found "+b,s.q))}catch(l){g&&g.call(e||this,l)}};this.ha=function(){return d.isConnected(a.e)};this.P=function(){return a.b===a.d.VERIFIED};this.ga=function(){return a.c.K};this.ra=function(){return a.c.v};this.fa=function(){return a.c.va};this.da=function(){return a.b};this.ea=
function(){return a.d};this.ka=function(b,c,d){a.A.push({state:b,N:c,ba:d})};this.aa=function(c,e,g){if(c){a.b=a.d.CONNECTING;a.$();a.n=r.type;a.m=r.data;a.g=e;a.o=g;a.c.i=c;try{var l=d.connect(a.e,u(c,r.type,r.data));b.debug("Trying to connect to "+l+" type "+r.type+" with data "+r.data)}catch(f){e&&e.call(g||this,new n(f,s.ta))}}else e&&e.call(g||this,new n(c+" invalid conecting to server, try to signin again.",s.q))};this.disconnect=function(c,e){try{a.state=a.d.DISCONNECTING,d.disconnect(a.e,
c,e),b.debug("Trying to disconnected from "+u(a.c.i,a.n,a.m)+" type "+a.n+" with data "+a.m)}catch(g){throw new n(g,s.r);}}}function u(a,b,c){var d,e,l;l="https:"===document.location.protocol?"wss":"ws";l=r.protocol||l;b=b||"platform";e=r.host||document.location.host;c?d=l+"://"+e+"/"+b+"?sessionID="+a+"&data="+JSON.stringify(c):d=l+"://"+e+"/"+b+"?sessionID="+a;return d}var n=p.pengoError.pengoError.PengoError,s=p.pengoError.codes.codes,f=p.util.uuid,e=p.net.constants,r,l,b,c,m,d,x;p.storage.local.getInstance();
t.prototype={d:{DISCONNECTED:0,CONNECTED:1,CONNECTING:2,PENDING_VERIFICATION:3,VERIFIED:4,DISCONNECTING:5},M:{CONNECTION_ESTABLISHED:"connection/establish",CONNECTION_LOST:"connection/lost"},start:function(){try{this.e=x.createClient(r.id)}catch(a){throw new n(a,s.r);}this.na=setInterval(this.ma,r.ia)},stop:function(){try{d.disconnect(this.e),b.debug("Trying to disconnected from "+u(that.c.i,r.type,r.data)+" type "+r.type+" with data "+r.data),this.e=x.destroyClient(r.id),clearInterval(this.na)}catch(a){throw new n(a,
s.r);}},$:function(){d.on(this.e,"connect",this.onconnect);d.on(this.e,"disconnect",this.R);d.on(this.e,"error",this.onerror);d.on(this.e,"message",this.onmessage)},qa:function(){d.off(this.e,"connect",this.onconnect);d.off(this.e,"disconnect",this.R);d.off(this.e,"error",this.onerror);d.off(this.e,"message",this.onmessage)},f:function(a){b=a},k:function(a){d=a},W:function(a){x=a},V:function(a){m=a},j:function(a){if(c!==a){if(c)try{c.removeEvents(t.M)}catch(d){b.warn("Error "+d+" while removing events when changing events manager")}(c=
a)&&c.registerEvents(this.M)}return c!==k},z:function(a){(this.l=a)&&this.c.v&&this.l.setUser({userID:this.c.v,sid:this.c.i},k,k)},C:function(a,b){r=a;l=b}};return t};var A;
A=function(p){function t(){var e=this,f=0;t.super_.constructor.call(this);this.S=function(f,b,c,m){try{if(e.getLocalRecipient(f)){e.addLocalRecipient(f,k,b,e.getLocalRecipient(f));c&&c.call(m||e,k,f);return}}catch(d){c&&c.call(m||e,d,k);return}s.w(e.msg.server,{action:e.protocol.addRemoteRecipient,data:f},function(d,a){if(d)c&&c.call(m||e,d);else if(a.error)c&&c.call(m||e,new u(a.error.ua,a.error.code));else{try{e.addLocalRecipient.call(e,a.msgRecipient,k,b,a.id)}catch(f){c&&c.call(m||e,f);return}c&&
c.call(m||e,k,a.msgRecipient)}},e)};this.D=function(f,b,c,m){var d;try{if(d=e.getLocalRecipient(f),!d){n.warn("Recipient "+f+" with id "+d+" not registered, unable to unregister it.");c&&c.call(m||e,k,f);return}}catch(p){c&&c.call(m||e,p,k);return}try{e.removeLocalRecipient.call(e,f,b)?c&&c.call(m||e,k,f):c&&c.call(m||e,"Unable to remove local recipient "+f)}catch(a){c&&c.call(m||e,a)}};this.ca=function(f,b){try{s.w(e.msg.server,{action:e.protocol.getAvailableRemoteRecipient},function(c,d){c?f&&f.call(b||
this,c):d.error?f&&f.call(b||e,new u(d.error.message,d.error.code)):f&&f.call(b||e,k,d)},e)}catch(c){f&&f.call(b||this,c)}};this.B=function(f){f===e.msg.server&&e.O()};this.ja=function(f){f===e.msg.server&&n.info("Server msg box unregistered.")};this.L=function(){var e=this;Object.keys(this.getRemoteRecipientList()).forEach(function(b){e.removeRemoteRecipient(b);n.debug("Remove service "+b+" unregistered.")});Object.keys(this.getLocalRecipientList()).forEach(function(b){"msgClient"!==b&&e.D(b,k,function(c){c?
n.error(c+" unregistering service "+b):n.debug("Local service  "+b+" unregistered.")})})};this.O=function(){e.off("MSG_REGISTERED",e.B);e.ca(function(l,b){if(l)n.error("Unable to get available remote recipient due to "+JSON.stringify(l));else{var c,m;c=b.recipients;m=b.protocols;for(f in c)try{e.addRemoteRecipient(f,m[f],c[f])}catch(d){n.error("Unable to addRemoteRecipient due to : "+d+" in "+f+" id "+c[f])}}},e)};this.t=function(){e.L();e.getRemoteRecipientList()||n.warn("Unable to remove all remote recipient "+
JSON.stringify(e.getRemoteRecipientList()));e.getLocalRecipientList()||n.warn("Unable to remove all local recipient "+JSON.stringify(e.getLocalRecipientList()));e.on("MSG_REGISTERED",e.B);n.info("Server msg box disconnected process completed.")};this.Q=function(l){if(!l||!l.action)n.error("Recieved malformed msg "+JSON.stringify(l));else switch(l.action){case e.protocol.addRemoteRecipient:if("object"!==typeof l.data){n.error("Msg data received malformed "+typeof l.data);break}for(f in l.data)try{e.addRemoteRecipient(f,
l.protocol[f],l.data[f])}catch(b){n.error("Unable to addRemoteRecipient due to : "+b+" recipient "+f+" id "+l.data[f])}break;case e.protocol.removeRemoteRecipient:if("object"!==typeof l.data){n.error("Msg data received malformed "+typeof l.data);break}for(f in l.data)try{e.removeRemoteRecipient(f)}catch(c){n.error("Unable to removeRemoteRecipient due to : "+c+" recipient "+f+" id "+l.data[f])}break;case e.protocol.error:n.error("Server error received: "+l.data.message+" with code: "+l.data.code);
break;default:n.warn(" Msg protocol action not reconogized "+l.action+" it must be "+Object.keys(e.protocol))}}}var u=p.pengoError.pengoError.PengoError,n=k,s=k,f=k;t.prototype={start:function(){this.addLocalRecipient(this.msg.client,k,this.Q,this.msg.id);this.on("MSG_UNREGISTERED",this.ja);if(this.getRemoteRecipient(this.msg.server))this.O();else this.on("MSG_REGISTERED",this.B)},stop:function(){this.L();this.removeLocalRecipient(this.msg.client,this.Q);this.getRemoteRecipientList()||n.warn("Unable to remove all remote recipient "+
JSON.stringify(this.getRemoteRecipientList()));this.getLocalRecipientList()||n.warn("Unable to remove all local recipient "+JSON.stringify(this.getLocalRecipientList()))},j:function(e){f&&f!==e&&f.off("CONNECTION_LOST",this.t);if(f=e)f.on("CONNECTION_LOST",this.t);return f!==k},f:function(e){n=e},k:function(e){s=e},C:w()};p.inheritance.inheritance.inherits(t,p.net.recipient.Recipient);return t};var B="PENGO client plugins net client platform activator".split(" "),C=this;!(B[0]in C)&&C.execScript&&C.execScript("var "+B[0]);for(var D;B.length&&(D=B.shift());){var E;if(E=!B.length)E=!1;E?C[D]=k:C=C[D]?C[D]:C[D]={}}
(function(){function p(){f.off("SERVICE_REGISTERED",p);if(d=f.getService("igloo.logger")[0])if(f.getService("igloo.eventsManager")[0])if(f.getService("wsfactory")[0])if(f.getService("ws")[0])if(f.getService("stats")[0])b||(b=new a),c||(c=new x),m||(m=new h),q={functions:{connect:b.aa,disconnect:b.disconnect,send:b.send,request:b.w,isConnected:b.ha,isVerified:b.P,isAnonymous:b.ga,whoAmI:b.ra,getSessionID:b.fa,getReadyState:b.da,getReadyStates:b.ea,onReadyStateChange:b.ka,registerRecipient:c.S,unRegisterRecipient:c.D,
on:c.on,off:c.off,isRecipientAvailable:c.isRemoteRecipientAvailable,getRecipientProtocol:c.getRemoteRecipientProtocol,getServiceProtocol:c.getRemoteRecipientProtocol,isServiceAvailable:c.isRemoteRecipientAvailable,getServiceProtocolConstants:c.getRemoteRecipientProtocolConstants,call:m.call,bind:m.bind,unbind:m.pa},properties:{}},b.f(d),b.j(f.getService("igloo.eventsManager")[0]),b.k(f.getService("ws")[0]),b.W(f.getService("wsfactory")[0]),b.z(f.getService("stats")[0]),b.V(c),b.C(e.config,l),b.start(r),
c.f(d),c.j(f.getService("igloo.eventsManager")[0]),c.k(b),c.start(),m.f(d),m.k(b),m.U(c),m.j(f.getService("igloo.eventsManager")[0]),m.start(),f.on("SERVICE_UNREGISTERED",u),f.on("SERVICE_UPDATED",n),d.info("Service '"+s+"' registered by "+f.getPluginId()),f.register(s,q);else f.on("SERVICE_REGISTERED",p);else f.on("SERVICE_REGISTERED",p);else f.on("SERVICE_REGISTERED",p);else f.on("SERVICE_REGISTERED",p);else f.on("SERVICE_REGISTERED",p)}function t(a){b&&(b.z(k),b.j(k),b.k(k),b.W(k),b.V(k),b.f(k));
c&&(c.f(k),c.k(k));m&&(m.U(k),m.k(k),m.f(k));q&&(f.unregister(s,q),d.debug("Service '"+s+"' unregistered by "+f["getPluginId()"]));a?(f.on("SERVICE_REGISTERED",p),b&&b.stop(),c&&c.stop(),m&&m.stop()):f.off("SERVICE_REGISTERED",p)}function u(a){switch(a){case "igloo.logger":f.getService("igloo.logger")[0]!==d?(d=f.getService("igloo.logger")[0],b.f(d)):t(v);break;case "igloo.eventsManager":if(b.j(f.getService("igloo.eventsManager")[0]))break;else t(v);break;case "stats":b.z(f.getService(a)[0])||t(v)}}
function n(a){switch(a){case "igloo.logger":f.getService("igloo.logger")[0]!==d&&(d=f.getService("igloo.logger")[0],b.f(d),c.f(d),m.f(d));break;case "igloo.eventsManager":b.j(f.getService("igloo.eventsManager")[0]);break;case "stats":b.z(f.getService("stats")[0])}}var s="net",f,e,r,l,b,c,m,d,x,a,h,q;window.PENGO.client.plugins.net.client.platform.activator.activator=function(b){return{start:function(c,d,m,n){f=c;e=d;r=m;l=n;if(!x){if(!A)throw new b.pengoError.pengoError.PengoError("'PENGO.client.plugins.net.msg.MsgManager' can't be resolved.",
b.pengoError.codes.NOT_FOUND);x=A(b);b.require.remove.deleteByName("PENGO.client.plugins.net.msg.MsgManager")}if(!a){if(!z)throw new b.pengoError.pengoError.PengoError("'PENGO.client.plugins.net.client.platform' can't be resolved.",b.pengoError.codes.NOT_FOUND);a=z(b);b.require.remove.deleteByName("PENGO.client.plugins.net.client.platform")}if(!h){if(!y)throw new b.pengoError.pengoError.PengoError("'PENGO.client.plugins.net.rpc' can't be resolved.",b.pengoError.codes.NOT_FOUND);h=y(b);b.require.remove.deleteByName("PENGO.client.plugins.net.rpc")}p()},
stop:t}}})();})();
