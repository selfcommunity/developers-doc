"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[86547],{49833:(e,t,o)=>{o.d(t,{Z:()=>i});o(67294);var r=o(53704),n=o(27331),a=o(42464),c=o(19666),s=o(85893);function i(e){let{children:t}=e;const o={portal:n.r.portal,locale:{default:"en"},session:{type:"OAuth",clientId:n.r.user.client_id},theme:a.Z,handleAnonymousAction:()=>{alert("Anonymous action")}};return(0,s.jsx)(c.Z,{children:()=>(0,s.jsx)(r.ZP,{conf:o,children:t})})}},27331:(e,t,o)=>{o.d(t,{r:()=>r});const r={user:{username:"beatrice",password:"Password!!Beatrice2021",client_id:"XJjPE54IBBjhibs0Rf0wZ969cZNPq6WjC02FrkaM",grant_type:"password"},portal:"https://api.fashionista.community"}},13418:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>N,contentTitle:()=>C,default:()=>F,frontMatter:()=>Z,metadata:()=>k,toc:()=>P});var r=o(85893),n=o(11151),a=o(49833),c=o(97582),s=o(67294),i=o(90948),u=o(68787),m=o(5616),l=o(46901),d=o(25662),p=o(94184),f=o.n(p),v=o(86896),h=o(44012),b=o(11022),g=o(29628),y=o(63452),A=o(59488);const R="SCAccountRecover",T={root:`${R}-root`,form:`${R}-form`,email:`${R}-email`,success:`${R}-success`},j=(0,i.ZP)(m.Z,{name:R,slot:"Root",overridesResolver:(e,t)=>t.root})((({theme:e})=>({[`& .${T.form} .MuiTextField-root, &.${T.root} .MuiButton-root`]:{margin:e.spacing(1,0,1,0)},[`& .${T.form} .MuiTypography-root`]:{margin:e.spacing(1,0,1,0)}})));const x=function(e){const t=(0,g.Z)({props:e,name:R}),{className:o,onSuccess:r=null,TextFieldProps:n={variant:"outlined",fullWidth:!0},ButtonProps:a={variant:"contained"},successAction:i=null}=t,m=(0,c._T)(t,["className","onSuccess","TextFieldProps","ButtonProps","successAction"]),[p,x]=(0,s.useState)(""),[Z,C]=(0,s.useState)(""),[k,N]=(0,s.useState)(!1),[P,E]=(0,s.useState)(!1),F=(0,u.LD)(),D=(0,v.Z)();return null!==F.user?null:s.createElement(j,Object.assign({className:f()(T.root,o)},m),P?s.createElement(l.Z,{severity:"success",className:T.success},D.formatMessage({id:"ui.accountRecover.success",defaultMessage:"ui.accountRecover.success"},{email:p,b:e=>s.createElement("b",null,e)}),i):s.createElement("form",{className:T.form,onSubmit:e=>(e.preventDefault(),e.stopPropagation(),N(!0),y.Z.recover({email:p}).then((()=>{E(!0),r&&r()})).catch((e=>{const t=(0,A.yt)(e);t.emailError&&C(t.emailError.error)})).then((()=>N(!1))),!1)},s.createElement(b.Z,Object.assign({className:T.email,disabled:k,label:s.createElement(h.Z,{id:"ui.accountRecover.email.label",defaultMessage:"ui.accountRecover.email.label"})},n,{value:p,onChange:e=>{x(e.target.value),C("")},error:Boolean(Z),helperText:Z&&s.createElement(h.Z,{id:`ui.accountRecover.email.error.${Z}`,defaultMessage:`ui.accountRecover.email.error.${Z}`})})),s.createElement(d.Z,Object.assign({type:"submit"},a,{disabled:!p||Boolean(Z)||k}),s.createElement(h.Z,{id:"ui.accountRecover.submit",defaultMessage:"ui.accountRecover.submit"}))))},Z={sidebar_label:"Account Recover",sidebar_position:1,title:"Account Recover"},C=void 0,k={id:"sdk/community-js/react-ui/Components/AccountRecover",title:"Account Recover",description:"The Account Recover component allows users to recover their account with their email.",source:"@site/docs/sdk/community-js/react-ui/Components/AccountRecover.mdx",sourceDirName:"sdk/community-js/react-ui/Components",slug:"/sdk/community-js/react-ui/Components/AccountRecover",permalink:"/docs/sdk/community-js/react-ui/Components/AccountRecover",draft:!1,unlisted:!1,editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/sdk/community-js/react-ui/Components/AccountRecover.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Account Recover",sidebar_position:1,title:"Account Recover"},sidebar:"sdkSidebar",previous:{title:"Account Delete",permalink:"/docs/sdk/community-js/react-ui/Components/AccountDelete"},next:{title:"Account Reset",permalink:"/docs/sdk/community-js/react-ui/Components/AccountReset"}},N={},P=[{value:"Usage",id:"usage",level:4}];function E(e){const t={blockquote:"blockquote",code:"code",h4:"h4",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["The Account Recover component allows users to recover their account with their email.",(0,r.jsx)("br",{}),'\nThis component is composed of a simple email form and a "recover account" button that submits the request.']}),"\n"]}),"\n","\n","\n",(0,r.jsx)(a.Z,{children:(0,r.jsx)(x,{})}),"\n",(0,r.jsx)(t.h4,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-jsx",children:" import React from 'react';\n import {SCContextProvider} from '@selfcommunity/react-core';\n import {AccountRecover} from '@selfcommunity/react-ui';\n\n function App() {\n   const conf = {\n     portal: '<community-path>',\n     session: {\n       type: 'OAuth',\n       token: '<community-token>',\n       refreshToken: '<community-refresh-token>',\n       refreshTokenEndpoint: '<community-refresh-endpoint>',\n     },\n   };\n   return (\n     <SCContextProvider conf={conf}><AccountRecover /></SCContextProvider>\n   );\n }\n"})})]})}function F(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(E,{...e})}):E(e)}},29069:(e,t,o)=>{o.d(t,{C:()=>r,M:()=>n});const r=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,n=/^[_-]*[a-zA-Z0-9]+[a-zA-Z0-9_-]*$/},11022:(e,t,o)=>{o.d(t,{Z:()=>d});var r=o(97582),n=o(67294),a=o(90948),c=o(77931),s=o(54490),i=o(86896),u=o(29069);const m=(0,s.vU)({emailError:{id:"ui.common.error.email",defaultMessage:"ui.common.error.email"}}),l=(0,a.ZP)(c.Z,{name:"SCEmailTextField",slot:"Root",overridesResolver:(e,t)=>t.root})((({theme:e})=>({})));function d(e){const{onChange:t,error:o=!1,helperText:a=null}=e,c=(0,r._T)(e,["onChange","error","helperText"]),[s,d]=(0,n.useState)(null),p=(0,i.Z)();return n.createElement(l,Object.assign({},c,{onChange:e=>{e.target.value&&!u.C.test(e.target.value)?d(p.formatMessage(m.emailError)):null!==o&&d(null),t&&t(e)},error:Boolean(s)||o,helperText:s||a}))}},54490:(e,t,o)=>{o.d(t,{Ji:()=>d,qN:()=>p,vU:()=>l});var r,n,a=o(25719),c=o(67294),s=o(86896);!function(e){e.formatDate="FormattedDate",e.formatTime="FormattedTime",e.formatNumber="FormattedNumber",e.formatList="FormattedList",e.formatDisplayName="FormattedDisplayName"}(r||(r={})),function(e){e.formatDate="FormattedDateParts",e.formatTime="FormattedTimeParts",e.formatNumber="FormattedNumberParts",e.formatList="FormattedListParts"}(n||(n={}));var i=function(e){var t=(0,s.Z)(),o=e.value,r=e.children,n=(0,a._T)(e,["value","children"]);return r(t.formatNumberToParts(o,n))};i.displayName="FormattedNumberParts";function u(e){var t=function(t){var o=(0,s.Z)(),r=t.value,n=t.children,c=(0,a._T)(t,["value","children"]),i="string"==typeof r?new Date(r||0):r;return n("formatDate"===e?o.formatDateToParts(i,c):o.formatTimeToParts(i,c))};return t.displayName=n[e],t}function m(e){var t=function(t){var o=(0,s.Z)(),r=t.value,n=t.children,i=(0,a._T)(t,["value","children"]),u=o[e](r,i);if("function"==typeof n)return n(u);var m=o.textComponent||c.Fragment;return c.createElement(m,null,u)};return t.displayName=r[e],t}function l(e){return e}i.displayName="FormattedNumberParts";var d=m("formatDate"),p=m("formatTime");m("formatNumber"),m("formatList"),m("formatDisplayName"),u("formatDate"),u("formatTime")}}]);