/*! For license information please see 57daa891.395ae7ee.js.LICENSE.txt */
(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[97103],{92991:(e,t,s)=>{"use strict";s.d(t,{Z:()=>_});var n=s(67294),o=s(27331),r=s(5730);function i(e,t){void 0===e&&(e=""),void 0===t&&(t={});const s=Object.keys(t).map((e=>encodeURIComponent(e)+"="+encodeURIComponent(t[e]))).join("&");return fetch(e,{method:"POST",headers:{accept:"application/json","content-type":"application/x-www-form-urlencoded"},body:s})}function a(){if((0,r.Z)()){const e={refresh_token:JSON.parse(window.localStorage.getItem("token")).refresh_token,client_id:o.r.user.client_id,grant_type:"refresh_token"};return i(`${o.r.portal}/oauth/token/`,e).then((e=>e.json())).then((e=>({accessToken:e.access_token,refreshToken:e.refresh_token,tokenType:e.token_type,expiresIn:e.expires_in}))).catch((e=>Promise.reject(e)))}}function c(){const e=(0,r.Z)(),[t,s]=(0,n.useState)(e?JSON.parse(window.localStorage.getItem("token")):"");return(0,n.useEffect)((()=>{e&&(!t||1e3*t.expiresIn<Date.now()?i(`${o.r.portal}/oauth/token/`,o.r.user).then((e=>e.json())).then((e=>({accessToken:e.access_token,refreshToken:e.refresh_token,tokenType:e.token_type,expiresIn:e.expires_in}))).catch((e=>e)).then((e=>{s(e)})):e&&s(JSON.parse(window.localStorage.getItem("token"))))}),[e]),(0,n.useEffect)((()=>{e&&window.localStorage.setItem("token",JSON.stringify(t))}),[e,t]),t}var d=s(62254),u=s(14744),l=s(19666),m=s(85893);function _(e){let{children:t}=e;const s=c(),n={portal:o.r.portal,locale:{default:"en"},session:{type:"OAuth",clientId:o.r.user.client_id,authToken:s,handleRefreshToken:a},theme:u.Z,handleAnonymousAction:()=>{alert("Anonymous action")}};return(0,m.jsx)(l.Z,{children:()=>(0,m.jsx)(d.ZP,{conf:n,children:t})})}},27331:(e,t,s)=>{"use strict";s.d(t,{r:()=>n});const n={user:{username:"beatrice",password:"Password!!Beatrice2021",client_id:"XJjPE54IBBjhibs0Rf0wZ969cZNPq6WjC02FrkaM",grant_type:"password"},portal:"https://api.fashionista.community"}},24742:(e,t,s)=>{"use strict";s.r(t),s.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>_,frontMatter:()=>a,metadata:()=>d,toc:()=>l});var n=s(85893),o=s(11151),r=s(92991),i=s(44854);const a={sidebar_label:"Custom Adv",sidebar_position:1,title:"Custom Adv"},c=void 0,d={id:"sdk/community-js/react-ui/Components/CustomAdv",title:"Custom Adv",description:"The Custom Adv component renders custom adv banners.",source:"@site/docs/sdk/community-js/react-ui/Components/CustomAdv.mdx",sourceDirName:"sdk/community-js/react-ui/Components",slug:"/sdk/community-js/react-ui/Components/CustomAdv",permalink:"/docs/sdk/community-js/react-ui/Components/CustomAdv",draft:!1,unlisted:!1,editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/sdk/community-js/react-ui/Components/CustomAdv.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Custom Adv",sidebar_position:1,title:"Custom Adv"},sidebar:"sdkSidebar",previous:{title:"Comments Feed Object",permalink:"/docs/sdk/community-js/react-ui/Components/CommentsFeedObject"},next:{title:"Editor",permalink:"/docs/sdk/community-js/react-ui/Components/Editor"}},u={},l=[{value:"Usage",id:"usage",level:4}];function m(e){const t={blockquote:"blockquote",code:"code",h4:"h4",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"The Custom Adv component renders custom adv banners."}),"\n"]}),"\n","\n","\n",(0,n.jsx)(r.Z,{children:(0,n.jsx)(i.Z,{})}),"\n",(0,n.jsx)(t.h4,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-jsx",children:" import React from 'react';\n import {SCContextProvider} from '@selfcommunity/react-core';\n import {CustomAdv} from '@selfcommunity/react-ui';\n\n function App() {\n   const conf = {\n     portal: '<community-path>',\n     session: {\n       type: 'OAuth',\n       token: '<community-token>',\n       refreshToken: '<community-refresh-token>',\n       refreshTokenEndpoint: '<community-refresh-endpoint>',\n     },\n   };\n   return (\n     <SCContextProvider conf={conf}><CustomAdv /></SCContextProvider>\n   );\n }\n"})})]})}function _(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}},94253:(e,t,s)=>{"use strict";s.d(t,{Z:()=>k});var n=s(83117),o=s(80102),r=s(67294),i=s(63961),a=s(74854),c=s(18784),d=s(87893),u=s(71713),l=s(85893);const m=["className","component"];var _=s(37078),h=s(75389),p=s(10606);const f=(0,s(1588).Z)("MuiBox",["root"]),v=(0,h.Z)(),g=function(e={}){const{themeId:t,defaultTheme:s,defaultClassName:_="MuiBox-root",generateClassName:h}=e,p=(0,a.default)("div",{shouldForwardProp:e=>"theme"!==e&&"sx"!==e&&"as"!==e})(c.Z);return r.forwardRef((function(e,r){const a=(0,u.Z)(s),c=(0,d.Z)(e),{className:f,component:v="div"}=c,g=(0,o.Z)(c,m);return(0,l.jsx)(p,(0,n.Z)({as:v,ref:r,className:(0,i.Z)(f,h?h(_):_),theme:t&&a[t]||a},g))}))}({themeId:p.Z,defaultTheme:v,defaultClassName:f.root,generateClassName:_.Z.generate}),k=g},71713:(e,t,s)=>{"use strict";s.d(t,{Z:()=>i});var n=s(67348),o=s(2952);const r=(0,n.Z)();const i=function(e=r){return(0,o.Z)(e)}},69721:(e,t,s)=>{"use strict";s.d(t,{$Y:()=>u,AL:()=>i,DC:()=>$,Em:()=>_,G8:()=>w,Gp:()=>N,I$:()=>A,L4:()=>h,Lf:()=>y,M7:()=>k,NX:()=>a,Nj:()=>Z,Nm:()=>L,Ny:()=>c,Oi:()=>l,R4:()=>W,Rg:()=>v,Tb:()=>I,X5:()=>S,Z4:()=>C,ZV:()=>b,_j:()=>n,b0:()=>m,eg:()=>j,ht:()=>o,hu:()=>q,k5:()=>g,mK:()=>x,oE:()=>P,ol:()=>E,t9:()=>f,u5:()=>d,wp:()=>R,wv:()=>T,xh:()=>F,zL:()=>M,zj:()=>O});const n=(e,t)=>`_fo_${t}_${e}`,o=e=>`_co_${e}`,r="_cos_",i=(e,t,s)=>`${r}${t}_${e}_${s}`,a=(e,t)=>`${r}${t}_${e}`,c=()=>"_cas_",d=e=>`_ca_${e}`,u=e=>`_evt_${e}`,l=()=>"_evts_",m=e=>`_grp_${e}`,_=()=>"_grps_",h=e=>`_inc_${e}`,p="_contr_",f=(e,t,s)=>`${p}${t}_${e}_${s}`,v=()=>"_bcms_",g=(e,t)=>`_feed_${e}_${t}`,k=e=>`_feed_st_${e}`,C=e=>`_virtualized_scroll_st_${e}`,y=e=>`_feed_spos_${e}`,j=e=>`_adv_${e}`,x=()=>"_pmss_",w=e=>`_pms_${e}`,S="_cFolWidget_",$="_cSugWidget_",b="_cPopWidget_",A="_uFolWidget_",Z="_uFoldWidget_",T="_uConWidget_",W="_uConReqWidget_",N="_uConReqSentWidget_",E="_fTrendWidget_",I="_rFeedWidget_",O="_pTrendWidget_",P="_pSugWidget_",R="_iListWidget_",F="_iSugWidget_",L="_pSugWidget_",M="_gSubWidget_",q=(e,t=void 0)=>`${e}${void 0!==t?t:""}`},59219:(e,t,s)=>{"use strict";s.d(t,{ZP:()=>o,n2:()=>n});var n;!function(e){e.CACHE_FIRST="Cache-first",e.NETWORK_ONLY="Network-only",e.STALE_WHILE_REVALIDATE="Stale-While-Revalidate"}(n||(n={}));const o=new class{constructor(e=1e4){this.values=new Map,this.maxEntries=e,this.ssr="undefined"==typeof window,this.ssr||(window.__viewSCCache=this.values)}get(e,t,s={noSsr:!0}){let n;return this.values.has(e)?(n=this.values.get(e),this.values.delete(e),this.values.set(e,n)):t&&(n=t,(!this.ssr||!s.noSsr)&&this.values.set(e,n)),n}set(e,t,s={noSsr:!0}){if(!this.ssr||!s.noSsr){if(this.values.size>=this.maxEntries){const e=this.values.keys().next().value;this.values.delete(e)}this.values.set(e,t)}}hasKey(e){return this.values.has(e)}delete(e){this.values.has(e)&&this.values.delete(e)}deleteKeys(e){e.forEach((e=>{this.values.has(e)&&this.values.delete(e)}))}deleteKeysWithPrefix(e){this.values.forEach(((t,s)=>{s.startsWith(e)&&this.values.delete(s)}))}clean(){this.values=new Map}evaluate(){console.log(this.values)}}},94184:(e,t)=>{var s;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var s=arguments[t];if(s){var r=typeof s;if("string"===r||"number"===r)e.push(s);else if(Array.isArray(s)){if(s.length){var i=o.apply(null,s);i&&e.push(i)}}else if("object"===r){if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]")){e.push(s.toString());continue}for(var a in s)n.call(s,a)&&s[a]&&e.push(a)}}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(s=function(){return o}.apply(t,[]))||(e.exports=s)}()}}]);