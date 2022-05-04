"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[56473],{52169:function(e,n,o){o.d(n,{Z:function(){return m}});var t=o(67294),r=o(99510),s=o(5730);function i(e,n){void 0===e&&(e=""),void 0===n&&(n={});var o=Object.keys(n).map((function(e){return encodeURIComponent(e)+"="+encodeURIComponent(n[e])})).join("&");return fetch(e,{method:"POST",headers:{accept:"application/json","content-type":"application/x-www-form-urlencoded"},body:o})}function c(){if((0,s.Z)()){var e={refresh_token:JSON.parse(window.localStorage.getItem("token")).refresh_token,client_id:r.r.user.client_id,grant_type:"refresh_token"};return i(r.r.portal+"/oauth/token/",e).then((function(e){return e.json()})).then((function(e){return{accessToken:e.access_token,refreshToken:e.refresh_token,tokenType:e.token_type,expiresIn:e.expires_in}})).catch((function(e){return Promise.reject(e)}))}}var u=function(){if((0,s.Z)())return JSON.parse(window.localStorage.getItem("token"))};function a(){var e=(0,s.Z)(),n=(0,t.useState)(u),o=n[0],c=n[1];return(0,t.useEffect)((function(){e&&(!o||1e3*o.expiresIn<Date.now()?i(r.r.portal+"/oauth/token/",r.r.user).then((function(e){return e.json()})).then((function(e){return{accessToken:e.access_token,refreshToken:e.refresh_token,tokenType:e.token_type,expiresIn:e.expires_in}})).catch((function(e){return e})).then((function(e){c(e)})):c(u))}),[e]),(0,t.useEffect)((function(){e&&window.localStorage.setItem("token",JSON.stringify(o))}),[e,o]),o}var l=o(46105),d=o(19666);function m(e){var n=e.children,o=a(),s={portal:r.r.portal,locale:{default:"en"},session:{type:"OAuth",clientId:r.r.user.client_id,authToken:o,handleRefreshToken:c},theme:{palette:{primary:{main:"#7baa5d"},secondary:{main:"#4a8f62"}},components:{MuiIcon:{defaultProps:{baseClassName:"material-icons-outlined"}}}},handleAnonymousAction:function(){alert("Anonymous action")}};return t.createElement(d.Z,null,(function(){return t.createElement(l.SCContextProvider,{conf:s},n)}))}},99510:function(e,n,o){o.d(n,{r:function(){return t}});var t={user:{username:"beatrice",password:"Password!!Beatrice2021",client_id:"8HXeelXaQldhQmiSJDMhqNboELvDH402WIQIORFF",grant_type:"password"},portal:"https://www.fashionista.community"}},75767:function(e,n,o){o.r(n),o.d(n,{assets:function(){return p},contentTitle:function(){return m},default:function(){return w},frontMatter:function(){return d},metadata:function(){return f},toc:function(){return h}});var t=o(83117),r=o(80102),s=o(67294),i=o(3905),c=o(19666);function u(){return s.createElement(c.Z,null,(function(){var e=o(78812).UsersFollowed;return s.createElement(e,{userId:7})}))}var a=o(52169),l=["components"],d={sidebar_label:"Users Followed",sidebar_position:1,title:"Users Followed"},m=void 0,f={unversionedId:"sdk/community-ui/sc-ui/Components/UsersFollowed",id:"sdk/community-ui/sc-ui/Components/UsersFollowed",title:"Users Followed",description:"The Users Followed component renders the list of the users followed by the user.",source:"@site/docs/sdk/community-ui/sc-ui/Components/UsersFollowed.mdx",sourceDirName:"sdk/community-ui/sc-ui/Components",slug:"/sdk/community-ui/sc-ui/Components/UsersFollowed",permalink:"/docs/sdk/community-ui/sc-ui/Components/UsersFollowed",editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/sdk/community-ui/sc-ui/Components/UsersFollowed.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Users Followed",sidebar_position:1,title:"Users Followed"},sidebar:"sdkSidebar",previous:{title:"User Profile Info",permalink:"/docs/sdk/community-ui/sc-ui/Components/UserProfileInfo"},next:{title:"Incubator",permalink:"/docs/sdk/community-ui/sc-ui/Components/incubator"}},p={},h=[{value:"Usage",id:"usage",level:4}],k={toc:h};function w(e){var n=e.components,o=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,t.Z)({},k,o,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The Users Followed component renders the list of the users followed by the user.",(0,i.kt)("br",null),"\nThis list is composed of items containing user's avatar and username, info (or followers counter) and a follow button that allows users to follow/unfollow others.",(0,i.kt)("br",null),'\nThe categories are shown in an orderly manner: few items are shown in the main card while the others can be displayed in a modal card by clicking on the "show all" button.')),(0,i.kt)(a.Z,{mdxType:"Logged"},(0,i.kt)(u,{mdxType:"UsersFollowed"})),(0,i.kt)("h4",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"}," import React from 'react';\n import {SCContextProvider} from '@selfcommunity/core';\n import {UsersFollowed} from '@selfcommunity/ui';\n\n function App() {\n   const conf = {\n     portal: '<community-path>',\n     session: {\n       type: 'OAuth',\n       token: '<community-token>',\n       refreshToken: '<community-refresh-token>',\n       refreshTokenEndpoint: '<community-refresh-endpoint>',\n     },\n   };\n   return (\n     <SCContextProvider conf={conf}><UsersFollowed /></SCContextProvider>\n   );\n }\n")))}w.isMDXComponent=!0}}]);