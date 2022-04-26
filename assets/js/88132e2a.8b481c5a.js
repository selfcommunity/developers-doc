"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[4894],{12241:function(n,t,e){e.d(t,{Z:function(){return s}});var o=e(67294),i=e(46105),c=e(99510),r=e(19666);function s(n){var t=n.children,e={portal:c.r.portal,locale:{default:"en"},session:{type:"OAuth",clientId:c.r.user.client_id},theme:{palette:{primary:{main:"#7baa5d"},secondary:{main:"#4a8f62"}},components:{MuiIcon:{defaultProps:{baseClassName:"material-icons-outlined"}}}},handleAnonymousAction:function(){alert("Anonymous action")}};return o.createElement(r.Z,null,(function(){return o.createElement(i.SCContextProvider,{conf:e},t)}))}},99510:function(n,t,e){e.d(t,{r:function(){return o}});var o={user:{username:"beatrice",password:"Password!!Beatrice2021",client_id:"8HXeelXaQldhQmiSJDMhqNboELvDH402WIQIORFF",grant_type:"password"},portal:"https://www.fashionista.community"}},81644:function(n,t,e){e.r(t),e.d(t,{assets:function(){return f},contentTitle:function(){return d},default:function(){return y},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return k}});var o=e(87462),i=e(63366),c=e(67294),r=e(3905),s=e(19666);function u(){return c.createElement(s.Z,null,(function(){var n=e(78812).AccountSignUp;return c.createElement(n,null)}))}var a=e(12241),m=["components"],p={sidebar_label:"Account Sign Up",sidebar_position:1,title:"Account Sign Up"},d=void 0,l={unversionedId:"sdk/community-ui/sc-ui/Components/AccountSignUp",id:"sdk/community-ui/sc-ui/Components/AccountSignUp",title:"Account Sign Up",description:"The Account Sign Up component allows users to create an account.",source:"@site/docs/sdk/community-ui/sc-ui/Components/AccountSignUp.mdx",sourceDirName:"sdk/community-ui/sc-ui/Components",slug:"/sdk/community-ui/sc-ui/Components/AccountSignUp",permalink:"/docs/sdk/community-ui/sc-ui/Components/AccountSignUp",editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/sdk/community-ui/sc-ui/Components/AccountSignUp.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Account Sign Up",sidebar_position:1,title:"Account Sign Up"},sidebar:"sdkSidebar",previous:{title:"Account Sign In",permalink:"/docs/sdk/community-ui/sc-ui/Components/AccountSignIn"},next:{title:"Broadcast Messages",permalink:"/docs/sdk/community-ui/sc-ui/Components/BroadcastMessages"}},f={},k=[{value:"Usage",id:"usage",level:4}],g={toc:k};function y(n){var t=n.components,e=(0,i.Z)(n,m);return(0,r.kt)("wrapper",(0,o.Z)({},g,e,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The Account Sign Up component allows users to create an account.",(0,r.kt)("br",null),'\nThis component is composed of a simple email, username and password form and a "register" button that submits the request.')),(0,r.kt)(a.Z,{mdxType:"Anonymous"},(0,r.kt)(u,{mdxType:"AccountSignUp"})),(0,r.kt)("h4",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"}," import React from 'react';\n import {SCContextProvider} from '@selfcommunity/core';\n import {AccountSignUp} from '@selfcommunity/ui';\n\n function App() {\n   const conf = {\n     portal: '<community-path>',\n     session: {\n       type: 'OAuth',\n       token: '<community-token>',\n       refreshToken: '<community-refresh-token>',\n       refreshTokenEndpoint: '<community-refresh-endpoint>',\n     },\n   };\n   return (\n     <SCContextProvider conf={conf}><AccountSignUp /></SCContextProvider>\n   );\n }\n")))}y.isMDXComponent=!0}}]);