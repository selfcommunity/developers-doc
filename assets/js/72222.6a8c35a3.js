"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[72222],{87952:(e,t,a)=>{a.d(t,{Z:()=>h});var r=a(80102),o=a(83117),n=a(67294),s=a(63961),c=a(94780),i=a(90948),l=a(71657),m=a(88169),d=a(85893);const u=(0,m.Z)((0,d.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");var p=a(54801);const f=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],y=(0,i.ZP)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,t[a.variant],a.colorDefault&&t.colorDefault]}})((({theme:e,ownerState:t})=>(0,o.Z)({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},"rounded"===t.variant&&{borderRadius:(e.vars||e).shape.borderRadius},"square"===t.variant&&{borderRadius:0},t.colorDefault&&(0,o.Z)({color:(e.vars||e).palette.background.default},e.vars?{backgroundColor:e.vars.palette.Avatar.defaultBg}:{backgroundColor:"light"===e.palette.mode?e.palette.grey[400]:e.palette.grey[600]})))),g=(0,i.ZP)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(e,t)=>t.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),v=(0,i.ZP)(u,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(e,t)=>t.fallback})({width:"75%",height:"75%"});const h=n.forwardRef((function(e,t){const a=(0,l.Z)({props:e,name:"MuiAvatar"}),{alt:i,children:m,className:u,component:h="div",imgProps:Z,sizes:N,src:b,srcSet:T,variant:P="circular"}=a,w=(0,r.Z)(a,f);let x=null;const D=function({crossOrigin:e,referrerPolicy:t,src:a,srcSet:r}){const[o,s]=n.useState(!1);return n.useEffect((()=>{if(!a&&!r)return;s(!1);let o=!0;const n=new Image;return n.onload=()=>{o&&s("loaded")},n.onerror=()=>{o&&s("error")},n.crossOrigin=e,n.referrerPolicy=t,n.src=a,r&&(n.srcset=r),()=>{o=!1}}),[e,t,a,r]),o}((0,o.Z)({},Z,{src:b,srcSet:T})),E=b||T,R=E&&"error"!==D,S=(0,o.Z)({},a,{colorDefault:!R,component:h,variant:P}),$=(e=>{const{classes:t,variant:a,colorDefault:r}=e,o={root:["root",a,r&&"colorDefault"],img:["img"],fallback:["fallback"]};return(0,c.Z)(o,p.$,t)})(S);return x=R?(0,d.jsx)(g,(0,o.Z)({alt:i,srcSet:T,src:b,sizes:N,ownerState:S,className:$.img},Z)):null!=m?m:E&&i?i[0]:(0,d.jsx)(v,{ownerState:S,className:$.fallback}),(0,d.jsx)(y,(0,o.Z)({as:h,ownerState:S,className:(0,s.Z)($.root,u),ref:t},w,{children:x}))}))},54801:(e,t,a)=>{a.d(t,{$:()=>n,Z:()=>s});var r=a(1588),o=a(34867);function n(e){return(0,o.Z)("MuiAvatar",e)}const s=(0,r.Z)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"])},5616:(e,t,a)=>{a.d(t,{Z:()=>Z});var r=a(83117),o=a(80102),n=a(67294),s=a(70828),c=a(49731),i=a(86523),l=a(39707),m=a(96682),d=a(85893);const u=["className","component"];var p=a(37078),f=a(68239),y=a(10606);const g=(0,a(1588).Z)("MuiBox",["root"]),v=(0,f.Z)(),h=function(e={}){const{themeId:t,defaultTheme:a,defaultClassName:p="MuiBox-root",generateClassName:f}=e,y=(0,c.ZP)("div",{shouldForwardProp:e=>"theme"!==e&&"sx"!==e&&"as"!==e})(i.Z);return n.forwardRef((function(e,n){const c=(0,m.Z)(a),i=(0,l.Z)(e),{className:g,component:v="div"}=i,h=(0,o.Z)(i,u);return(0,d.jsx)(y,(0,r.Z)({as:v,ref:n,className:(0,s.Z)(g,f?f(p):p),theme:t&&c[t]||c},h))}))}({themeId:y.Z,defaultTheme:v,defaultClassName:g.root,generateClassName:p.Z.generate}),Z=h},97265:(e,t,a)=>{a.d(t,{Z:()=>s});var r=a(97582),o=a(67294),n=a(41538);const s=o.forwardRef(((e,t)=>{var{children:a}=e,s=(0,r._T)(e,["children"]);const c=(0,o.useContext)(n.WQ);if(c.routerLink){const e=c.routerLink;return o.createElement(e,Object.assign({},s,{ref:t}),a)}const{to:i}=s,l=(0,r._T)(s,["to"]);return o.createElement("a",Object.assign({href:i},l,{ref:t}),a)}))},63902:(e,t,a)=>{a.d(t,{Z:()=>u});var r=a(97582),o=a(67294),n=a(90948),s=a(66242),c=a(94184),i=a.n(c);const l="SCWidget",m={root:`${l}-root`},d=(0,n.ZP)(s.Z,{name:l,slot:"Root",overridesResolver:(e,t)=>t.root})((({theme:e})=>({}))),u=(0,o.forwardRef)(((e,t)=>{const{className:a,onHeightChange:n,onStateChange:s}=e,c=(0,r._T)(e,["className","onHeightChange","onStateChange"]);return o.createElement(d,Object.assign({className:i()(m.root,a)},c,{ref:t}))}))},75459:(e,t,a)=>{a.d(t,{J:()=>r});const r="@selfcommunity/react-ui"},115:(e,t,a)=>{a.d(t,{Z:()=>y});var r=a(97582),o=a(67294),n=a(90948),s=a(5616),c=a(15861),i=a(94184),l=a.n(i),m=a(63902),d=a(29628);const u="SCBaseItem",p={root:`${u}-root`,withActions:`${u}-with-actions`,content:`${u}-content`,image:`${u}-image`,text:`${u}-text`,primary:`${u}-primary`,secondary:`${u}-secondary`,actions:`${u}-actions`},f=(0,n.ZP)(m.Z,{name:u,slot:"Root",overridesResolver:(e,t)=>t.root})((({theme:e})=>({})));const y=function(e){const t=(0,d.Z)({props:e,name:u}),{id:a=null,className:n=null,image:i=null,disableTypography:m=!1,primary:y=null,primaryTypographyProps:g={component:"span",variant:"body1"},secondary:v=null,secondaryTypographyProps:h={component:"p",variant:"body2"},actions:Z=null}=t,N=(0,r._T)(t,["id","className","image","disableTypography","primary","primaryTypographyProps","secondary","secondaryTypographyProps","actions"]);return o.createElement(f,Object.assign({id:a},N,{className:l()(p.root,n,{[p.withActions]:Boolean(Z)})}),o.createElement(s.Z,{className:p.content},i&&o.createElement(s.Z,{className:p.image},i),o.createElement(s.Z,{className:p.text},y&&(m?y:o.createElement(c.Z,Object.assign({className:p.primary},g),y)),v&&(m?v:o.createElement(c.Z,Object.assign({className:p.secondary},h),v)))),Z&&o.createElement(s.Z,{className:p.actions},Z))}},75427:(e,t,a)=>{a.d(t,{Z:()=>g});var r=a(97582),o=a(67294),n=a(90948),s=a(49990),c=a(5616),i=a(15861),l=a(94184),m=a.n(l),d=a(63902),u=a(29628);const p="SCBaseItemButton",f={root:`${p}-root`,withActions:`${p}-with-actions`,content:`${p}-content`,image:`${p}-image`,text:`${p}-text`,primary:`${p}-primary`,secondary:`${p}-secondary`,actions:`${p}-actions`},y=(0,n.ZP)(d.Z,{name:p,slot:"Root",overridesResolver:(e,t)=>t.root})((({theme:e})=>({})));const g=function(e){const t=(0,u.Z)({props:e,name:p}),{id:a=null,className:n=null,ButtonBaseProps:l={},image:d=null,disableTypography:g=!1,primary:v=null,primaryTypographyProps:h={component:"span",variant:"body1"},secondary:Z=null,secondaryTypographyProps:N={component:"p",variant:"body2"},actions:b=null}=t,T=(0,r._T)(t,["id","className","ButtonBaseProps","image","disableTypography","primary","primaryTypographyProps","secondary","secondaryTypographyProps","actions"]);return o.createElement(y,Object.assign({id:a},T,{className:m()(f.root,n,{[f.withActions]:Boolean(b)})}),o.createElement(s.Z,Object.assign({className:f.content},l),d&&o.createElement(c.Z,{className:f.image},d),o.createElement(c.Z,{className:f.text},v&&(g?v:o.createElement(i.Z,Object.assign({className:f.primary},h),v)),Z&&(g?Z:o.createElement(i.Z,Object.assign({className:f.secondary},N),Z)))),b&&o.createElement(c.Z,{className:f.actions},b))}},54490:(e,t,a)=>{a.d(t,{Ji:()=>u,qN:()=>p,vU:()=>d});var r,o,n=a(25719),s=a(67294),c=a(86896);!function(e){e.formatDate="FormattedDate",e.formatTime="FormattedTime",e.formatNumber="FormattedNumber",e.formatList="FormattedList",e.formatDisplayName="FormattedDisplayName"}(r||(r={})),function(e){e.formatDate="FormattedDateParts",e.formatTime="FormattedTimeParts",e.formatNumber="FormattedNumberParts",e.formatList="FormattedListParts"}(o||(o={}));var i=function(e){var t=(0,c.Z)(),a=e.value,r=e.children,o=(0,n._T)(e,["value","children"]);return r(t.formatNumberToParts(a,o))};i.displayName="FormattedNumberParts";function l(e){var t=function(t){var a=(0,c.Z)(),r=t.value,o=t.children,s=(0,n._T)(t,["value","children"]),i="string"==typeof r?new Date(r||0):r;return o("formatDate"===e?a.formatDateToParts(i,s):a.formatTimeToParts(i,s))};return t.displayName=o[e],t}function m(e){var t=function(t){var a=(0,c.Z)(),r=t.value,o=t.children,i=(0,n._T)(t,["value","children"]),l=a[e](r,i);if("function"==typeof o)return o(l);var m=a.textComponent||s.Fragment;return s.createElement(m,null,l)};return t.displayName=r[e],t}function d(e){return e}i.displayName="FormattedNumberParts";var u=m("formatDate"),p=m("formatTime");m("formatNumber"),m("formatList"),m("formatDisplayName"),l("formatDate"),l("formatTime")}}]);