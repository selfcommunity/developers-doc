"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[96045],{52169:function(e,t,n){n.d(t,{Z:function(){return p}});var o=n(67294),r=n(99510),i=n(5730);function s(e,t){void 0===e&&(e=""),void 0===t&&(t={});var n=Object.keys(t).map((function(e){return encodeURIComponent(e)+"="+encodeURIComponent(t[e])})).join("&");return fetch(e,{method:"POST",headers:{accept:"application/json","content-type":"application/x-www-form-urlencoded"},body:n})}function c(){if((0,i.Z)()){var e={refresh_token:JSON.parse(window.localStorage.getItem("token")).refresh_token,client_id:r.r.user.client_id,grant_type:"refresh_token"};return s(r.r.portal+"/oauth/token/",e).then((function(e){return e.json()})).then((function(e){return{accessToken:e.access_token,refreshToken:e.refresh_token,tokenType:e.token_type,expiresIn:e.expires_in}})).catch((function(e){return Promise.reject(e)}))}}var a=function(){if((0,i.Z)())return JSON.parse(window.localStorage.getItem("token"))};function u(){var e=(0,i.Z)(),t=(0,o.useState)(a),n=t[0],c=t[1];return(0,o.useEffect)((function(){e&&(!n||1e3*n.expiresIn<Date.now()?s(r.r.portal+"/oauth/token/",r.r.user).then((function(e){return e.json()})).then((function(e){return{accessToken:e.access_token,refreshToken:e.refresh_token,tokenType:e.token_type,expiresIn:e.expires_in}})).catch((function(e){return e})).then((function(e){c(e)})):c(a))}),[e]),(0,o.useEffect)((function(){e&&window.localStorage.setItem("token",JSON.stringify(n))}),[e,n]),n}var d=n(46105),m=n(19666);function p(e){var t=e.children,n=u(),i={portal:r.r.portal,locale:{default:"en"},session:{type:"OAuth",clientId:r.r.user.client_id,authToken:n,handleRefreshToken:c},theme:{palette:{primary:{main:"#7baa5d"},secondary:{main:"#4a8f62"}},components:{MuiIcon:{defaultProps:{baseClassName:"material-icons-outlined"}}}},handleAnonymousAction:function(){alert("Anonymous action")}};return o.createElement(m.Z,null,(function(){return o.createElement(d.SCContextProvider,{conf:i},t)}))}},99510:function(e,t,n){n.d(t,{r:function(){return o}});var o={user:{username:"beatrice",password:"Password!!Beatrice2021",client_id:"8HXeelXaQldhQmiSJDMhqNboELvDH402WIQIORFF",grant_type:"password"},portal:"https://www.fashionista.community"}},31752:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return p},default:function(){return b},frontMatter:function(){return m},metadata:function(){return l},toc:function(){return h}});var o=n(87462),r=n(63366),i=n(67294),s=n(3905),c=n(19666);function a(){return i.createElement(c.Z,null,(function(){var e=n(78812).FeedObject;return i.createElement(e,{feedObjectId:25,feedObjectType:"discussion"})}))}var u=n(52169),d=["components"],m={sidebar_label:"Feed Object",sidebar_position:1,title:"Feed Object"},p=void 0,l={unversionedId:"sdk/community-ui/sc-ui/Components/FeedObject",id:"sdk/community-ui/sc-ui/Components/FeedObject",title:"Feed Object",description:"The Feed Object component renders a post, discussion or status item.",source:"@site/docs/sdk/community-ui/sc-ui/Components/FeedObject.mdx",sourceDirName:"sdk/community-ui/sc-ui/Components",slug:"/sdk/community-ui/sc-ui/Components/FeedObject",permalink:"/docs/sdk/community-ui/sc-ui/Components/FeedObject",editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/sdk/community-ui/sc-ui/Components/FeedObject.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Feed Object",sidebar_position:1,title:"Feed Object"},sidebar:"sdkSidebar",previous:{title:"Feed",permalink:"/docs/sdk/community-ui/sc-ui/Components/Feed"},next:{title:"Feed Updates",permalink:"/docs/sdk/community-ui/sc-ui/Components/FeedUpdates"}},f={},h=[{value:"Usage",id:"usage",level:4}],k={toc:h};function b(e){var t=e.components,n=(0,r.Z)(e,d);return(0,s.kt)("wrapper",(0,o.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"The Feed Object component renders a post, discussion or status item.",(0,s.kt)("br",null),"\nEvery feed object item is composed of a section containing the avatar and username of the author, the item content and the date of creation of the same\n(post and discussion type can also contain a related poll).",(0,s.kt)("br",null),"\nThere are also various actions that can be performed on these items, such as comment, like and share, which are represented by icons.\nMoreover, through the top right menu it is possible to get item's permanent link and to turn notifications off.")),(0,s.kt)(u.Z,{mdxType:"Logged"},(0,s.kt)(a,{mdxType:"FeedObject"})),(0,s.kt)("h4",{id:"usage"},"Usage"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx"}," import React from 'react';\n import {SCContextProvider} from '@selfcommunity/core';\n import {FeedObject} from '@selfcommunity/ui';\n\n function App() {\n   const conf = {\n     portal: '<community-path>',\n     session: {\n       type: 'OAuth',\n       token: '<community-token>',\n       refreshToken: '<community-refresh-token>',\n       refreshTokenEndpoint: '<community-refresh-endpoint>',\n     },\n   };\n   return (\n     <SCContextProvider conf={conf}><FeedObject /></SCContextProvider>\n   );\n }\n")))}b.isMDXComponent=!0}}]);