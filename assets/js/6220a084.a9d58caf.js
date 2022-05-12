"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[57609],{92991:function(e,t,n){n.d(t,{Z:function(){return l}});var o=n(67294),r=n(27331),a=n(5730);function s(e,t){void 0===e&&(e=""),void 0===t&&(t={});var n=Object.keys(t).map((function(e){return encodeURIComponent(e)+"="+encodeURIComponent(t[e])})).join("&");return fetch(e,{method:"POST",headers:{accept:"application/json","content-type":"application/x-www-form-urlencoded"},body:n})}function i(){if((0,a.Z)()){var e={refresh_token:JSON.parse(window.localStorage.getItem("token")).refresh_token,client_id:r.r.user.client_id,grant_type:"refresh_token"};return s(r.r.portal+"/oauth/token/",e).then((function(e){return e.json()})).then((function(e){return{accessToken:e.access_token,refreshToken:e.refresh_token,tokenType:e.token_type,expiresIn:e.expires_in}})).catch((function(e){return Promise.reject(e)}))}}var c=function(){if((0,a.Z)())return JSON.parse(window.localStorage.getItem("token"))};function u(){var e=(0,a.Z)(),t=(0,o.useState)(c),n=t[0],i=t[1];return(0,o.useEffect)((function(){e&&(!n||1e3*n.expiresIn<Date.now()?s(r.r.portal+"/oauth/token/",r.r.user).then((function(e){return e.json()})).then((function(e){return{accessToken:e.access_token,refreshToken:e.refresh_token,tokenType:e.token_type,expiresIn:e.expires_in}})).catch((function(e){return e})).then((function(e){i(e)})):i(c))}),[e]),(0,o.useEffect)((function(){e&&window.localStorage.setItem("token",JSON.stringify(n))}),[e,n]),n}var d=n(49382),m=n(19666);function l(e){var t=e.children,n=u(),a={portal:r.r.portal,locale:{default:"en"},session:{type:"OAuth",clientId:r.r.user.client_id,authToken:n,handleRefreshToken:i},theme:{palette:{primary:{main:"#7baa5d"},secondary:{main:"#4a8f62"}},components:{MuiIcon:{defaultProps:{baseClassName:"material-icons-outlined"}}}},handleAnonymousAction:function(){alert("Anonymous action")}};return o.createElement(m.Z,null,(function(){return o.createElement(d.SCContextProvider,{conf:a},t)}))}},27331:function(e,t,n){n.d(t,{r:function(){return o}});var o={user:{username:"beatrice",password:"Password!!Beatrice2021",client_id:"8HXeelXaQldhQmiSJDMhqNboELvDH402WIQIORFF",grant_type:"password"},portal:"https://www.fashionista.community"}},27067:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return m},metadata:function(){return p},toc:function(){return y}});var o=n(83117),r=n(80102),a=n(67294),s=n(3905),i=n(19666);function c(){return a.createElement(i.Z,null,(function(){var e=n(49558).CategoryHeader;return a.createElement(e,{categoryId:10})}))}var u=n(92991),d=["components"],m={sidebar_label:"Category Header",sidebar_position:1,title:"Category Header"},l=void 0,p={unversionedId:"sdk/community-js/react-ui/Components/CategoryHeader",id:"sdk/community-js/react-ui/Components/CategoryHeader",title:"Category Header",description:"The Category Header component renders a category header composed of category's cover, title, slogan and",source:"@site/docs/sdk/community-js/react-ui/Components/CategoryHeader.mdx",sourceDirName:"sdk/community-js/react-ui/Components",slug:"/sdk/community-js/react-ui/Components/CategoryHeader",permalink:"/docs/sdk/community-js/react-ui/Components/CategoryHeader",editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/sdk/community-js/react-ui/Components/CategoryHeader.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Category Header",sidebar_position:1,title:"Category Header"},sidebar:"sdkSidebar",previous:{title:"Category",permalink:"/docs/sdk/community-js/react-ui/Components/Category"},next:{title:"Change Cover",permalink:"/docs/sdk/community-js/react-ui/Components/ChangeCover"}},f={},y=[{value:"Usage",id:"usage",level:4}],k={toc:y};function h(e){var t=e.components,n=(0,r.Z)(e,d);return(0,s.kt)("wrapper",(0,o.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"The Category Header component renders a category header composed of category's cover, title, slogan and ",(0,s.kt)("br",null),"\na followers section followed by a button that allows users to follow/unfollow the category.")),(0,s.kt)(u.Z,{mdxType:"Logged"},(0,s.kt)(c,{mdxType:"CategoryHeader"})),(0,s.kt)("h4",{id:"usage"},"Usage"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx"}," import React from 'react';\n import {SCContextProvider} from '@selfcommunity/react-core';\n import {CategoryHeader} from '@selfcommunity/react-ui';\n\n function App() {\n   const conf = {\n     portal: '<community-path>',\n     session: {\n       type: 'OAuth',\n       token: '<community-token>',\n       refreshToken: '<community-refresh-token>',\n       refreshTokenEndpoint: '<community-refresh-endpoint>',\n     },\n   };\n   return (\n     <SCContextProvider conf={conf}><CategoryHeader /></SCContextProvider>\n   );\n }\n")))}h.isMDXComponent=!0}}]);