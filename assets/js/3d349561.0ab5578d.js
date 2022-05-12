"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[70721],{49833:function(n,t,e){e.d(t,{Z:function(){return s}});var o=e(67294),i=e(49382),c=e(27331),r=e(19666);function s(n){var t=n.children,e={portal:c.r.portal,locale:{default:"en"},session:{type:"OAuth",clientId:c.r.user.client_id},theme:{palette:{primary:{main:"#7baa5d"},secondary:{main:"#4a8f62"}},components:{MuiIcon:{defaultProps:{baseClassName:"material-icons-outlined"}}}},handleAnonymousAction:function(){alert("Anonymous action")}};return o.createElement(r.Z,null,(function(){return o.createElement(i.SCContextProvider,{conf:e},t)}))}},27331:function(n,t,e){e.d(t,{r:function(){return o}});var o={user:{username:"beatrice",password:"Password!!Beatrice2021",client_id:"8HXeelXaQldhQmiSJDMhqNboELvDH402WIQIORFF",grant_type:"password"},portal:"https://www.fashionista.community"}},53347:function(n,t,e){e.r(t),e.d(t,{assets:function(){return f},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return k}});var o=e(83117),i=e(80102),c=e(67294),r=e(3905),s=e(49833),u=e(19666);function a(){return c.createElement(u.Z,null,(function(){var n=e(49558).AccountSignIn;return c.createElement(n,null)}))}var m=["components"],l={sidebar_label:"Account Sign In",sidebar_position:1,title:"Account Sign In"},d=void 0,p={unversionedId:"sdk/community-js/react-ui/Components/AccountSignIn",id:"sdk/community-js/react-ui/Components/AccountSignIn",title:"Account Sign In",description:"The Account Sign In component allows users to log in to the application with their usernames and passwords.",source:"@site/docs/sdk/community-js/react-ui/Components/AccountSignIn.mdx",sourceDirName:"sdk/community-js/react-ui/Components",slug:"/sdk/community-js/react-ui/Components/AccountSignIn",permalink:"/docs/sdk/community-js/react-ui/Components/AccountSignIn",editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/sdk/community-js/react-ui/Components/AccountSignIn.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Account Sign In",sidebar_position:1,title:"Account Sign In"},sidebar:"sdkSidebar",previous:{title:"Account Recover",permalink:"/docs/sdk/community-js/react-ui/Components/AccountRecover"},next:{title:"Account Sign Up",permalink:"/docs/sdk/community-js/react-ui/Components/AccountSignUp"}},f={},k=[{value:"Usage",id:"usage",level:4}],g={toc:k};function h(n){var t=n.components,e=(0,i.Z)(n,m);return(0,r.kt)("wrapper",(0,o.Z)({},g,e,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The Account Sign In component allows users to log in to the application with their usernames and passwords.",(0,r.kt)("br",null),'\nThis component is composed of a simple email and password form and a "sign in" button that submits the request.')),(0,r.kt)(s.Z,{mdxType:"Anonymous"},(0,r.kt)(a,{mdxType:"AccountSignIn"})),(0,r.kt)("h4",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"}," import React from 'react';\n import {SCContextProvider} from '@selfcommunity/react-core';\n import {AccountSignIn} from '@selfcommunity/react-ui';\n\n function App() {\n   const conf = {\n     portal: '<community-path>',\n     session: {\n       type: 'OAuth',\n       token: '<community-token>',\n       refreshToken: '<community-refresh-token>',\n       refreshTokenEndpoint: '<community-refresh-endpoint>',\n     },\n   };\n   return (\n     <SCContextProvider conf={conf}><AccountSignIn /></SCContextProvider>\n   );\n }\n")))}h.isMDXComponent=!0}}]);