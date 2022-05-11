"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[5370],{52169:function(e,n,t){t.d(n,{Z:function(){return m}});var o=t(67294),r=t(99510),i=t(5730);function s(e,n){void 0===e&&(e=""),void 0===n&&(n={});var t=Object.keys(n).map((function(e){return encodeURIComponent(e)+"="+encodeURIComponent(n[e])})).join("&");return fetch(e,{method:"POST",headers:{accept:"application/json","content-type":"application/x-www-form-urlencoded"},body:t})}function u(){if((0,i.Z)()){var e={refresh_token:JSON.parse(window.localStorage.getItem("token")).refresh_token,client_id:r.r.user.client_id,grant_type:"refresh_token"};return s(r.r.portal+"/oauth/token/",e).then((function(e){return e.json()})).then((function(e){return{accessToken:e.access_token,refreshToken:e.refresh_token,tokenType:e.token_type,expiresIn:e.expires_in}})).catch((function(e){return Promise.reject(e)}))}}var a=function(){if((0,i.Z)())return JSON.parse(window.localStorage.getItem("token"))};function c(){var e=(0,i.Z)(),n=(0,o.useState)(a),t=n[0],u=n[1];return(0,o.useEffect)((function(){e&&(!t||1e3*t.expiresIn<Date.now()?s(r.r.portal+"/oauth/token/",r.r.user).then((function(e){return e.json()})).then((function(e){return{accessToken:e.access_token,refreshToken:e.refresh_token,tokenType:e.token_type,expiresIn:e.expires_in}})).catch((function(e){return e})).then((function(e){u(e)})):u(a))}),[e]),(0,o.useEffect)((function(){e&&window.localStorage.setItem("token",JSON.stringify(t))}),[e,t]),t}var l=t(46105),p=t(19666);function m(e){var n=e.children,t=c(),i={portal:r.r.portal,locale:{default:"en"},session:{type:"OAuth",clientId:r.r.user.client_id,authToken:t,handleRefreshToken:u},theme:{palette:{primary:{main:"#7baa5d"},secondary:{main:"#4a8f62"}},components:{MuiIcon:{defaultProps:{baseClassName:"material-icons-outlined"}}}},handleAnonymousAction:function(){alert("Anonymous action")}};return o.createElement(p.Z,null,(function(){return o.createElement(l.SCContextProvider,{conf:i},n)}))}},99510:function(e,n,t){t.d(n,{r:function(){return o}});var o={user:{username:"beatrice",password:"Password!!Beatrice2021",client_id:"8HXeelXaQldhQmiSJDMhqNboELvDH402WIQIORFF",grant_type:"password"},portal:"https://www.fashionista.community"}},87693:function(e,n,t){t.r(n),t.d(n,{assets:function(){return f},contentTitle:function(){return m},default:function(){return h},frontMatter:function(){return p},metadata:function(){return d},toc:function(){return g}});var o=t(83117),r=t(80102),i=t(67294),s=t(3905),u=t(19666);function a(){return i.createElement(u.Z,null,(function(){var e=t(78812).PeopleSuggestion;return i.createElement(e,null)}))}var c=t(52169),l=["components"],p={sidebar_label:"People Suggestion",sidebar_position:1,title:"People Suggestion"},m=void 0,d={unversionedId:"sdk/community-ui/sc-ui/Components/PeopleSuggestion",id:"sdk/community-ui/sc-ui/Components/PeopleSuggestion",title:"People Suggestion",description:"The People Suggestion component renders a list of suggested people.",source:"@site/docs/sdk/community-ui/sc-ui/Components/PeopleSuggestion.mdx",sourceDirName:"sdk/community-ui/sc-ui/Components",slug:"/sdk/community-ui/sc-ui/Components/PeopleSuggestion",permalink:"/docs/sdk/community-ui/sc-ui/Components/PeopleSuggestion",editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/sdk/community-ui/sc-ui/Components/PeopleSuggestion.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"People Suggestion",sidebar_position:1,title:"People Suggestion"},sidebar:"sdkSidebar",previous:{title:"Message Editor",permalink:"/docs/sdk/community-ui/sc-ui/Components/MessageEditor"},next:{title:"Platform",permalink:"/docs/sdk/community-ui/sc-ui/Components/Platform"}},f={},g=[{value:"Usage",id:"usage",level:4}],k={toc:g};function h(e){var n=e.components,t=(0,r.Z)(e,l);return(0,s.kt)("wrapper",(0,o.Z)({},k,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"The People Suggestion component renders a list of suggested people.",(0,s.kt)("br",null),"\nThis list is composed of items containing user's avatar and username, info (or followers counter) and a follow button that allows users to follow/unfollow others.",(0,s.kt)("br",null),'\nThe categories are shown in an orderly manner: few items are shown in the main card while the others can be displayed in a modal card by clicking on the "show all" button.')),(0,s.kt)(c.Z,{mdxType:"Logged"},(0,s.kt)(a,{mdxType:"PeopleSuggestion"})),(0,s.kt)("h4",{id:"usage"},"Usage"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx"}," import React from 'react';\n import {SCContextProvider} from '@selfcommunity/core';\n import {PeopleSuggestion} from '@selfcommunity/ui';\n\n function App() {\n   const conf = {\n     portal: '<community-path>',\n     session: {\n       type: 'OAuth',\n       token: '<community-token>',\n       refreshToken: '<community-refresh-token>',\n       refreshTokenEndpoint: '<community-refresh-endpoint>',\n     },\n   };\n   return (\n     <SCContextProvider conf={conf}><PeopleSuggestion /></SCContextProvider>\n   );\n }\n")))}h.isMDXComponent=!0}}]);