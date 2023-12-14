/*! For license information please see c1cec595.ce22a8dd.js.LICENSE.txt */
(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[12351],{92991:(t,e,n)=>{"use strict";n.d(e,{Z:()=>p});var o=n(67294),r=n(27331),a=n(5730);function i(t,e){void 0===t&&(t=""),void 0===e&&(e={});const n=Object.keys(e).map((t=>encodeURIComponent(t)+"="+encodeURIComponent(e[t]))).join("&");return fetch(t,{method:"POST",headers:{accept:"application/json","content-type":"application/x-www-form-urlencoded"},body:n})}function s(){if((0,a.Z)()){const t={refresh_token:JSON.parse(window.localStorage.getItem("token")).refresh_token,client_id:r.r.user.client_id,grant_type:"refresh_token"};return i(`${r.r.portal}/oauth/token/`,t).then((t=>t.json())).then((t=>({accessToken:t.access_token,refreshToken:t.refresh_token,tokenType:t.token_type,expiresIn:t.expires_in}))).catch((t=>Promise.reject(t)))}}function c(){const t=(0,a.Z)(),[e,n]=(0,o.useState)(t?JSON.parse(window.localStorage.getItem("token")):"");return(0,o.useEffect)((()=>{t&&(!e||1e3*e.expiresIn<Date.now()?i(`${r.r.portal}/oauth/token/`,r.r.user).then((t=>t.json())).then((t=>({accessToken:t.access_token,refreshToken:t.refresh_token,tokenType:t.token_type,expiresIn:t.expires_in}))).catch((t=>t)).then((t=>{n(t)})):t&&n(JSON.parse(window.localStorage.getItem("token"))))}),[t]),(0,o.useEffect)((()=>{t&&window.localStorage.setItem("token",JSON.stringify(e))}),[t,e]),e}var u=n(53704),l=n(21367),h=n(19666),m=n(85893);function p(t){let{children:e}=t;const n=c(),o={portal:r.r.portal,locale:{default:"en"},session:{type:"OAuth",clientId:r.r.user.client_id,authToken:n,handleRefreshToken:s},theme:l.Z,handleAnonymousAction:()=>{alert("Anonymous action")}};return(0,m.jsx)(h.Z,{children:()=>(0,m.jsx)(u.ZP,{conf:o,children:e})})}},27331:(t,e,n)=>{"use strict";n.d(e,{r:()=>o});const o={user:{username:"beatrice",password:"Password!!Beatrice2021",client_id:"XJjPE54IBBjhibs0Rf0wZ969cZNPq6WjC02FrkaM",grant_type:"password"},portal:"https://api.fashionista.community"}},37549:(t,e,n)=>{"use strict";n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>s,metadata:()=>u,toc:()=>h});var o=n(85893),r=n(11151),a=n(92991),i=n(85202);const s={sidebar_label:"Footer",sidebar_position:1,title:"Footer"},c=void 0,u={id:"sdk/community-js/react-ui/Components/Footer",title:"Footer",description:"The Footer component renders the application footer, which contains the links to reach specific sections, and the application copyright.",source:"@site/docs/sdk/community-js/react-ui/Components/Footer.mdx",sourceDirName:"sdk/community-js/react-ui/Components",slug:"/sdk/community-js/react-ui/Components/Footer",permalink:"/docs/sdk/community-js/react-ui/Components/Footer",draft:!1,unlisted:!1,editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/sdk/community-js/react-ui/Components/Footer.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Footer",sidebar_position:1,title:"Footer"},sidebar:"sdkSidebar",previous:{title:"Feed Updates",permalink:"/docs/sdk/community-js/react-ui/Components/FeedUpdates"},next:{title:"Incubator Suggestion",permalink:"/docs/sdk/community-js/react-ui/Components/IncubatorSuggestion"}},l={},h=[{value:"Usage",id:"usage",level:4}];function m(t){const e={blockquote:"blockquote",code:"code",h4:"h4",p:"p",pre:"pre",...(0,r.a)(),...t.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(e.blockquote,{children:["\n",(0,o.jsx)(e.p,{children:"The Footer component renders the application footer, which contains the links to reach specific sections, and the application copyright."}),"\n"]}),"\n","\n","\n",(0,o.jsx)(a.Z,{children:(0,o.jsx)(i.Z,{})}),"\n",(0,o.jsx)(e.h4,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-jsx",children:" import React from 'react';\n import {SCContextProvider} from '@selfcommunity/react-core';\n import {Footer} from '@selfcommunity/react-ui';\n\n function App() {\n   const conf = {\n     portal: '<community-path>',\n     session: {\n       type: 'OAuth',\n       token: '<community-token>',\n       refreshToken: '<community-refresh-token>',\n       refreshTokenEndpoint: '<community-refresh-endpoint>',\n     },\n   };\n   return (\n     <SCContextProvider conf={conf}><Footer /></SCContextProvider>\n   );\n }\n"})})]})}function p(t={}){const{wrapper:e}={...(0,r.a)(),...t.components};return e?(0,o.jsx)(e,{...t,children:(0,o.jsx)(m,{...t})}):m(t)}},5616:(t,e,n)=>{"use strict";n.d(e,{Z:()=>Z});var o=n(83117),r=n(80102),a=n(67294),i=n(70828),s=n(49731),c=n(86523),u=n(39707),l=n(96682),h=n(85893);const m=["className","component"];var p=n(37078),d=n(68239),g=n(10606);const f=(0,n(1588).Z)("MuiBox",["root"]),v=(0,d.Z)(),y=function(t={}){const{themeId:e,defaultTheme:n,defaultClassName:p="MuiBox-root",generateClassName:d}=t,g=(0,s.ZP)("div",{shouldForwardProp:t=>"theme"!==t&&"sx"!==t&&"as"!==t})(c.Z);return a.forwardRef((function(t,a){const s=(0,l.Z)(n),c=(0,u.Z)(t),{className:f,component:v="div"}=c,y=(0,r.Z)(c,m);return(0,h.jsx)(g,(0,o.Z)({as:v,ref:a,className:(0,i.Z)(f,d?d(p):p),theme:e&&s[e]||s},y))}))}({themeId:g.Z,defaultTheme:v,defaultClassName:f.root,generateClassName:p.Z.generate}),Z=y},88078:(t,e,n)=>{"use strict";n.d(e,{Z:()=>M});var o=n(80102),r=n(83117),a=n(67294),i=n(63961),s=n(70917),c=n(94780);function u(t){return String(t).match(/[\d.\-+]*\s*(.*)/)[1]||""}function l(t){return parseFloat(t)}var h=n(41796),m=n(90948),p=n(71657),d=n(1588),g=n(34867);function f(t){return(0,g.Z)("MuiSkeleton",t)}(0,d.Z)("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);var v=n(85893);const y=["animation","className","component","height","style","variant","width"];let Z,b,k,C,w=t=>t;const x=(0,s.F4)(Z||(Z=w`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),j=(0,s.F4)(b||(b=w`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`)),S=(0,m.ZP)("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,e[n.variant],!1!==n.animation&&e[n.animation],n.hasChildren&&e.withChildren,n.hasChildren&&!n.width&&e.fitContent,n.hasChildren&&!n.height&&e.heightAuto]}})((({theme:t,ownerState:e})=>{const n=u(t.shape.borderRadius)||"px",o=l(t.shape.borderRadius);return(0,r.Z)({display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:(0,h.Fq)(t.palette.text.primary,"light"===t.palette.mode?.11:.13),height:"1.2em"},"text"===e.variant&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${o}${n}/${Math.round(o/.6*10)/10}${n}`,"&:empty:before":{content:'"\\00a0"'}},"circular"===e.variant&&{borderRadius:"50%"},"rounded"===e.variant&&{borderRadius:(t.vars||t).shape.borderRadius},e.hasChildren&&{"& > *":{visibility:"hidden"}},e.hasChildren&&!e.width&&{maxWidth:"fit-content"},e.hasChildren&&!e.height&&{height:"auto"})}),(({ownerState:t})=>"pulse"===t.animation&&(0,s.iv)(k||(k=w`
      animation: ${0} 2s ease-in-out 0.5s infinite;
    `),x)),(({ownerState:t,theme:e})=>"wave"===t.animation&&(0,s.iv)(C||(C=w`
      position: relative;
      overflow: hidden;

      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
      -webkit-mask-image: -webkit-radial-gradient(white, black);

      &::after {
        animation: ${0} 2s linear 0.5s infinite;
        background: linear-gradient(
          90deg,
          transparent,
          ${0},
          transparent
        );
        content: '';
        position: absolute;
        transform: translateX(-100%); /* Avoid flash during server-side hydration */
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
      }
    `),j,(e.vars||e).palette.action.hover))),M=a.forwardRef((function(t,e){const n=(0,p.Z)({props:t,name:"MuiSkeleton"}),{animation:a="pulse",className:s,component:u="span",height:l,style:h,variant:m="text",width:d}=n,g=(0,o.Z)(n,y),Z=(0,r.Z)({},n,{animation:a,component:u,variant:m,hasChildren:Boolean(g.children)}),b=(t=>{const{classes:e,variant:n,animation:o,hasChildren:r,width:a,height:i}=t,s={root:["root",n,o,r&&"withChildren",r&&!a&&"fitContent",r&&!i&&"heightAuto"]};return(0,c.Z)(s,f,e)})(Z);return(0,v.jsx)(S,(0,r.Z)({as:u,ref:e,className:(0,i.Z)(b.root,s),ownerState:Z},g,{style:(0,r.Z)({width:d,height:l},h)}))}))},15861:(t,e,n)=>{"use strict";n.d(e,{Z:()=>b});var o=n(80102),r=n(83117),a=n(67294),i=n(63961),s=n(39707),c=n(94780),u=n(90948),l=n(71657),h=n(98216),m=n(1588),p=n(34867);function d(t){return(0,p.Z)("MuiTypography",t)}(0,m.Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var g=n(85893);const f=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],v=(0,u.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,n.variant&&e[n.variant],"inherit"!==n.align&&e[`align${(0,h.Z)(n.align)}`],n.noWrap&&e.noWrap,n.gutterBottom&&e.gutterBottom,n.paragraph&&e.paragraph]}})((({theme:t,ownerState:e})=>(0,r.Z)({margin:0},"inherit"===e.variant&&{font:"inherit"},"inherit"!==e.variant&&t.typography[e.variant],"inherit"!==e.align&&{textAlign:e.align},e.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},e.gutterBottom&&{marginBottom:"0.35em"},e.paragraph&&{marginBottom:16}))),y={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},Z={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},b=a.forwardRef((function(t,e){const n=(0,l.Z)({props:t,name:"MuiTypography"}),a=(t=>Z[t]||t)(n.color),u=(0,s.Z)((0,r.Z)({},n,{color:a})),{align:m="inherit",className:p,component:b,gutterBottom:k=!1,noWrap:C=!1,paragraph:w=!1,variant:x="body1",variantMapping:j=y}=u,S=(0,o.Z)(u,f),M=(0,r.Z)({},u,{align:m,color:a,className:p,component:b,gutterBottom:k,noWrap:C,paragraph:w,variant:x,variantMapping:j}),N=b||(w?"p":j[x]||y[x])||"span",_=(t=>{const{align:e,gutterBottom:n,noWrap:o,paragraph:r,variant:a,classes:i}=t,s={root:["root",a,"inherit"!==t.align&&`align${(0,h.Z)(e)}`,n&&"gutterBottom",o&&"noWrap",r&&"paragraph"]};return(0,c.Z)(s,d,i)})(M);return(0,g.jsx)(v,(0,r.Z)({as:N,ref:e,ownerState:M,className:(0,i.Z)(_.root,p)},S))}))},39707:(t,e,n)=>{"use strict";n.d(e,{Z:()=>u});var o=n(83117),r=n(80102),a=n(59766),i=n(44920);const s=["sx"],c=t=>{var e,n;const o={systemProps:{},otherProps:{}},r=null!=(e=null==t||null==(n=t.theme)?void 0:n.unstable_sxConfig)?e:i.Z;return Object.keys(t).forEach((e=>{r[e]?o.systemProps[e]=t[e]:o.otherProps[e]=t[e]})),o};function u(t){const{sx:e}=t,n=(0,r.Z)(t,s),{systemProps:i,otherProps:u}=c(n);let l;return l=Array.isArray(e)?[i,...e]:"function"==typeof e?(...t)=>{const n=e(...t);return(0,a.P)(n)?(0,o.Z)({},i,n):i}:(0,o.Z)({},i,e),(0,o.Z)({},u,{sx:l})}},97265:(t,e,n)=>{"use strict";n.d(e,{Z:()=>i});var o=n(97582),r=n(67294),a=n(41538);const i=r.forwardRef(((t,e)=>{var{children:n}=t,i=(0,o._T)(t,["children"]);const s=(0,r.useContext)(a.WQ);if(s.routerLink){const t=s.routerLink;return r.createElement(t,Object.assign({},i,{ref:e}),n)}const{to:c}=i,u=(0,o._T)(i,["to"]);return r.createElement("a",Object.assign({href:c},u,{ref:e}),n)}))},85202:(t,e,n)=>{"use strict";n.d(e,{Z:()=>_});var o=n(97582),r=n(67294),a=n(29628),i=n(90948),s=n(5616),c=n(69417),u=n(15861),l=n(94184),h=n.n(l),m=n(24085),p=n(91705),d=n(66821);class g{static getASpecificCustomMenu(t,e){return(0,p.N)(Object.assign(Object.assign({},e),{url:m.Z.CustomMenu.url({id:t}),method:m.Z.CustomMenu.method}))}static getAllCustomMenus(t,e){const n=(0,d.B)(t);return(0,p.N)(Object.assign(Object.assign({},e),{url:`${m.Z.GetCustomMenus.url({})}?${n.toString()}`,method:m.Z.GetCustomMenus.method}))}static getBaseCustomMenu(t){return(0,p.N)(Object.assign(Object.assign({},t),{url:m.Z.CustomMenu.url({id:"base"}),method:m.Z.CustomMenu.method}))}static searchCustomMenus(t,e){const n=(0,d.B)(t);return(0,p.N)(Object.assign(Object.assign({},e),{url:`${m.Z.CustomMenuSearch.url({})}?${n.toString()}`,method:m.Z.CustomMenuSearch.method}))}}class f{static getASpecificCustomMenu(t,e){return(0,o.mG)(this,void 0,void 0,(function*(){return g.getASpecificCustomMenu(t,e)}))}static getAllCustomMenus(t,e){return(0,o.mG)(this,void 0,void 0,(function*(){return g.getAllCustomMenus(t,e)}))}static getBaseCustomMenu(t){return(0,o.mG)(this,void 0,void 0,(function*(){return g.getBaseCustomMenu(t)}))}static searchCustomMenus(t,e){return(0,o.mG)(this,void 0,void 0,(function*(){return g.searchCustomMenus(t,e)}))}}var v=n(99960),y=n(66380),Z=n(85472),b=n(97265),k=n(75459),C=n(88078);const w="SCFooter",x={root:`${w}-skeleton-root`},j=(0,i.ZP)(s.Z,{name:w,slot:"SkeletonRoot"})((()=>({})));function S(t){return r.createElement(j,Object.assign({className:x.root},t),r.createElement(C.Z,{animation:"wave",height:10,style:{marginBottom:10}}),r.createElement(C.Z,{animation:"wave",height:10,width:"60%"}))}const M={root:`${w}-root`,itemList:`${w}-item-list`,item:`${w}-item`,copyright:`${w}-copyright`},N=(0,i.ZP)(s.Z,{name:w,slot:"Root"})((({theme:t})=>({})));const _=function(t){const e=(0,a.Z)({props:t,name:w}),{className:n,menu:i=null,startActions:l=null,endActions:m=null}=e,p=(0,o._T)(e,["className","menu","startActions","endActions"]),d=(0,y.ko)(),g=(0,r.useMemo)((()=>d.preferences&&Z.J9 in d.preferences?d.preferences[Z.J9].value.replace("$year",(new Date).getFullYear()):null),[d.preferences]),[C,x]=(0,r.useState)(i),[j,_]=(0,r.useState)(!i);function A(){_(!0),f.getBaseCustomMenu().then((t=>{x(t)})).catch((t=>{v.Y.error(k.J,t)})).then((()=>_(!1)))}return(0,r.useEffect)((()=>{C||A()}),[]),j?r.createElement(S,null):r.createElement(N,Object.assign({},p,{className:h()(M.root,n)}),l,r.createElement(s.Z,{className:M.itemList},C.items.map(((t,e)=>r.createElement(c.Z,{component:b.Z,key:t.id,className:M.item,to:t.url,variant:"text"},t.label)))),m,r.createElement(u.Z,{textAlign:"center",className:M.copyright,variant:"body2",dangerouslySetInnerHTML:{__html:g}}))}},75459:(t,e,n)=>{"use strict";n.d(e,{J:()=>o});const o="@selfcommunity/react-ui"},94184:(t,e)=>{var n;!function(){"use strict";var o={}.hasOwnProperty;function r(){for(var t=[],e=0;e<arguments.length;e++){var n=arguments[e];if(n){var a=typeof n;if("string"===a||"number"===a)t.push(n);else if(Array.isArray(n)){if(n.length){var i=r.apply(null,n);i&&t.push(i)}}else if("object"===a){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){t.push(n.toString());continue}for(var s in n)o.call(n,s)&&n[s]&&t.push(s)}}}return t.join(" ")}t.exports?(r.default=r,t.exports=r):void 0===(n=function(){return r}.apply(e,[]))||(t.exports=n)}()},70828:(t,e,n)=>{"use strict";function o(t){var e,n,r="";if("string"==typeof t||"number"==typeof t)r+=t;else if("object"==typeof t)if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=o(t[e]))&&(r&&(r+=" "),r+=n);else for(e in t)t[e]&&(r&&(r+=" "),r+=e);return r}n.d(e,{Z:()=>r});const r=function(){for(var t,e,n=0,r="";n<arguments.length;)(t=arguments[n++])&&(e=o(t))&&(r&&(r+=" "),r+=e);return r}}}]);