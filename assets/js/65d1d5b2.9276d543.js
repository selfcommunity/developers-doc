"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[32553],{92991:(e,t,o)=>{o.d(t,{Z:()=>m});var s=o(67294),n=o(27331),r=o(5730);function i(e,t){void 0===e&&(e=""),void 0===t&&(t={});const o=Object.keys(t).map((e=>encodeURIComponent(e)+"="+encodeURIComponent(t[e]))).join("&");return fetch(e,{method:"POST",headers:{accept:"application/json","content-type":"application/x-www-form-urlencoded"},body:o})}function a(){if((0,r.Z)()){const e={refresh_token:JSON.parse(window.localStorage.getItem("token")).refresh_token,client_id:n.r.user.client_id,grant_type:"refresh_token"};return i(`${n.r.portal}/oauth/token/`,e).then((e=>e.json())).then((e=>({accessToken:e.access_token,refreshToken:e.refresh_token,tokenType:e.token_type,expiresIn:e.expires_in}))).catch((e=>Promise.reject(e)))}}function l(){const e=(0,r.Z)(),[t,o]=(0,s.useState)(e?JSON.parse(window.localStorage.getItem("token")):"");return(0,s.useEffect)((()=>{e&&(!t||1e3*t.expiresIn<Date.now()?i(`${n.r.portal}/oauth/token/`,n.r.user).then((e=>e.json())).then((e=>({accessToken:e.access_token,refreshToken:e.refresh_token,tokenType:e.token_type,expiresIn:e.expires_in}))).catch((e=>e)).then((e=>{o(e)})):e&&o(JSON.parse(window.localStorage.getItem("token"))))}),[e]),(0,s.useEffect)((()=>{e&&window.localStorage.setItem("token",JSON.stringify(t))}),[e,t]),t}var c=o(62254),d=o(14744),u=o(19666),h=o(85893);function m(e){let{children:t}=e;const o=l(),s={portal:n.r.portal,locale:{default:"en"},session:{type:"OAuth",clientId:n.r.user.client_id,authToken:o,handleRefreshToken:a},theme:d.Z,handleAnonymousAction:()=>{alert("Anonymous action")}};return(0,h.jsx)(u.Z,{children:()=>(0,h.jsx)(c.ZP,{conf:s,children:t})})}},27331:(e,t,o)=>{o.d(t,{r:()=>s});const s={user:{username:"beatrice",password:"Password!!Beatrice2021",client_id:"XJjPE54IBBjhibs0Rf0wZ969cZNPq6WjC02FrkaM",grant_type:"password"},portal:"https://api.fashionista.community"}},3363:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var s=o(85893),n=o(11151),r=o(92991),i=o(30642);const a={sidebar_label:"Categories Suggestion Widget",sidebar_position:1,title:"Categories Suggestion Widget"},l=void 0,c={id:"sdk/community-js/react-ui/Components/CategoriesSuggestion",title:"Categories Suggestion Widget",description:"The Categories Suggestion Widget renders a list of suggested categories.",source:"@site/docs/sdk/community-js/react-ui/Components/CategoriesSuggestion.mdx",sourceDirName:"sdk/community-js/react-ui/Components",slug:"/sdk/community-js/react-ui/Components/CategoriesSuggestion",permalink:"/docs/sdk/community-js/react-ui/Components/CategoriesSuggestion",draft:!1,unlisted:!1,editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/sdk/community-js/react-ui/Components/CategoriesSuggestion.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Categories Suggestion Widget",sidebar_position:1,title:"Categories Suggestion Widget"},sidebar:"sdkSidebar",previous:{title:"Categories Popular Widget",permalink:"/docs/sdk/community-js/react-ui/Components/CategoriesPopular"},next:{title:"Category",permalink:"/docs/sdk/community-js/react-ui/Components/Category"}},d={},u=[{value:"Usage",id:"usage",level:4}];function h(e){const t={blockquote:"blockquote",code:"code",h4:"h4",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["The Categories Suggestion Widget renders a list of suggested categories.",(0,s.jsx)("br",{}),"\nThis list is composed of items containing category's image, title, info and a follow button, that allows users to follow/unfollow a category.",(0,s.jsx)("br",{}),'\nThe categories are shown in an orderly manner: few items are shown in the main card while the others can be displayed in a modal card by clicking on the "show all" button.']}),"\n"]}),"\n","\n","\n",(0,s.jsx)(r.Z,{children:(0,s.jsx)(i.Z,{})}),"\n",(0,s.jsx)(t.h4,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-jsx",children:" import React from 'react';\n import {SCContextProvider} from '@selfcommunity/react-core';\n import {CategoriesSuggestionWidget} from '@selfcommunity/react-ui';\n\n function App() {\n   const conf = {\n     portal: '<community-path>',\n     session: {\n       type: 'OAuth',\n       token: '<community-token>',\n       refreshToken: '<community-refresh-token>',\n       refreshTokenEndpoint: '<community-refresh-endpoint>',\n     },\n   };\n   return (\n     <SCContextProvider conf={conf}><CategoriesSuggestionWidget /></SCContextProvider>\n   );\n }\n"})})]})}function m(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},94253:(e,t,o)=>{o.d(t,{Z:()=>C});var s=o(83117),n=o(80102),r=o(67294),i=o(63961),a=o(74854),l=o(18784),c=o(87893),d=o(71713),u=o(85893);const h=["className","component"];var m=o(37078),g=o(75389),p=o(10606);const _=(0,o(1588).Z)("MuiBox",["root"]),f=(0,g.Z)(),v=function(e={}){const{themeId:t,defaultTheme:o,defaultClassName:m="MuiBox-root",generateClassName:g}=e,p=(0,a.default)("div",{shouldForwardProp:e=>"theme"!==e&&"sx"!==e&&"as"!==e})(l.Z);return r.forwardRef((function(e,r){const a=(0,d.Z)(o),l=(0,c.Z)(e),{className:_,component:f="div"}=l,v=(0,n.Z)(l,h);return(0,u.jsx)(p,(0,s.Z)({as:f,ref:r,className:(0,i.Z)(_,g?g(m):m),theme:t&&a[t]||a},v))}))}({themeId:p.Z,defaultTheme:f,defaultClassName:_.root,generateClassName:m.Z.generate}),C=v},44267:(e,t,o)=>{o.d(t,{Z:()=>_});var s=o(83117),n=o(80102),r=o(67294),i=o(63961),a=o(94780),l=o(90948),c=o(28628),d=o(1588),u=o(34867);function h(e){return(0,u.ZP)("MuiCardContent",e)}(0,d.Z)("MuiCardContent",["root"]);var m=o(85893);const g=["className","component"],p=(0,l.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({padding:16,"&:last-child":{paddingBottom:24}}))),_=r.forwardRef((function(e,t){const o=(0,c.i)({props:e,name:"MuiCardContent"}),{className:r,component:l="div"}=o,d=(0,n.Z)(o,g),u=(0,s.Z)({},o,{component:l}),_=(e=>{const{classes:t}=e;return(0,a.Z)({root:["root"]},h,t)})(u);return(0,m.jsx)(p,(0,s.Z)({as:l,className:(0,i.Z)(_.root,r),ownerState:u,ref:t},d))}))},80560:(e,t,o)=>{o.d(t,{Z:()=>h});var s=o(83117),n=o(80102),r=o(33703),i=o(86542),a=o(65610),l=o(65220);const c=["className","elementType","ownerState","externalForwardedProps","getSlotOwnerState","internalForwardedProps"],d=["component","slots","slotProps"],u=["component"];function h(e,t){const{className:o,elementType:h,ownerState:m,externalForwardedProps:g,getSlotOwnerState:p,internalForwardedProps:_}=t,f=(0,n.Z)(t,c),{component:v,slots:C={[e]:void 0},slotProps:Z={[e]:void 0}}=g,k=(0,n.Z)(g,d),w=C[e]||h,x=(0,a.Z)(Z[e],m),S=(0,l.Z)((0,s.Z)({className:o},f,{externalForwardedProps:"root"===e?k:void 0,externalSlotProps:x})),{props:{component:j},internalRef:y}=S,b=(0,n.Z)(S.props,u),W=(0,r.Z)(y,null==x?void 0:x.ref,t.ref),$=p?p(b):{},P=(0,s.Z)({},m,$),N="root"===e?j||v:j,T=(0,i.Z)(w,(0,s.Z)({},"root"===e&&!v&&!C[e]&&_,"root"!==e&&!C[e]&&_,b,N&&{as:N},{ref:W}),P);return Object.keys($).forEach((e=>{delete T[e]})),[w,T]}},69721:(e,t,o)=>{o.d(t,{$Y:()=>d,AL:()=>i,DC:()=>y,Em:()=>m,G8:()=>S,Gp:()=>T,I$:()=>W,L4:()=>g,Lf:()=>k,M7:()=>C,NX:()=>a,Nj:()=>$,Nm:()=>A,Ny:()=>l,Oi:()=>u,R4:()=>N,Rg:()=>f,Tb:()=>O,X5:()=>j,Z4:()=>Z,ZV:()=>b,_j:()=>s,b0:()=>h,eg:()=>w,ht:()=>n,hu:()=>B,k5:()=>v,mK:()=>x,oE:()=>I,ol:()=>R,t9:()=>_,u5:()=>c,wp:()=>F,wv:()=>P,xh:()=>M,zL:()=>L,zj:()=>E});const s=(e,t)=>`_fo_${t}_${e}`,n=e=>`_co_${e}`,r="_cos_",i=(e,t,o)=>`${r}${t}_${e}_${o}`,a=(e,t)=>`${r}${t}_${e}`,l=()=>"_cas_",c=e=>`_ca_${e}`,d=e=>`_evt_${e}`,u=()=>"_evts_",h=e=>`_grp_${e}`,m=()=>"_grps_",g=e=>`_inc_${e}`,p="_contr_",_=(e,t,o)=>`${p}${t}_${e}_${o}`,f=()=>"_bcms_",v=(e,t)=>`_feed_${e}_${t}`,C=e=>`_feed_st_${e}`,Z=e=>`_virtualized_scroll_st_${e}`,k=e=>`_feed_spos_${e}`,w=e=>`_adv_${e}`,x=()=>"_pmss_",S=e=>`_pms_${e}`,j="_cFolWidget_",y="_cSugWidget_",b="_cPopWidget_",W="_uFolWidget_",$="_uFoldWidget_",P="_uConWidget_",N="_uConReqWidget_",T="_uConReqSentWidget_",R="_fTrendWidget_",O="_rFeedWidget_",E="_pTrendWidget_",I="_pSugWidget_",F="_iListWidget_",M="_iSugWidget_",A="_pSugWidget_",L="_gSubWidget_",B=(e,t=void 0)=>`${e}${void 0!==t?t:""}`},39154:(e,t,o)=>{o.d(t,{Z:()=>w});var s=o(97582),n=o(85893),r=o(90948),i=o(64666),a=o(31425),l=o(6514),c=o(37292),d=o(94184),u=o.n(d),h=o(2734),m=o(37645),g=o(93946),p=o(67564),_=o(86879);const f="SCBaseDialog",v={root:`${f}-root`,titleRoot:`${f}-title-root`},C=(0,r.ZP)(m.Z,{name:f,slot:"Root",overridesResolver:(e,t)=>t.titleRoot})((({theme:e})=>({}))),Z=({children:e=null,onClose:t=null})=>{const o=(0,h.Z)(),s=(0,c.Z)(o.breakpoints.down("md"),{noSsr:(0,_.rx)()});return(0,n.jsxs)(C,Object.assign({className:v.titleRoot},{children:[(0,n.jsx)("span",{children:e}),t?(0,n.jsx)(g.Z,Object.assign({"aria-label":"close",onClick:t},{children:(0,n.jsx)(p.Z,{children:s?"arrow_back":"close"})})):null]}))},k=(0,r.ZP)(i.Z,{name:f,slot:"Root",overridesResolver:(e,t)=>t.root})((({theme:e})=>({})));const w=function(e){const t=(0,h.Z)(),o=(0,c.Z)(t.breakpoints.down("md"),{noSsr:(0,_.rx)()}),r=o,{className:i="",title:d="",subtitle:m=null,DialogContentProps:g={dividers:!o},open:p=!1,onClose:f=null,actions:C=null,children:w,maxWidth:x="sm",scroll:S="body"}=e,j=(0,s._T)(e,["className","title","subtitle","DialogContentProps","open","onClose","actions","children","maxWidth","scroll"]);return(0,n.jsxs)(k,Object.assign({className:u()(v.root,i),fullScreen:r,fullWidth:!0,open:p,onClose:f,maxWidth:x,scroll:S},j,{children:[(0,n.jsx)(Z,Object.assign({onClose:f},{children:d})),m&&m,(0,n.jsx)(l.Z,Object.assign({},g,{children:w})),C&&(0,n.jsx)(a.Z,{children:C})]}))}},54545:(e,t,o)=>{o.d(t,{Z:()=>r});var s=o(85893);const n=(0,o(90948).ZP)("div",{name:"SCHiddenPlaceholder",slot:"Root",overridesResolver:(e,t)=>[t.root]})((()=>({height:1,width:"100%",display:"none"})));function r(e){return(0,s.jsx)(n,Object.assign({},e))}},59219:(e,t,o)=>{o.d(t,{ZP:()=>n,n2:()=>s});var s;!function(e){e.CACHE_FIRST="Cache-first",e.NETWORK_ONLY="Network-only",e.STALE_WHILE_REVALIDATE="Stale-While-Revalidate"}(s||(s={}));const n=new class{constructor(e=1e4){this.values=new Map,this.maxEntries=e,this.ssr="undefined"==typeof window,this.ssr||(window.__viewSCCache=this.values)}get(e,t,o={noSsr:!0}){let s;return this.values.has(e)?(s=this.values.get(e),this.values.delete(e),this.values.set(e,s)):t&&(s=t,(!this.ssr||!o.noSsr)&&this.values.set(e,s)),s}set(e,t,o={noSsr:!0}){if(!this.ssr||!o.noSsr){if(this.values.size>=this.maxEntries){const e=this.values.keys().next().value;this.values.delete(e)}this.values.set(e,t)}}hasKey(e){return this.values.has(e)}delete(e){this.values.has(e)&&this.values.delete(e)}deleteKeys(e){e.forEach((e=>{this.values.has(e)&&this.values.delete(e)}))}deleteKeysWithPrefix(e){this.values.forEach(((t,o)=>{o.startsWith(e)&&this.values.delete(o)}))}clean(){this.values=new Map}evaluate(){console.log(this.values)}}}}]);