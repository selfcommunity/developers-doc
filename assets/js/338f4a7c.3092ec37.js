"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[666],{52169:function(e,n,t){t.d(n,{Z:function(){return p}});var o=t(67294),r=t(99510),i=t(5730);function c(e,n){void 0===e&&(e=""),void 0===n&&(n={});var t=Object.keys(n).map((function(e){return encodeURIComponent(e)+"="+encodeURIComponent(n[e])})).join("&");return fetch(e,{method:"POST",headers:{accept:"application/json","content-type":"application/x-www-form-urlencoded"},body:t})}function s(){if((0,i.Z)()){var e={refresh_token:JSON.parse(window.localStorage.getItem("token")).refresh_token,client_id:r.r.user.client_id,grant_type:"refresh_token"};return c(r.r.portal+"/oauth/token/",e).then((function(e){return e.json()})).then((function(e){return{accessToken:e.access_token,refreshToken:e.refresh_token,tokenType:e.token_type,expiresIn:e.expires_in}})).catch((function(e){return Promise.reject(e)}))}}var u=function(){if((0,i.Z)())return JSON.parse(window.localStorage.getItem("token"))};function a(){var e=(0,i.Z)(),n=(0,o.useState)(u),t=n[0],s=n[1];return(0,o.useEffect)((function(){e&&(!t||1e3*t.expiresIn<Date.now()?c(r.r.portal+"/oauth/token/",r.r.user).then((function(e){return e.json()})).then((function(e){return{accessToken:e.access_token,refreshToken:e.refresh_token,tokenType:e.token_type,expiresIn:e.expires_in}})).catch((function(e){return e})).then((function(e){s(e)})):s(u))}),[e]),(0,o.useEffect)((function(){e&&window.localStorage.setItem("token",JSON.stringify(t))}),[e,t]),t}var d=t(46105),m=t(19666);function p(e){var n=e.children,t=a(),i={portal:r.r.portal,locale:{default:"en"},session:{type:"OAuth",clientId:r.r.user.client_id,authToken:t,handleRefreshToken:s},theme:{palette:{primary:{main:"#7baa5d"},secondary:{main:"#4a8f62"}},components:{MuiIcon:{defaultProps:{baseClassName:"material-icons-outlined"}}}},handleAnonymousAction:function(){alert("Anonymous action")}};return o.createElement(m.Z,null,(function(){return o.createElement(d.SCContextProvider,{conf:i},n)}))}},99510:function(e,n,t){t.d(n,{r:function(){return o}});var o={user:{username:"beatrice",password:"Password!!Beatrice2021",client_id:"8HXeelXaQldhQmiSJDMhqNboELvDH402WIQIORFF",grant_type:"password"},portal:"https://www.fashionista.community"}},94829:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return p},default:function(){return y},frontMatter:function(){return m},metadata:function(){return f},toc:function(){return k}});var o=t(87462),r=t(63366),i=t(67294),c=t(3905),s=t(19666);function u(){return i.createElement(s.Z,null,(function(){var e=t(78812).Feed,n=t(46105).Endpoints,o=t(78812).FeedObject,r=t(78812).FeedObjectSkeleton;return i.createElement(e,{id:"feed",endpoint:n.ExploreFeed,ItemComponent:o,itemPropsGenerator:function(e,n){return{feedObject:n[n.type],feedObjectType:n.type,feedObjectActivities:n.activities?n.activities:null,markRead:!!e&&!n.seen_by_id.includes(e.id)}},ItemSkeleton:r,itemIdGenerator:function(e){return e[e.type].id}})}))}var a=t(52169),d=["components"],m={sidebar_label:"Feed",sidebar_position:1,title:"Feed"},p=void 0,f={unversionedId:"sdk/community-ui/sc-ui/Components/Feed",id:"sdk/community-ui/sc-ui/Components/Feed",title:"Feed",description:"The Feed component renders a feed composed of different feed objects and custom adv banners.",source:"@site/docs/sdk/community-ui/sc-ui/Components/Feed.mdx",sourceDirName:"sdk/community-ui/sc-ui/Components",slug:"/sdk/community-ui/sc-ui/Components/Feed",permalink:"/docs/sdk/community-ui/sc-ui/Components/Feed",editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/sdk/community-ui/sc-ui/Components/Feed.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Feed",sidebar_position:1,title:"Feed"},sidebar:"sdkSidebar",previous:{title:"Editor",permalink:"/docs/sdk/community-ui/sc-ui/Components/Editor"},next:{title:"Feed Object",permalink:"/docs/sdk/community-ui/sc-ui/Components/FeedObject"}},l={},k=[{value:"Usage",id:"usage",level:4}],h={toc:k};function y(e){var n=e.components,t=(0,r.Z)(e,d);return(0,c.kt)("wrapper",(0,o.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"The Feed component renders a feed composed of different feed objects and custom adv banners.")),(0,c.kt)(a.Z,{mdxType:"Logged"},(0,c.kt)(u,{mdxType:"Feed"})),(0,c.kt)("h4",{id:"usage"},"Usage"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-jsx"}," import React from 'react';\n import {SCContextProvider} from '@selfcommunity/core';\n import {FeedObject} from '@selfcommunity/ui';\n\n function App() {\n   const conf = {\n     portal: '<community-path>',\n     session: {\n       type: 'OAuth',\n       token: '<community-token>',\n       refreshToken: '<community-refresh-token>',\n       refreshTokenEndpoint: '<community-refresh-endpoint>',\n     },\n   };\n   return (\n     <SCContextProvider conf={conf}><FeedObject /></SCContextProvider>\n   );\n }\n")))}y.isMDXComponent=!0}}]);