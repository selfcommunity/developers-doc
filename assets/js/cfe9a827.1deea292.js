"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[25901],{52169:function(e,n,t){t.d(n,{Z:function(){return d}});var o=t(67294),r=t(99510),i=t(5730);function c(e,n){void 0===e&&(e=""),void 0===n&&(n={});var t=Object.keys(n).map((function(e){return encodeURIComponent(e)+"="+encodeURIComponent(n[e])})).join("&");return fetch(e,{method:"POST",headers:{accept:"application/json","content-type":"application/x-www-form-urlencoded"},body:t})}function u(){if((0,i.Z)()){var e={refresh_token:JSON.parse(window.localStorage.getItem("token")).refresh_token,client_id:r.r.user.client_id,grant_type:"refresh_token"};return c(r.r.portal+"/oauth/token/",e).then((function(e){return e.json()})).then((function(e){return{accessToken:e.access_token,refreshToken:e.refresh_token,tokenType:e.token_type,expiresIn:e.expires_in}})).catch((function(e){return Promise.reject(e)}))}}var s=function(){if((0,i.Z)())return JSON.parse(window.localStorage.getItem("token"))};function a(){var e=(0,i.Z)(),n=(0,o.useState)(s),t=n[0],u=n[1];return(0,o.useEffect)((function(){e&&(!t||1e3*t.expiresIn<Date.now()?c(r.r.portal+"/oauth/token/",r.r.user).then((function(e){return e.json()})).then((function(e){return{accessToken:e.access_token,refreshToken:e.refresh_token,tokenType:e.token_type,expiresIn:e.expires_in}})).catch((function(e){return e})).then((function(e){u(e)})):u(s))}),[e]),(0,o.useEffect)((function(){e&&window.localStorage.setItem("token",JSON.stringify(t))}),[e,t]),t}var l=t(46105),m=t(19666);function d(e){var n=e.children,t=a(),i={portal:r.r.portal,locale:{default:"en"},session:{type:"OAuth",clientId:r.r.user.client_id,authToken:t,handleRefreshToken:u},theme:{palette:{primary:{main:"#7baa5d"},secondary:{main:"#4a8f62"}},components:{MuiIcon:{defaultProps:{baseClassName:"material-icons-outlined"}}}},handleAnonymousAction:function(){alert("Anonymous action")}};return o.createElement(m.Z,null,(function(){return o.createElement(l.SCContextProvider,{conf:i},n)}))}},99510:function(e,n,t){t.d(n,{r:function(){return o}});var o={user:{username:"beatrice",password:"Password!!Beatrice2021",client_id:"8HXeelXaQldhQmiSJDMhqNboELvDH402WIQIORFF",grant_type:"password"},portal:"https://www.fashionista.community"}},57127:function(e,n,t){t.r(n),t.d(n,{assets:function(){return f},contentTitle:function(){return d},default:function(){return C},frontMatter:function(){return m},metadata:function(){return p},toc:function(){return h}});var o=t(87462),r=t(63366),i=t(67294),c=t(3905),u=t(19666);function s(){return i.createElement(u.Z,null,(function(){var e=t(78812).ChangePicture;return i.createElement(e,null)}))}var a=t(52169),l=["components"],m={sidebar_label:"Change Picture",sidebar_position:1,title:"Change Picture"},d=void 0,p={unversionedId:"sdk/community-ui/sc-ui/Components/ChangePicture",id:"sdk/community-ui/sc-ui/Components/ChangePicture",title:"Change Picture",description:"The Change Picture component  renders a button that allows users to manage their profile pictures.",source:"@site/docs/sdk/community-ui/sc-ui/Components/ChangePicture.mdx",sourceDirName:"sdk/community-ui/sc-ui/Components",slug:"/sdk/community-ui/sc-ui/Components/ChangePicture",permalink:"/docs/sdk/community-ui/sc-ui/Components/ChangePicture",editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/sdk/community-ui/sc-ui/Components/ChangePicture.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Change Picture",sidebar_position:1,title:"Change Picture"},sidebar:"sdkSidebar",previous:{title:"Change Cover",permalink:"/docs/sdk/community-ui/sc-ui/Components/ChangeCover"},next:{title:"Comment Object",permalink:"/docs/sdk/community-ui/sc-ui/Components/CommentObject"}},f={},h=[{value:"Usage",id:"usage",level:4}],k={toc:h};function C(e){var n=e.components,t=(0,r.Z)(e,l);return(0,c.kt)("wrapper",(0,o.Z)({},k,t,{components:n,mdxType:"MDXLayout"}),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"The Change Picture component  renders a button that allows users to manage their profile pictures.",(0,c.kt)("br",null),"\nOnce clicked, the button opens a modal card where all previously uploaded pictures are shown, and from there ",(0,c.kt)("br",null),"\nit is possible to remove old pictures and also add new ones. ",(0,c.kt)("br",null),"\nThe last picture uploaded, or the selected one becomes the new profile picture.")),(0,c.kt)(a.Z,{mdxType:"Logged"},(0,c.kt)(s,{mdxType:"ChangePicture"})),(0,c.kt)("h4",{id:"usage"},"Usage"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-jsx"}," import React from 'react';\n import {SCContextProvider} from '@selfcommunity/core';\n import {ChangePicture} from '@selfcommunity/ui';\n\n function App() {\n   const conf = {\n     portal: '<community-path>',\n     session: {\n       type: 'OAuth',\n       token: '<community-token>',\n       refreshToken: '<community-refresh-token>',\n       refreshTokenEndpoint: '<community-refresh-endpoint>',\n     },\n   };\n   return (\n     <SCContextProvider conf={conf}><ChangePicture /></SCContextProvider>\n   );\n }\n")))}C.isMDXComponent=!0}}]);