"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[98005],{51107:(r,a,e)=>{e.d(a,{Z:()=>S});var t=e(80102),o=e(83117),n=e(67294),i=(e(76607),e(63961)),s=e(94780),l=e(90948),c=e(28628),u=e(54801),d=e(87952),m=e(1588),f=e(34867);function p(r){return(0,f.ZP)("MuiAvatarGroup",r)}const v=(0,m.Z)("MuiAvatarGroup",["root","avatar"]);var b=e(85893);const g=["children","className","component","componentsProps","max","renderSurplus","slotProps","spacing","total","variant"],h={small:-16,medium:null},Z=(0,l.ZP)("div",{name:"MuiAvatarGroup",slot:"Root",overridesResolver:(r,a)=>(0,o.Z)({[`& .${v.avatar}`]:a.avatar},a.root)})((({theme:r,ownerState:a})=>{const e=a.spacing&&void 0!==h[a.spacing]?h[a.spacing]:-a.spacing;return{[`& .${u.Z.root}`]:{border:`2px solid ${(r.vars||r).palette.background.default}`,boxSizing:"content-box",marginLeft:null!=e?e:-8,"&:last-child":{marginLeft:0}},display:"flex",flexDirection:"row-reverse"}})),S=n.forwardRef((function(r,a){var e;const l=(0,c.i)({props:r,name:"MuiAvatarGroup"}),{children:u,className:m,component:f="div",componentsProps:v={},max:h=5,renderSurplus:S,slotProps:w={},spacing:y="medium",total:x,variant:C="circular"}=l,P=(0,t.Z)(l,g);let $=h<2?2:h;const k=(0,o.Z)({},l,{max:h,spacing:y,component:f,variant:C}),M=(r=>{const{classes:a}=r;return(0,s.Z)({root:["root"],avatar:["avatar"]},p,a)})(k),N=n.Children.toArray(u).filter((r=>n.isValidElement(r))),A=x||N.length;A===$&&($+=1),$=Math.min(A+1,$);const R=Math.min(N.length,$-1),j=Math.max(A-$,A-R,0),B=S?S(j):`+${j}`,L=null!=(e=w.additionalAvatar)?e:v.additionalAvatar;return(0,b.jsxs)(Z,(0,o.Z)({as:f,ownerState:k,className:(0,i.Z)(M.root,m),ref:a},P,{children:[j?(0,b.jsx)(d.Z,(0,o.Z)({variant:C},L,{className:(0,i.Z)(M.avatar,null==L?void 0:L.className),children:B})):null,N.slice(0,R).reverse().map((r=>n.cloneElement(r,{className:(0,i.Z)(r.props.className,M.avatar),variant:r.props.variant||C})))]}))}))},62023:(r,a,e)=>{e.d(a,{Z:()=>b});var t=e(80102),o=e(83117),n=e(67294),i=e(63961),s=e(94780),l=e(90948),c=e(28628),u=e(1588),d=e(34867);function m(r){return(0,d.ZP)("MuiCardActions",r)}(0,u.Z)("MuiCardActions",["root","spacing"]);var f=e(85893);const p=["disableSpacing","className"],v=(0,l.ZP)("div",{name:"MuiCardActions",slot:"Root",overridesResolver:(r,a)=>{const{ownerState:e}=r;return[a.root,!e.disableSpacing&&a.spacing]}})((({ownerState:r})=>(0,o.Z)({display:"flex",alignItems:"center",padding:8},!r.disableSpacing&&{"& > :not(style) ~ :not(style)":{marginLeft:8}}))),b=n.forwardRef((function(r,a){const e=(0,c.i)({props:r,name:"MuiCardActions"}),{disableSpacing:n=!1,className:l}=e,u=(0,t.Z)(e,p),d=(0,o.Z)({},e,{disableSpacing:n}),b=(r=>{const{classes:a,disableSpacing:e}=r,t={root:["root",!e&&"spacing"]};return(0,s.Z)(t,m,a)})(d);return(0,f.jsx)(v,(0,o.Z)({className:(0,i.Z)(b.root,l),ownerState:d,ref:a},u))}))},81458:(r,a,e)=>{e.d(a,{Z:()=>L});var t=e(80102),o=e(83117),n=e(67294),i=e(63961),s=e(94780),l=e(70917),c=e(51025),u=e(11716),d=e(98216),m=e(90948),f=e(28628),p=e(1588),v=e(34867);function b(r){return(0,v.ZP)("MuiLinearProgress",r)}(0,p.Z)("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"]);var g=e(85893);const h=["className","color","value","valueBuffer","variant"];let Z,S,w,y,x,C,P=r=>r;const $=(0,l.F4)(Z||(Z=P`
  0% {
    left: -35%;
    right: 100%;
  }

  60% {
    left: 100%;
    right: -90%;
  }

  100% {
    left: 100%;
    right: -90%;
  }
`)),k=(0,l.F4)(S||(S=P`
  0% {
    left: -200%;
    right: 100%;
  }

  60% {
    left: 107%;
    right: -8%;
  }

  100% {
    left: 107%;
    right: -8%;
  }
`)),M=(0,l.F4)(w||(w=P`
  0% {
    opacity: 1;
    background-position: 0 -23px;
  }

  60% {
    opacity: 0;
    background-position: 0 -23px;
  }

  100% {
    opacity: 1;
    background-position: -200px -23px;
  }
`)),N=(r,a)=>"inherit"===a?"currentColor":r.vars?r.vars.palette.LinearProgress[`${a}Bg`]:"light"===r.palette.mode?(0,c.$n)(r.palette[a].main,.62):(0,c._j)(r.palette[a].main,.5),A=(0,m.ZP)("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver:(r,a)=>{const{ownerState:e}=r;return[a.root,a[`color${(0,d.Z)(e.color)}`],a[e.variant]]}})((({ownerState:r,theme:a})=>(0,o.Z)({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},backgroundColor:N(a,r.color)},"inherit"===r.color&&"buffer"!==r.variant&&{backgroundColor:"none","&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}},"buffer"===r.variant&&{backgroundColor:"transparent"},"query"===r.variant&&{transform:"rotate(180deg)"}))),R=(0,m.ZP)("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver:(r,a)=>{const{ownerState:e}=r;return[a.dashed,a[`dashedColor${(0,d.Z)(e.color)}`]]}})((({ownerState:r,theme:a})=>{const e=N(a,r.color);return(0,o.Z)({position:"absolute",marginTop:0,height:"100%",width:"100%"},"inherit"===r.color&&{opacity:.3},{backgroundImage:`radial-gradient(${e} 0%, ${e} 16%, transparent 42%)`,backgroundSize:"10px 10px",backgroundPosition:"0 -23px"})}),(0,l.iv)(y||(y=P`
    animation: ${0} 3s infinite linear;
  `),M)),j=(0,m.ZP)("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver:(r,a)=>{const{ownerState:e}=r;return[a.bar,a[`barColor${(0,d.Z)(e.color)}`],("indeterminate"===e.variant||"query"===e.variant)&&a.bar1Indeterminate,"determinate"===e.variant&&a.bar1Determinate,"buffer"===e.variant&&a.bar1Buffer]}})((({ownerState:r,theme:a})=>(0,o.Z)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",backgroundColor:"inherit"===r.color?"currentColor":(a.vars||a).palette[r.color].main},"determinate"===r.variant&&{transition:"transform .4s linear"},"buffer"===r.variant&&{zIndex:1,transition:"transform .4s linear"})),(({ownerState:r})=>("indeterminate"===r.variant||"query"===r.variant)&&(0,l.iv)(x||(x=P`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    `),$))),B=(0,m.ZP)("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver:(r,a)=>{const{ownerState:e}=r;return[a.bar,a[`barColor${(0,d.Z)(e.color)}`],("indeterminate"===e.variant||"query"===e.variant)&&a.bar2Indeterminate,"buffer"===e.variant&&a.bar2Buffer]}})((({ownerState:r,theme:a})=>(0,o.Z)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left"},"buffer"!==r.variant&&{backgroundColor:"inherit"===r.color?"currentColor":(a.vars||a).palette[r.color].main},"inherit"===r.color&&{opacity:.3},"buffer"===r.variant&&{backgroundColor:N(a,r.color),transition:"transform .4s linear"})),(({ownerState:r})=>("indeterminate"===r.variant||"query"===r.variant)&&(0,l.iv)(C||(C=P`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
    `),k))),L=n.forwardRef((function(r,a){const e=(0,f.i)({props:r,name:"MuiLinearProgress"}),{className:n,color:l="primary",value:c,valueBuffer:m,variant:p="indeterminate"}=e,v=(0,t.Z)(e,h),Z=(0,o.Z)({},e,{color:l,variant:p}),S=(r=>{const{classes:a,variant:e,color:t}=r,o={root:["root",`color${(0,d.Z)(t)}`,e],dashed:["dashed",`dashedColor${(0,d.Z)(t)}`],bar1:["bar",`barColor${(0,d.Z)(t)}`,("indeterminate"===e||"query"===e)&&"bar1Indeterminate","determinate"===e&&"bar1Determinate","buffer"===e&&"bar1Buffer"],bar2:["bar","buffer"!==e&&`barColor${(0,d.Z)(t)}`,"buffer"===e&&`color${(0,d.Z)(t)}`,("indeterminate"===e||"query"===e)&&"bar2Indeterminate","buffer"===e&&"bar2Buffer"]};return(0,s.Z)(o,b,a)})(Z),w=(0,u.V)(),y={},x={bar1:{},bar2:{}};if("determinate"===p||"buffer"===p)if(void 0!==c){y["aria-valuenow"]=Math.round(c),y["aria-valuemin"]=0,y["aria-valuemax"]=100;let r=c-100;w&&(r=-r),x.bar1.transform=`translateX(${r}%)`}else 0;if("buffer"===p)if(void 0!==m){let r=(m||0)-100;w&&(r=-r),x.bar2.transform=`translateX(${r}%)`}else 0;return(0,g.jsxs)(A,(0,o.Z)({className:(0,i.Z)(S.root,n),ownerState:Z,role:"progressbar"},y,{ref:a},v,{children:["buffer"===p?(0,g.jsx)(R,{className:S.dashed,ownerState:Z}):null,(0,g.jsx)(j,{className:S.bar1,ownerState:Z,style:x.bar1}),"determinate"===p?null:(0,g.jsx)(B,{className:S.bar2,ownerState:Z,style:x.bar2})]}))}))},59107:(r,a,e)=>{e.d(a,{Z:()=>p});var t=e(97582),o=e(85893),n=e(90948),i=e(51107),s=e(2734),l=e(87952),c=e(88078),u=e(29360);const d="SCAvatarGroupSkeleton",m={root:`${d}-root`},f=(0,n.ZP)(i.Z,{name:d,slot:"Root",overridesResolver:(r,a)=>a.root})((()=>({})));function p(r){const a=(0,u.Z)({props:r,name:d}),{skeletonsAnimation:e="wave",count:n=3}=a,i=(0,t._T)(a,["skeletonsAnimation","count"]),p=(0,s.Z)();return(0,o.jsx)(f,Object.assign({className:m.root},i,{children:[...Array(n)].map(((r,a)=>(0,o.jsx)(l.Z,{children:(0,o.jsx)(c.Z,{variant:"circular",width:p.selfcommunity.user.avatar.sizeSmall,height:p.selfcommunity.user.avatar.sizeSmall,animation:e})},a)))}))}}}]);