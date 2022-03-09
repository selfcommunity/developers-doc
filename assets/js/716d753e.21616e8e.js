"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[94257],{12241:function(o,t,n){n.d(t,{Z:function(){return s}});var e=n(67294),r=n(46105),u=n(99510),i=n(19666);function s(o){var t=o.children,n={portal:u.r.portal,locale:{default:"en"},session:{type:"OAuth",clientId:u.r.user.client_id},theme:{palette:{primary:{main:"#7baa5d"},secondary:{main:"#4a8f62"}},components:{MuiIcon:{defaultProps:{baseClassName:"material-icons-outlined"}}}},handleAnonymousAction:function(){alert("Anonymous action")}};return e.createElement(i.Z,null,(function(){return e.createElement(r.SCContextProvider,{conf:n},t)}))}},99510:function(o,t,n){n.d(t,{r:function(){return e}});var e={user:{username:"beatrice",password:"Password!!Beatrice2021",client_id:"8HXeelXaQldhQmiSJDMhqNboELvDH402WIQIORFF",grant_type:"password"},portal:"https://www.fashionista.community"}},13363:function(o,t,n){n.r(t),n.d(t,{assets:function(){return y},contentTitle:function(){return d},default:function(){return k},frontMatter:function(){return m},metadata:function(){return p},toc:function(){return f}});var e=n(87462),r=n(63366),u=n(67294),i=n(3905),s=n(19666);function a(){return u.createElement(s.Z,null,(function(){var o=n(78812).FollowCategoryButton;return u.createElement(o,null)}))}var l=n(12241),c=["components"],m={sidebar_label:"Follow Category Button",sidebar_position:1,title:"Follow Category Button"},d=void 0,p={unversionedId:"sdk/community-ui/sc-ui/Components/FollowCategoryButton",id:"sdk/community-ui/sc-ui/Components/FollowCategoryButton",title:"Follow Category Button",description:"The Follow Category Button component renders a button for category following.",source:"@site/docs/sdk/community-ui/sc-ui/Components/FollowCategoryButton.mdx",sourceDirName:"sdk/community-ui/sc-ui/Components",slug:"/sdk/community-ui/sc-ui/Components/FollowCategoryButton",permalink:"/docs/sdk/community-ui/sc-ui/Components/FollowCategoryButton",editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/sdk/community-ui/sc-ui/Components/FollowCategoryButton.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Follow Category Button",sidebar_position:1,title:"Follow Category Button"},sidebar:"sdkSidebar",previous:{title:"Feed Updates",permalink:"/docs/sdk/community-ui/sc-ui/Components/FeedUpdates"},next:{title:"Follow User Button",permalink:"/docs/sdk/community-ui/sc-ui/Components/FollowUserButton"}},y={},f=[{value:"Usage",id:"usage",level:4}],C={toc:f};function k(o){var t=o.components,n=(0,r.Z)(o,c);return(0,i.kt)("wrapper",(0,e.Z)({},C,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The Follow Category Button component renders a button for category following.")),(0,i.kt)("br",null),(0,i.kt)(l.Z,{mdxType:"Anonymous"},(0,i.kt)(a,{mdxType:"FollowCategoryButton"})),(0,i.kt)("h4",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"}," import React from 'react';\n import {SCContextProvider} from '@selfcommunity/core';\n import {FollowCategoryButton} from '@selfcommunity/ui';\n\n function App() {\n   const conf = {\n     portal: '<community-path>',\n     session: {\n       type: 'OAuth',\n       token: '<community-token>',\n       refreshToken: '<community-refresh-token>',\n       refreshTokenEndpoint: '<community-refresh-endpoint>',\n     },\n   };\n   return (\n     <SCContextProvider conf={conf}><FollowCategoryButton /></SCContextProvider>\n   );\n }\n")))}k.isMDXComponent=!0}}]);