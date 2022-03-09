"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[66189],{52169:function(e,n,t){t.d(n,{Z:function(){return f}});var o=t(67294),i=t(99510),r=t(5730);function s(e,n){void 0===e&&(e=""),void 0===n&&(n={});var t=Object.keys(n).map((function(e){return encodeURIComponent(e)+"="+encodeURIComponent(n[e])})).join("&");return fetch(e,{method:"POST",headers:{accept:"application/json","content-type":"application/x-www-form-urlencoded"},body:t})}function c(){if((0,r.Z)()){var e={refresh_token:JSON.parse(window.localStorage.getItem("token")).refresh_token,client_id:i.r.user.client_id,grant_type:"refresh_token"};return s(i.r.portal+"/oauth/token/",e).then((function(e){return e.json()})).then((function(e){return{accessToken:e.access_token,refreshToken:e.refresh_token,tokenType:e.token_type,expiresIn:e.expires_in}})).catch((function(e){return Promise.reject(e)}))}}var a=function(){if((0,r.Z)())return JSON.parse(window.localStorage.getItem("token"))};function u(){var e=(0,r.Z)(),n=(0,o.useState)(a),t=n[0],c=n[1];return(0,o.useEffect)((function(){e&&(!t||1e3*t.expiresIn<Date.now()?s(i.r.portal+"/oauth/token/",i.r.user).then((function(e){return e.json()})).then((function(e){return{accessToken:e.access_token,refreshToken:e.refresh_token,tokenType:e.token_type,expiresIn:e.expires_in}})).catch((function(e){return e})).then((function(e){c(e)})):c(a))}),[e]),(0,o.useEffect)((function(){e&&window.localStorage.setItem("token",JSON.stringify(t))}),[e,t]),t}var p=t(46105),m=t(19666);function f(e){var n=e.children,t=u(),r={portal:i.r.portal,locale:{default:"en"},session:{type:"OAuth",clientId:i.r.user.client_id,authToken:t,handleRefreshToken:c},theme:{palette:{primary:{main:"#7baa5d"},secondary:{main:"#4a8f62"}},components:{MuiIcon:{defaultProps:{baseClassName:"material-icons-outlined"}}}},handleAnonymousAction:function(){alert("Anonymous action")}};return o.createElement(m.Z,null,(function(){return o.createElement(p.SCContextProvider,{conf:r},n)}))}},99510:function(e,n,t){t.d(n,{r:function(){return o}});var o={user:{username:"beatrice",password:"Password!!Beatrice2021",client_id:"8HXeelXaQldhQmiSJDMhqNboELvDH402WIQIORFF",grant_type:"password"},portal:"https://www.fashionista.community"}},24966:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return f},default:function(){return y},frontMatter:function(){return m},metadata:function(){return d},toc:function(){return k}});var o=t(87462),i=t(63366),r=t(67294),s=t(3905),c=t(19666);function a(){return r.createElement(c.Z,null,(function(){var e=t(78812).SnippetNotifications;return r.createElement(e,null)}))}var u=t(52169),p=["components"],m={sidebar_label:"Snippet Notifications",sidebar_position:1,title:"Snippet Notifications"},f=void 0,d={unversionedId:"sdk/community-ui/sc-ui/Components/SnippetNotifications",id:"sdk/community-ui/sc-ui/Components/SnippetNotifications",title:"Snippet Notifications",description:"The Snippet Notifications component renders snippet notifications.",source:"@site/docs/sdk/community-ui/sc-ui/Components/SnippetNotifications.mdx",sourceDirName:"sdk/community-ui/sc-ui/Components",slug:"/sdk/community-ui/sc-ui/Components/SnippetNotifications",permalink:"/docs/sdk/community-ui/sc-ui/Components/SnippetNotifications",editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/sdk/community-ui/sc-ui/Components/SnippetNotifications.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Snippet Notifications",sidebar_position:1,title:"Snippet Notifications"},sidebar:"sdkSidebar",previous:{title:"Related Discussion",permalink:"/docs/sdk/community-ui/sc-ui/Components/RelatedDiscussion"},next:{title:"Snippets",permalink:"/docs/sdk/community-ui/sc-ui/Components/Snippets"}},l={},k=[{value:"Usage",id:"usage",level:4}],h={toc:k};function y(e){var n=e.components,t=(0,i.Z)(e,p);return(0,s.kt)("wrapper",(0,o.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"The Snippet Notifications component renders snippet notifications.")),(0,s.kt)(u.Z,{mdxType:"Logged"},(0,s.kt)(a,{mdxType:"SnippetNotifications"})),(0,s.kt)("h4",{id:"usage"},"Usage"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx"}," import React from 'react';\n import {SCContextProvider} from '@selfcommunity/core';\n import {SnippetNotifications} from '@selfcommunity/ui';\n\n function App() {\n   const conf = {\n     portal: '<community-path>',\n     session: {\n       type: 'OAuth',\n       token: '<community-token>',\n       refreshToken: '<community-refresh-token>',\n       refreshTokenEndpoint: '<community-refresh-endpoint>',\n     },\n   };\n   return (\n     <SCContextProvider conf={conf}><SnippetNotifications /></SCContextProvider>\n   );\n }\n")))}y.isMDXComponent=!0}}]);