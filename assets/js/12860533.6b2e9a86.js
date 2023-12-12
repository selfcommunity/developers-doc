(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[32016],{92991:(e,n,t)=>{"use strict";t.d(n,{Z:()=>h});var o=t(67294),r=t(27331),s=t(5730);function c(e,n){void 0===e&&(e=""),void 0===n&&(n={});const t=Object.keys(n).map((e=>encodeURIComponent(e)+"="+encodeURIComponent(n[e]))).join("&");return fetch(e,{method:"POST",headers:{accept:"application/json","content-type":"application/x-www-form-urlencoded"},body:t})}function i(){if((0,s.Z)()){const e={refresh_token:JSON.parse(window.localStorage.getItem("token")).refresh_token,client_id:r.r.user.client_id,grant_type:"refresh_token"};return c(`${r.r.portal}/oauth/token/`,e).then((e=>e.json())).then((e=>({accessToken:e.access_token,refreshToken:e.refresh_token,tokenType:e.token_type,expiresIn:e.expires_in}))).catch((e=>Promise.reject(e)))}}const a=()=>{if((0,s.Z)())return JSON.parse(window.localStorage.getItem("token"))};function u(){const e=(0,s.Z)(),[n,t]=(0,o.useState)(a);return(0,o.useEffect)((()=>{e&&(!n||1e3*n.expiresIn<Date.now()?c(`${r.r.portal}/oauth/token/`,r.r.user).then((e=>e.json())).then((e=>({accessToken:e.access_token,refreshToken:e.refresh_token,tokenType:e.token_type,expiresIn:e.expires_in}))).catch((e=>e)).then((e=>{t(e)})):t(a))}),[e]),(0,o.useEffect)((()=>{e&&window.localStorage.setItem("token",JSON.stringify(n))}),[e,n]),n}var d=t(21770),l=t(21367),p=t(19666),m=t(85893);function h(e){let{children:n}=e;const t=u(),o={portal:r.r.portal,locale:{default:"en"},session:{type:"OAuth",clientId:r.r.user.client_id,authToken:t,handleRefreshToken:i},theme:l.Z,handleAnonymousAction:()=>{alert("Anonymous action")}};return(0,m.jsx)(p.Z,{children:()=>(0,m.jsx)(d.ZP,{conf:o,children:n})})}},27331:(e,n,t)=>{"use strict";t.d(n,{r:()=>o});const o={user:{username:"beatrice",password:"Password!!Beatrice2021",client_id:"8HXeelXaQldhQmiSJDMhqNboELvDH402WIQIORFF",grant_type:"password"},portal:"https://api.fashionista.community"}},73769:(e,n,t)=>{"use strict";t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>u,default:()=>h,frontMatter:()=>a,metadata:()=>d,toc:()=>p});var o=t(85893),r=t(11151),s=(t(67294),t(19666));function c(){return(0,o.jsx)(s.Z,{children:()=>{const e=t(7885).Incubator;return(0,o.jsx)(e,{incubatorId:1})}})}var i=t(92991);const a={sidebar_label:"Incubator",sidebar_position:1,title:"Incubator"},u=void 0,d={id:"sdk/community-js/react-ui/Components/incubator",title:"Incubator",description:"The Incubator component renders an incubator item containing incubator's title, info, a subscription status bar and a subscribe button,",source:"@site/docs/sdk/community-js/react-ui/Components/incubator.mdx",sourceDirName:"sdk/community-js/react-ui/Components",slug:"/sdk/community-js/react-ui/Components/incubator",permalink:"/docs/sdk/community-js/react-ui/Components/incubator",draft:!1,unlisted:!1,editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/sdk/community-js/react-ui/Components/incubator.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Incubator",sidebar_position:1,title:"Incubator"},sidebar:"sdkSidebar",previous:{title:"User Followed Users Widget",permalink:"/docs/sdk/community-js/react-ui/Components/UsersFollowed"},next:{title:"Introduction",permalink:"/docs/sdk/community-js/react-templates/Component API/"}},l={},p=[{value:"Usage",id:"usage",level:4}];function m(e){const n={blockquote:"blockquote",code:"code",h4:"h4",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"The Incubator component renders an incubator item containing incubator's title, info, a subscription status bar and a subscribe button,\nthat allows users to subscribe/unsubscribe to an incubator."}),"\n"]}),"\n","\n","\n",(0,o.jsx)(i.Z,{children:(0,o.jsx)(c,{})}),"\n",(0,o.jsx)(n.h4,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",children:" import React from 'react';\n import {SCContextProvider} from '@selfcommunity/react-core';\n import {Incubator} from '@selfcommunity/react-ui';\n\n function App() {\n   const conf = {\n     portal: '<community-path>',\n     session: {\n       type: 'OAuth',\n       token: '<community-token>',\n       refreshToken: '<community-refresh-token>',\n       refreshTokenEndpoint: '<community-refresh-endpoint>',\n     },\n   };\n   return (\n     <SCContextProvider conf={conf}><Incubator /></SCContextProvider>\n   );\n }\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(m,{...e})}):m(e)}},70172:()=>{},2001:()=>{},33779:()=>{},66558:()=>{},82258:()=>{}}]);