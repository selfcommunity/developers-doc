"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[17057],{52169:function(e,n,t){t.d(n,{Z:function(){return p}});var o=t(67294),r=t(99510),c=t(5730);function i(e,n){void 0===e&&(e=""),void 0===n&&(n={});var t=Object.keys(n).map((function(e){return encodeURIComponent(e)+"="+encodeURIComponent(n[e])})).join("&");return fetch(e,{method:"POST",headers:{accept:"application/json","content-type":"application/x-www-form-urlencoded"},body:t})}function s(){if((0,c.Z)()){var e={refresh_token:JSON.parse(window.localStorage.getItem("token")).refresh_token,client_id:r.r.user.client_id,grant_type:"refresh_token"};return i(r.r.portal+"/oauth/token/",e).then((function(e){return e.json()})).then((function(e){return{accessToken:e.access_token,refreshToken:e.refresh_token,tokenType:e.token_type,expiresIn:e.expires_in}})).catch((function(e){return Promise.reject(e)}))}}var u=function(){if((0,c.Z)())return JSON.parse(window.localStorage.getItem("token"))};function m(){var e=(0,c.Z)(),n=(0,o.useState)(u),t=n[0],s=n[1];return(0,o.useEffect)((function(){e&&(!t||1e3*t.expiresIn<Date.now()?i(r.r.portal+"/oauth/token/",r.r.user).then((function(e){return e.json()})).then((function(e){return{accessToken:e.access_token,refreshToken:e.refresh_token,tokenType:e.token_type,expiresIn:e.expires_in}})).catch((function(e){return e})).then((function(e){s(e)})):s(u))}),[e]),(0,o.useEffect)((function(){e&&window.localStorage.setItem("token",JSON.stringify(t))}),[e,t]),t}var a=t(46105),d=t(19666);function p(e){var n=e.children,t=m(),c={portal:r.r.portal,locale:{default:"en"},session:{type:"OAuth",clientId:r.r.user.client_id,authToken:t,handleRefreshToken:s},theme:{},handleAnonymousAction:function(){alert("Anonymous action")}};return o.createElement(d.Z,null,(function(){return o.createElement(a.SCContextProvider,{conf:c},n)}))}},99510:function(e,n,t){t.d(n,{r:function(){return o}});var o={user:{username:"beatrice",password:"Password!!Beatrice2021",client_id:"8HXeelXaQldhQmiSJDMhqNboELvDH402WIQIORFF",grant_type:"password"},portal:"https://www.fashionista.community"}},635:function(e,n,t){t.r(n),t.d(n,{assets:function(){return f},contentTitle:function(){return p},default:function(){return C},frontMatter:function(){return d},metadata:function(){return l},toc:function(){return k}});var o=t(87462),r=t(63366),c=t(67294),i=t(3905),s=t(19666);function u(){return c.createElement(s.Z,null,(function(){var e=t(78812).CommentObject;return c.createElement(e,null)}))}var m=t(52169),a=["components"],d={sidebar_label:"Comment Object",sidebar_position:1,title:"Comment Object"},p=void 0,l={unversionedId:"sdk/community-ui/sc-ui/Components/CommentObject",id:"sdk/community-ui/sc-ui/Components/CommentObject",title:"Comment Object",description:"The Comment Object component renders a comment.",source:"@site/docs/sdk/community-ui/sc-ui/Components/CommentObject.mdx",sourceDirName:"sdk/community-ui/sc-ui/Components",slug:"/sdk/community-ui/sc-ui/Components/CommentObject",permalink:"/docs/sdk/community-ui/sc-ui/Components/CommentObject",editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/sdk/community-ui/sc-ui/Components/CommentObject.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Comment Object",sidebar_position:1,title:"Comment Object"},sidebar:"sdkSidebar",previous:{title:"Change Picture",permalink:"/docs/sdk/community-ui/sc-ui/Components/ChangePicture"},next:{title:"Comments Object",permalink:"/docs/sdk/community-ui/sc-ui/Components/CommentsObject"}},f={},k=[{value:"Usage",id:"usage",level:4}],h={toc:k};function C(e){var n=e.components,t=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The Comment Object component renders a comment.")),(0,i.kt)(m.Z,{mdxType:"Logged"},(0,i.kt)(u,{mdxType:"CommentObject"})),(0,i.kt)("h4",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"}," import React from 'react';\n import {SCContextProvider} from '@selfcommunity/core';\n import {CommentObject} from '@selfcommunity/ui';\n\n function App() {\n   const conf = {\n     portal: '<community-path>',\n     session: {\n       type: 'OAuth',\n       token: '<community-token>',\n       refreshToken: '<community-refresh-token>',\n       refreshTokenEndpoint: '<community-refresh-endpoint>',\n     },\n   };\n   return (\n     <SCContextProvider conf={conf}><CommentObject /></SCContextProvider>\n   );\n }\n")))}C.isMDXComponent=!0}}]);