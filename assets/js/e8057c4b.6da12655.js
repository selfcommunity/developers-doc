"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[8855],{52169:function(e,n,r){r.d(n,{Z:function(){return f}});var t=r(67294),o=r(99510),i=r(5730);function s(e,n){void 0===e&&(e=""),void 0===n&&(n={});var r=Object.keys(n).map((function(e){return encodeURIComponent(e)+"="+encodeURIComponent(n[e])})).join("&");return fetch(e,{method:"POST",headers:{accept:"application/json","content-type":"application/x-www-form-urlencoded"},body:r})}function c(){if((0,i.Z)()){var e={refresh_token:JSON.parse(window.localStorage.getItem("token")).refresh_token,client_id:o.r.user.client_id,grant_type:"refresh_token"};return s(o.r.portal+"/oauth/token/",e).then((function(e){return e.json()})).then((function(e){return{accessToken:e.access_token,refreshToken:e.refresh_token,tokenType:e.token_type,expiresIn:e.expires_in}})).catch((function(e){return Promise.reject(e)}))}}var u=function(){if((0,i.Z)())return JSON.parse(window.localStorage.getItem("token"))};function a(){var e=(0,i.Z)(),n=(0,t.useState)(u),r=n[0],c=n[1];return(0,t.useEffect)((function(){e&&(!r||1e3*r.expiresIn<Date.now()?s(o.r.portal+"/oauth/token/",o.r.user).then((function(e){return e.json()})).then((function(e){return{accessToken:e.access_token,refreshToken:e.refresh_token,tokenType:e.token_type,expiresIn:e.expires_in}})).catch((function(e){return e})).then((function(e){c(e)})):c(u))}),[e]),(0,t.useEffect)((function(){e&&window.localStorage.setItem("token",JSON.stringify(r))}),[e,r]),r}var d=r(46105),l=r(19666);function f(e){var n=e.children,r=a(),i={portal:o.r.portal,locale:{default:"en"},session:{type:"OAuth",clientId:o.r.user.client_id,authToken:r,handleRefreshToken:c},theme:{palette:{primary:{main:"#7baa5d"},secondary:{main:"#4a8f62"}},components:{MuiIcon:{defaultProps:{baseClassName:"material-icons-outlined"}}}},handleAnonymousAction:function(){alert("Anonymous action")}};return t.createElement(l.Z,null,(function(){return t.createElement(d.SCContextProvider,{conf:i},n)}))}},99510:function(e,n,r){r.d(n,{r:function(){return t}});var t={user:{username:"beatrice",password:"Password!!Beatrice2021",client_id:"8HXeelXaQldhQmiSJDMhqNboELvDH402WIQIORFF",grant_type:"password"},portal:"https://www.fashionista.community"}},71189:function(e,n,r){r.r(n),r.d(n,{assets:function(){return p},contentTitle:function(){return f},default:function(){return y},frontMatter:function(){return l},metadata:function(){return m},toc:function(){return k}});var t=r(87462),o=r(63366),i=r(67294),s=r(3905),c=r(19666);function u(){return i.createElement(c.Z,null,(function(){var e=r(78812).UserProfileHeader;return i.createElement(e,{userId:7})}))}var a=r(52169),d=["components"],l={sidebar_label:"User Profile Header",sidebar_position:1,title:"User Profile Header"},f=void 0,m={unversionedId:"sdk/community-ui/sc-ui/Components/UserProfileHeader",id:"sdk/community-ui/sc-ui/Components/UserProfileHeader",title:"User Profile Header",description:"The User Profile Header component renders the user profile header composed of user's cover, profile picture and username.",source:"@site/docs/sdk/community-ui/sc-ui/Components/UserProfileHeader.mdx",sourceDirName:"sdk/community-ui/sc-ui/Components",slug:"/sdk/community-ui/sc-ui/Components/UserProfileHeader",permalink:"/docs/sdk/community-ui/sc-ui/Components/UserProfileHeader",editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/sdk/community-ui/sc-ui/Components/UserProfileHeader.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"User Profile Header",sidebar_position:1,title:"User Profile Header"},sidebar:"sdkSidebar",previous:{title:"User Profile Edit",permalink:"/docs/sdk/community-ui/sc-ui/Components/UserProfileEdit"},next:{title:"User Profile Info",permalink:"/docs/sdk/community-ui/sc-ui/Components/UserProfileInfo"}},p={},k=[{value:"Usage",id:"usage",level:4}],h={toc:k};function y(e){var n=e.components,r=(0,o.Z)(e,d);return(0,s.kt)("wrapper",(0,t.Z)({},h,r,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"The User Profile Header component renders the user profile header composed of user's cover, profile picture and username.")),(0,s.kt)(a.Z,{mdxType:"Logged"},(0,s.kt)(u,{mdxType:"UserProfileHeader"})),(0,s.kt)("h4",{id:"usage"},"Usage"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx"}," import React from 'react';\n import {SCContextProvider} from '@selfcommunity/core';\n import {UserProfileHeader} from '@selfcommunity/ui';\n\n function App() {\n   const conf = {\n     portal: '<community-path>',\n     session: {\n       type: 'OAuth',\n       token: '<community-token>',\n       refreshToken: '<community-refresh-token>',\n       refreshTokenEndpoint: '<community-refresh-endpoint>',\n     },\n   };\n   return (\n     <SCContextProvider conf={conf}><UserProfileHeader /></SCContextProvider>\n   );\n }\n")))}y.isMDXComponent=!0}}]);