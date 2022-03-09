"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[90403],{52169:function(e,n,o){o.d(n,{Z:function(){return d}});var t=o(67294),r=o(99510),s=o(5730);function i(e,n){void 0===e&&(e=""),void 0===n&&(n={});var o=Object.keys(n).map((function(e){return encodeURIComponent(e)+"="+encodeURIComponent(n[e])})).join("&");return fetch(e,{method:"POST",headers:{accept:"application/json","content-type":"application/x-www-form-urlencoded"},body:o})}function c(){if((0,s.Z)()){var e={refresh_token:JSON.parse(window.localStorage.getItem("token")).refresh_token,client_id:r.r.user.client_id,grant_type:"refresh_token"};return i(r.r.portal+"/oauth/token/",e).then((function(e){return e.json()})).then((function(e){return{accessToken:e.access_token,refreshToken:e.refresh_token,tokenType:e.token_type,expiresIn:e.expires_in}})).catch((function(e){return Promise.reject(e)}))}}var u=function(){if((0,s.Z)())return JSON.parse(window.localStorage.getItem("token"))};function a(){var e=(0,s.Z)(),n=(0,t.useState)(u),o=n[0],c=n[1];return(0,t.useEffect)((function(){e&&(!o||1e3*o.expiresIn<Date.now()?i(r.r.portal+"/oauth/token/",r.r.user).then((function(e){return e.json()})).then((function(e){return{accessToken:e.access_token,refreshToken:e.refresh_token,tokenType:e.token_type,expiresIn:e.expires_in}})).catch((function(e){return e})).then((function(e){c(e)})):c(u))}),[e]),(0,t.useEffect)((function(){e&&window.localStorage.setItem("token",JSON.stringify(o))}),[e,o]),o}var m=o(46105),p=o(19666);function d(e){var n=e.children,o=a(),s={portal:r.r.portal,locale:{default:"en"},session:{type:"OAuth",clientId:r.r.user.client_id,authToken:o,handleRefreshToken:c},theme:{palette:{primary:{main:"#7baa5d"},secondary:{main:"#4a8f62"}},components:{MuiIcon:{defaultProps:{baseClassName:"material-icons-outlined"}}}},handleAnonymousAction:function(){alert("Anonymous action")}};return t.createElement(p.Z,null,(function(){return t.createElement(m.SCContextProvider,{conf:s},n)}))}},99510:function(e,n,o){o.d(n,{r:function(){return t}});var t={user:{username:"beatrice",password:"Password!!Beatrice2021",client_id:"8HXeelXaQldhQmiSJDMhqNboELvDH402WIQIORFF",grant_type:"password"},portal:"https://www.fashionista.community"}},78653:function(e,n,o){o.r(n),o.d(n,{assets:function(){return f},contentTitle:function(){return d},default:function(){return C},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return k}});var t=o(87462),r=o(63366),s=o(67294),i=o(3905),c=o(19666);function u(){return s.createElement(c.Z,null,(function(){var e=o(78812).Composer;return s.createElement(e,null)}))}var a=o(52169),m=["components"],p={sidebar_label:"Composer",sidebar_position:1,title:"Composer"},d=void 0,l={unversionedId:"sdk/community-ui/sc-ui/Components/Composer",id:"sdk/community-ui/sc-ui/Components/Composer",title:"Composer",description:"The Composer component renders a composer.",source:"@site/docs/sdk/community-ui/sc-ui/Components/Composer.mdx",sourceDirName:"sdk/community-ui/sc-ui/Components",slug:"/sdk/community-ui/sc-ui/Components/Composer",permalink:"/docs/sdk/community-ui/sc-ui/Components/Composer",editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/sdk/community-ui/sc-ui/Components/Composer.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Composer",sidebar_position:1,title:"Composer"},sidebar:"sdkSidebar",previous:{title:"Comments Object",permalink:"/docs/sdk/community-ui/sc-ui/Components/CommentsObject"},next:{title:"Custom Adv",permalink:"/docs/sdk/community-ui/sc-ui/Components/CustomAdv"}},f={},k=[{value:"Usage",id:"usage",level:4}],h={toc:k};function C(e){var n=e.components,o=(0,r.Z)(e,m);return(0,i.kt)("wrapper",(0,t.Z)({},h,o,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The Composer component renders a composer.")),(0,i.kt)(a.Z,{mdxType:"Logged"},(0,i.kt)(u,{mdxType:"Composer"})),(0,i.kt)("h4",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"}," import React from 'react';\n import {SCContextProvider} from '@selfcommunity/core';\n import {Composer} from '@selfcommunity/ui';\n\n function App() {\n   const conf = {\n     portal: '<community-path>',\n     session: {\n       type: 'OAuth',\n       token: '<community-token>',\n       refreshToken: '<community-refresh-token>',\n       refreshTokenEndpoint: '<community-refresh-endpoint>',\n     },\n   };\n   return (\n     <SCContextProvider conf={conf}><Composer /></SCContextProvider>\n   );\n }\n")))}C.isMDXComponent=!0}}]);