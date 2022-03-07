"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[37997],{52169:function(e,n,t){t.d(n,{Z:function(){return p}});var o=t(67294),r=t(99510),i=t(5730);function s(e,n){void 0===e&&(e=""),void 0===n&&(n={});var t=Object.keys(n).map((function(e){return encodeURIComponent(e)+"="+encodeURIComponent(n[e])})).join("&");return fetch(e,{method:"POST",headers:{accept:"application/json","content-type":"application/x-www-form-urlencoded"},body:t})}function c(){if((0,i.Z)()){var e={refresh_token:JSON.parse(window.localStorage.getItem("token")).refresh_token,client_id:r.r.user.client_id,grant_type:"refresh_token"};return s(r.r.portal+"/oauth/token/",e).then((function(e){return e.json()})).then((function(e){return{accessToken:e.access_token,refreshToken:e.refresh_token,tokenType:e.token_type,expiresIn:e.expires_in}})).catch((function(e){return Promise.reject(e)}))}}var u=function(){if((0,i.Z)())return JSON.parse(window.localStorage.getItem("token"))};function a(){var e=(0,i.Z)(),n=(0,o.useState)(u),t=n[0],c=n[1];return(0,o.useEffect)((function(){e&&(!t||1e3*t.expiresIn<Date.now()?s(r.r.portal+"/oauth/token/",r.r.user).then((function(e){return e.json()})).then((function(e){return{accessToken:e.access_token,refreshToken:e.refresh_token,tokenType:e.token_type,expiresIn:e.expires_in}})).catch((function(e){return e})).then((function(e){c(e)})):c(u))}),[e]),(0,o.useEffect)((function(){e&&window.localStorage.setItem("token",JSON.stringify(t))}),[e,t]),t}var m=t(46105),d=t(19666);function p(e){var n=e.children,t=a(),i={portal:r.r.portal,locale:{default:"en"},session:{type:"OAuth",clientId:r.r.user.client_id,authToken:t,handleRefreshToken:c},theme:{},handleAnonymousAction:function(){alert("Anonymous action")}};return o.createElement(d.Z,null,(function(){return o.createElement(m.SCContextProvider,{conf:i},n)}))}},99510:function(e,n,t){t.d(n,{r:function(){return o}});var o={user:{username:"beatrice",password:"Password!!Beatrice2021",client_id:"8HXeelXaQldhQmiSJDMhqNboELvDH402WIQIORFF",grant_type:"password"},portal:"https://www.fashionista.community"}},4670:function(e,n,t){t.r(n),t.d(n,{assets:function(){return f},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return d},metadata:function(){return l},toc:function(){return y}});var o=t(87462),r=t(63366),i=t(67294),s=t(3905),c=t(19666);function u(){return i.createElement(c.Z,null,(function(){var e=t(78812).Category;return i.createElement(e,{id:10})}))}var a=t(52169),m=["components"],d={sidebar_label:"Category",sidebar_position:1,title:"Category"},p=void 0,l={unversionedId:"sdk/community-ui/sc-ui/Components/Category",id:"sdk/community-ui/sc-ui/Components/Category",title:"Category",description:"The Category component renders a category.",source:"@site/docs/sdk/community-ui/sc-ui/Components/Category.mdx",sourceDirName:"sdk/community-ui/sc-ui/Components",slug:"/sdk/community-ui/sc-ui/Components/Category",permalink:"/docs/sdk/community-ui/sc-ui/Components/Category",editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/sdk/community-ui/sc-ui/Components/Category.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Category",sidebar_position:1,title:"Category"},sidebar:"sdkSidebar",previous:{title:"Categories Suggestion",permalink:"/docs/sdk/community-ui/sc-ui/Components/CategoriesSuggestion"},next:{title:"Category Header",permalink:"/docs/sdk/community-ui/sc-ui/Components/CategoryHeader"}},f={},y=[{value:"Usage",id:"usage",level:4}],k={toc:y};function g(e){var n=e.components,t=(0,r.Z)(e,m);return(0,s.kt)("wrapper",(0,o.Z)({},k,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"The Category component renders a category.")),(0,s.kt)(a.Z,{mdxType:"Logged"},(0,s.kt)(u,{mdxType:"Category"})),(0,s.kt)("h4",{id:"usage"},"Usage"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx"}," import React from 'react';\n import {SCContextProvider} from '@selfcommunity/core';\n import {Category} from '@selfcommunity/ui';\n\n function App() {\n   const conf = {\n     portal: '<community-path>',\n     session: {\n       type: 'OAuth',\n       token: '<community-token>',\n       refreshToken: '<community-refresh-token>',\n       refreshTokenEndpoint: '<community-refresh-endpoint>',\n     },\n   };\n   return (\n     <SCContextProvider conf={conf}><Category /></SCContextProvider>\n   );\n }\n")))}g.isMDXComponent=!0}}]);