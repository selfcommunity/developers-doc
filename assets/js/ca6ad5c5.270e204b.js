"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[71893],{62590:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var o=n(85893),i=n(11151);const r={sidebar_label:"Introduction",sidebar_position:1,title:"Introduction"},c=void 0,s={id:"sdk/community-js/react-theme-default/introduction",title:"Introduction",description:"React-theme-default package contains the @selfcommunity custom theme.",source:"@site/docs/sdk/community-js/react-theme-default/introduction.md",sourceDirName:"sdk/community-js/react-theme-default",slug:"/sdk/community-js/react-theme-default/introduction",permalink:"/docs/sdk/community-js/react-theme-default/introduction",draft:!1,unlisted:!1,editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/sdk/community-js/react-theme-default/introduction.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Introduction",sidebar_position:1,title:"Introduction"},sidebar:"sdkSidebar",previous:{title:"Introduction",permalink:"/docs/sdk/community-js/react-i18n/introduction"},next:{title:"Reference",permalink:"/docs/sdk/community-js/types/Reference/"}},a={},d=[{value:"Usage",id:"usage",level:3}];function m(e){const t={a:"a",admonition:"admonition",code:"code",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.admonition,{type:"info",children:(0,o.jsxs)(t.p,{children:["React-theme-default package contains the @selfcommunity custom theme.",(0,o.jsx)("br",{}),"\nIt is based on Material-Ui ",(0,o.jsx)(t.a,{href:"https://mui.com/material-ui/customization/theming/",children:"Theming"}),", which you can consult to find all the information you need to configure and customize the theme."]})}),"\n",(0,o.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"/docs/sdk/community-js/getting_started/installation#install-react-theme-default",children:"Install"})," the ",(0,o.jsx)(t.strong,{children:"@selfcommunity/react-theme-default"})," package and pass it down to your provider context through configuration."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"import defaultTheme from '@selfcommunity/react-theme-default';\n\nimport React from 'react';\nimport {SCContextProvider} from '@selfcommunity/react-core';\nimport {MyComponent} from './MyComponent';\n\nfunction App() {\n    const conf = {\n        portal: '',\n        locale: {...},\n        session: {...},\n        theme: defaultTheme,\n    };\n    return (\n        <SCContextProvider conf={conf}><MyComponent /></SCContextProvider>\n    );\n}\n"})})]})}function u(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(m,{...e})}):m(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>c});var o=n(67294);const i={},r=o.createContext(i);function c(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);