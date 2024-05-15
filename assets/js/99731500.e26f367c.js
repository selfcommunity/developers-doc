"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[8208],{15841:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>l});var o=n(85893),r=n(11151);const s={},c="components/provider/SCVoteProvider",d={id:"sdk/community-js/react-core/API_Reference/components/provider/SCVoteProvider",title:"components/provider/SCVoteProvider",description:"Variables",source:"@site/docs/sdk/community-js/react-core/API_Reference/components/provider/SCVoteProvider.md",sourceDirName:"sdk/community-js/react-core/API_Reference/components/provider",slug:"/sdk/community-js/react-core/API_Reference/components/provider/SCVoteProvider",permalink:"/docs/sdk/community-js/react-core/API_Reference/components/provider/SCVoteProvider",draft:!1,unlisted:!1,editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/sdk/community-js/react-core/API_Reference/components/provider/SCVoteProvider.md",tags:[],version:"current",frontMatter:{},sidebar:"sdkSidebar",previous:{title:"components/provider/SCUserProvider",permalink:"/docs/sdk/community-js/react-core/API_Reference/components/provider/SCUserProvider"},next:{title:"components/router",permalink:"/docs/sdk/community-js/react-core/API_Reference/components/router"}},i={},l=[{value:"Variables",id:"variables",level:2},{value:"SCVoteContext",id:"scvotecontext",level:3},{value:"Source",id:"source",level:4},{value:"Functions",id:"functions",level:2},{value:"SCVoteProvider()",id:"scvoteprovider",level:3},{value:"Description:",id:"description",level:4},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Source",id:"source-1",level:4},{value:"useSCVote()",id:"usescvote",level:3},{value:"Returns",id:"returns-1",level:4},{value:"Source",id:"source-2",level:4}];function a(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"componentsproviderscvoteprovider",children:"components/provider/SCVoteProvider"}),"\n",(0,o.jsx)(t.h2,{id:"variables",children:"Variables"}),"\n",(0,o.jsx)(t.h3,{id:"scvotecontext",children:"SCVoteContext"}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"const"})," ",(0,o.jsx)(t.strong,{children:"SCVoteContext"}),": ",(0,o.jsx)(t.code,{children:"Context"})," <",(0,o.jsx)(t.a,{href:"/docs/sdk/community-js/react-core/API_Reference/types/context#scvotecontexttype",children:(0,o.jsx)(t.code,{children:"SCVoteContextType"})}),">"]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"Creates Vote Context"}),"\n",(0,o.jsxs)(t.admonition,{title:"Context can be consumed in one of the following ways:",type:"tip",children:[(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-jsx",children:"1. <SCVoteContext.Consumer>{(reactions) => (...)}</SCVoteContext.Consumer>\n"})}),(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-jsx",children:"2. const scVoteContext: SCVoteContextType = useContext(SCVoteContext);\n"})}),(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-jsx",children:"3. const scVoteContext: SCVoteContextType = useSCVote();\n"})})]}),"\n",(0,o.jsx)(t.h4,{id:"source",children:"Source"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"https://github.com/selfcommunity/community-js/blob/88ddf460a21d4471fb84839f097f9d428e19bd86/packages/react-core/src/components/provider/SCVoteProvider/index.tsx#L27",children:"packages/react-core/src/components/provider/SCVoteProvider/index.tsx:27"})}),"\n",(0,o.jsx)(t.h2,{id:"functions",children:"Functions"}),"\n",(0,o.jsx)(t.h3,{id:"scvoteprovider",children:"SCVoteProvider()"}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"SCVoteProvider"}),"(",(0,o.jsx)(t.code,{children:"children"}),"): ",(0,o.jsx)(t.code,{children:"JSX.Element"})]}),"\n"]}),"\n",(0,o.jsx)(t.h4,{id:"description",children:"Description:"}),"\n",(0,o.jsx)(t.p,{children:"This component imports all reactions if the feature 'reaction' is enabled."}),"\n",(0,o.jsx)(t.h4,{id:"parameters",children:"Parameters"}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{style:{textAlign:"left"},children:"Parameter"}),(0,o.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,o.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{style:{textAlign:"left"},children:(0,o.jsx)(t.code,{children:"children"})}),(0,o.jsx)(t.td,{style:{textAlign:"left"},children:(0,o.jsx)(t.code,{children:"object"})}),(0,o.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{style:{textAlign:"left"},children:(0,o.jsx)(t.code,{children:"children.children"})}),(0,o.jsx)(t.td,{style:{textAlign:"left"},children:(0,o.jsx)(t.code,{children:"ReactNode"})}),(0,o.jsx)(t.td,{style:{textAlign:"left"},children:"-"})]})]})]}),"\n",(0,o.jsx)(t.h4,{id:"returns",children:"Returns"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.code,{children:"JSX.Element"})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-jsx",children:" <SCVoteContext.Provider value={{reactions}}>{!isLoading && children}</SCVoteContext.Provider>\n"})}),"\n",(0,o.jsx)(t.h4,{id:"source-1",children:"Source"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"https://github.com/selfcommunity/community-js/blob/88ddf460a21d4471fb84839f097f9d428e19bd86/packages/react-core/src/components/provider/SCVoteProvider/index.tsx#L38",children:"packages/react-core/src/components/provider/SCVoteProvider/index.tsx:38"})}),"\n",(0,o.jsx)(t.hr,{}),"\n",(0,o.jsx)(t.h3,{id:"usescvote",children:"useSCVote()"}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"useSCVote"}),"(): ",(0,o.jsx)(t.a,{href:"/docs/sdk/community-js/react-core/API_Reference/types/context#scvotecontexttype",children:(0,o.jsx)(t.code,{children:"SCVoteContextType"})})]}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["Let's only export the ",(0,o.jsx)(t.code,{children:"useSCPreferences"})," hook instead of the context.\nWe only want to use the hook directly and never the context component."]}),"\n",(0,o.jsx)(t.h4,{id:"returns-1",children:"Returns"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"/docs/sdk/community-js/react-core/API_Reference/types/context#scvotecontexttype",children:(0,o.jsx)(t.code,{children:"SCVoteContextType"})})}),"\n",(0,o.jsx)(t.h4,{id:"source-2",children:"Source"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"https://github.com/selfcommunity/community-js/blob/88ddf460a21d4471fb84839f097f9d428e19bd86/packages/react-core/src/components/provider/SCVoteProvider/index.tsx#L103",children:"packages/react-core/src/components/provider/SCVoteProvider/index.tsx:103"})})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>d,a:()=>c});var o=n(67294);const r={},s=o.createContext(r);function c(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);