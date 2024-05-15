"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[32939],{46901:(e,t,o)=>{o.d(t,{Z:()=>$});var r=o(80102),n=o(83117),a=o(67294),l=o(63961),i=o(58510),s=o(2101),c=o(78114),d=o(90948),m=o(80560),u=o(98216),p=o(90629),v=o(1977),f=o(8027);function h(e){return(0,f.ZP)("MuiAlert",e)}const g=(0,v.Z)("MuiAlert",["root","action","icon","message","filled","colorSuccess","colorInfo","colorWarning","colorError","filledSuccess","filledInfo","filledWarning","filledError","outlined","outlinedSuccess","outlinedInfo","outlinedWarning","outlinedError","standard","standardSuccess","standardInfo","standardWarning","standardError"]);var Z=o(93946),S=o(88169),x=o(85893);const C=(0,S.Z)((0,x.jsx)("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"}),"SuccessOutlined"),b=(0,S.Z)((0,x.jsx)("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}),"ReportProblemOutlined"),w=(0,S.Z)((0,x.jsx)("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline"),M=(0,S.Z)((0,x.jsx)("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"}),"InfoOutlined");var y=o(34484);const E=["action","children","className","closeText","color","components","componentsProps","icon","iconMapping","onClose","role","severity","slotProps","slots","variant"],N=(0,c.U)("MuiAlert"),z=(0,d.ZP)(p.Z,{name:"MuiAlert",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[o.variant],t[`${o.variant}${(0,u.Z)(o.color||o.severity)}`]]}})((({theme:e})=>{const t="light"===e.palette.mode?s._j:s.$n,o="light"===e.palette.mode?s.$n:s._j;return(0,n.Z)({},e.typography.body2,{backgroundColor:"transparent",display:"flex",padding:"6px 16px",variants:[...Object.entries(e.palette).filter((([,e])=>e.main&&e.light)).map((([r])=>({props:{colorSeverity:r,variant:"standard"},style:{color:e.vars?e.vars.palette.Alert[`${r}Color`]:t(e.palette[r].light,.6),backgroundColor:e.vars?e.vars.palette.Alert[`${r}StandardBg`]:o(e.palette[r].light,.9),[`& .${g.icon}`]:e.vars?{color:e.vars.palette.Alert[`${r}IconColor`]}:{color:e.palette[r].main}}}))),...Object.entries(e.palette).filter((([,e])=>e.main&&e.light)).map((([o])=>({props:{colorSeverity:o,variant:"outlined"},style:{color:e.vars?e.vars.palette.Alert[`${o}Color`]:t(e.palette[o].light,.6),border:`1px solid ${(e.vars||e).palette[o].light}`,[`& .${g.icon}`]:e.vars?{color:e.vars.palette.Alert[`${o}IconColor`]}:{color:e.palette[o].main}}}))),...Object.entries(e.palette).filter((([,e])=>e.main&&e.dark)).map((([t])=>({props:{colorSeverity:t,variant:"filled"},style:(0,n.Z)({fontWeight:e.typography.fontWeightMedium},e.vars?{color:e.vars.palette.Alert[`${t}FilledColor`],backgroundColor:e.vars.palette.Alert[`${t}FilledBg`]}:{backgroundColor:"dark"===e.palette.mode?e.palette[t].dark:e.palette[t].main,color:e.palette.getContrastText(e.palette[t].main)})})))]})})),I=(0,d.ZP)("div",{name:"MuiAlert",slot:"Icon",overridesResolver:(e,t)=>t.icon})({marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9}),R=(0,d.ZP)("div",{name:"MuiAlert",slot:"Message",overridesResolver:(e,t)=>t.message})({padding:"8px 0",minWidth:0,overflow:"auto"}),P=(0,d.ZP)("div",{name:"MuiAlert",slot:"Action",overridesResolver:(e,t)=>t.action})({display:"flex",alignItems:"flex-start",padding:"4px 0 0 16px",marginLeft:"auto",marginRight:-8}),A={success:(0,x.jsx)(C,{fontSize:"inherit"}),warning:(0,x.jsx)(b,{fontSize:"inherit"}),error:(0,x.jsx)(w,{fontSize:"inherit"}),info:(0,x.jsx)(M,{fontSize:"inherit"})},$=a.forwardRef((function(e,t){const o=N({props:e,name:"MuiAlert"}),{action:a,children:s,className:c,closeText:d="Close",color:p,components:v={},componentsProps:f={},icon:g,iconMapping:S=A,onClose:C,role:b="alert",severity:w="success",slotProps:M={},slots:$={},variant:T="standard"}=o,k=(0,r.Z)(o,E),j=(0,n.Z)({},o,{color:p,severity:w,variant:T,colorSeverity:p||w}),F=(e=>{const{variant:t,color:o,severity:r,classes:n}=e,a={root:["root",`color${(0,u.Z)(o||r)}`,`${t}${(0,u.Z)(o||r)}`,`${t}`],icon:["icon"],message:["message"],action:["action"]};return(0,i.Z)(a,h,n)})(j),L={slots:(0,n.Z)({closeButton:v.CloseButton,closeIcon:v.CloseIcon},$),slotProps:(0,n.Z)({},f,M)},[D,B]=(0,m.Z)("closeButton",{elementType:Z.Z,externalForwardedProps:L,ownerState:j}),[O,W]=(0,m.Z)("closeIcon",{elementType:y.Z,externalForwardedProps:L,ownerState:j});return(0,x.jsxs)(z,(0,n.Z)({role:b,elevation:0,ownerState:j,className:(0,l.Z)(F.root,c),ref:t},k,{children:[!1!==g?(0,x.jsx)(I,{ownerState:j,className:F.icon,children:g||S[w]||A[w]}):null,(0,x.jsx)(R,{ownerState:j,className:F.message,children:s}),null!=a?(0,x.jsx)(P,{ownerState:j,className:F.action,children:a}):null,null==a&&C?(0,x.jsx)(P,{ownerState:j,className:F.action,children:(0,x.jsx)(D,(0,n.Z)({size:"small","aria-label":d,title:d,color:"inherit",onClick:C},B,{children:(0,x.jsx)(O,(0,n.Z)({fontSize:"small"},W))}))}):null]}))}))},5616:(e,t,o)=>{o.d(t,{Z:()=>S});var r=o(83117),n=o(80102),a=o(67294),l=o(70828),i=o(6352),s=o(86523),c=o(39707),d=o(96682),m=o(85893);const u=["className","component"];var p=o(31983),v=o(75389),f=o(10606);const h=(0,o(1977).Z)("MuiBox",["root"]),g=(0,v.Z)(),Z=function(e={}){const{themeId:t,defaultTheme:o,defaultClassName:p="MuiBox-root",generateClassName:v}=e,f=(0,i.default)("div",{shouldForwardProp:e=>"theme"!==e&&"sx"!==e&&"as"!==e})(s.Z);return a.forwardRef((function(e,a){const i=(0,d.Z)(o),s=(0,c.Z)(e),{className:h,component:g="div"}=s,Z=(0,n.Z)(s,u);return(0,m.jsx)(f,(0,r.Z)({as:g,ref:a,className:(0,l.Z)(h,v?v(p):p),theme:t&&i[t]||i},Z))}))}({themeId:f.Z,defaultTheme:g,defaultClassName:h.root,generateClassName:p.Z.generate}),S=Z},66242:(e,t,o)=>{o.d(t,{Z:()=>g});var r=o(83117),n=o(80102),a=o(67294),l=o(63961),i=o(58510),s=o(90948),c=o(71657),d=o(90629),m=o(1977),u=o(8027);function p(e){return(0,u.ZP)("MuiCard",e)}(0,m.Z)("MuiCard",["root"]);var v=o(85893);const f=["className","raised"],h=(0,s.ZP)(d.Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({overflow:"hidden"}))),g=a.forwardRef((function(e,t){const o=(0,c.Z)({props:e,name:"MuiCard"}),{className:a,raised:s=!1}=o,d=(0,n.Z)(o,f),m=(0,r.Z)({},o,{raised:s}),u=(e=>{const{classes:t}=e;return(0,i.Z)({root:["root"]},p,t)})(m);return(0,v.jsx)(h,(0,r.Z)({className:(0,l.Z)(u.root,a),elevation:s?8:void 0,ref:t,ownerState:m},d))}))},67720:(e,t,o)=>{o.d(t,{Z:()=>g});var r=o(80102),n=o(83117),a=o(67294),l=o(63961),i=o(58510),s=o(2101),c=o(90948),d=o(71657),m=o(35097),u=o(85893);const p=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],v=(0,c.ZP)("div",{name:"MuiDivider",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.absolute&&t.absolute,t[o.variant],o.light&&t.light,"vertical"===o.orientation&&t.vertical,o.flexItem&&t.flexItem,o.children&&t.withChildren,o.children&&"vertical"===o.orientation&&t.withChildrenVertical,"right"===o.textAlign&&"vertical"!==o.orientation&&t.textAlignRight,"left"===o.textAlign&&"vertical"!==o.orientation&&t.textAlignLeft]}})((({theme:e,ownerState:t})=>(0,n.Z)({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(e.vars||e).palette.divider,borderBottomWidth:"thin"},t.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},t.light&&{borderColor:e.vars?`rgba(${e.vars.palette.dividerChannel} / 0.08)`:(0,s.Fq)(e.palette.divider,.08)},"inset"===t.variant&&{marginLeft:72},"middle"===t.variant&&"horizontal"===t.orientation&&{marginLeft:e.spacing(2),marginRight:e.spacing(2)},"middle"===t.variant&&"vertical"===t.orientation&&{marginTop:e.spacing(1),marginBottom:e.spacing(1)},"vertical"===t.orientation&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},t.flexItem&&{alignSelf:"stretch",height:"auto"})),(({ownerState:e})=>(0,n.Z)({},e.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{content:'""',alignSelf:"center"}})),(({theme:e,ownerState:t})=>(0,n.Z)({},t.children&&"vertical"!==t.orientation&&{"&::before, &::after":{width:"100%",borderTop:`thin solid ${(e.vars||e).palette.divider}`}})),(({theme:e,ownerState:t})=>(0,n.Z)({},t.children&&"vertical"===t.orientation&&{flexDirection:"column","&::before, &::after":{height:"100%",borderLeft:`thin solid ${(e.vars||e).palette.divider}`}})),(({ownerState:e})=>(0,n.Z)({},"right"===e.textAlign&&"vertical"!==e.orientation&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},"left"===e.textAlign&&"vertical"!==e.orientation&&{"&::before":{width:"10%"},"&::after":{width:"90%"}}))),f=(0,c.ZP)("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.wrapper,"vertical"===o.orientation&&t.wrapperVertical]}})((({theme:e,ownerState:t})=>(0,n.Z)({display:"inline-block",paddingLeft:`calc(${e.spacing(1)} * 1.2)`,paddingRight:`calc(${e.spacing(1)} * 1.2)`},"vertical"===t.orientation&&{paddingTop:`calc(${e.spacing(1)} * 1.2)`,paddingBottom:`calc(${e.spacing(1)} * 1.2)`}))),h=a.forwardRef((function(e,t){const o=(0,d.Z)({props:e,name:"MuiDivider"}),{absolute:a=!1,children:s,className:c,component:h=(s?"div":"hr"),flexItem:g=!1,light:Z=!1,orientation:S="horizontal",role:x=("hr"!==h?"separator":void 0),textAlign:C="center",variant:b="fullWidth"}=o,w=(0,r.Z)(o,p),M=(0,n.Z)({},o,{absolute:a,component:h,flexItem:g,light:Z,orientation:S,role:x,textAlign:C,variant:b}),y=(e=>{const{absolute:t,children:o,classes:r,flexItem:n,light:a,orientation:l,textAlign:s,variant:c}=e,d={root:["root",t&&"absolute",c,a&&"light","vertical"===l&&"vertical",n&&"flexItem",o&&"withChildren",o&&"vertical"===l&&"withChildrenVertical","right"===s&&"vertical"!==l&&"textAlignRight","left"===s&&"vertical"!==l&&"textAlignLeft"],wrapper:["wrapper","vertical"===l&&"wrapperVertical"]};return(0,i.Z)(d,m.V,r)})(M);return(0,u.jsx)(v,(0,n.Z)({as:h,className:(0,l.Z)(y.root,c),role:x,ref:t,ownerState:M},w,{children:s?(0,u.jsx)(f,{className:y.wrapper,ownerState:M,children:s}):null}))}));h.muiSkipListHighlight=!0;const g=h},93946:(e,t,o)=>{o.d(t,{Z:()=>x});var r=o(80102),n=o(83117),a=o(67294),l=o(63961),i=o(58510),s=o(2101),c=o(90948),d=o(71657),m=o(49990),u=o(98216),p=o(1977),v=o(8027);function f(e){return(0,v.ZP)("MuiIconButton",e)}const h=(0,p.Z)("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]);var g=o(85893);const Z=["edge","children","className","color","disabled","disableFocusRipple","size"],S=(0,c.ZP)(m.Z,{name:"MuiIconButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,"default"!==o.color&&t[`color${(0,u.Z)(o.color)}`],o.edge&&t[`edge${(0,u.Z)(o.edge)}`],t[`size${(0,u.Z)(o.size)}`]]}})((({theme:e,ownerState:t})=>(0,n.Z)({textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:(e.vars||e).palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest})},!t.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,s.Fq)(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"start"===t.edge&&{marginLeft:"small"===t.size?-3:-12},"end"===t.edge&&{marginRight:"small"===t.size?-3:-12})),(({theme:e,ownerState:t})=>{var o;const r=null==(o=(e.vars||e).palette)?void 0:o[t.color];return(0,n.Z)({},"inherit"===t.color&&{color:"inherit"},"inherit"!==t.color&&"default"!==t.color&&(0,n.Z)({color:null==r?void 0:r.main},!t.disableRipple&&{"&:hover":(0,n.Z)({},r&&{backgroundColor:e.vars?`rgba(${r.mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,s.Fq)(r.main,e.palette.action.hoverOpacity)},{"@media (hover: none)":{backgroundColor:"transparent"}})}),"small"===t.size&&{padding:5,fontSize:e.typography.pxToRem(18)},"large"===t.size&&{padding:12,fontSize:e.typography.pxToRem(28)},{[`&.${h.disabled}`]:{backgroundColor:"transparent",color:(e.vars||e).palette.action.disabled}})})),x=a.forwardRef((function(e,t){const o=(0,d.Z)({props:e,name:"MuiIconButton"}),{edge:a=!1,children:s,className:c,color:m="default",disabled:p=!1,disableFocusRipple:v=!1,size:h="medium"}=o,x=(0,r.Z)(o,Z),C=(0,n.Z)({},o,{edge:a,color:m,disabled:p,disableFocusRipple:v,size:h}),b=(e=>{const{classes:t,disabled:o,color:r,edge:n,size:a}=e,l={root:["root",o&&"disabled","default"!==r&&`color${(0,u.Z)(r)}`,n&&`edge${(0,u.Z)(n)}`,`size${(0,u.Z)(a)}`]};return(0,i.Z)(l,f,t)})(C);return(0,g.jsx)(S,(0,n.Z)({className:(0,l.Z)(b.root,c),centerRipple:!0,focusRipple:!v,disabled:p,ref:t},x,{ownerState:C,children:s}))}))},59773:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o(67294).createContext({})},48885:(e,t,o)=>{o.d(t,{Z:()=>f});var r=o(80102),n=o(83117),a=o(67294),l=o(63961),i=o(58510),s=o(90948),c=o(71657),d=o(84592),m=o(59773),u=o(85893);const p=["className"],v=(0,s.ZP)("div",{name:"MuiListItemIcon",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,"flex-start"===o.alignItems&&t.alignItemsFlexStart]}})((({theme:e,ownerState:t})=>(0,n.Z)({minWidth:56,color:(e.vars||e).palette.action.active,flexShrink:0,display:"inline-flex"},"flex-start"===t.alignItems&&{marginTop:8}))),f=a.forwardRef((function(e,t){const o=(0,c.Z)({props:e,name:"MuiListItemIcon"}),{className:s}=o,f=(0,r.Z)(o,p),h=a.useContext(m.Z),g=(0,n.Z)({},o,{alignItems:h.alignItems}),Z=(e=>{const{alignItems:t,classes:o}=e,r={root:["root","flex-start"===t&&"alignItemsFlexStart"]};return(0,i.Z)(r,d.f,o)})(g);return(0,u.jsx)(v,(0,n.Z)({className:(0,l.Z)(Z.root,s),ownerState:g,ref:t},f))}))},34484:(e,t,o)=>{o.d(t,{Z:()=>a});o(67294);var r=o(88169),n=o(85893);const a=(0,r.Z)((0,n.jsx)("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close")},88169:(e,t,o)=>{o.d(t,{Z:()=>S});var r=o(83117),n=o(67294),a=o(80102),l=o(63961),i=o(58510),s=o(98216),c=o(71657),d=o(90948),m=o(1977),u=o(8027);function p(e){return(0,u.ZP)("MuiSvgIcon",e)}(0,m.Z)("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);var v=o(85893);const f=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],h=(0,d.ZP)("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,"inherit"!==o.color&&t[`color${(0,s.Z)(o.color)}`],t[`fontSize${(0,s.Z)(o.fontSize)}`]]}})((({theme:e,ownerState:t})=>{var o,r,n,a,l,i,s,c,d,m,u,p,v;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:t.hasSvgAsChild?void 0:"currentColor",flexShrink:0,transition:null==(o=e.transitions)||null==(r=o.create)?void 0:r.call(o,"fill",{duration:null==(n=e.transitions)||null==(n=n.duration)?void 0:n.shorter}),fontSize:{inherit:"inherit",small:(null==(a=e.typography)||null==(l=a.pxToRem)?void 0:l.call(a,20))||"1.25rem",medium:(null==(i=e.typography)||null==(s=i.pxToRem)?void 0:s.call(i,24))||"1.5rem",large:(null==(c=e.typography)||null==(d=c.pxToRem)?void 0:d.call(c,35))||"2.1875rem"}[t.fontSize],color:null!=(m=null==(u=(e.vars||e).palette)||null==(u=u[t.color])?void 0:u.main)?m:{action:null==(p=(e.vars||e).palette)||null==(p=p.action)?void 0:p.active,disabled:null==(v=(e.vars||e).palette)||null==(v=v.action)?void 0:v.disabled,inherit:void 0}[t.color]}})),g=n.forwardRef((function(e,t){const o=(0,c.Z)({props:e,name:"MuiSvgIcon"}),{children:d,className:m,color:u="inherit",component:g="svg",fontSize:Z="medium",htmlColor:S,inheritViewBox:x=!1,titleAccess:C,viewBox:b="0 0 24 24"}=o,w=(0,a.Z)(o,f),M=n.isValidElement(d)&&"svg"===d.type,y=(0,r.Z)({},o,{color:u,component:g,fontSize:Z,instanceFontSize:e.fontSize,inheritViewBox:x,viewBox:b,hasSvgAsChild:M}),E={};x||(E.viewBox=b);const N=(e=>{const{color:t,fontSize:o,classes:r}=e,n={root:["root","inherit"!==t&&`color${(0,s.Z)(t)}`,`fontSize${(0,s.Z)(o)}`]};return(0,i.Z)(n,p,r)})(y);return(0,v.jsxs)(h,(0,r.Z)({as:g,className:(0,l.Z)(N.root,m),focusable:"false",color:S,"aria-hidden":!C||void 0,role:C?"img":void 0,ref:t},E,w,M&&d.props,{ownerState:y,children:[M?d.props.children:d,C?(0,v.jsx)("title",{children:C}):null]}))}));g.muiName="SvgIcon";const Z=g;function S(e,t){function o(o,n){return(0,v.jsx)(Z,(0,r.Z)({"data-testid":`${t}Icon`,ref:n},o,{children:e}))}return o.muiName=Z.muiName,n.memo(n.forwardRef(o))}},58974:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o(54895).Z},80560:(e,t,o)=>{o.d(t,{Z:()=>u});var r=o(83117),n=o(80102),a=o(22760),l=o(71276),i=o(5078),s=o(10238);const c=["className","elementType","ownerState","externalForwardedProps","getSlotOwnerState","internalForwardedProps"],d=["component","slots","slotProps"],m=["component"];function u(e,t){const{className:o,elementType:u,ownerState:p,externalForwardedProps:v,getSlotOwnerState:f,internalForwardedProps:h}=t,g=(0,n.Z)(t,c),{component:Z,slots:S={[e]:void 0},slotProps:x={[e]:void 0}}=v,C=(0,n.Z)(v,d),b=S[e]||u,w=(0,l.x)(x[e],p),M=(0,i.L)((0,r.Z)({className:o},g,{externalForwardedProps:"root"===e?C:void 0,externalSlotProps:w})),{props:{component:y},internalRef:E}=M,N=(0,n.Z)(M.props,m),z=(0,a.Z)(E,null==w?void 0:w.ref,t.ref),I=f?f(N):{},R=(0,r.Z)({},p,I),P="root"===e?y||Z:y,A=(0,s.$)(b,(0,r.Z)({},"root"===e&&!Z&&!S[e]&&h,"root"!==e&&!S[e]&&h,N,P&&{as:P},{ref:z}),R);return Object.keys(I).forEach((e=>{delete A[e]})),[b,A]}},78114:(e,t,o)=>{o.d(t,{U:()=>n});var r=o(71657);function n(e){return r.Z}},61730:(e,t,o)=>{var r;o.d(t,{Z:()=>m});var n=o(67294),a=o(54895),l=o(20539),i=o(34168);function s(e,t,o,r,l){const[i,s]=n.useState((()=>l&&o?o(e).matches:r?r(e).matches:t));return(0,a.Z)((()=>{let t=!0;if(!o)return;const r=o(e),n=()=>{t&&s(r.matches)};return n(),r.addListener(n),()=>{t=!1,r.removeListener(n)}}),[e,o]),i}const c=(r||(r=o.t(n,2))).useSyncExternalStore;function d(e,t,o,r,a){const l=n.useCallback((()=>t),[t]),i=n.useMemo((()=>{if(a&&o)return()=>o(e).matches;if(null!==r){const{matches:t}=r(e);return()=>t}return l}),[l,e,r,a,o]),[s,d]=n.useMemo((()=>{if(null===o)return[l,()=>()=>{}];const t=o(e);return[()=>t.matches,e=>(t.addListener(e),()=>{t.removeListener(e)})]}),[l,o,e]);return c(d,s,i)}function m(e,t={}){const o=(0,i.Z)(),r="undefined"!=typeof window&&void 0!==window.matchMedia,{defaultMatches:n=!1,matchMedia:a=(r?window.matchMedia:null),ssrMatchMedia:m=null,noSsr:u=!1}=(0,l.Z)({name:"MuiUseMediaQuery",props:t,theme:o});let p="function"==typeof e?e(o):e;p=p.replace(/^@media( ?)/m,"");return(void 0!==c?d:s)(p,n,a,m,u)}},15619:(e,t,o)=>{o.d(t,{Z:()=>j});var r=o(97582),n=o(67294),a=o(90948),l=o(5616),i=o(2734),s=o(61730),c=o(18972),d=o(48885),m=o(25662),u=o(39005),p=o(25464),v=o(14564),f=o(15861),h=o(67720),g=o(46901),Z=o(24243),S=o(24085),x=o(68787),C=o(67564),b=o(54490),w=o(86896),M=o(44012),y=o(27560),E=o(94184),N=o.n(E),z=o(98456),I=o(29628),R=o(75459),P=o(99960);const A="SCChangeCoverButton",$={root:`${A}-root`,helpPopover:`${A}-help-popover`,addMenuItem:`${A}-add-menuItem`,delMenuItem:`${A}-del-menuItem`},T=(0,a.ZP)(l.Z,{name:A,slot:"Root"})((()=>({}))),k=(0,b.vU)({imageMaxSize:{id:"ui.changeCover.button.change.alertMaxSize",defaultMessage:"ui.changeCover.button.change.alertMaxSize"},errorLoadImage:{id:"ui.changeCover.button.change.alertErrorImage",defaultMessage:"ui.changeCover.button.change.alertErrorImage"}});const j=function(e){const t=(0,I.Z)({props:e,name:A}),{onChange:o,autoHide:a,className:b}=t,E=(0,r._T)(t,["onChange","autoHide","className"]),j=(0,n.useContext)(x.K8),F=(0,i.Z)(),L=(0,s.Z)(F.breakpoints.down("md"));let D=(0,n.useRef)(null);const[B,O]=n.useState(null),W=Boolean(B),[_,V]=n.useState(null),[U,H]=(0,n.useState)(!1),[q,J]=(0,n.useState)(!1),[K,Q]=(0,n.useState)(!1),[Y,G]=(0,n.useState)(null),X=(0,w.Z)(),ee=e=>{O(e.currentTarget)},te=()=>{O(null)},oe=j.user&&null!==j.user.cover,re=Boolean(_);if(!j.user)return null;const ne=e=>{var t;(null===(t=e.target.files[0])||void 0===t?void 0:t.size)<=5242880?(D=e.target.files[0],ae()):(G(X.formatMessage(k.imageMaxSize)),O(null))};function ae(e=!1){Q(!0);const t=new FormData;e?t.append("cover",""):t.append("cover",D),Z.Z.request({url:S.Z.UserPatch.url({id:j.user.id}),method:S.Z.UserPatch.method,headers:{"Content-Type":"multipart/form-data"},data:t}).then((t=>{j.updateUser({cover:t.data.cover}),o&&o(t.data.cover),O(null),Q(!1),e&&(J(!1),H(!1))})).catch((e=>{P.Y.error(R.J,e),Q(!1),G(X.formatMessage(k.errorLoadImage))}))}function le(){return n.createElement(l.Z,null,K?n.createElement(c.Z,{sx:{justifyContent:"center"}},n.createElement(z.Z,{size:15})):n.createElement(n.Fragment,null,n.createElement("input",{type:"file",onChange:ne,ref:D,hidden:!0,accept:".gif,.png,.jpg,.jpeg"}),n.createElement(c.Z,{disabled:K,onClick:()=>D.current.click(),className:$.addMenuItem},n.createElement(d.Z,null,n.createElement(C.Z,{fontSize:"small"},"add_circle_outline")),n.createElement(M.Z,{id:"ui.changeCover.button.upload",defaultMessage:"ui.changeCover.button.upload"})),oe&&n.createElement(c.Z,{className:$.delMenuItem,onClick:()=>H(!0)},n.createElement(d.Z,null,n.createElement(C.Z,{fontSize:"small"},"delete")),n.createElement(M.Z,{id:"ui.changeCover.button.delete",defaultMessage:"ui.changeCover.button.delete"}))))}const ie=n.createElement(n.Fragment,null,n.createElement(m.Z,Object.assign({size:"small",variant:"contained",disabled:K,onClick:ee},E),n.createElement(C.Z,null,"photo_camera")),n.createElement(n.Fragment,null,L?n.createElement(u.Z,{open:W,onClose:te,onOpen:ee,anchor:"bottom",disableSwipeToOpen:!0},le()):n.createElement(p.Z,{anchorEl:B,open:W,onClose:te},le())),!L&&n.createElement(n.Fragment,null,n.createElement(m.Z,{className:$.helpPopover,variant:"contained",onClick:e=>{V(e.currentTarget)}},n.createElement(C.Z,{fontSize:"small"},"help_outline")),re&&n.createElement(v.ZP,{open:re,anchorEl:_,onClose:()=>{V(null)},anchorOrigin:{vertical:"bottom",horizontal:"right"}},n.createElement(l.Z,{sx:{p:"10px"}},n.createElement(f.Z,{component:"h3"},n.createElement(M.Z,{id:"ui.changeCover.button.uploadA",defaultMessage:"ui.changeCover.button.uploadA"})),n.createElement(h.Z,null),n.createElement(f.Z,{component:"span"},n.createElement(M.Z,{id:"ui.changeCover.info",defaultMessage:"ui.changeCover.info",values:{li:e=>n.createElement("li",null,e),ul:e=>n.createElement("ul",null,e)}}))))),U&&n.createElement(y.Z,{open:U,title:n.createElement(M.Z,{id:"ui.changeCover.dialog.msg",defaultMessage:"ui.changeCover.dialog.msg"}),onConfirm:function(){J(!0),ae(!0)},isUpdating:q,onClose:()=>{H(!1),O(null)}}));return Y?n.createElement(g.Z,{color:"error",onClose:()=>G(null)},Y):a?null:n.createElement(T,Object.assign({},E,{className:N()($.root,b)}),ie)}},75459:(e,t,o)=>{o.d(t,{J:()=>r});const r="@selfcommunity/react-ui"},27560:(e,t,o)=>{o.d(t,{Z:()=>I});var r=o(97582),n=o(67294),a=o(90948),l=o(66242),i=o(25662),s=o(64666),c=o(37645),d=o(6514),m=o(80102),u=o(83117),p=o(63961),v=o(58510),f=o(14136),h=o(71657),g=o(15861),Z=o(1977),S=o(8027);function x(e){return(0,S.ZP)("MuiDialogContentText",e)}(0,Z.Z)("MuiDialogContentText",["root"]);var C=o(85893);const b=["children","className"],w=(0,a.ZP)(g.Z,{shouldForwardProp:e=>(0,f.Z)(e)||"classes"===e,name:"MuiDialogContentText",slot:"Root",overridesResolver:(e,t)=>t.root})({}),M=n.forwardRef((function(e,t){const o=(0,h.Z)({props:e,name:"MuiDialogContentText"}),{className:r}=o,n=(0,m.Z)(o,b),a=(e=>{const{classes:t}=e,o=(0,v.Z)({root:["root"]},x,t);return(0,u.Z)({},t,o)})(n);return(0,C.jsx)(w,(0,u.Z)({component:"p",variant:"body1",color:"text.secondary",ref:t,ownerState:n,className:(0,p.Z)(a.root,r)},o,{classes:a}))}));var y=o(31425),E=o(44012),N=o(31812);const z=(0,a.ZP)(l.Z,{name:"SCConfirmDialog",slot:"Root",overridesResolver:(e,t)=>t.root})((({theme:e})=>({maxWidth:800,marginBottom:e.spacing(2)})));function I(e){const{open:t,title:o,content:a=null,btnConfirm:l=null,btnCancel:m=null,isUpdating:u=!1,onClose:p=null,onConfirm:v=null,disableBackdropClick:f=!1}=e,h=(0,r._T)(e,["open","title","content","btnConfirm","btnCancel","isUpdating","onClose","onConfirm","disableBackdropClick"]);function g(e){if(f&&("backdropClick"===e||"escapeKeyDown"===e))return!1;u||p&&p()}return n.createElement(z,null,n.createElement(s.Z,Object.assign({open:t,onClose:g},h),n.createElement(c.Z,null,o||n.createElement(E.Z,{id:"ui.confirmDialog.title",defaultMessage:"ui.confirmDialog.title"})),a&&n.createElement(d.Z,null,n.createElement(M,{component:"div"},a)),n.createElement(y.Z,null,n.createElement(i.Z,{onClick:g},m||n.createElement(E.Z,{id:"ui.confirmDialog.btnCancel",defaultMessage:"ui.confirmDialog.btnCancel"})),n.createElement(N.Z,{onClick:function(){v&&v()},variant:"contained",autoFocus:!0,loading:u},l||n.createElement(E.Z,{id:"ui.confirmDialog.btnConfirm",defaultMessage:"ui.confirmDialog.btnConfirm"})))))}},54490:(e,t,o)=>{o.d(t,{Ji:()=>u,qN:()=>p,vU:()=>m});var r,n,a=o(25719),l=o(67294),i=o(86896);!function(e){e.formatDate="FormattedDate",e.formatTime="FormattedTime",e.formatNumber="FormattedNumber",e.formatList="FormattedList",e.formatDisplayName="FormattedDisplayName"}(r||(r={})),function(e){e.formatDate="FormattedDateParts",e.formatTime="FormattedTimeParts",e.formatNumber="FormattedNumberParts",e.formatList="FormattedListParts"}(n||(n={}));var s=function(e){var t=(0,i.Z)(),o=e.value,r=e.children,n=(0,a._T)(e,["value","children"]);return r(t.formatNumberToParts(o,n))};s.displayName="FormattedNumberParts";function c(e){var t=function(t){var o=(0,i.Z)(),r=t.value,n=t.children,l=(0,a._T)(t,["value","children"]),s="string"==typeof r?new Date(r||0):r;return n("formatDate"===e?o.formatDateToParts(s,l):o.formatTimeToParts(s,l))};return t.displayName=n[e],t}function d(e){var t=function(t){var o=(0,i.Z)(),r=t.value,n=t.children,s=(0,a._T)(t,["value","children"]),c=o[e](r,s);if("function"==typeof n)return n(c);var d=o.textComponent||l.Fragment;return l.createElement(d,null,c)};return t.displayName=r[e],t}function m(e){return e}s.displayName="FormattedNumberParts";var u=d("formatDate"),p=d("formatTime");d("formatNumber"),d("formatList"),d("formatDisplayName"),c("formatDate"),c("formatTime")}}]);