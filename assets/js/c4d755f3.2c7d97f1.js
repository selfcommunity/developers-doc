"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[6883],{52169:function(e,n,t){t.d(n,{Z:function(){return l}});var o=t(67294),r=t(99510),s=t(5730);function i(e,n){void 0===e&&(e=""),void 0===n&&(n={});var t=Object.keys(n).map((function(e){return encodeURIComponent(e)+"="+encodeURIComponent(n[e])})).join("&");return fetch(e,{method:"POST",headers:{accept:"application/json","content-type":"application/x-www-form-urlencoded"},body:t})}function c(){if((0,s.Z)()){var e={refresh_token:JSON.parse(window.localStorage.getItem("token")).refresh_token,client_id:r.r.user.client_id,grant_type:"refresh_token"};return i(r.r.portal+"/oauth/token/",e).then((function(e){return e.json()})).then((function(e){return{accessToken:e.access_token,refreshToken:e.refresh_token,tokenType:e.token_type,expiresIn:e.expires_in}})).catch((function(e){return Promise.reject(e)}))}}var m=function(){if((0,s.Z)())return JSON.parse(window.localStorage.getItem("token"))};function u(){var e=(0,s.Z)(),n=(0,o.useState)(m),t=n[0],c=n[1];return(0,o.useEffect)((function(){e&&(!t||1e3*t.expiresIn<Date.now()?i(r.r.portal+"/oauth/token/",r.r.user).then((function(e){return e.json()})).then((function(e){return{accessToken:e.access_token,refreshToken:e.refresh_token,tokenType:e.token_type,expiresIn:e.expires_in}})).catch((function(e){return e})).then((function(e){c(e)})):c(m))}),[e]),(0,o.useEffect)((function(){e&&window.localStorage.setItem("token",JSON.stringify(t))}),[e,t]),t}var a=t(46105),d=t(19666);function l(e){var n=e.children,t=u(),s={portal:r.r.portal,locale:{default:"en"},session:{type:"OAuth",clientId:r.r.user.client_id,authToken:t,handleRefreshToken:c},theme:{palette:{primary:{main:"#7baa5d"},secondary:{main:"#4a8f62"}},components:{MuiIcon:{defaultProps:{baseClassName:"material-icons-outlined"}}}},handleAnonymousAction:function(){alert("Anonymous action")}};return o.createElement(d.Z,null,(function(){return o.createElement(a.SCContextProvider,{conf:s},n)}))}},99510:function(e,n,t){t.d(n,{r:function(){return o}});var o={user:{username:"beatrice",password:"Password!!Beatrice2021",client_id:"8HXeelXaQldhQmiSJDMhqNboELvDH402WIQIORFF",grant_type:"password"},portal:"https://www.fashionista.community"}},25:function(e,n,t){t.r(n),t.d(n,{assets:function(){return f},contentTitle:function(){return l},default:function(){return b},frontMatter:function(){return d},metadata:function(){return p},toc:function(){return k}});var o=t(83117),r=t(80102),s=t(67294),i=t(3905),c=t(19666);function m(){return s.createElement(c.Z,null,(function(){var e=t(78812).CommentsObject;return s.createElement(e,{feedObjectType:"discussion",feedObjectId:30})}))}var u=t(52169),a=["components"],d={sidebar_label:"Comments Object",sidebar_position:1,title:"Comments Object"},l=void 0,p={unversionedId:"sdk/community-ui/sc-ui/Components/CommentsObject",id:"sdk/community-ui/sc-ui/Components/CommentsObject",title:"Comments Object",description:"The Comments Object component renders a list of comment items.",source:"@site/docs/sdk/community-ui/sc-ui/Components/CommentsObject.mdx",sourceDirName:"sdk/community-ui/sc-ui/Components",slug:"/sdk/community-ui/sc-ui/Components/CommentsObject",permalink:"/docs/sdk/community-ui/sc-ui/Components/CommentsObject",editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/sdk/community-ui/sc-ui/Components/CommentsObject.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Comments Object",sidebar_position:1,title:"Comments Object"},sidebar:"sdkSidebar",previous:{title:"Comment Object",permalink:"/docs/sdk/community-ui/sc-ui/Components/CommentObject"},next:{title:"Custom Adv",permalink:"/docs/sdk/community-ui/sc-ui/Components/CustomAdv"}},f={},k=[{value:"Usage",id:"usage",level:4}],h={toc:k};function b(e){var n=e.components,t=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},'The Comments Object component renders a list of comment items.\nThe comments are shown in an orderly manner: few items are full shown while the others can be loaded afterwards by clicking on the "see more comments" button.')),(0,i.kt)(u.Z,{mdxType:"Logged"},(0,i.kt)(m,{mdxType:"CommentsObject"})),(0,i.kt)("h4",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"}," import React from 'react';\n import {SCContextProvider} from '@selfcommunity/core';\n import {CommentsObject} from '@selfcommunity/ui';\n\n function App() {\n   const conf = {\n     portal: '<community-path>',\n     session: {\n       type: 'OAuth',\n       token: '<community-token>',\n       refreshToken: '<community-refresh-token>',\n       refreshTokenEndpoint: '<community-refresh-endpoint>',\n     },\n   };\n   return (\n     <SCContextProvider conf={conf}><CommentsObject /></SCContextProvider>\n   );\n }\n")))}b.isMDXComponent=!0}}]);