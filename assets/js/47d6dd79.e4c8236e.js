"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[26754],{92991:function(e,n,t){t.d(n,{Z:function(){return d}});var o=t(67294),r=t(27331),a=t(5730);function i(e,n){void 0===e&&(e=""),void 0===n&&(n={});var t=Object.keys(n).map((function(e){return encodeURIComponent(e)+"="+encodeURIComponent(n[e])})).join("&");return fetch(e,{method:"POST",headers:{accept:"application/json","content-type":"application/x-www-form-urlencoded"},body:t})}function s(){if((0,a.Z)()){var e={refresh_token:JSON.parse(window.localStorage.getItem("token")).refresh_token,client_id:r.r.user.client_id,grant_type:"refresh_token"};return i(r.r.portal+"/oauth/token/",e).then((function(e){return e.json()})).then((function(e){return{accessToken:e.access_token,refreshToken:e.refresh_token,tokenType:e.token_type,expiresIn:e.expires_in}})).catch((function(e){return Promise.reject(e)}))}}var c=function(){if((0,a.Z)())return JSON.parse(window.localStorage.getItem("token"))};function u(){var e=(0,a.Z)(),n=(0,o.useState)(c),t=n[0],s=n[1];return(0,o.useEffect)((function(){e&&(!t||1e3*t.expiresIn<Date.now()?i(r.r.portal+"/oauth/token/",r.r.user).then((function(e){return e.json()})).then((function(e){return{accessToken:e.access_token,refreshToken:e.refresh_token,tokenType:e.token_type,expiresIn:e.expires_in}})).catch((function(e){return e})).then((function(e){s(e)})):s(c))}),[e]),(0,o.useEffect)((function(){e&&window.localStorage.setItem("token",JSON.stringify(t))}),[e,t]),t}var m=t(49382),l=t(19666);function d(e){var n=e.children,t=u(),a={portal:r.r.portal,locale:{default:"en"},session:{type:"OAuth",clientId:r.r.user.client_id,authToken:t,handleRefreshToken:s},theme:{palette:{primary:{main:"#7baa5d"},secondary:{main:"#4a8f62"}},components:{MuiIcon:{defaultProps:{baseClassName:"material-icons-outlined"}}}},handleAnonymousAction:function(){alert("Anonymous action")}};return o.createElement(l.Z,null,(function(){return o.createElement(m.SCContextProvider,{conf:a},n)}))}},27331:function(e,n,t){t.d(n,{r:function(){return o}});var o={user:{username:"beatrice",password:"Password!!Beatrice2021",client_id:"8HXeelXaQldhQmiSJDMhqNboELvDH402WIQIORFF",grant_type:"password"},portal:"https://www.fashionista.community"}},47781:function(e,n,t){t.r(n),t.d(n,{assets:function(){return y},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return f}});var o=t(83117),r=t(80102),a=t(67294),i=t(3905),s=t(19666);function c(){return a.createElement(s.Z,null,(function(){var e=t(49558).LoyaltyProgram;return a.createElement(e,null)}))}var u=t(92991),m=["components"],l={sidebar_label:"Loyalty Program",sidebar_position:1,title:"Loyalty Program"},d=void 0,p={unversionedId:"sdk/community-js/react-ui/Components/LoyaltyProgram",id:"sdk/community-js/react-ui/Components/LoyaltyProgram",title:"Loyalty Program",description:"The Loyalty Program component renders the loyalty program card.",source:"@site/docs/sdk/community-js/react-ui/Components/LoyaltyProgram.mdx",sourceDirName:"sdk/community-js/react-ui/Components",slug:"/sdk/community-js/react-ui/Components/LoyaltyProgram",permalink:"/docs/sdk/community-js/react-ui/Components/LoyaltyProgram",editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/sdk/community-js/react-ui/Components/LoyaltyProgram.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Loyalty Program",sidebar_position:1,title:"Loyalty Program"},sidebar:"sdkSidebar",previous:{title:"Inline Composer",permalink:"/docs/sdk/community-js/react-ui/Components/InlineComposer"},next:{title:"Message",permalink:"/docs/sdk/community-js/react-ui/Components/Message"}},y={},f=[{value:"Usage",id:"usage",level:4}],k={toc:f};function h(e){var n=e.components,t=(0,r.Z)(e,m);return(0,i.kt)("wrapper",(0,o.Z)({},k,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The Loyalty Program component renders the loyalty program card. ",(0,i.kt)("br",null),'\nIt is composed of a main section containing the program information, a section showing the points achieved by the user and\na "discover more" button that once clicked opens a modal containing the available prizes that can be request.')),(0,i.kt)(u.Z,{mdxType:"Logged"},(0,i.kt)(c,{mdxType:"LoyaltyProgram"})),(0,i.kt)("h4",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"}," import React from 'react';\n import {SCContextProvider} from '@selfcommunity/react-core';\n import {LoyaltyProgram} from '@selfcommunity/react-ui';\n\n function App() {\n   const conf = {\n     portal: '<community-path>',\n     session: {\n       type: 'OAuth',\n       token: '<community-token>',\n       refreshToken: '<community-refresh-token>',\n       refreshTokenEndpoint: '<community-refresh-endpoint>',\n     },\n   };\n   return (\n     <SCContextProvider conf={conf}><LoyaltyProgram /></SCContextProvider>\n   );\n }\n")))}h.isMDXComponent=!0}}]);