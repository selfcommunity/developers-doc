"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[32553],{92991:(e,t,o)=>{o.d(t,{Z:()=>p});var n=o(67294),s=o(27331),r=o(5730);function a(e,t){void 0===e&&(e=""),void 0===t&&(t={});const o=Object.keys(t).map((e=>encodeURIComponent(e)+"="+encodeURIComponent(t[e]))).join("&");return fetch(e,{method:"POST",headers:{accept:"application/json","content-type":"application/x-www-form-urlencoded"},body:o})}function i(){if((0,r.Z)()){const e={refresh_token:JSON.parse(window.localStorage.getItem("token")).refresh_token,client_id:s.r.user.client_id,grant_type:"refresh_token"};return a(`${s.r.portal}/oauth/token/`,e).then((e=>e.json())).then((e=>({accessToken:e.access_token,refreshToken:e.refresh_token,tokenType:e.token_type,expiresIn:e.expires_in}))).catch((e=>Promise.reject(e)))}}function c(){const e=(0,r.Z)(),[t,o]=(0,n.useState)(e?JSON.parse(window.localStorage.getItem("token")):"");return(0,n.useEffect)((()=>{e&&(!t||1e3*t.expiresIn<Date.now()?a(`${s.r.portal}/oauth/token/`,s.r.user).then((e=>e.json())).then((e=>({accessToken:e.access_token,refreshToken:e.refresh_token,tokenType:e.token_type,expiresIn:e.expires_in}))).catch((e=>e)).then((e=>{o(e)})):e&&o(JSON.parse(window.localStorage.getItem("token"))))}),[e]),(0,n.useEffect)((()=>{e&&window.localStorage.setItem("token",JSON.stringify(t))}),[e,t]),t}var l=o(53704),d=o(42464),m=o(19666),u=o(85893);function p(e){let{children:t}=e;const o=c(),n={portal:s.r.portal,locale:{default:"en"},session:{type:"OAuth",clientId:s.r.user.client_id,authToken:o,handleRefreshToken:i},theme:d.Z,handleAnonymousAction:()=>{alert("Anonymous action")}};return(0,u.jsx)(m.Z,{children:()=>(0,u.jsx)(l.ZP,{conf:n,children:t})})}},27331:(e,t,o)=>{o.d(t,{r:()=>n});const n={user:{username:"beatrice",password:"Password!!Beatrice2021",client_id:"XJjPE54IBBjhibs0Rf0wZ969cZNPq6WjC02FrkaM",grant_type:"password"},portal:"https://api.fashionista.community"}},3363:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var n=o(85893),s=o(11151),r=o(92991),a=o(30642);const i={sidebar_label:"Categories Suggestion Widget",sidebar_position:1,title:"Categories Suggestion Widget"},c=void 0,l={id:"sdk/community-js/react-ui/Components/CategoriesSuggestion",title:"Categories Suggestion Widget",description:"The Categories Suggestion Widget renders a list of suggested categories.",source:"@site/docs/sdk/community-js/react-ui/Components/CategoriesSuggestion.mdx",sourceDirName:"sdk/community-js/react-ui/Components",slug:"/sdk/community-js/react-ui/Components/CategoriesSuggestion",permalink:"/docs/sdk/community-js/react-ui/Components/CategoriesSuggestion",draft:!1,unlisted:!1,editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/sdk/community-js/react-ui/Components/CategoriesSuggestion.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Categories Suggestion Widget",sidebar_position:1,title:"Categories Suggestion Widget"},sidebar:"sdkSidebar",previous:{title:"Categories Popular Widget",permalink:"/docs/sdk/community-js/react-ui/Components/CategoriesPopular"},next:{title:"Category",permalink:"/docs/sdk/community-js/react-ui/Components/Category"}},d={},m=[{value:"Usage",id:"usage",level:4}];function u(e){const t={blockquote:"blockquote",code:"code",h4:"h4",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:["The Categories Suggestion Widget renders a list of suggested categories.",(0,n.jsx)("br",{}),"\nThis list is composed of items containing category's image, title, info and a follow button, that allows users to follow/unfollow a category.",(0,n.jsx)("br",{}),'\nThe categories are shown in an orderly manner: few items are shown in the main card while the others can be displayed in a modal card by clicking on the "show all" button.']}),"\n"]}),"\n","\n","\n",(0,n.jsx)(r.Z,{children:(0,n.jsx)(a.Z,{})}),"\n",(0,n.jsx)(t.h4,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-jsx",children:" import React from 'react';\n import {SCContextProvider} from '@selfcommunity/react-core';\n import {CategoriesSuggestionWidget} from '@selfcommunity/react-ui';\n\n function App() {\n   const conf = {\n     portal: '<community-path>',\n     session: {\n       type: 'OAuth',\n       token: '<community-token>',\n       refreshToken: '<community-refresh-token>',\n       refreshTokenEndpoint: '<community-refresh-endpoint>',\n     },\n   };\n   return (\n     <SCContextProvider conf={conf}><CategoriesSuggestionWidget /></SCContextProvider>\n   );\n }\n"})})]})}function p(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},44267:(e,t,o)=>{o.d(t,{Z:()=>f});var n=o(83117),s=o(80102),r=o(67294),a=o(63961),i=o(58510),c=o(90948),l=o(71657),d=o(1977),m=o(8027);function u(e){return(0,m.ZP)("MuiCardContent",e)}(0,d.Z)("MuiCardContent",["root"]);var p=o(85893);const g=["className","component"],h=(0,c.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({padding:16,"&:last-child":{paddingBottom:24}}))),f=r.forwardRef((function(e,t){const o=(0,l.Z)({props:e,name:"MuiCardContent"}),{className:r,component:c="div"}=o,d=(0,s.Z)(o,g),m=(0,n.Z)({},o,{component:c}),f=(e=>{const{classes:t}=e;return(0,i.Z)({root:["root"]},u,t)})(m);return(0,p.jsx)(h,(0,n.Z)({as:c,className:(0,a.Z)(f.root,r),ownerState:m,ref:t},d))}))},78462:(e,t,o)=>{o.d(t,{Z:()=>_});var n=o(80102),s=o(83117),r=o(67294),a=o(63961),i=o(58510),c=o(90948),l=o(71657),d=o(59773),m=o(1977),u=o(8027);function p(e){return(0,u.ZP)("MuiList",e)}(0,m.Z)("MuiList",["root","padding","dense","subheader"]);var g=o(85893);const h=["children","className","component","dense","disablePadding","subheader"],f=(0,c.ZP)("ul",{name:"MuiList",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,!o.disablePadding&&t.padding,o.dense&&t.dense,o.subheader&&t.subheader]}})((({ownerState:e})=>(0,s.Z)({listStyle:"none",margin:0,padding:0,position:"relative"},!e.disablePadding&&{paddingTop:8,paddingBottom:8},e.subheader&&{paddingTop:0}))),_=r.forwardRef((function(e,t){const o=(0,l.Z)({props:e,name:"MuiList"}),{children:c,className:m,component:u="ul",dense:_=!1,disablePadding:y=!1,subheader:v}=o,b=(0,n.Z)(o,h),Z=r.useMemo((()=>({dense:_})),[_]),C=(0,s.Z)({},o,{component:u,dense:_,disablePadding:y}),w=(e=>{const{classes:t,disablePadding:o,dense:n,subheader:s}=e,r={root:["root",!o&&"padding",n&&"dense",s&&"subheader"]};return(0,i.Z)(r,p,t)})(C);return(0,g.jsx)(d.Z.Provider,{value:Z,children:(0,g.jsxs)(f,(0,s.Z)({as:u,className:(0,a.Z)(w.root,m),ref:t,ownerState:C},b,{children:[v,c]}))})}))},97265:(e,t,o)=>{o.d(t,{Z:()=>a});var n=o(97582),s=o(67294),r=o(41538);const a=s.forwardRef(((e,t)=>{var{children:o}=e,a=(0,n._T)(e,["children"]);const i=(0,s.useContext)(r.WQ);if(i.routerLink){const e=i.routerLink;return s.createElement(e,Object.assign({},a,{ref:t}),o)}const{to:c}=a,l=(0,n._T)(a,["to"]);return s.createElement("a",Object.assign({href:c},l,{ref:t}),o)}))},69721:(e,t,o)=>{o.d(t,{AL:()=>a,DC:()=>k,Em:()=>m,G8:()=>C,Gp:()=>$,I$:()=>T,L4:()=>u,M7:()=>_,NX:()=>i,Nj:()=>S,Nm:()=>F,Ny:()=>c,R4:()=>j,Rg:()=>h,Tb:()=>E,X5:()=>w,Z4:()=>y,ZV:()=>N,_Z:()=>v,_j:()=>n,b0:()=>d,eg:()=>b,ht:()=>s,hu:()=>I,k5:()=>f,mK:()=>Z,oE:()=>R,ol:()=>x,t9:()=>g,u5:()=>l,wp:()=>O,wv:()=>P,xh:()=>D,zL:()=>L,zj:()=>W});const n=(e,t)=>`_fo_${t}_${e}`,s=e=>`_co_${e}`,r="_cos_",a=(e,t,o)=>`${r}${t}_${e}_${o}`,i=(e,t)=>`${r}${t}_${e}`,c=()=>"_cas_",l=e=>`_ca_${e}`,d=e=>`_grp_${e}`,m=()=>"_grps_",u=e=>`_inc_${e}`,p="_contr_",g=(e,t,o)=>`${p}${t}_${e}_${o}`,h=()=>"_bcms_",f=(e,t)=>`_feed_${e}_${t}`,_=e=>`_feed_st_${e}`,y=e=>`_virtualized_scroll_st_${e}`,v=e=>`_feed_spos_${e}`,b=e=>`_adv_${e}`,Z=()=>"_pmss_",C=e=>`_pms_${e}`,w="_cFolWidget_",k="_cSugWidget_",N="_cPopWidget_",T="_uFolWidget_",S="_uFoldWidget_",P="_uConWidget_",j="_uConReqWidget_",$="_uConReqSentWidget_",x="_fTrendWidget_",E="_rFeedWidget_",W="_pTrendWidget_",R="_pSugWidget_",O="_iListWidget_",D="_iSugWidget_",F="_pSugWidget_",L="_gSubWidget_",I=(e,t=void 0)=>`${e}${void 0!==t?t:""}`},75459:(e,t,o)=>{o.d(t,{J:()=>n});const n="@selfcommunity/react-ui"},39154:(e,t,o)=>{o.d(t,{Z:()=>Z});var n=o(97582),s=o(67294),r=o(90948),a=o(64666),i=o(31425),c=o(6514),l=o(61730),d=o(94184),m=o.n(d),u=o(2734),p=o(37645),g=o(93946),h=o(67564);const f="SCBaseDialog",_={root:`${f}-root`,titleRoot:`${f}-title-root`},y=(0,r.ZP)(p.Z,{name:f,slot:"Root",overridesResolver:(e,t)=>t.titleRoot})((({theme:e})=>({}))),v=({children:e=null,onClose:t=null})=>{const o=(0,u.Z)(),n=(0,l.Z)(o.breakpoints.down("md"),{noSsr:"undefined"!=typeof window});return s.createElement(y,{className:_.titleRoot},s.createElement("span",null,e),t?s.createElement(g.Z,{"aria-label":"close",onClick:t},s.createElement(h.Z,null,n?"arrow_back":"close")):null)},b=(0,r.ZP)(a.Z,{name:f,slot:"Root",overridesResolver:(e,t)=>t.root})((({theme:e})=>({})));const Z=function(e){const t=(0,u.Z)(),o=(0,l.Z)(t.breakpoints.down("md"),{noSsr:"undefined"!=typeof window}),r=o,{className:a="",title:d="",subtitle:p=null,DialogContentProps:g={dividers:!o},open:h=!1,onClose:f=null,actions:y=null,children:Z,maxWidth:C="sm",scroll:w="body"}=e,k=(0,n._T)(e,["className","title","subtitle","DialogContentProps","open","onClose","actions","children","maxWidth","scroll"]);return s.createElement(b,Object.assign({className:m()(_.root,a),fullScreen:r,fullWidth:!0,open:h,onClose:f,maxWidth:C,scroll:w},k),s.createElement(v,{onClose:f},d),p&&p,s.createElement(c.Z,Object.assign({},g),Z),y&&s.createElement(i.Z,null,y))}},115:(e,t,o)=>{o.d(t,{Z:()=>h});var n=o(97582),s=o(67294),r=o(90948),a=o(5616),i=o(15861),c=o(94184),l=o.n(c),d=o(63902),m=o(29628);const u="SCBaseItem",p={root:`${u}-root`,withActions:`${u}-with-actions`,content:`${u}-content`,image:`${u}-image`,text:`${u}-text`,primary:`${u}-primary`,secondary:`${u}-secondary`,actions:`${u}-actions`},g=(0,r.ZP)(d.Z,{name:u,slot:"Root",overridesResolver:(e,t)=>t.root})((({theme:e})=>({})));const h=function(e){const t=(0,m.Z)({props:e,name:u}),{id:o=null,className:r=null,image:c=null,disableTypography:d=!1,primary:h=null,primaryTypographyProps:f={component:"span",variant:"body1"},secondary:_=null,secondaryTypographyProps:y={component:"p",variant:"body2"},actions:v=null}=t,b=(0,n._T)(t,["id","className","image","disableTypography","primary","primaryTypographyProps","secondary","secondaryTypographyProps","actions"]);return s.createElement(g,Object.assign({id:o},b,{className:l()(p.root,r,{[p.withActions]:Boolean(v)})}),s.createElement(a.Z,{className:p.content},c&&s.createElement(a.Z,{className:p.image},c),s.createElement(a.Z,{className:p.text},h&&(d?h:s.createElement(i.Z,Object.assign({className:p.primary},f),h)),_&&(d?_:s.createElement(i.Z,Object.assign({className:p.secondary},y),_)))),v&&s.createElement(a.Z,{className:p.actions},v))}},75427:(e,t,o)=>{o.d(t,{Z:()=>f});var n=o(97582),s=o(67294),r=o(90948),a=o(49990),i=o(5616),c=o(15861),l=o(94184),d=o.n(l),m=o(63902),u=o(29628);const p="SCBaseItemButton",g={root:`${p}-root`,withActions:`${p}-with-actions`,content:`${p}-content`,image:`${p}-image`,text:`${p}-text`,primary:`${p}-primary`,secondary:`${p}-secondary`,actions:`${p}-actions`},h=(0,r.ZP)(m.Z,{name:p,slot:"Root",overridesResolver:(e,t)=>t.root})((({theme:e})=>({})));const f=function(e){const t=(0,u.Z)({props:e,name:p}),{id:o=null,className:r=null,ButtonBaseProps:l={},image:m=null,disableTypography:f=!1,primary:_=null,primaryTypographyProps:y={component:"span",variant:"body1"},secondary:v=null,secondaryTypographyProps:b={component:"p",variant:"body2"},actions:Z=null}=t,C=(0,n._T)(t,["id","className","ButtonBaseProps","image","disableTypography","primary","primaryTypographyProps","secondary","secondaryTypographyProps","actions"]);return s.createElement(h,Object.assign({id:o},C,{className:d()(g.root,r,{[g.withActions]:Boolean(Z)})}),s.createElement(a.Z,Object.assign({className:g.content},l),m&&s.createElement(i.Z,{className:g.image},m),s.createElement(i.Z,{className:g.text},_&&(f?_:s.createElement(c.Z,Object.assign({className:g.primary},y),_)),v&&(f?v:s.createElement(c.Z,Object.assign({className:g.secondary},b),v)))),Z&&s.createElement(i.Z,{className:g.actions},Z))}},54545:(e,t,o)=>{o.d(t,{Z:()=>r});var n=o(67294);const s=(0,o(90948).ZP)("div",{name:"SCHiddenPlaceholder",slot:"Root",overridesResolver:(e,t)=>[t.root]})((()=>({height:1,width:"100%",display:"none"})));function r(e){return n.createElement(s,Object.assign({},e))}},59219:(e,t,o)=>{o.d(t,{ZP:()=>s,n2:()=>n});var n;!function(e){e.CACHE_FIRST="Cache-first",e.NETWORK_ONLY="Network-only",e.STALE_WHILE_REVALIDATE="Stale-While-Revalidate"}(n||(n={}));const s=new class{constructor(e=1e4){this.values=new Map,this.maxEntries=e,this.ssr="undefined"==typeof window,this.ssr||(window.__viewSCCache=this.values)}get(e,t,o={noSsr:!0}){let n;return this.values.has(e)?(n=this.values.get(e),this.values.delete(e),this.values.set(e,n)):t&&(n=t,(!this.ssr||!o.noSsr)&&this.values.set(e,n)),n}set(e,t,o={noSsr:!0}){if(!this.ssr||!o.noSsr){if(this.values.size>=this.maxEntries){const e=this.values.keys().next().value;this.values.delete(e)}this.values.set(e,t)}}hasKey(e){return this.values.has(e)}delete(e){this.values.has(e)&&this.values.delete(e)}deleteKeys(e){e.forEach((e=>{this.values.has(e)&&this.values.delete(e)}))}deleteKeysWithPrefix(e){this.values.forEach(((t,o)=>{o.startsWith(e)&&this.values.delete(o)}))}clean(){this.values=new Map}evaluate(){console.log(this.values)}}},54490:(e,t,o)=>{o.d(t,{Ji:()=>u,qN:()=>p,vU:()=>m});var n,s,r=o(25719),a=o(67294),i=o(86896);!function(e){e.formatDate="FormattedDate",e.formatTime="FormattedTime",e.formatNumber="FormattedNumber",e.formatList="FormattedList",e.formatDisplayName="FormattedDisplayName"}(n||(n={})),function(e){e.formatDate="FormattedDateParts",e.formatTime="FormattedTimeParts",e.formatNumber="FormattedNumberParts",e.formatList="FormattedListParts"}(s||(s={}));var c=function(e){var t=(0,i.Z)(),o=e.value,n=e.children,s=(0,r._T)(e,["value","children"]);return n(t.formatNumberToParts(o,s))};c.displayName="FormattedNumberParts";function l(e){var t=function(t){var o=(0,i.Z)(),n=t.value,s=t.children,a=(0,r._T)(t,["value","children"]),c="string"==typeof n?new Date(n||0):n;return s("formatDate"===e?o.formatDateToParts(c,a):o.formatTimeToParts(c,a))};return t.displayName=s[e],t}function d(e){var t=function(t){var o=(0,i.Z)(),n=t.value,s=t.children,c=(0,r._T)(t,["value","children"]),l=o[e](n,c);if("function"==typeof s)return s(l);var d=o.textComponent||a.Fragment;return a.createElement(d,null,l)};return t.displayName=n[e],t}function m(e){return e}c.displayName="FormattedNumberParts";var u=d("formatDate"),p=d("formatTime");d("formatNumber"),d("formatList"),d("formatDisplayName"),l("formatDate"),l("formatTime")}}]);