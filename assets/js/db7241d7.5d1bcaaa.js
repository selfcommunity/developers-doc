"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[63114],{52169:function(e,n,o){o.d(n,{Z:function(){return l}});var t=o(67294),r=o(99510),i=o(5730);function s(e,n){void 0===e&&(e=""),void 0===n&&(n={});var o=Object.keys(n).map((function(e){return encodeURIComponent(e)+"="+encodeURIComponent(n[e])})).join("&");return fetch(e,{method:"POST",headers:{accept:"application/json","content-type":"application/x-www-form-urlencoded"},body:o})}function c(){if((0,i.Z)()){var e={refresh_token:JSON.parse(window.localStorage.getItem("token")).refresh_token,client_id:r.r.user.client_id,grant_type:"refresh_token"};return s(r.r.portal+"/oauth/token/",e).then((function(e){return e.json()})).then((function(e){return{accessToken:e.access_token,refreshToken:e.refresh_token,tokenType:e.token_type,expiresIn:e.expires_in}})).catch((function(e){return Promise.reject(e)}))}}var u=function(){if((0,i.Z)())return JSON.parse(window.localStorage.getItem("token"))};function a(){var e=(0,i.Z)(),n=(0,t.useState)(u),o=n[0],c=n[1];return(0,t.useEffect)((function(){e&&(!o||1e3*o.expiresIn<Date.now()?s(r.r.portal+"/oauth/token/",r.r.user).then((function(e){return e.json()})).then((function(e){return{accessToken:e.access_token,refreshToken:e.refresh_token,tokenType:e.token_type,expiresIn:e.expires_in}})).catch((function(e){return e})).then((function(e){c(e)})):c(u))}),[e]),(0,t.useEffect)((function(){e&&window.localStorage.setItem("token",JSON.stringify(o))}),[e,o]),o}var m=o(46105),p=o(19666);function l(e){var n=e.children,o=a(),i={portal:r.r.portal,locale:{default:"en"},session:{type:"OAuth",clientId:r.r.user.client_id,authToken:o,handleRefreshToken:c},theme:{},handleAnonymousAction:function(){alert("Anonymous action")}};return t.createElement(p.Z,null,(function(){return t.createElement(m.SCContextProvider,{conf:i},n)}))}},99510:function(e,n,o){o.d(n,{r:function(){return t}});var t={user:{username:"beatrice",password:"Password!!Beatrice2021",client_id:"8HXeelXaQldhQmiSJDMhqNboELvDH402WIQIORFF",grant_type:"password"},portal:"https://www.fashionista.community"}},62748:function(e,n,o){o.r(n),o.d(n,{assets:function(){return f},contentTitle:function(){return l},default:function(){return y},frontMatter:function(){return p},metadata:function(){return d},toc:function(){return k}});var t=o(87462),r=o(63366),i=o(67294),s=o(3905),c=o(19666);function u(){return i.createElement(c.Z,null,(function(){var e=o(78812).InlineComposer;return i.createElement(e,null)}))}var a=o(52169),m=["components"],p={sidebar_label:"Inline Composer",sidebar_position:1,title:"Inline Composer"},l=void 0,d={unversionedId:"sdk/community-ui/sc-ui/Components/InlineComposer",id:"sdk/community-ui/sc-ui/Components/InlineComposer",title:"Inline Composer",description:"The Inline Composer component renders an inline composer.",source:"@site/docs/sdk/community-ui/sc-ui/Components/InlineComposer.mdx",sourceDirName:"sdk/community-ui/sc-ui/Components",slug:"/sdk/community-ui/sc-ui/Components/InlineComposer",permalink:"/docs/sdk/community-ui/sc-ui/Components/InlineComposer",editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/sdk/community-ui/sc-ui/Components/InlineComposer.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Inline Composer",sidebar_position:1,title:"Inline Composer"},sidebar:"sdkSidebar",previous:{title:"Friendship User Button",permalink:"/docs/sdk/community-ui/sc-ui/Components/FriendshipUserButton"},next:{title:"Loyalty Program",permalink:"/docs/sdk/community-ui/sc-ui/Components/LoyaltyProgram"}},f={},k=[{value:"Usage",id:"usage",level:4}],h={toc:k};function y(e){var n=e.components,o=(0,r.Z)(e,m);return(0,s.kt)("wrapper",(0,t.Z)({},h,o,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"The Inline Composer component renders an inline composer.")),(0,s.kt)(a.Z,{mdxType:"Logged"},(0,s.kt)(u,{mdxType:"InlineComposer"})),(0,s.kt)("h4",{id:"usage"},"Usage"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx"}," import React from 'react';\n import {SCContextProvider} from '@selfcommunity/core';\n import {InlineComposer} from '@selfcommunity/ui';\n\n function App() {\n   const conf = {\n     portal: '<community-path>',\n     session: {\n       type: 'OAuth',\n       token: '<community-token>',\n       refreshToken: '<community-refresh-token>',\n       refreshTokenEndpoint: '<community-refresh-endpoint>',\n     },\n   };\n   return (\n     <SCContextProvider conf={conf}><InlineComposer /></SCContextProvider>\n   );\n }\n")))}y.isMDXComponent=!0}}]);