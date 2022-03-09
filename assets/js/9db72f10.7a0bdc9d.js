"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[75229],{52169:function(e,n,t){t.d(n,{Z:function(){return l}});var o=t(67294),r=t(99510),i=t(5730);function s(e,n){void 0===e&&(e=""),void 0===n&&(n={});var t=Object.keys(n).map((function(e){return encodeURIComponent(e)+"="+encodeURIComponent(n[e])})).join("&");return fetch(e,{method:"POST",headers:{accept:"application/json","content-type":"application/x-www-form-urlencoded"},body:t})}function c(){if((0,i.Z)()){var e={refresh_token:JSON.parse(window.localStorage.getItem("token")).refresh_token,client_id:r.r.user.client_id,grant_type:"refresh_token"};return s(r.r.portal+"/oauth/token/",e).then((function(e){return e.json()})).then((function(e){return{accessToken:e.access_token,refreshToken:e.refresh_token,tokenType:e.token_type,expiresIn:e.expires_in}})).catch((function(e){return Promise.reject(e)}))}}var u=function(){if((0,i.Z)())return JSON.parse(window.localStorage.getItem("token"))};function a(){var e=(0,i.Z)(),n=(0,o.useState)(u),t=n[0],c=n[1];return(0,o.useEffect)((function(){e&&(!t||1e3*t.expiresIn<Date.now()?s(r.r.portal+"/oauth/token/",r.r.user).then((function(e){return e.json()})).then((function(e){return{accessToken:e.access_token,refreshToken:e.refresh_token,tokenType:e.token_type,expiresIn:e.expires_in}})).catch((function(e){return e})).then((function(e){c(e)})):c(u))}),[e]),(0,o.useEffect)((function(){e&&window.localStorage.setItem("token",JSON.stringify(t))}),[e,t]),t}var d=t(46105),p=t(19666);function l(e){var n=e.children,t=a(),i={portal:r.r.portal,locale:{default:"en"},session:{type:"OAuth",clientId:r.r.user.client_id,authToken:t,handleRefreshToken:c},theme:{palette:{primary:{main:"#7baa5d"},secondary:{main:"#4a8f62"}},components:{MuiIcon:{defaultProps:{baseClassName:"material-icons-outlined"}}}},handleAnonymousAction:function(){alert("Anonymous action")}};return o.createElement(p.Z,null,(function(){return o.createElement(d.SCContextProvider,{conf:i},n)}))}},99510:function(e,n,t){t.d(n,{r:function(){return o}});var o={user:{username:"beatrice",password:"Password!!Beatrice2021",client_id:"8HXeelXaQldhQmiSJDMhqNboELvDH402WIQIORFF",grant_type:"password"},portal:"https://www.fashionista.community"}},59907:function(e,n,t){t.r(n),t.d(n,{assets:function(){return f},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return p},metadata:function(){return m},toc:function(){return k}});var o=t(87462),r=t(63366),i=t(67294),s=t(3905),c=t(19666);function u(){return i.createElement(c.Z,null,(function(){var e=t(78812).TrendingPeople;return i.createElement(e,{categoryId:2})}))}var a=t(52169),d=["components"],p={sidebar_label:"Trending People",sidebar_position:1,title:"Trending People"},l=void 0,m={unversionedId:"sdk/community-ui/sc-ui/Components/TrendingPeople",id:"sdk/community-ui/sc-ui/Components/TrendingPeople",title:"Trending People",description:"The Trending People component renders a list of trending people.",source:"@site/docs/sdk/community-ui/sc-ui/Components/TrendingPeople.mdx",sourceDirName:"sdk/community-ui/sc-ui/Components",slug:"/sdk/community-ui/sc-ui/Components/TrendingPeople",permalink:"/docs/sdk/community-ui/sc-ui/Components/TrendingPeople",editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/sdk/community-ui/sc-ui/Components/TrendingPeople.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Trending People",sidebar_position:1,title:"Trending People"},sidebar:"sdkSidebar",previous:{title:"Trending Feed",permalink:"/docs/sdk/community-ui/sc-ui/Components/TrendingFeed"},next:{title:"User",permalink:"/docs/sdk/community-ui/sc-ui/Components/User"}},f={},k=[{value:"Usage",id:"usage",level:4}],h={toc:k};function g(e){var n=e.components,t=(0,r.Z)(e,d);return(0,s.kt)("wrapper",(0,o.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"The Trending People component renders a list of trending people.")),(0,s.kt)("br",null),(0,s.kt)(a.Z,{mdxType:"Logged"},(0,s.kt)(u,{mdxType:"TrendingPeople"})),(0,s.kt)("h4",{id:"usage"},"Usage"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx"}," import React from 'react';\n import {SCContextProvider} from '@selfcommunity/core';\n import {TrendingPeople} from '@selfcommunity/ui';\n\n function App() {\n   const conf = {\n     portal: '<community-path>',\n     session: {\n       type: 'OAuth',\n       token: '<community-token>',\n       refreshToken: '<community-refresh-token>',\n       refreshTokenEndpoint: '<community-refresh-endpoint>',\n     },\n   };\n   return (\n     <SCContextProvider conf={conf}><TrendingPeople /></SCContextProvider>\n   );\n }\n")))}g.isMDXComponent=!0}}]);