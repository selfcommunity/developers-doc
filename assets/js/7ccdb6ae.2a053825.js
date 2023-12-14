"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[32427],{20829:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var t=r(85893),c=r(11151);const o={id:"components_provider_SCLocaleProvider",title:"Module: components/provider/SCLocaleProvider",sidebar_label:"components/provider/SCLocaleProvider",sidebar_position:0,custom_edit_url:null},s=void 0,i={id:"sdk/community-js/react-core/API_Reference/modules/components_provider_SCLocaleProvider",title:"Module: components/provider/SCLocaleProvider",description:"Variables",source:"@site/docs/sdk/community-js/react-core/API_Reference/modules/components_provider_SCLocaleProvider.md",sourceDirName:"sdk/community-js/react-core/API_Reference/modules",slug:"/sdk/community-js/react-core/API_Reference/modules/components_provider_SCLocaleProvider",permalink:"/docs/sdk/community-js/react-core/API_Reference/modules/components_provider_SCLocaleProvider",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"components_provider_SCLocaleProvider",title:"Module: components/provider/SCLocaleProvider",sidebar_label:"components/provider/SCLocaleProvider",sidebar_position:0,custom_edit_url:null},sidebar:"sdkSidebar",previous:{title:"components/provider/SCContextProvider",permalink:"/docs/sdk/community-js/react-core/API_Reference/modules/components_provider_SCContextProvider"},next:{title:"components/provider/SCNotificationProvider",permalink:"/docs/sdk/community-js/react-core/API_Reference/modules/components_provider_SCNotificationProvider"}},l={},d=[{value:"Variables",id:"variables",level:2},{value:"SCLocaleContext",id:"sclocalecontext",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"Functions",id:"functions",level:2},{value:"SCLocaleProvider",id:"sclocaleprovider",level:3},{value:"Description:",id:"description",level:4},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"useSCLocale",id:"usesclocale",level:3},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"withSCLocale",id:"withsclocale",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Parameters",id:"parameters-2",level:5},{value:"Returns",id:"returns-3",level:5},{value:"Defined in",id:"defined-in-3",level:4}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",h5:"h5",hr:"hr",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"variables",children:"Variables"}),"\n",(0,t.jsx)(n.h3,{id:"sclocalecontext",children:"SCLocaleContext"}),"\n",(0,t.jsxs)(n.p,{children:["\u2022 ",(0,t.jsx)(n.code,{children:"Const"})," ",(0,t.jsx)(n.strong,{children:"SCLocaleContext"}),": ",(0,t.jsx)(n.code,{children:"Context"}),"<",(0,t.jsx)(n.a,{href:"/docs/sdk/community-js/react-core/API_Reference/interfaces/types_context.SCLocaleContextType",children:(0,t.jsx)(n.code,{children:"SCLocaleContextType"})}),">"]}),"\n",(0,t.jsx)(n.p,{children:"Creates Global Context"}),"\n",(0,t.jsxs)(n.admonition,{title:"Context can be consumed in one of the following ways:",type:"tip",children:[(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"1. <SCLocaleContext.Consumer>{(locale,) => (...)}</SCLocaleContext.Consumer>\n"})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"2. const scLocaleContext: SCLocaleContextType = useContext(SCLocaleContext);\n"})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"3. const scLocaleContext: SCLocaleContextType = useSCLocale();\n"})})]}),"\n",(0,t.jsx)(n.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/selfcommunity/community-js/blob/6572d63/packages/react-core/src/components/provider/SCLocaleProvider/index.tsx#L27",children:"packages/react-core/src/components/provider/SCLocaleProvider/index.tsx:27"})}),"\n",(0,t.jsx)(n.h2,{id:"functions",children:"Functions"}),"\n",(0,t.jsx)(n.h3,{id:"sclocaleprovider",children:"SCLocaleProvider"}),"\n",(0,t.jsxs)(n.p,{children:["\u25b8 ",(0,t.jsx)(n.strong,{children:"SCLocaleProvider"}),"(",(0,t.jsx)(n.code,{children:"children"}),"): ",(0,t.jsx)(n.code,{children:"JSX.Element"})]}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description:"}),"\n",(0,t.jsxs)(n.p,{children:["This component makes the ",(0,t.jsx)(n.code,{children:"intl"})," available down the React tree."]}),"\n",(0,t.jsx)(n.h4,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"Name"}),(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"children"})}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"Object"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"children.children"})}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"ReactNode"})})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"returns",children:"Returns"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"JSX.Element"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"<SCLocaleContext.Provider value={{locale, messages, selectLocale}}>\n"})}),"\n",(0,t.jsx)(n.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/selfcommunity/community-js/blob/6572d63/packages/react-core/src/components/provider/SCLocaleProvider/index.tsx#L38",children:"packages/react-core/src/components/provider/SCLocaleProvider/index.tsx:38"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"usesclocale",children:"useSCLocale"}),"\n",(0,t.jsxs)(n.p,{children:["\u25b8 ",(0,t.jsx)(n.strong,{children:"useSCLocale"}),"(): ",(0,t.jsx)(n.a,{href:"/docs/sdk/community-js/react-core/API_Reference/interfaces/types_context.SCLocaleContextType",children:(0,t.jsx)(n.code,{children:"SCLocaleContextType"})})]}),"\n",(0,t.jsxs)(n.p,{children:["Let's only export the ",(0,t.jsx)(n.code,{children:"useSCLocale"})," hook instead of the context.\nWe only want to use the hook directly and never the context component."]}),"\n",(0,t.jsx)(n.h4,{id:"returns-1",children:"Returns"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/sdk/community-js/react-core/API_Reference/interfaces/types_context.SCLocaleContextType",children:(0,t.jsx)(n.code,{children:"SCLocaleContextType"})})}),"\n",(0,t.jsx)(n.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/selfcommunity/community-js/blob/6572d63/packages/react-core/src/components/provider/SCLocaleProvider/index.tsx#L110",children:"packages/react-core/src/components/provider/SCLocaleProvider/index.tsx:110"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"withsclocale",children:"withSCLocale"}),"\n",(0,t.jsxs)(n.p,{children:["\u25b8 ",(0,t.jsx)(n.strong,{children:"withSCLocale"}),"(",(0,t.jsx)(n.code,{children:"Component"}),"): (",(0,t.jsx)(n.code,{children:"props"}),": ",(0,t.jsx)(n.code,{children:"any"}),") => ",(0,t.jsx)(n.code,{children:"Element"})]}),"\n",(0,t.jsx)(n.p,{children:"Export hoc to inject the base theme to components"}),"\n",(0,t.jsx)(n.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"Name"}),(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"Component"})}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"any"})})]})})]}),"\n",(0,t.jsx)(n.h4,{id:"returns-2",children:"Returns"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"fn"})}),"\n",(0,t.jsxs)(n.p,{children:["\u25b8 (",(0,t.jsx)(n.code,{children:"props"}),"): ",(0,t.jsx)(n.code,{children:"Element"})]}),"\n",(0,t.jsx)(n.h5,{id:"parameters-2",children:"Parameters"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"Name"}),(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"props"})}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"any"})})]})})]}),"\n",(0,t.jsx)(n.h5,{id:"returns-3",children:"Returns"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"Element"})}),"\n",(0,t.jsx)(n.h4,{id:"defined-in-3",children:"Defined in"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/selfcommunity/community-js/blob/6572d63/packages/react-core/src/components/provider/SCLocaleProvider/index.tsx#L97",children:"packages/react-core/src/components/provider/SCLocaleProvider/index.tsx:97"})})]})}function h(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>i,a:()=>s});var t=r(67294);const c={},o=t.createContext(c);function s(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:s(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);