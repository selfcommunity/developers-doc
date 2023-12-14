(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[31779],{92991:(e,t,n)=>{"use strict";n.d(t,{Z:()=>h});var o=n(67294),s=n(27331),r=n(5730);function i(e,t){void 0===e&&(e=""),void 0===t&&(t={});const n=Object.keys(t).map((e=>encodeURIComponent(e)+"="+encodeURIComponent(t[e]))).join("&");return fetch(e,{method:"POST",headers:{accept:"application/json","content-type":"application/x-www-form-urlencoded"},body:n})}function a(){if((0,r.Z)()){const e={refresh_token:JSON.parse(window.localStorage.getItem("token")).refresh_token,client_id:s.r.user.client_id,grant_type:"refresh_token"};return i(`${s.r.portal}/oauth/token/`,e).then((e=>e.json())).then((e=>({accessToken:e.access_token,refreshToken:e.refresh_token,tokenType:e.token_type,expiresIn:e.expires_in}))).catch((e=>Promise.reject(e)))}}function c(){const e=(0,r.Z)(),[t,n]=(0,o.useState)(e?JSON.parse(window.localStorage.getItem("token")):"");return(0,o.useEffect)((()=>{e&&(!t||1e3*t.expiresIn<Date.now()?i(`${s.r.portal}/oauth/token/`,s.r.user).then((e=>e.json())).then((e=>({accessToken:e.access_token,refreshToken:e.refresh_token,tokenType:e.token_type,expiresIn:e.expires_in}))).catch((e=>e)).then((e=>{n(e)})):e&&n(JSON.parse(window.localStorage.getItem("token"))))}),[e]),(0,o.useEffect)((()=>{e&&window.localStorage.setItem("token",JSON.stringify(t))}),[e,t]),t}var d=n(53704),m=n(21367),p=n(19666),u=n(85893);function h(e){let{children:t}=e;const n=c(),o={portal:s.r.portal,locale:{default:"en"},session:{type:"OAuth",clientId:s.r.user.client_id,authToken:n,handleRefreshToken:a},theme:m.Z,handleAnonymousAction:()=>{alert("Anonymous action")}};return(0,u.jsx)(p.Z,{children:()=>(0,u.jsx)(d.ZP,{conf:o,children:t})})}},27331:(e,t,n)=>{"use strict";n.d(t,{r:()=>o});const o={user:{username:"beatrice",password:"Password!!Beatrice2021",client_id:"XJjPE54IBBjhibs0Rf0wZ969cZNPq6WjC02FrkaM",grant_type:"password"},portal:"https://api.fashionista.community"}},38163:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>c,default:()=>h,frontMatter:()=>a,metadata:()=>d,toc:()=>p});var o=n(85893),s=n(11151),r=n(92991),i=n(43447);const a={sidebar_label:"Thread",sidebar_position:1,title:"Thread"},c=void 0,d={id:"sdk/community-js/react-ui/Components/Thread",title:"Thread",description:"The Thread component renders the conversation between users and it is composed of different message items that contains",source:"@site/docs/sdk/community-js/react-ui/Components/Thread.mdx",sourceDirName:"sdk/community-js/react-ui/Components",slug:"/sdk/community-js/react-ui/Components/Thread",permalink:"/docs/sdk/community-js/react-ui/Components/Thread",draft:!1,unlisted:!1,editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/sdk/community-js/react-ui/Components/Thread.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Thread",sidebar_position:1,title:"Thread"},sidebar:"sdkSidebar",previous:{title:"Snippets",permalink:"/docs/sdk/community-js/react-ui/Components/Snippets"},next:{title:"User",permalink:"/docs/sdk/community-js/react-ui/Components/User"}},m={},p=[{value:"Usage",id:"usage",level:4}];function u(e){const t={blockquote:"blockquote",code:"code",h4:"h4",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsxs)(t.p,{children:["The Thread component renders the conversation between users and it is composed of different message items that contains",(0,o.jsx)("br",{}),'\nthe body of the message related to their type("text", "document", "image" or "video").']}),"\n"]}),"\n","\n","\n",(0,o.jsx)(r.Z,{children:(0,o.jsx)(i.Z,{userObj:2})}),"\n",(0,o.jsx)(t.h4,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-jsx",children:" import React from 'react';\n import {SCContextProvider} from '@selfcommunity/react-core';\n import {PrivateMessageThread} from '@selfcommunity/react-ui';\n\n function App() {\n   const conf = {\n     portal: '<community-path>',\n     session: {\n       type: 'OAuth',\n       token: '<community-token>',\n       refreshToken: '<community-refresh-token>',\n       refreshTokenEndpoint: '<community-refresh-endpoint>',\n     },\n   };\n   return (\n     <SCContextProvider conf={conf}><PrivateMessageThread /></SCContextProvider>\n   );\n }\n"})})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},70172:()=>{},2001:()=>{},33779:()=>{},66558:()=>{},82258:()=>{}}]);