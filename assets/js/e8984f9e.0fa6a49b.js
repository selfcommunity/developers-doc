"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[17379],{92991:(e,t,n)=>{n.d(t,{Z:()=>p});var o=n(67294),s=n(27331),r=n(5730);function c(e,t){void 0===e&&(e=""),void 0===t&&(t={});const n=Object.keys(t).map((e=>encodeURIComponent(e)+"="+encodeURIComponent(t[e]))).join("&");return fetch(e,{method:"POST",headers:{accept:"application/json","content-type":"application/x-www-form-urlencoded"},body:n})}function i(){if((0,r.Z)()){const e={refresh_token:JSON.parse(window.localStorage.getItem("token")).refresh_token,client_id:s.r.user.client_id,grant_type:"refresh_token"};return c(`${s.r.portal}/oauth/token/`,e).then((e=>e.json())).then((e=>({accessToken:e.access_token,refreshToken:e.refresh_token,tokenType:e.token_type,expiresIn:e.expires_in}))).catch((e=>Promise.reject(e)))}}function a(){const e=(0,r.Z)(),[t,n]=(0,o.useState)(e?JSON.parse(window.localStorage.getItem("token")):"");return(0,o.useEffect)((()=>{e&&(!t||1e3*t.expiresIn<Date.now()?c(`${s.r.portal}/oauth/token/`,s.r.user).then((e=>e.json())).then((e=>({accessToken:e.access_token,refreshToken:e.refresh_token,tokenType:e.token_type,expiresIn:e.expires_in}))).catch((e=>e)).then((e=>{n(e)})):e&&n(JSON.parse(window.localStorage.getItem("token"))))}),[e]),(0,o.useEffect)((()=>{e&&window.localStorage.setItem("token",JSON.stringify(t))}),[e,t]),t}var m=n(76171),d=n(89521),l=n(19666),u=n(85893);function p(e){let{children:t}=e;const n=a(),o={portal:s.r.portal,locale:{default:"en"},session:{type:"OAuth",clientId:s.r.user.client_id,authToken:n,handleRefreshToken:i},theme:d.Z,handleAnonymousAction:()=>{alert("Anonymous action")}};return(0,u.jsx)(l.Z,{children:()=>(0,u.jsx)(m.ZP,{conf:o,children:t})})}},27331:(e,t,n)=>{n.d(t,{r:()=>o});const o={user:{username:"beatrice",password:"Password!!Beatrice2021",client_id:"XJjPE54IBBjhibs0Rf0wZ969cZNPq6WjC02FrkaM",grant_type:"password"},portal:"https://api.fashionista.community"}},37626:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>m,toc:()=>l});var o=n(85893),s=n(11151),r=n(92991),c=n(87459);const i={sidebar_label:"Comment Object",sidebar_position:1,title:"Comment Object"},a=void 0,m={id:"sdk/community-js/react-ui/Components/CommentObject",title:"Comment Object",description:"The Comment Object component renders a comment item.",source:"@site/docs/sdk/community-js/react-ui/Components/CommentObject.mdx",sourceDirName:"sdk/community-js/react-ui/Components",slug:"/sdk/community-js/react-ui/Components/CommentObject",permalink:"/docs/sdk/community-js/react-ui/Components/CommentObject",draft:!1,unlisted:!1,editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/sdk/community-js/react-ui/Components/CommentObject.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Comment Object",sidebar_position:1,title:"Comment Object"},sidebar:"sdkSidebar",previous:{title:"Change Picture",permalink:"/docs/sdk/community-js/react-ui/Components/ChangePicture"},next:{title:"Comments Feed Object",permalink:"/docs/sdk/community-js/react-ui/Components/CommentsFeedObject"}},d={},l=[{value:"Usage",id:"usage",level:4}];function u(e){const t={blockquote:"blockquote",code:"code",h4:"h4",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsxs)(t.p,{children:["The Comment Object component renders a comment item.",(0,o.jsx)("br",{}),"\nIt is composed of a section containing the avatar and username of the author, the body of the comment and the date of creation of the same.\nThere are also various actions that can be performed, such as reply and like, which are represented by icons and text.\nMoreover, through the top right menu it is possible to flag, hide or delete the comment item."]}),"\n"]}),"\n","\n","\n",(0,o.jsx)(r.Z,{children:(0,o.jsx)(c.Z,{commentObjectId:70,feedObjectType:"discussion"})}),"\n",(0,o.jsx)(t.h4,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-jsx",children:" import React from 'react';\n import {SCContextProvider} from '@selfcommunity/react-core';\n import {CommentObject} from '@selfcommunity/react-ui';\n\n function App() {\n   const conf = {\n     portal: '<community-path>',\n     session: {\n       type: 'OAuth',\n       token: '<community-token>',\n       refreshToken: '<community-refresh-token>',\n       refreshTokenEndpoint: '<community-refresh-endpoint>',\n     },\n   };\n   return (\n     <SCContextProvider conf={conf}><CommentObject /></SCContextProvider>\n   );\n }\n"})})]})}function p(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},48885:(e,t,n)=>{n.d(t,{Z:()=>f});var o=n(80102),s=n(83117),r=n(67294),c=n(63961),i=n(94780),a=n(90948),m=n(28628),d=n(84592),l=n(59773),u=n(85893);const p=["className"],h=(0,a.ZP)("div",{name:"MuiListItemIcon",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,"flex-start"===n.alignItems&&t.alignItemsFlexStart]}})((({theme:e,ownerState:t})=>(0,s.Z)({minWidth:56,color:(e.vars||e).palette.action.active,flexShrink:0,display:"inline-flex"},"flex-start"===t.alignItems&&{marginTop:8}))),f=r.forwardRef((function(e,t){const n=(0,m.i)({props:e,name:"MuiListItemIcon"}),{className:a}=n,f=(0,o.Z)(n,p),k=r.useContext(l.Z),j=(0,s.Z)({},n,{alignItems:k.alignItems}),b=(e=>{const{alignItems:t,classes:n}=e,o={root:["root","flex-start"===t&&"alignItemsFlexStart"]};return(0,i.Z)(o,d.f,n)})(j);return(0,u.jsx)(h,(0,s.Z)({className:(0,c.Z)(b.root,a),ownerState:j,ref:t},f))}))}}]);