"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[71425],{57922:(e,t,i)=>{i.d(t,{Z:()=>C});var n=i(80102),r=i(83117),o=i(67294),a=i(63961),l=i(98885),s=i(46271),d=i(94780),c=i(90948),h=i(28628),p=i(96067),u=i(30577),g=i(2734),v=i(51705),m=i(1588),f=i(34867);function w(e){return(0,f.ZP)("MuiCollapse",e)}(0,m.Z)("MuiCollapse",["root","horizontal","vertical","entered","hidden","wrapper","wrapperInner"]);var x=i(85893);const Z=["addEndListener","children","className","collapsedSize","component","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","orientation","style","timeout","TransitionComponent"],b=(0,c.ZP)("div",{name:"MuiCollapse",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:i}=e;return[t.root,t[i.orientation],"entered"===i.state&&t.entered,"exited"===i.state&&!i.in&&"0px"===i.collapsedSize&&t.hidden]}})((({theme:e,ownerState:t})=>(0,r.Z)({height:0,overflow:"hidden",transition:e.transitions.create("height")},"horizontal"===t.orientation&&{height:"auto",width:0,transition:e.transitions.create("width")},"entered"===t.state&&(0,r.Z)({height:"auto",overflow:"visible"},"horizontal"===t.orientation&&{width:"auto"}),"exited"===t.state&&!t.in&&"0px"===t.collapsedSize&&{visibility:"hidden"}))),S=(0,c.ZP)("div",{name:"MuiCollapse",slot:"Wrapper",overridesResolver:(e,t)=>t.wrapper})((({ownerState:e})=>(0,r.Z)({display:"flex",width:"100%"},"horizontal"===e.orientation&&{width:"auto",height:"100%"}))),y=(0,c.ZP)("div",{name:"MuiCollapse",slot:"WrapperInner",overridesResolver:(e,t)=>t.wrapperInner})((({ownerState:e})=>(0,r.Z)({width:"100%"},"horizontal"===e.orientation&&{width:"auto",height:"100%"}))),E=o.forwardRef((function(e,t){const i=(0,h.i)({props:e,name:"MuiCollapse"}),{addEndListener:c,children:m,className:f,collapsedSize:E="0px",component:C,easing:R,in:$,onEnter:A,onEntered:I,onEntering:z,onExit:L,onExited:D,onExiting:W,orientation:M="vertical",style:N,timeout:P=p.x9.standard,TransitionComponent:T=l.ZP}=i,j=(0,n.Z)(i,Z),k=(0,r.Z)({},i,{orientation:M,collapsedSize:E}),H=(e=>{const{orientation:t,classes:i}=e,n={root:["root",`${t}`],entered:["entered"],hidden:["hidden"],wrapper:["wrapper",`${t}`],wrapperInner:["wrapperInner",`${t}`]};return(0,d.Z)(n,w,i)})(k),V=(0,g.Z)(),B=(0,s.Z)(),F=o.useRef(null),_=o.useRef(),q="number"==typeof E?`${E}px`:E,O="horizontal"===M,G=O?"width":"height",J=o.useRef(null),K=(0,v.Z)(t,J),Q=e=>t=>{if(e){const i=J.current;void 0===t?e(i):e(i,t)}},U=()=>F.current?F.current[O?"clientWidth":"clientHeight"]:0,X=Q(((e,t)=>{F.current&&O&&(F.current.style.position="absolute"),e.style[G]=q,A&&A(e,t)})),Y=Q(((e,t)=>{const i=U();F.current&&O&&(F.current.style.position="");const{duration:n,easing:r}=(0,u.C)({style:N,timeout:P,easing:R},{mode:"enter"});if("auto"===P){const t=V.transitions.getAutoHeightDuration(i);e.style.transitionDuration=`${t}ms`,_.current=t}else e.style.transitionDuration="string"==typeof n?n:`${n}ms`;e.style[G]=`${i}px`,e.style.transitionTimingFunction=r,z&&z(e,t)})),ee=Q(((e,t)=>{e.style[G]="auto",I&&I(e,t)})),te=Q((e=>{e.style[G]=`${U()}px`,L&&L(e)})),ie=Q(D),ne=Q((e=>{const t=U(),{duration:i,easing:n}=(0,u.C)({style:N,timeout:P,easing:R},{mode:"exit"});if("auto"===P){const i=V.transitions.getAutoHeightDuration(t);e.style.transitionDuration=`${i}ms`,_.current=i}else e.style.transitionDuration="string"==typeof i?i:`${i}ms`;e.style[G]=q,e.style.transitionTimingFunction=n,W&&W(e)}));return(0,x.jsx)(T,(0,r.Z)({in:$,onEnter:X,onEntered:ee,onEntering:Y,onExit:te,onExited:ie,onExiting:ne,addEndListener:e=>{"auto"===P&&B.start(_.current||0,e),c&&c(J.current,e)},nodeRef:J,timeout:"auto"===P?null:P},j,{children:(e,t)=>(0,x.jsx)(b,(0,r.Z)({as:C,className:(0,a.Z)(H.root,f,{entered:H.entered,exited:!$&&"0px"===q&&H.hidden}[e]),style:(0,r.Z)({[O?"minWidth":"minHeight"]:q},N),ref:K},t,{ownerState:(0,r.Z)({},k,{state:e}),children:(0,x.jsx)(S,{ownerState:(0,r.Z)({},k,{state:e}),className:H.wrapper,ref:F,children:(0,x.jsx)(y,{ownerState:(0,r.Z)({},k,{state:e}),className:H.wrapperInner,children:m})})}))}))}));E.muiSupportAuto=!0;const C=E},67720:(e,t,i)=>{i.d(t,{Z:()=>f});var n=i(80102),r=i(83117),o=i(67294),a=i(63961),l=i(94780),s=i(51025),d=i(90948),c=i(28628),h=i(35097),p=i(85893);const u=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],g=(0,d.ZP)("div",{name:"MuiDivider",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:i}=e;return[t.root,i.absolute&&t.absolute,t[i.variant],i.light&&t.light,"vertical"===i.orientation&&t.vertical,i.flexItem&&t.flexItem,i.children&&t.withChildren,i.children&&"vertical"===i.orientation&&t.withChildrenVertical,"right"===i.textAlign&&"vertical"!==i.orientation&&t.textAlignRight,"left"===i.textAlign&&"vertical"!==i.orientation&&t.textAlignLeft]}})((({theme:e,ownerState:t})=>(0,r.Z)({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(e.vars||e).palette.divider,borderBottomWidth:"thin"},t.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},t.light&&{borderColor:e.vars?`rgba(${e.vars.palette.dividerChannel} / 0.08)`:(0,s.Fq)(e.palette.divider,.08)},"inset"===t.variant&&{marginLeft:72},"middle"===t.variant&&"horizontal"===t.orientation&&{marginLeft:e.spacing(2),marginRight:e.spacing(2)},"middle"===t.variant&&"vertical"===t.orientation&&{marginTop:e.spacing(1),marginBottom:e.spacing(1)},"vertical"===t.orientation&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},t.flexItem&&{alignSelf:"stretch",height:"auto"})),(({ownerState:e})=>(0,r.Z)({},e.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,borderTopStyle:"solid",borderLeftStyle:"solid","&::before, &::after":{content:'""',alignSelf:"center"}})),(({theme:e,ownerState:t})=>(0,r.Z)({},t.children&&"vertical"!==t.orientation&&{"&::before, &::after":{width:"100%",borderTop:`thin solid ${(e.vars||e).palette.divider}`,borderTopStyle:"inherit"}})),(({theme:e,ownerState:t})=>(0,r.Z)({},t.children&&"vertical"===t.orientation&&{flexDirection:"column","&::before, &::after":{height:"100%",borderLeft:`thin solid ${(e.vars||e).palette.divider}`,borderLeftStyle:"inherit"}})),(({ownerState:e})=>(0,r.Z)({},"right"===e.textAlign&&"vertical"!==e.orientation&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},"left"===e.textAlign&&"vertical"!==e.orientation&&{"&::before":{width:"10%"},"&::after":{width:"90%"}}))),v=(0,d.ZP)("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(e,t)=>{const{ownerState:i}=e;return[t.wrapper,"vertical"===i.orientation&&t.wrapperVertical]}})((({theme:e,ownerState:t})=>(0,r.Z)({display:"inline-block",paddingLeft:`calc(${e.spacing(1)} * 1.2)`,paddingRight:`calc(${e.spacing(1)} * 1.2)`},"vertical"===t.orientation&&{paddingTop:`calc(${e.spacing(1)} * 1.2)`,paddingBottom:`calc(${e.spacing(1)} * 1.2)`}))),m=o.forwardRef((function(e,t){const i=(0,c.i)({props:e,name:"MuiDivider"}),{absolute:o=!1,children:s,className:d,component:m=(s?"div":"hr"),flexItem:f=!1,light:w=!1,orientation:x="horizontal",role:Z=("hr"!==m?"separator":void 0),textAlign:b="center",variant:S="fullWidth"}=i,y=(0,n.Z)(i,u),E=(0,r.Z)({},i,{absolute:o,component:m,flexItem:f,light:w,orientation:x,role:Z,textAlign:b,variant:S}),C=(e=>{const{absolute:t,children:i,classes:n,flexItem:r,light:o,orientation:a,textAlign:s,variant:d}=e,c={root:["root",t&&"absolute",d,o&&"light","vertical"===a&&"vertical",r&&"flexItem",i&&"withChildren",i&&"vertical"===a&&"withChildrenVertical","right"===s&&"vertical"!==a&&"textAlignRight","left"===s&&"vertical"!==a&&"textAlignLeft"],wrapper:["wrapper","vertical"===a&&"wrapperVertical"]};return(0,l.Z)(c,h.V,n)})(E);return(0,p.jsx)(g,(0,r.Z)({as:m,className:(0,a.Z)(C.root,d),role:Z,ref:t,ownerState:E},y,{children:s?(0,p.jsx)(v,{className:C.wrapper,ownerState:E,children:s}):null}))}));m.muiSkipListHighlight=!0;const f=m},54545:(e,t,i)=>{i.d(t,{Z:()=>o});var n=i(67294);const r=(0,i(90948).ZP)("div",{name:"SCHiddenPlaceholder",slot:"Root",overridesResolver:(e,t)=>[t.root]})((()=>({height:1,width:"100%",display:"none"})));function o(e){return n.createElement(r,Object.assign({},e))}}}]);