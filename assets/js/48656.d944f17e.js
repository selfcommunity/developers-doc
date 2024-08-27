"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[48656],{87952:(e,t,r)=>{r.d(t,{Z:()=>y});var o=r(80102),a=r(83117),n=r(67294),s=r(63961),i=r(94780),l=r(90948),c=r(28628),d=r(88169),u=r(85893);const m=(0,d.Z)((0,u.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");var p=r(54801),f=r(80560);const v=["alt","children","className","component","slots","slotProps","imgProps","sizes","src","srcSet","variant"],h=(0,l.ZP)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[r.variant],r.colorDefault&&t.colorDefault]}})((({theme:e})=>({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none",variants:[{props:{variant:"rounded"},style:{borderRadius:(e.vars||e).shape.borderRadius}},{props:{variant:"square"},style:{borderRadius:0}},{props:{colorDefault:!0},style:(0,a.Z)({color:(e.vars||e).palette.background.default},e.vars?{backgroundColor:e.vars.palette.Avatar.defaultBg}:(0,a.Z)({backgroundColor:e.palette.grey[400]},e.applyStyles("dark",{backgroundColor:e.palette.grey[600]})))}]}))),Z=(0,l.ZP)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(e,t)=>t.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),g=(0,l.ZP)(m,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(e,t)=>t.fallback})({width:"75%",height:"75%"});const y=n.forwardRef((function(e,t){const r=(0,c.i)({props:e,name:"MuiAvatar"}),{alt:l,children:d,className:m,component:y="div",slots:b={},slotProps:S={},imgProps:w,sizes:k,src:x,srcSet:P,variant:C="circular"}=r,N=(0,o.Z)(r,v);let R=null;const M=function({crossOrigin:e,referrerPolicy:t,src:r,srcSet:o}){const[a,s]=n.useState(!1);return n.useEffect((()=>{if(!r&&!o)return;s(!1);let a=!0;const n=new Image;return n.onload=()=>{a&&s("loaded")},n.onerror=()=>{a&&s("error")},n.crossOrigin=e,n.referrerPolicy=t,n.src=r,o&&(n.srcset=o),()=>{a=!1}}),[e,t,r,o]),a}((0,a.Z)({},w,{src:x,srcSet:P})),F=x||P,$=F&&"error"!==M,T=(0,a.Z)({},r,{colorDefault:!$,component:y,variant:C}),I=(e=>{const{classes:t,variant:r,colorDefault:o}=e,a={root:["root",r,o&&"colorDefault"],img:["img"],fallback:["fallback"]};return(0,i.Z)(a,p.$,t)})(T),[D,O]=(0,f.Z)("img",{className:I.img,elementType:Z,externalForwardedProps:{slots:b,slotProps:{img:(0,a.Z)({},w,S.img)}},additionalProps:{alt:l,src:x,srcSet:P,sizes:k},ownerState:T});return R=$?(0,u.jsx)(D,(0,a.Z)({},O)):d||0===d?d:F&&l?l[0]:(0,u.jsx)(g,{ownerState:T,className:I.fallback}),(0,u.jsx)(h,(0,a.Z)({as:y,ownerState:T,className:(0,s.Z)(I.root,m),ref:t},N,{children:R}))}))},54801:(e,t,r)=>{r.d(t,{$:()=>n,Z:()=>s});var o=r(1588),a=r(34867);function n(e){return(0,a.ZP)("MuiAvatar",e)}const s=(0,o.Z)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"])},94253:(e,t,r)=>{r.d(t,{Z:()=>y});var o=r(83117),a=r(80102),n=r(67294),s=r(63961),i=r(74854),l=r(18784),c=r(87893),d=r(71713),u=r(85893);const m=["className","component"];var p=r(37078),f=r(75389),v=r(10606);const h=(0,r(1588).Z)("MuiBox",["root"]),Z=(0,f.Z)(),g=function(e={}){const{themeId:t,defaultTheme:r,defaultClassName:p="MuiBox-root",generateClassName:f}=e,v=(0,i.default)("div",{shouldForwardProp:e=>"theme"!==e&&"sx"!==e&&"as"!==e})(l.Z);return n.forwardRef((function(e,n){const i=(0,d.Z)(r),l=(0,c.Z)(e),{className:h,component:Z="div"}=l,g=(0,a.Z)(l,m);return(0,u.jsx)(v,(0,o.Z)({as:Z,ref:n,className:(0,s.Z)(h,f?f(p):p),theme:t&&i[t]||i},g))}))}({themeId:v.Z,defaultTheme:Z,defaultClassName:h.root,generateClassName:p.Z.generate}),y=g},98456:(e,t,r)=>{r.d(t,{Z:()=>R});var o=r(80102),a=r(83117),n=r(67294),s=r(63961),i=r(94780),l=r(70917),c=r(98216),d=r(28628),u=r(90948),m=r(1588),p=r(34867);function f(e){return(0,p.ZP)("MuiCircularProgress",e)}(0,m.Z)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);var v=r(85893);const h=["className","color","disableShrink","size","style","thickness","value","variant"];let Z,g,y,b,S=e=>e;const w=44,k=(0,l.F4)(Z||(Z=S`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),x=(0,l.F4)(g||(g=S`
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
`)),P=(0,u.ZP)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[r.variant],t[`color${(0,c.Z)(r.color)}`]]}})((({ownerState:e,theme:t})=>(0,a.Z)({display:"inline-block"},"determinate"===e.variant&&{transition:t.transitions.create("transform")},"inherit"!==e.color&&{color:(t.vars||t).palette[e.color].main})),(({ownerState:e})=>"indeterminate"===e.variant&&(0,l.iv)(y||(y=S`
      animation: ${0} 1.4s linear infinite;
    `),k))),C=(0,u.ZP)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(e,t)=>t.svg})({display:"block"}),N=(0,u.ZP)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.circle,t[`circle${(0,c.Z)(r.variant)}`],r.disableShrink&&t.circleDisableShrink]}})((({ownerState:e,theme:t})=>(0,a.Z)({stroke:"currentColor"},"determinate"===e.variant&&{transition:t.transitions.create("stroke-dashoffset")},"indeterminate"===e.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0})),(({ownerState:e})=>"indeterminate"===e.variant&&!e.disableShrink&&(0,l.iv)(b||(b=S`
      animation: ${0} 1.4s ease-in-out infinite;
    `),x))),R=n.forwardRef((function(e,t){const r=(0,d.i)({props:e,name:"MuiCircularProgress"}),{className:n,color:l="primary",disableShrink:u=!1,size:m=40,style:p,thickness:Z=3.6,value:g=0,variant:y="indeterminate"}=r,b=(0,o.Z)(r,h),S=(0,a.Z)({},r,{color:l,disableShrink:u,size:m,thickness:Z,value:g,variant:y}),k=(e=>{const{classes:t,variant:r,color:o,disableShrink:a}=e,n={root:["root",r,`color${(0,c.Z)(o)}`],svg:["svg"],circle:["circle",`circle${(0,c.Z)(r)}`,a&&"circleDisableShrink"]};return(0,i.Z)(n,f,t)})(S),x={},R={},M={};if("determinate"===y){const e=2*Math.PI*((w-Z)/2);x.strokeDasharray=e.toFixed(3),M["aria-valuenow"]=Math.round(g),x.strokeDashoffset=`${((100-g)/100*e).toFixed(3)}px`,R.transform="rotate(-90deg)"}return(0,v.jsx)(P,(0,a.Z)({className:(0,s.Z)(k.root,n),style:(0,a.Z)({width:m,height:m},R,p),ownerState:S,ref:t,role:"progressbar"},M,b,{children:(0,v.jsx)(C,{className:k.svg,ownerState:S,viewBox:"22 22 44 44",children:(0,v.jsx)(N,{className:k.circle,style:x,ownerState:S,cx:w,cy:w,r:(w-Z)/2,fill:"none",strokeWidth:Z})})}))}))},7982:(e,t,r)=>{r.d(t,{d:()=>c});var o=r(67294),a=r(33703),n=r(59948),s=r(82690),i=r(85893);function l(e){return e.substring(2).toLowerCase()}function c(e){const{children:t,disableReactTree:r=!1,mouseEvent:c="onClick",onClickAway:d,touchEvent:u="onTouchEnd"}=e,m=o.useRef(!1),p=o.useRef(null),f=o.useRef(!1),v=o.useRef(!1);o.useEffect((()=>(setTimeout((()=>{f.current=!0}),0),()=>{f.current=!1})),[]);const h=(0,a.Z)(t.ref,p),Z=(0,n.Z)((e=>{const t=v.current;v.current=!1;const o=(0,s.Z)(p.current);if(!f.current||!p.current||"clientX"in e&&function(e,t){return t.documentElement.clientWidth<e.clientX||t.documentElement.clientHeight<e.clientY}(e,o))return;if(m.current)return void(m.current=!1);let a;a=e.composedPath?e.composedPath().indexOf(p.current)>-1:!o.documentElement.contains(e.target)||p.current.contains(e.target),a||!r&&t||d(e)})),g=e=>r=>{v.current=!0;const o=t.props[e];o&&o(r)},y={ref:h};return!1!==u&&(y[u]=g(u)),o.useEffect((()=>{if(!1!==u){const e=l(u),t=(0,s.Z)(p.current),r=()=>{m.current=!0};return t.addEventListener(e,Z),t.addEventListener("touchmove",r),()=>{t.removeEventListener(e,Z),t.removeEventListener("touchmove",r)}}}),[Z,u]),!1!==c&&(y[c]=g(c)),o.useEffect((()=>{if(!1!==c){const e=l(c),t=(0,s.Z)(p.current);return t.addEventListener(e,Z),()=>{t.removeEventListener(e,Z)}}}),[Z,c]),(0,i.jsx)(o.Fragment,{children:o.cloneElement(t,y)})}},35097:(e,t,r)=>{r.d(t,{V:()=>n,Z:()=>s});var o=r(1588),a=r(34867);function n(e){return(0,a.ZP)("MuiDivider",e)}const s=(0,o.Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"])},93946:(e,t,r)=>{r.d(t,{Z:()=>b});var o=r(80102),a=r(83117),n=r(67294),s=r(63961),i=r(94780),l=r(51025),c=r(90948),d=r(28628),u=r(49990),m=r(98216),p=r(1588),f=r(34867);function v(e){return(0,f.ZP)("MuiIconButton",e)}const h=(0,p.Z)("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]);var Z=r(85893);const g=["edge","children","className","color","disabled","disableFocusRipple","size"],y=(0,c.ZP)(u.Z,{name:"MuiIconButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,"default"!==r.color&&t[`color${(0,m.Z)(r.color)}`],r.edge&&t[`edge${(0,m.Z)(r.edge)}`],t[`size${(0,m.Z)(r.size)}`]]}})((({theme:e,ownerState:t})=>(0,a.Z)({textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:(e.vars||e).palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest})},!t.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,l.Fq)(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"start"===t.edge&&{marginLeft:"small"===t.size?-3:-12},"end"===t.edge&&{marginRight:"small"===t.size?-3:-12})),(({theme:e,ownerState:t})=>{var r;const o=null==(r=(e.vars||e).palette)?void 0:r[t.color];return(0,a.Z)({},"inherit"===t.color&&{color:"inherit"},"inherit"!==t.color&&"default"!==t.color&&(0,a.Z)({color:null==o?void 0:o.main},!t.disableRipple&&{"&:hover":(0,a.Z)({},o&&{backgroundColor:e.vars?`rgba(${o.mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,l.Fq)(o.main,e.palette.action.hoverOpacity)},{"@media (hover: none)":{backgroundColor:"transparent"}})}),"small"===t.size&&{padding:5,fontSize:e.typography.pxToRem(18)},"large"===t.size&&{padding:12,fontSize:e.typography.pxToRem(28)},{[`&.${h.disabled}`]:{backgroundColor:"transparent",color:(e.vars||e).palette.action.disabled}})})),b=n.forwardRef((function(e,t){const r=(0,d.i)({props:e,name:"MuiIconButton"}),{edge:n=!1,children:l,className:c,color:u="default",disabled:p=!1,disableFocusRipple:f=!1,size:h="medium"}=r,b=(0,o.Z)(r,g),S=(0,a.Z)({},r,{edge:n,color:u,disabled:p,disableFocusRipple:f,size:h}),w=(e=>{const{classes:t,disabled:r,color:o,edge:a,size:n}=e,s={root:["root",r&&"disabled","default"!==o&&`color${(0,m.Z)(o)}`,a&&`edge${(0,m.Z)(a)}`,`size${(0,m.Z)(n)}`]};return(0,i.Z)(s,v,t)})(S);return(0,Z.jsx)(y,(0,a.Z)({className:(0,s.Z)(w.root,c),centerRipple:!0,focusRipple:!f,disabled:p,ref:t},b,{ownerState:S,children:l}))}))},84592:(e,t,r)=>{r.d(t,{Z:()=>s,f:()=>n});var o=r(1588),a=r(34867);function n(e){return(0,a.ZP)("MuiListItemIcon",e)}const s=(0,o.Z)("MuiListItemIcon",["root","alignItemsFlexStart"])},26336:(e,t,r)=>{r.d(t,{L:()=>n,Z:()=>s});var o=r(1588),a=r(34867);function n(e){return(0,a.ZP)("MuiListItemText",e)}const s=(0,o.Z)("MuiListItemText",["root","multiline","dense","inset","primary","secondary"])},18972:(e,t,r)=>{r.d(t,{Z:()=>C});var o=r(80102),a=r(83117),n=r(67294),s=r(63961),i=r(94780),l=r(51025),c=r(90948),d=r(14136),u=r(28628),m=r(59773),p=r(49990),f=r(58974),v=r(51705),h=r(35097),Z=r(84592),g=r(26336),y=r(1588),b=r(34867);function S(e){return(0,b.ZP)("MuiMenuItem",e)}const w=(0,y.Z)("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]);var k=r(85893);const x=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex","className"],P=(0,c.ZP)(p.Z,{shouldForwardProp:e=>(0,d.Z)(e)||"classes"===e,name:"MuiMenuItem",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.dense&&t.dense,r.divider&&t.divider,!r.disableGutters&&t.gutters]}})((({theme:e,ownerState:t})=>(0,a.Z)({},e.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!t.disableGutters&&{paddingLeft:16,paddingRight:16},t.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},{"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${w.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:(0,l.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${w.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:(0,l.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${w.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:(0,l.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:(0,l.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${w.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${w.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`& + .${h.Z.root}`]:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},[`& + .${h.Z.inset}`]:{marginLeft:52},[`& .${g.Z.root}`]:{marginTop:0,marginBottom:0},[`& .${g.Z.inset}`]:{paddingLeft:36},[`& .${Z.Z.root}`]:{minWidth:36}},!t.dense&&{[e.breakpoints.up("sm")]:{minHeight:"auto"}},t.dense&&(0,a.Z)({minHeight:32,paddingTop:4,paddingBottom:4},e.typography.body2,{[`& .${Z.Z.root} svg`]:{fontSize:"1.25rem"}})))),C=n.forwardRef((function(e,t){const r=(0,u.i)({props:e,name:"MuiMenuItem"}),{autoFocus:l=!1,component:c="li",dense:d=!1,divider:p=!1,disableGutters:h=!1,focusVisibleClassName:Z,role:g="menuitem",tabIndex:y,className:b}=r,w=(0,o.Z)(r,x),C=n.useContext(m.Z),N=n.useMemo((()=>({dense:d||C.dense||!1,disableGutters:h})),[C.dense,d,h]),R=n.useRef(null);(0,f.Z)((()=>{l&&R.current&&R.current.focus()}),[l]);const M=(0,a.Z)({},r,{dense:N.dense,divider:p,disableGutters:h}),F=(e=>{const{disabled:t,dense:r,divider:o,disableGutters:n,selected:s,classes:l}=e,c={root:["root",r&&"dense",t&&"disabled",!n&&"gutters",o&&"divider",s&&"selected"]},d=(0,i.Z)(c,S,l);return(0,a.Z)({},l,d)})(r),$=(0,v.Z)(R,t);let T;return r.disabled||(T=void 0!==y?y:-1),(0,k.jsx)(m.Z.Provider,{value:N,children:(0,k.jsx)(P,(0,a.Z)({ref:$,role:g,tabIndex:T,component:c,focusVisibleClassName:(0,s.Z)(F.focusVisible,Z),className:(0,s.Z)(F.root,b)},w,{ownerState:M,classes:F}))})}))},48542:(e,t,r)=>{r.d(t,{Z:()=>E});var o=r(80102),a=r(83117),n=r(67294),s=r(63961),i=r(4953),l=r(34867),c=r(94780),d=r(74854),u=r(67348),m=r(18784);const p=["ownerState"],f=["variants"],v=["name","slot","skipVariantsResolver","skipSx","overridesResolver"];function h(e){return"ownerState"!==e&&"theme"!==e&&"sx"!==e&&"as"!==e}const Z=(0,u.Z)(),g=e=>e?e.charAt(0).toLowerCase()+e.slice(1):e;function y({defaultTheme:e,theme:t,themeId:r}){return o=t,0===Object.keys(o).length?e:t[r]||t;var o}function b(e){return e?(t,r)=>r[e]:null}function S(e,t){let{ownerState:r}=t,n=(0,o.Z)(t,p);const s="function"==typeof e?e((0,a.Z)({ownerState:r},n)):e;if(Array.isArray(s))return s.flatMap((e=>S(e,(0,a.Z)({ownerState:r},n))));if(s&&"object"==typeof s&&Array.isArray(s.variants)){const{variants:e=[]}=s;let t=(0,o.Z)(s,f);return e.forEach((e=>{let o=!0;"function"==typeof e.props?o=e.props((0,a.Z)({ownerState:r},n,r)):Object.keys(e.props).forEach((t=>{(null==r?void 0:r[t])!==e.props[t]&&n[t]!==e.props[t]&&(o=!1)})),o&&(Array.isArray(t)||(t=[t]),t.push("function"==typeof e.style?e.style((0,a.Z)({ownerState:r},n,r)):e.style))})),t}return s}const w=function(e={}){const{themeId:t,defaultTheme:r=Z,rootShouldForwardProp:n=h,slotShouldForwardProp:s=h}=e,l=e=>(0,m.Z)((0,a.Z)({},e,{theme:y((0,a.Z)({},e,{defaultTheme:r,themeId:t}))}));return l.__mui_systemSx=!0,(e,c={})=>{(0,d.internal_processStyles)(e,(e=>e.filter((e=>!(null!=e&&e.__mui_systemSx)))));const{name:u,slot:m,skipVariantsResolver:p,skipSx:f,overridesResolver:Z=b(g(m))}=c,w=(0,o.Z)(c,v),k=void 0!==p?p:m&&"Root"!==m&&"root"!==m||!1,x=f||!1;let P=h;"Root"===m||"root"===m?P=n:m?P=s:function(e){return"string"==typeof e&&e.charCodeAt(0)>96}(e)&&(P=void 0);const C=(0,d.default)(e,(0,a.Z)({shouldForwardProp:P,label:undefined},w)),N=e=>"function"==typeof e&&e.__emotion_real!==e||(0,i.P)(e)?o=>S(e,(0,a.Z)({},o,{theme:y({theme:o.theme,defaultTheme:r,themeId:t})})):e,R=(o,...n)=>{let s=N(o);const i=n?n.map(N):[];u&&Z&&i.push((e=>{const o=y((0,a.Z)({},e,{defaultTheme:r,themeId:t}));if(!o.components||!o.components[u]||!o.components[u].styleOverrides)return null;const n=o.components[u].styleOverrides,s={};return Object.entries(n).forEach((([t,r])=>{s[t]=S(r,(0,a.Z)({},e,{theme:o}))})),Z(e,s)})),u&&!k&&i.push((e=>{var o;const n=y((0,a.Z)({},e,{defaultTheme:r,themeId:t}));return S({variants:null==n||null==(o=n.components)||null==(o=o[u])?void 0:o.variants},(0,a.Z)({},e,{theme:n}))})),x||i.push(l);const c=i.length-n.length;if(Array.isArray(o)&&c>0){const e=new Array(c).fill("");s=[...o,...e],s.raw=[...o.raw,...e]}const d=C(s,...i);return e.muiName&&(d.muiName=e.muiName),d};return C.withConfig&&(R.withConfig=C.withConfig),R}}(),k=w;var x=r(31607),P=r(87893),C=r(46663),N=r(60976),R=r(85893);const M=["component","direction","spacing","divider","children","className","useFlexGap"],F=(0,u.Z)(),$=k("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root});function T(e){return(0,x.Z)({props:e,name:"MuiStack",defaultTheme:F})}function I(e,t){const r=n.Children.toArray(e).filter(Boolean);return r.reduce(((e,o,a)=>(e.push(o),a<r.length-1&&e.push(n.cloneElement(t,{key:`separator-${a}`})),e)),[])}const D=({ownerState:e,theme:t})=>{let r=(0,a.Z)({display:"flex",flexDirection:"column"},(0,C.k9)({theme:t},(0,C.P$)({values:e.direction,breakpoints:t.breakpoints.values}),(e=>({flexDirection:e}))));if(e.spacing){const o=(0,N.hB)(t),a=Object.keys(t.breakpoints.values).reduce(((t,r)=>(("object"==typeof e.spacing&&null!=e.spacing[r]||"object"==typeof e.direction&&null!=e.direction[r])&&(t[r]=!0),t)),{}),n=(0,C.P$)({values:e.direction,base:a}),s=(0,C.P$)({values:e.spacing,base:a});"object"==typeof n&&Object.keys(n).forEach(((e,t,r)=>{if(!n[e]){const o=t>0?n[r[t-1]]:"column";n[e]=o}}));const l=(t,r)=>{return e.useFlexGap?{gap:(0,N.NA)(o,t)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${a=r?n[r]:e.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[a]}`]:(0,N.NA)(o,t)}};var a};r=(0,i.Z)(r,(0,C.k9)({theme:t},s,l))}return r=(0,C.dt)(t.breakpoints,r),r};var O=r(90948),L=r(28628);const z=function(e={}){const{createStyledComponent:t=$,useThemeProps:r=T,componentName:i="MuiStack"}=e,d=t(D),u=n.forwardRef((function(e,t){const n=r(e),u=(0,P.Z)(n),{component:m="div",direction:p="column",spacing:f=0,divider:v,children:h,className:Z,useFlexGap:g=!1}=u,y=(0,o.Z)(u,M),b={direction:p,spacing:f,useFlexGap:g},S=(0,c.Z)({root:["root"]},(e=>(0,l.ZP)(i,e)),{});return(0,R.jsx)(d,(0,a.Z)({as:m,ownerState:b,ref:t,className:(0,s.Z)(S.root,Z)},y,{children:v?I(h,v):h}))}));return u}({createStyledComponent:(0,O.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root}),useThemeProps:e=>(0,L.i)({props:e,name:"MuiStack"})}),E=z},37292:(e,t,r)=>{var o;r.d(t,{Z:()=>u});var a=r(67294),n=r(73546),s=r(64560),i=r(2952);function l(e,t,r,o,s){const[i,l]=a.useState((()=>s&&r?r(e).matches:o?o(e).matches:t));return(0,n.Z)((()=>{let t=!0;if(!r)return;const o=r(e),a=()=>{t&&l(o.matches)};return a(),o.addListener(a),()=>{t=!1,o.removeListener(a)}}),[e,r]),i}const c=(o||(o=r.t(a,2))).useSyncExternalStore;function d(e,t,r,o,n){const s=a.useCallback((()=>t),[t]),i=a.useMemo((()=>{if(n&&r)return()=>r(e).matches;if(null!==o){const{matches:t}=o(e);return()=>t}return s}),[s,e,o,n,r]),[l,d]=a.useMemo((()=>{if(null===r)return[s,()=>()=>{}];const t=r(e);return[()=>t.matches,e=>(t.addListener(e),()=>{t.removeListener(e)})]}),[s,r,e]);return c(d,l,i)}function u(e,t={}){const r=(0,i.Z)(),o="undefined"!=typeof window&&void 0!==window.matchMedia,{defaultMatches:a=!1,matchMedia:n=(o?window.matchMedia:null),ssrMatchMedia:u=null,noSsr:m=!1}=(0,s.Z)({name:"MuiUseMediaQuery",props:t,theme:r});let p="function"==typeof e?e(r):e;p=p.replace(/^@media( ?)/m,"");return(void 0!==c?d:l)(p,a,n,u,m)}},64560:(e,t,r)=>{r.d(t,{Z:()=>a});var o=r(35971);function a(e){const{theme:t,name:r,props:a}=e;return t&&t.components&&t.components[r]&&t.components[r].defaultProps?(0,o.Z)(t.components[r].defaultProps,a):a}},31607:(e,t,r)=>{r.d(t,{Z:()=>n});var o=r(64560),a=r(71713);function n({props:e,name:t,defaultTheme:r,themeId:n}){let s=(0,a.Z)(r);n&&(s=s[n]||s);return(0,o.Z)({theme:s,name:t,props:e})}},50700:(e,t,r)=>{r.d(t,{Z:()=>a});var o=r(67294);const a=function(e,t){var r,a;return o.isValidElement(e)&&-1!==t.indexOf(null!=(r=e.type.muiName)?r:null==(a=e.type)||null==(a=a._payload)||null==(a=a.value)?void 0:a.muiName)}},27909:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r(92996).Z},80560:(e,t,r)=>{r.d(t,{Z:()=>m});var o=r(83117),a=r(80102),n=r(33703),s=r(86542),i=r(65610),l=r(65220);const c=["className","elementType","ownerState","externalForwardedProps","getSlotOwnerState","internalForwardedProps"],d=["component","slots","slotProps"],u=["component"];function m(e,t){const{className:r,elementType:m,ownerState:p,externalForwardedProps:f,getSlotOwnerState:v,internalForwardedProps:h}=t,Z=(0,a.Z)(t,c),{component:g,slots:y={[e]:void 0},slotProps:b={[e]:void 0}}=f,S=(0,a.Z)(f,d),w=y[e]||m,k=(0,i.Z)(b[e],p),x=(0,l.Z)((0,o.Z)({className:r},Z,{externalForwardedProps:"root"===e?S:void 0,externalSlotProps:k})),{props:{component:P},internalRef:C}=x,N=(0,a.Z)(x.props,u),R=(0,n.Z)(C,null==k?void 0:k.ref,t.ref),M=v?v(N):{},F=(0,o.Z)({},p,M),$="root"===e?P||g:P,T=(0,s.Z)(w,(0,o.Z)({},"root"===e&&!g&&!y[e]&&h,"root"!==e&&!y[e]&&h,N,$&&{as:$},{ref:R}),F);return Object.keys(M).forEach((e=>{delete T[e]})),[w,T]}},75459:(e,t,r)=>{r.d(t,{J:()=>o});const o="@selfcommunity/react-ui"},54490:(e,t,r)=>{r.d(t,{Ji:()=>m,qN:()=>p,vU:()=>u});var o,a,n=r(25719),s=r(67294),i=r(86896);!function(e){e.formatDate="FormattedDate",e.formatTime="FormattedTime",e.formatNumber="FormattedNumber",e.formatList="FormattedList",e.formatDisplayName="FormattedDisplayName"}(o||(o={})),function(e){e.formatDate="FormattedDateParts",e.formatTime="FormattedTimeParts",e.formatNumber="FormattedNumberParts",e.formatList="FormattedListParts"}(a||(a={}));var l=function(e){var t=(0,i.Z)(),r=e.value,o=e.children,a=(0,n._T)(e,["value","children"]);return o(t.formatNumberToParts(r,a))};l.displayName="FormattedNumberParts";function c(e){var t=function(t){var r=(0,i.Z)(),o=t.value,a=t.children,s=(0,n._T)(t,["value","children"]),l="string"==typeof o?new Date(o||0):o;return a("formatDate"===e?r.formatDateToParts(l,s):r.formatTimeToParts(l,s))};return t.displayName=a[e],t}function d(e){var t=function(t){var r=(0,i.Z)(),o=t.value,a=t.children,l=(0,n._T)(t,["value","children"]),c=r[e](o,l);if("function"==typeof a)return a(c);var d=r.textComponent||s.Fragment;return s.createElement(d,null,c)};return t.displayName=o[e],t}function u(e){return e}l.displayName="FormattedNumberParts";var m=d("formatDate"),p=d("formatTime");d("formatNumber"),d("formatList"),d("formatDisplayName"),c("formatDate"),c("formatTime")}}]);