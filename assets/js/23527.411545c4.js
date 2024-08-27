/*! For license information please see 23527.411545c4.js.LICENSE.txt */
(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[23527],{66090:(e,t,r)=>{"use strict";r.d(t,{Z:()=>y});var a=r(80102),o=r(83117),n=r(67294),i=r(98216),l=r(27909);var s=r(90948),c=r(28628),d=r(25662),u=r(98363),m=r(98456),g=r(35971),p=r(34867);function h(e){return(0,p.ZP)("MuiLoadingButton",e)}const v=(0,r(1588).Z)("MuiLoadingButton",["root","loading","loadingIndicator","loadingIndicatorCenter","loadingIndicatorStart","loadingIndicatorEnd","endIconLoadingEnd","startIconLoadingStart"]);var f=r(85893);const Z=["children","disabled","id","loading","loadingIndicator","loadingPosition","variant"],b=e=>{const{loading:t,loadingPosition:r,classes:a}=e,n=function(e,t,r){const a={};return Object.keys(e).forEach((o=>{a[o]=e[o].reduce(((e,a)=>{if(a){const o=t(a);""!==o&&e.push(o),r&&r[a]&&e.push(r[a])}return e}),[]).join(" ")})),a}({root:["root",t&&"loading"],startIcon:[t&&`startIconLoading${(0,i.Z)(r)}`],endIcon:[t&&`endIconLoading${(0,i.Z)(r)}`],loadingIndicator:["loadingIndicator",t&&`loadingIndicator${(0,i.Z)(r)}`]},h,a);return(0,o.Z)({},a,n)},S=(0,s.ZP)(d.Z,{shouldForwardProp:e=>(e=>"ownerState"!==e&&"theme"!==e&&"sx"!==e&&"as"!==e&&"classes"!==e)(e)||"classes"===e,name:"MuiLoadingButton",slot:"Root",overridesResolver:(e,t)=>[t.root,t.startIconLoadingStart&&{[`& .${v.startIconLoadingStart}`]:t.startIconLoadingStart},t.endIconLoadingEnd&&{[`& .${v.endIconLoadingEnd}`]:t.endIconLoadingEnd}]})((({ownerState:e,theme:t})=>(0,o.Z)({[`& .${v.startIconLoadingStart}, & .${v.endIconLoadingEnd}`]:{transition:t.transitions.create(["opacity"],{duration:t.transitions.duration.short}),opacity:0}},"center"===e.loadingPosition&&{transition:t.transitions.create(["background-color","box-shadow","border-color"],{duration:t.transitions.duration.short}),[`&.${v.loading}`]:{color:"transparent"}},"start"===e.loadingPosition&&e.fullWidth&&{[`& .${v.startIconLoadingStart}, & .${v.endIconLoadingEnd}`]:{transition:t.transitions.create(["opacity"],{duration:t.transitions.duration.short}),opacity:0,marginRight:-8}},"end"===e.loadingPosition&&e.fullWidth&&{[`& .${v.startIconLoadingStart}, & .${v.endIconLoadingEnd}`]:{transition:t.transitions.create(["opacity"],{duration:t.transitions.duration.short}),opacity:0,marginLeft:-8}}))),x=(0,s.ZP)("span",{name:"MuiLoadingButton",slot:"LoadingIndicator",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.loadingIndicator,t[`loadingIndicator${(0,i.Z)(r.loadingPosition)}`]]}})((({theme:e,ownerState:t})=>(0,o.Z)({position:"absolute",visibility:"visible",display:"flex"},"start"===t.loadingPosition&&("outlined"===t.variant||"contained"===t.variant)&&{left:"small"===t.size?10:14},"start"===t.loadingPosition&&"text"===t.variant&&{left:6},"center"===t.loadingPosition&&{left:"50%",transform:"translate(-50%)",color:(e.vars||e).palette.action.disabled},"end"===t.loadingPosition&&("outlined"===t.variant||"contained"===t.variant)&&{right:"small"===t.size?10:14},"end"===t.loadingPosition&&"text"===t.variant&&{right:6},"start"===t.loadingPosition&&t.fullWidth&&{position:"relative",left:-10},"end"===t.loadingPosition&&t.fullWidth&&{position:"relative",right:-10}))),y=n.forwardRef((function(e,t){const r=n.useContext(u.Z),i=(0,g.Z)(r,e),s=(0,c.i)({props:i,name:"MuiLoadingButton"}),{children:d,disabled:p=!1,id:h,loading:v=!1,loadingIndicator:y,loadingPosition:C="center",variant:w="text"}=s,I=(0,a.Z)(s,Z),M=(0,l.Z)(h),P=null!=y?y:(0,f.jsx)(m.Z,{"aria-labelledby":M,color:"inherit",size:16}),E=(0,o.Z)({},s,{disabled:p,loading:v,loadingIndicator:P,loadingPosition:C,variant:w}),k=b(E),R=v?(0,f.jsx)(x,{className:k.loadingIndicator,ownerState:E,children:P}):null;return(0,f.jsxs)(S,(0,o.Z)({disabled:p||v,id:M,ref:t},I,{variant:w,classes:k,ownerState:E,children:["end"===E.loadingPosition?d:R,"end"===E.loadingPosition?R:d]}))}))},66242:(e,t,r)=>{"use strict";r.d(t,{Z:()=>f});var a=r(83117),o=r(80102),n=r(67294),i=r(63961),l=r(94780),s=r(90948),c=r(28628),d=r(90629),u=r(1588),m=r(34867);function g(e){return(0,m.ZP)("MuiCard",e)}(0,u.Z)("MuiCard",["root"]);var p=r(85893);const h=["className","raised"],v=(0,s.ZP)(d.Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({overflow:"hidden"}))),f=n.forwardRef((function(e,t){const r=(0,c.i)({props:e,name:"MuiCard"}),{className:n,raised:s=!1}=r,d=(0,o.Z)(r,h),u=(0,a.Z)({},r,{raised:s}),m=(e=>{const{classes:t}=e;return(0,l.Z)({root:["root"]},g,t)})(u);return(0,p.jsx)(v,(0,a.Z)({className:(0,i.Z)(m.root,n),elevation:s?8:void 0,ref:t,ownerState:u},d))}))},98456:(e,t,r)=>{"use strict";r.d(t,{Z:()=>E});var a=r(80102),o=r(83117),n=r(67294),i=r(63961),l=r(94780),s=r(70917),c=r(98216),d=r(28628),u=r(90948),m=r(1588),g=r(34867);function p(e){return(0,g.ZP)("MuiCircularProgress",e)}(0,m.Z)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);var h=r(85893);const v=["className","color","disableShrink","size","style","thickness","value","variant"];let f,Z,b,S,x=e=>e;const y=44,C=(0,s.F4)(f||(f=x`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),w=(0,s.F4)(Z||(Z=x`
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
`)),I=(0,u.ZP)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[r.variant],t[`color${(0,c.Z)(r.color)}`]]}})((({ownerState:e,theme:t})=>(0,o.Z)({display:"inline-block"},"determinate"===e.variant&&{transition:t.transitions.create("transform")},"inherit"!==e.color&&{color:(t.vars||t).palette[e.color].main})),(({ownerState:e})=>"indeterminate"===e.variant&&(0,s.iv)(b||(b=x`
      animation: ${0} 1.4s linear infinite;
    `),C))),M=(0,u.ZP)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(e,t)=>t.svg})({display:"block"}),P=(0,u.ZP)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.circle,t[`circle${(0,c.Z)(r.variant)}`],r.disableShrink&&t.circleDisableShrink]}})((({ownerState:e,theme:t})=>(0,o.Z)({stroke:"currentColor"},"determinate"===e.variant&&{transition:t.transitions.create("stroke-dashoffset")},"indeterminate"===e.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0})),(({ownerState:e})=>"indeterminate"===e.variant&&!e.disableShrink&&(0,s.iv)(S||(S=x`
      animation: ${0} 1.4s ease-in-out infinite;
    `),w))),E=n.forwardRef((function(e,t){const r=(0,d.i)({props:e,name:"MuiCircularProgress"}),{className:n,color:s="primary",disableShrink:u=!1,size:m=40,style:g,thickness:f=3.6,value:Z=0,variant:b="indeterminate"}=r,S=(0,a.Z)(r,v),x=(0,o.Z)({},r,{color:s,disableShrink:u,size:m,thickness:f,value:Z,variant:b}),C=(e=>{const{classes:t,variant:r,color:a,disableShrink:o}=e,n={root:["root",r,`color${(0,c.Z)(a)}`],svg:["svg"],circle:["circle",`circle${(0,c.Z)(r)}`,o&&"circleDisableShrink"]};return(0,l.Z)(n,p,t)})(x),w={},E={},k={};if("determinate"===b){const e=2*Math.PI*((y-f)/2);w.strokeDasharray=e.toFixed(3),k["aria-valuenow"]=Math.round(Z),w.strokeDashoffset=`${((100-Z)/100*e).toFixed(3)}px`,E.transform="rotate(-90deg)"}return(0,h.jsx)(I,(0,o.Z)({className:(0,i.Z)(C.root,n),style:(0,o.Z)({width:m,height:m},E,g),ownerState:x,ref:t,role:"progressbar"},k,S,{children:(0,h.jsx)(M,{className:C.svg,ownerState:x,viewBox:"22 22 44 44",children:(0,h.jsx)(P,{className:C.circle,style:w,ownerState:x,cx:y,cy:y,r:(y-f)/2,fill:"none",strokeWidth:f})})}))}))},67720:(e,t,r)=>{"use strict";r.d(t,{Z:()=>f});var a=r(80102),o=r(83117),n=r(67294),i=r(63961),l=r(94780),s=r(51025),c=r(90948),d=r(28628),u=r(35097),m=r(85893);const g=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],p=(0,c.ZP)("div",{name:"MuiDivider",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.absolute&&t.absolute,t[r.variant],r.light&&t.light,"vertical"===r.orientation&&t.vertical,r.flexItem&&t.flexItem,r.children&&t.withChildren,r.children&&"vertical"===r.orientation&&t.withChildrenVertical,"right"===r.textAlign&&"vertical"!==r.orientation&&t.textAlignRight,"left"===r.textAlign&&"vertical"!==r.orientation&&t.textAlignLeft]}})((({theme:e,ownerState:t})=>(0,o.Z)({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(e.vars||e).palette.divider,borderBottomWidth:"thin"},t.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},t.light&&{borderColor:e.vars?`rgba(${e.vars.palette.dividerChannel} / 0.08)`:(0,s.Fq)(e.palette.divider,.08)},"inset"===t.variant&&{marginLeft:72},"middle"===t.variant&&"horizontal"===t.orientation&&{marginLeft:e.spacing(2),marginRight:e.spacing(2)},"middle"===t.variant&&"vertical"===t.orientation&&{marginTop:e.spacing(1),marginBottom:e.spacing(1)},"vertical"===t.orientation&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},t.flexItem&&{alignSelf:"stretch",height:"auto"})),(({ownerState:e})=>(0,o.Z)({},e.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,borderTopStyle:"solid",borderLeftStyle:"solid","&::before, &::after":{content:'""',alignSelf:"center"}})),(({theme:e,ownerState:t})=>(0,o.Z)({},t.children&&"vertical"!==t.orientation&&{"&::before, &::after":{width:"100%",borderTop:`thin solid ${(e.vars||e).palette.divider}`,borderTopStyle:"inherit"}})),(({theme:e,ownerState:t})=>(0,o.Z)({},t.children&&"vertical"===t.orientation&&{flexDirection:"column","&::before, &::after":{height:"100%",borderLeft:`thin solid ${(e.vars||e).palette.divider}`,borderLeftStyle:"inherit"}})),(({ownerState:e})=>(0,o.Z)({},"right"===e.textAlign&&"vertical"!==e.orientation&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},"left"===e.textAlign&&"vertical"!==e.orientation&&{"&::before":{width:"10%"},"&::after":{width:"90%"}}))),h=(0,c.ZP)("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.wrapper,"vertical"===r.orientation&&t.wrapperVertical]}})((({theme:e,ownerState:t})=>(0,o.Z)({display:"inline-block",paddingLeft:`calc(${e.spacing(1)} * 1.2)`,paddingRight:`calc(${e.spacing(1)} * 1.2)`},"vertical"===t.orientation&&{paddingTop:`calc(${e.spacing(1)} * 1.2)`,paddingBottom:`calc(${e.spacing(1)} * 1.2)`}))),v=n.forwardRef((function(e,t){const r=(0,d.i)({props:e,name:"MuiDivider"}),{absolute:n=!1,children:s,className:c,component:v=(s?"div":"hr"),flexItem:f=!1,light:Z=!1,orientation:b="horizontal",role:S=("hr"!==v?"separator":void 0),textAlign:x="center",variant:y="fullWidth"}=r,C=(0,a.Z)(r,g),w=(0,o.Z)({},r,{absolute:n,component:v,flexItem:f,light:Z,orientation:b,role:S,textAlign:x,variant:y}),I=(e=>{const{absolute:t,children:r,classes:a,flexItem:o,light:n,orientation:i,textAlign:s,variant:c}=e,d={root:["root",t&&"absolute",c,n&&"light","vertical"===i&&"vertical",o&&"flexItem",r&&"withChildren",r&&"vertical"===i&&"withChildrenVertical","right"===s&&"vertical"!==i&&"textAlignRight","left"===s&&"vertical"!==i&&"textAlignLeft"],wrapper:["wrapper","vertical"===i&&"wrapperVertical"]};return(0,l.Z)(d,u.V,a)})(w);return(0,m.jsx)(p,(0,o.Z)({as:v,className:(0,i.Z)(I.root,c),role:S,ref:t,ownerState:w},C,{children:s?(0,m.jsx)(h,{className:I.wrapper,ownerState:w,children:s}):null}))}));v.muiSkipListHighlight=!0;const f=v},93946:(e,t,r)=>{"use strict";r.d(t,{Z:()=>S});var a=r(80102),o=r(83117),n=r(67294),i=r(63961),l=r(94780),s=r(51025),c=r(90948),d=r(28628),u=r(49990),m=r(98216),g=r(1588),p=r(34867);function h(e){return(0,p.ZP)("MuiIconButton",e)}const v=(0,g.Z)("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]);var f=r(85893);const Z=["edge","children","className","color","disabled","disableFocusRipple","size"],b=(0,c.ZP)(u.Z,{name:"MuiIconButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,"default"!==r.color&&t[`color${(0,m.Z)(r.color)}`],r.edge&&t[`edge${(0,m.Z)(r.edge)}`],t[`size${(0,m.Z)(r.size)}`]]}})((({theme:e,ownerState:t})=>(0,o.Z)({textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:(e.vars||e).palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest})},!t.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,s.Fq)(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"start"===t.edge&&{marginLeft:"small"===t.size?-3:-12},"end"===t.edge&&{marginRight:"small"===t.size?-3:-12})),(({theme:e,ownerState:t})=>{var r;const a=null==(r=(e.vars||e).palette)?void 0:r[t.color];return(0,o.Z)({},"inherit"===t.color&&{color:"inherit"},"inherit"!==t.color&&"default"!==t.color&&(0,o.Z)({color:null==a?void 0:a.main},!t.disableRipple&&{"&:hover":(0,o.Z)({},a&&{backgroundColor:e.vars?`rgba(${a.mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,s.Fq)(a.main,e.palette.action.hoverOpacity)},{"@media (hover: none)":{backgroundColor:"transparent"}})}),"small"===t.size&&{padding:5,fontSize:e.typography.pxToRem(18)},"large"===t.size&&{padding:12,fontSize:e.typography.pxToRem(28)},{[`&.${v.disabled}`]:{backgroundColor:"transparent",color:(e.vars||e).palette.action.disabled}})})),S=n.forwardRef((function(e,t){const r=(0,d.i)({props:e,name:"MuiIconButton"}),{edge:n=!1,children:s,className:c,color:u="default",disabled:g=!1,disableFocusRipple:p=!1,size:v="medium"}=r,S=(0,a.Z)(r,Z),x=(0,o.Z)({},r,{edge:n,color:u,disabled:g,disableFocusRipple:p,size:v}),y=(e=>{const{classes:t,disabled:r,color:a,edge:o,size:n}=e,i={root:["root",r&&"disabled","default"!==a&&`color${(0,m.Z)(a)}`,o&&`edge${(0,m.Z)(o)}`,`size${(0,m.Z)(n)}`]};return(0,l.Z)(i,h,t)})(x);return(0,f.jsx)(b,(0,o.Z)({className:(0,i.Z)(y.root,c),centerRipple:!0,focusRipple:!p,disabled:g,ref:t},S,{ownerState:x,children:s}))}))},48885:(e,t,r)=>{"use strict";r.d(t,{Z:()=>h});var a=r(80102),o=r(83117),n=r(67294),i=r(63961),l=r(94780),s=r(90948),c=r(28628),d=r(84592),u=r(59773),m=r(85893);const g=["className"],p=(0,s.ZP)("div",{name:"MuiListItemIcon",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,"flex-start"===r.alignItems&&t.alignItemsFlexStart]}})((({theme:e,ownerState:t})=>(0,o.Z)({minWidth:56,color:(e.vars||e).palette.action.active,flexShrink:0,display:"inline-flex"},"flex-start"===t.alignItems&&{marginTop:8}))),h=n.forwardRef((function(e,t){const r=(0,c.i)({props:e,name:"MuiListItemIcon"}),{className:s}=r,h=(0,a.Z)(r,g),v=n.useContext(u.Z),f=(0,o.Z)({},r,{alignItems:v.alignItems}),Z=(e=>{const{alignItems:t,classes:r}=e,a={root:["root","flex-start"===t&&"alignItemsFlexStart"]};return(0,l.Z)(a,d.f,r)})(f);return(0,m.jsx)(p,(0,o.Z)({className:(0,i.Z)(Z.root,s),ownerState:f,ref:t},h))}))},15861:(e,t,r)=>{"use strict";r.d(t,{Z:()=>S});var a=r(80102),o=r(83117),n=r(67294),i=r(63961),l=r(87893),s=r(94780),c=r(90948),d=r(28628),u=r(98216),m=r(1588),g=r(34867);function p(e){return(0,g.ZP)("MuiTypography",e)}(0,m.Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var h=r(85893);const v=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],f=(0,c.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.variant&&t[r.variant],"inherit"!==r.align&&t[`align${(0,u.Z)(r.align)}`],r.noWrap&&t.noWrap,r.gutterBottom&&t.gutterBottom,r.paragraph&&t.paragraph]}})((({theme:e,ownerState:t})=>(0,o.Z)({margin:0},"inherit"===t.variant&&{font:"inherit"},"inherit"!==t.variant&&e.typography[t.variant],"inherit"!==t.align&&{textAlign:t.align},t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t.gutterBottom&&{marginBottom:"0.35em"},t.paragraph&&{marginBottom:16}))),Z={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},b={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},S=n.forwardRef((function(e,t){const r=(0,d.i)({props:e,name:"MuiTypography"}),n=(e=>b[e]||e)(r.color),c=(0,l.Z)((0,o.Z)({},r,{color:n})),{align:m="inherit",className:g,component:S,gutterBottom:x=!1,noWrap:y=!1,paragraph:C=!1,variant:w="body1",variantMapping:I=Z}=c,M=(0,a.Z)(c,v),P=(0,o.Z)({},c,{align:m,color:n,className:g,component:S,gutterBottom:x,noWrap:y,paragraph:C,variant:w,variantMapping:I}),E=S||(C?"p":I[w]||Z[w])||"span",k=(e=>{const{align:t,gutterBottom:r,noWrap:a,paragraph:o,variant:n,classes:i}=e,l={root:["root",n,"inherit"!==e.align&&`align${(0,u.Z)(t)}`,r&&"gutterBottom",a&&"noWrap",o&&"paragraph"]};return(0,s.Z)(l,p,i)})(P);return(0,h.jsx)(f,(0,o.Z)({as:E,ref:t,ownerState:P,className:(0,i.Z)(k.root,g)},M))}))},37292:(e,t,r)=>{"use strict";var a;r.d(t,{Z:()=>u});var o=r(67294),n=r(73546),i=r(64560),l=r(2952);function s(e,t,r,a,i){const[l,s]=o.useState((()=>i&&r?r(e).matches:a?a(e).matches:t));return(0,n.Z)((()=>{let t=!0;if(!r)return;const a=r(e),o=()=>{t&&s(a.matches)};return o(),a.addListener(o),()=>{t=!1,a.removeListener(o)}}),[e,r]),l}const c=(a||(a=r.t(o,2))).useSyncExternalStore;function d(e,t,r,a,n){const i=o.useCallback((()=>t),[t]),l=o.useMemo((()=>{if(n&&r)return()=>r(e).matches;if(null!==a){const{matches:t}=a(e);return()=>t}return i}),[i,e,a,n,r]),[s,d]=o.useMemo((()=>{if(null===r)return[i,()=>()=>{}];const t=r(e);return[()=>t.matches,e=>(t.addListener(e),()=>{t.removeListener(e)})]}),[i,r,e]);return c(d,s,l)}function u(e,t={}){const r=(0,l.Z)(),a="undefined"!=typeof window&&void 0!==window.matchMedia,{defaultMatches:o=!1,matchMedia:n=(a?window.matchMedia:null),ssrMatchMedia:u=null,noSsr:m=!1}=(0,i.Z)({name:"MuiUseMediaQuery",props:t,theme:r});let g="function"==typeof e?e(r):e;g=g.replace(/^@media( ?)/m,"");return(void 0!==c?d:s)(g,o,n,u,m)}},64560:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var a=r(35971);function o(e){const{theme:t,name:r,props:o}=e;return t&&t.components&&t.components[r]&&t.components[r].defaultProps?(0,a.Z)(t.components[r].defaultProps,o):o}},15619:(e,t,r)=>{"use strict";r.d(t,{Z:()=>z});var a=r(97582),o=r(67294),n=r(90948),i=r(94253),l=r(2734),s=r(37292),c=r(18972),d=r(48885),u=r(25662),m=r(44652),g=r(25464),p=r(14564),h=r(15861),v=r(67720),f=r(46901),Z=r(24243),b=r(24085),S=r(13391),x=r(67564),y=r(54490),C=r(86896),w=r(44012),I=r(27560),M=r(94184),P=r.n(M),E=r(98456),k=r(29360),R=r(75459),L=r(99960);const N="SCChangeCoverButton",$={root:`${N}-root`,helpPopover:`${N}-help-popover`,addMenuItem:`${N}-add-menuItem`,delMenuItem:`${N}-del-menuItem`},D=(0,n.ZP)(i.Z,{name:N,slot:"Root"})((()=>({}))),T=(0,y.vU)({imageMaxSize:{id:"ui.changeCover.button.change.alertMaxSize",defaultMessage:"ui.changeCover.button.change.alertMaxSize"},errorLoadImage:{id:"ui.changeCover.button.change.alertErrorImage",defaultMessage:"ui.changeCover.button.change.alertErrorImage"}});const z=function(e){const t=(0,k.Z)({props:e,name:N}),{onChange:r,autoHide:n,className:y}=t,M=(0,a._T)(t,["onChange","autoHide","className"]),z=(0,o.useContext)(S.K8),F=(0,l.Z)(),B=(0,s.Z)(F.breakpoints.down("md"));let j=(0,o.useRef)(null);const[W,A]=o.useState(null),O=Boolean(W),[_,U]=o.useState(null),[q,V]=(0,o.useState)(!1),[J,H]=(0,o.useState)(!1),[K,Q]=(0,o.useState)(!1),[Y,G]=(0,o.useState)(null),X=(0,C.Z)(),ee=e=>{A(e.currentTarget)},te=()=>{A(null)},re=z.user&&null!==z.user.cover,ae=Boolean(_);if(!z.user)return null;const oe=e=>{var t;(null===(t=e.target.files[0])||void 0===t?void 0:t.size)<=5242880?(j=e.target.files[0],ne()):(G(X.formatMessage(T.imageMaxSize)),A(null))};function ne(e=!1){Q(!0);const t=new FormData;e?t.append("cover",""):t.append("cover",j),Z.Z.request({url:b.Z.UserPatch.url({id:z.user.id}),method:b.Z.UserPatch.method,headers:{"Content-Type":"multipart/form-data"},data:t}).then((t=>{z.updateUser({cover:t.data.cover}),r&&r(t.data.cover),A(null),Q(!1),e&&(H(!1),V(!1))})).catch((e=>{L.Y.error(R.J,e),Q(!1),G(X.formatMessage(T.errorLoadImage))}))}function ie(){return o.createElement(i.Z,null,K?o.createElement(c.Z,{sx:{justifyContent:"center"}},o.createElement(E.Z,{size:15})):o.createElement(o.Fragment,null,o.createElement("input",{type:"file",onChange:oe,ref:j,hidden:!0,accept:".gif,.png,.jpg,.jpeg"}),o.createElement(c.Z,{disabled:K,onClick:()=>j.current.click(),className:$.addMenuItem},o.createElement(d.Z,null,o.createElement(x.Z,null,"add_circle_outline")),o.createElement(w.Z,{id:"ui.changeCover.button.upload",defaultMessage:"ui.changeCover.button.upload"})),re&&o.createElement(c.Z,{className:$.delMenuItem,onClick:()=>V(!0)},o.createElement(d.Z,null,o.createElement(x.Z,null,"delete")),o.createElement(w.Z,{id:"ui.changeCover.button.delete",defaultMessage:"ui.changeCover.button.delete"}))))}const le=o.createElement(o.Fragment,null,o.createElement(u.Z,Object.assign({size:"small",variant:"contained",disabled:K,onClick:ee},M),o.createElement(x.Z,null,"photo_camera")),o.createElement(o.Fragment,null,B?o.createElement(m.Z,{open:O,onClose:te,onOpen:ee,anchor:"bottom",disableSwipeToOpen:!0},ie()):o.createElement(g.Z,{anchorEl:W,open:O,onClose:te},ie())),!B&&o.createElement(o.Fragment,null,o.createElement(u.Z,{className:$.helpPopover,variant:"contained",onClick:e=>{U(e.currentTarget)}},o.createElement(x.Z,null,"help_outline")),ae&&o.createElement(p.ZP,{open:ae,anchorEl:_,onClose:()=>{U(null)},anchorOrigin:{vertical:"bottom",horizontal:"right"}},o.createElement(i.Z,{sx:{p:"10px"}},o.createElement(h.Z,{component:"h3"},o.createElement(w.Z,{id:"ui.changeCover.button.uploadA",defaultMessage:"ui.changeCover.button.uploadA"})),o.createElement(v.Z,null),o.createElement(h.Z,{component:"span"},o.createElement(w.Z,{id:"ui.changeCover.info",defaultMessage:"ui.changeCover.info",values:{li:e=>o.createElement("li",null,e),ul:e=>o.createElement("ul",null,e)}}))))),q&&o.createElement(I.Z,{open:q,title:o.createElement(w.Z,{id:"ui.changeCover.dialog.msg",defaultMessage:"ui.changeCover.dialog.msg"}),onConfirm:function(){H(!0),ne(!0)},isUpdating:J,onClose:()=>{V(!1),A(null)}}));return Y?o.createElement(f.Z,{color:"error",onClose:()=>G(null)},Y):n?null:o.createElement(D,Object.assign({},M,{className:P()($.root,y)}),le)}},75459:(e,t,r)=>{"use strict";r.d(t,{J:()=>a});const a="@selfcommunity/react-ui"},27560:(e,t,r)=>{"use strict";r.d(t,{Z:()=>k});var a=r(97582),o=r(67294),n=r(90948),i=r(66242),l=r(25662),s=r(64666),c=r(37645),d=r(6514),u=r(80102),m=r(83117),g=r(63961),p=r(94780),h=r(14136),v=r(28628),f=r(15861),Z=r(1588),b=r(34867);function S(e){return(0,b.ZP)("MuiDialogContentText",e)}(0,Z.Z)("MuiDialogContentText",["root"]);var x=r(85893);const y=["children","className"],C=(0,n.ZP)(f.Z,{shouldForwardProp:e=>(0,h.Z)(e)||"classes"===e,name:"MuiDialogContentText",slot:"Root",overridesResolver:(e,t)=>t.root})({}),w=o.forwardRef((function(e,t){const r=(0,v.i)({props:e,name:"MuiDialogContentText"}),{className:a}=r,o=(0,u.Z)(r,y),n=(e=>{const{classes:t}=e,r=(0,p.Z)({root:["root"]},S,t);return(0,m.Z)({},t,r)})(o);return(0,x.jsx)(C,(0,m.Z)({component:"p",variant:"body1",color:"text.secondary",ref:t,ownerState:o,className:(0,g.Z)(n.root,a)},r,{classes:n}))}));var I=r(31425),M=r(44012),P=r(66090);const E=(0,n.ZP)(i.Z,{name:"SCConfirmDialog",slot:"Root",overridesResolver:(e,t)=>t.root})((({theme:e})=>({maxWidth:800,marginBottom:e.spacing(2)})));function k(e){const{open:t,title:r,content:n=null,btnConfirm:i=null,btnCancel:u=null,isUpdating:m=!1,onClose:g=null,onConfirm:p=null,disableBackdropClick:h=!1}=e,v=(0,a._T)(e,["open","title","content","btnConfirm","btnCancel","isUpdating","onClose","onConfirm","disableBackdropClick"]);function f(e){if(h&&("backdropClick"===e||"escapeKeyDown"===e))return!1;m||g&&g()}return o.createElement(E,null,o.createElement(s.Z,Object.assign({open:t,onClose:f},v),o.createElement(c.Z,null,r||o.createElement(M.Z,{id:"ui.confirmDialog.title",defaultMessage:"ui.confirmDialog.title"})),n&&o.createElement(d.Z,null,o.createElement(w,{component:"div"},n)),o.createElement(I.Z,null,o.createElement(l.Z,{onClick:f},u||o.createElement(M.Z,{id:"ui.confirmDialog.btnCancel",defaultMessage:"ui.confirmDialog.btnCancel"})),o.createElement(P.Z,{onClick:function(){p&&p()},variant:"contained",autoFocus:!0,loading:m},i||o.createElement(M.Z,{id:"ui.confirmDialog.btnConfirm",defaultMessage:"ui.confirmDialog.btnConfirm"})))))}},94184:(e,t)=>{var r;!function(){"use strict";var a={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var n=typeof r;if("string"===n||"number"===n)e.push(r);else if(Array.isArray(r)){if(r.length){var i=o.apply(null,r);i&&e.push(i)}}else if("object"===n){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var l in r)a.call(r,l)&&r[l]&&e.push(l)}}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},54490:(e,t,r)=>{"use strict";r.d(t,{Ji:()=>m,qN:()=>g,vU:()=>u});var a,o,n=r(25719),i=r(67294),l=r(86896);!function(e){e.formatDate="FormattedDate",e.formatTime="FormattedTime",e.formatNumber="FormattedNumber",e.formatList="FormattedList",e.formatDisplayName="FormattedDisplayName"}(a||(a={})),function(e){e.formatDate="FormattedDateParts",e.formatTime="FormattedTimeParts",e.formatNumber="FormattedNumberParts",e.formatList="FormattedListParts"}(o||(o={}));var s=function(e){var t=(0,l.Z)(),r=e.value,a=e.children,o=(0,n._T)(e,["value","children"]);return a(t.formatNumberToParts(r,o))};s.displayName="FormattedNumberParts";function c(e){var t=function(t){var r=(0,l.Z)(),a=t.value,o=t.children,i=(0,n._T)(t,["value","children"]),s="string"==typeof a?new Date(a||0):a;return o("formatDate"===e?r.formatDateToParts(s,i):r.formatTimeToParts(s,i))};return t.displayName=o[e],t}function d(e){var t=function(t){var r=(0,l.Z)(),a=t.value,o=t.children,s=(0,n._T)(t,["value","children"]),c=r[e](a,s);if("function"==typeof o)return o(c);var d=r.textComponent||i.Fragment;return i.createElement(d,null,c)};return t.displayName=a[e],t}function u(e){return e}s.displayName="FormattedNumberParts";var m=d("formatDate"),g=d("formatTime");d("formatNumber"),d("formatList"),d("formatDisplayName"),c("formatDate"),c("formatTime")}}]);