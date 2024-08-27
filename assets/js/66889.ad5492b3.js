"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[66889],{46901:(e,o,t)=>{t.d(o,{Z:()=>I});var r=t(80102),a=t(83117),l=t(67294),n=t(63961),s=t(94780),i=t(51025),c=t(90948),d=t(28628),p=t(80560),m=t(98216),v=t(90629),u=t(1588),Z=t(34867);function h(e){return(0,Z.ZP)("MuiAlert",e)}const f=(0,u.Z)("MuiAlert",["root","action","icon","message","filled","colorSuccess","colorInfo","colorWarning","colorError","filledSuccess","filledInfo","filledWarning","filledError","outlined","outlinedSuccess","outlinedInfo","outlinedWarning","outlinedError","standard","standardSuccess","standardInfo","standardWarning","standardError"]);var g=t(93946),x=t(88169),S=t(85893);const C=(0,x.Z)((0,S.jsx)("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"}),"SuccessOutlined"),w=(0,x.Z)((0,S.jsx)("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}),"ReportProblemOutlined"),y=(0,x.Z)((0,S.jsx)("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline"),A=(0,x.Z)((0,S.jsx)("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"}),"InfoOutlined");var M=t(34484);const j=["action","children","className","closeText","color","components","componentsProps","icon","iconMapping","onClose","role","severity","slotProps","slots","variant"],P=(0,c.ZP)(v.Z,{name:"MuiAlert",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.root,o[t.variant],o[`${t.variant}${(0,m.Z)(t.color||t.severity)}`]]}})((({theme:e})=>{const o="light"===e.palette.mode?i._j:i.$n,t="light"===e.palette.mode?i.$n:i._j;return(0,a.Z)({},e.typography.body2,{backgroundColor:"transparent",display:"flex",padding:"6px 16px",variants:[...Object.entries(e.palette).filter((([,e])=>e.main&&e.light)).map((([r])=>({props:{colorSeverity:r,variant:"standard"},style:{color:e.vars?e.vars.palette.Alert[`${r}Color`]:o(e.palette[r].light,.6),backgroundColor:e.vars?e.vars.palette.Alert[`${r}StandardBg`]:t(e.palette[r].light,.9),[`& .${f.icon}`]:e.vars?{color:e.vars.palette.Alert[`${r}IconColor`]}:{color:e.palette[r].main}}}))),...Object.entries(e.palette).filter((([,e])=>e.main&&e.light)).map((([t])=>({props:{colorSeverity:t,variant:"outlined"},style:{color:e.vars?e.vars.palette.Alert[`${t}Color`]:o(e.palette[t].light,.6),border:`1px solid ${(e.vars||e).palette[t].light}`,[`& .${f.icon}`]:e.vars?{color:e.vars.palette.Alert[`${t}IconColor`]}:{color:e.palette[t].main}}}))),...Object.entries(e.palette).filter((([,e])=>e.main&&e.dark)).map((([o])=>({props:{colorSeverity:o,variant:"filled"},style:(0,a.Z)({fontWeight:e.typography.fontWeightMedium},e.vars?{color:e.vars.palette.Alert[`${o}FilledColor`],backgroundColor:e.vars.palette.Alert[`${o}FilledBg`]}:{backgroundColor:"dark"===e.palette.mode?e.palette[o].dark:e.palette[o].main,color:e.palette.getContrastText(e.palette[o].main)})})))]})})),$=(0,c.ZP)("div",{name:"MuiAlert",slot:"Icon",overridesResolver:(e,o)=>o.icon})({marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9}),N=(0,c.ZP)("div",{name:"MuiAlert",slot:"Message",overridesResolver:(e,o)=>o.message})({padding:"8px 0",minWidth:0,overflow:"auto"}),z=(0,c.ZP)("div",{name:"MuiAlert",slot:"Action",overridesResolver:(e,o)=>o.action})({display:"flex",alignItems:"flex-start",padding:"4px 0 0 16px",marginLeft:"auto",marginRight:-8}),b={success:(0,S.jsx)(C,{fontSize:"inherit"}),warning:(0,S.jsx)(w,{fontSize:"inherit"}),error:(0,S.jsx)(y,{fontSize:"inherit"}),info:(0,S.jsx)(A,{fontSize:"inherit"})},I=l.forwardRef((function(e,o){const t=(0,d.i)({props:e,name:"MuiAlert"}),{action:l,children:i,className:c,closeText:v="Close",color:u,components:Z={},componentsProps:f={},icon:x,iconMapping:C=b,onClose:w,role:y="alert",severity:A="success",slotProps:I={},slots:k={},variant:L="standard"}=t,R=(0,r.Z)(t,j),F=(0,a.Z)({},t,{color:u,severity:A,variant:L,colorSeverity:u||A}),O=(e=>{const{variant:o,color:t,severity:r,classes:a}=e,l={root:["root",`color${(0,m.Z)(t||r)}`,`${o}${(0,m.Z)(t||r)}`,`${o}`],icon:["icon"],message:["message"],action:["action"]};return(0,s.Z)(l,h,a)})(F),T={slots:(0,a.Z)({closeButton:Z.CloseButton,closeIcon:Z.CloseIcon},k),slotProps:(0,a.Z)({},f,I)},[B,W]=(0,p.Z)("closeButton",{elementType:g.Z,externalForwardedProps:T,ownerState:F}),[E,H]=(0,p.Z)("closeIcon",{elementType:M.Z,externalForwardedProps:T,ownerState:F});return(0,S.jsxs)(P,(0,a.Z)({role:y,elevation:0,ownerState:F,className:(0,n.Z)(O.root,c),ref:o},R,{children:[!1!==x?(0,S.jsx)($,{ownerState:F,className:O.icon,children:x||C[A]||b[A]}):null,(0,S.jsx)(N,{ownerState:F,className:O.message,children:i}),null!=l?(0,S.jsx)(z,{ownerState:F,className:O.action,children:l}):null,null==l&&w?(0,S.jsx)(z,{ownerState:F,className:O.action,children:(0,S.jsx)(B,(0,a.Z)({size:"small","aria-label":v,title:v,color:"inherit",onClick:w},W,{children:(0,S.jsx)(E,(0,a.Z)({fontSize:"small"},H))}))}):null]}))}))},94253:(e,o,t)=>{t.d(o,{Z:()=>x});var r=t(83117),a=t(80102),l=t(67294),n=t(63961),s=t(74854),i=t(18784),c=t(87893),d=t(71713),p=t(85893);const m=["className","component"];var v=t(37078),u=t(75389),Z=t(10606);const h=(0,t(1588).Z)("MuiBox",["root"]),f=(0,u.Z)(),g=function(e={}){const{themeId:o,defaultTheme:t,defaultClassName:v="MuiBox-root",generateClassName:u}=e,Z=(0,s.default)("div",{shouldForwardProp:e=>"theme"!==e&&"sx"!==e&&"as"!==e})(i.Z);return l.forwardRef((function(e,l){const s=(0,d.Z)(t),i=(0,c.Z)(e),{className:h,component:f="div"}=i,g=(0,a.Z)(i,m);return(0,p.jsx)(Z,(0,r.Z)({as:f,ref:l,className:(0,n.Z)(h,u?u(v):v),theme:o&&s[o]||s},g))}))}({themeId:Z.Z,defaultTheme:f,defaultClassName:h.root,generateClassName:v.Z.generate}),x=g},34484:(e,o,t)=>{t.d(o,{Z:()=>l});t(67294);var r=t(88169),a=t(85893);const l=(0,r.Z)((0,a.jsx)("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close")},80560:(e,o,t)=>{t.d(o,{Z:()=>m});var r=t(83117),a=t(80102),l=t(33703),n=t(86542),s=t(65610),i=t(65220);const c=["className","elementType","ownerState","externalForwardedProps","getSlotOwnerState","internalForwardedProps"],d=["component","slots","slotProps"],p=["component"];function m(e,o){const{className:t,elementType:m,ownerState:v,externalForwardedProps:u,getSlotOwnerState:Z,internalForwardedProps:h}=o,f=(0,a.Z)(o,c),{component:g,slots:x={[e]:void 0},slotProps:S={[e]:void 0}}=u,C=(0,a.Z)(u,d),w=x[e]||m,y=(0,s.Z)(S[e],v),A=(0,i.Z)((0,r.Z)({className:t},f,{externalForwardedProps:"root"===e?C:void 0,externalSlotProps:y})),{props:{component:M},internalRef:j}=A,P=(0,a.Z)(A.props,p),$=(0,l.Z)(j,null==y?void 0:y.ref,o.ref),N=Z?Z(P):{},z=(0,r.Z)({},v,N),b="root"===e?M||g:M,I=(0,n.Z)(w,(0,r.Z)({},"root"===e&&!g&&!x[e]&&h,"root"!==e&&!x[e]&&h,P,b&&{as:b},{ref:$}),z);return Object.keys(N).forEach((e=>{delete I[e]})),[w,I]}}}]);