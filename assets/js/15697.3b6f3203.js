"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[15697],{50456:(t,e,n)=>{n.d(e,{Z:()=>T});var o=n(83117),i=n(80102),r=n(67294),s=n(64560),c=n(2734),a=n(58974),u=n(37292),h=n(85893);const f=["initialWidth","width"],l=["xs","sm","md","lg","xl"],d=(t,e,n=!0)=>n?l.indexOf(t)<=l.indexOf(e):l.indexOf(t)<l.indexOf(e),p=(t,e,n=!1)=>n?l.indexOf(e)<=l.indexOf(t):l.indexOf(e)<l.indexOf(t);const v=((t={})=>e=>{const{withTheme:n=!1,noSSR:l=!1,initialWidth:d}=t;return function(t){const p=(0,c.Z)(),v=t.theme||p,m=(0,s.Z)({theme:v,name:"MuiWithWidth",props:t}),{initialWidth:y,width:b}=m,w=(0,i.Z)(m,f),[_,g]=r.useState(!1);(0,a.Z)((()=>{g(!0)}),[]);const k=v.breakpoints.keys.slice().reverse().reduce(((t,e)=>{const n=(0,u.Z)(v.breakpoints.up(e));return!t&&n?e:t}),null),x=(0,o.Z)({width:b||(_||l?k:void 0)||y||d},n?{theme:v}:{},w);return void 0===x.width?null:(0,h.jsx)(e,(0,o.Z)({},x))}})()((function(t){const{children:e,only:n,width:o}=t,i=(0,c.Z)();let s=!0;if(n)if(Array.isArray(n))for(let r=0;r<n.length;r+=1){if(o===n[r]){s=!1;break}}else n&&o===n&&(s=!1);if(s)for(let r=0;r<i.breakpoints.keys.length;r+=1){const e=i.breakpoints.keys[r],n=t[`${e}Up`],c=t[`${e}Down`];if(n&&d(e,o)||c&&p(e,o)){s=!1;break}}return s?(0,h.jsx)(r.Fragment,{children:e}):null}));var m=n(63961),y=n(94780),b=n(98216),w=n(90948),_=n(1588),g=n(34867);function k(t){return(0,g.ZP)("PrivateHiddenCss",t)}(0,_.Z)("PrivateHiddenCss",["root","xlDown","xlUp","onlyXl","lgDown","lgUp","onlyLg","mdDown","mdUp","onlyMd","smDown","smUp","onlySm","xsDown","xsUp","onlyXs"]);const x=["children","className","only"],O=(0,w.ZP)("div",{name:"PrivateHiddenCss",slot:"Root"})((({theme:t,ownerState:e})=>{const n={display:"none"};return(0,o.Z)({},e.breakpoints.map((({breakpoint:e,dir:o})=>"only"===o?{[t.breakpoints.only(e)]:n}:"up"===o?{[t.breakpoints.up(e)]:n}:{[t.breakpoints.down(e)]:n})).reduce(((t,e)=>(Object.keys(e).forEach((n=>{t[n]=e[n]})),t)),{}))}));const E=function(t){const{children:e,className:n,only:r}=t,s=(0,i.Z)(t,x),a=(0,c.Z)(),u=[];for(let o=0;o<a.breakpoints.keys.length;o+=1){const t=a.breakpoints.keys[o],e=s[`${t}Up`],n=s[`${t}Down`];e&&u.push({breakpoint:t,dir:"up"}),n&&u.push({breakpoint:t,dir:"down"})}if(r){(Array.isArray(r)?r:[r]).forEach((t=>{u.push({breakpoint:t,dir:"only"})}))}const f=(0,o.Z)({},t,{breakpoints:u}),l=(t=>{const{classes:e,breakpoints:n}=t,o={root:["root",...n.map((({breakpoint:t,dir:e})=>"only"===e?`${e}${(0,b.Z)(t)}`:`${t}${(0,b.Z)(e)}`))]};return(0,y.Z)(o,k,e)})(f);return(0,h.jsx)(O,{className:(0,m.Z)(l.root,n),ownerState:f,children:e})},D=["implementation","lgDown","lgUp","mdDown","mdUp","smDown","smUp","xlDown","xlUp","xsDown","xsUp"];const T=function(t){const{implementation:e="js",lgDown:n=!1,lgUp:r=!1,mdDown:s=!1,mdUp:c=!1,smDown:a=!1,smUp:u=!1,xlDown:f=!1,xlUp:l=!1,xsDown:d=!1,xsUp:p=!1}=t,m=(0,i.Z)(t,D);return"js"===e?(0,h.jsx)(v,(0,o.Z)({lgDown:n,lgUp:r,mdDown:s,mdUp:c,smDown:a,smUp:u,xlDown:f,xlUp:l,xsDown:d,xsUp:p},m)):(0,h.jsx)(E,(0,o.Z)({lgDown:n,lgUp:r,mdDown:s,mdUp:c,smDown:a,smUp:u,xlDown:f,xlUp:l,xsDown:d,xsUp:p},m))}},64434:(t,e,n)=>{n.d(e,{Z:()=>Z});var o=n(85893),i=n(67294),r=function(){if("undefined"!=typeof Map)return Map;function t(t,e){var n=-1;return t.some((function(t,o){return t[0]===e&&(n=o,!0)})),n}return function(){function e(){this.__entries__=[]}return Object.defineProperty(e.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),e.prototype.get=function(e){var n=t(this.__entries__,e),o=this.__entries__[n];return o&&o[1]},e.prototype.set=function(e,n){var o=t(this.__entries__,e);~o?this.__entries__[o][1]=n:this.__entries__.push([e,n])},e.prototype.delete=function(e){var n=this.__entries__,o=t(n,e);~o&&n.splice(o,1)},e.prototype.has=function(e){return!!~t(this.__entries__,e)},e.prototype.clear=function(){this.__entries__.splice(0)},e.prototype.forEach=function(t,e){void 0===e&&(e=null);for(var n=0,o=this.__entries__;n<o.length;n++){var i=o[n];t.call(e,i[1],i[0])}},e}()}(),s="undefined"!=typeof window&&"undefined"!=typeof document&&window.document===document,c=void 0!==n.g&&n.g.Math===Math?n.g:"undefined"!=typeof self&&self.Math===Math?self:"undefined"!=typeof window&&window.Math===Math?window:Function("return this")(),a="function"==typeof requestAnimationFrame?requestAnimationFrame.bind(c):function(t){return setTimeout((function(){return t(Date.now())}),1e3/60)};var u=["top","right","bottom","left","width","height","size","weight"],h="undefined"!=typeof MutationObserver,f=function(){function t(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function(t,e){var n=!1,o=!1,i=0;function r(){n&&(n=!1,t()),o&&c()}function s(){a(r)}function c(){var t=Date.now();if(n){if(t-i<2)return;o=!0}else n=!0,o=!1,setTimeout(s,e);i=t}return c}(this.refresh.bind(this),20)}return t.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},t.prototype.removeObserver=function(t){var e=this.observers_,n=e.indexOf(t);~n&&e.splice(n,1),!e.length&&this.connected_&&this.disconnect_()},t.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},t.prototype.updateObservers_=function(){var t=this.observers_.filter((function(t){return t.gatherActive(),t.hasActive()}));return t.forEach((function(t){return t.broadcastActive()})),t.length>0},t.prototype.connect_=function(){s&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),h?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},t.prototype.disconnect_=function(){s&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},t.prototype.onTransitionEnd_=function(t){var e=t.propertyName,n=void 0===e?"":e;u.some((function(t){return!!~n.indexOf(t)}))&&this.refresh()},t.getInstance=function(){return this.instance_||(this.instance_=new t),this.instance_},t.instance_=null,t}(),l=function(t,e){for(var n=0,o=Object.keys(e);n<o.length;n++){var i=o[n];Object.defineProperty(t,i,{value:e[i],enumerable:!1,writable:!1,configurable:!0})}return t},d=function(t){return t&&t.ownerDocument&&t.ownerDocument.defaultView||c},p=_(0,0,0,0);function v(t){return parseFloat(t)||0}function m(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return e.reduce((function(e,n){return e+v(t["border-"+n+"-width"])}),0)}function y(t){var e=t.clientWidth,n=t.clientHeight;if(!e&&!n)return p;var o=d(t).getComputedStyle(t),i=function(t){for(var e={},n=0,o=["top","right","bottom","left"];n<o.length;n++){var i=o[n],r=t["padding-"+i];e[i]=v(r)}return e}(o),r=i.left+i.right,s=i.top+i.bottom,c=v(o.width),a=v(o.height);if("border-box"===o.boxSizing&&(Math.round(c+r)!==e&&(c-=m(o,"left","right")+r),Math.round(a+s)!==n&&(a-=m(o,"top","bottom")+s)),!function(t){return t===d(t).document.documentElement}(t)){var u=Math.round(c+r)-e,h=Math.round(a+s)-n;1!==Math.abs(u)&&(c-=u),1!==Math.abs(h)&&(a-=h)}return _(i.left,i.top,c,a)}var b="undefined"!=typeof SVGGraphicsElement?function(t){return t instanceof d(t).SVGGraphicsElement}:function(t){return t instanceof d(t).SVGElement&&"function"==typeof t.getBBox};function w(t){return s?b(t)?function(t){var e=t.getBBox();return _(0,0,e.width,e.height)}(t):y(t):p}function _(t,e,n,o){return{x:t,y:e,width:n,height:o}}var g=function(){function t(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=_(0,0,0,0),this.target=t}return t.prototype.isActive=function(){var t=w(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},t.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},t}(),k=function(t,e){var n,o,i,r,s,c,a,u=(o=(n=e).x,i=n.y,r=n.width,s=n.height,c="undefined"!=typeof DOMRectReadOnly?DOMRectReadOnly:Object,a=Object.create(c.prototype),l(a,{x:o,y:i,width:r,height:s,top:i,right:o+r,bottom:s+i,left:o}),a);l(this,{target:t,contentRect:u})},x=function(){function t(t,e,n){if(this.activeObservations_=[],this.observations_=new r,"function"!=typeof t)throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=e,this.callbackCtx_=n}return t.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof d(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)||(e.set(t,new g(t)),this.controller_.addObserver(this),this.controller_.refresh())}},t.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof d(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)&&(e.delete(t),e.size||this.controller_.removeObserver(this))}},t.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},t.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach((function(e){e.isActive()&&t.activeObservations_.push(e)}))},t.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,e=this.activeObservations_.map((function(t){return new k(t.target,t.broadcastRect())}));this.callback_.call(t,e,t),this.clearActive()}},t.prototype.clearActive=function(){this.activeObservations_.splice(0)},t.prototype.hasActive=function(){return this.activeObservations_.length>0},t}(),O="undefined"!=typeof WeakMap?new WeakMap:new r,E=function t(e){if(!(this instanceof t))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=f.getInstance(),o=new x(e,n,this);O.set(this,o)};["observe","unobserve","disconnect"].forEach((function(t){E.prototype[t]=function(){var e;return(e=O.get(this))[t].apply(e,arguments)}}));const D=void 0!==c.ResizeObserver?c.ResizeObserver:E,T=t=>{let e=t.parentNode;for(;e;){if("contents"!==getComputedStyle(e,null).getPropertyValue("display"))break;e=e.parentNode}return e||window};let M=null;"undefined"!=typeof CSS&&CSS.supports&&(CSS.supports("position","sticky")?M="sticky":CSS.supports("position","-webkit-sticky")&&(M="-webkit-sticky"));let U=!1;try{let t=Object.defineProperty({},"passive",{get(){U={passive:!0}}});window.addEventListener("testPassive",null,t),window.removeEventListener("testPassive",null,t)}catch(A){}const S=(t,{offsetTop:e,offsetBottom:n,bottom:o})=>{const i=(t=>{let e=t;for(;e=e.parentElement;){const t=getComputedStyle(e,null).getPropertyValue("overflow-y");if(e===document.body)return window;if("auto"===t||"scroll"===t)return e}return window})(t);let r=i===window?window.scrollY:i.scrollTop;const s=[];let c,a,u,h,f,l,d;const p=()=>"relative"===c?a:"stickyTop"===c?Math.max(0,l+r-h+e):"stickyBottom"===c?Math.max(0,l+r+d-(h+u+n)):void 0,v=t=>{t+l+d>=h+u+a+n&&m("stickyBottom")},m=i=>{if(c=i,"relative"===i)if(t.style.position="relative",o){const e=Math.max(0,f-u-a);t.style.bottom=`${e}px`}else t.style.top=`${a}px`;else t.style.position=M,"stickyBottom"===i?o?t.style.bottom=`${n}px`:t.style.top=d-u-n+"px":o?t.style.bottom=d-u-n+"px":t.style.top=`${e}px`;a=p()},y=()=>{o?"stickyBottom"!==c&&m("stickyBottom"):"stickyTop"!==c&&m("stickyTop")},b=(t,e,n,o)=>{t.addEventListener(e,n,o),s.push((()=>t.removeEventListener(e,n)))},w=()=>{const t=i===window?window.scrollY:i.scrollTop;if(t===r)return;if(u+e+n<=d)return y(),void(r=t);const o=t-r;a=p(),o>0?"stickyTop"===c?t+l+e>h&&m(t+l+d<=h+u+a+n?"relative":"stickyBottom"):"relative"===c&&v(t):"stickyBottom"===c?l+t+d<h+f+n&&m(l+t+e>=h+a?"relative":"stickyTop"):"relative"===c&&l+t+e<h+a&&m("stickyTop"),r=t},_=()=>{d=window.innerHeight,l=0,w()},g=()=>{d=i.offsetHeight,l=i.firstChild.offsetParent===i?i.getBoundingClientRect().top:0,w()},k=()=>{const e=T(t),n=getComputedStyle(e,null),s=parseInt(n.getPropertyValue("padding-top"),10),a=s+parseInt(n.getPropertyValue("padding-bottom"),10);h=((t,e)=>{let n=t,o=0;e.firstChild&&e.firstChild.offsetParent!==e&&(o+=t.offsetTop-e.offsetTop,e=t.offsetParent,o+=-t.offsetTop);do{o+=n.offsetTop,n=n.offsetParent}while(n&&n!==e);return o})(e,i)+s+l;const u=f;f=e.getBoundingClientRect().height-a,"relative"===c&&(o?m("relative"):u>f&&v(r)),u!==f&&"relative"===c&&(r=Number.POSITIVE_INFINITY,w())},x=({initial:i}={})=>{const r=u;if(u=t.getBoundingClientRect().height,!i&&r!==u){if(u+e+n<=d)return c=void 0,void y();{const t=r-u,e=f-u,n=Math.min(e,p()+(o?t:0));a=Math.max(0,n),o&&"stickyBottom"===c||m("relative")}}},O=(t,e)=>{const n=new D(e);n.observe(t),s.push((()=>n.disconnect()))};return b(i,"scroll",w,U),b(i,"mousewheel",w,U),i===window?(b(window,"resize",_),_()):(O(i,g),g()),O(T(t),k),k(),O(t,x),x({initial:!0}),y(),()=>s.forEach((t=>t()))},Z=({offsetTop:t,offsetBottom:e,bottom:n,children:r,className:s,style:c})=>{const a=(({offsetTop:t=0,offsetBottom:e=0,bottom:n=!1}={})=>{const[o,r]=(0,i.useState)(null),s=(0,i.useRef)({offsetTop:t,offsetBottom:e,bottom:n});return(0,i.useEffect)((()=>{s.current={offsetTop:t,offsetBottom:e,bottom:n}})),(0,i.useEffect)((()=>{if(o)return S(o,s.current)}),[o]),r})({offsetTop:t,offsetBottom:e,bottom:n});return(0,o.jsx)("div",Object.assign({className:s,style:c,ref:a},{children:r}))}}}]);