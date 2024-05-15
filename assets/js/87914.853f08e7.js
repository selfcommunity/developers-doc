"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[87914],{64666:(e,o,r)=>{r.d(o,{Z:()=>D});var a=r(80102),t=r(83117),i=r(67294),n=r(63961),l=r(58510),s=r(89326),d=r(98216),p=r(11994),c=r(16628),u=r(90629),m=r(71657),Z=r(90948),h=r(77620),x=r(34182),v=r(84808),g=r(2734),f=r(85893);const b=["aria-describedby","aria-labelledby","BackdropComponent","BackdropProps","children","className","disableEscapeKeyDown","fullScreen","fullWidth","maxWidth","onBackdropClick","onClick","onClose","open","PaperComponent","PaperProps","scroll","TransitionComponent","transitionDuration","TransitionProps"],S=(0,Z.ZP)(v.Z,{name:"MuiDialog",slot:"Backdrop",overrides:(e,o)=>o.backdrop})({zIndex:-1}),w=(0,Z.ZP)(p.Z,{name:"MuiDialog",slot:"Root",overridesResolver:(e,o)=>o.root})({"@media print":{position:"absolute !important"}}),W=(0,Z.ZP)("div",{name:"MuiDialog",slot:"Container",overridesResolver:(e,o)=>{const{ownerState:r}=e;return[o.container,o[`scroll${(0,d.Z)(r.scroll)}`]]}})((({ownerState:e})=>(0,t.Z)({height:"100%","@media print":{height:"auto"},outline:0},"paper"===e.scroll&&{display:"flex",justifyContent:"center",alignItems:"center"},"body"===e.scroll&&{overflowY:"auto",overflowX:"hidden",textAlign:"center","&::after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}}))),k=(0,Z.ZP)(u.Z,{name:"MuiDialog",slot:"Paper",overridesResolver:(e,o)=>{const{ownerState:r}=e;return[o.paper,o[`scrollPaper${(0,d.Z)(r.scroll)}`],o[`paperWidth${(0,d.Z)(String(r.maxWidth))}`],r.fullWidth&&o.paperFullWidth,r.fullScreen&&o.paperFullScreen]}})((({theme:e,ownerState:o})=>(0,t.Z)({margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"}},"paper"===o.scroll&&{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"},"body"===o.scroll&&{display:"inline-block",verticalAlign:"middle",textAlign:"left"},!o.maxWidth&&{maxWidth:"calc(100% - 64px)"},"xs"===o.maxWidth&&{maxWidth:"px"===e.breakpoints.unit?Math.max(e.breakpoints.values.xs,444):`max(${e.breakpoints.values.xs}${e.breakpoints.unit}, 444px)`,[`&.${h.Z.paperScrollBody}`]:{[e.breakpoints.down(Math.max(e.breakpoints.values.xs,444)+64)]:{maxWidth:"calc(100% - 64px)"}}},o.maxWidth&&"xs"!==o.maxWidth&&{maxWidth:`${e.breakpoints.values[o.maxWidth]}${e.breakpoints.unit}`,[`&.${h.Z.paperScrollBody}`]:{[e.breakpoints.down(e.breakpoints.values[o.maxWidth]+64)]:{maxWidth:"calc(100% - 64px)"}}},o.fullWidth&&{width:"calc(100% - 64px)"},o.fullScreen&&{margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0,[`&.${h.Z.paperScrollBody}`]:{margin:0,maxWidth:"100%"}}))),D=i.forwardRef((function(e,o){const r=(0,m.Z)({props:e,name:"MuiDialog"}),p=(0,g.Z)(),Z={enter:p.transitions.duration.enteringScreen,exit:p.transitions.duration.leavingScreen},{"aria-describedby":v,"aria-labelledby":D,BackdropComponent:P,BackdropProps:y,children:C,className:M,disableEscapeKeyDown:R=!1,fullScreen:$=!1,fullWidth:N=!1,maxWidth:B="sm",onBackdropClick:T,onClick:j,onClose:A,open:F,PaperComponent:I=u.Z,PaperProps:E={},scroll:K="paper",TransitionComponent:Y=c.Z,transitionDuration:X=Z,TransitionProps:H}=r,L=(0,a.Z)(r,b),_=(0,t.Z)({},r,{disableEscapeKeyDown:R,fullScreen:$,fullWidth:N,maxWidth:B,scroll:K}),z=(e=>{const{classes:o,scroll:r,maxWidth:a,fullWidth:t,fullScreen:i}=e,n={root:["root"],container:["container",`scroll${(0,d.Z)(r)}`],paper:["paper",`paperScroll${(0,d.Z)(r)}`,`paperWidth${(0,d.Z)(String(a))}`,t&&"paperFullWidth",i&&"paperFullScreen"]};return(0,l.Z)(n,h.D,o)})(_),O=i.useRef(),q=(0,s.Z)(D),G=i.useMemo((()=>({titleId:q})),[q]);return(0,f.jsx)(w,(0,t.Z)({className:(0,n.Z)(z.root,M),closeAfterTransition:!0,components:{Backdrop:S},componentsProps:{backdrop:(0,t.Z)({transitionDuration:X,as:P},y)},disableEscapeKeyDown:R,onClose:A,open:F,ref:o,onClick:e=>{j&&j(e),O.current&&(O.current=null,T&&T(e),A&&A(e,"backdropClick"))},ownerState:_},L,{children:(0,f.jsx)(Y,(0,t.Z)({appear:!0,in:F,timeout:X,role:"presentation"},H,{children:(0,f.jsx)(W,{className:(0,n.Z)(z.container),onMouseDown:e=>{O.current=e.target===e.currentTarget},ownerState:_,children:(0,f.jsx)(k,(0,t.Z)({as:I,elevation:24,role:"dialog","aria-describedby":v,"aria-labelledby":q},E,{className:(0,n.Z)(z.paper,E.className),ownerState:_,children:(0,f.jsx)(x.Z.Provider,{value:G,children:C})}))})}))}))}))},34182:(e,o,r)=>{r.d(o,{Z:()=>a});const a=r(67294).createContext({})},77620:(e,o,r)=>{r.d(o,{D:()=>i,Z:()=>n});var a=r(1977),t=r(8027);function i(e){return(0,t.ZP)("MuiDialog",e)}const n=(0,a.Z)("MuiDialog",["root","scrollPaper","scrollBody","container","paper","paperScrollPaper","paperScrollBody","paperWidthFalse","paperWidthXs","paperWidthSm","paperWidthMd","paperWidthLg","paperWidthXl","paperFullWidth","paperFullScreen"])},31425:(e,o,r)=>{r.d(o,{Z:()=>x});var a=r(80102),t=r(83117),i=r(67294),n=r(63961),l=r(58510),s=r(90948),d=r(71657),p=r(1977),c=r(8027);function u(e){return(0,c.ZP)("MuiDialogActions",e)}(0,p.Z)("MuiDialogActions",["root","spacing"]);var m=r(85893);const Z=["className","disableSpacing"],h=(0,s.ZP)("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:r}=e;return[o.root,!r.disableSpacing&&o.spacing]}})((({ownerState:e})=>(0,t.Z)({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},!e.disableSpacing&&{"& > :not(style) ~ :not(style)":{marginLeft:8}}))),x=i.forwardRef((function(e,o){const r=(0,d.Z)({props:e,name:"MuiDialogActions"}),{className:i,disableSpacing:s=!1}=r,p=(0,a.Z)(r,Z),c=(0,t.Z)({},r,{disableSpacing:s}),x=(e=>{const{classes:o,disableSpacing:r}=e,a={root:["root",!r&&"spacing"]};return(0,l.Z)(a,u,o)})(c);return(0,m.jsx)(h,(0,t.Z)({className:(0,n.Z)(x.root,i),ownerState:c,ref:o},p))}))},6514:(e,o,r)=>{r.d(o,{Z:()=>v});var a=r(80102),t=r(83117),i=r(67294),n=r(63961),l=r(58510),s=r(90948),d=r(71657),p=r(1977),c=r(8027);function u(e){return(0,c.ZP)("MuiDialogContent",e)}(0,p.Z)("MuiDialogContent",["root","dividers"]);var m=r(4472),Z=r(85893);const h=["className","dividers"],x=(0,s.ZP)("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:r}=e;return[o.root,r.dividers&&o.dividers]}})((({theme:e,ownerState:o})=>(0,t.Z)({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px"},o.dividers?{padding:"16px 24px",borderTop:`1px solid ${(e.vars||e).palette.divider}`,borderBottom:`1px solid ${(e.vars||e).palette.divider}`}:{[`.${m.Z.root} + &`]:{paddingTop:0}}))),v=i.forwardRef((function(e,o){const r=(0,d.Z)({props:e,name:"MuiDialogContent"}),{className:i,dividers:s=!1}=r,p=(0,a.Z)(r,h),c=(0,t.Z)({},r,{dividers:s}),m=(e=>{const{classes:o,dividers:r}=e,a={root:["root",r&&"dividers"]};return(0,l.Z)(a,u,o)})(c);return(0,Z.jsx)(x,(0,t.Z)({className:(0,n.Z)(m.root,i),ownerState:c,ref:o},p))}))},37645:(e,o,r)=>{r.d(o,{Z:()=>x});var a=r(83117),t=r(80102),i=r(67294),n=r(63961),l=r(58510),s=r(15861),d=r(90948),p=r(71657),c=r(4472),u=r(34182),m=r(85893);const Z=["className","id"],h=(0,d.ZP)(s.Z,{name:"MuiDialogTitle",slot:"Root",overridesResolver:(e,o)=>o.root})({padding:"16px 24px",flex:"0 0 auto"}),x=i.forwardRef((function(e,o){const r=(0,p.Z)({props:e,name:"MuiDialogTitle"}),{className:s,id:d}=r,x=(0,t.Z)(r,Z),v=r,g=(e=>{const{classes:o}=e;return(0,l.Z)({root:["root"]},c.a,o)})(v),{titleId:f=d}=i.useContext(u.Z);return(0,m.jsx)(h,(0,a.Z)({component:"h2",className:(0,n.Z)(g.root,s),ownerState:v,ref:o,variant:"h6",id:null!=d?d:f},x))}))},4472:(e,o,r)=>{r.d(o,{Z:()=>n,a:()=>i});var a=r(1977),t=r(8027);function i(e){return(0,t.ZP)("MuiDialogTitle",e)}const n=(0,a.Z)("MuiDialogTitle",["root"])}}]);