"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[20490],{87952:(e,t,r)=>{r.d(t,{Z:()=>_});var o=r(80102),n=r(83117),a=r(67294),s=r(63961),i=r(94780),l=r(90948),c=r(28628),d=r(88169),u=r(85893);const m=(0,d.Z)((0,u.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");var v=r(54801),p=r(80560);const h=["alt","children","className","component","slots","slotProps","imgProps","sizes","src","srcSet","variant"],f=(0,l.ZP)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[r.variant],r.colorDefault&&t.colorDefault]}})((({theme:e})=>({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none",variants:[{props:{variant:"rounded"},style:{borderRadius:(e.vars||e).shape.borderRadius}},{props:{variant:"square"},style:{borderRadius:0}},{props:{colorDefault:!0},style:(0,n.Z)({color:(e.vars||e).palette.background.default},e.vars?{backgroundColor:e.vars.palette.Avatar.defaultBg}:(0,n.Z)({backgroundColor:e.palette.grey[400]},e.applyStyles("dark",{backgroundColor:e.palette.grey[600]})))}]}))),g=(0,l.ZP)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(e,t)=>t.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),Z=(0,l.ZP)(m,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(e,t)=>t.fallback})({width:"75%",height:"75%"});const _=a.forwardRef((function(e,t){const r=(0,c.i)({props:e,name:"MuiAvatar"}),{alt:l,children:d,className:m,component:_="div",slots:S={},slotProps:y={},imgProps:x,sizes:w,src:C,srcSet:k,variant:b="circular"}=r,P=(0,o.Z)(r,h);let M=null;const R=function({crossOrigin:e,referrerPolicy:t,src:r,srcSet:o}){const[n,s]=a.useState(!1);return a.useEffect((()=>{if(!r&&!o)return;s(!1);let n=!0;const a=new Image;return a.onload=()=>{n&&s("loaded")},a.onerror=()=>{n&&s("error")},a.crossOrigin=e,a.referrerPolicy=t,a.src=r,o&&(a.srcset=o),()=>{n=!1}}),[e,t,r,o]),n}((0,n.Z)({},x,{src:C,srcSet:k})),N=C||k,$=N&&"error"!==R,E=(0,n.Z)({},r,{colorDefault:!$,component:_,variant:b}),z=(e=>{const{classes:t,variant:r,colorDefault:o}=e,n={root:["root",r,o&&"colorDefault"],img:["img"],fallback:["fallback"]};return(0,i.Z)(n,v.$,t)})(E),[j,T]=(0,p.Z)("img",{className:z.img,elementType:g,externalForwardedProps:{slots:S,slotProps:{img:(0,n.Z)({},x,y.img)}},additionalProps:{alt:l,src:C,srcSet:k,sizes:w},ownerState:E});return M=$?(0,u.jsx)(j,(0,n.Z)({},T)):d||0===d?d:N&&l?l[0]:(0,u.jsx)(Z,{ownerState:E,className:z.fallback}),(0,u.jsx)(f,(0,n.Z)({as:_,ownerState:E,className:(0,s.Z)(z.root,m),ref:t},P,{children:M}))}))},54801:(e,t,r)=>{r.d(t,{$:()=>a,Z:()=>s});var o=r(1588),n=r(34867);function a(e){return(0,n.ZP)("MuiAvatar",e)}const s=(0,o.Z)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"])},94253:(e,t,r)=>{r.d(t,{Z:()=>_});var o=r(83117),n=r(80102),a=r(67294),s=r(63961),i=r(74854),l=r(18784),c=r(87893),d=r(71713),u=r(85893);const m=["className","component"];var v=r(37078),p=r(75389),h=r(10606);const f=(0,r(1588).Z)("MuiBox",["root"]),g=(0,p.Z)(),Z=function(e={}){const{themeId:t,defaultTheme:r,defaultClassName:v="MuiBox-root",generateClassName:p}=e,h=(0,i.default)("div",{shouldForwardProp:e=>"theme"!==e&&"sx"!==e&&"as"!==e})(l.Z);return a.forwardRef((function(e,a){const i=(0,d.Z)(r),l=(0,c.Z)(e),{className:f,component:g="div"}=l,Z=(0,n.Z)(l,m);return(0,u.jsx)(h,(0,o.Z)({as:g,ref:a,className:(0,s.Z)(f,p?p(v):v),theme:t&&i[t]||i},Z))}))}({themeId:h.Z,defaultTheme:g,defaultClassName:f.root,generateClassName:v.Z.generate}),_=Z},44267:(e,t,r)=>{r.d(t,{Z:()=>f});var o=r(83117),n=r(80102),a=r(67294),s=r(63961),i=r(94780),l=r(90948),c=r(28628),d=r(1588),u=r(34867);function m(e){return(0,u.ZP)("MuiCardContent",e)}(0,d.Z)("MuiCardContent",["root"]);var v=r(85893);const p=["className","component"],h=(0,l.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({padding:16,"&:last-child":{paddingBottom:24}}))),f=a.forwardRef((function(e,t){const r=(0,c.i)({props:e,name:"MuiCardContent"}),{className:a,component:l="div"}=r,d=(0,n.Z)(r,p),u=(0,o.Z)({},r,{component:l}),f=(e=>{const{classes:t}=e;return(0,i.Z)({root:["root"]},m,t)})(u);return(0,v.jsx)(h,(0,o.Z)({as:l,className:(0,s.Z)(f.root,a),ownerState:u,ref:t},d))}))},83965:(e,t,r)=>{r.d(t,{Z:()=>Z});var o=r(80102),n=r(83117),a=r(67294),s=r(63961),i=r(94780),l=r(28628),c=r(90948),d=r(1588),u=r(34867);function m(e){return(0,u.ZP)("MuiCardMedia",e)}(0,d.Z)("MuiCardMedia",["root","media","img"]);var v=r(85893);const p=["children","className","component","image","src","style"],h=(0,c.ZP)("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e,{isMediaComponent:o,isImageComponent:n}=r;return[t.root,o&&t.media,n&&t.img]}})((({ownerState:e})=>(0,n.Z)({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},e.isMediaComponent&&{width:"100%"},e.isImageComponent&&{objectFit:"cover"}))),f=["video","audio","picture","iframe","img"],g=["picture","img"],Z=a.forwardRef((function(e,t){const r=(0,l.i)({props:e,name:"MuiCardMedia"}),{children:a,className:c,component:d="div",image:u,src:Z,style:_}=r,S=(0,o.Z)(r,p),y=-1!==f.indexOf(d),x=!y&&u?(0,n.Z)({backgroundImage:`url("${u}")`},_):_,w=(0,n.Z)({},r,{component:d,isMediaComponent:y,isImageComponent:-1!==g.indexOf(d)}),C=(e=>{const{classes:t,isMediaComponent:r,isImageComponent:o}=e,n={root:["root",r&&"media",o&&"img"]};return(0,i.Z)(n,m,t)})(w);return(0,v.jsx)(h,(0,n.Z)({className:(0,s.Z)(C.root,c),as:d,role:!y&&u?"img":void 0,ref:t,style:x,ownerState:w,src:y?u||Z:void 0},S,{children:a}))}))},98456:(e,t,r)=>{r.d(t,{Z:()=>M});var o=r(80102),n=r(83117),a=r(67294),s=r(63961),i=r(94780),l=r(70917),c=r(98216),d=r(28628),u=r(90948),m=r(1588),v=r(34867);function p(e){return(0,v.ZP)("MuiCircularProgress",e)}(0,m.Z)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);var h=r(85893);const f=["className","color","disableShrink","size","style","thickness","value","variant"];let g,Z,_,S,y=e=>e;const x=44,w=(0,l.F4)(g||(g=y`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),C=(0,l.F4)(Z||(Z=y`
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
`)),k=(0,u.ZP)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[r.variant],t[`color${(0,c.Z)(r.color)}`]]}})((({ownerState:e,theme:t})=>(0,n.Z)({display:"inline-block"},"determinate"===e.variant&&{transition:t.transitions.create("transform")},"inherit"!==e.color&&{color:(t.vars||t).palette[e.color].main})),(({ownerState:e})=>"indeterminate"===e.variant&&(0,l.iv)(_||(_=y`
      animation: ${0} 1.4s linear infinite;
    `),w))),b=(0,u.ZP)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(e,t)=>t.svg})({display:"block"}),P=(0,u.ZP)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.circle,t[`circle${(0,c.Z)(r.variant)}`],r.disableShrink&&t.circleDisableShrink]}})((({ownerState:e,theme:t})=>(0,n.Z)({stroke:"currentColor"},"determinate"===e.variant&&{transition:t.transitions.create("stroke-dashoffset")},"indeterminate"===e.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0})),(({ownerState:e})=>"indeterminate"===e.variant&&!e.disableShrink&&(0,l.iv)(S||(S=y`
      animation: ${0} 1.4s ease-in-out infinite;
    `),C))),M=a.forwardRef((function(e,t){const r=(0,d.i)({props:e,name:"MuiCircularProgress"}),{className:a,color:l="primary",disableShrink:u=!1,size:m=40,style:v,thickness:g=3.6,value:Z=0,variant:_="indeterminate"}=r,S=(0,o.Z)(r,f),y=(0,n.Z)({},r,{color:l,disableShrink:u,size:m,thickness:g,value:Z,variant:_}),w=(e=>{const{classes:t,variant:r,color:o,disableShrink:n}=e,a={root:["root",r,`color${(0,c.Z)(o)}`],svg:["svg"],circle:["circle",`circle${(0,c.Z)(r)}`,n&&"circleDisableShrink"]};return(0,i.Z)(a,p,t)})(y),C={},M={},R={};if("determinate"===_){const e=2*Math.PI*((x-g)/2);C.strokeDasharray=e.toFixed(3),R["aria-valuenow"]=Math.round(Z),C.strokeDashoffset=`${((100-Z)/100*e).toFixed(3)}px`,M.transform="rotate(-90deg)"}return(0,h.jsx)(k,(0,n.Z)({className:(0,s.Z)(w.root,a),style:(0,n.Z)({width:m,height:m},M,v),ownerState:y,ref:t,role:"progressbar"},R,S,{children:(0,h.jsx)(b,{className:w.svg,ownerState:y,viewBox:"22 22 44 44",children:(0,h.jsx)(P,{className:w.circle,style:C,ownerState:y,cx:x,cy:x,r:(x-g)/2,fill:"none",strokeWidth:g})})}))}))},16628:(e,t,r)=>{r.d(t,{Z:()=>v});var o=r(83117),n=r(80102),a=r(67294),s=r(98885),i=r(2734),l=r(30577),c=r(51705),d=r(85893);const u=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],m={entering:{opacity:1},entered:{opacity:1}},v=a.forwardRef((function(e,t){const r=(0,i.Z)(),v={enter:r.transitions.duration.enteringScreen,exit:r.transitions.duration.leavingScreen},{addEndListener:p,appear:h=!0,children:f,easing:g,in:Z,onEnter:_,onEntered:S,onEntering:y,onExit:x,onExited:w,onExiting:C,style:k,timeout:b=v,TransitionComponent:P=s.ZP}=e,M=(0,n.Z)(e,u),R=a.useRef(null),N=(0,c.Z)(R,f.ref,t),$=e=>t=>{if(e){const r=R.current;void 0===t?e(r):e(r,t)}},E=$(y),z=$(((e,t)=>{(0,l.n)(e);const o=(0,l.C)({style:k,timeout:b,easing:g},{mode:"enter"});e.style.webkitTransition=r.transitions.create("opacity",o),e.style.transition=r.transitions.create("opacity",o),_&&_(e,t)})),j=$(S),T=$(C),F=$((e=>{const t=(0,l.C)({style:k,timeout:b,easing:g},{mode:"exit"});e.style.webkitTransition=r.transitions.create("opacity",t),e.style.transition=r.transitions.create("opacity",t),x&&x(e)})),I=$(w);return(0,d.jsx)(P,(0,o.Z)({appear:h,in:Z,nodeRef:R,onEnter:z,onEntered:j,onEntering:E,onExit:F,onExited:I,onExiting:T,addEndListener:e=>{p&&p(R.current,e)},timeout:b},M,{children:(e,t)=>a.cloneElement(f,(0,o.Z)({style:(0,o.Z)({opacity:0,visibility:"exited"!==e||Z?void 0:"hidden"},m[e],k,f.props.style),ref:N},t))}))}))},59773:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r(67294).createContext({})},88169:(e,t,r)=>{r.d(t,{Z:()=>_});var o=r(83117),n=r(67294),a=r(80102),s=r(63961),i=r(94780),l=r(98216),c=r(28628),d=r(90948),u=r(1588),m=r(34867);function v(e){return(0,m.ZP)("MuiSvgIcon",e)}(0,u.Z)("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);var p=r(85893);const h=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],f=(0,d.ZP)("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,"inherit"!==r.color&&t[`color${(0,l.Z)(r.color)}`],t[`fontSize${(0,l.Z)(r.fontSize)}`]]}})((({theme:e,ownerState:t})=>{var r,o,n,a,s,i,l,c,d,u,m,v,p;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:t.hasSvgAsChild?void 0:"currentColor",flexShrink:0,transition:null==(r=e.transitions)||null==(o=r.create)?void 0:o.call(r,"fill",{duration:null==(n=e.transitions)||null==(n=n.duration)?void 0:n.shorter}),fontSize:{inherit:"inherit",small:(null==(a=e.typography)||null==(s=a.pxToRem)?void 0:s.call(a,20))||"1.25rem",medium:(null==(i=e.typography)||null==(l=i.pxToRem)?void 0:l.call(i,24))||"1.5rem",large:(null==(c=e.typography)||null==(d=c.pxToRem)?void 0:d.call(c,35))||"2.1875rem"}[t.fontSize],color:null!=(u=null==(m=(e.vars||e).palette)||null==(m=m[t.color])?void 0:m.main)?u:{action:null==(v=(e.vars||e).palette)||null==(v=v.action)?void 0:v.active,disabled:null==(p=(e.vars||e).palette)||null==(p=p.action)?void 0:p.disabled,inherit:void 0}[t.color]}})),g=n.forwardRef((function(e,t){const r=(0,c.i)({props:e,name:"MuiSvgIcon"}),{children:d,className:u,color:m="inherit",component:g="svg",fontSize:Z="medium",htmlColor:_,inheritViewBox:S=!1,titleAccess:y,viewBox:x="0 0 24 24"}=r,w=(0,a.Z)(r,h),C=n.isValidElement(d)&&"svg"===d.type,k=(0,o.Z)({},r,{color:m,component:g,fontSize:Z,instanceFontSize:e.fontSize,inheritViewBox:S,viewBox:x,hasSvgAsChild:C}),b={};S||(b.viewBox=x);const P=(e=>{const{color:t,fontSize:r,classes:o}=e,n={root:["root","inherit"!==t&&`color${(0,l.Z)(t)}`,`fontSize${(0,l.Z)(r)}`]};return(0,i.Z)(n,v,o)})(k);return(0,p.jsxs)(f,(0,o.Z)({as:g,className:(0,s.Z)(P.root,u),focusable:"false",color:_,"aria-hidden":!y||void 0,role:y?"img":void 0,ref:t},b,w,C&&d.props,{ownerState:k,children:[C?d.props.children:d,y?(0,p.jsx)("title",{children:y}):null]}))}));g.muiName="SvgIcon";const Z=g;function _(e,t){function r(r,n){return(0,p.jsx)(Z,(0,o.Z)({"data-testid":`${t}Icon`,ref:n},r,{children:e}))}return r.muiName=Z.muiName,n.memo(n.forwardRef(r))}},58974:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r(73546).Z},80560:(e,t,r)=>{r.d(t,{Z:()=>m});var o=r(83117),n=r(80102),a=r(33703),s=r(86542),i=r(65610),l=r(65220);const c=["className","elementType","ownerState","externalForwardedProps","getSlotOwnerState","internalForwardedProps"],d=["component","slots","slotProps"],u=["component"];function m(e,t){const{className:r,elementType:m,ownerState:v,externalForwardedProps:p,getSlotOwnerState:h,internalForwardedProps:f}=t,g=(0,n.Z)(t,c),{component:Z,slots:_={[e]:void 0},slotProps:S={[e]:void 0}}=p,y=(0,n.Z)(p,d),x=_[e]||m,w=(0,i.Z)(S[e],v),C=(0,l.Z)((0,o.Z)({className:r},g,{externalForwardedProps:"root"===e?y:void 0,externalSlotProps:w})),{props:{component:k},internalRef:b}=C,P=(0,n.Z)(C.props,u),M=(0,a.Z)(b,null==w?void 0:w.ref,t.ref),R=h?h(P):{},N=(0,o.Z)({},v,R),$="root"===e?k||Z:k,E=(0,s.Z)(x,(0,o.Z)({},"root"===e&&!Z&&!_[e]&&f,"root"!==e&&!_[e]&&f,P,$&&{as:$},{ref:M}),N);return Object.keys(R).forEach((e=>{delete E[e]})),[x,E]}},97265:(e,t,r)=>{r.d(t,{Z:()=>i});var o=r(97582),n=r(85893),a=r(67294),s=r(41538);const i=a.forwardRef(((e,t)=>{var{children:r}=e,i=(0,o._T)(e,["children"]);const l=(0,a.useContext)(s.WQ);if(l.routerLink){const e=l.routerLink;return(0,n.jsx)(e,Object.assign({},i,{ref:t},{children:r}))}const{to:c}=i,d=(0,o._T)(i,["to"]);return(0,n.jsx)("a",Object.assign({href:c},d,{ref:t},{children:r}))}))},69721:(e,t,r)=>{r.d(t,{$Y:()=>d,AL:()=>s,DC:()=>b,Em:()=>v,G8:()=>C,Gp:()=>E,I$:()=>M,L4:()=>p,Lf:()=>y,M7:()=>_,NX:()=>i,Nj:()=>R,Nm:()=>A,Ny:()=>l,Oi:()=>u,R4:()=>$,Rg:()=>g,Tb:()=>j,X5:()=>k,Z4:()=>S,ZV:()=>P,_j:()=>o,b0:()=>m,eg:()=>x,ht:()=>n,hu:()=>L,k5:()=>Z,mK:()=>w,oE:()=>F,ol:()=>z,t9:()=>f,u5:()=>c,wp:()=>I,wv:()=>N,xh:()=>W,zL:()=>D,zj:()=>T});const o=(e,t)=>`_fo_${t}_${e}`,n=e=>`_co_${e}`,a="_cos_",s=(e,t,r)=>`${a}${t}_${e}_${r}`,i=(e,t)=>`${a}${t}_${e}`,l=()=>"_cas_",c=e=>`_ca_${e}`,d=e=>`_evt_${e}`,u=()=>"_evts_",m=e=>`_grp_${e}`,v=()=>"_grps_",p=e=>`_inc_${e}`,h="_contr_",f=(e,t,r)=>`${h}${t}_${e}_${r}`,g=()=>"_bcms_",Z=(e,t)=>`_feed_${e}_${t}`,_=e=>`_feed_st_${e}`,S=e=>`_virtualized_scroll_st_${e}`,y=e=>`_feed_spos_${e}`,x=e=>`_adv_${e}`,w=()=>"_pmss_",C=e=>`_pms_${e}`,k="_cFolWidget_",b="_cSugWidget_",P="_cPopWidget_",M="_uFolWidget_",R="_uFoldWidget_",N="_uConWidget_",$="_uConReqWidget_",E="_uConReqSentWidget_",z="_fTrendWidget_",j="_rFeedWidget_",T="_pTrendWidget_",F="_pSugWidget_",I="_iListWidget_",W="_iSugWidget_",A="_pSugWidget_",D="_gSubWidget_",L=(e,t=void 0)=>`${e}${void 0!==t?t:""}`},63902:(e,t,r)=>{r.d(t,{Z:()=>v});var o=r(97582),n=r(85893),a=r(67294),s=r(90948),i=r(66242),l=r(94184),c=r.n(l);const d="SCWidget",u={root:`${d}-root`},m=(0,s.ZP)(i.Z,{name:d,slot:"Root",overridesResolver:(e,t)=>t.root})((({theme:e})=>({}))),v=(0,a.forwardRef)(((e,t)=>{const{className:r,onHeightChange:a,onStateChange:s}=e,i=(0,o._T)(e,["className","onHeightChange","onStateChange"]);return(0,n.jsx)(m,Object.assign({className:c()(u.root,r)},i,{ref:t}))}))},75459:(e,t,r)=>{r.d(t,{J:()=>o});const o="@selfcommunity/react-ui"},59219:(e,t,r)=>{r.d(t,{ZP:()=>n,n2:()=>o});var o;!function(e){e.CACHE_FIRST="Cache-first",e.NETWORK_ONLY="Network-only",e.STALE_WHILE_REVALIDATE="Stale-While-Revalidate"}(o||(o={}));const n=new class{constructor(e=1e4){this.values=new Map,this.maxEntries=e,this.ssr="undefined"==typeof window,this.ssr||(window.__viewSCCache=this.values)}get(e,t,r={noSsr:!0}){let o;return this.values.has(e)?(o=this.values.get(e),this.values.delete(e),this.values.set(e,o)):t&&(o=t,(!this.ssr||!r.noSsr)&&this.values.set(e,o)),o}set(e,t,r={noSsr:!0}){if(!this.ssr||!r.noSsr){if(this.values.size>=this.maxEntries){const e=this.values.keys().next().value;this.values.delete(e)}this.values.set(e,t)}}hasKey(e){return this.values.has(e)}delete(e){this.values.has(e)&&this.values.delete(e)}deleteKeys(e){e.forEach((e=>{this.values.has(e)&&this.values.delete(e)}))}deleteKeysWithPrefix(e){this.values.forEach(((t,r)=>{r.startsWith(e)&&this.values.delete(r)}))}clean(){this.values=new Map}evaluate(){console.log(this.values)}}},44012:(e,t,r)=>{r.d(t,{Z:()=>c});var o=r(25719),n=r(67294),a=r(86896),s=r(680);function i(e){var t=(0,a.Z)(),r=t.formatMessage,o=t.textComponent,s=void 0===o?n.Fragment:o,i=e.id,l=e.description,c=e.defaultMessage,d=e.values,u=e.children,m=e.tagName,v=void 0===m?s:m,p=r({id:i,description:l,defaultMessage:c},d,{ignoreTag:e.ignoreTag});return"function"==typeof u?u(Array.isArray(p)?p:[p]):v?n.createElement(v,null,n.Children.toArray(p)):n.createElement(n.Fragment,null,p)}i.displayName="FormattedMessage";var l=n.memo(i,(function(e,t){var r=e.values,n=(0,o._T)(e,["values"]),a=t.values,i=(0,o._T)(t,["values"]);return(0,s.wU)(a,r)&&(0,s.wU)(n,i)}));l.displayName="MemoizedFormattedMessage";const c=l}}]);