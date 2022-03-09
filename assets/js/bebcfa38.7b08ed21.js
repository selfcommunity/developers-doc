"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[36102],{52169:function(e,t,n){n.d(t,{Z:function(){return m}});var o=n(67294),r=n(99510),i=n(5730);function c(e,t){void 0===e&&(e=""),void 0===t&&(t={});var n=Object.keys(t).map((function(e){return encodeURIComponent(e)+"="+encodeURIComponent(t[e])})).join("&");return fetch(e,{method:"POST",headers:{accept:"application/json","content-type":"application/x-www-form-urlencoded"},body:n})}function s(){if((0,i.Z)()){var e={refresh_token:JSON.parse(window.localStorage.getItem("token")).refresh_token,client_id:r.r.user.client_id,grant_type:"refresh_token"};return c(r.r.portal+"/oauth/token/",e).then((function(e){return e.json()})).then((function(e){return{accessToken:e.access_token,refreshToken:e.refresh_token,tokenType:e.token_type,expiresIn:e.expires_in}})).catch((function(e){return Promise.reject(e)}))}}var a=function(){if((0,i.Z)())return JSON.parse(window.localStorage.getItem("token"))};function u(){var e=(0,i.Z)(),t=(0,o.useState)(a),n=t[0],s=t[1];return(0,o.useEffect)((function(){e&&(!n||1e3*n.expiresIn<Date.now()?c(r.r.portal+"/oauth/token/",r.r.user).then((function(e){return e.json()})).then((function(e){return{accessToken:e.access_token,refreshToken:e.refresh_token,tokenType:e.token_type,expiresIn:e.expires_in}})).catch((function(e){return e})).then((function(e){s(e)})):s(a))}),[e]),(0,o.useEffect)((function(){e&&window.localStorage.setItem("token",JSON.stringify(n))}),[e,n]),n}var d=n(46105),l=n(19666);function m(e){var t=e.children,n=u(),i={portal:r.r.portal,locale:{default:"en"},session:{type:"OAuth",clientId:r.r.user.client_id,authToken:n,handleRefreshToken:s},theme:{palette:{primary:{main:"#7baa5d"},secondary:{main:"#4a8f62"}},components:{MuiIcon:{defaultProps:{baseClassName:"material-icons-outlined"}}}},handleAnonymousAction:function(){alert("Anonymous action")}};return o.createElement(l.Z,null,(function(){return o.createElement(d.SCContextProvider,{conf:i},t)}))}},99510:function(e,t,n){n.d(t,{r:function(){return o}});var o={user:{username:"beatrice",password:"Password!!Beatrice2021",client_id:"8HXeelXaQldhQmiSJDMhqNboELvDH402WIQIORFF",grant_type:"password"},portal:"https://www.fashionista.community"}},36403:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return m},default:function(){return b},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return k}});var o=n(87462),r=n(63366),i=n(67294),c=n(3905),s=n(19666);function a(){return i.createElement(s.Z,null,(function(){var e=n(15098).Rc;return i.createElement(e,{feedObjectId:25,feedObjectType:"discussion"})}))}var u=n(52169),d=["components"],l={sidebar_label:"Feed Object Detail",sidebar_position:1,title:"Feed Object Detail"},m=void 0,p={unversionedId:"sdk/community-ui/sc-templates/Components/FeedObjectDetail",id:"sdk/community-ui/sc-templates/Components/FeedObjectDetail",title:"Feed Object Detail",description:"The Feed Object Detail template renders the feed object detail page.",source:"@site/docs/sdk/community-ui/sc-templates/Components/FeedObjectDetail.mdx",sourceDirName:"sdk/community-ui/sc-templates/Components",slug:"/sdk/community-ui/sc-templates/Components/FeedObjectDetail",permalink:"/docs/sdk/community-ui/sc-templates/Components/FeedObjectDetail",editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/sdk/community-ui/sc-templates/Components/FeedObjectDetail.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Feed Object Detail",sidebar_position:1,title:"Feed Object Detail"},sidebar:"sdkSidebar",previous:{title:"Explore Feed",permalink:"/docs/sdk/community-ui/sc-templates/Components/ExploreFeed"},next:{title:"Main Feed",permalink:"/docs/sdk/community-ui/sc-templates/Components/MainFeed"}},f={},k=[{value:"Usage",id:"usage",level:4}],h={toc:k};function b(e){var t=e.components,n=(0,r.Z)(e,d);return(0,c.kt)("wrapper",(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"The Feed Object Detail template renders the feed object detail page.")),(0,c.kt)(u.Z,{mdxType:"Logged"},(0,c.kt)(a,{mdxType:"FeedObjectDetail"})),(0,c.kt)("h4",{id:"usage"},"Usage"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-jsx"}," import React from 'react';\n import {SCContextProvider} from '@selfcommunity/core';\n import {FeedObjectDetail} from '@selfcommunity/templates';\n\n function App() {\n   const conf = {\n     portal: '<community-path>',\n     session: {\n       type: 'OAuth',\n       token: '<community-token>',\n       refreshToken: '<community-refresh-token>',\n       refreshTokenEndpoint: '<community-refresh-endpoint>',\n     },\n   };\n   return (\n     <SCContextProvider conf={conf}><FeedObjectDetail/></SCContextProvider>\n   );\n }\n")))}b.isMDXComponent=!0}}]);