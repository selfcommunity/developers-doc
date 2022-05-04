"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[12200],{52169:function(e,n,t){t.d(n,{Z:function(){return m}});var o=t(67294),r=t(99510),i=t(5730);function s(e,n){void 0===e&&(e=""),void 0===n&&(n={});var t=Object.keys(n).map((function(e){return encodeURIComponent(e)+"="+encodeURIComponent(n[e])})).join("&");return fetch(e,{method:"POST",headers:{accept:"application/json","content-type":"application/x-www-form-urlencoded"},body:t})}function a(){if((0,i.Z)()){var e={refresh_token:JSON.parse(window.localStorage.getItem("token")).refresh_token,client_id:r.r.user.client_id,grant_type:"refresh_token"};return s(r.r.portal+"/oauth/token/",e).then((function(e){return e.json()})).then((function(e){return{accessToken:e.access_token,refreshToken:e.refresh_token,tokenType:e.token_type,expiresIn:e.expires_in}})).catch((function(e){return Promise.reject(e)}))}}var u=function(){if((0,i.Z)())return JSON.parse(window.localStorage.getItem("token"))};function c(){var e=(0,i.Z)(),n=(0,o.useState)(u),t=n[0],a=n[1];return(0,o.useEffect)((function(){e&&(!t||1e3*t.expiresIn<Date.now()?s(r.r.portal+"/oauth/token/",r.r.user).then((function(e){return e.json()})).then((function(e){return{accessToken:e.access_token,refreshToken:e.refresh_token,tokenType:e.token_type,expiresIn:e.expires_in}})).catch((function(e){return e})).then((function(e){a(e)})):a(u))}),[e]),(0,o.useEffect)((function(){e&&window.localStorage.setItem("token",JSON.stringify(t))}),[e,t]),t}var l=t(46105),p=t(19666);function m(e){var n=e.children,t=c(),i={portal:r.r.portal,locale:{default:"en"},session:{type:"OAuth",clientId:r.r.user.client_id,authToken:t,handleRefreshToken:a},theme:{palette:{primary:{main:"#7baa5d"},secondary:{main:"#4a8f62"}},components:{MuiIcon:{defaultProps:{baseClassName:"material-icons-outlined"}}}},handleAnonymousAction:function(){alert("Anonymous action")}};return o.createElement(p.Z,null,(function(){return o.createElement(l.SCContextProvider,{conf:i},n)}))}},99510:function(e,n,t){t.d(n,{r:function(){return o}});var o={user:{username:"beatrice",password:"Password!!Beatrice2021",client_id:"8HXeelXaQldhQmiSJDMhqNboELvDH402WIQIORFF",grant_type:"password"},portal:"https://www.fashionista.community"}},27452:function(e,n,t){t.r(n),t.d(n,{assets:function(){return f},contentTitle:function(){return m},default:function(){return g},frontMatter:function(){return p},metadata:function(){return d},toc:function(){return k}});var o=t(83117),r=t(80102),i=t(67294),s=t(3905),a=t(19666);function u(){return i.createElement(a.Z,null,(function(){var e=t(78812).CategoriesPopular;return i.createElement(e,null)}))}var c=t(52169),l=["components"],p={sidebar_label:"Categories Popular",sidebar_position:1,title:"Categories Popular"},m=void 0,d={unversionedId:"sdk/community-ui/sc-ui/Components/CategoriesPopular",id:"sdk/community-ui/sc-ui/Components/CategoriesPopular",title:"Categories Popular",description:"The Categories Popular component renders a list of popular categories.",source:"@site/docs/sdk/community-ui/sc-ui/Components/CategoriesPopular.mdx",sourceDirName:"sdk/community-ui/sc-ui/Components",slug:"/sdk/community-ui/sc-ui/Components/CategoriesPopular",permalink:"/docs/sdk/community-ui/sc-ui/Components/CategoriesPopular",editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/sdk/community-ui/sc-ui/Components/CategoriesPopular.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Categories Popular",sidebar_position:1,title:"Categories Popular"},sidebar:"sdkSidebar",previous:{title:"Categories Followed",permalink:"/docs/sdk/community-ui/sc-ui/Components/CategoriesFollowed"},next:{title:"Categories Suggestion",permalink:"/docs/sdk/community-ui/sc-ui/Components/CategoriesSuggestion"}},f={},k=[{value:"Usage",id:"usage",level:4}],h={toc:k};function g(e){var n=e.components,t=(0,r.Z)(e,l);return(0,s.kt)("wrapper",(0,o.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"The Categories Popular component renders a list of popular categories.",(0,s.kt)("br",null),"\nThis list is composed of items containing category's image, title, info and a follow button, that allows users to follow/unfollow a category.",(0,s.kt)("br",null),'\nThe categories are shown in an orderly manner: few items are shown in the main card while the others can be displayed in a modal card by clicking on the "show all" button.')),(0,s.kt)(c.Z,{mdxType:"Logged"},(0,s.kt)(u,{mdxType:"CategoriesPopular"})),(0,s.kt)("h4",{id:"usage"},"Usage"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx"}," import React from 'react';\n import {SCContextProvider} from '@selfcommunity/core';\n import {CategoriesPopular} from '@selfcommunity/ui';\n\n function App() {\n   const conf = {\n     portal: '<community-path>',\n     session: {\n       type: 'OAuth',\n       token: '<community-token>',\n       refreshToken: '<community-refresh-token>',\n       refreshTokenEndpoint: '<community-refresh-endpoint>',\n     },\n   };\n   return (\n     <SCContextProvider conf={conf}><CategoriesPopular /></SCContextProvider>\n   );\n }\n")))}g.isMDXComponent=!0}}]);