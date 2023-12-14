"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[30973],{92991:(e,n,t)=>{t.d(n,{Z:()=>p});var o=t(67294),s=t(27331),r=t(5730);function i(e,n){void 0===e&&(e=""),void 0===n&&(n={});const t=Object.keys(n).map((e=>encodeURIComponent(e)+"="+encodeURIComponent(n[e]))).join("&");return fetch(e,{method:"POST",headers:{accept:"application/json","content-type":"application/x-www-form-urlencoded"},body:t})}function a(){if((0,r.Z)()){const e={refresh_token:JSON.parse(window.localStorage.getItem("token")).refresh_token,client_id:s.r.user.client_id,grant_type:"refresh_token"};return i(`${s.r.portal}/oauth/token/`,e).then((e=>e.json())).then((e=>({accessToken:e.access_token,refreshToken:e.refresh_token,tokenType:e.token_type,expiresIn:e.expires_in}))).catch((e=>Promise.reject(e)))}}function c(){const e=(0,r.Z)(),[n,t]=(0,o.useState)(e?JSON.parse(window.localStorage.getItem("token")):"");return(0,o.useEffect)((()=>{e&&(!n||1e3*n.expiresIn<Date.now()?i(`${s.r.portal}/oauth/token/`,s.r.user).then((e=>e.json())).then((e=>({accessToken:e.access_token,refreshToken:e.refresh_token,tokenType:e.token_type,expiresIn:e.expires_in}))).catch((e=>e)).then((e=>{t(e)})):e&&t(JSON.parse(window.localStorage.getItem("token"))))}),[e]),(0,o.useEffect)((()=>{e&&window.localStorage.setItem("token",JSON.stringify(n))}),[e,n]),n}var l=t(53704),u=t(21367),m=t(19666),d=t(85893);function p(e){let{children:n}=e;const t=c(),o={portal:s.r.portal,locale:{default:"en"},session:{type:"OAuth",clientId:s.r.user.client_id,authToken:t,handleRefreshToken:a},theme:u.Z,handleAnonymousAction:()=>{alert("Anonymous action")}};return(0,d.jsx)(m.Z,{children:()=>(0,d.jsx)(l.ZP,{conf:o,children:n})})}},27331:(e,n,t)=>{t.d(n,{r:()=>o});const o={user:{username:"beatrice",password:"Password!!Beatrice2021",client_id:"XJjPE54IBBjhibs0Rf0wZ969cZNPq6WjC02FrkaM",grant_type:"password"},portal:"https://api.fashionista.community"}},13726:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>m});var o=t(85893),s=t(11151),r=t(92991),i=t(93132);const a={sidebar_label:"Inline Composer",sidebar_position:1,title:"Inline Composer"},c=void 0,l={id:"sdk/community-js/react-ui/Components/InlineComposer",title:"Inline Composer",description:"The Inline Composer component renders the section used for feed objects creation.",source:"@site/docs/sdk/community-js/react-ui/Components/InlineComposer.mdx",sourceDirName:"sdk/community-js/react-ui/Components",slug:"/sdk/community-js/react-ui/Components/InlineComposer",permalink:"/docs/sdk/community-js/react-ui/Components/InlineComposer",draft:!1,unlisted:!1,editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/sdk/community-js/react-ui/Components/InlineComposer.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Inline Composer",sidebar_position:1,title:"Inline Composer"},sidebar:"sdkSidebar",previous:{title:"Incubators List",permalink:"/docs/sdk/community-js/react-ui/Components/IncubatorsList"},next:{title:"Location Autocomplete",permalink:"/docs/sdk/community-js/react-ui/Components/LocationAutocomplete"}},u={},m=[{value:"Usage",id:"usage",level:4}];function d(e){const n={blockquote:"blockquote",code:"code",h4:"h4",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"The Inline Composer component renders the section used for feed objects creation.\nThrough this component users are able to create their contents"}),"\n"]}),"\n","\n","\n",(0,o.jsx)(r.Z,{children:(0,o.jsx)(i.Z,{})}),"\n",(0,o.jsx)(n.h4,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",children:" import React from 'react';\n import {SCContextProvider} from '@selfcommunity/react-core';\n import {InlineComposerWidget} from '@selfcommunity/react-ui';\n\n function App() {\n   const conf = {\n     portal: '<community-path>',\n     session: {\n       type: 'OAuth',\n       token: '<community-token>',\n       refreshToken: '<community-refresh-token>',\n       refreshTokenEndpoint: '<community-refresh-endpoint>',\n     },\n   };\n   return (\n     <SCContextProvider conf={conf}><InlineComposerWidget /></SCContextProvider>\n   );\n }\n"})})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},31717:(e,n,t)=>{t.d(n,{B:()=>o});const o="SCInlineComposerWidget"},93132:(e,n,t)=>{t.d(n,{Z:()=>x});var o=t(97582),s=t(67294),r=t(53704),i=t(68689),a=t(41538),c=t(65580),l=t(97265),u=t(12132),m=t(44267),d=t(5616),p=t(69417),h=t(87952),f=t(90948),k=t(44012),C=t(20377),b=t(63902),g=t(29628),j=t(9181),y=t(22461),I=t(70815),v=t(31717);const Z={root:`${v.B}-root`,content:`${v.B}-content`,input:`${v.B}-input`,avatar:`${v.B}-avatar`},_=(0,f.ZP)(b.Z,{name:v.B,slot:"Root"})((()=>({})));const x=function(e){const n=(0,g.Z)({props:e,name:v.B}),{mediaObjectTypes:t=[y.Z,I.Z],defaultValue:f,onSuccess:b=null}=n,x=(0,o._T)(n,["mediaObjectTypes","defaultValue","onSuccess"]),E=(0,r.RM)(),S=(0,i.LD)(),T=(0,a.sy)(),{enqueueSnackbar:w}=(0,C.Ds)(),[O,B]=(0,s.useState)(!1),N=(0,s.useCallback)((()=>{S.user?c.IT(S.user)?w(s.createElement(k.Z,{id:"ui.common.userBlocked",defaultMessage:"ui.common.userBlocked"}),{variant:"warning",autoHideDuration:3e3}):B(!0):E.settings.handleAnonymousAction()}),[S.user,E.settings]),P=(0,s.useCallback)((()=>{B(!1)}),[]);return s.createElement(s.Fragment,null,s.createElement(_,Object.assign({className:Z.root},x),s.createElement(m.Z,{className:Z.content},s.createElement(d.Z,{className:Z.input},s.createElement(p.Z,{variant:"text",disableFocusRipple:!0,disableRipple:!0,disableElevation:!0,onClick:N,fullWidth:!0,color:"inherit"},s.createElement(k.Z,{id:"ui.inlineComposerWidget.label",defaultMessage:"ui.inlineComposerWidget.label"}))),s.createElement(d.Z,{className:Z.avatar},S.user?s.createElement(l.Z,{to:T.url(u.USER_PROFILE_ROUTE_NAME,S.user)},s.createElement(h.Z,{alt:S.user.username,variant:"circular",src:S.user.avatar})):s.createElement(h.Z,{variant:"circular"})))),s.createElement(j.Z,{open:O,mediaObjectTypes:t,defaultValue:f,fullWidth:!0,onClose:P,onSuccess:e=>{b?b(e):w(s.createElement(k.Z,{id:"ui.inlineComposerWidget.success",defaultMessage:"ui.inlineComposerWidget.success"}),{variant:"success",autoHideDuration:3e3}),B(!1)}}))}}}]);