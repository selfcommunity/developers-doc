(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[32795],{92991:(e,t,n)=>{"use strict";n.d(t,{Z:()=>f});var o=n(67294),i=n(27331),s=n(5730);function r(e,t){void 0===e&&(e=""),void 0===t&&(t={});const n=Object.keys(t).map((e=>encodeURIComponent(e)+"="+encodeURIComponent(t[e]))).join("&");return fetch(e,{method:"POST",headers:{accept:"application/json","content-type":"application/x-www-form-urlencoded"},body:n})}function c(){if((0,s.Z)()){const e={refresh_token:JSON.parse(window.localStorage.getItem("token")).refresh_token,client_id:i.r.user.client_id,grant_type:"refresh_token"};return r(`${i.r.portal}/oauth/token/`,e).then((e=>e.json())).then((e=>({accessToken:e.access_token,refreshToken:e.refresh_token,tokenType:e.token_type,expiresIn:e.expires_in}))).catch((e=>Promise.reject(e)))}}const a=()=>{if((0,s.Z)())return JSON.parse(window.localStorage.getItem("token"))};function d(){const e=(0,s.Z)(),[t,n]=(0,o.useState)(a);return(0,o.useEffect)((()=>{e&&(!t||1e3*t.expiresIn<Date.now()?r(`${i.r.portal}/oauth/token/`,i.r.user).then((e=>e.json())).then((e=>({accessToken:e.access_token,refreshToken:e.refresh_token,tokenType:e.token_type,expiresIn:e.expires_in}))).catch((e=>e)).then((e=>{n(e)})):n(a))}),[e]),(0,o.useEffect)((()=>{e&&window.localStorage.setItem("token",JSON.stringify(t))}),[e,t]),t}var p=n(21770),m=n(21367),l=n(19666),u=n(85893);function f(e){let{children:t}=e;const n=d(),o={portal:i.r.portal,locale:{default:"en"},session:{type:"OAuth",clientId:i.r.user.client_id,authToken:n,handleRefreshToken:c},theme:m.Z,handleAnonymousAction:()=>{alert("Anonymous action")}};return(0,u.jsx)(l.Z,{children:()=>(0,u.jsx)(p.ZP,{conf:o,children:t})})}},27331:(e,t,n)=>{"use strict";n.d(t,{r:()=>o});const o={user:{username:"beatrice",password:"Password!!Beatrice2021",client_id:"8HXeelXaQldhQmiSJDMhqNboELvDH402WIQIORFF",grant_type:"password"},portal:"https://api.fashionista.community"}},86322:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var o=n(85893),i=n(11151);n(67294),n(19666);n(92991);const s={sidebar_label:"Notification Feed",sidebar_position:1,title:"Notification Feed"},r=void 0,c={id:"sdk/community-js/react-templates/Components/NotificationFeed",title:"Notification Feed",description:"The Notification Feed template renders the notification feed page.",source:"@site/docs/sdk/community-js/react-templates/Components/NotificationFeed.mdx",sourceDirName:"sdk/community-js/react-templates/Components",slug:"/sdk/community-js/react-templates/Components/NotificationFeed",permalink:"/docs/sdk/community-js/react-templates/Components/NotificationFeed",draft:!1,unlisted:!1,editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/sdk/community-js/react-templates/Components/NotificationFeed.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Notification Feed",sidebar_position:1,title:"Notification Feed"},sidebar:"sdkSidebar",previous:{title:"Main Feed",permalink:"/docs/sdk/community-js/react-templates/Components/MainFeed"},next:{title:"User Feed",permalink:"/docs/sdk/community-js/react-templates/Components/UserFeed"}},a={},d=[{value:"Usage",id:"usage",level:4}];function p(e){const t={blockquote:"blockquote",code:"code",h4:"h4",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsx)(t.p,{children:"The Notification Feed template renders the notification feed page."}),"\n"]}),"\n","\n","\n",(0,o.jsx)(t.h4,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-jsx",children:" import React from 'react';\n import {SCContextProvider} from '@selfcommunity/react-core';\n import {NotificationFeed} from '@selfcommunity/react-templates';\n\n function App() {\n   const conf = {\n     portal: '<community-path>',\n     session: {\n       type: 'OAuth',\n       token: '<community-token>',\n       refreshToken: '<community-refresh-token>',\n       refreshTokenEndpoint: '<community-refresh-endpoint>',\n     },\n   };\n   return (\n     <SCContextProvider conf={conf}><NotificationFeed/></SCContextProvider>\n   );\n }\n"})})]})}function m(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},70172:()=>{},2001:()=>{},33779:()=>{},66558:()=>{},82258:()=>{}}]);