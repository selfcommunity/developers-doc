"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[56375],{93391:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>a});var o=t(85893),r=t(11151);const s={sidebar_label:"Change Group Picture",sidebar_position:1,title:"Change Group Picture"},c=void 0,i={id:"sdk/community-js/react-ui/Components/ChangeGroupPicture",title:"Change Group Picture",description:"The Change Group Picture component  renders a button that allows group managers to manage their group picture.",source:"@site/docs/sdk/community-js/react-ui/Components/ChangeGroupPicture.mdx",sourceDirName:"sdk/community-js/react-ui/Components",slug:"/sdk/community-js/react-ui/Components/ChangeGroupPicture",permalink:"/docs/sdk/community-js/react-ui/Components/ChangeGroupPicture",draft:!1,unlisted:!1,editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/sdk/community-js/react-ui/Components/ChangeGroupPicture.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Change Group Picture",sidebar_position:1,title:"Change Group Picture"},sidebar:"sdkSidebar",previous:{title:"Change Group Cover",permalink:"/docs/sdk/community-js/react-ui/Components/ChangeGroupCover"},next:{title:"Change Picture",permalink:"/docs/sdk/community-js/react-ui/Components/ChangePicture"}},u={},a=[{value:"Usage",id:"usage",level:4}];function p(e){const n={blockquote:"blockquote",code:"code",h4:"h4",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["The Change Group Picture component  renders a button that allows group managers to manage their group picture.",(0,o.jsx)("br",{}),"\nOnce clicked, the button opens the selector to choose the new group image. ",(0,o.jsx)("br",{})]}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",children:" import React from 'react';\n import {SCContextProvider} from '@selfcommunity/react-core';\n import {ChangeGroupPicture} from '@selfcommunity/react-ui';\n\n function App() {\n   const conf = {\n     portal: '<community-path>',\n     session: {\n       type: 'OAuth',\n       token: '<community-token>',\n       refreshToken: '<community-refresh-token>',\n       refreshTokenEndpoint: '<community-refresh-endpoint>',\n     },\n   };\n   return (\n     <SCContextProvider conf={conf}><ChangeGroupPicture /></SCContextProvider>\n   );\n }\n"})})]})}function m(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>c});var o=t(67294);const r={},s=o.createContext(r);function c(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);