/*! For license information please see c1cec595.21f5ec93.js.LICENSE.txt */
(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[12351],{92991:(t,e,n)=>{"use strict";n.d(e,{Z:()=>p});var r=n(67294),o=n(27331),a=n(5730);function i(t,e){void 0===t&&(t=""),void 0===e&&(e={});const n=Object.keys(e).map((t=>encodeURIComponent(t)+"="+encodeURIComponent(e[t]))).join("&");return fetch(t,{method:"POST",headers:{accept:"application/json","content-type":"application/x-www-form-urlencoded"},body:n})}function s(){if((0,a.Z)()){const t={refresh_token:JSON.parse(window.localStorage.getItem("token")).refresh_token,client_id:o.r.user.client_id,grant_type:"refresh_token"};return i(`${o.r.portal}/oauth/token/`,t).then((t=>t.json())).then((t=>({accessToken:t.access_token,refreshToken:t.refresh_token,tokenType:t.token_type,expiresIn:t.expires_in}))).catch((t=>Promise.reject(t)))}}function c(){const t=(0,a.Z)(),[e,n]=(0,r.useState)(t?JSON.parse(window.localStorage.getItem("token")):"");return(0,r.useEffect)((()=>{t&&(!e||1e3*e.expiresIn<Date.now()?i(`${o.r.portal}/oauth/token/`,o.r.user).then((t=>t.json())).then((t=>({accessToken:t.access_token,refreshToken:t.refresh_token,tokenType:t.token_type,expiresIn:t.expires_in}))).catch((t=>t)).then((t=>{n(t)})):t&&n(JSON.parse(window.localStorage.getItem("token"))))}),[t]),(0,r.useEffect)((()=>{t&&window.localStorage.setItem("token",JSON.stringify(e))}),[t,e]),e}var u=n(53704),l=n(42464),h=n(19666),m=n(85893);function p(t){let{children:e}=t;const n=c(),r={portal:o.r.portal,locale:{default:"en"},session:{type:"OAuth",clientId:o.r.user.client_id,authToken:n,handleRefreshToken:s},theme:l.Z,handleAnonymousAction:()=>{alert("Anonymous action")}};return(0,m.jsx)(h.Z,{children:()=>(0,m.jsx)(u.ZP,{conf:r,children:e})})}},27331:(t,e,n)=>{"use strict";n.d(e,{r:()=>r});const r={user:{username:"beatrice",password:"Password!!Beatrice2021",client_id:"XJjPE54IBBjhibs0Rf0wZ969cZNPq6WjC02FrkaM",grant_type:"password"},portal:"https://api.fashionista.community"}},37549:(t,e,n)=>{"use strict";n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>s,metadata:()=>u,toc:()=>h});var r=n(85893),o=n(11151),a=n(92991),i=n(85202);const s={sidebar_label:"Footer",sidebar_position:1,title:"Footer"},c=void 0,u={id:"sdk/community-js/react-ui/Components/Footer",title:"Footer",description:"The Footer component renders the application footer, which contains the links to reach specific sections, and the application copyright.",source:"@site/docs/sdk/community-js/react-ui/Components/Footer.mdx",sourceDirName:"sdk/community-js/react-ui/Components",slug:"/sdk/community-js/react-ui/Components/Footer",permalink:"/docs/sdk/community-js/react-ui/Components/Footer",draft:!1,unlisted:!1,editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/sdk/community-js/react-ui/Components/Footer.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Footer",sidebar_position:1,title:"Footer"},sidebar:"sdkSidebar",previous:{title:"Feed Updates",permalink:"/docs/sdk/community-js/react-ui/Components/FeedUpdates"},next:{title:"Group",permalink:"/docs/sdk/community-js/react-ui/Components/Group"}},l={},h=[{value:"Usage",id:"usage",level:4}];function m(t){const e={blockquote:"blockquote",code:"code",h4:"h4",p:"p",pre:"pre",...(0,o.a)(),...t.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"The Footer component renders the application footer, which contains the links to reach specific sections, and the application copyright."}),"\n"]}),"\n","\n","\n",(0,r.jsx)(a.Z,{children:(0,r.jsx)(i.Z,{})}),"\n",(0,r.jsx)(e.h4,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-jsx",children:" import React from 'react';\n import {SCContextProvider} from '@selfcommunity/react-core';\n import {Footer} from '@selfcommunity/react-ui';\n\n function App() {\n   const conf = {\n     portal: '<community-path>',\n     session: {\n       type: 'OAuth',\n       token: '<community-token>',\n       refreshToken: '<community-refresh-token>',\n       refreshTokenEndpoint: '<community-refresh-endpoint>',\n     },\n   };\n   return (\n     <SCContextProvider conf={conf}><Footer /></SCContextProvider>\n   );\n }\n"})})]})}function p(t={}){const{wrapper:e}={...(0,o.a)(),...t.components};return e?(0,r.jsx)(e,{...t,children:(0,r.jsx)(m,{...t})}):m(t)}},5616:(t,e,n)=>{"use strict";n.d(e,{Z:()=>b});var r=n(83117),o=n(80102),a=n(67294),i=n(70828),s=n(6352),c=n(86523),u=n(39707),l=n(96682),h=n(85893);const m=["className","component"];var p=n(31983),d=n(75389),f=n(10606);const g=(0,n(1977).Z)("MuiBox",["root"]),v=(0,d.Z)(),y=function(t={}){const{themeId:e,defaultTheme:n,defaultClassName:p="MuiBox-root",generateClassName:d}=t,f=(0,s.default)("div",{shouldForwardProp:t=>"theme"!==t&&"sx"!==t&&"as"!==t})(c.Z);return a.forwardRef((function(t,a){const s=(0,l.Z)(n),c=(0,u.Z)(t),{className:g,component:v="div"}=c,y=(0,o.Z)(c,m);return(0,h.jsx)(f,(0,r.Z)({as:v,ref:a,className:(0,i.Z)(g,d?d(p):p),theme:e&&s[e]||s},y))}))}({themeId:f.Z,defaultTheme:v,defaultClassName:g.root,generateClassName:p.Z.generate}),b=y},88078:(t,e,n)=>{"use strict";n.d(e,{Z:()=>M});var r=n(80102),o=n(83117),a=n(67294),i=n(63961),s=n(70917),c=n(58510);function u(t){return String(t).match(/[\d.\-+]*\s*(.*)/)[1]||""}function l(t){return parseFloat(t)}var h=n(41796),m=n(90948),p=n(71657),d=n(1977),f=n(8027);function g(t){return(0,f.ZP)("MuiSkeleton",t)}(0,d.Z)("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);var v=n(85893);const y=["animation","className","component","height","style","variant","width"];let b,k,Z,w,C=t=>t;const x=(0,s.F4)(b||(b=C`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),j=(0,s.F4)(k||(k=C`
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
`)),S=(0,m.ZP)("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,e[n.variant],!1!==n.animation&&e[n.animation],n.hasChildren&&e.withChildren,n.hasChildren&&!n.width&&e.fitContent,n.hasChildren&&!n.height&&e.heightAuto]}})((({theme:t,ownerState:e})=>{const n=u(t.shape.borderRadius)||"px",r=l(t.shape.borderRadius);return(0,o.Z)({display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:(0,h.Fq)(t.palette.text.primary,"light"===t.palette.mode?.11:.13),height:"1.2em"},"text"===e.variant&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${r}${n}/${Math.round(r/.6*10)/10}${n}`,"&:empty:before":{content:'"\\00a0"'}},"circular"===e.variant&&{borderRadius:"50%"},"rounded"===e.variant&&{borderRadius:(t.vars||t).shape.borderRadius},e.hasChildren&&{"& > *":{visibility:"hidden"}},e.hasChildren&&!e.width&&{maxWidth:"fit-content"},e.hasChildren&&!e.height&&{height:"auto"})}),(({ownerState:t})=>"pulse"===t.animation&&(0,s.iv)(Z||(Z=C`
      animation: ${0} 2s ease-in-out 0.5s infinite;
    `),x)),(({ownerState:t,theme:e})=>"wave"===t.animation&&(0,s.iv)(w||(w=C`
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
    `),j,(e.vars||e).palette.action.hover))),M=a.forwardRef((function(t,e){const n=(0,p.Z)({props:t,name:"MuiSkeleton"}),{animation:a="pulse",className:s,component:u="span",height:l,style:h,variant:m="text",width:d}=n,f=(0,r.Z)(n,y),b=(0,o.Z)({},n,{animation:a,component:u,variant:m,hasChildren:Boolean(f.children)}),k=(t=>{const{classes:e,variant:n,animation:r,hasChildren:o,width:a,height:i}=t,s={root:["root",n,r,o&&"withChildren",o&&!a&&"fitContent",o&&!i&&"heightAuto"]};return(0,c.Z)(s,g,e)})(b);return(0,v.jsx)(S,(0,o.Z)({as:u,ref:e,className:(0,i.Z)(k.root,s),ownerState:b},f,{style:(0,o.Z)({width:d,height:l},h)}))}))},15861:(t,e,n)=>{"use strict";n.d(e,{Z:()=>k});var r=n(80102),o=n(83117),a=n(67294),i=n(63961),s=n(39707),c=n(58510),u=n(90948),l=n(71657),h=n(98216),m=n(1977),p=n(8027);function d(t){return(0,p.ZP)("MuiTypography",t)}(0,m.Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var f=n(85893);const g=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],v=(0,u.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,n.variant&&e[n.variant],"inherit"!==n.align&&e[`align${(0,h.Z)(n.align)}`],n.noWrap&&e.noWrap,n.gutterBottom&&e.gutterBottom,n.paragraph&&e.paragraph]}})((({theme:t,ownerState:e})=>(0,o.Z)({margin:0},"inherit"===e.variant&&{font:"inherit"},"inherit"!==e.variant&&t.typography[e.variant],"inherit"!==e.align&&{textAlign:e.align},e.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},e.gutterBottom&&{marginBottom:"0.35em"},e.paragraph&&{marginBottom:16}))),y={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},b={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},k=a.forwardRef((function(t,e){const n=(0,l.Z)({props:t,name:"MuiTypography"}),a=(t=>b[t]||t)(n.color),u=(0,s.Z)((0,o.Z)({},n,{color:a})),{align:m="inherit",className:p,component:k,gutterBottom:Z=!1,noWrap:w=!1,paragraph:C=!1,variant:x="body1",variantMapping:j=y}=u,S=(0,r.Z)(u,g),M=(0,o.Z)({},u,{align:m,color:a,className:p,component:k,gutterBottom:Z,noWrap:w,paragraph:C,variant:x,variantMapping:j}),N=k||(C?"p":j[x]||y[x])||"span",_=(t=>{const{align:e,gutterBottom:n,noWrap:r,paragraph:o,variant:a,classes:i}=t,s={root:["root",a,"inherit"!==t.align&&`align${(0,h.Z)(e)}`,n&&"gutterBottom",r&&"noWrap",o&&"paragraph"]};return(0,c.Z)(s,d,i)})(M);return(0,f.jsx)(v,(0,o.Z)({as:N,ref:e,ownerState:M,className:(0,i.Z)(_.root,p)},S))}))},97265:(t,e,n)=>{"use strict";n.d(e,{Z:()=>i});var r=n(97582),o=n(67294),a=n(41538);const i=o.forwardRef(((t,e)=>{var{children:n}=t,i=(0,r._T)(t,["children"]);const s=(0,o.useContext)(a.WQ);if(s.routerLink){const t=s.routerLink;return o.createElement(t,Object.assign({},i,{ref:e}),n)}const{to:c}=i,u=(0,r._T)(i,["to"]);return o.createElement("a",Object.assign({href:c},u,{ref:e}),n)}))},85202:(t,e,n)=>{"use strict";n.d(e,{Z:()=>A});var r=n(97582),o=n(67294),a=n(29628),i=n(90948),s=n(5616),c=n(25662),u=n(15861),l=n(94184),h=n.n(l),m=n(24085),p=n(91705),d=n(66821);class f{static getASpecificCustomMenu(t,e){return(0,p.N)(Object.assign(Object.assign({},e),{url:m.Z.CustomMenu.url({id:t}),method:m.Z.CustomMenu.method}))}static getAllCustomMenus(t,e){const n=(0,d.B)(t);return(0,p.N)(Object.assign(Object.assign({},e),{url:`${m.Z.GetCustomMenus.url({})}?${n.toString()}`,method:m.Z.GetCustomMenus.method}))}static getBaseCustomMenu(t){return(0,p.N)(Object.assign(Object.assign({},t),{url:m.Z.CustomMenu.url({id:"base"}),method:m.Z.CustomMenu.method}))}static searchCustomMenus(t,e){const n=(0,d.B)(t);return(0,p.N)(Object.assign(Object.assign({},e),{url:`${m.Z.CustomMenuSearch.url({})}?${n.toString()}`,method:m.Z.CustomMenuSearch.method}))}}class g{static getASpecificCustomMenu(t,e){return(0,r.mG)(this,void 0,void 0,(function*(){return f.getASpecificCustomMenu(t,e)}))}static getAllCustomMenus(t,e){return(0,r.mG)(this,void 0,void 0,(function*(){return f.getAllCustomMenus(t,e)}))}static getBaseCustomMenu(t){return(0,r.mG)(this,void 0,void 0,(function*(){return f.getBaseCustomMenu(t)}))}static searchCustomMenus(t,e){return(0,r.mG)(this,void 0,void 0,(function*(){return f.searchCustomMenus(t,e)}))}}var v=n(99960),y=n(49145),b=n(66380),k=n(85472),Z=n(97265),w=n(75459),C=n(88078);const x="SCFooter",j={root:`${x}-skeleton-root`},S=(0,i.ZP)(s.Z,{name:x,slot:"SkeletonRoot"})((()=>({})));function M(t){return o.createElement(S,Object.assign({className:j.root},t),o.createElement(C.Z,{animation:"wave",height:10,style:{marginBottom:10}}),o.createElement(C.Z,{animation:"wave",height:10,width:"60%"}))}const N={root:`${x}-root`,itemList:`${x}-item-list`,item:`${x}-item`,copyright:`${x}-copyright`},_=(0,i.ZP)(s.Z,{name:x,slot:"Root"})((({theme:t})=>({})));const A=function(t){const e=(0,a.Z)({props:t,name:x}),{className:n,menu:i=null,startActions:l=null,endActions:m=null}=e,p=(0,r._T)(e,["className","menu","startActions","endActions"]),d=(0,b.ko)(),f=(0,o.useMemo)((()=>d.preferences&&k.J9 in d.preferences?d.preferences[k.J9].value.replace("$year",(new Date).getFullYear()):null),[d.preferences]),[C,j]=(0,o.useState)(i),[S,A]=(0,o.useState)(!i);function F(){A(!0),g.getBaseCustomMenu().then((t=>{j(t)})).catch((t=>{v.Y.error(w.J,t)})).then((()=>A(!1)))}return(0,o.useEffect)((()=>{C||F()}),[]),S?o.createElement(M,null):o.createElement(_,Object.assign({},p,{className:h()(N.root,n)}),l,o.createElement(s.Z,{className:N.itemList},(0,y.p9)(C.items,"order").map(((t,e)=>o.createElement(c.Z,{component:Z.Z,key:t.id,className:N.item,to:t.url,variant:"text"},t.label)))),m,o.createElement(u.Z,{textAlign:"center",className:N.copyright,variant:"body2",dangerouslySetInnerHTML:{__html:f}}))}},75459:(t,e,n)=>{"use strict";n.d(e,{J:()=>r});const r="@selfcommunity/react-ui"},49145:(t,e,n)=>{"use strict";n.d(e,{p9:()=>o,vM:()=>r});const r=(t,e)=>t.reduce((function(t,n){let r="function"==typeof e?e(n):n[e];return t.hasOwnProperty(r)||(t[r]=[]),t[r].push(n),t}),{}),o=(t,e,n=!0)=>{if(!Array.isArray(t))return t;const r=n?(t,n)=>t[e]-n[e]:(t,n)=>n[e]-t[e];return t.sort(r)}},94184:(t,e)=>{var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var t=[],e=0;e<arguments.length;e++){var n=arguments[e];if(n){var a=typeof n;if("string"===a||"number"===a)t.push(n);else if(Array.isArray(n)){if(n.length){var i=o.apply(null,n);i&&t.push(i)}}else if("object"===a){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){t.push(n.toString());continue}for(var s in n)r.call(n,s)&&n[s]&&t.push(s)}}}return t.join(" ")}t.exports?(o.default=o,t.exports=o):void 0===(n=function(){return o}.apply(e,[]))||(t.exports=n)}()},70828:(t,e,n)=>{"use strict";function r(t){var e,n,o="";if("string"==typeof t||"number"==typeof t)o+=t;else if("object"==typeof t)if(Array.isArray(t)){var a=t.length;for(e=0;e<a;e++)t[e]&&(n=r(t[e]))&&(o&&(o+=" "),o+=n)}else for(n in t)t[n]&&(o&&(o+=" "),o+=n);return o}n.d(e,{Z:()=>o});const o=function(){for(var t,e,n=0,o="",a=arguments.length;n<a;n++)(t=arguments[n])&&(e=r(t))&&(o&&(o+=" "),o+=e);return o}}}]);