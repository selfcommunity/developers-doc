"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[71294],{92991:function(e,n,t){t.d(n,{Z:function(){return m}});var o=t(67294),r=t(27331),s=t(5730);function i(e,n){void 0===e&&(e=""),void 0===n&&(n={});var t=Object.keys(n).map((function(e){return encodeURIComponent(e)+"="+encodeURIComponent(n[e])})).join("&");return fetch(e,{method:"POST",headers:{accept:"application/json","content-type":"application/x-www-form-urlencoded"},body:t})}function a(){if((0,s.Z)()){var e={refresh_token:JSON.parse(window.localStorage.getItem("token")).refresh_token,client_id:r.r.user.client_id,grant_type:"refresh_token"};return i(r.r.portal+"/oauth/token/",e).then((function(e){return e.json()})).then((function(e){return{accessToken:e.access_token,refreshToken:e.refresh_token,tokenType:e.token_type,expiresIn:e.expires_in}})).catch((function(e){return Promise.reject(e)}))}}var c=function(){if((0,s.Z)())return JSON.parse(window.localStorage.getItem("token"))};function u(){var e=(0,s.Z)(),n=(0,o.useState)(c),t=n[0],a=n[1];return(0,o.useEffect)((function(){e&&(!t||1e3*t.expiresIn<Date.now()?i(r.r.portal+"/oauth/token/",r.r.user).then((function(e){return e.json()})).then((function(e){return{accessToken:e.access_token,refreshToken:e.refresh_token,tokenType:e.token_type,expiresIn:e.expires_in}})).catch((function(e){return e})).then((function(e){a(e)})):a(c))}),[e]),(0,o.useEffect)((function(){e&&window.localStorage.setItem("token",JSON.stringify(t))}),[e,t]),t}var l=t(49382),d=t(19666);function m(e){var n=e.children,t=u(),s={portal:r.r.portal,locale:{default:"en"},session:{type:"OAuth",clientId:r.r.user.client_id,authToken:t,handleRefreshToken:a},theme:{palette:{primary:{main:"#7baa5d"},secondary:{main:"#4a8f62"}},components:{MuiIcon:{defaultProps:{baseClassName:"material-icons-outlined"}}}},handleAnonymousAction:function(){alert("Anonymous action")}};return o.createElement(d.Z,null,(function(){return o.createElement(l.SCContextProvider,{conf:s},n)}))}},27331:function(e,n,t){t.d(n,{r:function(){return o}});var o={user:{username:"beatrice",password:"Password!!Beatrice2021",client_id:"8HXeelXaQldhQmiSJDMhqNboELvDH402WIQIORFF",grant_type:"password"},portal:"https://www.fashionista.community"}},728:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return m},default:function(){return w},frontMatter:function(){return d},metadata:function(){return f},toc:function(){return h}});var o=t(83117),r=t(80102),s=t(67294),i=t(3905),a=t(19666);function c(){return s.createElement(a.Z,null,(function(){var e=t(49558).UsersFollowed;return s.createElement(e,{userId:7})}))}var u=t(92991),l=["components"],d={sidebar_label:"Users Followed",sidebar_position:1,title:"Users Followed"},m=void 0,f={unversionedId:"sdk/community-js/react-ui/Components/UsersFollowed",id:"sdk/community-js/react-ui/Components/UsersFollowed",title:"Users Followed",description:"The Users Followed component renders the list of the users followed by the user.",source:"@site/docs/sdk/community-js/react-ui/Components/UsersFollowed.mdx",sourceDirName:"sdk/community-js/react-ui/Components",slug:"/sdk/community-js/react-ui/Components/UsersFollowed",permalink:"/docs/sdk/community-js/react-ui/Components/UsersFollowed",editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/sdk/community-js/react-ui/Components/UsersFollowed.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Users Followed",sidebar_position:1,title:"Users Followed"},sidebar:"sdkSidebar",previous:{title:"User Profile Info",permalink:"/docs/sdk/community-js/react-ui/Components/UserProfileInfo"},next:{title:"Incubator",permalink:"/docs/sdk/community-js/react-ui/Components/incubator"}},p={},h=[{value:"Usage",id:"usage",level:4}],k={toc:h};function w(e){var n=e.components,t=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,o.Z)({},k,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The Users Followed component renders the list of the users followed by the user.",(0,i.kt)("br",null),"\nThis list is composed of items containing user's avatar and username, info (or followers counter) and a follow button that allows users to follow/unfollow others.",(0,i.kt)("br",null),'\nThe categories are shown in an orderly manner: few items are shown in the main card while the others can be displayed in a modal card by clicking on the "show all" button.')),(0,i.kt)(u.Z,{mdxType:"Logged"},(0,i.kt)(c,{mdxType:"UsersFollowed"})),(0,i.kt)("h4",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"}," import React from 'react';\n import {SCContextProvider} from '@selfcommunity/react-core';\n import {UsersFollowed} from '@selfcommunity/react-ui';\n\n function App() {\n   const conf = {\n     portal: '<community-path>',\n     session: {\n       type: 'OAuth',\n       token: '<community-token>',\n       refreshToken: '<community-refresh-token>',\n       refreshTokenEndpoint: '<community-refresh-endpoint>',\n     },\n   };\n   return (\n     <SCContextProvider conf={conf}><UsersFollowed /></SCContextProvider>\n   );\n }\n")))}w.isMDXComponent=!0}}]);