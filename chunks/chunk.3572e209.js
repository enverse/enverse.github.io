import{l as t}from"./chunk.1f13d160.js";var l,e,s,h=0,g=[],d=t.__b,p=t.__r,H=t.diffed,y=t.__c,A=t.unmount;function F(_,n){t.__h&&t.__h(e,_,h||n),h=0;var r=e.__H||(e.__H={__:[],__h:[]});return _>=r.__.length&&r.__.push({}),r.__[_]}function j(_){return h=1,q(b,_)}function q(_,n,r){var o=F(l++,2);return o.t=_,o.__c||(o.__=[r?r(n):b(void 0,n),function(u){var c=o.t(o.__[0],u);o.__[0]!==c&&(o.__=[c,o.__[1]],o.__c.setState({}))}],o.__c=e),o.__}function k(_,n){var r=F(l++,7);return $(r.__H,n)&&(r.__=_(),r.__H=n,r.__h=_),r.__}function w(_,n){return h=8,k(function(){return _},n)}function T(){for(var _;_=g.shift();)if(_.__P)try{_.__H.__h.forEach(a),_.__H.__h.forEach(v),_.__H.__h=[]}catch(n){_.__H.__h=[],t.__e(n,_.__v)}}t.__b=function(_){e=null,d&&d(_)},t.__r=function(_){p&&p(_),l=0;var n=(e=_.__c).__H;n&&(n.__h.forEach(a),n.__h.forEach(v),n.__h=[])},t.diffed=function(_){H&&H(_);var n=_.__c;n&&n.__H&&n.__H.__h.length&&(g.push(n)!==1&&s===t.requestAnimationFrame||((s=t.requestAnimationFrame)||function(r){var o,u=function(){clearTimeout(c),E&&cancelAnimationFrame(o),setTimeout(r)},c=setTimeout(u,100);E&&(o=requestAnimationFrame(u))})(T)),e=null},t.__c=function(_,n){n.some(function(r){try{r.__h.forEach(a),r.__h=r.__h.filter(function(o){return!o.__||v(o)})}catch(o){n.some(function(u){u.__h&&(u.__h=[])}),n=[],t.__e(o,r.__v)}}),y&&y(_,n)},t.unmount=function(_){A&&A(_);var n,r=_.__c;r&&r.__H&&(r.__H.__.forEach(function(o){try{a(o)}catch(u){n=u}}),n&&t.__e(n,r.__v))};var E=typeof requestAnimationFrame=="function";function a(_){var n=e,r=_.__c;typeof r=="function"&&(_.__c=void 0,r()),e=n}function v(_){var n=e;_.__c=_.__(),e=n}function $(_,n){return!_||_.length!==n.length||n.some(function(r,o){return r!==_[o]})}function b(_,n){return typeof n=="function"?n(_):n}var x=0;function S(_,n,r,o,u){var c,i,f={};for(i in n)i=="ref"?c=n[i]:f[i]=n[i];var m={type:_,props:f,key:r,ref:c,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--x,__source:u,__self:o};if(typeof _=="function"&&(c=_.defaultProps))for(i in c)f[i]===void 0&&(f[i]=c[i]);return t.vnode&&t.vnode(m),m}export{w as A,S as e,j as m};
