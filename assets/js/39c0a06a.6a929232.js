"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[97343],{52169:function(e,t,n){n.d(t,{Z:function(){return l}});var o=n(67294),r=n(99510),s=n(5730);function i(e,t){void 0===e&&(e=""),void 0===t&&(t={});var n=Object.keys(t).map((function(e){return encodeURIComponent(e)+"="+encodeURIComponent(t[e])})).join("&");return fetch(e,{method:"POST",headers:{accept:"application/json","content-type":"application/x-www-form-urlencoded"},body:n})}function a(){if((0,s.Z)()){var e={refresh_token:JSON.parse(window.localStorage.getItem("token")).refresh_token,client_id:r.r.user.client_id,grant_type:"refresh_token"};return i(r.r.portal+"/oauth/token/",e).then((function(e){return e.json()})).then((function(e){return{accessToken:e.access_token,refreshToken:e.refresh_token,tokenType:e.token_type,expiresIn:e.expires_in}})).catch((function(e){return Promise.reject(e)}))}}var c=function(){if((0,s.Z)())return JSON.parse(window.localStorage.getItem("token"))};function u(){var e=(0,s.Z)(),t=(0,o.useState)(c),n=t[0],a=t[1];return(0,o.useEffect)((function(){e&&(!n||1e3*n.expiresIn<Date.now()?i(r.r.portal+"/oauth/token/",r.r.user).then((function(e){return e.json()})).then((function(e){return{accessToken:e.access_token,refreshToken:e.refresh_token,tokenType:e.token_type,expiresIn:e.expires_in}})).catch((function(e){return e})).then((function(e){a(e)})):a(c))}),[e]),(0,o.useEffect)((function(){e&&window.localStorage.setItem("token",JSON.stringify(n))}),[e,n]),n}var m=n(46105),p=n(19666);function l(e){var t=e.children,n=u(),s={portal:r.r.portal,locale:{default:"en"},session:{type:"OAuth",clientId:r.r.user.client_id,authToken:n,handleRefreshToken:a},theme:{palette:{primary:{main:"#7baa5d"},secondary:{main:"#4a8f62"}},components:{MuiIcon:{defaultProps:{baseClassName:"material-icons-outlined"}}}},handleAnonymousAction:function(){alert("Anonymous action")}};return o.createElement(p.Z,null,(function(){return o.createElement(m.SCContextProvider,{conf:s},t)}))}},99510:function(e,t,n){n.d(t,{r:function(){return o}});var o={user:{username:"beatrice",password:"Password!!Beatrice2021",client_id:"8HXeelXaQldhQmiSJDMhqNboELvDH402WIQIORFF",grant_type:"password"},portal:"https://www.fashionista.community"}},99128:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return p},metadata:function(){return d},toc:function(){return k}});var o=n(83117),r=n(80102),s=n(67294),i=n(3905),a=n(19666);function c(){return s.createElement(a.Z,null,(function(){var e=n(15098).pk;return s.createElement(e,null)}))}var u=n(52169),m=["components"],p={sidebar_label:"Private Messages",sidebar_position:1,title:"Private Messages"},l=void 0,d={unversionedId:"sdk/community-ui/sc-templates/Components/PrivateMessages",id:"sdk/community-ui/sc-templates/Components/PrivateMessages",title:"Private Messages",description:"The Private Messages template renders private messages page.",source:"@site/docs/sdk/community-ui/sc-templates/Components/PrivateMessages.mdx",sourceDirName:"sdk/community-ui/sc-templates/Components",slug:"/sdk/community-ui/sc-templates/Components/PrivateMessages",permalink:"/docs/sdk/community-ui/sc-templates/Components/PrivateMessages",editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/sdk/community-ui/sc-templates/Components/PrivateMessages.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Private Messages",sidebar_position:1,title:"Private Messages"},sidebar:"sdkSidebar",previous:{title:"Notification Feed",permalink:"/docs/sdk/community-ui/sc-templates/Components/NotificationFeed"},next:{title:"User Feed",permalink:"/docs/sdk/community-ui/sc-templates/Components/UserFeed"}},f={},k=[{value:"Usage",id:"usage",level:4}],v={toc:k};function h(e){var t=e.components,n=(0,r.Z)(e,m);return(0,i.kt)("wrapper",(0,o.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The Private Messages template renders private messages page.")),(0,i.kt)(u.Z,{mdxType:"Logged"},(0,i.kt)(c,{mdxType:"PrivateMessages"})),(0,i.kt)("h4",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"}," import React from 'react';\n import {SCContextProvider} from '@selfcommunity/core';\n import {PrivateMessages} from '@selfcommunity/templates';\n\n function App() {\n   const conf = {\n     portal: '<community-path>',\n     session: {\n       type: 'OAuth',\n       token: '<community-token>',\n       refreshToken: '<community-refresh-token>',\n       refreshTokenEndpoint: '<community-refresh-endpoint>',\n     },\n   };\n   return (\n     <SCContextProvider conf={conf}><PrivateMessages/></SCContextProvider>\n   );\n }\n")))}h.isMDXComponent=!0}}]);