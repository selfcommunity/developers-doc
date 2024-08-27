/*! For license information please see 51697.9d227e90.js.LICENSE.txt */
"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[51697],{66090:(e,t,o)=>{o.d(t,{Z:()=>S});var n=o(80102),r=o(83117),a=o(67294),i=o(98216),s=o(27909);var l=o(90948),c=o(28628),d=o(25662),u=o(98363),m=o(98456),f=o(35971),p=o(34867);function v(e){return(0,p.ZP)("MuiLoadingButton",e)}const g=(0,o(1588).Z)("MuiLoadingButton",["root","loading","loadingIndicator","loadingIndicatorCenter","loadingIndicatorStart","loadingIndicatorEnd","endIconLoadingEnd","startIconLoadingStart"]);var h=o(85893);const Z=["children","disabled","id","loading","loadingIndicator","loadingPosition","variant"],b=e=>{const{loading:t,loadingPosition:o,classes:n}=e,a=function(e,t,o){const n={};return Object.keys(e).forEach((r=>{n[r]=e[r].reduce(((e,n)=>{if(n){const r=t(n);""!==r&&e.push(r),o&&o[n]&&e.push(o[n])}return e}),[]).join(" ")})),n}({root:["root",t&&"loading"],startIcon:[t&&`startIconLoading${(0,i.Z)(o)}`],endIcon:[t&&`endIconLoading${(0,i.Z)(o)}`],loadingIndicator:["loadingIndicator",t&&`loadingIndicator${(0,i.Z)(o)}`]},v,n);return(0,r.Z)({},n,a)},E=(0,l.ZP)(d.Z,{shouldForwardProp:e=>(e=>"ownerState"!==e&&"theme"!==e&&"sx"!==e&&"as"!==e&&"classes"!==e)(e)||"classes"===e,name:"MuiLoadingButton",slot:"Root",overridesResolver:(e,t)=>[t.root,t.startIconLoadingStart&&{[`& .${g.startIconLoadingStart}`]:t.startIconLoadingStart},t.endIconLoadingEnd&&{[`& .${g.endIconLoadingEnd}`]:t.endIconLoadingEnd}]})((({ownerState:e,theme:t})=>(0,r.Z)({[`& .${g.startIconLoadingStart}, & .${g.endIconLoadingEnd}`]:{transition:t.transitions.create(["opacity"],{duration:t.transitions.duration.short}),opacity:0}},"center"===e.loadingPosition&&{transition:t.transitions.create(["background-color","box-shadow","border-color"],{duration:t.transitions.duration.short}),[`&.${g.loading}`]:{color:"transparent"}},"start"===e.loadingPosition&&e.fullWidth&&{[`& .${g.startIconLoadingStart}, & .${g.endIconLoadingEnd}`]:{transition:t.transitions.create(["opacity"],{duration:t.transitions.duration.short}),opacity:0,marginRight:-8}},"end"===e.loadingPosition&&e.fullWidth&&{[`& .${g.startIconLoadingStart}, & .${g.endIconLoadingEnd}`]:{transition:t.transitions.create(["opacity"],{duration:t.transitions.duration.short}),opacity:0,marginLeft:-8}}))),y=(0,l.ZP)("span",{name:"MuiLoadingButton",slot:"LoadingIndicator",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.loadingIndicator,t[`loadingIndicator${(0,i.Z)(o.loadingPosition)}`]]}})((({theme:e,ownerState:t})=>(0,r.Z)({position:"absolute",visibility:"visible",display:"flex"},"start"===t.loadingPosition&&("outlined"===t.variant||"contained"===t.variant)&&{left:"small"===t.size?10:14},"start"===t.loadingPosition&&"text"===t.variant&&{left:6},"center"===t.loadingPosition&&{left:"50%",transform:"translate(-50%)",color:(e.vars||e).palette.action.disabled},"end"===t.loadingPosition&&("outlined"===t.variant||"contained"===t.variant)&&{right:"small"===t.size?10:14},"end"===t.loadingPosition&&"text"===t.variant&&{right:6},"start"===t.loadingPosition&&t.fullWidth&&{position:"relative",left:-10},"end"===t.loadingPosition&&t.fullWidth&&{position:"relative",right:-10}))),S=a.forwardRef((function(e,t){const o=a.useContext(u.Z),i=(0,f.Z)(o,e),l=(0,c.i)({props:i,name:"MuiLoadingButton"}),{children:d,disabled:p=!1,id:v,loading:g=!1,loadingIndicator:S,loadingPosition:N="center",variant:P="text"}=l,I=(0,n.Z)(l,Z),O=(0,s.Z)(v),T=null!=S?S:(0,h.jsx)(m.Z,{"aria-labelledby":O,color:"inherit",size:16}),_=(0,r.Z)({},l,{disabled:p,loading:g,loadingIndicator:T,loadingPosition:N,variant:P}),C=b(_),k=g?(0,h.jsx)(y,{className:C.loadingIndicator,ownerState:_,children:T}):null;return(0,h.jsxs)(E,(0,r.Z)({disabled:p||g,id:O,ref:t},I,{variant:P,classes:C,ownerState:_,children:["end"===_.loadingPosition?d:k,"end"===_.loadingPosition?k:d]}))}))},87952:(e,t,o)=>{o.d(t,{Z:()=>b});var n=o(80102),r=o(83117),a=o(67294),i=o(63961),s=o(94780),l=o(90948),c=o(28628),d=o(88169),u=o(85893);const m=(0,d.Z)((0,u.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");var f=o(54801),p=o(80560);const v=["alt","children","className","component","slots","slotProps","imgProps","sizes","src","srcSet","variant"],g=(0,l.ZP)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[o.variant],o.colorDefault&&t.colorDefault]}})((({theme:e})=>({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none",variants:[{props:{variant:"rounded"},style:{borderRadius:(e.vars||e).shape.borderRadius}},{props:{variant:"square"},style:{borderRadius:0}},{props:{colorDefault:!0},style:(0,r.Z)({color:(e.vars||e).palette.background.default},e.vars?{backgroundColor:e.vars.palette.Avatar.defaultBg}:(0,r.Z)({backgroundColor:e.palette.grey[400]},e.applyStyles("dark",{backgroundColor:e.palette.grey[600]})))}]}))),h=(0,l.ZP)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(e,t)=>t.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),Z=(0,l.ZP)(m,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(e,t)=>t.fallback})({width:"75%",height:"75%"});const b=a.forwardRef((function(e,t){const o=(0,c.i)({props:e,name:"MuiAvatar"}),{alt:l,children:d,className:m,component:b="div",slots:E={},slotProps:y={},imgProps:S,sizes:N,src:P,srcSet:I,variant:O="circular"}=o,T=(0,n.Z)(o,v);let _=null;const C=function({crossOrigin:e,referrerPolicy:t,src:o,srcSet:n}){const[r,i]=a.useState(!1);return a.useEffect((()=>{if(!o&&!n)return;i(!1);let r=!0;const a=new Image;return a.onload=()=>{r&&i("loaded")},a.onerror=()=>{r&&i("error")},a.crossOrigin=e,a.referrerPolicy=t,a.src=o,n&&(a.srcset=n),()=>{r=!1}}),[e,t,o,n]),r}((0,r.Z)({},S,{src:P,srcSet:I})),k=P||I,L=k&&"error"!==C,R=(0,r.Z)({},o,{colorDefault:!L,component:b,variant:O}),M=(e=>{const{classes:t,variant:o,colorDefault:n}=e,r={root:["root",o,n&&"colorDefault"],img:["img"],fallback:["fallback"]};return(0,s.Z)(r,f.$,t)})(R),[w,x]=(0,p.Z)("img",{className:M.img,elementType:h,externalForwardedProps:{slots:E,slotProps:{img:(0,r.Z)({},S,y.img)}},additionalProps:{alt:l,src:P,srcSet:I,sizes:N},ownerState:R});return _=L?(0,u.jsx)(w,(0,r.Z)({},x)):d||0===d?d:k&&l?l[0]:(0,u.jsx)(Z,{ownerState:R,className:M.fallback}),(0,u.jsx)(g,(0,r.Z)({as:b,ownerState:R,className:(0,i.Z)(M.root,m),ref:t},T,{children:_}))}))},54801:(e,t,o)=>{o.d(t,{$:()=>a,Z:()=>i});var n=o(1588),r=o(34867);function a(e){return(0,r.ZP)("MuiAvatar",e)}const i=(0,n.Z)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"])},98456:(e,t,o)=>{o.d(t,{Z:()=>_});var n=o(80102),r=o(83117),a=o(67294),i=o(63961),s=o(94780),l=o(70917),c=o(98216),d=o(28628),u=o(90948),m=o(1588),f=o(34867);function p(e){return(0,f.ZP)("MuiCircularProgress",e)}(0,m.Z)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);var v=o(85893);const g=["className","color","disableShrink","size","style","thickness","value","variant"];let h,Z,b,E,y=e=>e;const S=44,N=(0,l.F4)(h||(h=y`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),P=(0,l.F4)(Z||(Z=y`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)),I=(0,u.ZP)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[o.variant],t[`color${(0,c.Z)(o.color)}`]]}})((({ownerState:e,theme:t})=>(0,r.Z)({display:"inline-block"},"determinate"===e.variant&&{transition:t.transitions.create("transform")},"inherit"!==e.color&&{color:(t.vars||t).palette[e.color].main})),(({ownerState:e})=>"indeterminate"===e.variant&&(0,l.iv)(b||(b=y`
      animation: ${0} 1.4s linear infinite;
    `),N))),O=(0,u.ZP)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(e,t)=>t.svg})({display:"block"}),T=(0,u.ZP)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.circle,t[`circle${(0,c.Z)(o.variant)}`],o.disableShrink&&t.circleDisableShrink]}})((({ownerState:e,theme:t})=>(0,r.Z)({stroke:"currentColor"},"determinate"===e.variant&&{transition:t.transitions.create("stroke-dashoffset")},"indeterminate"===e.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0})),(({ownerState:e})=>"indeterminate"===e.variant&&!e.disableShrink&&(0,l.iv)(E||(E=y`
      animation: ${0} 1.4s ease-in-out infinite;
    `),P))),_=a.forwardRef((function(e,t){const o=(0,d.i)({props:e,name:"MuiCircularProgress"}),{className:a,color:l="primary",disableShrink:u=!1,size:m=40,style:f,thickness:h=3.6,value:Z=0,variant:b="indeterminate"}=o,E=(0,n.Z)(o,g),y=(0,r.Z)({},o,{color:l,disableShrink:u,size:m,thickness:h,value:Z,variant:b}),N=(e=>{const{classes:t,variant:o,color:n,disableShrink:r}=e,a={root:["root",o,`color${(0,c.Z)(n)}`],svg:["svg"],circle:["circle",`circle${(0,c.Z)(o)}`,r&&"circleDisableShrink"]};return(0,s.Z)(a,p,t)})(y),P={},_={},C={};if("determinate"===b){const e=2*Math.PI*((S-h)/2);P.strokeDasharray=e.toFixed(3),C["aria-valuenow"]=Math.round(Z),P.strokeDashoffset=`${((100-Z)/100*e).toFixed(3)}px`,_.transform="rotate(-90deg)"}return(0,v.jsx)(I,(0,r.Z)({className:(0,i.Z)(N.root,a),style:(0,r.Z)({width:m,height:m},_,f),ownerState:y,ref:t,role:"progressbar"},C,E,{children:(0,v.jsx)(O,{className:N.svg,ownerState:y,viewBox:"22 22 44 44",children:(0,v.jsx)(T,{className:N.circle,style:P,ownerState:y,cx:S,cy:S,r:(S-h)/2,fill:"none",strokeWidth:h})})}))}))},35097:(e,t,o)=>{o.d(t,{V:()=>a,Z:()=>i});var n=o(1588),r=o(34867);function a(e){return(0,r.ZP)("MuiDivider",e)}const i=(0,n.Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"])},84592:(e,t,o)=>{o.d(t,{Z:()=>i,f:()=>a});var n=o(1588),r=o(34867);function a(e){return(0,r.ZP)("MuiListItemIcon",e)}const i=(0,n.Z)("MuiListItemIcon",["root","alignItemsFlexStart"])},26336:(e,t,o)=>{o.d(t,{L:()=>a,Z:()=>i});var n=o(1588),r=o(34867);function a(e){return(0,r.ZP)("MuiListItemText",e)}const i=(0,n.Z)("MuiListItemText",["root","multiline","dense","inset","primary","secondary"])},18972:(e,t,o)=>{o.d(t,{Z:()=>O});var n=o(80102),r=o(83117),a=o(67294),i=o(63961),s=o(94780),l=o(51025),c=o(90948),d=o(14136),u=o(28628),m=o(59773),f=o(49990),p=o(58974),v=o(51705),g=o(35097),h=o(84592),Z=o(26336),b=o(1588),E=o(34867);function y(e){return(0,E.ZP)("MuiMenuItem",e)}const S=(0,b.Z)("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]);var N=o(85893);const P=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex","className"],I=(0,c.ZP)(f.Z,{shouldForwardProp:e=>(0,d.Z)(e)||"classes"===e,name:"MuiMenuItem",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.dense&&t.dense,o.divider&&t.divider,!o.disableGutters&&t.gutters]}})((({theme:e,ownerState:t})=>(0,r.Z)({},e.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!t.disableGutters&&{paddingLeft:16,paddingRight:16},t.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},{"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${S.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:(0,l.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${S.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:(0,l.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${S.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:(0,l.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:(0,l.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${S.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${S.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`& + .${g.Z.root}`]:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},[`& + .${g.Z.inset}`]:{marginLeft:52},[`& .${Z.Z.root}`]:{marginTop:0,marginBottom:0},[`& .${Z.Z.inset}`]:{paddingLeft:36},[`& .${h.Z.root}`]:{minWidth:36}},!t.dense&&{[e.breakpoints.up("sm")]:{minHeight:"auto"}},t.dense&&(0,r.Z)({minHeight:32,paddingTop:4,paddingBottom:4},e.typography.body2,{[`& .${h.Z.root} svg`]:{fontSize:"1.25rem"}})))),O=a.forwardRef((function(e,t){const o=(0,u.i)({props:e,name:"MuiMenuItem"}),{autoFocus:l=!1,component:c="li",dense:d=!1,divider:f=!1,disableGutters:g=!1,focusVisibleClassName:h,role:Z="menuitem",tabIndex:b,className:E}=o,S=(0,n.Z)(o,P),O=a.useContext(m.Z),T=a.useMemo((()=>({dense:d||O.dense||!1,disableGutters:g})),[O.dense,d,g]),_=a.useRef(null);(0,p.Z)((()=>{l&&_.current&&_.current.focus()}),[l]);const C=(0,r.Z)({},o,{dense:T.dense,divider:f,disableGutters:g}),k=(e=>{const{disabled:t,dense:o,divider:n,disableGutters:a,selected:i,classes:l}=e,c={root:["root",o&&"dense",t&&"disabled",!a&&"gutters",n&&"divider",i&&"selected"]},d=(0,s.Z)(c,y,l);return(0,r.Z)({},l,d)})(o),L=(0,v.Z)(_,t);let R;return o.disabled||(R=void 0!==b?b:-1),(0,N.jsx)(m.Z.Provider,{value:T,children:(0,N.jsx)(I,(0,r.Z)({ref:L,role:Z,tabIndex:R,component:c,focusVisibleClassName:(0,i.Z)(k.focusVisible,h),className:(0,i.Z)(k.root,E)},S,{ownerState:C,classes:k}))})}))},84118:(e,t,o)=>{o.d(t,{Z:()=>h});var n=o(83117),r=o(80102),a=o(67294),i=(o(76607),o(8038)),s=o(78462);const l=o(29726).Z;var c=o(51705),d=o(58974),u=o(85893);const m=["actions","autoFocus","autoFocusItem","children","className","disabledItemsFocusable","disableListWrap","onKeyDown","variant"];function f(e,t,o){return e===t?e.firstChild:t&&t.nextElementSibling?t.nextElementSibling:o?null:e.firstChild}function p(e,t,o){return e===t?o?e.firstChild:e.lastChild:t&&t.previousElementSibling?t.previousElementSibling:o?null:e.lastChild}function v(e,t){if(void 0===t)return!0;let o=e.innerText;return void 0===o&&(o=e.textContent),o=o.trim().toLowerCase(),0!==o.length&&(t.repeating?o[0]===t.keys[0]:0===o.indexOf(t.keys.join("")))}function g(e,t,o,n,r,a){let i=!1,s=r(e,t,!!t&&o);for(;s;){if(s===e.firstChild){if(i)return!1;i=!0}const t=!n&&(s.disabled||"true"===s.getAttribute("aria-disabled"));if(s.hasAttribute("tabindex")&&v(s,a)&&!t)return s.focus(),!0;s=r(e,s,o)}return!1}const h=a.forwardRef((function(e,t){const{actions:o,autoFocus:h=!1,autoFocusItem:Z=!1,children:b,className:E,disabledItemsFocusable:y=!1,disableListWrap:S=!1,onKeyDown:N,variant:P="selectedMenu"}=e,I=(0,r.Z)(e,m),O=a.useRef(null),T=a.useRef({keys:[],repeating:!0,previousKeyMatched:!0,lastTime:null});(0,d.Z)((()=>{h&&O.current.focus()}),[h]),a.useImperativeHandle(o,(()=>({adjustStyleForScrollbar:(e,{direction:t})=>{const o=!O.current.style.width;if(e.clientHeight<O.current.clientHeight&&o){const o=`${l((0,i.Z)(e))}px`;O.current.style["rtl"===t?"paddingLeft":"paddingRight"]=o,O.current.style.width=`calc(100% + ${o})`}return O.current}})),[]);const _=(0,c.Z)(O,t);let C=-1;a.Children.forEach(b,((e,t)=>{a.isValidElement(e)?(e.props.disabled||("selectedMenu"===P&&e.props.selected||-1===C)&&(C=t),C===t&&(e.props.disabled||e.props.muiSkipListHighlight||e.type.muiSkipListHighlight)&&(C+=1,C>=b.length&&(C=-1))):C===t&&(C+=1,C>=b.length&&(C=-1))}));const k=a.Children.map(b,((e,t)=>{if(t===C){const t={};return Z&&(t.autoFocus=!0),void 0===e.props.tabIndex&&"selectedMenu"===P&&(t.tabIndex=0),a.cloneElement(e,t)}return e}));return(0,u.jsx)(s.Z,(0,n.Z)({role:"menu",ref:_,className:E,onKeyDown:e=>{const t=O.current,o=e.key,n=(0,i.Z)(t).activeElement;if("ArrowDown"===o)e.preventDefault(),g(t,n,S,y,f);else if("ArrowUp"===o)e.preventDefault(),g(t,n,S,y,p);else if("Home"===o)e.preventDefault(),g(t,null,S,y,f);else if("End"===o)e.preventDefault(),g(t,null,S,y,p);else if(1===o.length){const r=T.current,a=o.toLowerCase(),i=performance.now();r.keys.length>0&&(i-r.lastTime>500?(r.keys=[],r.repeating=!0,r.previousKeyMatched=!0):r.repeating&&a!==r.keys[0]&&(r.repeating=!1)),r.lastTime=i,r.keys.push(a);const s=n&&!r.repeating&&v(n,r);r.previousKeyMatched&&(s||g(t,n,!1,y,f,r))?e.preventDefault():r.previousKeyMatched=!1}N&&N(e)},tabIndex:h?0:-1},I,{children:k}))}))},40424:(e,t,o)=>{o.d(t,{Z:()=>c});var n=o(67294),r=o(73935),a=o(33703),i=o(73546),s=o(27364),l=o(85893);const c=n.forwardRef((function(e,t){const{children:o,container:c,disablePortal:d=!1}=e,[u,m]=n.useState(null),f=(0,a.Z)(n.isValidElement(o)?o.ref:null,t);if((0,i.Z)((()=>{d||m(function(e){return"function"==typeof e?e():e}(c)||document.body)}),[c,d]),(0,i.Z)((()=>{if(u&&!d)return(0,s.Z)(t,u),()=>{(0,s.Z)(t,null)}}),[t,u,d]),d){if(n.isValidElement(o)){const e={ref:f};return n.cloneElement(o,e)}return(0,l.jsx)(n.Fragment,{children:o})}return(0,l.jsx)(n.Fragment,{children:u?r.createPortal(o,u):u})}))},37292:(e,t,o)=>{var n;o.d(t,{Z:()=>u});var r=o(67294),a=o(73546),i=o(64560),s=o(2952);function l(e,t,o,n,i){const[s,l]=r.useState((()=>i&&o?o(e).matches:n?n(e).matches:t));return(0,a.Z)((()=>{let t=!0;if(!o)return;const n=o(e),r=()=>{t&&l(n.matches)};return r(),n.addListener(r),()=>{t=!1,n.removeListener(r)}}),[e,o]),s}const c=(n||(n=o.t(r,2))).useSyncExternalStore;function d(e,t,o,n,a){const i=r.useCallback((()=>t),[t]),s=r.useMemo((()=>{if(a&&o)return()=>o(e).matches;if(null!==n){const{matches:t}=n(e);return()=>t}return i}),[i,e,n,a,o]),[l,d]=r.useMemo((()=>{if(null===o)return[i,()=>()=>{}];const t=o(e);return[()=>t.matches,e=>(t.addListener(e),()=>{t.removeListener(e)})]}),[i,o,e]);return c(d,l,s)}function u(e,t={}){const o=(0,s.Z)(),n="undefined"!=typeof window&&void 0!==window.matchMedia,{defaultMatches:r=!1,matchMedia:a=(n?window.matchMedia:null),ssrMatchMedia:u=null,noSsr:m=!1}=(0,i.Z)({name:"MuiUseMediaQuery",props:t,theme:o});let f="function"==typeof e?e(o):e;f=f.replace(/^@media( ?)/m,"");return(void 0!==c?d:l)(f,r,a,u,m)}},64560:(e,t,o)=>{o.d(t,{Z:()=>r});var n=o(35971);function r(e){const{theme:t,name:o,props:r}=e;return t&&t.components&&t.components[o]&&t.components[o].defaultProps?(0,n.Z)(t.components[o].defaultProps,r):r}},63023:(e,t)=>{var o,n=Symbol.for("react.element"),r=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),d=Symbol.for("react.server_context"),u=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),f=Symbol.for("react.suspense_list"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),g=Symbol.for("react.offscreen");function h(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case a:case s:case i:case m:case f:return e;default:switch(e=e&&e.$$typeof){case d:case c:case u:case v:case p:case l:return e;default:return t}}case r:return t}}}o=Symbol.for("react.module.reference")},76607:(e,t,o)=>{o(63023)},8038:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o(82690).Z},27909:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o(92996).Z},29726:(e,t,o)=>{function n(e){const t=e.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}o.d(t,{Z:()=>n})},82690:(e,t,o)=>{function n(e){return e&&e.ownerDocument||document}o.d(t,{Z:()=>n})},92996:(e,t,o)=>{var n;o.d(t,{Z:()=>s});var r=o(67294);let a=0;const i=(n||(n=o.t(r,2)))["useId".toString()];function s(e){if(void 0!==i){const t=i();return null!=e?e:t}return function(e){const[t,o]=r.useState(e),n=e||t;return r.useEffect((()=>{null==t&&(a+=1,o(`mui-${a}`))}),[t]),n}(e)}},82963:(e,t,o)=>{o.d(t,{Z:()=>d});var n=o(83117),r=o(80102),a=o(33703),i=o(86542),s=o(65220),l=o(65610);const c=["elementType","externalSlotProps","ownerState","skipResolvingSlotProps"];const d=function(e){var t;const{elementType:o,externalSlotProps:d,ownerState:u,skipResolvingSlotProps:m=!1}=e,f=(0,r.Z)(e,c),p=m?{}:(0,l.Z)(d,u),{props:v,internalRef:g}=(0,s.Z)((0,n.Z)({},f,{externalSlotProps:p})),h=(0,a.Z)(g,null==p?void 0:p.ref,null==(t=e.additionalProps)?void 0:t.ref);return(0,i.Z)(o,(0,n.Z)({},v,{ref:h}),u)}},97265:(e,t,o)=>{o.d(t,{Z:()=>i});var n=o(97582),r=o(67294),a=o(41538);const i=r.forwardRef(((e,t)=>{var{children:o}=e,i=(0,n._T)(e,["children"]);const s=(0,r.useContext)(a.WQ);if(s.routerLink){const e=s.routerLink;return r.createElement(e,Object.assign({},i,{ref:t}),o)}const{to:l}=i,c=(0,n._T)(i,["to"]);return r.createElement("a",Object.assign({href:l},c,{ref:t}),o)}))},34927:(e,t,o)=>{o.d(t,{Z:()=>p});var n=o(67294),r=o(24085),a=o(24243),i=o(59219),s=o(99960),l=o(74482),c=o(49794),d=o(69721),u=o(76171),m=o(13391),f=o(80427);function p({id:e,contribution:t=null,contributionType:o,onVote:p=null,cacheStrategy:v=i.n2.CACHE_FIRST}){const g=(0,n.useMemo)((()=>o===c.q.COMMENT?(0,d.ht)(e):(0,d._j)(e,o)),[e,o]),h=(0,n.useMemo)((()=>o===c.q.COMMENT?r.Z.Comment:r.Z.FeedObject),[e,o]),[Z,b]=(0,n.useState)(!1),[E,y]=(0,n.useState)(v!==i.n2.NETWORK_ONLY?i.ZP.get(g,t):t),[S,N]=(0,n.useState)(!1),[P,I]=(0,n.useState)(r.Z.VotesList.url({type:o,id:e})),[O,T]=(0,n.useState)([]),[_,C]=(0,n.useState)(!1),[k,L]=(0,n.useState)(null),R=(0,u.RM)(),M=(0,m.LD)(),w=(0,f.hW)(),x=(0,n.useMemo)((()=>{var e;return{default:null===(e=w.reactions)||void 0===e?void 0:e.find((e=>1===e.id)),reactions:w.reactions,isLoading:w.isLoading}}),[w.reactions,w.isLoading]),D=(0,n.useMemo)((()=>()=>(b(!0),a.Z.request({url:h.url({type:o,id:e}),method:h.method}).then((e=>(b(!1),e.status>=300?Promise.reject(e):Promise.resolve(e.data)))))),[e,o]),$=(0,n.useMemo)((()=>e=>{const t={};return e&&x.reactions&&(t.reaction=e.id),a.Z.request({url:r.Z.Vote.url({type:E.type,id:E.id}),method:r.Z.Vote.method,params:t}).then((e=>e.status>=300?Promise.reject(e):Promise.resolve(e.data)))}),[E,R]);(0,n.useEffect)((()=>{(v!==i.n2.CACHE_FIRST||!E||M.user&&!Object.prototype.hasOwnProperty.call(E,"voted"))&&D().then((e=>{y(e),i.ZP.set(g,e)})).catch((t=>{i.ZP.delete(g),L(`FeedObject with id ${e} not found`),s.Y.error(l.h,`FeedObject with id ${e} not found`),s.Y.error(l.h,t.message)}))}),[e,o,M.user]),(0,n.useEffect)((()=>{t&&y(t)}),[t]);const F=(0,n.useMemo)((()=>({contributionVoted:!!E&&E.voted,contributionVoteCount:E?E.vote_count:0,contributionReaction:E?E.reaction:null,contributionReactionsCount:E?E.reactions_count:null})),[E]);return Object.assign(Object.assign({},F),{isLoading:Z,isVoting:S,handleVote:e=>{M.user&&E&&!S&&(N(!0),$(e).then((()=>{var t,o;let n={voted:!E.voted,vote_count:E.voted?E.vote_count-1:E.vote_count+1};if(e&&(null===(t=null==E?void 0:E.reaction)||void 0===t?void 0:t.id)!==e.id){const t=!(null==E?void 0:E.reaction),o=-1===E.reactions_count.findIndex((t=>t.reaction.id===e.id));n={voted:!!t||E.voted,vote_count:t?E.vote_count+1:E.vote_count,reaction:e,reactions_count:[...E.reactions_count.map((t=>{var o,n;return t.reaction.id===(null===(o=null==E?void 0:E.reaction)||void 0===o?void 0:o.id)&&t.count-1==0?null:t.reaction.id===(null===(n=null==E?void 0:E.reaction)||void 0===n?void 0:n.id)&&t.count-1>0?{count:t.count-1,reaction:t.reaction}:t.reaction.id===e.id?{count:t.count+1,reaction:t.reaction}:t})),o?{count:1,reaction:e}:null].filter((e=>Boolean(e)))}}else e&&(null==E?void 0:E.reaction)&&(null===(o=null==E?void 0:E.reaction)||void 0===o?void 0:o.id)===e.id&&(n=Object.assign({},n,{reaction:null,reactions_count:E.reactions_count.map((e=>{var t,o;return e.reaction.id===(null===(t=null==E?void 0:E.reaction)||void 0===t?void 0:t.id)&&e.count-1==0?null:e.reaction.id===(null===(o=null==E?void 0:E.reaction)||void 0===o?void 0:o.id)&&e.count-1>0?{count:e.count-1,reaction:e.reaction}:e})).filter((e=>Boolean(e)))}));const r=Object.assign({},E,n);y(r),N(!1),p&&p(r,null)})).catch((e=>{s.Y.error(l.h,e),N(!1),p&&p(E,e)})))},reactions:x,error:k,handleFetchVoteList:({reaction:t=null,reset:n=!1})=>{const i=n?`${r.Z.VotesList.url({type:o,id:e})}${t?`?reaction=${t.id}`:""}`:P;C(!0),a.Z.request({url:i,method:r.Z.VotesList.method}).then((e=>{T(n?e.data.results:[...O,...e.data.results]),I(e.data.next)})).catch((e=>L(e))).then((()=>C(!1)))},voteList:O,isLoadingVoteList:_,voteListHasNext:Boolean(P)})}},65580:(e,t,o)=>{o.d(t,{B2:()=>u,GJ:()=>l,IT:()=>m,hz:()=>d,vJ:()=>c});var n=o(38146);const r="admin",a="moderator",i="editor";function s(e){if(e&&e.role){const t=e.role;if(t===r)return r;if(t===a)return a;if(t===i)return i}return null}function l(e){return s(e)===r}function c(e){return s(e)===a}function d(e){return s(e)===i}function u(e){return l(e)||c(e)||d(e)}function m(e){return e&&e.status&&e.status===n.m.BLOCKED}},87430:(e,t,o)=>{o.d(t,{Z:()=>ie});var n=o(97582),r=o(67294),a=o(90948),i=o(16362),s=o(63084),l=o(29736),c=o(10930),d=o(87576),u=o(52227),m=o(32527),f=o(80101),p=o(39711),v=o(65499),g=o(88942),h=o(60241),Z=o(75459),b=o(1798),E=o.n(b),y=o(56114),S=o(94253),N=o(84118),P=o(18972),I=o(87952),O=o(15861),T=o(94944),_=o(94184),C=o.n(_),k=o(78462),L=o(2734),R=o(97212),M=o(88078),w=o(79467),x=o(68693);const D="SCSnippetNotifications",$={root:`${D}-skeleton-root`,list:`${D}-list`,item:`${D}-item`},F=(0,a.ZP)(k.Z,{name:D,slot:"SkeletonRoot"})((()=>({})));function j(e){const t=(0,L.Z)(),o=r.createElement(w.Z,{className:$.item,template:x.u.SNIPPET,image:r.createElement(M.Z,{animation:"wave",variant:"circular",width:t.selfcommunity.user.avatar.sizeSmall,height:t.selfcommunity.user.avatar.sizeSmall}),primary:r.createElement(M.Z,{animation:"wave",height:10,width:120,style:{marginBottom:10}}),secondary:r.createElement(M.Z,{animation:"wave",height:10,width:70,style:{marginBottom:10}})});return r.createElement(F,Object.assign({className:$.root},e),[...Array(7)].map(((e,t)=>r.createElement(R.ZP,{className:$.item,key:t},o))))}var A=o(88529),V=o(86896),B=o(44012),J=o(20342),U=o(24243),G=o(24085),H=o(99960),W=o(85472),z=o(13391),K=o(41538),q=o(66380),Y=o(29234),Q=o(97265),X=o(12132),ee=o(29360),te=o(36513),oe=o(654);const ne={root:`${D}-root`,notificationsWrap:`${D}-notifications-wrap`,emptyBoxNotifications:`${D}-empty-box-notifications`,list:`${D}-list`,broadcastMessagesBanner:`${D}-broadcast-messages-banner`,item:`${D}-item`},re=(0,a.ZP)(S.Z,{name:D,slot:"Root"})((()=>({}))),ae=[W.iH,W.QX];const ie=function(e){const t=(0,ee.Z)({props:e,name:D}),{id:o="snippetNotifications",className:a,showMax:b=20,handleCustomNotification:_,handleNotification:k,ScrollContainerProps:L={},onNotificationClick:R,onFetchNotifications:M}=t,$=(0,n._T)(t,["id","className","showMax","handleCustomNotification","handleNotification","ScrollContainerProps","onNotificationClick","onFetchNotifications"]),F=(0,z.LD)(),ie=(0,K.sy)(),[se,le]=(0,r.useState)([]),[ce,de]=(0,r.useState)(!1),[ue,me]=(0,r.useState)(!1),fe=(0,r.useRef)(null),pe=(0,q.ko)(),ve=(0,r.useMemo)((()=>{const e={};return ae.map((t=>e[t]=t in pe.preferences?pe.preferences[t].value:null)),e}),[pe.preferences]),ge=(0,V.Z)(),he=(0,r.useMemo)((()=>()=>U.Z.request({url:G.Z.UserNotificationList.url(),method:G.Z.UserNotificationList.method}).then((e=>e.status>=300?Promise.reject(e):Promise.resolve(e.data)))),[]),Ze=(0,r.useMemo)((()=>()=>{de(!0),ue||(me(!0),he().then((e=>{le(e.results),me(!1),F.refreshCounters(),M&&M(e.results)})).catch((e=>{H.Y.error(Z.J,e)})))}),[ue,se.length,M,de]);(0,r.useEffect)((()=>{let e;if(F.user&&!ce)return e=setTimeout(Ze),()=>{e&&clearTimeout(e)}}),[F.user,ce]);const be=(e,t)=>{t&&t.type===J.E.INTERACTION&&Y.hP[t.data.activity_type]&&!Y.$A.includes(t.data.activity_type)&&t.data.notification_obj&&le([{is_new:!0,sid:"",aggregated:[t.data.notification_obj]},...se])};return(0,r.useEffect)((()=>(ue||(fe.current=E().subscribe(J.E.INTERACTION,be)),()=>{fe.current&&E().unsubscribe(fe.current)})),[ue]),r.createElement(re,Object.assign({id:o,className:C()(ne.root,a)},$),r.createElement(S.Z,{className:ne.notificationsWrap},!ce||ue?r.createElement(j,{elevation:0}):r.createElement(A.Z,Object.assign({},L),r.createElement(N.Z,{className:ne.list,disabledItemsFocusable:!0,disableListWrap:!0},F.user.unseen_notification_banners_counter?r.createElement(P.Z,{className:C()(ne.item,ne.broadcastMessagesBanner),key:"banner",component:Q.Z,to:ie.url(X.USER_NOTIFICATIONS_ROUTE_NAME,{})},r.createElement(w.Z,{template:x.u.SNIPPET,isNew:!0,disableTypography:!0,image:r.createElement(I.Z,{alt:ve[W.QX],src:ve[W.iH]}),primary:r.createElement(O.Z,{component:"div"},ge.formatMessage({id:"ui.snippetNotifications.broadcastMessages",defaultMessage:"ui.snippetNotifications.broadcastMessages"},{count:F.user.unseen_notification_banners_counter,b:(...e)=>r.createElement("strong",null,e),link:(...e)=>r.createElement(Q.Z,{to:ie.url(X.USER_NOTIFICATIONS_ROUTE_NAME,{})},e)}))})):null,0===se.length?r.createElement(P.Z,{className:ne.emptyBoxNotifications},r.createElement(B.Z,{id:"ui.snippetNotifications.noNotifications",defaultMessage:"ui.snippetNotifications.noNotifications"})):se.slice(0,b).map(((e,t)=>e.aggregated.map(((e,o)=>r.createElement(P.Z,{className:ne.item,key:o,onClick:t=>((e,t)=>{R&&R(e,t)})(t,e),disableRipple:!0,disableTouchRipple:!0},((e,t)=>{const o=e.type;let n;if(o===J.J.COMMENT||o===J.J.NESTED_COMMENT)n=r.createElement(i.Z,{notificationObject:e,key:t,index:t,template:x.u.SNIPPET});else if(o===J.J.FOLLOW)n=r.createElement(y.Z,{notificationObject:e,key:t,template:x.u.SNIPPET});else if(o===J.J.USER_FOLLOW)n=r.createElement(s.Z,{notificationObject:e,key:t,template:x.u.SNIPPET});else if(o===J.J.CONNECTION_REQUEST||o===J.J.CONNECTION_ACCEPT)n=r.createElement(d.Z,{notificationObject:e,key:t,template:x.u.SNIPPET});else if(o===J.J.VOTE_UP)n=r.createElement(h.Z,{notificationObject:e,key:t,template:x.u.SNIPPET});else if(o===J.J.KINDLY_NOTICE_ADVERTISING||o===J.J.KINDLY_NOTICE_AGGRESSIVE||o===J.J.KINDLY_NOTICE_POOR||o===J.J.KINDLY_NOTICE_VULGAR||o===J.J.KINDLY_NOTICE_OFFTOPIC)n=r.createElement(v.Z,{notificationObject:e,key:t,template:x.u.SNIPPET});else if(o===J.J.KINDLY_NOTICE_FLAG)n=r.createElement(g.Z,{notificationObject:e,key:t,template:x.u.SNIPPET});else if(o===J.J.DELETED_FOR_ADVERTISING||o===J.J.DELETED_FOR_AGGRESSIVE||o===J.J.DELETED_FOR_POOR||o===J.J.DELETED_FOR_VULGAR||o===J.J.DELETED_FOR_OFFTOPIC)n=r.createElement(c.Z,{notificationObject:e,key:t,template:x.u.SNIPPET});else if(o===J.J.UNDELETED_FOR)n=r.createElement(l.Z,{notificationObject:e,key:t,template:x.u.SNIPPET});else if(o===J.J.COLLAPSED_FOR_ADVERTISING||o===J.J.COLLAPSED_FOR_AGGRESSIVE||o===J.J.COLLAPSED_FOR_POOR||o===J.J.COLLAPSED_FOR_VULGAR||o===J.J.COLLAPSED_FOR_OFFTOPIC)n=r.createElement(p.Z,{notificationObject:e,key:t,template:x.u.SNIPPET});else if(o===J.J.PRIVATE_MESSAGE)n=r.createElement(u.Z,{notificationObject:e,key:t,template:x.u.SNIPPET});else if(o===J.J.BLOCKED_USER||o===J.J.UNBLOCKED_USER)n=r.createElement(m.Z,{notificationObject:e,key:t,template:x.u.SNIPPET});else if(o===J.J.MENTION)n=r.createElement(f.Z,{notificationObject:e,key:t,template:x.u.SNIPPET});else if(o===J.J.INCUBATOR_APPROVED)n=r.createElement(T.Z,{notificationObject:e,key:t,template:x.u.SNIPPET});else if(o===J.J.CUSTOM_NOTIFICATION&&_)n=_(e);else if(o===J.J.CONTRIBUTION)n=r.createElement(te.Z,{notificationObject:e,key:t,template:x.u.SNIPPET});else if(e.type===J.J.USER_ADDED_TO_GROUP||e.type===J.J.USER_INVITED_TO_JOIN_GROUP||e.type===J.J.USER_ACCEPTED_TO_JOIN_GROUP||e.type===J.J.USER_REQUESTED_TO_JOIN_GROUP)return r.createElement(oe.Z,{notificationObject:e,key:t,template:x.u.SNIPPET});return o&&k&&(n=k(o,e,n)),n})(e,t))))))))))}},85050:(e,t,o)=>{o.d(t,{Z:()=>_});var n=o(97582),r=o(67294),a=o(90948),i=o(66090),s=o(94184),l=o.n(s),c=o(29360),d=o(67564),u=o(11535),m=o(2734),f=o(37292),p=o(34386),v=o(90629),g=o(93946),h=o(76171),Z=o(13391),b=o(65580),E=o(34927),y=o(44012),S=o(20377),N=o(56581);const P="SCVoteButton",I={root:`${P}-root`,voted:`${P}-voted`,popperRoot:`${P}-popper-root`,reactionList:`${P}-reaction-list`,reaction:`${P}-reaction`},O=(0,a.ZP)(i.Z,{name:P,slot:"Root",overridesResolver:(e,t)=>[t.root,t.voted]})((({theme:e})=>({}))),T=(0,a.ZP)(u.Z,{name:P,slot:"Root",overridesResolver:(e,t)=>t.popperRoot})((()=>({})));const _=function(e){const t=(0,c.Z)({props:e,name:P}),{className:o,contributionId:a,contributionType:i,contribution:s=null,onVote:u}=t,_=(0,n._T)(t,["className","contributionId","contributionType","contribution","onVote"]),[C,k]=(0,r.useState)(null),L=(0,r.useRef)(null),R=(0,h.RM)(),M=(0,Z.LD)(),{enqueueSnackbar:w}=(0,S.Ds)(),x=e=>{$(),L.current=setTimeout((()=>k(e.target)),1e3)},D=e=>{$(),L.current=setTimeout((()=>k(null)),500)},$=()=>{L.current&&clearTimeout(L.current),L.current=null},F=e=>{M.user?b.IT(M.user)?w(r.createElement(y.Z,{id:"ui.common.userBlocked",defaultMessage:"ui.common.userBlocked"}),{variant:"warning",autoHideDuration:3e3}):U(e):R.settings.handleAnonymousAction()},{isLoading:j,isVoting:A,contributionVoted:V,contributionReaction:B,reactions:J,handleVote:U,error:G}=(0,E.Z)({id:a,contributionType:i,contribution:s,onVote:(e,t)=>{k(null),t?(0,N.w)(t,M.managers.blockedUsers.isBlocked(e.author),w)||w(r.createElement(y.Z,{id:"ui.common.error.action",defaultMessage:"ui.common.error.action"}),{variant:"error",autoHideDuration:3e3}):u&&u(e)}}),H=(0,m.Z)(),W=(0,f.Z)(H.breakpoints.down("md")),z=(0,r.useMemo)((()=>J.default?{onMouseEnter:x,onMouseLeave:D}:{}),[J]),K=r.createElement(O,Object.assign({onClick:W&&J.reactions?x:()=>F(B||(J.default?J.default:null)),disabled:j||Boolean(G),loading:A,className:l()(I.root,o,{[I.voted]:M.user&&V})},_,z),M.user&&V?B?r.createElement(d.Z,null,r.createElement("img",{alt:B.label,src:B.image,width:"100%",height:"100%"})):r.createElement(d.Z,null,"thumb_up"):r.createElement(d.Z,null,"thumb_up_off_alt"));return r.createElement(r.Fragment,null,J.default?K:r.createElement(p.Z,{title:V?r.createElement(y.Z,{id:"ui.voteButton.voteDown",defaultMessage:"ui.voteButton.voteDown"}):r.createElement(y.Z,{id:"ui.voteButton.voteUp",defaultMessage:"ui.voteButton.voteUp"})},r.createElement("span",null,K)),J.default&&r.createElement(T,{id:`vote_${a}_${i}_popper`,className:I.popperRoot,open:Boolean(C)&&!A&&!j,anchorEl:C,placement:"top",keepMounted:!0},r.createElement(v.Z,{className:I.reactionList,onMouseEnter:$,onMouseLeave:D},J.reactions.filter((e=>!V||V&&B.id!==e.id?e.active:e)).map((e=>r.createElement(g.Z,{key:e.id,className:I.reaction,onClick:()=>F(e)},r.createElement(d.Z,null,r.createElement("img",{alt:e.label,src:e.image,width:"100%",height:"100%"}))))))))}},63902:(e,t,o)=>{o.d(t,{Z:()=>m});var n=o(97582),r=o(67294),a=o(90948),i=o(66242),s=o(94184),l=o.n(s);const c="SCWidget",d={root:`${c}-root`},u=(0,a.ZP)(i.Z,{name:c,slot:"Root",overridesResolver:(e,t)=>t.root})((({theme:e})=>({}))),m=(0,r.forwardRef)(((e,t)=>{const{className:o,onHeightChange:a,onStateChange:i}=e,s=(0,n._T)(e,["className","onHeightChange","onStateChange"]);return r.createElement(u,Object.assign({className:l()(d.root,o)},s,{ref:t}))}))},75459:(e,t,o)=>{o.d(t,{J:()=>n});const n="@selfcommunity/react-ui"},51575:(e,t,o)=>{o.d(t,{Z:()=>m});var n=o(97582),r=o(67294),a=o(90948),i=o(29360),s=o(94184),l=o.n(s);const c="SCBullet",d={root:`${c}-root`},u=(0,a.ZP)("span",{name:c,slot:"Root",overridesResolver:(e,t)=>[t.root]})((()=>({})));function m(e){const t=(0,i.Z)({props:e,name:c}),{className:o}=t,a=(0,n._T)(t,["className"]);return r.createElement(u,Object.assign({className:l()(o,d.root)},a),"\u2022")}},56581:(e,t,o)=>{o.d(t,{w:()=>a});var n=o(67294),r=o(44012);function a(e,t,o){let a=!1;return e&&e.response&&e.response&&e.response.status&&403===e.response.status&&(o(t?n.createElement(r.Z,{id:"ui.common.actionToUserBlockedByMe",defaultMessage:"ui.common.actionToUserBlockedByMe"}):n.createElement(r.Z,{id:"ui.common.actionToUserHasBlockedMe",defaultMessage:"ui.common.actionToUserHasBlockedMe"}),{variant:"warning",autoHideDuration:3e3}),a=!0),a}},54490:(e,t,o)=>{o.d(t,{Ji:()=>m,qN:()=>f,vU:()=>u});var n,r,a=o(25719),i=o(67294),s=o(86896);!function(e){e.formatDate="FormattedDate",e.formatTime="FormattedTime",e.formatNumber="FormattedNumber",e.formatList="FormattedList",e.formatDisplayName="FormattedDisplayName"}(n||(n={})),function(e){e.formatDate="FormattedDateParts",e.formatTime="FormattedTimeParts",e.formatNumber="FormattedNumberParts",e.formatList="FormattedListParts"}(r||(r={}));var l=function(e){var t=(0,s.Z)(),o=e.value,n=e.children,r=(0,a._T)(e,["value","children"]);return n(t.formatNumberToParts(o,r))};l.displayName="FormattedNumberParts";function c(e){var t=function(t){var o=(0,s.Z)(),n=t.value,r=t.children,i=(0,a._T)(t,["value","children"]),l="string"==typeof n?new Date(n||0):n;return r("formatDate"===e?o.formatDateToParts(l,i):o.formatTimeToParts(l,i))};return t.displayName=r[e],t}function d(e){var t=function(t){var o=(0,s.Z)(),n=t.value,r=t.children,l=(0,a._T)(t,["value","children"]),c=o[e](n,l);if("function"==typeof r)return r(c);var d=o.textComponent||i.Fragment;return i.createElement(d,null,c)};return t.displayName=n[e],t}function u(e){return e}l.displayName="FormattedNumberParts";var m=d("formatDate"),f=d("formatTime");d("formatNumber"),d("formatList"),d("formatDisplayName"),c("formatDate"),c("formatTime")}}]);