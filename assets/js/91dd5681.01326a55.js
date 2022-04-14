"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[68082],{52169:function(e,n,t){t.d(n,{Z:function(){return d}});var o=t(67294),r=t(99510),s=t(5730);function i(e,n){void 0===e&&(e=""),void 0===n&&(n={});var t=Object.keys(n).map((function(e){return encodeURIComponent(e)+"="+encodeURIComponent(n[e])})).join("&");return fetch(e,{method:"POST",headers:{accept:"application/json","content-type":"application/x-www-form-urlencoded"},body:t})}function u(){if((0,s.Z)()){var e={refresh_token:JSON.parse(window.localStorage.getItem("token")).refresh_token,client_id:r.r.user.client_id,grant_type:"refresh_token"};return i(r.r.portal+"/oauth/token/",e).then((function(e){return e.json()})).then((function(e){return{accessToken:e.access_token,refreshToken:e.refresh_token,tokenType:e.token_type,expiresIn:e.expires_in}})).catch((function(e){return Promise.reject(e)}))}}var c=function(){if((0,s.Z)())return JSON.parse(window.localStorage.getItem("token"))};function a(){var e=(0,s.Z)(),n=(0,o.useState)(c),t=n[0],u=n[1];return(0,o.useEffect)((function(){e&&(!t||1e3*t.expiresIn<Date.now()?i(r.r.portal+"/oauth/token/",r.r.user).then((function(e){return e.json()})).then((function(e){return{accessToken:e.access_token,refreshToken:e.refresh_token,tokenType:e.token_type,expiresIn:e.expires_in}})).catch((function(e){return e})).then((function(e){u(e)})):u(c))}),[e]),(0,o.useEffect)((function(){e&&window.localStorage.setItem("token",JSON.stringify(t))}),[e,t]),t}var l=t(46105),m=t(19666);function d(e){var n=e.children,t=a(),s={portal:r.r.portal,locale:{default:"en"},session:{type:"OAuth",clientId:r.r.user.client_id,authToken:t,handleRefreshToken:u},theme:{palette:{primary:{main:"#7baa5d"},secondary:{main:"#4a8f62"}},components:{MuiIcon:{defaultProps:{baseClassName:"material-icons-outlined"}}}},handleAnonymousAction:function(){alert("Anonymous action")}};return o.createElement(m.Z,null,(function(){return o.createElement(l.SCContextProvider,{conf:s},n)}))}},99510:function(e,n,t){t.d(n,{r:function(){return o}});var o={user:{username:"beatrice",password:"Password!!Beatrice2021",client_id:"8HXeelXaQldhQmiSJDMhqNboELvDH402WIQIORFF",grant_type:"password"},portal:"https://www.fashionista.community"}},78524:function(e,n,t){t.r(n),t.d(n,{assets:function(){return f},contentTitle:function(){return d},default:function(){return y},frontMatter:function(){return m},metadata:function(){return p},toc:function(){return k}});var o=t(87462),r=t(63366),s=t(67294),i=t(3905),u=t(19666);function c(){return s.createElement(u.Z,null,(function(){var e=t(78812).User;return s.createElement(e,{userId:18})}))}var a=t(52169),l=["components"],m={sidebar_label:"User",sidebar_position:1,title:"User"},d=void 0,p={unversionedId:"sdk/community-ui/sc-ui/Components/User",id:"sdk/community-ui/sc-ui/Components/User",title:"User",description:"The User component renders a user item containing user's avatar and username, info (or followers counter) and a follow button,",source:"@site/docs/sdk/community-ui/sc-ui/Components/User.mdx",sourceDirName:"sdk/community-ui/sc-ui/Components",slug:"/sdk/community-ui/sc-ui/Components/User",permalink:"/docs/sdk/community-ui/sc-ui/Components/User",editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/sdk/community-ui/sc-ui/Components/User.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"User",sidebar_position:1,title:"User"},sidebar:"sdkSidebar",previous:{title:"Trending People",permalink:"/docs/sdk/community-ui/sc-ui/Components/TrendingPeople"},next:{title:"User Followers",permalink:"/docs/sdk/community-ui/sc-ui/Components/UserFollowers"}},f={},k=[{value:"Usage",id:"usage",level:4}],h={toc:k};function y(e){var n=e.components,t=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,o.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The User component renders a user item containing user's avatar and username, info (or followers counter) and a follow button, ",(0,i.kt)("br",null),"\nthat allows users to follow/unfollow others.")),(0,i.kt)(a.Z,{mdxType:"Logged"},(0,i.kt)(c,{mdxType:"User"})),(0,i.kt)("h4",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"}," import React from 'react';\n import {SCContextProvider} from '@selfcommunity/core';\n import {User} from '@selfcommunity/ui';\n\n function App() {\n   const conf = {\n     portal: '<community-path>',\n     session: {\n       type: 'OAuth',\n       token: '<community-token>',\n       refreshToken: '<community-refresh-token>',\n       refreshTokenEndpoint: '<community-refresh-endpoint>',\n     },\n   };\n   return (\n     <SCContextProvider conf={conf}><User /></SCContextProvider>\n   );\n }\n")))}y.isMDXComponent=!0}}]);