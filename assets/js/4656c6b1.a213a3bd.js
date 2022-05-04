"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[27318],{52169:function(e,n,t){t.d(n,{Z:function(){return p}});var o=t(67294),r=t(99510),s=t(5730);function i(e,n){void 0===e&&(e=""),void 0===n&&(n={});var t=Object.keys(n).map((function(e){return encodeURIComponent(e)+"="+encodeURIComponent(n[e])})).join("&");return fetch(e,{method:"POST",headers:{accept:"application/json","content-type":"application/x-www-form-urlencoded"},body:t})}function a(){if((0,s.Z)()){var e={refresh_token:JSON.parse(window.localStorage.getItem("token")).refresh_token,client_id:r.r.user.client_id,grant_type:"refresh_token"};return i(r.r.portal+"/oauth/token/",e).then((function(e){return e.json()})).then((function(e){return{accessToken:e.access_token,refreshToken:e.refresh_token,tokenType:e.token_type,expiresIn:e.expires_in}})).catch((function(e){return Promise.reject(e)}))}}var c=function(){if((0,s.Z)())return JSON.parse(window.localStorage.getItem("token"))};function u(){var e=(0,s.Z)(),n=(0,o.useState)(c),t=n[0],a=n[1];return(0,o.useEffect)((function(){e&&(!t||1e3*t.expiresIn<Date.now()?i(r.r.portal+"/oauth/token/",r.r.user).then((function(e){return e.json()})).then((function(e){return{accessToken:e.access_token,refreshToken:e.refresh_token,tokenType:e.token_type,expiresIn:e.expires_in}})).catch((function(e){return e})).then((function(e){a(e)})):a(c))}),[e]),(0,o.useEffect)((function(){e&&window.localStorage.setItem("token",JSON.stringify(t))}),[e,t]),t}var d=t(46105),m=t(19666);function p(e){var n=e.children,t=u(),s={portal:r.r.portal,locale:{default:"en"},session:{type:"OAuth",clientId:r.r.user.client_id,authToken:t,handleRefreshToken:a},theme:{palette:{primary:{main:"#7baa5d"},secondary:{main:"#4a8f62"}},components:{MuiIcon:{defaultProps:{baseClassName:"material-icons-outlined"}}}},handleAnonymousAction:function(){alert("Anonymous action")}};return o.createElement(m.Z,null,(function(){return o.createElement(d.SCContextProvider,{conf:s},n)}))}},99510:function(e,n,t){t.d(n,{r:function(){return o}});var o={user:{username:"beatrice",password:"Password!!Beatrice2021",client_id:"8HXeelXaQldhQmiSJDMhqNboELvDH402WIQIORFF",grant_type:"password"},portal:"https://www.fashionista.community"}},10444:function(e,n,t){t.r(n),t.d(n,{assets:function(){return f},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return m},metadata:function(){return l},toc:function(){return k}});var o=t(83117),r=t(80102),s=t(67294),i=t(3905),a=t(19666);function c(){return s.createElement(a.Z,null,(function(){var e=t(78812).MessageEditor;return s.createElement(e,null)}))}var u=t(52169),d=["components"],m={sidebar_label:"Message Editor",sidebar_position:1,title:"Message Editor"},p=void 0,l={unversionedId:"sdk/community-ui/sc-ui/Components/MessageEditor",id:"sdk/community-ui/sc-ui/Components/MessageEditor",title:"Message Editor",description:"The Message component renders a message editor with emoji and attach media menus.",source:"@site/docs/sdk/community-ui/sc-ui/Components/MessageEditor.mdx",sourceDirName:"sdk/community-ui/sc-ui/Components",slug:"/sdk/community-ui/sc-ui/Components/MessageEditor",permalink:"/docs/sdk/community-ui/sc-ui/Components/MessageEditor",editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/sdk/community-ui/sc-ui/Components/MessageEditor.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Message Editor",sidebar_position:1,title:"Message Editor"},sidebar:"sdkSidebar",previous:{title:"Message",permalink:"/docs/sdk/community-ui/sc-ui/Components/Message"},next:{title:"People Suggestion",permalink:"/docs/sdk/community-ui/sc-ui/Components/PeopleSuggestion"}},f={},k=[{value:"Usage",id:"usage",level:4}],h={toc:k};function g(e){var n=e.components,t=(0,r.Z)(e,d);return(0,i.kt)("wrapper",(0,o.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The Message component renders a message editor with emoji and attach media menus.")),(0,i.kt)("br",null),(0,i.kt)(u.Z,{mdxType:"Logged"},(0,i.kt)(c,{mdxType:"MessageEditor"})),(0,i.kt)("h4",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"}," import React from 'react';\n import {SCContextProvider} from '@selfcommunity/core';\n import {MessageEditor} from '@selfcommunity/ui';\n\n function App() {\n   const conf = {\n     portal: '<community-path>',\n     session: {\n       type: 'OAuth',\n       token: '<community-token>',\n       refreshToken: '<community-refresh-token>',\n       refreshTokenEndpoint: '<community-refresh-endpoint>',\n     },\n   };\n   return (\n     <SCContextProvider conf={conf}><MessageEditor /></SCContextProvider>\n   );\n }\n")))}g.isMDXComponent=!0}}]);