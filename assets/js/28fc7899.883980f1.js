(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[34240],{92991:(e,o,t)=>{"use strict";t.d(o,{Z:()=>h});var n=t(67294),r=t(27331),i=t(5730);function a(e,o){void 0===e&&(e=""),void 0===o&&(o={});const t=Object.keys(o).map((e=>encodeURIComponent(e)+"="+encodeURIComponent(o[e]))).join("&");return fetch(e,{method:"POST",headers:{accept:"application/json","content-type":"application/x-www-form-urlencoded"},body:t})}function s(){if((0,i.Z)()){const e={refresh_token:JSON.parse(window.localStorage.getItem("token")).refresh_token,client_id:r.r.user.client_id,grant_type:"refresh_token"};return a(`${r.r.portal}/oauth/token/`,e).then((e=>e.json())).then((e=>({accessToken:e.access_token,refreshToken:e.refresh_token,tokenType:e.token_type,expiresIn:e.expires_in}))).catch((e=>Promise.reject(e)))}}const c=()=>{if((0,i.Z)())return JSON.parse(window.localStorage.getItem("token"))};function l(){const e=(0,i.Z)(),[o,t]=(0,n.useState)(c);return(0,n.useEffect)((()=>{e&&(!o||1e3*o.expiresIn<Date.now()?a(`${r.r.portal}/oauth/token/`,r.r.user).then((e=>e.json())).then((e=>({accessToken:e.access_token,refreshToken:e.refresh_token,tokenType:e.token_type,expiresIn:e.expires_in}))).catch((e=>e)).then((e=>{t(e)})):t(c))}),[e]),(0,n.useEffect)((()=>{e&&window.localStorage.setItem("token",JSON.stringify(o))}),[e,o]),o}var d=t(21770),u=t(21367),p=t(19666),m=t(85893);function h(e){let{children:o}=e;const t=l(),n={portal:r.r.portal,locale:{default:"en"},session:{type:"OAuth",clientId:r.r.user.client_id,authToken:t,handleRefreshToken:s},theme:u.Z,handleAnonymousAction:()=>{alert("Anonymous action")}};return(0,m.jsx)(p.Z,{children:()=>(0,m.jsx)(d.ZP,{conf:n,children:o})})}},27331:(e,o,t)=>{"use strict";t.d(o,{r:()=>n});const n={user:{username:"beatrice",password:"Password!!Beatrice2021",client_id:"8HXeelXaQldhQmiSJDMhqNboELvDH402WIQIORFF",grant_type:"password"},portal:"https://api.fashionista.community"}},71496:(e,o,t)=>{"use strict";t.r(o),t.d(o,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>d,toc:()=>p});var n=t(85893),r=t(11151),i=(t(67294),t(19666));function a(){return(0,n.jsx)(i.Z,{children:()=>{const e=t(7885).NavigationToolbar;return(0,n.jsx)(e,{})}})}var s=t(92991);const c={sidebar_label:"Navigation Toolbar",sidebar_position:1,title:"Navigation Toolbar"},l=void 0,d={id:"sdk/community-js/react-ui/Components/NavigationToolbar",title:"Navigation Toolbar",description:"The Navigation Toolbar component renders the application header.",source:"@site/docs/sdk/community-js/react-ui/Components/NavigationToolbar.mdx",sourceDirName:"sdk/community-js/react-ui/Components",slug:"/sdk/community-js/react-ui/Components/NavigationToolbar",permalink:"/docs/sdk/community-js/react-ui/Components/NavigationToolbar",draft:!1,unlisted:!1,editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/sdk/community-js/react-ui/Components/NavigationToolbar.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Navigation Toolbar",sidebar_position:1,title:"Navigation Toolbar"},sidebar:"sdkSidebar",previous:{title:"Loyalty Program",permalink:"/docs/sdk/community-js/react-ui/Components/LoyaltyProgram"},next:{title:"Navigation Toolbar Mobile",permalink:"/docs/sdk/community-js/react-ui/Components/NavigationToolbarMobile"}},u={},p=[{value:"Usage",id:"usage",level:4}];function m(e){const o={blockquote:"blockquote",code:"code",h4:"h4",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(o.blockquote,{children:["\n",(0,n.jsxs)(o.p,{children:["The Navigation Toolbar component renders the application header.",(0,n.jsx)("br",{}),"\nNavigation Toolbar allows users to perform search action, to create contributes and to navigate through the entire application through shortcuts that refer to the main sections (such as home, feed, profile, notifications, etc)."]}),"\n"]}),"\n","\n","\n",(0,n.jsx)(s.Z,{children:(0,n.jsx)(a,{})}),"\n",(0,n.jsx)(o.h4,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-jsx",children:" import React from 'react';\n import {SCContextProvider} from '@selfcommunity/react-core';\n import {NavigationToolbar} from '@selfcommunity/react-ui';\n\n function App() {\n   const conf = {\n     portal: '<community-path>',\n     session: {\n       type: 'OAuth',\n       token: '<community-token>',\n       refreshToken: '<community-refresh-token>',\n       refreshTokenEndpoint: '<community-refresh-endpoint>',\n     },\n   };\n   return (\n     <SCContextProvider conf={conf}><NavigationToolbar /></SCContextProvider>\n   );\n }\n"})})]})}function h(e={}){const{wrapper:o}={...(0,r.a)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}},70172:()=>{},2001:()=>{},33779:()=>{},66558:()=>{},82258:()=>{}}]);