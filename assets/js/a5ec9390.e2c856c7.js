(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[72715],{92991:(e,t,n)=>{"use strict";n.d(t,{Z:()=>h});var o=n(67294),r=n(27331),s=n(5730);function a(e,t){void 0===e&&(e=""),void 0===t&&(t={});const n=Object.keys(t).map((e=>encodeURIComponent(e)+"="+encodeURIComponent(t[e]))).join("&");return fetch(e,{method:"POST",headers:{accept:"application/json","content-type":"application/x-www-form-urlencoded"},body:n})}function c(){if((0,s.Z)()){const e={refresh_token:JSON.parse(window.localStorage.getItem("token")).refresh_token,client_id:r.r.user.client_id,grant_type:"refresh_token"};return a(`${r.r.portal}/oauth/token/`,e).then((e=>e.json())).then((e=>({accessToken:e.access_token,refreshToken:e.refresh_token,tokenType:e.token_type,expiresIn:e.expires_in}))).catch((e=>Promise.reject(e)))}}const i=()=>{if((0,s.Z)())return JSON.parse(window.localStorage.getItem("token"))};function d(){const e=(0,s.Z)(),[t,n]=(0,o.useState)(i);return(0,o.useEffect)((()=>{e&&(!t||1e3*t.expiresIn<Date.now()?a(`${r.r.portal}/oauth/token/`,r.r.user).then((e=>e.json())).then((e=>({accessToken:e.access_token,refreshToken:e.refresh_token,tokenType:e.token_type,expiresIn:e.expires_in}))).catch((e=>e)).then((e=>{n(e)})):n(i))}),[e]),(0,o.useEffect)((()=>{e&&window.localStorage.setItem("token",JSON.stringify(t))}),[e,t]),t}var p=n(21770),l=n(21367),m=n(19666),u=n(85893);function h(e){let{children:t}=e;const n=d(),o={portal:r.r.portal,locale:{default:"en"},session:{type:"OAuth",clientId:r.r.user.client_id,authToken:n,handleRefreshToken:c},theme:l.Z,handleAnonymousAction:()=>{alert("Anonymous action")}};return(0,u.jsx)(m.Z,{children:()=>(0,u.jsx)(p.ZP,{conf:o,children:t})})}},27331:(e,t,n)=>{"use strict";n.d(t,{r:()=>o});const o={user:{username:"beatrice",password:"Password!!Beatrice2021",client_id:"8HXeelXaQldhQmiSJDMhqNboELvDH402WIQIORFF",grant_type:"password"},portal:"https://api.fashionista.community"}},62603:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>p,toc:()=>m});var o=n(85893),r=n(11151),s=(n(67294),n(19666));function a(){return(0,o.jsx)(s.Z,{children:()=>{const e=n(86939).WD;return(0,o.jsx)(e,{categoryId:3})}})}var c=n(92991);const i={sidebar_label:"Category",sidebar_position:1,title:"Category"},d=void 0,p={id:"sdk/community-js/react-templates/Components/Category",title:"Category",description:"The Category template renders the category page.",source:"@site/docs/sdk/community-js/react-templates/Components/Category.mdx",sourceDirName:"sdk/community-js/react-templates/Components",slug:"/sdk/community-js/react-templates/Components/Category",permalink:"/docs/sdk/community-js/react-templates/Components/Category",draft:!1,unlisted:!1,editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/sdk/community-js/react-templates/Components/Category.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Category",sidebar_position:1,title:"Category"},sidebar:"sdkSidebar",previous:{title:"Incubator",permalink:"/docs/sdk/community-js/react-ui/Components/incubator"},next:{title:"Category Feed",permalink:"/docs/sdk/community-js/react-templates/Components/CategoryFeed"}},l={},m=[{value:"Usage",id:"usage",level:4}];function u(e){const t={blockquote:"blockquote",code:"code",h4:"h4",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsx)(t.p,{children:"The Category template renders the category page."}),"\n"]}),"\n","\n","\n",(0,o.jsx)(c.Z,{children:(0,o.jsx)(a,{})}),"\n",(0,o.jsx)(t.h4,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-jsx",children:" import React from 'react';\n import {SCContextProvider} from '@selfcommunity/react-core';\n import {Category} from '@selfcommunity/react-templates';\n\n function App() {\n   const conf = {\n     portal: '<community-path>',\n     session: {\n       type: 'OAuth',\n       token: '<community-token>',\n       refreshToken: '<community-refresh-token>',\n       refreshTokenEndpoint: '<community-refresh-endpoint>',\n     },\n   };\n   return (\n     <SCContextProvider conf={conf}><Category/></SCContextProvider>\n   );\n }\n"})})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},70172:()=>{},2001:()=>{},33779:()=>{},66558:()=>{},82258:()=>{}}]);