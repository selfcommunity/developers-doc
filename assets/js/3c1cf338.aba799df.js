"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[16486],{92991:(e,r,n)=>{n.d(r,{Z:()=>m});var o=n(67294),t=n(27331),s=n(5730);function i(e,r){void 0===e&&(e=""),void 0===r&&(r={});const n=Object.keys(r).map((e=>encodeURIComponent(e)+"="+encodeURIComponent(r[e]))).join("&");return fetch(e,{method:"POST",headers:{accept:"application/json","content-type":"application/x-www-form-urlencoded"},body:n})}function c(){if((0,s.Z)()){const e={refresh_token:JSON.parse(window.localStorage.getItem("token")).refresh_token,client_id:t.r.user.client_id,grant_type:"refresh_token"};return i(`${t.r.portal}/oauth/token/`,e).then((e=>e.json())).then((e=>({accessToken:e.access_token,refreshToken:e.refresh_token,tokenType:e.token_type,expiresIn:e.expires_in}))).catch((e=>Promise.reject(e)))}}function a(){const e=(0,s.Z)(),[r,n]=(0,o.useState)(e?JSON.parse(window.localStorage.getItem("token")):"");return(0,o.useEffect)((()=>{e&&(!r||1e3*r.expiresIn<Date.now()?i(`${t.r.portal}/oauth/token/`,t.r.user).then((e=>e.json())).then((e=>({accessToken:e.access_token,refreshToken:e.refresh_token,tokenType:e.token_type,expiresIn:e.expires_in}))).catch((e=>e)).then((e=>{n(e)})):e&&n(JSON.parse(window.localStorage.getItem("token"))))}),[e]),(0,o.useEffect)((()=>{e&&window.localStorage.setItem("token",JSON.stringify(r))}),[e,r]),r}var d=n(53704),l=n(21367),u=n(19666),p=n(85893);function m(e){let{children:r}=e;const n=a(),o={portal:t.r.portal,locale:{default:"en"},session:{type:"OAuth",clientId:t.r.user.client_id,authToken:n,handleRefreshToken:c},theme:l.Z,handleAnonymousAction:()=>{alert("Anonymous action")}};return(0,p.jsx)(u.Z,{children:()=>(0,p.jsx)(d.ZP,{conf:o,children:r})})}},27331:(e,r,n)=>{n.d(r,{r:()=>o});const o={user:{username:"beatrice",password:"Password!!Beatrice2021",client_id:"XJjPE54IBBjhibs0Rf0wZ969cZNPq6WjC02FrkaM",grant_type:"password"},portal:"https://api.fashionista.community"}},6098:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>c,metadata:()=>d,toc:()=>u});var o=n(85893),t=n(11151),s=n(92991),i=n(49901);const c={sidebar_label:"User Profile Header",sidebar_position:1,title:"User Profile Header"},a=void 0,d={id:"sdk/community-js/react-ui/Components/UserProfileHeader",title:"User Profile Header",description:"The User Profile Header component renders the user profile header composed of user's cover, profile picture and username.",source:"@site/docs/sdk/community-js/react-ui/Components/UserProfileHeader.mdx",sourceDirName:"sdk/community-js/react-ui/Components",slug:"/sdk/community-js/react-ui/Components/UserProfileHeader",permalink:"/docs/sdk/community-js/react-ui/Components/UserProfileHeader",draft:!1,unlisted:!1,editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/sdk/community-js/react-ui/Components/UserProfileHeader.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"User Profile Header",sidebar_position:1,title:"User Profile Header"},sidebar:"sdkSidebar",previous:{title:"User Profile Edit",permalink:"/docs/sdk/community-js/react-ui/Components/UserProfileEdit"},next:{title:"User Suggestion Widget",permalink:"/docs/sdk/community-js/react-ui/Components/UserSuggestion"}},l={},u=[{value:"Usage",id:"usage",level:4}];function p(e){const r={blockquote:"blockquote",code:"code",h4:"h4",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(r.blockquote,{children:["\n",(0,o.jsx)(r.p,{children:"The User Profile Header component renders the user profile header composed of user's cover, profile picture and username."}),"\n"]}),"\n","\n","\n",(0,o.jsx)(s.Z,{children:(0,o.jsx)(i.Z,{userId:7})}),"\n",(0,o.jsx)(r.h4,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-jsx",children:" import React from 'react';\n import {SCContextProvider} from '@selfcommunity/react-core';\n import {UserProfileHeader} from '@selfcommunity/react-ui';\n\n function App() {\n   const conf = {\n     portal: '<community-path>',\n     session: {\n       type: 'OAuth',\n       token: '<community-token>',\n       refreshToken: '<community-refresh-token>',\n       refreshTokenEndpoint: '<community-refresh-endpoint>',\n     },\n   };\n   return (\n     <SCContextProvider conf={conf}><UserProfileHeader /></SCContextProvider>\n   );\n }\n"})})]})}function m(e={}){const{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}}}]);