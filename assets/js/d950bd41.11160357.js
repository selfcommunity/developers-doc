(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[24472],{92991:(e,t,n)=>{"use strict";n.d(t,{Z:()=>h});var o=n(67294),r=n(27331),s=n(5730);function i(e,t){void 0===e&&(e=""),void 0===t&&(t={});const n=Object.keys(t).map((e=>encodeURIComponent(e)+"="+encodeURIComponent(t[e]))).join("&");return fetch(e,{method:"POST",headers:{accept:"application/json","content-type":"application/x-www-form-urlencoded"},body:n})}function a(){if((0,s.Z)()){const e={refresh_token:JSON.parse(window.localStorage.getItem("token")).refresh_token,client_id:r.r.user.client_id,grant_type:"refresh_token"};return i(`${r.r.portal}/oauth/token/`,e).then((e=>e.json())).then((e=>({accessToken:e.access_token,refreshToken:e.refresh_token,tokenType:e.token_type,expiresIn:e.expires_in}))).catch((e=>Promise.reject(e)))}}const c=()=>{if((0,s.Z)())return JSON.parse(window.localStorage.getItem("token"))};function d(){const e=(0,s.Z)(),[t,n]=(0,o.useState)(c);return(0,o.useEffect)((()=>{e&&(!t||1e3*t.expiresIn<Date.now()?i(`${r.r.portal}/oauth/token/`,r.r.user).then((e=>e.json())).then((e=>({accessToken:e.access_token,refreshToken:e.refresh_token,tokenType:e.token_type,expiresIn:e.expires_in}))).catch((e=>e)).then((e=>{n(e)})):n(c))}),[e]),(0,o.useEffect)((()=>{e&&window.localStorage.setItem("token",JSON.stringify(t))}),[e,t]),t}var u=n(21770),m=n(21367),l=n(19666),p=n(85893);function h(e){let{children:t}=e;const n=d(),o={portal:r.r.portal,locale:{default:"en"},session:{type:"OAuth",clientId:r.r.user.client_id,authToken:n,handleRefreshToken:a},theme:m.Z,handleAnonymousAction:()=>{alert("Anonymous action")}};return(0,p.jsx)(l.Z,{children:()=>(0,p.jsx)(u.ZP,{conf:o,children:t})})}},27331:(e,t,n)=>{"use strict";n.d(t,{r:()=>o});const o={user:{username:"beatrice",password:"Password!!Beatrice2021",client_id:"8HXeelXaQldhQmiSJDMhqNboELvDH402WIQIORFF",grant_type:"password"},portal:"https://api.fashionista.community"}},38997:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var o=n(85893),r=n(11151);n(67294),n(19666);n(92991);const s={sidebar_label:"Category Trending Feed Widget",sidebar_position:1,title:"Category Trending Feed Widget"},i=void 0,a={id:"sdk/community-js/react-ui/Components/CategoryTrendingFeed",title:"Category Trending Feed Widget",description:"The Category Trending Feed Widget renders a specific category's trending posts, discussions, statuses list.",source:"@site/docs/sdk/community-js/react-ui/Components/CategoryTrendingFeed.mdx",sourceDirName:"sdk/community-js/react-ui/Components",slug:"/sdk/community-js/react-ui/Components/CategoryTrendingFeed",permalink:"/docs/sdk/community-js/react-ui/Components/CategoryTrendingFeed",draft:!1,unlisted:!1,editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/sdk/community-js/react-ui/Components/CategoryTrendingFeed.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Category Trending Feed Widget",sidebar_position:1,title:"Category Trending Feed Widget"},sidebar:"sdkSidebar",previous:{title:"Category Header",permalink:"/docs/sdk/community-js/react-ui/Components/CategoryHeader"},next:{title:"Category Trending Users Widget",permalink:"/docs/sdk/community-js/react-ui/Components/CategoryTrendingUsers"}},c={},d=[{value:"Usage",id:"usage",level:4}];function u(e){const t={blockquote:"blockquote",code:"code",h4:"h4",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsxs)(t.p,{children:["The Category Trending Feed Widget renders a specific category's trending posts, discussions, statuses list.",(0,o.jsx)("br",{}),'\nThis list is composed of feed object items containing the avatar and username of the author, the item content, the date of creation of the same\nand a "comment" button that allows users to browse to the post, discussion or status extended version.',(0,o.jsx)("br",{}),'\nThe feed objects are shown in an orderly manner: few items are shown in the main card while the others can be displayed in a modal card by clicking on the "show more" button.']}),"\n"]}),"\n","\n","\n",(0,o.jsx)(t.h4,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-jsx",children:" import React from 'react';\n import {SCContextProvider} from '@selfcommunity/react-core';\n import {CategoryTrendingFeedWidget} from '@selfcommunity/react-ui';\n\n function App() {\n   const conf = {\n     portal: '<community-path>',\n     session: {\n       type: 'OAuth',\n       token: '<community-token>',\n       refreshToken: '<community-refresh-token>',\n       refreshTokenEndpoint: '<community-refresh-endpoint>',\n     },\n   };\n   return (\n     <SCContextProvider conf={conf}><CategoryTrendingFeedWidget /></SCContextProvider>\n   );\n }\n"})})]})}function m(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},70172:()=>{},2001:()=>{},33779:()=>{},66558:()=>{},82258:()=>{}}]);