var w,c,q,H,O,R,E={},j=[],se=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function b(e,_){for(var t in _)e[t]=_[t];return e}function B(e){var _=e.parentNode;_&&_.removeChild(e)}function ae(e,_,t){var r,l,o,f={};for(o in _)o=="key"?r=_[o]:o=="ref"?l=_[o]:f[o]=_[o];if(arguments.length>2&&(f.children=arguments.length>3?w.call(arguments,2):t),typeof e=="function"&&e.defaultProps!=null)for(o in e.defaultProps)f[o]===void 0&&(f[o]=e.defaultProps[o]);return A(e,f,r,l,null)}function A(e,_,t,r,l){var o={type:e,props:_,key:t,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:l??++q};return l==null&&c.vnode!=null&&c.vnode(o),o}function T(e){return e.children}function C(e,_){this.props=e,this.context=_}function x(e,_){if(_==null)return e.__?x(e.__,e.__.__k.indexOf(e)+1):null;for(var t;_<e.__k.length;_++)if((t=e.__k[_])!=null&&t.__e!=null)return t.__e;return typeof e.type=="function"?x(e):null}function V(e){var _,t;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,_=0;_<e.__k.length;_++)if((t=e.__k[_])!=null&&t.__e!=null){e.__e=e.__c.base=t.__e;break}return V(e)}}function z(e){(!e.__d&&(e.__d=!0)&&H.push(e)&&!D.__r++||R!==c.debounceRendering)&&((R=c.debounceRendering)||O)(D)}function D(){for(var e;D.__r=H.length;)e=H.sort(function(_,t){return _.__v.__b-t.__v.__b}),H=[],e.some(function(_){var t,r,l,o,f,p;_.__d&&(f=(o=(t=_).__v).__e,(p=t.__P)&&(r=[],(l=b({},o)).__v=o.__v+1,N(p,o,l,t.__n,p.ownerSVGElement!==void 0,o.__h!=null?[f]:null,r,f??x(o),o.__h),Z(r,o),o.__e!=f&&V(o)))})}function G(e,_,t,r,l,o,f,p,a,h){var n,d,u,i,s,$,v,y=r&&r.__k||j,m=y.length;for(t.__k=[],n=0;n<_.length;n++)if((i=t.__k[n]=(i=_[n])==null||typeof i=="boolean"?null:typeof i=="string"||typeof i=="number"||typeof i=="bigint"?A(null,i,null,null,i):Array.isArray(i)?A(T,{children:i},null,null,null):i.__b>0?A(i.type,i.props,i.key,null,i.__v):i)!=null){if(i.__=t,i.__b=t.__b+1,(u=y[n])===null||u&&i.key==u.key&&i.type===u.type)y[n]=void 0;else for(d=0;d<m;d++){if((u=y[d])&&i.key==u.key&&i.type===u.type){y[d]=void 0;break}u=null}N(e,i,u=u||E,l,o,f,p,a,h),s=i.__e,(d=i.ref)&&u.ref!=d&&(v||(v=[]),u.ref&&v.push(u.ref,null,i),v.push(d,i.__c||s,i)),s!=null?($==null&&($=s),typeof i.type=="function"&&i.__k===u.__k?i.__d=a=J(i,a,e):a=K(e,i,u,y,s,a),typeof t.type=="function"&&(t.__d=a)):a&&u.__e==a&&a.parentNode!=e&&(a=x(u))}for(t.__e=$,n=m;n--;)y[n]!=null&&(typeof t.type=="function"&&y[n].__e!=null&&y[n].__e==t.__d&&(t.__d=x(r,n+1)),_e(y[n],y[n]));if(v)for(n=0;n<v.length;n++)ee(v[n],v[++n],v[++n])}function J(e,_,t){for(var r,l=e.__k,o=0;l&&o<l.length;o++)(r=l[o])&&(r.__=e,_=typeof r.type=="function"?J(r,_,t):K(t,r,r,l,r.__e,_));return _}function K(e,_,t,r,l,o){var f,p,a;if(_.__d!==void 0)f=_.__d,_.__d=void 0;else if(t==null||l!=o||l.parentNode==null)e:if(o==null||o.parentNode!==e)e.appendChild(l),f=null;else{for(p=o,a=0;(p=p.nextSibling)&&a<r.length;a+=2)if(p==l)break e;e.insertBefore(l,o),f=o}return f!==void 0?f:l.nextSibling}function pe(e,_,t,r,l){var o;for(o in t)o==="children"||o==="key"||o in _||F(e,o,null,t[o],r);for(o in _)l&&typeof _[o]!="function"||o==="children"||o==="key"||o==="value"||o==="checked"||t[o]===_[o]||F(e,o,_[o],t[o],r)}function Q(e,_,t){_[0]==="-"?e.setProperty(_,t):e[_]=t==null?"":typeof t!="number"||se.test(_)?t:t+"px"}function F(e,_,t,r,l){var o;e:if(_==="style")if(typeof t=="string")e.style.cssText=t;else{if(typeof r=="string"&&(e.style.cssText=r=""),r)for(_ in r)t&&_ in t||Q(e.style,_,"");if(t)for(_ in t)r&&t[_]===r[_]||Q(e.style,_,t[_])}else if(_[0]==="o"&&_[1]==="n")o=_!==(_=_.replace(/Capture$/,"")),_=_.toLowerCase()in e?_.toLowerCase().slice(2):_.slice(2),e.l||(e.l={}),e.l[_+o]=t,t?r||e.addEventListener(_,o?Y:X,o):e.removeEventListener(_,o?Y:X,o);else if(_!=="dangerouslySetInnerHTML"){if(l)_=_.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if(_!=="href"&&_!=="list"&&_!=="form"&&_!=="tabIndex"&&_!=="download"&&_ in e)try{e[_]=t??"";break e}catch{}typeof t=="function"||(t!=null&&(t!==!1||_[0]==="a"&&_[1]==="r")?e.setAttribute(_,t):e.removeAttribute(_))}}function X(e){this.l[e.type+!1](c.event?c.event(e):e)}function Y(e){this.l[e.type+!0](c.event?c.event(e):e)}function N(e,_,t,r,l,o,f,p,a){var h,n,d,u,i,s,$,v,y,m,S,k=_.type;if(_.constructor!==void 0)return null;t.__h!=null&&(a=t.__h,p=_.__e=t.__e,_.__h=null,o=[p]),(h=c.__b)&&h(_);try{e:if(typeof k=="function"){if(v=_.props,y=(h=k.contextType)&&r[h.__c],m=h?y?y.props.value:h.__:r,t.__c?$=(n=_.__c=t.__c).__=n.__E:("prototype"in k&&k.prototype.render?_.__c=n=new k(v,m):(_.__c=n=new C(v,m),n.constructor=k,n.render=de),y&&y.sub(n),n.props=v,n.state||(n.state={}),n.context=m,n.__n=r,d=n.__d=!0,n.__h=[]),n.__s==null&&(n.__s=n.state),k.getDerivedStateFromProps!=null&&(n.__s==n.state&&(n.__s=b({},n.__s)),b(n.__s,k.getDerivedStateFromProps(v,n.__s))),u=n.props,i=n.state,d)k.getDerivedStateFromProps==null&&n.componentWillMount!=null&&n.componentWillMount(),n.componentDidMount!=null&&n.__h.push(n.componentDidMount);else{if(k.getDerivedStateFromProps==null&&v!==u&&n.componentWillReceiveProps!=null&&n.componentWillReceiveProps(v,m),!n.__e&&n.shouldComponentUpdate!=null&&n.shouldComponentUpdate(v,n.__s,m)===!1||_.__v===t.__v){n.props=v,n.state=n.__s,_.__v!==t.__v&&(n.__d=!1),n.__v=_,_.__e=t.__e,_.__k=t.__k,_.__k.forEach(function(P){P&&(P.__=_)}),n.__h.length&&f.push(n);break e}n.componentWillUpdate!=null&&n.componentWillUpdate(v,n.__s,m),n.componentDidUpdate!=null&&n.__h.push(function(){n.componentDidUpdate(u,i,s)})}n.context=m,n.props=v,n.state=n.__s,(h=c.__r)&&h(_),n.__d=!1,n.__v=_,n.__P=e,h=n.render(n.props,n.state,n.context),n.state=n.__s,n.getChildContext!=null&&(r=b(b({},r),n.getChildContext())),d||n.getSnapshotBeforeUpdate==null||(s=n.getSnapshotBeforeUpdate(u,i)),S=h!=null&&h.type===T&&h.key==null?h.props.children:h,G(e,Array.isArray(S)?S:[S],_,t,r,l,o,f,p,a),n.base=_.__e,_.__h=null,n.__h.length&&f.push(n),$&&(n.__E=n.__=null),n.__e=!1}else o==null&&_.__v===t.__v?(_.__k=t.__k,_.__e=t.__e):_.__e=he(t.__e,_,t,r,l,o,f,a);(h=c.diffed)&&h(_)}catch(P){_.__v=null,(a||o!=null)&&(_.__e=p,_.__h=!!a,o[o.indexOf(p)]=null),c.__e(P,_,t)}}function Z(e,_){c.__c&&c.__c(_,e),e.some(function(t){try{e=t.__h,t.__h=[],e.some(function(r){r.call(t)})}catch(r){c.__e(r,t.__v)}})}function he(e,_,t,r,l,o,f,p){var a,h,n,d=t.props,u=_.props,i=_.type,s=0;if(i==="svg"&&(l=!0),o!=null){for(;s<o.length;s++)if((a=o[s])&&"setAttribute"in a==!!i&&(i?a.localName===i:a.nodeType===3)){e=a,o[s]=null;break}}if(e==null){if(i===null)return document.createTextNode(u);e=l?document.createElementNS("http://www.w3.org/2000/svg",i):document.createElement(i,u.is&&u),o=null,p=!1}if(i===null)d===u||p&&e.data===u||(e.data=u);else{if(o=o&&w.call(e.childNodes),h=(d=t.props||E).dangerouslySetInnerHTML,n=u.dangerouslySetInnerHTML,!p){if(o!=null)for(d={},s=0;s<e.attributes.length;s++)d[e.attributes[s].name]=e.attributes[s].value;(n||h)&&(n&&(h&&n.__html==h.__html||n.__html===e.innerHTML)||(e.innerHTML=n&&n.__html||""))}if(pe(e,u,d,l,p),n)_.__k=[];else if(s=_.props.children,G(e,Array.isArray(s)?s:[s],_,t,r,l&&i!=="foreignObject",o,f,o?o[0]:t.__k&&x(t,0),p),o!=null)for(s=o.length;s--;)o[s]!=null&&B(o[s]);p||("value"in u&&(s=u.value)!==void 0&&(s!==d.value||s!==e.value||i==="progress"&&!s)&&F(e,"value",s,d.value,!1),"checked"in u&&(s=u.checked)!==void 0&&s!==e.checked&&F(e,"checked",s,d.checked,!1))}return e}function ee(e,_,t){try{typeof e=="function"?e(_):e.current=_}catch(r){c.__e(r,t)}}function _e(e,_,t){var r,l;if(c.unmount&&c.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||ee(r,null,_)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(o){c.__e(o,_)}r.base=r.__P=null}if(r=e.__k)for(l=0;l<r.length;l++)r[l]&&_e(r[l],_,typeof e.type!="function");t||e.__e==null||B(e.__e),e.__e=e.__d=void 0}function de(e,_,t){return this.constructor(e,t)}function be(e,_,t){var r,l,o;c.__&&c.__(e,_),l=(r=typeof t=="function")?null:t&&t.__k||_.__k,o=[],N(_,e=(!r&&t||_).__k=ae(T,null,[e]),l||E,E,_.ownerSVGElement!==void 0,!r&&t?[t]:l?null:_.firstChild?w.call(_.childNodes):null,o,!r&&t?t:l?l.__e:_.firstChild,r),Z(o,e)}w=j.slice,c={__e:function(e,_){for(var t,r,l;_=_.__;)if((t=_.__c)&&!t.__)try{if((r=t.constructor)&&r.getDerivedStateFromError!=null&&(t.setState(r.getDerivedStateFromError(e)),l=t.__d),t.componentDidCatch!=null&&(t.componentDidCatch(e),l=t.__d),l)return t.__E=t}catch(o){e=o}throw e}},q=0,C.prototype.setState=function(e,_){var t;t=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=b({},this.state),typeof e=="function"&&(e=e(b({},t),this.props)),e&&b(t,e),e!=null&&this.__v&&(_&&this.__h.push(_),z(this))},C.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),z(this))},C.prototype.render=T,H=[],O=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,D.__r=0;var U,g,te,L=0,W=[],ne=c.__b,oe=c.__r,re=c.diffed,le=c.__c,ie=c.unmount;function ce(e,_){c.__h&&c.__h(g,e,L||_),L=0;var t=g.__H||(g.__H={__:[],__h:[]});return e>=t.__.length&&t.__.push({}),t.__[e]}function $e(e){return L=1,ve(ue,e)}function ve(e,_,t){var r=ce(U++,2);return r.t=e,r.__c||(r.__=[t?t(_):ue(void 0,_),function(l){var o=r.t(r.__[0],l);r.__[0]!==o&&(r.__=[o,r.__[1]],r.__c.setState({}))}],r.__c=g),r.__}function ye(e,_){var t=ce(U++,7);return ge(t.__H,_)&&(t.__=e(),t.__H=_,t.__h=e),t.__}function xe(e,_){return L=8,ye(function(){return e},_)}function me(){W.forEach(function(e){if(e.__P)try{e.__H.__h.forEach(M),e.__H.__h.forEach(I),e.__H.__h=[]}catch(_){e.__H.__h=[],c.__e(_,e.__v)}}),W=[]}c.__b=function(e){g=null,ne&&ne(e)},c.__r=function(e){oe&&oe(e),U=0;var _=(g=e.__c).__H;_&&(_.__h.forEach(M),_.__h.forEach(I),_.__h=[])},c.diffed=function(e){re&&re(e);var _=e.__c;_&&_.__H&&_.__H.__h.length&&(W.push(_)!==1&&te===c.requestAnimationFrame||((te=c.requestAnimationFrame)||function(t){var r,l=function(){clearTimeout(o),fe&&cancelAnimationFrame(r),setTimeout(t)},o=setTimeout(l,100);fe&&(r=requestAnimationFrame(l))})(me)),g=null},c.__c=function(e,_){_.some(function(t){try{t.__h.forEach(M),t.__h=t.__h.filter(function(r){return!r.__||I(r)})}catch(r){_.some(function(l){l.__h&&(l.__h=[])}),_=[],c.__e(r,t.__v)}}),le&&le(e,_)},c.unmount=function(e){ie&&ie(e);var _=e.__c;if(_&&_.__H)try{_.__H.__.forEach(M)}catch(t){c.__e(t,_.__v)}};var fe=typeof requestAnimationFrame=="function";function M(e){var _=g;typeof e.__c=="function"&&e.__c(),g=_}function I(e){var _=g;e.__c=e.__(),g=_}function ge(e,_){return!e||e.length!==_.length||_.some(function(t,r){return t!==e[r]})}function ue(e,_){return typeof _=="function"?_(e):_}var ke=0;function He(e,_,t,r,l){var o,f,p={};for(f in _)f=="ref"?o=_[f]:p[f]=_[f];var a={type:e,props:p,key:t,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--ke,__source:r,__self:l};if(typeof e=="function"&&(o=e.defaultProps))for(f in o)p[f]===void 0&&(p[f]=o[f]);return c.vnode&&c.vnode(a),a}async function Se(e,_,t){var r,l;const o=document.querySelectorAll(`astro-root[uid="${e}"]`),f=(l=(r=o[0].querySelector("astro-fragment"))==null?void 0:r.innerHTML)!=null?l:null,p=async()=>{const h=await t();for(const n of o)h(n,f)},a=new IntersectionObserver(h=>{for(const n of h)if(!!n.isIntersecting){a.disconnect(),p();break}});for(const h of o)for(let n=0;n<h.children.length;n++){const d=h.children[n];a.observe(d)}}export{xe as F,be as S,T as d,He as e,$e as l,Se as o,ae as v};