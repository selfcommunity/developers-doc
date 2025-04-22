"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[88214],{25430:(r,a,e)=>{e.d(a,{A:()=>v});var t=e(85486),o=e(59703),n=e(96540),i=e(54533),s=e(75659),l=e(11848),c=e(25669),u=e(38413),d=e(31609);function m(r){return(0,d.Ay)("MuiCardActions",r)}(0,u.A)("MuiCardActions",["root","spacing"]);var f=e(74848);const p=["disableSpacing","className"],b=(0,l.Ay)("div",{name:"MuiCardActions",slot:"Root",overridesResolver:(r,a)=>{const{ownerState:e}=r;return[a.root,!e.disableSpacing&&a.spacing]}})((({ownerState:r})=>(0,o.A)({display:"flex",alignItems:"center",padding:8},!r.disableSpacing&&{"& > :not(style) ~ :not(style)":{marginLeft:8}}))),v=n.forwardRef((function(r,a){const e=(0,c.b)({props:r,name:"MuiCardActions"}),{disableSpacing:n=!1,className:l}=e,u=(0,t.A)(e,p),d=(0,o.A)({},e,{disableSpacing:n}),v=(r=>{const{classes:a,disableSpacing:e}=r,t={root:["root",!e&&"spacing"]};return(0,s.A)(t,m,a)})(d);return(0,f.jsx)(b,(0,o.A)({className:(0,i.A)(v.root,l),ownerState:d,ref:a},u))}))},25441:(r,a,e)=>{e.d(a,{A:()=>y});var t=e(85486),o=e(59703),n=e(96540),i=(e(20002),e(54533)),s=e(75659),l=e(11848),c=e(25669),u=e(33779),d=e(27365),m=e(38413),f=e(31609);function p(r){return(0,f.Ay)("MuiAvatarGroup",r)}const b=(0,m.A)("MuiAvatarGroup",["root","avatar"]);var v=e(74848);const A=["children","className","component","componentsProps","max","renderSurplus","slotProps","spacing","total","variant"],g={small:-16,medium:null},h=(0,l.Ay)("div",{name:"MuiAvatarGroup",slot:"Root",overridesResolver:(r,a)=>(0,o.A)({[`& .${b.avatar}`]:a.avatar},a.root)})((({theme:r,ownerState:a})=>{const e=a.spacing&&void 0!==g[a.spacing]?g[a.spacing]:-a.spacing;return{[`& .${u.A.root}`]:{border:`2px solid ${(r.vars||r).palette.background.default}`,boxSizing:"content-box",marginLeft:null!=e?e:-8,"&:last-child":{marginLeft:0}},display:"flex",flexDirection:"row-reverse"}})),y=n.forwardRef((function(r,a){var e;const l=(0,c.b)({props:r,name:"MuiAvatarGroup"}),{children:u,className:m,component:f="div",componentsProps:b={},max:g=5,renderSurplus:y,slotProps:S={},spacing:w="medium",total:x,variant:C="circular"}=l,$=(0,t.A)(l,A);let k=g<2?2:g;const M=(0,o.A)({},l,{max:g,spacing:w,component:f,variant:C}),N=(r=>{const{classes:a}=r;return(0,s.A)({root:["root"],avatar:["avatar"]},p,a)})(M),P=n.Children.toArray(u).filter((r=>n.isValidElement(r))),R=x||P.length;R===k&&(k+=1),k=Math.min(R+1,k);const j=Math.min(P.length,k-1),B=Math.max(R-k,R-j,0),I=y?y(B):`+${B}`,L=null!=(e=S.additionalAvatar)?e:b.additionalAvatar;return(0,v.jsxs)(h,(0,o.A)({as:f,ownerState:M,className:(0,i.A)(N.root,m),ref:a},$,{children:[B?(0,v.jsx)(d.A,(0,o.A)({variant:C},L,{className:(0,i.A)(N.avatar,null==L?void 0:L.className),children:I})):null,P.slice(0,j).reverse().map((r=>n.cloneElement(r,{className:(0,i.A)(r.props.className,N.avatar),variant:r.props.variant||C})))]}))}))},33623:(r,a,e)=>{e.d(a,{A:()=>L});var t=e(85486),o=e(59703),n=e(96540),i=e(54533),s=e(75659),l=e(17437),c=e(56950),u=e(51303),d=e(28466),m=e(11848),f=e(25669),p=e(38413),b=e(31609);function v(r){return(0,b.Ay)("MuiLinearProgress",r)}(0,p.A)("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"]);var A=e(74848);const g=["className","color","value","valueBuffer","variant"];let h,y,S,w,x,C,$=r=>r;const k=(0,l.i7)(h||(h=$`
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
`)),M=(0,l.i7)(y||(y=$`
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
`)),N=(0,l.i7)(S||(S=$`
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
`)),P=(r,a)=>"inherit"===a?"currentColor":r.vars?r.vars.palette.LinearProgress[`${a}Bg`]:"light"===r.palette.mode?(0,c.a)(r.palette[a].main,.62):(0,c.e$)(r.palette[a].main,.5),R=(0,m.Ay)("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver:(r,a)=>{const{ownerState:e}=r;return[a.root,a[`color${(0,d.A)(e.color)}`],a[e.variant]]}})((({ownerState:r,theme:a})=>(0,o.A)({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},backgroundColor:P(a,r.color)},"inherit"===r.color&&"buffer"!==r.variant&&{backgroundColor:"none","&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}},"buffer"===r.variant&&{backgroundColor:"transparent"},"query"===r.variant&&{transform:"rotate(180deg)"}))),j=(0,m.Ay)("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver:(r,a)=>{const{ownerState:e}=r;return[a.dashed,a[`dashedColor${(0,d.A)(e.color)}`]]}})((({ownerState:r,theme:a})=>{const e=P(a,r.color);return(0,o.A)({position:"absolute",marginTop:0,height:"100%",width:"100%"},"inherit"===r.color&&{opacity:.3},{backgroundImage:`radial-gradient(${e} 0%, ${e} 16%, transparent 42%)`,backgroundSize:"10px 10px",backgroundPosition:"0 -23px"})}),(0,l.AH)(w||(w=$`
    animation: ${0} 3s infinite linear;
  `),N)),B=(0,m.Ay)("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver:(r,a)=>{const{ownerState:e}=r;return[a.bar,a[`barColor${(0,d.A)(e.color)}`],("indeterminate"===e.variant||"query"===e.variant)&&a.bar1Indeterminate,"determinate"===e.variant&&a.bar1Determinate,"buffer"===e.variant&&a.bar1Buffer]}})((({ownerState:r,theme:a})=>(0,o.A)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",backgroundColor:"inherit"===r.color?"currentColor":(a.vars||a).palette[r.color].main},"determinate"===r.variant&&{transition:"transform .4s linear"},"buffer"===r.variant&&{zIndex:1,transition:"transform .4s linear"})),(({ownerState:r})=>("indeterminate"===r.variant||"query"===r.variant)&&(0,l.AH)(x||(x=$`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    `),k))),I=(0,m.Ay)("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver:(r,a)=>{const{ownerState:e}=r;return[a.bar,a[`barColor${(0,d.A)(e.color)}`],("indeterminate"===e.variant||"query"===e.variant)&&a.bar2Indeterminate,"buffer"===e.variant&&a.bar2Buffer]}})((({ownerState:r,theme:a})=>(0,o.A)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left"},"buffer"!==r.variant&&{backgroundColor:"inherit"===r.color?"currentColor":(a.vars||a).palette[r.color].main},"inherit"===r.color&&{opacity:.3},"buffer"===r.variant&&{backgroundColor:P(a,r.color),transition:"transform .4s linear"})),(({ownerState:r})=>("indeterminate"===r.variant||"query"===r.variant)&&(0,l.AH)(C||(C=$`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
    `),M))),L=n.forwardRef((function(r,a){const e=(0,f.b)({props:r,name:"MuiLinearProgress"}),{className:n,color:l="primary",value:c,valueBuffer:m,variant:p="indeterminate"}=e,b=(0,t.A)(e,g),h=(0,o.A)({},e,{color:l,variant:p}),y=(r=>{const{classes:a,variant:e,color:t}=r,o={root:["root",`color${(0,d.A)(t)}`,e],dashed:["dashed",`dashedColor${(0,d.A)(t)}`],bar1:["bar",`barColor${(0,d.A)(t)}`,("indeterminate"===e||"query"===e)&&"bar1Indeterminate","determinate"===e&&"bar1Determinate","buffer"===e&&"bar1Buffer"],bar2:["bar","buffer"!==e&&`barColor${(0,d.A)(t)}`,"buffer"===e&&`color${(0,d.A)(t)}`,("indeterminate"===e||"query"===e)&&"bar2Indeterminate","buffer"===e&&"bar2Buffer"]};return(0,s.A)(o,v,a)})(h),S=(0,u.I)(),w={},x={bar1:{},bar2:{}};if("determinate"===p||"buffer"===p)if(void 0!==c){w["aria-valuenow"]=Math.round(c),w["aria-valuemin"]=0,w["aria-valuemax"]=100;let r=c-100;S&&(r=-r),x.bar1.transform=`translateX(${r}%)`}else 0;if("buffer"===p)if(void 0!==m){let r=(m||0)-100;S&&(r=-r),x.bar2.transform=`translateX(${r}%)`}else 0;return(0,A.jsxs)(R,(0,o.A)({className:(0,i.A)(y.root,n),ownerState:h,role:"progressbar"},w,{ref:a},b,{children:["buffer"===p?(0,A.jsx)(j,{className:y.dashed,ownerState:h}):null,(0,A.jsx)(B,{className:y.bar1,ownerState:h,style:x.bar1}),"determinate"===p?null:(0,A.jsx)(I,{className:y.bar2,ownerState:h,style:x.bar2})]}))}))},43029:(r,a,e)=>{e.d(a,{A:()=>p});var t=e(31635),o=e(74848),n=e(11848),i=e(25441),s=e(44675),l=e(27365),c=e(73785),u=e(79197);const d="SCAvatarGroupSkeleton",m={root:`${d}-root`},f=(0,n.Ay)(i.A,{name:d,slot:"Root",overridesResolver:(r,a)=>a.root})((()=>({})));function p(r){const a=(0,u.A)({props:r,name:d}),{skeletonsAnimation:e="wave",count:n=3}=a,i=(0,t.__rest)(a,["skeletonsAnimation","count"]),p=(0,s.A)();return(0,o.jsx)(f,Object.assign({className:m.root},i,{children:[...Array(n)].map(((r,a)=>(0,o.jsx)(l.A,{children:(0,o.jsx)(c.A,{variant:"circular",width:p.selfcommunity.user.avatar.sizeSmall,height:p.selfcommunity.user.avatar.sizeSmall,animation:e})},a)))}))}}}]);