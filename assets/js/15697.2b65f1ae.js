"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[15697],{50456:(t,e,n)=>{n.d(e,{Z:()=>T});var o=n(83117),i=n(80102),r=n(67294),s=n(64560),a=n(2734),c=n(58974),u=n(37292),f=n(85893);const h=["initialWidth","width"],l=["xs","sm","md","lg","xl"],d=(t,e,n=!0)=>n?l.indexOf(t)<=l.indexOf(e):l.indexOf(t)<l.indexOf(e),p=(t,e,n=!1)=>n?l.indexOf(e)<=l.indexOf(t):l.indexOf(e)<l.indexOf(t);const v=((t={})=>e=>{const{withTheme:n=!1,noSSR:l=!1,initialWidth:d}=t;return function(t){const p=(0,a.Z)(),v=t.theme||p,m=(0,s.Z)({theme:v,name:"MuiWithWidth",props:t}),{initialWidth:y,width:b}=m,w=(0,i.Z)(m,h),[_,g]=r.useState(!1);(0,c.Z)((()=>{g(!0)}),[]);const k=v.breakpoints.keys.slice().reverse().reduce(((t,e)=>{const n=(0,u.Z)(v.breakpoints.up(e));return!t&&n?e:t}),null),x=(0,o.Z)({width:b||(_||l?k:void 0)||y||d},n?{theme:v}:{},w);return void 0===x.width?null:(0,f.jsx)(e,(0,o.Z)({},x))}})()((function(t){const{children:e,only:n,width:o}=t,i=(0,a.Z)();let s=!0;if(n)if(Array.isArray(n))for(let r=0;r<n.length;r+=1){if(o===n[r]){s=!1;break}}else n&&o===n&&(s=!1);if(s)for(let r=0;r<i.breakpoints.keys.length;r+=1){const e=i.breakpoints.keys[r],n=t[`${e}Up`],a=t[`${e}Down`];if(n&&d(e,o)||a&&p(e,o)){s=!1;break}}return s?(0,f.jsx)(r.Fragment,{children:e}):null}));var m=n(63961),y=n(94780),b=n(98216),w=n(90948),_=n(1588),g=n(34867);function k(t){return(0,g.ZP)("PrivateHiddenCss",t)}(0,_.Z)("PrivateHiddenCss",["root","xlDown","xlUp","onlyXl","lgDown","lgUp","onlyLg","mdDown","mdUp","onlyMd","smDown","smUp","onlySm","xsDown","xsUp","onlyXs"]);const x=["children","className","only"],E=(0,w.ZP)("div",{name:"PrivateHiddenCss",slot:"Root"})((({theme:t,ownerState:e})=>{const n={display:"none"};return(0,o.Z)({},e.breakpoints.map((({breakpoint:e,dir:o})=>"only"===o?{[t.breakpoints.only(e)]:n}:"up"===o?{[t.breakpoints.up(e)]:n}:{[t.breakpoints.down(e)]:n})).reduce(((t,e)=>(Object.keys(e).forEach((n=>{t[n]=e[n]})),t)),{}))}));const O=function(t){const{children:e,className:n,only:r}=t,s=(0,i.Z)(t,x),c=(0,a.Z)(),u=[];for(let o=0;o<c.breakpoints.keys.length;o+=1){const t=c.breakpoints.keys[o],e=s[`${t}Up`],n=s[`${t}Down`];e&&u.push({breakpoint:t,dir:"up"}),n&&u.push({breakpoint:t,dir:"down"})}if(r){(Array.isArray(r)?r:[r]).forEach((t=>{u.push({breakpoint:t,dir:"only"})}))}const h=(0,o.Z)({},t,{breakpoints:u}),l=(t=>{const{classes:e,breakpoints:n}=t,o={root:["root",...n.map((({breakpoint:t,dir:e})=>"only"===e?`${e}${(0,b.Z)(t)}`:`${t}${(0,b.Z)(e)}`))]};return(0,y.Z)(o,k,e)})(h);return(0,f.jsx)(E,{className:(0,m.Z)(l.root,n),ownerState:h,children:e})},D=["implementation","lgDown","lgUp","mdDown","mdUp","smDown","smUp","xlDown","xlUp","xsDown","xsUp"];const T=function(t){const{implementation:e="js",lgDown:n=!1,lgUp:r=!1,mdDown:s=!1,mdUp:a=!1,smDown:c=!1,smUp:u=!1,xlDown:h=!1,xlUp:l=!1,xsDown:d=!1,xsUp:p=!1}=t,m=(0,i.Z)(t,D);return"js"===e?(0,f.jsx)(v,(0,o.Z)({lgDown:n,lgUp:r,mdDown:s,mdUp:a,smDown:c,smUp:u,xlDown:h,xlUp:l,xsDown:d,xsUp:p},m)):(0,f.jsx)(O,(0,o.Z)({lgDown:n,lgUp:r,mdDown:s,mdUp:a,smDown:c,smUp:u,xlDown:h,xlUp:l,xsDown:d,xsUp:p},m))}},64434:(t,e,n)=>{n.d(e,{Z:()=>S});var o=n(67294),i=function(){if("undefined"!=typeof Map)return Map;function t(t,e){var n=-1;return t.some((function(t,o){return t[0]===e&&(n=o,!0)})),n}return function(){function e(){this.__entries__=[]}return Object.defineProperty(e.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),e.prototype.get=function(e){var n=t(this.__entries__,e),o=this.__entries__[n];return o&&o[1]},e.prototype.set=function(e,n){var o=t(this.__entries__,e);~o?this.__entries__[o][1]=n:this.__entries__.push([e,n])},e.prototype.delete=function(e){var n=this.__entries__,o=t(n,e);~o&&n.splice(o,1)},e.prototype.has=function(e){return!!~t(this.__entries__,e)},e.prototype.clear=function(){this.__entries__.splice(0)},e.prototype.forEach=function(t,e){void 0===e&&(e=null);for(var n=0,o=this.__entries__;n<o.length;n++){var i=o[n];t.call(e,i[1],i[0])}},e}()}(),r="undefined"!=typeof window&&"undefined"!=typeof document&&window.document===document,s=void 0!==n.g&&n.g.Math===Math?n.g:"undefined"!=typeof self&&self.Math===Math?self:"undefined"!=typeof window&&window.Math===Math?window:Function("return this")(),a="function"==typeof requestAnimationFrame?requestAnimationFrame.bind(s):function(t){return setTimeout((function(){return t(Date.now())}),1e3/60)};var c=["top","right","bottom","left","width","height","size","weight"],u="undefined"!=typeof MutationObserver,f=function(){function t(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function(t,e){var n=!1,o=!1,i=0;function r(){n&&(n=!1,t()),o&&c()}function s(){a(r)}function c(){var t=Date.now();if(n){if(t-i<2)return;o=!0}else n=!0,o=!1,setTimeout(s,e);i=t}return c}(this.refresh.bind(this),20)}return t.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},t.prototype.removeObserver=function(t){var e=this.observers_,n=e.indexOf(t);~n&&e.splice(n,1),!e.length&&this.connected_&&this.disconnect_()},t.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},t.prototype.updateObservers_=function(){var t=this.observers_.filter((function(t){return t.gatherActive(),t.hasActive()}));return t.forEach((function(t){return t.broadcastActive()})),t.length>0},t.prototype.connect_=function(){r&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),u?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},t.prototype.disconnect_=function(){r&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},t.prototype.onTransitionEnd_=function(t){var e=t.propertyName,n=void 0===e?"":e;c.some((function(t){return!!~n.indexOf(t)}))&&this.refresh()},t.getInstance=function(){return this.instance_||(this.instance_=new t),this.instance_},t.instance_=null,t}(),h=function(t,e){for(var n=0,o=Object.keys(e);n<o.length;n++){var i=o[n];Object.defineProperty(t,i,{value:e[i],enumerable:!1,writable:!1,configurable:!0})}return t},l=function(t){return t&&t.ownerDocument&&t.ownerDocument.defaultView||s},d=w(0,0,0,0);function p(t){return parseFloat(t)||0}function v(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return e.reduce((function(e,n){return e+p(t["border-"+n+"-width"])}),0)}function m(t){var e=t.clientWidth,n=t.clientHeight;if(!e&&!n)return d;var o=l(t).getComputedStyle(t),i=function(t){for(var e={},n=0,o=["top","right","bottom","left"];n<o.length;n++){var i=o[n],r=t["padding-"+i];e[i]=p(r)}return e}(o),r=i.left+i.right,s=i.top+i.bottom,a=p(o.width),c=p(o.height);if("border-box"===o.boxSizing&&(Math.round(a+r)!==e&&(a-=v(o,"left","right")+r),Math.round(c+s)!==n&&(c-=v(o,"top","bottom")+s)),!function(t){return t===l(t).document.documentElement}(t)){var u=Math.round(a+r)-e,f=Math.round(c+s)-n;1!==Math.abs(u)&&(a-=u),1!==Math.abs(f)&&(c-=f)}return w(i.left,i.top,a,c)}var y="undefined"!=typeof SVGGraphicsElement?function(t){return t instanceof l(t).SVGGraphicsElement}:function(t){return t instanceof l(t).SVGElement&&"function"==typeof t.getBBox};function b(t){return r?y(t)?function(t){var e=t.getBBox();return w(0,0,e.width,e.height)}(t):m(t):d}function w(t,e,n,o){return{x:t,y:e,width:n,height:o}}var _=function(){function t(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=w(0,0,0,0),this.target=t}return t.prototype.isActive=function(){var t=b(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},t.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},t}(),g=function(t,e){var n,o,i,r,s,a,c,u=(o=(n=e).x,i=n.y,r=n.width,s=n.height,a="undefined"!=typeof DOMRectReadOnly?DOMRectReadOnly:Object,c=Object.create(a.prototype),h(c,{x:o,y:i,width:r,height:s,top:i,right:o+r,bottom:s+i,left:o}),c);h(this,{target:t,contentRect:u})},k=function(){function t(t,e,n){if(this.activeObservations_=[],this.observations_=new i,"function"!=typeof t)throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=e,this.callbackCtx_=n}return t.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof l(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)||(e.set(t,new _(t)),this.controller_.addObserver(this),this.controller_.refresh())}},t.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof l(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)&&(e.delete(t),e.size||this.controller_.removeObserver(this))}},t.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},t.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach((function(e){e.isActive()&&t.activeObservations_.push(e)}))},t.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,e=this.activeObservations_.map((function(t){return new g(t.target,t.broadcastRect())}));this.callback_.call(t,e,t),this.clearActive()}},t.prototype.clearActive=function(){this.activeObservations_.splice(0)},t.prototype.hasActive=function(){return this.activeObservations_.length>0},t}(),x="undefined"!=typeof WeakMap?new WeakMap:new i,E=function t(e){if(!(this instanceof t))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=f.getInstance(),o=new k(e,n,this);x.set(this,o)};["observe","unobserve","disconnect"].forEach((function(t){E.prototype[t]=function(){var e;return(e=x.get(this))[t].apply(e,arguments)}}));const O=void 0!==s.ResizeObserver?s.ResizeObserver:E,D=t=>{let e=t.parentNode;for(;e;){if("contents"!==getComputedStyle(e,null).getPropertyValue("display"))break;e=e.parentNode}return e||window};let T=null;"undefined"!=typeof CSS&&CSS.supports&&(CSS.supports("position","sticky")?T="sticky":CSS.supports("position","-webkit-sticky")&&(T="-webkit-sticky"));let M=!1;try{let t=Object.defineProperty({},"passive",{get(){M={passive:!0}}});window.addEventListener("testPassive",null,t),window.removeEventListener("testPassive",null,t)}catch(Z){}const U=(t,{offsetTop:e,offsetBottom:n,bottom:o})=>{const i=(t=>{let e=t;for(;e=e.parentElement;){const t=getComputedStyle(e,null).getPropertyValue("overflow-y");if(e===document.body)return window;if("auto"===t||"scroll"===t)return e}return window})(t);let r=i===window?window.scrollY:i.scrollTop;const s=[];let a,c,u,f,h,l,d;const p=()=>"relative"===a?c:"stickyTop"===a?Math.max(0,l+r-f+e):"stickyBottom"===a?Math.max(0,l+r+d-(f+u+n)):void 0,v=t=>{t+l+d>=f+u+c+n&&m("stickyBottom")},m=i=>{if(a=i,"relative"===i)if(t.style.position="relative",o){const e=Math.max(0,h-u-c);t.style.bottom=`${e}px`}else t.style.top=`${c}px`;else t.style.position=T,"stickyBottom"===i?o?t.style.bottom=`${n}px`:t.style.top=d-u-n+"px":o?t.style.bottom=d-u-n+"px":t.style.top=`${e}px`;c=p()},y=()=>{o?"stickyBottom"!==a&&m("stickyBottom"):"stickyTop"!==a&&m("stickyTop")},b=(t,e,n,o)=>{t.addEventListener(e,n,o),s.push((()=>t.removeEventListener(e,n)))},w=()=>{const t=i===window?window.scrollY:i.scrollTop;if(t===r)return;if(u+e+n<=d)return y(),void(r=t);const o=t-r;c=p(),o>0?"stickyTop"===a?t+l+e>f&&m(t+l+d<=f+u+c+n?"relative":"stickyBottom"):"relative"===a&&v(t):"stickyBottom"===a?l+t+d<f+h+n&&m(l+t+e>=f+c?"relative":"stickyTop"):"relative"===a&&l+t+e<f+c&&m("stickyTop"),r=t},_=()=>{d=window.innerHeight,l=0,w()},g=()=>{d=i.offsetHeight,l=i.firstChild.offsetParent===i?i.getBoundingClientRect().top:0,w()},k=()=>{const e=D(t),n=getComputedStyle(e,null),s=parseInt(n.getPropertyValue("padding-top"),10),c=s+parseInt(n.getPropertyValue("padding-bottom"),10);f=((t,e)=>{let n=t,o=0;e.firstChild&&e.firstChild.offsetParent!==e&&(o+=t.offsetTop-e.offsetTop,e=t.offsetParent,o+=-t.offsetTop);do{o+=n.offsetTop,n=n.offsetParent}while(n&&n!==e);return o})(e,i)+s+l;const u=h;h=e.getBoundingClientRect().height-c,"relative"===a&&(o?m("relative"):u>h&&v(r)),u!==h&&"relative"===a&&(r=Number.POSITIVE_INFINITY,w())},x=({initial:i}={})=>{const r=u;if(u=t.getBoundingClientRect().height,!i&&r!==u){if(u+e+n<=d)return a=void 0,void y();{const t=r-u,e=h-u,n=Math.min(e,p()+(o?t:0));c=Math.max(0,n),o&&"stickyBottom"===a||m("relative")}}},E=(t,e)=>{const n=new O(e);n.observe(t),s.push((()=>n.disconnect()))};return b(i,"scroll",w,M),b(i,"mousewheel",w,M),i===window?(b(window,"resize",_),_()):(E(i,g),g()),E(D(t),k),k(),E(t,x),x({initial:!0}),y(),()=>s.forEach((t=>t()))},S=({offsetTop:t,offsetBottom:e,bottom:n,children:i,className:r,style:s})=>{const a=(({offsetTop:t=0,offsetBottom:e=0,bottom:n=!1}={})=>{const[i,r]=(0,o.useState)(null),s=(0,o.useRef)({offsetTop:t,offsetBottom:e,bottom:n});return(0,o.useEffect)((()=>{s.current={offsetTop:t,offsetBottom:e,bottom:n}})),(0,o.useEffect)((()=>{if(i)return U(i,s.current)}),[i]),r})({offsetTop:t,offsetBottom:e,bottom:n});return o.createElement("div",{className:r,style:s,ref:a},i)}}}]);