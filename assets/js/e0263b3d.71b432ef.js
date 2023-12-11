(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[56043],{92991:(e,t,n)=>{"use strict";n.d(t,{Z:()=>h});var o=n(67294),s=n(27331),r=n(5730);function i(e,t){void 0===e&&(e=""),void 0===t&&(t={});const n=Object.keys(t).map((e=>encodeURIComponent(e)+"="+encodeURIComponent(t[e]))).join("&");return fetch(e,{method:"POST",headers:{accept:"application/json","content-type":"application/x-www-form-urlencoded"},body:n})}function c(){if((0,r.Z)()){const e={refresh_token:JSON.parse(window.localStorage.getItem("token")).refresh_token,client_id:s.r.user.client_id,grant_type:"refresh_token"};return i(`${s.r.portal}/oauth/token/`,e).then((e=>e.json())).then((e=>({accessToken:e.access_token,refreshToken:e.refresh_token,tokenType:e.token_type,expiresIn:e.expires_in}))).catch((e=>Promise.reject(e)))}}const a=()=>{if((0,r.Z)())return JSON.parse(window.localStorage.getItem("token"))};function u(){const e=(0,r.Z)(),[t,n]=(0,o.useState)(a);return(0,o.useEffect)((()=>{e&&(!t||1e3*t.expiresIn<Date.now()?i(`${s.r.portal}/oauth/token/`,s.r.user).then((e=>e.json())).then((e=>({accessToken:e.access_token,refreshToken:e.refresh_token,tokenType:e.token_type,expiresIn:e.expires_in}))).catch((e=>e)).then((e=>{n(e)})):n(a))}),[e]),(0,o.useEffect)((()=>{e&&window.localStorage.setItem("token",JSON.stringify(t))}),[e,t]),t}var d=n(21770),l=n(21367),m=n(19666),p=n(85893);function h(e){let{children:t}=e;const n=u(),o={portal:s.r.portal,locale:{default:"en"},session:{type:"OAuth",clientId:s.r.user.client_id,authToken:n,handleRefreshToken:c},theme:l.Z,handleAnonymousAction:()=>{alert("Anonymous action")}};return(0,p.jsx)(m.Z,{children:()=>(0,p.jsx)(d.ZP,{conf:o,children:t})})}},27331:(e,t,n)=>{"use strict";n.d(t,{r:()=>o});const o={user:{username:"beatrice",password:"Password!!Beatrice2021",client_id:"8HXeelXaQldhQmiSJDMhqNboELvDH402WIQIORFF",grant_type:"password"},portal:"https://api.fashionista.community"}},35192:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>l,frontMatter:()=>r,metadata:()=>c,toc:()=>u});var o=n(85893),s=n(11151);n(67294),n(19666);n(92991);const r={sidebar_label:"Incubators List",sidebar_position:1,title:"Incubators List"},i=void 0,c={id:"sdk/community-js/react-ui/Components/IncubatorsList",title:"Incubators List",description:"The Incubators List component renders a list of incubators.",source:"@site/docs/sdk/community-js/react-ui/Components/IncubatorsList.mdx",sourceDirName:"sdk/community-js/react-ui/Components",slug:"/sdk/community-js/react-ui/Components/IncubatorsList",permalink:"/docs/sdk/community-js/react-ui/Components/IncubatorsList",draft:!1,unlisted:!1,editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/sdk/community-js/react-ui/Components/IncubatorsList.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Incubators List",sidebar_position:1,title:"Incubators List"},sidebar:"sdkSidebar",previous:{title:"Incubator Suggestion",permalink:"/docs/sdk/community-js/react-ui/Components/IncubatorSuggestion"},next:{title:"Inline Composer",permalink:"/docs/sdk/community-js/react-ui/Components/InlineComposer"}},a={},u=[{value:"Usage",id:"usage",level:4}];function d(e){const t={blockquote:"blockquote",code:"code",h4:"h4",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsxs)(t.p,{children:["The Incubators List component renders a list of incubators.",(0,o.jsx)("br",{}),"\nThis list is composed of items containing incubator's title, info, a subscription status bar and a subscribe button that allows users to subscribe/unsubscribe to an incubator.",(0,o.jsx)("br",{}),"\nBy clicking the incubator title it is possible to open a modal card showing the incubators details and a section where it is possible to share the item on social networks.",(0,o.jsx)("br",{}),'\nThe incubators are shown in an orderly manner: few items are shown in the main card while the others can be displayed in a modal card by clicking on the "show all" button.\nAt the card bottom there is also a "suggest a new topic" button that opens a modal composed of a form that allows users to propose a new interests.']}),"\n"]}),"\n","\n","\n",(0,o.jsx)(t.h4,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-jsx",children:" import React from 'react';\n import {SCContextProvider} from '@selfcommunity/react-core';\n import {IncubatorListWidget} from '@selfcommunity/react-ui';\n\n function App() {\n   const conf = {\n     portal: '<community-path>',\n     session: {\n       type: 'OAuth',\n       token: '<community-token>',\n       refreshToken: '<community-refresh-token>',\n       refreshTokenEndpoint: '<community-refresh-endpoint>',\n     },\n   };\n   return (\n     <SCContextProvider conf={conf}><IncubatorListWidget /></SCContextProvider>\n   );\n }\n"})})]})}function l(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},70172:()=>{},2001:()=>{},33779:()=>{},66558:()=>{},82258:()=>{}}]);