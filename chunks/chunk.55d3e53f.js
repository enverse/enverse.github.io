import{l as o}from"./chunk.1f13d160.js";var a,c,v,f=0,A=[],s=o.__b,H=o.__r,l=o.diffed,p=o.__c,y=o.unmount;function m(_,n){o.__h&&o.__h(c,_,f||n),f=0;var t=c.__H||(c.__H={__:[],__h:[]});return _>=t.__.length&&t.__.push({}),t.__[_]}function x(_){return f=1,F(g,_)}function F(_,n,t){var o=m(a++,2);return o.t=_,o.__c||(o.__=[t?t(n):g(void 0,n),function(_){var n=o.t(o.__[0],_);o.__[0]!==n&&(o.__=[n,o.__[1]],o.__c.setState({}))}],o.__c=c),o.__}function j(_,n){var t=m(a++,3);!o.__s&&E(t.__H,n)&&(t.__=_,t.__H=n,c.__H.__h.push(t))}function q(_,n){var t=m(a++,7);return E(t.__H,n)&&(t.__=_(),t.__H=n,t.__h=_),t.__}function k(_,n){return f=8,q((function(){return _}),n)}function b(){for(var _;_=A.shift();)if(_.__P)try{_.__H.__h.forEach(e),_.__H.__h.forEach(h),_.__H.__h=[]}catch(n){_.__H.__h=[],o.__e(n,_.__v)}}o.__b=function(_){c=null,s&&s(_)},o.__r=function(_){H&&H(_),a=0;var n=(c=_.__c).__H;n&&(n.__h.forEach(e),n.__h.forEach(h),n.__h=[])},o.diffed=function(_){l&&l(_);var n=_.__c;n&&n.__H&&n.__H.__h.length&&(1!==A.push(n)&&v===o.requestAnimationFrame||((v=o.requestAnimationFrame)||function(_){var n,t=function(){clearTimeout(o),d&&cancelAnimationFrame(n),setTimeout(_)},o=setTimeout(t,100);d&&(n=requestAnimationFrame(t))})(b)),c=null},o.__c=function(_,n){n.some((function(_){try{_.__h.forEach(e),_.__h=_.__h.filter((function(_){return!_.__||h(_)}))}catch(t){n.some((function(_){_.__h&&(_.__h=[])})),n=[],o.__e(t,_.__v)}})),p&&p(_,n)},o.unmount=function(_){y&&y(_);var n,t=_.__c;t&&t.__H&&(t.__H.__.forEach((function(_){try{e(_)}catch(_){n=_}})),n&&o.__e(n,t.__v))};var d="function"==typeof requestAnimationFrame;function e(_){var n=c,t=_.__c;"function"==typeof t&&(_.__c=void 0,t()),c=n}function h(_){var n=c;_.__c=_.__(),c=n}function E(_,n){return!_||_.length!==n.length||n.some((function(n,t){return n!==_[t]}))}function g(_,n){return"function"==typeof n?n(_):n}export{k as A,x as m,j as y};