(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[572],{92991:(e,n,t)=>{"use strict";t.d(n,{Z:()=>m});var o=t(67294),r=t(27331),s=t(5730);function i(e,n){void 0===e&&(e=""),void 0===n&&(n={});const t=Object.keys(n).map((e=>encodeURIComponent(e)+"="+encodeURIComponent(n[e]))).join("&");return fetch(e,{method:"POST",headers:{accept:"application/json","content-type":"application/x-www-form-urlencoded"},body:t})}function a(){if((0,s.Z)()){const e={refresh_token:JSON.parse(window.localStorage.getItem("token")).refresh_token,client_id:r.r.user.client_id,grant_type:"refresh_token"};return i(`${r.r.portal}/oauth/token/`,e).then((e=>e.json())).then((e=>({accessToken:e.access_token,refreshToken:e.refresh_token,tokenType:e.token_type,expiresIn:e.expires_in}))).catch((e=>Promise.reject(e)))}}const c=()=>{if((0,s.Z)())return JSON.parse(window.localStorage.getItem("token"))};function d(){const e=(0,s.Z)(),[n,t]=(0,o.useState)(c);return(0,o.useEffect)((()=>{e&&(!n||1e3*n.expiresIn<Date.now()?i(`${r.r.portal}/oauth/token/`,r.r.user).then((e=>e.json())).then((e=>({accessToken:e.access_token,refreshToken:e.refresh_token,tokenType:e.token_type,expiresIn:e.expires_in}))).catch((e=>e)).then((e=>{t(e)})):t(c))}),[e]),(0,o.useEffect)((()=>{e&&window.localStorage.setItem("token",JSON.stringify(n))}),[e,n]),n}var u=t(21770),p=t(21367),l=t(19666),h=t(85893);function m(e){let{children:n}=e;const t=d(),o={portal:r.r.portal,locale:{default:"en"},session:{type:"OAuth",clientId:r.r.user.client_id,authToken:t,handleRefreshToken:a},theme:p.Z,handleAnonymousAction:()=>{alert("Anonymous action")}};return(0,h.jsx)(l.Z,{children:()=>(0,h.jsx)(u.ZP,{conf:o,children:n})})}},27331:(e,n,t)=>{"use strict";t.d(n,{r:()=>o});const o={user:{username:"beatrice",password:"Password!!Beatrice2021",client_id:"8HXeelXaQldhQmiSJDMhqNboELvDH402WIQIORFF",grant_type:"password"},portal:"https://api.fashionista.community"}},49719:(e,n,t)=>{"use strict";t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>d,default:()=>m,frontMatter:()=>c,metadata:()=>u,toc:()=>l});var o=t(85893),r=t(11151),s=(t(67294),t(19666));function i(){return(0,o.jsx)(s.Z,{children:()=>{const e=t(7885).ChangeCover;return(0,o.jsx)(e,{})}})}var a=t(92991);const c={sidebar_label:"Change Cover",sidebar_position:1,title:"Change Cover"},d=void 0,u={id:"sdk/community-js/react-ui/Components/ChangeCover",title:"Change Cover",description:"The Change Cover component renders a button that allows users to edit their profile cover and an help popover that",source:"@site/docs/sdk/community-js/react-ui/Components/ChangeCover.mdx",sourceDirName:"sdk/community-js/react-ui/Components",slug:"/sdk/community-js/react-ui/Components/ChangeCover",permalink:"/docs/sdk/community-js/react-ui/Components/ChangeCover",draft:!1,unlisted:!1,editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/sdk/community-js/react-ui/Components/ChangeCover.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Change Cover",sidebar_position:1,title:"Change Cover"},sidebar:"sdkSidebar",previous:{title:"Category Trending Users Widget",permalink:"/docs/sdk/community-js/react-ui/Components/CategoryTrendingUsers"},next:{title:"Change Picture",permalink:"/docs/sdk/community-js/react-ui/Components/ChangePicture"}},p={},l=[{value:"Usage",id:"usage",level:4}];function h(e){const n={blockquote:"blockquote",code:"code",h4:"h4",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["The Change Cover component renders a button that allows users to edit their profile cover and an help popover that ",(0,o.jsx)("br",{}),"\nspecifies format and sizes allowed."]}),"\n"]}),"\n","\n","\n",(0,o.jsx)(a.Z,{children:(0,o.jsx)(i,{})}),"\n",(0,o.jsx)(n.h4,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",children:" import React from 'react';\n import {SCContextProvider} from '@selfcommunity/react-core';\n import {ChangeCover} from '@selfcommunity/react-ui';\n\n function App() {\n   const conf = {\n     portal: '<community-path>',\n     session: {\n       type: 'OAuth',\n       token: '<community-token>',\n       refreshToken: '<community-refresh-token>',\n       refreshTokenEndpoint: '<community-refresh-endpoint>',\n     },\n   };\n   return (\n     <SCContextProvider conf={conf}><ChangeCover /></SCContextProvider>\n   );\n }\n"})})]})}function m(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},70172:()=>{},2001:()=>{},33779:()=>{},66558:()=>{},82258:()=>{}}]);