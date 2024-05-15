"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[12350],{26891:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>x,frontMatter:()=>c,metadata:()=>d,toc:()=>l});var n=r(85893),s=r(11151);const c={},o="components/provider/SCThemeProvider",d={id:"sdk/community-js/react-core/API_Reference/components/provider/SCThemeProvider",title:"components/provider/SCThemeProvider",description:"Variables",source:"@site/docs/sdk/community-js/react-core/API_Reference/components/provider/SCThemeProvider.md",sourceDirName:"sdk/community-js/react-core/API_Reference/components/provider",slug:"/sdk/community-js/react-core/API_Reference/components/provider/SCThemeProvider",permalink:"/docs/sdk/community-js/react-core/API_Reference/components/provider/SCThemeProvider",draft:!1,unlisted:!1,editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/sdk/community-js/react-core/API_Reference/components/provider/SCThemeProvider.md",tags:[],version:"current",frontMatter:{},sidebar:"sdkSidebar",previous:{title:"components/provider/SCRoutingProvider",permalink:"/docs/sdk/community-js/react-core/API_Reference/components/provider/SCRoutingProvider"},next:{title:"components/provider/SCUserProvider",permalink:"/docs/sdk/community-js/react-core/API_Reference/components/provider/SCUserProvider"}},i={},l=[{value:"Variables",id:"variables",level:2},{value:"SCThemeContext",id:"scthemecontext",level:3},{value:"Source",id:"source",level:4},{value:"Functions",id:"functions",level:2},{value:"SCThemeProvider()",id:"scthemeprovider",level:3},{value:"Description:",id:"description",level:4},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Source",id:"source-1",level:4},{value:"useSCTheme()",id:"usesctheme",level:3},{value:"Returns",id:"returns-1",level:4},{value:"Source",id:"source-2",level:4},{value:"withSCTheme()",id:"withsctheme",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Parameters",id:"parameters-2",level:5},{value:"Returns",id:"returns-3",level:5},{value:"Source",id:"source-3",level:4}];function h(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",hr:"hr",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"componentsproviderscthemeprovider",children:"components/provider/SCThemeProvider"}),"\n",(0,n.jsx)(t.h2,{id:"variables",children:"Variables"}),"\n",(0,n.jsx)(t.h3,{id:"scthemecontext",children:"SCThemeContext"}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"const"})," ",(0,n.jsx)(t.strong,{children:"SCThemeContext"}),": ",(0,n.jsx)(t.code,{children:"Context"})," <",(0,n.jsx)(t.a,{href:"/docs/sdk/community-js/react-core/API_Reference/types/context#scthemecontexttype",children:(0,n.jsx)(t.code,{children:"SCThemeContextType"})}),">"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Creates Global Context"}),"\n",(0,n.jsxs)(t.admonition,{title:"Context can be consumed in one of the following ways:",type:"tip",children:[(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-jsx",children:"1. <SCThemeContext.Consumer>{(theme,) => (...)}</SCThemeContext.Consumer>\n"})}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-jsx",children:"2. const scThemeContext: SCThemeContextType = useContext(SCThemeContext);\n"})}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-jsx",children:"3. const scThemeContext: SCThemeContextType = useSCTheme();\n"})})]}),"\n",(0,n.jsx)(t.h4,{id:"source",children:"Source"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://github.com/selfcommunity/community-js/blob/88ddf460a21d4471fb84839f097f9d428e19bd86/packages/react-core/src/components/provider/SCThemeProvider/index.tsx#L28",children:"packages/react-core/src/components/provider/SCThemeProvider/index.tsx:28"})}),"\n",(0,n.jsx)(t.h2,{id:"functions",children:"Functions"}),"\n",(0,n.jsx)(t.h3,{id:"scthemeprovider",children:"SCThemeProvider()"}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"SCThemeProvider"}),"(",(0,n.jsx)(t.code,{children:"children"}),"): ",(0,n.jsx)(t.code,{children:"JSX.Element"})]}),"\n"]}),"\n",(0,n.jsx)(t.h4,{id:"description",children:"Description:"}),"\n",(0,n.jsxs)(t.p,{children:["This component makes the ",(0,n.jsx)(t.code,{children:"theme"})," available down the React tree.\nIt should preferably be used at ",(0,n.jsx)(t.strong,{children:"the root of your component tree"}),".\nSee: ",(0,n.jsx)(t.a,{href:"https://mui.com/system/styled/",children:"https://mui.com/system/styled/"})]}),"\n",(0,n.jsx)(t.h4,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Parameter"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"children"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"object"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"children.children"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"ReactNode"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"-"})]})]})]}),"\n",(0,n.jsx)(t.h4,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:"JSX.Element"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-jsx",children:"<SCThemeContext.Provider value={{theme, setTheme: setCustomTheme}}>\n<ThemeProvider theme={theme}>{children}</ThemeProvider>\n</SCThemeContext.Provider>\n"})}),"\n",(0,n.jsx)(t.h4,{id:"source-1",children:"Source"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://github.com/selfcommunity/community-js/blob/88ddf460a21d4471fb84839f097f9d428e19bd86/packages/react-core/src/components/provider/SCThemeProvider/index.tsx#L44",children:"packages/react-core/src/components/provider/SCThemeProvider/index.tsx:44"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h3,{id:"usesctheme",children:"useSCTheme()"}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"useSCTheme"}),"(): ",(0,n.jsx)(t.a,{href:"/docs/sdk/community-js/react-core/API_Reference/types/context#scthemecontexttype",children:(0,n.jsx)(t.code,{children:"SCThemeContextType"})})]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Let's only export the ",(0,n.jsx)(t.code,{children:"useSCTheme"})," hook instead of the context.\nWe only want to use the hook directly and never the context component."]}),"\n",(0,n.jsx)(t.h4,{id:"returns-1",children:"Returns"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"/docs/sdk/community-js/react-core/API_Reference/types/context#scthemecontexttype",children:(0,n.jsx)(t.code,{children:"SCThemeContextType"})})}),"\n",(0,n.jsx)(t.h4,{id:"source-2",children:"Source"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://github.com/selfcommunity/community-js/blob/88ddf460a21d4471fb84839f097f9d428e19bd86/packages/react-core/src/components/provider/SCThemeProvider/index.tsx#L89",children:"packages/react-core/src/components/provider/SCThemeProvider/index.tsx:89"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h3,{id:"withsctheme",children:"withSCTheme()"}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"withSCTheme"}),"(",(0,n.jsx)(t.code,{children:"Component"}),"): (",(0,n.jsx)(t.code,{children:"props"}),") => ",(0,n.jsx)(t.code,{children:"Element"})]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Export hoc to inject the base theme to components"}),"\n",(0,n.jsx)(t.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Parameter"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"Component"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"any"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"}})]})})]}),"\n",(0,n.jsx)(t.h4,{id:"returns-2",children:"Returns"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:"Function"})}),"\n",(0,n.jsx)(t.h5,{id:"parameters-2",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Parameter"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"props"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"any"})})]})})]}),"\n",(0,n.jsx)(t.h5,{id:"returns-3",children:"Returns"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:"Element"})}),"\n",(0,n.jsx)(t.h4,{id:"source-3",children:"Source"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://github.com/selfcommunity/community-js/blob/88ddf460a21d4471fb84839f097f9d428e19bd86/packages/react-core/src/components/provider/SCThemeProvider/index.tsx#L76",children:"packages/react-core/src/components/provider/SCThemeProvider/index.tsx:76"})})]})}function x(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},11151:(e,t,r)=>{r.d(t,{Z:()=>d,a:()=>o});var n=r(67294);const s={},c=n.createContext(s);function o(e){const t=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(c.Provider,{value:t},e.children)}}}]);