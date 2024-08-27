"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[40068],{49833:(t,e,n)=>{n.d(e,{Z:()=>a});n(67294);var i=n(76171),o=n(27331),s=n(89521),r=n(19666),c=n(85893);function a(t){let{children:e}=t;const n={portal:o.r.portal,locale:{default:"en"},session:{type:"OAuth",clientId:o.r.user.client_id},theme:s.Z,handleAnonymousAction:()=>{alert("Anonymous action")}};return(0,c.jsx)(r.Z,{children:()=>(0,c.jsx)(i.ZP,{conf:n,children:e})})}},27331:(t,e,n)=>{n.d(e,{r:()=>i});const i={user:{username:"beatrice",password:"Password!!Beatrice2021",client_id:"XJjPE54IBBjhibs0Rf0wZ969cZNPq6WjC02FrkaM",grant_type:"password"},portal:"https://api.fashionista.community"}},62454:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>a,default:()=>l,frontMatter:()=>c,metadata:()=>p,toc:()=>m});var i=n(85893),o=n(11151),s=n(49833),r=n(87430);const c={sidebar_label:"Snippet Notifications",sidebar_position:1,title:"Snippet Notifications"},a=void 0,p={id:"sdk/community-js/react-ui/Components/SnippetNotifications",title:"Snippet Notifications",description:"The Snippet Notifications component renders the notification list.",source:"@site/docs/sdk/community-js/react-ui/Components/SnippetNotifications.mdx",sourceDirName:"sdk/community-js/react-ui/Components",slug:"/sdk/community-js/react-ui/Components/SnippetNotifications",permalink:"/docs/sdk/community-js/react-ui/Components/SnippetNotifications",draft:!1,unlisted:!1,editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/sdk/community-js/react-ui/Components/SnippetNotifications.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Snippet Notifications",sidebar_position:1,title:"Snippet Notifications"},sidebar:"sdkSidebar",previous:{title:"Related Feed Objects Widget",permalink:"/docs/sdk/community-js/react-ui/Components/RelatedFeedObjects"},next:{title:"Private Message Snippets",permalink:"/docs/sdk/community-js/react-ui/Components/Snippets"}},d={},m=[{value:"Usage",id:"usage",level:4}];function u(t){const e={blockquote:"blockquote",code:"code",h4:"h4",p:"p",pre:"pre",...(0,o.a)(),...t.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsxs)(e.p,{children:["The Snippet Notifications component renders the notification list.",(0,i.jsx)("br",{}),"\nSnippet notifications items are composed of the user avatar and username and the notification content."]}),"\n"]}),"\n","\n","\n",(0,i.jsx)(s.Z,{children:(0,i.jsx)(r.Z,{})}),"\n",(0,i.jsx)(e.h4,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-jsx",children:" import React from 'react';\n import {SCContextProvider} from '@selfcommunity/react-core';\n import {SnippetNotifications} from '@selfcommunity/react-ui';\n\n function App() {\n   const conf = {\n     portal: '<community-path>',\n     session: {\n       type: 'OAuth',\n       token: '<community-token>',\n       refreshToken: '<community-refresh-token>',\n       refreshTokenEndpoint: '<community-refresh-endpoint>',\n     },\n   };\n   return (\n     <SCContextProvider conf={conf}><SnippetNotifications /></SCContextProvider>\n   );\n }\n"})})]})}function l(t={}){const{wrapper:e}={...(0,o.a)(),...t.components};return e?(0,i.jsx)(e,{...t,children:(0,i.jsx)(u,{...t})}):u(t)}}}]);