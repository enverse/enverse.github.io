function Ze(e,t,n,r,i){for(t=t.split?t.split("."):t,r=0;r<t.length;r++)e=e?e[t[r]]:i;return e===i?n:e}var Oe="undefined",et="object",St="any",Et="*",re="__",Te=typeof process<"u"?process:{};Te.env&&Te.env.NODE_ENV;var X=typeof window<"u";function Pt(e,t){return t.charAt(0)[e]()+t.slice(1)}null!=Te.versions&&Te.versions.node,typeof Deno<"u"&&Deno.core,X&&"nodejs"===window.name||typeof navigator<"u"&&(navigator.userAgent.includes("Node.js")||navigator.userAgent.includes("jsdom"));var Jt=Pt.bind(null,"toUpperCase"),Bt=Pt.bind(null,"toLowerCase");function Ft(e){return Ot(e)?Jt("null"):"object"==typeof e?Kt(e):Object.prototype.toString.call(e).slice(8,-1)}function $e(e,t){void 0===t&&(t=!0);var n=Ft(e);return t?Bt(n):n}function Pe(e,t){return typeof t===e}var G=Pe.bind(null,"function"),le=Pe.bind(null,"string"),ce=Pe.bind(null,"undefined"),Wt=Pe.bind(null,"boolean");function Ot(e){return null===e}function Xt(e){return"number"===$e(e)&&!isNaN(e)}function Ht(e){return"array"===$e(e)}function F(e){if(!Gt(e))return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function Gt(e){return e&&("object"==typeof e||null!==e)}function Kt(e){return G(e.constructor)?e.constructor.name:null}function Qt(e){return e instanceof Error||le(e.message)&&e.constructor&&Xt(e.constructor.stackTraceLimit)}function xt(e,t){if("object"!=typeof t||Ot(t))return!1;if(t instanceof e)return!0;var n=$e(new e(""));if(Qt(t))for(;t;){if($e(t)===n)return!0;t=Object.getPrototypeOf(t)}return!1}function Me(e,t){var n=e instanceof Element||e instanceof HTMLDocument;return n&&t?Yt(e,t):n}function Yt(e,t){return void 0===t&&(t=""),e&&e.nodeName===t.toUpperCase()}function ze(e){var t=[].slice.call(arguments,1);return function(){return e.apply(void 0,[].slice.call(arguments).concat(t))}}function tt(e){try{return decodeURIComponent(e.replace(/\+/g," "))}catch{return null}}function Zt(){if(X){var e=navigator,t=e.languages;return e.userLanguage||(t&&t.length?t[0]:e.language)}}function en(){try{return Intl.DateTimeFormat().resolvedOptions().timeZone}catch{}}function tn(e){return function(e){for(var t,n=Object.create(null),r=/([^&=]+)=?([^&]*)/g;t=r.exec(e);){var i=tt(t[1]),o=tt(t[2]);"[]"===i.substring(i.length-2)?(n[i=i.substring(0,i.length-2)]||(n[i]=[])).push(o):n[i]=""===o||o}for(var a in n){var u=a.split("[");u.length>1&&(nn(n,u.map((function(e){return e.replace(/[?[\]\\ ]/g,"")})),n[a]),delete n[a])}return n}(function(e){if(e){var t=e.match(/\?(.*)/);return t&&t[1]?t[1].split("#")[0]:""}return X&&window.location.search.substring(1)}(e))}function nn(e,t,n){for(var r=t.length-1,i=0;i<r;++i){var o=t[i];if("__proto__"===o||"constructor"===o)break;o in e||(e[o]={}),e=e[o]}e[t[r]]=n}function Ue(){for(var e="",t=0,n=4294967295*Math.random()|0;t++<36;){var r="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx"[t-1],i=15&n;e+="-"==r||"4"==r?r:("x"==r?i:3&i|8).toString(16),n=t%8==0?4294967295*Math.random()|0:n>>4}return e}Pe.bind(null,"symbol"),xt.bind(null,TypeError),xt.bind(null,SyntaxError),ze(Me,"form"),ze(Me,"button"),ze(Me,"input"),ze(Me,"select");var be="global",pe=re+"global"+re,ge=typeof self===et&&self.self===self&&self||typeof global===et&&global.global===global&&global||void 0;function ie(e){return ge[pe][e]}function oe(e,t){return ge[pe][e]=t}function ve(e){delete ge[pe][e]}function he(e,t,n){var r;try{if(We(e)){var i=window[e];r=i[t].bind(i)}}catch{}return r||n}ge[pe]||(ge[pe]={});var xe={};function We(e){if(typeof xe[e]!==Oe)return xe[e];try{var t=window[e];t.setItem(Oe,Oe),t.removeItem(Oe)}catch{return xe[e]=!1}return xe[e]=!0}function g(){return g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},g.apply(this,arguments)}var Z="function",K="undefined",rn="@@redux/"+Math.random().toString(36),nt=typeof Symbol===Z&&Symbol.observable||"@@observable",Ne=" != "+Z;function Nt(e,t,n){var r;if(typeof t===Z&&typeof n===K&&(n=t,t=void 0),typeof n!==K){if(typeof n!==Z)throw new Error("enhancer"+Ne);return n(Nt)(e,t)}if(typeof e!==Z)throw new Error("reducer"+Ne);var i=e,o=t,a=[],u=a,c=!1;function s(){u===a&&(u=a.slice())}function l(){return o}function f(e){if(typeof e!==Z)throw new Error("Listener"+Ne);var t=!0;return s(),u.push(e),function(){if(t){t=!1,s();var n=u.indexOf(e);u.splice(n,1)}}}function p(e){if(!F(e))throw new Error("Act != obj");if(typeof e.type===K)throw new Error("ActType "+K);if(c)throw new Error("Dispatch in reducer");try{c=!0,o=i(o,e)}finally{c=!1}for(var t=a=u,n=0;n<t.length;n++)(0,t[n])();return e}return p({type:"@@redux/INIT"}),(r={dispatch:p,subscribe:f,getState:l,replaceReducer:function(e){if(typeof e!==Z)throw new Error("next reducer"+Ne);i=e,p({type:"@@redux/INIT"})}})[nt]=function(){var e,t=f;return(e={subscribe:function(e){if("object"!=typeof e)throw new TypeError("Observer != obj");function n(){e.next&&e.next(l())}return n(),{unsubscribe:t(n)}}})[nt]=function(){return this},e},r}function on(e,t){var n=t&&t.type;return"action "+(n&&n.toString()||"?")+"reducer "+e+" returns "+K}function me(){var e=[].slice.call(arguments);return 0===e.length?function(e){return e}:1===e.length?e[0]:e.reduce((function(e,t){return function(){return e(t.apply(void 0,[].slice.call(arguments)))}}))}function an(){var e=arguments;return function(t){return function(n,r,i){var o,a=t(n,r,i),u=a.dispatch,c={getState:a.getState,dispatch:function(e){return u(e)}};return o=[].slice.call(e).map((function(e){return e(c)})),g({},a,{dispatch:u=me.apply(void 0,o)(a.dispatch)})}}}var Q=re+"anon_id",ee=re+"user_id",ne=re+"user_traits",Dn={__proto__:null,ANON_ID:Q,USER_ID:ee,USER_TRAITS:ne},Y="userId",se="anonymousId",Ae=["bootstrap","params","campaign","initializeStart","initialize","initializeEnd","ready","resetStart","reset","resetEnd","pageStart","page","pageEnd","pageAborted","trackStart","track","trackEnd","trackAborted","identifyStart","identify","identifyEnd","identifyAborted","userIdChanged","registerPlugins","enablePlugin","disablePlugin","online","offline","setItemStart","setItem","setItemEnd","setItemAborted","removeItemStart","removeItem","removeItemEnd","removeItemAborted"],Be=["name","EVENTS","config","loaded"],p=Ae.reduce((function(e,t){return e[t]=t,e}),{registerPluginType:function(e){return"registerPlugin:"+e},pluginReadyType:function(e){return"ready:"+e}}),rt=/^utm_/,it=/^an_prop_/,ot=/^an_trait_/;function un(e){var t=e.storage.setItem;return function(n){return function(r){return function(i){if(i.type===p.bootstrap){var o=i.params,a=i.user,u=i.persistedUser,c=i.initialUser,s=u.userId===a.userId;u.anonymousId!==a.anonymousId&&t(Q,a.anonymousId),s||t(ee,a.userId),c.traits&&t(ne,g({},s&&u.traits?u.traits:{},c.traits));var l=Object.keys(i.params);if(l.length){var f=o.an_uid,d=o.an_event,m=l.reduce((function(e,t){if(t.match(rt)||t.match(/^(d|g)clid/)){var n=t.replace(rt,"");e.campaign["campaign"===n?"name":n]=o[t]}return t.match(it)&&(e.props[t.replace(it,"")]=o[t]),t.match(ot)&&(e.traits[t.replace(ot,"")]=o[t]),e}),{campaign:{},props:{},traits:{}});n.dispatch(g({type:p.params,raw:o},m,f?{userId:f}:{})),f&&setTimeout((function(){return e.identify(f,m.traits)}),0),d&&setTimeout((function(){return e.track(d,m.props)}),0),Object.keys(m.campaign).length&&n.dispatch({type:p.campaign,campaign:m.campaign})}}return r(i)}}}}function cn(e){return function(t,n){if(void 0===t&&(t={}),void 0===n&&(n={}),n.type===p.setItemEnd){if(n.key===Q)return g({},t,{anonymousId:n.value});if(n.key===ee)return g({},t,{userId:n.value})}switch(n.type){case p.identify:return Object.assign({},t,{userId:n.userId,traits:g({},t.traits,n.traits)});case p.reset:return[ee,Q,ne].forEach((function(t){e.removeItem(t)})),Object.assign({},t,{userId:null,anonymousId:null,traits:{}});default:return t}}}function at(e){return{userId:e.getItem(ee),anonymousId:e.getItem(Q),traits:e.getItem(ne)}}var Fe=function(e){return re+"TEMP"+re+e};function sn(e){var t=e.storage,n=t.setItem,r=t.removeItem,i=t.getItem;return function(e){return function(t){return function(o){var a=o.userId,u=o.traits,c=o.options;if(o.type===p.reset&&([ee,ne,Q].forEach((function(e){r(e)})),[Y,se,"traits"].forEach((function(e){ve(Fe(e))}))),o.type===p.identify){i(Q)||n(Q,Ue());var s=i(ee),l=i(ne)||{};s&&s!==a&&e.dispatch({type:p.userIdChanged,old:{userId:s,traits:l},new:{userId:a,traits:u},options:c}),a&&n(ee,a),u&&n(ne,g({},l,u))}return t(o)}}}}var ye={};function ut(e,t){ye[e]&&G(ye[e])&&(ye[e](t),delete ye[e])}function jt(e,t,n){return new Promise((function(r,i){return t()?r(e):n<1?i(g({},e,{queue:!0})):new Promise((function(e){return setTimeout(e,10)})).then((function(o){return jt(e,t,n-10).then(r,i)}))}))}function _t(e,t,n){var r=t(),i=e.getState(),o=i.plugins,a=i.queue,u=i.user;if(!i.context.offline&&a&&a.actions&&a.actions.length){var c=a.actions.reduce((function(e,t,n){return o[t.plugin].loaded?(e.process.push(t),e.processIndex.push(n)):(e.requeue.push(t),e.requeueIndex.push(n)),e}),{processIndex:[],process:[],requeue:[],requeueIndex:[]});if(c.processIndex&&c.processIndex.length){c.processIndex.forEach((function(t){var i,c,s=a.actions[t],l=s.plugin,f=s.payload.type,p=r[l][f];if(p&&G(p)){var d=(void 0===(i=s.payload)&&(i={}),void 0===(c=u)&&(c={}),[Y,se].reduce((function(e,t){return i.hasOwnProperty(t)&&c[t]&&c[t]!==i[t]&&(e[t]=c[t]),e}),i));p({payload:d,config:o[l].config,instance:n});var m=f+":"+l;e.dispatch(g({},d,{type:m,_:{called:m,from:"queueDrain"}}))}}));var s=a.actions.filter((function(e,t){return!~c.processIndex.indexOf(t)}));a.actions=s}}}var qe=function(e){var t,n,r=e.data,i=e.action,o=e.instance,a=e.state,u=e.allPlugins,c=e.allMatches,s=e.store,l=e.EVENTS;try{var f=a.plugins,p=a.context,d=i.type,m=d.match(fe),v=r.exact.map((function(e){return e.pluginName}));m&&(v=c.during.map((function(e){return e.pluginName})));var y=(t=o,n=v,function(e,r,i){var o=r.config,a=r.name,u=a+"."+e.type;i&&(u=i.event);var c,s,l,f,p,d=e.type.match(fe)?(c=a,s=u,l=n,f=i,p=e,function(e,t){var n=f?f.name:c,r=t&&Ee(t)?t:l;if(f&&(!(r=t&&Ee(t)?t:[c]).includes(c)||1!==r.length))throw new Error("Method "+s+" can only abort "+c+" plugin. "+JSON.stringify(r)+" input valid");return g({},p,{abort:{reason:e,plugins:r,caller:s,_:n}})}):function(e,t){return function(){throw new Error(e.type+" action not cancellable. Remove abort in "+t)}}(e,u);return{payload:ln(e),instance:t,config:o||{},abort:d}}),h=r.exact.reduce((function(e,t){var n=t.pluginName,r=t.methodName,i=!1;return r.match(/^initialize/)||r.match(/^reset/)||(i=!f[n].loaded),p.offline&&r.match(/^(page|track|identify)/)&&(i=!0),e[""+n]=i,e}),{});return Promise.resolve(r.exact.reduce((function(e,t,n){var a=t.pluginName;return Promise.resolve(e).then((function(e){function t(){return Promise.resolve(e)}var n=function(){if(r.namespaced&&r.namespaced[a])return Promise.resolve(r.namespaced[a].reduce((function(e,t,n){return Promise.resolve(e).then((function(e){return t.method&&G(t.method)?(function(e,t){var n=gt(e);if(n&&n.name===t){var r=gt(n.method);throw new Error([t+" plugin is calling method "+e,"Plugins cant call self","Use "+n.method+" "+(r?"or "+r.method:"")+" in "+t+" plugin insteadof "+e].join("\n"))}}(t.methodName,t.pluginName),Promise.resolve(t.method({payload:e,instance:o,abort:(n=e,r=a,i=t.pluginName,function(e,t){return g({},n,{abort:{reason:e,plugins:t||[r],caller:d,from:i||r}})}),config:lt(t.pluginName,f,u),plugins:f})).then((function(t){var n=F(t)?t:{};return Promise.resolve(g({},e,n))}))):e;var n,r,i}))}),Promise.resolve(i))).then((function(t){e[a]=t}));e[a]=i}();return n&&n.then?n.then(t):t()}))}),Promise.resolve({}))).then((function(e){return Promise.resolve(r.exact.reduce((function(t,n,i){try{var a=r.exact.length===i+1,c=n.pluginName,l=u[c];return Promise.resolve(t).then((function(t){var n=e[c]?e[c]:{};if(m&&(n=t),Re(n,c))return Ve({data:n,method:d,instance:o,pluginName:c,store:s}),Promise.resolve(t);if(Re(t,c))return a&&Ve({data:t,method:d,instance:o,store:s}),Promise.resolve(t);if(h.hasOwnProperty(c)&&!0===h[c])return s.dispatch({type:"queue",plugin:c,payload:n,_:{called:"queue",from:"queueMechanism"}}),Promise.resolve(t);var r=y(e[c],u[c]);return Promise.resolve(l[d]({abort:r.abort,payload:n,instance:o,config:lt(c,f,u),plugins:f})).then((function(r){var i=F(r)?r:{},a=g({},t,i),u=e[c];if(Re(u,c))Ve({data:u,method:d,instance:o,pluginName:c,store:s});else{var l=d+":"+c;(l.match(/:/g)||[]).length<2&&!d.match(ct)&&!d.match(st)&&o.dispatch(g({},m?a:n,{type:l,_:{called:l,from:"submethod"}}))}return Promise.resolve(a)}))}))}catch(e){return Promise.reject(e)}}),Promise.resolve(i))).then((function(e){if(!(d.match(fe)||d.match(/^registerPlugin/)||d.match(st)||d.match(ct)||d.match(/^params/)||d.match(/^userIdChanged/))){if(l.plugins.includes(d),e._&&e._.originalAction===d)return e;var t=g({},e,{_:{originalAction:e.type,called:e.type,from:"engineEnd"}});kt(e,r.exact.length)&&!d.match(/End$/)&&(t=g({},t,{type:e.type+"Aborted"})),s.dispatch(t)}return e}))}))}catch(t){return Promise.reject(t)}},fe=/Start$/,ct=/^bootstrap/,st=/^ready/;function Ve(e){var t=e.pluginName,n=e.method+"Aborted"+(t?":"+t:"");e.store.dispatch(g({},e.data,{type:n,_:{called:n,from:"abort"}}))}function lt(e,t,n){var r=t[e]||n[e];return r&&r.config?r.config:{}}function ft(e,t){return t.reduce((function(t,n){return n[e]?t.concat({methodName:e,pluginName:n.name,method:n[e]}):t}),[])}function dt(e,t){var n=e.replace(fe,""),r=t?":"+t:"";return[""+e+r,""+n+r,n+"End"+r]}function Re(e,t){var n=e.abort;return!!n&&(!0===n||pt(n,t)||n&&pt(n.plugins,t))}function kt(e,t){var n=e.abort;if(!n)return!1;if(!0===n||le(n))return!0;var r=n.plugins;return Ee(n)&&n.length===t||Ee(r)&&r.length===t}function Ee(e){return Array.isArray(e)}function pt(e,t){return!(!e||!Ee(e))&&e.includes(t)}function gt(e){var t=e.match(/(.*):(.*)/);return!!t&&{method:t[1],name:t[2]}}function ln(e){return Object.keys(e).reduce((function(t,n){return"type"===n||(t[n]=F(e[n])?Object.assign({},e[n]):e[n]),t}),{})}function fn(e,t,n){var r={};return function(i){return function(o){return function(a){try{var u,c=function(e){return u?e:o(f)},s=a.type,l=a.plugins,f=a;if(a.abort)return Promise.resolve(o(a));if(s===p.enablePlugin&&i.dispatch({type:p.initializeStart,plugins:l,disabled:[],fromEnable:!0,meta:a.meta}),s===p.disablePlugin&&setTimeout((function(){return ut(a.meta.rid,{payload:a})}),0),s===p.initializeEnd){var d=t(),m=Object.keys(d),v=m.filter((function(e){return l.includes(e)})).map((function(e){return d[e]})),y=[],h=[],b=a.disabled,I=v.map((function(e){var t=e.name;return jt(e,e.loaded,1e4).then((function(n){return r[t]||(i.dispatch({type:p.pluginReadyType(t),name:t,events:Object.keys(e).filter((function(e){return!Be.includes(e)}))}),r[t]=!0),y=y.concat(t),e})).catch((function(e){if(e instanceof Error)throw new Error(e);return h=h.concat(e.name),e}))}));Promise.all(I).then((function(e){var t={plugins:y,failed:h,disabled:b};setTimeout((function(){m.length===I.length+b.length&&i.dispatch(g({},{type:p.ready},t))}),0)}))}var w=function(){if(s!==p.bootstrap)return/^ready:([^:]*)$/.test(s)&&setTimeout((function(){return _t(i,t,e)}),0),Promise.resolve(function(e,t,n,r,i){try{var o=G(t)?t():t,a=e.type,u=a.replace(fe,"");if(e._&&e._.called)return Promise.resolve(e);var c=n.getState(),s=(y=o,void 0===(h=c.plugins)&&(h={}),void 0===(b=e.options)&&(b={}),Object.keys(y).filter((function(e){var t=b.plugins||{};return Wt(t[e])?t[e]:!1!==t.all&&(!h[e]||!1!==h[e].enabled)})).map((function(e){return y[e]})));a===p.initializeStart&&e.fromEnable&&(s=Object.keys(c.plugins).filter((function(t){var n=c.plugins[t];return e.plugins.includes(t)&&!n.initialized})).map((function(e){return o[e]})));var l=s.map((function(e){return e.name})),f=(m=s,v=dt(d=a).map((function(e){return ft(e,m)})),m.reduce((function(e,t){var n=t.name,r=dt(d,n).map((function(e){return ft(e,m)})),i=r[0],o=r[1],a=r[2];return i.length&&(e.beforeNS[n]=i),o.length&&(e.duringNS[n]=o),a.length&&(e.afterNS[n]=a),e}),{before:v[0],beforeNS:{},during:v[1],duringNS:{},after:v[2],afterNS:{}}));return Promise.resolve(qe({action:e,data:{exact:f.before,namespaced:f.beforeNS},state:c,allPlugins:o,allMatches:f,instance:n,store:r,EVENTS:i})).then((function(e){function t(){var t=function(){if(a.match(fe))return Promise.resolve(qe({action:g({},s,{type:u+"End"}),data:{exact:f.after,namespaced:f.afterNS},state:c,allPlugins:o,allMatches:f,instance:n,store:r,EVENTS:i})).then((function(e){e.meta&&e.meta.hasCallback&&ut(e.meta.rid,{payload:e})}))}();return t&&t.then?t.then((function(){return e})):e}if(kt(e,l.length))return e;var s,p=function(){if(a!==u)return Promise.resolve(qe({action:g({},e,{type:u}),data:{exact:f.during,namespaced:f.duringNS},state:c,allPlugins:o,allMatches:f,instance:n,store:r,EVENTS:i})).then((function(e){s=e}));s=e}();return p&&p.then?p.then(t):t()}))}catch(d){return Promise.reject(d)}var d,m,v,y,h,b}(a,t,e,i,n)).then((function(e){var t=o(e);return u=1,t}))}();return Promise.resolve(w&&w.then?w.then(c):c(w))}catch(e){return Promise.reject(e)}}}}}function dn(e){return function(t){return function(t){return function(n){var r=n.type,i=n.key,o=n.value,a=n.options;if(r===p.setItem||r===p.removeItem){if(n.abort)return t(n);r===p.setItem?e.setItem(i,o,a):e.removeItem(i,a)}return t(n)}}}}var pn=function(){var e=this;this.before=[],this.after=[],this.addMiddleware=function(t,n){e[n]=e[n].concat(t)},this.removeMiddleware=function(t,n){var r=e[n].findIndex((function(e){return e===t}));-1!==r&&(e[n]=[].concat(e[n].slice(0,r),e[n].slice(r+1)))},this.dynamicMiddlewares=function(t){return function(n){return function(r){return function(i){var o={getState:n.getState,dispatch:function(e){return n.dispatch(e)}},a=e[t].map((function(e){return e(o)}));return me.apply(void 0,a)(r)(i)}}}}};function gn(e){return function(t,n){void 0===t&&(t={});var r={};if("initialize:aborted"===n.type)return t;if(/^registerPlugin:([^:]*)$/.test(n.type)){var i=mt(n.type,"registerPlugin"),o=e()[i];if(!o||!i)return t;var a=n.enabled;return r[i]={enabled:a,initialized:!!a&&Boolean(!o.initialize),loaded:!!a&&Boolean(o.loaded()),config:o.config||{}},g({},t,r)}if(/^initialize:([^:]*)$/.test(n.type)){var u=mt(n.type,p.initialize),c=e()[u];return c&&u?(r[u]=g({},t[u],{initialized:!0,loaded:Boolean(c.loaded())}),g({},t,r)):t}if(/^ready:([^:]*)$/.test(n.type))return r[n.name]=g({},t[n.name],{loaded:!0}),g({},t,r);switch(n.type){case p.disablePlugin:return g({},t,vt(n.plugins,!1,t));case p.enablePlugin:return g({},t,vt(n.plugins,!0,t));default:return t}}}function mt(e,t){return e.substring(t.length+1,e.length)}function vt(e,t,n){return e.reduce((function(e,r){return e[r]=g({},n[r],{enabled:t}),e}),n)}function At(e){try{return JSON.parse(JSON.stringify(e))}catch{}return e}var mn={last:{},history:[]};function vn(e,t){void 0===e&&(e=mn);var n=t.options,r=t.meta;if(t.type===p.track){var i=At(g({event:t.event,properties:t.properties},Object.keys(n).length&&{options:n},{meta:r}));return g({},e,{last:i,history:e.history.concat(i)})}return e}var hn={actions:[]};function yn(e,t){void 0===e&&(e=hn);var n=t.payload;switch(t.type){case"queue":var r;return r=n&&n.type&&n.type===p.identify?[t].concat(e.actions):e.actions.concat(t),g({},e,{actions:r});case"dequeue":return[];default:return e}}var Tt=/#.*$/;function bn(e){var t=/(http[s]?:\/\/)?([^\/\s]+\/)(.*)/g.exec(e);return"/"+(t&&t[3]?t[3].split("?")[0].replace(Tt,""):"")}var $t,Mt,zt,Ut,In=function(e){if(void 0===e&&(e={}),!X)return e;var t,n,r=document,i=r.title,o=r.referrer,a=window,u=a.location,c=a.innerWidth,s=a.innerHeight,l=u.hash,f=u.search,p=(t=f,(n=function(){if(X)for(var e,t=document.getElementsByTagName("link"),n=0;e=t[n];n++)if("canonical"===e.getAttribute("rel"))return e.getAttribute("href")}())?n.match(/\?/)?n:n+t:window.location.href.replace(Tt,"")),d={title:i,url:p,path:bn(p),hash:l,search:f,width:c,height:s};return o&&""!==o&&(d.referrer=o),g({},d,e)},wn={last:{},history:[]};function Sn(e,t){void 0===e&&(e=wn);var n=t.options;if(t.type===p.page){var r=At(g({properties:t.properties,meta:t.meta},Object.keys(n).length&&{options:n}));return g({},e,{last:r,history:e.history.concat(r)})}return e}$t=function(){if(!X)return!1;var e=navigator.appVersion;return~e.indexOf("Win")?"Windows":~e.indexOf("Mac")?"MacOS":~e.indexOf("X11")?"UNIX":~e.indexOf("Linux")?"Linux":"Unknown OS"}(),Mt=X?document.referrer:null,zt=Zt(),Ut=en();var ht={initialized:!1,sessionId:Ue(),app:null,version:null,debug:!1,offline:!!X&&!navigator.onLine,os:{name:$t},userAgent:X?navigator.userAgent:"node",library:{name:"analytics",version:"0.11.0"},timezone:Ut,locale:zt,campaign:{},referrer:Mt};function En(e,t){void 0===e&&(e=ht);var n=e.initialized,r=t.campaign;switch(t.type){case p.campaign:return g({},e,{campaign:r});case p.offline:return g({},e,{offline:!0});case p.online:return g({},e,{offline:!1});default:return n?e:g({},ht,e,{initialized:!0})}}var Pn=["plugins","reducers","storage"];function On(e,t,n){if(X){var r=window[(n?"add":"remove")+"EventListener"];e.split(" ").forEach((function(e){r(e,t)}))}}function xn(e){var t=On.bind(null,"online offline",(function(t){return Promise.resolve(!navigator.onLine).then(e)}));return t(!0),function(e){return t(!1)}}function Ct(){return oe("analytics",[]),function(e){return function(t,n,r){var i=e(t,n,r),o=i.dispatch;return Object.assign(i,{dispatch:function(e){return ge[pe].analytics.push(e.action||e),o(e)}})}}}function yt(e){return function(){return me(me.apply(null,arguments),Ct())}}function Je(e){return e?Ht(e)?e:[e]:[]}function bt(e,t,n){void 0===e&&(e={});var r,i,o=Ue();return t&&(ye[o]=(r=t,i=function(e){for(var t,n=e||Array.prototype.slice.call(arguments),r=0;r<n.length;r++)if(G(n[r])){t=n[r];break}return t}(n),function(e){i&&i(e),r(e)})),g({},e,{rid:o,ts:(new Date).getTime()},t?{hasCallback:!0}:{})}function Nn(e){void 0===e&&(e={});var t,n=e.reducers||{},r=e.initialUser||{},i=(e.plugins||[]).reduce((function(e,t){if(G(t))return e.middlewares=e.middlewares.concat(t),e;if(t.NAMESPACE&&(t.name=t.NAMESPACE),!t.name)throw new Error("https://lytics.dev/errors/1");var n=t.EVENTS?Object.keys(t.EVENTS).map((function(e){return t.EVENTS[e]})):[];e.pluginEnabled[t.name]=!(!1===t.enabled||t.config&&!1===t.config.enabled),delete t.enabled,t.methods&&(e.methods[t.name]=Object.keys(t.methods).reduce((function(e,n){var r;return e[n]=(r=t.methods[n],function(){for(var e=Array.prototype.slice.call(arguments),t=new Array(r.length),n=0;n<e.length;n++)t[n]=e[n];return t[t.length]=E,r.apply({instance:E},t)}),e}),{}),delete t.methods);var r=Object.keys(t).concat(n),i=new Set(e.events.concat(r));if(e.events=Array.from(i),e.pluginsArray=e.pluginsArray.concat(t),e.plugins[t.name])throw new Error(t.name+"AlreadyLoaded");return e.plugins[t.name]=t,e.plugins[t.name].loaded||(e.plugins[t.name].loaded=function(){return!0}),e}),{plugins:{},pluginEnabled:{},methods:{},pluginsArray:[],middlewares:[],events:[]}),o=e.storage?e.storage:{getItem:ie,setItem:oe,removeItem:ve},a=(t=o,function(e,n,r){return n.getState("user")[e]||(r&&F(r)&&r[e]?r[e]:at(t)[e]||ie(Fe(e))||null)}),u=i.plugins,c=i.events.filter((function(e){return!Be.includes(e)})).sort(),s=new Set(c.concat(Ae).filter((function(e){return!Be.includes(e)}))),l=Array.from(s).sort(),f=function(){return u},d=new pn,m=d.addMiddleware,v=d.removeMiddleware,y=d.dynamicMiddlewares,h=function(){throw new Error("Abort disabled inListener")},b=tn(),I=at(o),w=g({},I,r,b.an_uid?{userId:b.an_uid}:{},b.an_aid?{anonymousId:b.an_aid}:{});w.anonymousId||(w.anonymousId=Ue());var S=g({enable:function(e,t){return new Promise((function(n){M.dispatch({type:p.enablePlugin,plugins:Je(e),_:{originalAction:p.enablePlugin}},n,[t])}))},disable:function(e,t){return new Promise((function(n){M.dispatch({type:p.disablePlugin,plugins:Je(e),_:{originalAction:p.disablePlugin}},n,[t])}))}},i.methods),E={identify:function(e,t,n,r){try{var i=le(e)?e:null,o=F(e)?e:t,u=n||{},c=E.user();oe(Fe(Y),i);var s=i||o.userId||a(Y,E,o);return Promise.resolve(new Promise((function(e){M.dispatch(g({type:p.identifyStart,userId:s,traits:o||{},options:u,anonymousId:c.anonymousId},c.id&&c.id!==i&&{previousId:c.id}),e,[t,n,r])})))}catch(e){return Promise.reject(e)}},track:function(e,t,n,r){try{var i=F(e)?e.event:e;if(!i||!le(i))throw new Error("EventMissing");var o=F(e)?e:t||{},u=F(n)?n:{};return Promise.resolve(new Promise((function(e){M.dispatch({type:p.trackStart,event:i,properties:o,options:u,userId:a(Y,E,t),anonymousId:a(se,E,t)},e,[t,n,r])})))}catch(e){return Promise.reject(e)}},page:function(e,t,n){try{var r=F(e)?e:{},i=F(t)?t:{};return Promise.resolve(new Promise((function(o){M.dispatch({type:p.pageStart,properties:In(r),options:i,userId:a(Y,E,r),anonymousId:a(se,E,r)},o,[e,t,n])})))}catch(e){return Promise.reject(e)}},user:function(e){if(e===Y||"id"===e)return a(Y,E);if(e===se||"anonId"===e)return a(se,E);var t=E.getState("user");return e?Ze(t,e):t},reset:function(e){return new Promise((function(t){M.dispatch({type:p.resetStart},t,e)}))},ready:function(e){return E.on(p.ready,e)},on:function(e,t){if(!e||!G(t))return!1;if(e===p.bootstrap)throw new Error(".on disabled for "+e);var n=/Start$|Start:/;if("*"===e){var r=function(e){return function(e){return function(r){return r.type.match(n)&&t({payload:r,instance:E,plugins:u}),e(r)}}},i=function(e){return function(e){return function(r){return r.type.match(n)||t({payload:r,instance:E,plugins:u}),e(r)}}};return m(r,je),m(i,_e),function(){v(r,je),v(i,_e)}}var o=e.match(n)?je:_e,a=function(n){return function(n){return function(r){return r.type===e&&t({payload:r,instance:E,plugins:u,abort:h}),n(r)}}};return m(a,o),function(){return v(a,o)}},once:function(e,t){if(!e||!G(t))return!1;if(e===p.bootstrap)throw new Error(".once disabled for "+e);var n=E.on(e,(function(e){t({payload:e.payload,instance:E,plugins:u,abort:h}),n()}));return n},getState:function(e){var t=M.getState();return e?Ze(t,e):Object.assign({},t)},dispatch:function(e){var t=le(e)?{type:e}:e;if(Ae.includes(t.type))throw new Error("reserved action "+t.type);var n=g({},t,{_:g({originalAction:t.type},e._||{})});M.dispatch(n)},enablePlugin:S.enable,disablePlugin:S.disable,plugins:S,storage:{getItem:o.getItem,setItem:function(e,t,n){M.dispatch({type:p.setItemStart,key:e,value:t,options:n})},removeItem:function(e,t){M.dispatch({type:p.removeItemStart,key:e,options:t})}},setAnonymousId:function(e,t){E.storage.setItem(Q,e,t)},events:{core:Ae,plugins:c}},P=i.middlewares.concat([function(e){return function(e){return function(t){return t.meta||(t.meta=bt()),e(t)}}},y(je),fn(E,f,{all:l,plugins:c}),dn(o),un(E),sn(E),y(_e)]),O={context:En,user:cn(o),page:Sn,track:vn,plugins:gn(f),queue:yn},x=me,j=me;if(X&&e.debug){var N=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;N&&(x=N({trace:!0,traceLimit:25})),j=function(){return 0===arguments.length?Ct():F(typeof arguments[0])?yt():yt().apply(null,arguments)}}var k,_=function(e){return Object.keys(e).reduce((function(t,n){return Pn.includes(n)||(t[n]=e[n]),t}),{})}(e),A=i.pluginsArray.reduce((function(e,t){var n=t.name,r=t.config,o=t.loaded,a=i.pluginEnabled[n];return e[n]={enabled:a,initialized:!!a&&Boolean(!t.initialize),loaded:Boolean(o()),config:r||{}},e}),{}),T={context:_,user:w,plugins:A},M=Nt(function(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++){var i=t[r];typeof e[i]===Z&&(n[i]=e[i])}var o,a,u=Object.keys(n);try{a=n,Object.keys(a).forEach((function(e){var t=a[e];if(typeof t(void 0,{type:"@@redux/INIT"})===K||typeof t(void 0,{type:rn})===K)throw new Error("reducer "+e+" "+K)}))}catch(a){o=a}return function(e,t){if(void 0===e&&(e={}),o)throw o;for(var r=!1,i={},a=0;a<u.length;a++){var c=u[a],s=e[c],l=(0,n[c])(s,t);if(typeof l===K){var f=on(c,t);throw new Error(f)}i[c]=l,r=r||l!==s}return r?i:e}}(g({},O,n)),T,j(x(an.apply(void 0,P))));M.dispatch=(k=M.dispatch,function(e,t,n){var r=g({},e,{meta:bt(e.meta,t,Je(n))});return k.apply(null,[r])});var z=Object.keys(u);M.dispatch({type:p.bootstrap,plugins:z,config:_,params:b,user:w,initialUser:r,persistedUser:I});var D=z.filter((function(e){return i.pluginEnabled[e]})),U=z.filter((function(e){return!i.pluginEnabled[e]}));return M.dispatch({type:p.registerPlugins,plugins:z,enabled:i.pluginEnabled}),i.pluginsArray.map((function(e,t){var n=e.bootstrap,r=e.config,o=e.name;n&&G(n)&&n({instance:E,config:r,payload:e}),M.dispatch({type:p.registerPluginType(o),name:o,enabled:i.pluginEnabled[o],plugin:e}),i.pluginsArray.length===t+1&&M.dispatch({type:p.initializeStart,plugins:D,disabled:U})})),xn((function(e){M.dispatch({type:e?p.offline:p.online})})),function(e,t,n){setInterval((function(){return _t(e,t,n)}),3e3)}(M,f,E),E}var je="before",_e="after",Ie="cookie",te=qt(),Dt=Ce,jn=Ce;function Lt(e){return te?Ce(e,"",-1):ve(e)}function qt(){if(void 0!==te)return te;var e="cookiecookie";try{Ce(e,e),te=-1!==document.cookie.indexOf(e),Lt(e)}catch{te=!1}return te}function Ce(e,t,n,r,i,o){if(typeof window<"u"){var a=arguments.length>1;return!1===te&&(a?oe(e,t):ie(e)),a?document.cookie=e+"="+encodeURIComponent(t)+(n?"; expires="+new Date(+new Date+1e3*n).toUTCString()+(r?"; path="+r:"")+(i?"; domain="+i:"")+(o?"; secure":""):""):decodeURIComponent((("; "+document.cookie).split("; "+e+"=")[1]||"").split(";")[0])}}var we="localStorage",_n=We.bind(null,"localStorage");he("localStorage","getItem",ie),he("localStorage","setItem",oe),he("localStorage","removeItem",ve);var Se="sessionStorage",kn=We.bind(null,"sessionStorage");function de(e){var t=e;try{if("true"===(t=JSON.parse(e)))return!0;if("false"===t)return!1;if(F(t))return t;parseFloat(t)===t&&(t=parseFloat(t))}catch{}if(null!==t&&""!==t)return t}he("sessionStorage","getItem",ie),he("sessionStorage","setItem",oe),he("sessionStorage","removeItem",ve);var An=_n(),Tn=kn(),$n=qt();function Vt(e,t){if(e){var n=Xe(t),r=!Qe(n),i=He(n)?de(localStorage.getItem(e)):void 0;if(r&&!ce(i))return i;var o=Ge(n)?de(Dt(e)):void 0;if(r&&o)return o;var a=Ke(n)?de(sessionStorage.getItem(e)):void 0;if(r&&a)return a;var u=ie(e);return r?u:{localStorage:i,sessionStorage:a,cookie:o,global:u}}}function Mn(e,t,n){if(e&&!ce(t)){var r={},i=Xe(n),o=JSON.stringify(t),a=!Qe(i);return He(i)&&(r[we]=ke(we,t,de(localStorage.getItem(e))),localStorage.setItem(e,o),a)?r[we]:Ge(i)&&(r[Ie]=ke(Ie,t,de(Dt(e))),jn(e,o),a)?r[Ie]:Ke(i)&&(r[Se]=ke(Se,t,de(sessionStorage.getItem(e))),sessionStorage.setItem(e,o),a)?r[Se]:(r[be]=ke(be,t,ie(e)),oe(e,t),a?r[be]:r)}}function zn(e,t){if(e){var n=Xe(t),r=Vt(e,Et),i={};return!ce(r.localStorage)&&He(n)&&(localStorage.removeItem(e),i[we]=r.localStorage),!ce(r.cookie)&&Ge(n)&&(Lt(e),i[Ie]=r.cookie),!ce(r.sessionStorage)&&Ke(n)&&(sessionStorage.removeItem(e),i[Se]=r.sessionStorage),!ce(r.global)&&De(n,be)&&(ve(e),i[be]=r.global),i}}function Xe(e){return e?le(e)?e:e.storage:St}function He(e){return An&&De(e,we)}function Ge(e){return $n&&De(e,Ie)}function Ke(e){return Tn&&De(e,Se)}function Qe(e){return e===Et||"all"===e}function De(e,t){return e===St||e===t||Qe(e)}function ke(e,t,n){return{location:e,current:t,previous:n}}var Un={setItem:Mn,getItem:Vt,removeItem:zn};function Cn(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function It(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function wt(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?It(Object(n),!0).forEach((function(t){Cn(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):It(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Ln(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t={storage:Un};return Nn(wt(wt({},t),e))}export{Ln as Analytics,Dn as CONSTANTS,p as EVENTS,Ln as default,Ln as init};