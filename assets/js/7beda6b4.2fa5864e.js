"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[3771],{52169:function(e,o,t){t.d(o,{Z:function(){return m}});var n=t(67294),r=t(99510),i=t(5730);function s(e,o){void 0===e&&(e=""),void 0===o&&(o={});var t=Object.keys(o).map((function(e){return encodeURIComponent(e)+"="+encodeURIComponent(o[e])})).join("&");return fetch(e,{method:"POST",headers:{accept:"application/json","content-type":"application/x-www-form-urlencoded"},body:t})}function a(){if((0,i.Z)()){var e={refresh_token:JSON.parse(window.localStorage.getItem("token")).refresh_token,client_id:r.r.user.client_id,grant_type:"refresh_token"};return s(r.r.portal+"/oauth/token/",e).then((function(e){return e.json()})).then((function(e){return{accessToken:e.access_token,refreshToken:e.refresh_token,tokenType:e.token_type,expiresIn:e.expires_in}})).catch((function(e){return Promise.reject(e)}))}}var c=function(){if((0,i.Z)())return JSON.parse(window.localStorage.getItem("token"))};function u(){var e=(0,i.Z)(),o=(0,n.useState)(c),t=o[0],a=o[1];return(0,n.useEffect)((function(){e&&(!t||1e3*t.expiresIn<Date.now()?s(r.r.portal+"/oauth/token/",r.r.user).then((function(e){return e.json()})).then((function(e){return{accessToken:e.access_token,refreshToken:e.refresh_token,tokenType:e.token_type,expiresIn:e.expires_in}})).catch((function(e){return e})).then((function(e){a(e)})):a(c))}),[e]),(0,n.useEffect)((function(){e&&window.localStorage.setItem("token",JSON.stringify(t))}),[e,t]),t}var l=t(46105),d=t(19666);function m(e){var o=e.children,t=u(),i={portal:r.r.portal,locale:{default:"en"},session:{type:"OAuth",clientId:r.r.user.client_id,authToken:t,handleRefreshToken:a},theme:{palette:{primary:{main:"#7baa5d"},secondary:{main:"#4a8f62"}},components:{MuiIcon:{defaultProps:{baseClassName:"material-icons-outlined"}}}},handleAnonymousAction:function(){alert("Anonymous action")}};return n.createElement(d.Z,null,(function(){return n.createElement(l.SCContextProvider,{conf:i},o)}))}},99510:function(e,o,t){t.d(o,{r:function(){return n}});var n={user:{username:"beatrice",password:"Password!!Beatrice2021",client_id:"8HXeelXaQldhQmiSJDMhqNboELvDH402WIQIORFF",grant_type:"password"},portal:"https://www.fashionista.community"}},81129:function(e,o,t){t.r(o),t.d(o,{assets:function(){return f},contentTitle:function(){return m},default:function(){return g},frontMatter:function(){return d},metadata:function(){return p},toc:function(){return h}});var n=t(83117),r=t(80102),i=t(67294),s=t(3905),a=t(52169),c=t(19666);function u(){return i.createElement(c.Z,null,(function(){var e=t(78812).CategoriesFollowed;return i.createElement(e,{userId:7})}))}var l=["components"],d={sidebar_label:"Categories Followed",sidebar_position:1,title:"Categories Followed"},m=void 0,p={unversionedId:"sdk/community-ui/sc-ui/Components/CategoriesFollowed",id:"sdk/community-ui/sc-ui/Components/CategoriesFollowed",title:"Categories Followed",description:"The Categories Followed component renders the list of categories followed by the user.",source:"@site/docs/sdk/community-ui/sc-ui/Components/CategoriesFollowed.mdx",sourceDirName:"sdk/community-ui/sc-ui/Components",slug:"/sdk/community-ui/sc-ui/Components/CategoriesFollowed",permalink:"/docs/sdk/community-ui/sc-ui/Components/CategoriesFollowed",editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/sdk/community-ui/sc-ui/Components/CategoriesFollowed.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Categories Followed",sidebar_position:1,title:"Categories Followed"},sidebar:"sdkSidebar",previous:{title:"Broadcast Messages",permalink:"/docs/sdk/community-ui/sc-ui/Components/BroadcastMessages"},next:{title:"Categories Popular",permalink:"/docs/sdk/community-ui/sc-ui/Components/CategoriesPopular"}},f={},h=[{value:"Usage",id:"usage",level:4}],k={toc:h};function g(e){var o=e.components,t=(0,r.Z)(e,l);return(0,s.kt)("wrapper",(0,n.Z)({},k,t,{components:o,mdxType:"MDXLayout"}),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"The Categories Followed component renders the list of categories followed by the user.",(0,s.kt)("br",null),"\nThis list is composed of items containing category's image, title, info and a follow button, that allows users to follow/unfollow a category.",(0,s.kt)("br",null),'\nThe categories are shown in an orderly manner: few items are shown in the main card while the others can be displayed in a modal card by clicking on the "show all" button.')),(0,s.kt)(a.Z,{mdxType:"Logged"},(0,s.kt)(u,{mdxType:"CategoriesFollowed"})),(0,s.kt)("h4",{id:"usage"},"Usage"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx"}," import React from 'react';\n import {SCContextProvider} from '@selfcommunity/core';\n import {CategoriesFollowed} from '@selfcommunity/ui';\n\n function App() {\n   const conf = {\n     portal: '<community-path>',\n     session: {\n       type: 'OAuth',\n       token: '<community-token>',\n       refreshToken: '<community-refresh-token>',\n       refreshTokenEndpoint: '<community-refresh-endpoint>',\n     },\n   };\n   return (\n     <SCContextProvider conf={conf}><CategoriesFollowed /></SCContextProvider>\n   );\n }\n")))}g.isMDXComponent=!0}}]);