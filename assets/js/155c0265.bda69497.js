"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[37997],{52169:function(e,t,n){n.d(t,{Z:function(){return d}});var o=n(67294),r=n(99510),i=n(5730);function a(e,t){void 0===e&&(e=""),void 0===t&&(t={});var n=Object.keys(t).map((function(e){return encodeURIComponent(e)+"="+encodeURIComponent(t[e])})).join("&");return fetch(e,{method:"POST",headers:{accept:"application/json","content-type":"application/x-www-form-urlencoded"},body:n})}function s(){if((0,i.Z)()){var e={refresh_token:JSON.parse(window.localStorage.getItem("token")).refresh_token,client_id:r.r.user.client_id,grant_type:"refresh_token"};return a(r.r.portal+"/oauth/token/",e).then((function(e){return e.json()})).then((function(e){return{accessToken:e.access_token,refreshToken:e.refresh_token,tokenType:e.token_type,expiresIn:e.expires_in}})).catch((function(e){return Promise.reject(e)}))}}var c=function(){if((0,i.Z)())return JSON.parse(window.localStorage.getItem("token"))};function u(){var e=(0,i.Z)(),t=(0,o.useState)(c),n=t[0],s=t[1];return(0,o.useEffect)((function(){e&&(!n||1e3*n.expiresIn<Date.now()?a(r.r.portal+"/oauth/token/",r.r.user).then((function(e){return e.json()})).then((function(e){return{accessToken:e.access_token,refreshToken:e.refresh_token,tokenType:e.token_type,expiresIn:e.expires_in}})).catch((function(e){return e})).then((function(e){s(e)})):s(c))}),[e]),(0,o.useEffect)((function(){e&&window.localStorage.setItem("token",JSON.stringify(n))}),[e,n]),n}var m=n(46105),l=n(19666);function d(e){var t=e.children,n=u(),i={portal:r.r.portal,locale:{default:"en"},session:{type:"OAuth",clientId:r.r.user.client_id,authToken:n,handleRefreshToken:s},theme:{palette:{primary:{main:"#7baa5d"},secondary:{main:"#4a8f62"}},components:{MuiIcon:{defaultProps:{baseClassName:"material-icons-outlined"}}}},handleAnonymousAction:function(){alert("Anonymous action")}};return o.createElement(l.Z,null,(function(){return o.createElement(m.SCContextProvider,{conf:i},t)}))}},99510:function(e,t,n){n.d(t,{r:function(){return o}});var o={user:{username:"beatrice",password:"Password!!Beatrice2021",client_id:"8HXeelXaQldhQmiSJDMhqNboELvDH402WIQIORFF",grant_type:"password"},portal:"https://www.fashionista.community"}},4670:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return d},default:function(){return g},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return y}});var o=n(87462),r=n(63366),i=n(67294),a=n(3905),s=n(19666);function c(){return i.createElement(s.Z,null,(function(){var e=n(78812).Category;return i.createElement(e,{categoryId:3})}))}var u=n(52169),m=["components"],l={sidebar_label:"Category",sidebar_position:1,title:"Category"},d=void 0,p={unversionedId:"sdk/community-ui/sc-ui/Components/Category",id:"sdk/community-ui/sc-ui/Components/Category",title:"Category",description:"The Category component renders a category item containing category's image, title, info and a follow button, that allows users to follow/unfollow a category.",source:"@site/docs/sdk/community-ui/sc-ui/Components/Category.mdx",sourceDirName:"sdk/community-ui/sc-ui/Components",slug:"/sdk/community-ui/sc-ui/Components/Category",permalink:"/docs/sdk/community-ui/sc-ui/Components/Category",editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/sdk/community-ui/sc-ui/Components/Category.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Category",sidebar_position:1,title:"Category"},sidebar:"sdkSidebar",previous:{title:"Categories Suggestion",permalink:"/docs/sdk/community-ui/sc-ui/Components/CategoriesSuggestion"},next:{title:"Category Header",permalink:"/docs/sdk/community-ui/sc-ui/Components/CategoryHeader"}},f={},y=[{value:"Usage",id:"usage",level:4}],k={toc:y};function g(e){var t=e.components,n=(0,r.Z)(e,m);return(0,a.kt)("wrapper",(0,o.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The Category component renders a category item containing category's image, title, info and a follow button,",(0,a.kt)("br",null)," that allows users to follow/unfollow a category.")),(0,a.kt)(u.Z,{mdxType:"Logged"},(0,a.kt)(c,{mdxType:"Category"})),(0,a.kt)("h4",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"}," import React from 'react';\n import {SCContextProvider} from '@selfcommunity/core';\n import {Category} from '@selfcommunity/ui';\n\n function App() {\n   const conf = {\n     portal: '<community-path>',\n     session: {\n       type: 'OAuth',\n       token: '<community-token>',\n       refreshToken: '<community-refresh-token>',\n       refreshTokenEndpoint: '<community-refresh-endpoint>',\n     },\n   };\n   return (\n     <SCContextProvider conf={conf}><Category /></SCContextProvider>\n   );\n }\n")))}g.isMDXComponent=!0}}]);