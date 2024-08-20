"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[9642],{96419:(e,c,n)=>{n.r(c),n.d(c,{assets:()=>i,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var t=n(85893),r=n(11151);const o={},s="components/provider/SCLocaleProvider",l={id:"sdk/community-js/react-core/API_Reference/components/provider/SCLocaleProvider",title:"components/provider/SCLocaleProvider",description:"Variables",source:"@site/docs/sdk/community-js/react-core/API_Reference/components/provider/SCLocaleProvider.md",sourceDirName:"sdk/community-js/react-core/API_Reference/components/provider",slug:"/sdk/community-js/react-core/API_Reference/components/provider/SCLocaleProvider",permalink:"/docs/sdk/community-js/react-core/API_Reference/components/provider/SCLocaleProvider",draft:!1,unlisted:!1,editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/sdk/community-js/react-core/API_Reference/components/provider/SCLocaleProvider.md",tags:[],version:"current",frontMatter:{},sidebar:"sdkSidebar",previous:{title:"components/provider/SCContextProvider",permalink:"/docs/sdk/community-js/react-core/API_Reference/components/provider/SCContextProvider"},next:{title:"components/provider/SCNotificationProvider",permalink:"/docs/sdk/community-js/react-core/API_Reference/components/provider/SCNotificationProvider"}},i={},d=[{value:"Variables",id:"variables",level:2},{value:"SCLocaleContext",id:"sclocalecontext",level:3},{value:"Source",id:"source",level:4},{value:"Functions",id:"functions",level:2},{value:"SCLocaleProvider()",id:"sclocaleprovider",level:3},{value:"Description:",id:"description",level:4},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Source",id:"source-1",level:4},{value:"useSCLocale()",id:"usesclocale",level:3},{value:"Returns",id:"returns-1",level:4},{value:"Source",id:"source-2",level:4},{value:"withSCLocale()",id:"withsclocale",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Parameters",id:"parameters-2",level:5},{value:"Returns",id:"returns-3",level:5},{value:"Source",id:"source-3",level:4}];function a(e){const c={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",hr:"hr",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c.h1,{id:"componentsprovidersclocaleprovider",children:"components/provider/SCLocaleProvider"}),"\n",(0,t.jsx)(c.h2,{id:"variables",children:"Variables"}),"\n",(0,t.jsx)(c.h3,{id:"sclocalecontext",children:"SCLocaleContext"}),"\n",(0,t.jsxs)(c.blockquote,{children:["\n",(0,t.jsxs)(c.p,{children:[(0,t.jsx)(c.code,{children:"const"})," ",(0,t.jsx)(c.strong,{children:"SCLocaleContext"}),": ",(0,t.jsx)(c.code,{children:"Context"})," <",(0,t.jsx)(c.a,{href:"/docs/sdk/community-js/react-core/API_Reference/types/context#sclocalecontexttype",children:(0,t.jsx)(c.code,{children:"SCLocaleContextType"})}),">"]}),"\n"]}),"\n",(0,t.jsx)(c.p,{children:"Creates Global Context"}),"\n",(0,t.jsxs)(c.admonition,{title:"Context can be consumed in one of the following ways:",type:"tip",children:[(0,t.jsx)(c.pre,{children:(0,t.jsx)(c.code,{className:"language-jsx",children:"1. <SCLocaleContext.Consumer>{(locale,) => (...)}</SCLocaleContext.Consumer>\n"})}),(0,t.jsx)(c.pre,{children:(0,t.jsx)(c.code,{className:"language-jsx",children:"2. const scLocaleContext: SCLocaleContextType = useContext(SCLocaleContext);\n"})}),(0,t.jsx)(c.pre,{children:(0,t.jsx)(c.code,{className:"language-jsx",children:"3. const scLocaleContext: SCLocaleContextType = useSCLocale();\n"})})]}),"\n",(0,t.jsx)(c.h4,{id:"source",children:"Source"}),"\n",(0,t.jsx)(c.p,{children:(0,t.jsx)(c.a,{href:"https://github.com/selfcommunity/community-js/blob/90e94cee1f6262cadce2c42df8534d4251c4e8a5/packages/react-core/src/components/provider/SCLocaleProvider/index.tsx#L27",children:"packages/react-core/src/components/provider/SCLocaleProvider/index.tsx:27"})}),"\n",(0,t.jsx)(c.h2,{id:"functions",children:"Functions"}),"\n",(0,t.jsx)(c.h3,{id:"sclocaleprovider",children:"SCLocaleProvider()"}),"\n",(0,t.jsxs)(c.blockquote,{children:["\n",(0,t.jsxs)(c.p,{children:[(0,t.jsx)(c.strong,{children:"SCLocaleProvider"}),"(",(0,t.jsx)(c.code,{children:"children"}),"): ",(0,t.jsx)(c.code,{children:"JSX.Element"})]}),"\n"]}),"\n",(0,t.jsx)(c.h4,{id:"description",children:"Description:"}),"\n",(0,t.jsxs)(c.p,{children:["This component makes the ",(0,t.jsx)(c.code,{children:"intl"})," available down the React tree."]}),"\n",(0,t.jsx)(c.h4,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(c.table,{children:[(0,t.jsx)(c.thead,{children:(0,t.jsxs)(c.tr,{children:[(0,t.jsx)(c.th,{style:{textAlign:"left"},children:"Parameter"}),(0,t.jsx)(c.th,{style:{textAlign:"left"},children:"Type"}),(0,t.jsx)(c.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,t.jsxs)(c.tbody,{children:[(0,t.jsxs)(c.tr,{children:[(0,t.jsx)(c.td,{style:{textAlign:"left"},children:(0,t.jsx)(c.code,{children:"children"})}),(0,t.jsx)(c.td,{style:{textAlign:"left"},children:(0,t.jsx)(c.code,{children:"object"})}),(0,t.jsx)(c.td,{style:{textAlign:"left"}})]}),(0,t.jsxs)(c.tr,{children:[(0,t.jsx)(c.td,{style:{textAlign:"left"},children:(0,t.jsx)(c.code,{children:"children.children"})}),(0,t.jsx)(c.td,{style:{textAlign:"left"},children:(0,t.jsx)(c.code,{children:"ReactNode"})}),(0,t.jsx)(c.td,{style:{textAlign:"left"},children:"-"})]})]})]}),"\n",(0,t.jsx)(c.h4,{id:"returns",children:"Returns"}),"\n",(0,t.jsx)(c.p,{children:(0,t.jsx)(c.code,{children:"JSX.Element"})}),"\n",(0,t.jsx)(c.pre,{children:(0,t.jsx)(c.code,{className:"language-jsx",children:"<SCLocaleContext.Provider value={{locale, messages, selectLocale}}>\n"})}),"\n",(0,t.jsx)(c.h4,{id:"source-1",children:"Source"}),"\n",(0,t.jsx)(c.p,{children:(0,t.jsx)(c.a,{href:"https://github.com/selfcommunity/community-js/blob/90e94cee1f6262cadce2c42df8534d4251c4e8a5/packages/react-core/src/components/provider/SCLocaleProvider/index.tsx#L38",children:"packages/react-core/src/components/provider/SCLocaleProvider/index.tsx:38"})}),"\n",(0,t.jsx)(c.hr,{}),"\n",(0,t.jsx)(c.h3,{id:"usesclocale",children:"useSCLocale()"}),"\n",(0,t.jsxs)(c.blockquote,{children:["\n",(0,t.jsxs)(c.p,{children:[(0,t.jsx)(c.strong,{children:"useSCLocale"}),"(): ",(0,t.jsx)(c.a,{href:"/docs/sdk/community-js/react-core/API_Reference/types/context#sclocalecontexttype",children:(0,t.jsx)(c.code,{children:"SCLocaleContextType"})})]}),"\n"]}),"\n",(0,t.jsxs)(c.p,{children:["Let's only export the ",(0,t.jsx)(c.code,{children:"useSCLocale"})," hook instead of the context.\nWe only want to use the hook directly and never the context component."]}),"\n",(0,t.jsx)(c.h4,{id:"returns-1",children:"Returns"}),"\n",(0,t.jsx)(c.p,{children:(0,t.jsx)(c.a,{href:"/docs/sdk/community-js/react-core/API_Reference/types/context#sclocalecontexttype",children:(0,t.jsx)(c.code,{children:"SCLocaleContextType"})})}),"\n",(0,t.jsx)(c.h4,{id:"source-2",children:"Source"}),"\n",(0,t.jsx)(c.p,{children:(0,t.jsx)(c.a,{href:"https://github.com/selfcommunity/community-js/blob/90e94cee1f6262cadce2c42df8534d4251c4e8a5/packages/react-core/src/components/provider/SCLocaleProvider/index.tsx#L110",children:"packages/react-core/src/components/provider/SCLocaleProvider/index.tsx:110"})}),"\n",(0,t.jsx)(c.hr,{}),"\n",(0,t.jsx)(c.h3,{id:"withsclocale",children:"withSCLocale()"}),"\n",(0,t.jsxs)(c.blockquote,{children:["\n",(0,t.jsxs)(c.p,{children:[(0,t.jsx)(c.strong,{children:"withSCLocale"}),"(",(0,t.jsx)(c.code,{children:"Component"}),"): (",(0,t.jsx)(c.code,{children:"props"}),") => ",(0,t.jsx)(c.code,{children:"Element"})]}),"\n"]}),"\n",(0,t.jsx)(c.p,{children:"Export hoc to inject the base theme to components"}),"\n",(0,t.jsx)(c.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,t.jsxs)(c.table,{children:[(0,t.jsx)(c.thead,{children:(0,t.jsxs)(c.tr,{children:[(0,t.jsx)(c.th,{style:{textAlign:"left"},children:"Parameter"}),(0,t.jsx)(c.th,{style:{textAlign:"left"},children:"Type"}),(0,t.jsx)(c.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,t.jsx)(c.tbody,{children:(0,t.jsxs)(c.tr,{children:[(0,t.jsx)(c.td,{style:{textAlign:"left"},children:(0,t.jsx)(c.code,{children:"Component"})}),(0,t.jsx)(c.td,{style:{textAlign:"left"},children:(0,t.jsx)(c.code,{children:"any"})}),(0,t.jsx)(c.td,{style:{textAlign:"left"}})]})})]}),"\n",(0,t.jsx)(c.h4,{id:"returns-2",children:"Returns"}),"\n",(0,t.jsx)(c.p,{children:(0,t.jsx)(c.code,{children:"Function"})}),"\n",(0,t.jsx)(c.h5,{id:"parameters-2",children:"Parameters"}),"\n",(0,t.jsxs)(c.table,{children:[(0,t.jsx)(c.thead,{children:(0,t.jsxs)(c.tr,{children:[(0,t.jsx)(c.th,{style:{textAlign:"left"},children:"Parameter"}),(0,t.jsx)(c.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,t.jsx)(c.tbody,{children:(0,t.jsxs)(c.tr,{children:[(0,t.jsx)(c.td,{style:{textAlign:"left"},children:(0,t.jsx)(c.code,{children:"props"})}),(0,t.jsx)(c.td,{style:{textAlign:"left"},children:(0,t.jsx)(c.code,{children:"any"})})]})})]}),"\n",(0,t.jsx)(c.h5,{id:"returns-3",children:"Returns"}),"\n",(0,t.jsx)(c.p,{children:(0,t.jsx)(c.code,{children:"Element"})}),"\n",(0,t.jsx)(c.h4,{id:"source-3",children:"Source"}),"\n",(0,t.jsx)(c.p,{children:(0,t.jsx)(c.a,{href:"https://github.com/selfcommunity/community-js/blob/90e94cee1f6262cadce2c42df8534d4251c4e8a5/packages/react-core/src/components/provider/SCLocaleProvider/index.tsx#L97",children:"packages/react-core/src/components/provider/SCLocaleProvider/index.tsx:97"})})]})}function h(e={}){const{wrapper:c}={...(0,r.a)(),...e.components};return c?(0,t.jsx)(c,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},11151:(e,c,n)=>{n.d(c,{Z:()=>l,a:()=>s});var t=n(67294);const r={},o=t.createContext(r);function s(e){const c=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(c):{...c,...e}}),[c,e])}function l(e){let c;return c=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(o.Provider,{value:c},e.children)}}}]);