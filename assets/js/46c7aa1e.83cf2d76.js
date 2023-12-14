"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[4153],{92991:(e,s,t)=>{t.d(s,{Z:()=>l});var n=t(67294),o=t(27331),r=t(5730);function a(e,s){void 0===e&&(e=""),void 0===s&&(s={});const t=Object.keys(s).map((e=>encodeURIComponent(e)+"="+encodeURIComponent(s[e]))).join("&");return fetch(e,{method:"POST",headers:{accept:"application/json","content-type":"application/x-www-form-urlencoded"},body:t})}function c(){if((0,r.Z)()){const e={refresh_token:JSON.parse(window.localStorage.getItem("token")).refresh_token,client_id:o.r.user.client_id,grant_type:"refresh_token"};return a(`${o.r.portal}/oauth/token/`,e).then((e=>e.json())).then((e=>({accessToken:e.access_token,refreshToken:e.refresh_token,tokenType:e.token_type,expiresIn:e.expires_in}))).catch((e=>Promise.reject(e)))}}function i(){const e=(0,r.Z)(),[s,t]=(0,n.useState)(e?JSON.parse(window.localStorage.getItem("token")):"");return(0,n.useEffect)((()=>{e&&(!s||1e3*s.expiresIn<Date.now()?a(`${o.r.portal}/oauth/token/`,o.r.user).then((e=>e.json())).then((e=>({accessToken:e.access_token,refreshToken:e.refresh_token,tokenType:e.token_type,expiresIn:e.expires_in}))).catch((e=>e)).then((e=>{t(e)})):e&&t(JSON.parse(window.localStorage.getItem("token"))))}),[e]),(0,n.useEffect)((()=>{e&&window.localStorage.setItem("token",JSON.stringify(s))}),[e,s]),s}var d=t(53704),m=t(21367),p=t(19666),u=t(85893);function l(e){let{children:s}=e;const t=i(),n={portal:o.r.portal,locale:{default:"en"},session:{type:"OAuth",clientId:o.r.user.client_id,authToken:t,handleRefreshToken:c},theme:m.Z,handleAnonymousAction:()=>{alert("Anonymous action")}};return(0,u.jsx)(p.Z,{children:()=>(0,u.jsx)(d.ZP,{conf:n,children:s})})}},27331:(e,s,t)=>{t.d(s,{r:()=>n});const n={user:{username:"beatrice",password:"Password!!Beatrice2021",client_id:"XJjPE54IBBjhibs0Rf0wZ969cZNPq6WjC02FrkaM",grant_type:"password"},portal:"https://api.fashionista.community"}},83808:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>m,contentTitle:()=>i,default:()=>l,frontMatter:()=>c,metadata:()=>d,toc:()=>p});var n=t(85893),o=t(11151),r=t(92991),a=t(86420);const c={sidebar_label:"Broadcast Messages",sidebar_position:1,title:"Broadcast Messages"},i=void 0,d={id:"sdk/community-js/react-ui/Components/BroadcastMessages",title:"Broadcast Messages",description:"The Broadcast Messages component renders a list of broadcast messages.",source:"@site/docs/sdk/community-js/react-ui/Components/BroadcastMessages.mdx",sourceDirName:"sdk/community-js/react-ui/Components",slug:"/sdk/community-js/react-ui/Components/BroadcastMessages",permalink:"/docs/sdk/community-js/react-ui/Components/BroadcastMessages",draft:!1,unlisted:!1,editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/sdk/community-js/react-ui/Components/BroadcastMessages.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Broadcast Messages",sidebar_position:1,title:"Broadcast Messages"},sidebar:"sdkSidebar",previous:{title:"Bottom Navigation",permalink:"/docs/sdk/community-js/react-ui/Components/BottomNavigation"},next:{title:"Categories",permalink:"/docs/sdk/community-js/react-ui/Components/Categories"}},m={},p=[{value:"Usage",id:"usage",level:4}];function u(e){const s={blockquote:"blockquote",code:"code",h4:"h4",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:["The Broadcast Messages component renders a list of broadcast messages.",(0,n.jsx)("br",{}),"\nBroadcast Messages allows a specific user to send messages and announcements to a larger group of users at once."]}),"\n"]}),"\n","\n","\n",(0,n.jsx)(r.Z,{children:(0,n.jsx)(a.Z,{})}),"\n",(0,n.jsx)(s.h4,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-jsx",children:" import React from 'react';\n import {SCContextProvider} from '@selfcommunity/react-core';\n import {BroadcastMessages} from '@selfcommunity/react-ui';\n\n function App() {\n   const conf = {\n     portal: '<community-path>',\n     session: {\n       type: 'OAuth',\n       token: '<community-token>',\n       refreshToken: '<community-refresh-token>',\n       refreshTokenEndpoint: '<community-refresh-endpoint>',\n     },\n   };\n   return (\n     <SCContextProvider conf={conf}><BroadcastMessages /></SCContextProvider>\n   );\n }\n"})})]})}function l(e={}){const{wrapper:s}={...(0,o.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}}}]);