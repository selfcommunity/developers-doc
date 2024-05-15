"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[97912],{10238:(t,e,n)=>{n.d(e,{$:()=>a});var o=n(83117),i=n(28442);function a(t,e,n){return void 0===t||(0,i.X)(t)?e:(0,o.Z)({},e,{ownerState:(0,o.Z)({},e.ownerState,n)})}},30437:(t,e,n)=>{function o(t,e=[]){if(void 0===t)return{};const n={};return Object.keys(t).filter((n=>n.match(/^on[A-Z]/)&&"function"==typeof t[n]&&!e.includes(n))).forEach((e=>{n[e]=t[e]})),n}n.d(e,{_:()=>o})},28442:(t,e,n)=>{function o(t){return"string"==typeof t}n.d(e,{X:()=>o})},5078:(t,e,n)=>{n.d(e,{L:()=>l});var o=n(83117);function i(t){var e,n,o="";if("string"==typeof t||"number"==typeof t)o+=t;else if("object"==typeof t)if(Array.isArray(t)){var a=t.length;for(e=0;e<a;e++)t[e]&&(n=i(t[e]))&&(o&&(o+=" "),o+=n)}else for(n in t)t[n]&&(o&&(o+=" "),o+=n);return o}const a=function(){for(var t,e,n=0,o="",a=arguments.length;n<a;n++)(t=arguments[n])&&(e=i(t))&&(o&&(o+=" "),o+=e);return o};var r=n(30437);function s(t){if(void 0===t)return{};const e={};return Object.keys(t).filter((e=>!(e.match(/^on[A-Z]/)&&"function"==typeof t[e]))).forEach((n=>{e[n]=t[n]})),e}function l(t){const{getSlotProps:e,additionalProps:n,externalSlotProps:i,externalForwardedProps:l,className:u}=t;if(!e){const t=a(null==n?void 0:n.className,u,null==l?void 0:l.className,null==i?void 0:i.className),e=(0,o.Z)({},null==n?void 0:n.style,null==l?void 0:l.style,null==i?void 0:i.style),r=(0,o.Z)({},n,l,i);return t.length>0&&(r.className=t),Object.keys(e).length>0&&(r.style=e),{props:r,internalRef:void 0}}const c=(0,r._)((0,o.Z)({},l,i)),p=s(i),d=s(l),v=e(c),f=a(null==v?void 0:v.className,null==n?void 0:n.className,u,null==l?void 0:l.className,null==i?void 0:i.className),h=(0,o.Z)({},null==v?void 0:v.style,null==n?void 0:n.style,null==l?void 0:l.style,null==i?void 0:i.style),m=(0,o.Z)({},v,n,d,p);return f.length>0&&(m.className=f),Object.keys(h).length>0&&(m.style=h),{props:m,internalRef:v.ref}}},71276:(t,e,n)=>{function o(t,e,n){return"function"==typeof t?t(e,n):t}n.d(e,{x:()=>o})},90629:(t,e,n)=>{n.d(e,{Z:()=>x});var o=n(80102),i=n(83117),a=n(67294),r=n(63961),s=n(58510),l=n(2101),u=n(90948);const c=t=>{let e;return e=t<1?5.11916*t**2:4.5*Math.log(t+1)+2,(e/100).toFixed(2)};var p=n(71657),d=n(1977),v=n(8027);function f(t){return(0,v.ZP)("MuiPaper",t)}(0,d.Z)("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);var h=n(85893);const m=["className","component","elevation","square","variant"],E=(0,u.ZP)("div",{name:"MuiPaper",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,e[n.variant],!n.square&&e.rounded,"elevation"===n.variant&&e[`elevation${n.elevation}`]]}})((({theme:t,ownerState:e})=>{var n;return(0,i.Z)({backgroundColor:(t.vars||t).palette.background.paper,color:(t.vars||t).palette.text.primary,transition:t.transitions.create("box-shadow")},!e.square&&{borderRadius:t.shape.borderRadius},"outlined"===e.variant&&{border:`1px solid ${(t.vars||t).palette.divider}`},"elevation"===e.variant&&(0,i.Z)({boxShadow:(t.vars||t).shadows[e.elevation]},!t.vars&&"dark"===t.palette.mode&&{backgroundImage:`linear-gradient(${(0,l.Fq)("#fff",c(e.elevation))}, ${(0,l.Fq)("#fff",c(e.elevation))})`},t.vars&&{backgroundImage:null==(n=t.vars.overlays)?void 0:n[e.elevation]}))})),x=a.forwardRef((function(t,e){const n=(0,p.Z)({props:t,name:"MuiPaper"}),{className:a,component:l="div",elevation:u=1,square:c=!1,variant:d="elevation"}=n,v=(0,o.Z)(n,m),x=(0,i.Z)({},n,{component:l,elevation:u,square:c,variant:d}),b=(t=>{const{square:e,elevation:n,variant:o,classes:i}=t,a={root:["root",o,!e&&"rounded","elevation"===o&&`elevation${n}`]};return(0,s.Z)(a,f,i)})(x);return(0,h.jsx)(E,(0,i.Z)({as:l,ownerState:x,className:(0,r.Z)(b.root,a),ref:e},v))}))},2734:(t,e,n)=>{n.d(e,{Z:()=>r});n(67294);var o=n(96682),i=n(90247),a=n(10606);function r(){const t=(0,o.Z)(i.Z);return t[a.Z]||t}},30577:(t,e,n)=>{n.d(e,{C:()=>i,n:()=>o});const o=t=>t.scrollTop;function i(t,e){var n,o;const{timeout:i,easing:a,style:r={}}=t;return{duration:null!=(n=r.transitionDuration)?n:"number"==typeof i?i:i[e.mode]||0,easing:null!=(o=r.transitionTimingFunction)?o:"object"==typeof a?a[e.mode]:a,delay:r.transitionDelay}}},98885:(t,e,n)=>{n.d(e,{ZP:()=>E});var o=n(80102),i=n(21073),a=n(67294),r=n(73935);const s=!1;var l=n(220),u=n(59391),c="unmounted",p="exited",d="entering",v="entered",f="exiting",h=function(t){function e(e,n){var o;o=t.call(this,e,n)||this;var i,a=n&&!n.isMounting?e.enter:e.appear;return o.appearStatus=null,e.in?a?(i=p,o.appearStatus=d):i=v:i=e.unmountOnExit||e.mountOnEnter?c:p,o.state={status:i},o.nextCallback=null,o}(0,i.Z)(e,t),e.getDerivedStateFromProps=function(t,e){return t.in&&e.status===c?{status:p}:null};var n=e.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(t){var e=null;if(t!==this.props){var n=this.state.status;this.props.in?n!==d&&n!==v&&(e=d):n!==d&&n!==v||(e=f)}this.updateStatus(!1,e)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var t,e,n,o=this.props.timeout;return t=e=n=o,null!=o&&"number"!=typeof o&&(t=o.exit,e=o.enter,n=void 0!==o.appear?o.appear:e),{exit:t,enter:e,appear:n}},n.updateStatus=function(t,e){if(void 0===t&&(t=!1),null!==e)if(this.cancelNextCallback(),e===d){if(this.props.unmountOnExit||this.props.mountOnEnter){var n=this.props.nodeRef?this.props.nodeRef.current:r.findDOMNode(this);n&&(0,u.Q)(n)}this.performEnter(t)}else this.performExit();else this.props.unmountOnExit&&this.state.status===p&&this.setState({status:c})},n.performEnter=function(t){var e=this,n=this.props.enter,o=this.context?this.context.isMounting:t,i=this.props.nodeRef?[o]:[r.findDOMNode(this),o],a=i[0],l=i[1],u=this.getTimeouts(),c=o?u.appear:u.enter;!t&&!n||s?this.safeSetState({status:v},(function(){e.props.onEntered(a)})):(this.props.onEnter(a,l),this.safeSetState({status:d},(function(){e.props.onEntering(a,l),e.onTransitionEnd(c,(function(){e.safeSetState({status:v},(function(){e.props.onEntered(a,l)}))}))})))},n.performExit=function(){var t=this,e=this.props.exit,n=this.getTimeouts(),o=this.props.nodeRef?void 0:r.findDOMNode(this);e&&!s?(this.props.onExit(o),this.safeSetState({status:f},(function(){t.props.onExiting(o),t.onTransitionEnd(n.exit,(function(){t.safeSetState({status:p},(function(){t.props.onExited(o)}))}))}))):this.safeSetState({status:p},(function(){t.props.onExited(o)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(t,e){e=this.setNextCallback(e),this.setState(t,e)},n.setNextCallback=function(t){var e=this,n=!0;return this.nextCallback=function(o){n&&(n=!1,e.nextCallback=null,t(o))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(t,e){this.setNextCallback(e);var n=this.props.nodeRef?this.props.nodeRef.current:r.findDOMNode(this),o=null==t&&!this.props.addEndListener;if(n&&!o){if(this.props.addEndListener){var i=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],a=i[0],s=i[1];this.props.addEndListener(a,s)}null!=t&&setTimeout(this.nextCallback,t)}else setTimeout(this.nextCallback,0)},n.render=function(){var t=this.state.status;if(t===c)return null;var e=this.props,n=e.children,i=(e.in,e.mountOnEnter,e.unmountOnExit,e.appear,e.enter,e.exit,e.timeout,e.addEndListener,e.onEnter,e.onEntering,e.onEntered,e.onExit,e.onExiting,e.onExited,e.nodeRef,(0,o.Z)(e,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return a.createElement(l.Z.Provider,{value:null},"function"==typeof n?n(t,i):a.cloneElement(a.Children.only(n),i))},e}(a.Component);function m(){}h.contextType=l.Z,h.propTypes={},h.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:m,onEntering:m,onEntered:m,onExit:m,onExiting:m,onExited:m},h.UNMOUNTED=c,h.EXITED=p,h.ENTERING=d,h.ENTERED=v,h.EXITING=f;const E=h},59391:(t,e,n)=>{n.d(e,{Q:()=>o});var o=function(t){return t.scrollTop}}}]);