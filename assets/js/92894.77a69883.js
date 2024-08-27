"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[92894],{66090:(e,t,r)=>{r.d(t,{Z:()=>S});var a=r(80102),n=r(83117),o=r(67294),i=r(98216),s=r(27909);var l=r(90948),c=r(28628),d=r(25662),u=r(98363),m=r(98456),g=r(35971),p=r(34867);function f(e){return(0,p.ZP)("MuiLoadingButton",e)}const v=(0,r(1588).Z)("MuiLoadingButton",["root","loading","loadingIndicator","loadingIndicatorCenter","loadingIndicatorStart","loadingIndicatorEnd","endIconLoadingEnd","startIconLoadingStart"]);var h=r(85893);const Z=["children","disabled","id","loading","loadingIndicator","loadingPosition","variant"],y=e=>{const{loading:t,loadingPosition:r,classes:a}=e,o=function(e,t,r){const a={};return Object.keys(e).forEach((n=>{a[n]=e[n].reduce(((e,a)=>{if(a){const n=t(a);""!==n&&e.push(n),r&&r[a]&&e.push(r[a])}return e}),[]).join(" ")})),a}({root:["root",t&&"loading"],startIcon:[t&&`startIconLoading${(0,i.Z)(r)}`],endIcon:[t&&`endIconLoading${(0,i.Z)(r)}`],loadingIndicator:["loadingIndicator",t&&`loadingIndicator${(0,i.Z)(r)}`]},f,a);return(0,n.Z)({},a,o)},b=(0,l.ZP)(d.Z,{shouldForwardProp:e=>(e=>"ownerState"!==e&&"theme"!==e&&"sx"!==e&&"as"!==e&&"classes"!==e)(e)||"classes"===e,name:"MuiLoadingButton",slot:"Root",overridesResolver:(e,t)=>[t.root,t.startIconLoadingStart&&{[`& .${v.startIconLoadingStart}`]:t.startIconLoadingStart},t.endIconLoadingEnd&&{[`& .${v.endIconLoadingEnd}`]:t.endIconLoadingEnd}]})((({ownerState:e,theme:t})=>(0,n.Z)({[`& .${v.startIconLoadingStart}, & .${v.endIconLoadingEnd}`]:{transition:t.transitions.create(["opacity"],{duration:t.transitions.duration.short}),opacity:0}},"center"===e.loadingPosition&&{transition:t.transitions.create(["background-color","box-shadow","border-color"],{duration:t.transitions.duration.short}),[`&.${v.loading}`]:{color:"transparent"}},"start"===e.loadingPosition&&e.fullWidth&&{[`& .${v.startIconLoadingStart}, & .${v.endIconLoadingEnd}`]:{transition:t.transitions.create(["opacity"],{duration:t.transitions.duration.short}),opacity:0,marginRight:-8}},"end"===e.loadingPosition&&e.fullWidth&&{[`& .${v.startIconLoadingStart}, & .${v.endIconLoadingEnd}`]:{transition:t.transitions.create(["opacity"],{duration:t.transitions.duration.short}),opacity:0,marginLeft:-8}}))),M=(0,l.ZP)("span",{name:"MuiLoadingButton",slot:"LoadingIndicator",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.loadingIndicator,t[`loadingIndicator${(0,i.Z)(r.loadingPosition)}`]]}})((({theme:e,ownerState:t})=>(0,n.Z)({position:"absolute",visibility:"visible",display:"flex"},"start"===t.loadingPosition&&("outlined"===t.variant||"contained"===t.variant)&&{left:"small"===t.size?10:14},"start"===t.loadingPosition&&"text"===t.variant&&{left:6},"center"===t.loadingPosition&&{left:"50%",transform:"translate(-50%)",color:(e.vars||e).palette.action.disabled},"end"===t.loadingPosition&&("outlined"===t.variant||"contained"===t.variant)&&{right:"small"===t.size?10:14},"end"===t.loadingPosition&&"text"===t.variant&&{right:6},"start"===t.loadingPosition&&t.fullWidth&&{position:"relative",left:-10},"end"===t.loadingPosition&&t.fullWidth&&{position:"relative",right:-10}))),S=o.forwardRef((function(e,t){const r=o.useContext(u.Z),i=(0,g.Z)(r,e),l=(0,c.i)({props:i,name:"MuiLoadingButton"}),{children:d,disabled:p=!1,id:f,loading:v=!1,loadingIndicator:S,loadingPosition:P="center",variant:I="text"}=l,E=(0,a.Z)(l,Z),k=(0,s.Z)(f),C=null!=S?S:(0,h.jsx)(m.Z,{"aria-labelledby":k,color:"inherit",size:16}),N=(0,n.Z)({},l,{disabled:p,loading:v,loadingIndicator:C,loadingPosition:P,variant:I}),D=y(N),x=v?(0,h.jsx)(M,{className:D.loadingIndicator,ownerState:N,children:C}):null;return(0,h.jsxs)(b,(0,n.Z)({disabled:p||v,id:k,ref:t},E,{variant:I,classes:D,ownerState:N,children:["end"===N.loadingPosition?d:x,"end"===N.loadingPosition?x:d]}))}))},87952:(e,t,r)=>{r.d(t,{Z:()=>y});var a=r(80102),n=r(83117),o=r(67294),i=r(63961),s=r(94780),l=r(90948),c=r(28628),d=r(88169),u=r(85893);const m=(0,d.Z)((0,u.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");var g=r(54801),p=r(80560);const f=["alt","children","className","component","slots","slotProps","imgProps","sizes","src","srcSet","variant"],v=(0,l.ZP)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[r.variant],r.colorDefault&&t.colorDefault]}})((({theme:e})=>({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none",variants:[{props:{variant:"rounded"},style:{borderRadius:(e.vars||e).shape.borderRadius}},{props:{variant:"square"},style:{borderRadius:0}},{props:{colorDefault:!0},style:(0,n.Z)({color:(e.vars||e).palette.background.default},e.vars?{backgroundColor:e.vars.palette.Avatar.defaultBg}:(0,n.Z)({backgroundColor:e.palette.grey[400]},e.applyStyles("dark",{backgroundColor:e.palette.grey[600]})))}]}))),h=(0,l.ZP)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(e,t)=>t.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),Z=(0,l.ZP)(m,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(e,t)=>t.fallback})({width:"75%",height:"75%"});const y=o.forwardRef((function(e,t){const r=(0,c.i)({props:e,name:"MuiAvatar"}),{alt:l,children:d,className:m,component:y="div",slots:b={},slotProps:M={},imgProps:S,sizes:P,src:I,srcSet:E,variant:k="circular"}=r,C=(0,a.Z)(r,f);let N=null;const D=function({crossOrigin:e,referrerPolicy:t,src:r,srcSet:a}){const[n,i]=o.useState(!1);return o.useEffect((()=>{if(!r&&!a)return;i(!1);let n=!0;const o=new Image;return o.onload=()=>{n&&i("loaded")},o.onerror=()=>{n&&i("error")},o.crossOrigin=e,o.referrerPolicy=t,o.src=r,a&&(o.srcset=a),()=>{n=!1}}),[e,t,r,a]),n}((0,n.Z)({},S,{src:I,srcSet:E})),x=I||E,T=x&&"error"!==D,w=(0,n.Z)({},r,{colorDefault:!T,component:y,variant:k}),R=(e=>{const{classes:t,variant:r,colorDefault:a}=e,n={root:["root",r,a&&"colorDefault"],img:["img"],fallback:["fallback"]};return(0,s.Z)(n,g.$,t)})(w),[j,A]=(0,p.Z)("img",{className:R.img,elementType:h,externalForwardedProps:{slots:b,slotProps:{img:(0,n.Z)({},S,M.img)}},additionalProps:{alt:l,src:I,srcSet:E,sizes:P},ownerState:w});return N=T?(0,u.jsx)(j,(0,n.Z)({},A)):d||0===d?d:x&&l?l[0]:(0,u.jsx)(Z,{ownerState:w,className:R.fallback}),(0,u.jsx)(v,(0,n.Z)({as:y,ownerState:w,className:(0,i.Z)(R.root,m),ref:t},C,{children:N}))}))},54801:(e,t,r)=>{r.d(t,{$:()=>o,Z:()=>i});var a=r(1588),n=r(34867);function o(e){return(0,n.ZP)("MuiAvatar",e)}const i=(0,a.Z)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"])},44267:(e,t,r)=>{r.d(t,{Z:()=>v});var a=r(83117),n=r(80102),o=r(67294),i=r(63961),s=r(94780),l=r(90948),c=r(28628),d=r(1588),u=r(34867);function m(e){return(0,u.ZP)("MuiCardContent",e)}(0,d.Z)("MuiCardContent",["root"]);var g=r(85893);const p=["className","component"],f=(0,l.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({padding:16,"&:last-child":{paddingBottom:24}}))),v=o.forwardRef((function(e,t){const r=(0,c.i)({props:e,name:"MuiCardContent"}),{className:o,component:l="div"}=r,d=(0,n.Z)(r,p),u=(0,a.Z)({},r,{component:l}),v=(e=>{const{classes:t}=e;return(0,s.Z)({root:["root"]},m,t)})(u);return(0,g.jsx)(f,(0,a.Z)({as:l,className:(0,i.Z)(v.root,o),ownerState:u,ref:t},d))}))},98456:(e,t,r)=>{r.d(t,{Z:()=>N});var a=r(80102),n=r(83117),o=r(67294),i=r(63961),s=r(94780),l=r(70917),c=r(98216),d=r(28628),u=r(90948),m=r(1588),g=r(34867);function p(e){return(0,g.ZP)("MuiCircularProgress",e)}(0,m.Z)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);var f=r(85893);const v=["className","color","disableShrink","size","style","thickness","value","variant"];let h,Z,y,b,M=e=>e;const S=44,P=(0,l.F4)(h||(h=M`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),I=(0,l.F4)(Z||(Z=M`
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
`)),E=(0,u.ZP)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[r.variant],t[`color${(0,c.Z)(r.color)}`]]}})((({ownerState:e,theme:t})=>(0,n.Z)({display:"inline-block"},"determinate"===e.variant&&{transition:t.transitions.create("transform")},"inherit"!==e.color&&{color:(t.vars||t).palette[e.color].main})),(({ownerState:e})=>"indeterminate"===e.variant&&(0,l.iv)(y||(y=M`
      animation: ${0} 1.4s linear infinite;
    `),P))),k=(0,u.ZP)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(e,t)=>t.svg})({display:"block"}),C=(0,u.ZP)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.circle,t[`circle${(0,c.Z)(r.variant)}`],r.disableShrink&&t.circleDisableShrink]}})((({ownerState:e,theme:t})=>(0,n.Z)({stroke:"currentColor"},"determinate"===e.variant&&{transition:t.transitions.create("stroke-dashoffset")},"indeterminate"===e.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0})),(({ownerState:e})=>"indeterminate"===e.variant&&!e.disableShrink&&(0,l.iv)(b||(b=M`
      animation: ${0} 1.4s ease-in-out infinite;
    `),I))),N=o.forwardRef((function(e,t){const r=(0,d.i)({props:e,name:"MuiCircularProgress"}),{className:o,color:l="primary",disableShrink:u=!1,size:m=40,style:g,thickness:h=3.6,value:Z=0,variant:y="indeterminate"}=r,b=(0,a.Z)(r,v),M=(0,n.Z)({},r,{color:l,disableShrink:u,size:m,thickness:h,value:Z,variant:y}),P=(e=>{const{classes:t,variant:r,color:a,disableShrink:n}=e,o={root:["root",r,`color${(0,c.Z)(a)}`],svg:["svg"],circle:["circle",`circle${(0,c.Z)(r)}`,n&&"circleDisableShrink"]};return(0,s.Z)(o,p,t)})(M),I={},N={},D={};if("determinate"===y){const e=2*Math.PI*((S-h)/2);I.strokeDasharray=e.toFixed(3),D["aria-valuenow"]=Math.round(Z),I.strokeDashoffset=`${((100-Z)/100*e).toFixed(3)}px`,N.transform="rotate(-90deg)"}return(0,f.jsx)(E,(0,n.Z)({className:(0,i.Z)(P.root,o),style:(0,n.Z)({width:m,height:m},N,g),ownerState:M,ref:t,role:"progressbar"},D,b,{children:(0,f.jsx)(k,{className:P.svg,ownerState:M,viewBox:"22 22 44 44",children:(0,f.jsx)(C,{className:P.circle,style:I,ownerState:M,cx:S,cy:S,r:(S-h)/2,fill:"none",strokeWidth:h})})}))}))},18987:(e,t,r)=>{r.d(t,{Z:()=>h});var a=r(80102),n=r(83117),o=r(67294),i=r(63961),s=r(94780),l=r(59773),c=r(90948),d=r(28628),u=r(1588),m=r(34867);function g(e){return(0,m.ZP)("MuiListItemAvatar",e)}(0,u.Z)("MuiListItemAvatar",["root","alignItemsFlexStart"]);var p=r(85893);const f=["className"],v=(0,c.ZP)("div",{name:"MuiListItemAvatar",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,"flex-start"===r.alignItems&&t.alignItemsFlexStart]}})((({ownerState:e})=>(0,n.Z)({minWidth:56,flexShrink:0},"flex-start"===e.alignItems&&{marginTop:8}))),h=o.forwardRef((function(e,t){const r=(0,d.i)({props:e,name:"MuiListItemAvatar"}),{className:c}=r,u=(0,a.Z)(r,f),m=o.useContext(l.Z),h=(0,n.Z)({},r,{alignItems:m.alignItems}),Z=(e=>{const{alignItems:t,classes:r}=e,a={root:["root","flex-start"===t&&"alignItemsFlexStart"]};return(0,s.Z)(a,g,r)})(h);return(0,p.jsx)(v,(0,n.Z)({className:(0,i.Z)(Z.root,c),ownerState:h,ref:t},u))}))},59334:(e,t,r)=>{r.d(t,{Z:()=>v});var a=r(80102),n=r(83117),o=r(67294),i=r(63961),s=r(94780),l=r(15861),c=r(59773),d=r(28628),u=r(90948),m=r(26336),g=r(85893);const p=["children","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"],f=(0,u.ZP)("div",{name:"MuiListItemText",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[{[`& .${m.Z.primary}`]:t.primary},{[`& .${m.Z.secondary}`]:t.secondary},t.root,r.inset&&t.inset,r.primary&&r.secondary&&t.multiline,r.dense&&t.dense]}})((({ownerState:e})=>(0,n.Z)({flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},e.primary&&e.secondary&&{marginTop:6,marginBottom:6},e.inset&&{paddingLeft:56}))),v=o.forwardRef((function(e,t){const r=(0,d.i)({props:e,name:"MuiListItemText"}),{children:u,className:v,disableTypography:h=!1,inset:Z=!1,primary:y,primaryTypographyProps:b,secondary:M,secondaryTypographyProps:S}=r,P=(0,a.Z)(r,p),{dense:I}=o.useContext(c.Z);let E=null!=y?y:u,k=M;const C=(0,n.Z)({},r,{disableTypography:h,inset:Z,primary:!!E,secondary:!!k,dense:I}),N=(e=>{const{classes:t,inset:r,primary:a,secondary:n,dense:o}=e,i={root:["root",r&&"inset",o&&"dense",a&&n&&"multiline"],primary:["primary"],secondary:["secondary"]};return(0,s.Z)(i,m.L,t)})(C);return null==E||E.type===l.Z||h||(E=(0,g.jsx)(l.Z,(0,n.Z)({variant:I?"body2":"body1",className:N.primary,component:null!=b&&b.variant?void 0:"span",display:"block"},b,{children:E}))),null==k||k.type===l.Z||h||(k=(0,g.jsx)(l.Z,(0,n.Z)({variant:"body2",className:N.secondary,color:"text.secondary",display:"block"},S,{children:k}))),(0,g.jsxs)(f,(0,n.Z)({className:(0,i.Z)(N.root,v),ownerState:C,ref:t},P,{children:[E,k]}))}))},44287:(e,t,r)=>{r.d(t,{Z:()=>n});var a=r(67294);const n=e=>{const t=a.useRef({});return a.useEffect((()=>{t.current=e})),t.current}},29246:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(97582),n=r(91705),o=r(24085),i=r(66821);class s{static getAllSnippets(e){return(0,n.N)(Object.assign(Object.assign({},e),{url:o.Z.GetSnippets.url({}),method:o.Z.GetSnippets.method}))}static getAThread(e,t){const r=(0,i.B)(e);return(0,n.N)(Object.assign(Object.assign({},t),{url:`${o.Z.GetAThread.url({})}?${r.toString()}`,method:o.Z.GetAThread.method}))}static getASingleMessage(e,t){return(0,n.N)(Object.assign(Object.assign({},t),{url:o.Z.GetASingleMessage.url({id:e}),method:o.Z.GetASingleMessage.method}))}static sendAMessage(e,t){return(0,n.N)(Object.assign(Object.assign({},t),{data:e,url:o.Z.SendMessage.url({}),method:o.Z.SendMessage.method}))}static deleteAMessage(e,t){return(0,n.N)(Object.assign(Object.assign({},t),{url:o.Z.DeleteASingleMessage.url({id:e}),method:o.Z.DeleteASingleMessage.method}))}static deleteAThread(e,t){const r=(0,i.B)(e);return(0,n.N)(Object.assign(Object.assign({},t),{url:`${o.Z.DeleteAThread.url({})}?${r.toString()}`,method:o.Z.DeleteAThread.method}))}static uploadMedia(e,t){return(0,n.N)(Object.assign(Object.assign({},t),{data:e,url:o.Z.PrivateMessageUploadMedia.url({}),method:o.Z.PrivateMessageUploadMedia.method}))}static uploadThumbnail(e,t){return(0,n.N)(Object.assign(Object.assign({},t),{data:e,url:o.Z.PrivateMessageUploadThumbnail.url({}),method:o.Z.PrivateMessageUploadThumbnail.method}))}static uploadMediaInChunks(e,t){return(0,n.N)(Object.assign(Object.assign({},t),{data:e,url:o.Z.PrivateMessageUploadMediaInChunks.url({}),method:o.Z.PrivateMessageUploadMediaInChunks.method}))}static chunkUploadDone(e,t){return(0,n.N)(Object.assign(Object.assign({},t),{url:o.Z.PrivateMessageChunkUploadDone.url({}),method:o.Z.PrivateMessageChunkUploadDone.method,data:e}))}static searchUser(e,t){return(0,n.N)(Object.assign(Object.assign({},t),{url:o.Z.PrivateMessageSearchUser.url({search:e}),method:o.Z.PrivateMessageSearchUser.method}))}}class l{static getAllSnippets(e){return(0,a.mG)(this,void 0,void 0,(function*(){return s.getAllSnippets(e)}))}static getAThread(e,t){return(0,a.mG)(this,void 0,void 0,(function*(){return s.getAThread(e,t)}))}static getASingleMessage(e,t){return(0,a.mG)(this,void 0,void 0,(function*(){return s.getASingleMessage(e,t)}))}static sendAMessage(e,t){return(0,a.mG)(this,void 0,void 0,(function*(){return s.sendAMessage(e,t)}))}static deleteAMessage(e,t){return(0,a.mG)(this,void 0,void 0,(function*(){return s.deleteAMessage(e,t)}))}static deleteAThread(e,t){return(0,a.mG)(this,void 0,void 0,(function*(){return s.deleteAThread(e,t)}))}static uploadMedia(e,t){return(0,a.mG)(this,void 0,void 0,(function*(){return s.uploadMedia(e,t)}))}static uploadThumbnail(e,t){return(0,a.mG)(this,void 0,void 0,(function*(){return s.uploadThumbnail(e,t)}))}static uploadMediaInChunks(e,t){return(0,a.mG)(this,void 0,void 0,(function*(){return s.uploadMediaInChunks(e,t)}))}static chunkUploadDone(e,t){return(0,a.mG)(this,void 0,void 0,(function*(){return s.chunkUploadDone(e,t)}))}static searchUser(e,t){return(0,a.mG)(this,void 0,void 0,(function*(){return s.searchUser(e,t)}))}}},97265:(e,t,r)=>{r.d(t,{Z:()=>i});var a=r(97582),n=r(67294),o=r(41538);const i=n.forwardRef(((e,t)=>{var{children:r}=e,i=(0,a._T)(e,["children"]);const s=(0,n.useContext)(o.WQ);if(s.routerLink){const e=s.routerLink;return n.createElement(e,Object.assign({},i,{ref:t}),r)}const{to:l}=i,c=(0,a._T)(i,["to"]);return n.createElement("a",Object.assign({href:l},c,{ref:t}),r)}))},58771:(e,t,r)=>{r.d(t,{Z:()=>w});var a=r(97582),n=r(67294),o=r(90948),i=r(93946),s=r(44652),l=r(25464),c=r(2734),d=r(37292),u=r(97212),m=r(48885),g=r(18972),p=r(78462),f=r(44012),v=r(67564),h=r(94184),Z=r.n(h),y=r(29360),b=r(41538),M=r(97265),S=r(12132),P=r(27560),I=r(29246),E=r(1798),k=r.n(E);const C="SCPrivateMessageSettingsIconButton",N={root:`${C}-root`,drawerRoot:`${C}-drawer-root`,menuRoot:`${C}-menu-root`,paper:`${C}-paper`,item:`${C}-item`},D=(0,o.ZP)(i.Z,{name:C,slot:"Root"})((()=>({}))),x=(0,o.ZP)(s.Z,{name:C,slot:"DrawerRoot"})((()=>({}))),T=(0,o.ZP)(l.Z,{name:C,slot:"MenuRoot"})((()=>({})));const w=function(e){const t=(0,y.Z)({props:e,name:C}),{className:r=null,onMenuItemDeleteClick:o,user:i,group:s,onItemDeleteConfirm:l,threadToDelete:h}=t,E=(0,a._T)(t,["className","onMenuItemDeleteClick","user","group","onItemDeleteConfirm","threadToDelete"]),[w,R]=(0,n.useState)(null),[j,A]=(0,n.useState)(!1),O=(0,c.Z)(),L=(0,d.Z)(O.breakpoints.down("md")),B=(0,b.sy)(),$=e=>{R(e.currentTarget)},F=()=>{R(null)},U=()=>{A(!0),R(null)},_=()=>{A(!1),R(null),l&&l()},G=()=>L?[i&&!s&&n.createElement(u.ZP,{className:N.item,key:"profile",component:M.Z,to:B.url(S.USER_PROFILE_ROUTE_NAME,i)},n.createElement(m.Z,null,n.createElement(v.Z,null,"people_alt")),n.createElement(f.Z,{id:"ui.privateMessageSettingsIconButton.item.profile",defaultMessage:"ui.privateMessageSettingsIconButton.item.profile"})),s&&!i&&n.createElement(u.ZP,{className:N.item,key:"group",component:M.Z,to:B.url(S.GROUP_ROUTE_NAME,s)},n.createElement(m.Z,null,n.createElement(v.Z,null,"groups")),n.createElement(f.Z,{id:"ui.privateMessageSettingsIconButton.item.group",defaultMessage:"ui.privateMessageSettingsIconButton.item.group"})),n.createElement(u.ZP,{className:N.item,key:"delete",onClick:h?U:o},n.createElement(m.Z,null,n.createElement(v.Z,null,"delete")),n.createElement(f.Z,{id:"ui.privateMessageSettingsIconButton.item.delete",defaultMessage:"ui.privateMessageSettingsIconButton.item.delete"}))]:[i&&!s&&n.createElement(g.Z,{className:N.item,component:M.Z,to:B.url(S.USER_PROFILE_ROUTE_NAME,i),key:"profile",onClick:_},n.createElement(m.Z,null,n.createElement(v.Z,null,"people_alt")),n.createElement(f.Z,{id:"ui.privateMessageSettingsIconButton.item.profile",defaultMessage:"ui.privateMessageSettingsIconButton.item.profile"})),s&&!i&&n.createElement(g.Z,{className:N.item,component:M.Z,to:B.url(S.GROUP_ROUTE_NAME,s),key:"group",onClick:_},n.createElement(m.Z,null,n.createElement(v.Z,null,"groups")),n.createElement(f.Z,{id:"ui.privateMessageSettingsIconButton.item.group",defaultMessage:"ui.privateMessageSettingsIconButton.item.group"})),n.createElement(g.Z,{className:N.item,onClick:h?U:o,key:"delete"},n.createElement(m.Z,null,n.createElement(v.Z,null,"delete")),n.createElement(f.Z,{id:"ui.privateMessageSettingsIconButton.item.delete",defaultMessage:"ui.privateMessageSettingsIconButton.item.delete"}))];return n.createElement(n.Fragment,null,n.createElement(D,Object.assign({className:Z()(N.root,r)},E,{onClick:$}),n.createElement(v.Z,null,"more_vert")),L?n.createElement(x,{className:N.drawerRoot,anchor:"bottom",open:Boolean(w),onClose:F,onOpen:$,PaperProps:{className:N.paper},disableSwipeToOpen:!0},n.createElement(p.Z,null,G())):n.createElement(T,{className:N.menuRoot,anchorEl:w,open:Boolean(w),onClose:F,PaperProps:{className:N.paper}},G()),j&&n.createElement(P.Z,{open:j,title:n.createElement(f.Z,{id:"ui.privateMessageSettingsIconButton.dialog.msg",defaultMessage:"ui.privateMessageSettingsIconButton.dialog.msg"}),btnConfirm:n.createElement(f.Z,{id:"ui.privateMessageSettingsIconButton.dialog.confirm",defaultMessage:"ui.privateMessageSettingsIconButton.dialog.confirm"}),onConfirm:function(){const e=s?{group:h}:{user:h};I.Z.deleteAThread(e).then((()=>{s?k().publish("snippetsChannelDeleteGroup",h):k().publish("snippetsChannelDelete",h),_()})).catch((e=>{A(!1),console.log(e)}))},onClose:_}))}},27560:(e,t,r)=>{r.d(t,{Z:()=>D});var a=r(97582),n=r(67294),o=r(90948),i=r(66242),s=r(25662),l=r(64666),c=r(37645),d=r(6514),u=r(80102),m=r(83117),g=r(63961),p=r(94780),f=r(14136),v=r(28628),h=r(15861),Z=r(1588),y=r(34867);function b(e){return(0,y.ZP)("MuiDialogContentText",e)}(0,Z.Z)("MuiDialogContentText",["root"]);var M=r(85893);const S=["children","className"],P=(0,o.ZP)(h.Z,{shouldForwardProp:e=>(0,f.Z)(e)||"classes"===e,name:"MuiDialogContentText",slot:"Root",overridesResolver:(e,t)=>t.root})({}),I=n.forwardRef((function(e,t){const r=(0,v.i)({props:e,name:"MuiDialogContentText"}),{className:a}=r,n=(0,u.Z)(r,S),o=(e=>{const{classes:t}=e,r=(0,p.Z)({root:["root"]},b,t);return(0,m.Z)({},t,r)})(n);return(0,M.jsx)(P,(0,m.Z)({component:"p",variant:"body1",color:"text.secondary",ref:t,ownerState:n,className:(0,g.Z)(o.root,a)},r,{classes:o}))}));var E=r(31425),k=r(44012),C=r(66090);const N=(0,o.ZP)(i.Z,{name:"SCConfirmDialog",slot:"Root",overridesResolver:(e,t)=>t.root})((({theme:e})=>({maxWidth:800,marginBottom:e.spacing(2)})));function D(e){const{open:t,title:r,content:o=null,btnConfirm:i=null,btnCancel:u=null,isUpdating:m=!1,onClose:g=null,onConfirm:p=null,disableBackdropClick:f=!1}=e,v=(0,a._T)(e,["open","title","content","btnConfirm","btnCancel","isUpdating","onClose","onConfirm","disableBackdropClick"]);function h(e){if(f&&("backdropClick"===e||"escapeKeyDown"===e))return!1;m||g&&g()}return n.createElement(N,null,n.createElement(l.Z,Object.assign({open:t,onClose:h},v),n.createElement(c.Z,null,r||n.createElement(k.Z,{id:"ui.confirmDialog.title",defaultMessage:"ui.confirmDialog.title"})),o&&n.createElement(d.Z,null,n.createElement(I,{component:"div"},o)),n.createElement(E.Z,null,n.createElement(s.Z,{onClick:h},u||n.createElement(k.Z,{id:"ui.confirmDialog.btnCancel",defaultMessage:"ui.confirmDialog.btnCancel"})),n.createElement(C.Z,{onClick:function(){p&&p()},variant:"contained",autoFocus:!0,loading:m},i||n.createElement(k.Z,{id:"ui.confirmDialog.btnConfirm",defaultMessage:"ui.confirmDialog.btnConfirm"})))))}},8545:(e,t,r)=>{var a,n,o;r.d(t,{_6:()=>n,j5:()=>o,sv:()=>a}),function(e){e.CREATED="created",e.DELETED="deleted",e.HIDDEN="hidden",e.NEW="new"}(a||(a={})),function(e){e.GROUP="group",e.USER="user",e.NEW="new"}(n||(n={})),function(e){e.DOCUMENT="application/",e.IMAGE="image/",e.VIDEO="video/",e.PDF="application/pdf",e.AUDIO="audio/"}(o||(o={}))},54490:(e,t,r)=>{r.d(t,{Ji:()=>m,qN:()=>g,vU:()=>u});var a,n,o=r(25719),i=r(67294),s=r(86896);!function(e){e.formatDate="FormattedDate",e.formatTime="FormattedTime",e.formatNumber="FormattedNumber",e.formatList="FormattedList",e.formatDisplayName="FormattedDisplayName"}(a||(a={})),function(e){e.formatDate="FormattedDateParts",e.formatTime="FormattedTimeParts",e.formatNumber="FormattedNumberParts",e.formatList="FormattedListParts"}(n||(n={}));var l=function(e){var t=(0,s.Z)(),r=e.value,a=e.children,n=(0,o._T)(e,["value","children"]);return a(t.formatNumberToParts(r,n))};l.displayName="FormattedNumberParts";function c(e){var t=function(t){var r=(0,s.Z)(),a=t.value,n=t.children,i=(0,o._T)(t,["value","children"]),l="string"==typeof a?new Date(a||0):a;return n("formatDate"===e?r.formatDateToParts(l,i):r.formatTimeToParts(l,i))};return t.displayName=n[e],t}function d(e){var t=function(t){var r=(0,s.Z)(),a=t.value,n=t.children,l=(0,o._T)(t,["value","children"]),c=r[e](a,l);if("function"==typeof n)return n(c);var d=r.textComponent||i.Fragment;return i.createElement(d,null,c)};return t.displayName=a[e],t}function u(e){return e}l.displayName="FormattedNumberParts";var m=d("formatDate"),g=d("formatTime");d("formatNumber"),d("formatList"),d("formatDisplayName"),c("formatDate"),c("formatTime")}}]);