(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[95089],{92991:(e,t,o)=>{"use strict";o.d(t,{Z:()=>h});var n=o(67294),s=o(27331),r=o(5730);function i(e,t){void 0===e&&(e=""),void 0===t&&(t={});const o=Object.keys(t).map((e=>encodeURIComponent(e)+"="+encodeURIComponent(t[e]))).join("&");return fetch(e,{method:"POST",headers:{accept:"application/json","content-type":"application/x-www-form-urlencoded"},body:o})}function a(){if((0,r.Z)()){const e={refresh_token:JSON.parse(window.localStorage.getItem("token")).refresh_token,client_id:s.r.user.client_id,grant_type:"refresh_token"};return i(`${s.r.portal}/oauth/token/`,e).then((e=>e.json())).then((e=>({accessToken:e.access_token,refreshToken:e.refresh_token,tokenType:e.token_type,expiresIn:e.expires_in}))).catch((e=>Promise.reject(e)))}}const c=()=>{if((0,r.Z)())return JSON.parse(window.localStorage.getItem("token"))};function l(){const e=(0,r.Z)(),[t,o]=(0,n.useState)(c);return(0,n.useEffect)((()=>{e&&(!t||1e3*t.expiresIn<Date.now()?i(`${s.r.portal}/oauth/token/`,s.r.user).then((e=>e.json())).then((e=>({accessToken:e.access_token,refreshToken:e.refresh_token,tokenType:e.token_type,expiresIn:e.expires_in}))).catch((e=>e)).then((e=>{o(e)})):o(c))}),[e]),(0,n.useEffect)((()=>{e&&window.localStorage.setItem("token",JSON.stringify(t))}),[e,t]),t}var d=o(21770),u=o(21367),p=o(19666),m=o(85893);function h(e){let{children:t}=e;const o=l(),n={portal:s.r.portal,locale:{default:"en"},session:{type:"OAuth",clientId:s.r.user.client_id,authToken:o,handleRefreshToken:a},theme:u.Z,handleAnonymousAction:()=>{alert("Anonymous action")}};return(0,m.jsx)(p.Z,{children:()=>(0,m.jsx)(d.ZP,{conf:n,children:t})})}},27331:(e,t,o)=>{"use strict";o.d(t,{r:()=>n});const n={user:{username:"beatrice",password:"Password!!Beatrice2021",client_id:"8HXeelXaQldhQmiSJDMhqNboELvDH402WIQIORFF",grant_type:"password"},portal:"https://api.fashionista.community"}},22908:(e,t,o)=>{"use strict";o.r(t),o.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>d,toc:()=>p});var n=o(85893),s=o(11151),r=o(92991),i=(o(67294),o(19666));function a(){return(0,n.jsx)(i.Z,{children:()=>{const e=o(7885).Categories;return(0,n.jsx)(e,{showFilters:!0})}})}const c={sidebar_label:"Categories",sidebar_position:1,title:"Categories"},l=void 0,d={id:"sdk/community-js/react-ui/Components/Categories",title:"Categories",description:"The Categories  component renders the list of all available categories .",source:"@site/docs/sdk/community-js/react-ui/Components/Categories.mdx",sourceDirName:"sdk/community-js/react-ui/Components",slug:"/sdk/community-js/react-ui/Components/Categories",permalink:"/docs/sdk/community-js/react-ui/Components/Categories",draft:!1,unlisted:!1,editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/sdk/community-js/react-ui/Components/Categories.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Categories",sidebar_position:1,title:"Categories"},sidebar:"sdkSidebar",previous:{title:"Broadcast Messages",permalink:"/docs/sdk/community-js/react-ui/Components/BroadcastMessages"},next:{title:"Categories Popular Widget",permalink:"/docs/sdk/community-js/react-ui/Components/CategoriesPopular"}},u={},p=[{value:"Usage",id:"usage",level:4}];function m(e){const t={blockquote:"blockquote",code:"code",h4:"h4",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:["The Categories  component renders the list of all available categories .",(0,n.jsx)("br",{}),"\nThis list is composed of items containing category's image, title, info and a follow button, that allows users to follow/unfollow a category.",(0,n.jsx)("br",{}),"\nIf set as an option via props, at the top of the component will appear a search bar that allows the users to filter categories."]}),"\n"]}),"\n","\n","\n",(0,n.jsx)(r.Z,{children:(0,n.jsx)(a,{})}),"\n",(0,n.jsx)(t.h4,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-jsx",children:" import React from 'react';\n import {SCContextProvider} from '@selfcommunity/react-core';\n import {Categories} from '@selfcommunity/react-ui';\n\n function App() {\n   const conf = {\n     portal: '<community-path>',\n     session: {\n       type: 'OAuth',\n       token: '<community-token>',\n       refreshToken: '<community-refresh-token>',\n       refreshTokenEndpoint: '<community-refresh-endpoint>',\n     },\n   };\n   return (\n     <SCContextProvider conf={conf}><Categories /></SCContextProvider>\n   );\n }\n"})})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}},70172:()=>{},2001:()=>{},33779:()=>{},66558:()=>{},82258:()=>{}}]);