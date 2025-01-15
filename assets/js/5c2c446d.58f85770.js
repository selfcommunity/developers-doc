"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[26555],{26757:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>a,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var o=t(85893),r=t(11151);const s={},c="components/router",i={id:"sdk/community-js/react-core/API_Reference/components/router",title:"components/router",description:"Functions",source:"@site/docs/sdk/community-js/react-core/API_Reference/components/router.md",sourceDirName:"sdk/community-js/react-core/API_Reference/components",slug:"/sdk/community-js/react-core/API_Reference/components/router",permalink:"/docs/sdk/community-js/react-core/API_Reference/components/router",draft:!1,unlisted:!1,editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/sdk/community-js/react-core/API_Reference/components/router.md",tags:[],version:"current",frontMatter:{},sidebar:"sdkSidebar",previous:{title:"components/provider/SCVoteProvider",permalink:"/docs/sdk/community-js/react-core/API_Reference/components/provider/SCVoteProvider"},next:{title:"hooks/useSCAuth",permalink:"/docs/sdk/community-js/react-core/API_Reference/hooks/useSCAuth"}},d={},l=[{value:"Functions",id:"functions",level:2},{value:"router()",id:"router",level:3},{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Source",id:"source",level:4}];function u(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"componentsrouter",children:"components/router"}),"\n",(0,o.jsx)(n.h2,{id:"functions",children:"Functions"}),"\n",(0,o.jsx)(n.h3,{id:"router",children:"router()"}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"router"}),"(",(0,o.jsx)(n.code,{children:"props"}),"): ",(0,o.jsx)(n.code,{children:"ReactElement"}),"<",(0,o.jsx)(n.code,{children:"any"}),", ",(0,o.jsx)(n.code,{children:"string"})," | ",(0,o.jsx)(n.code,{children:"JSXElementConstructor"}),"<",(0,o.jsx)(n.code,{children:"any"}),">>"]}),"\n"]}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsx)(n.p,{children:"This component is used to navigate through the application."})}),"\n",(0,o.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(n.p,{children:"In order to use router you need to import this components first:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",children:"import {SCRoutingContextType, useSCRouting, Link, SCRoutes} from '@selfcommunity/react-core';\n"})}),"\n",(0,o.jsxs)(n.admonition,{title:"Usage Example:",type:"tip",children:[(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",children:"const scRoutingContext: SCRoutingContextType = useSCRouting();\n<Button component={Link} to={scRoutingContext.url(SCRoutes.USER_PROFILE_ROUTE_NAME, {id: user.id})>Go to profile</Button>\n"})}),(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"or"})}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",children:"const scRoutingContext: SCRoutingContextType = useSCRouting();\n<Link to={scRoutingContext.url('profile', {id: user.id})}>Go to profile</Link>\n"})})]}),"\n",(0,o.jsx)(n.h4,{id:"parameters",children:"Parameters"}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{style:{textAlign:"left"},children:"Parameter"}),(0,o.jsx)(n.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,o.jsx)(n.tbody,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{style:{textAlign:"left"},children:(0,o.jsx)(n.code,{children:"props"})}),(0,o.jsxs)(n.td,{style:{textAlign:"left"},children:[(0,o.jsx)(n.code,{children:"Pick"}),"<",(0,o.jsx)(n.code,{children:"object"}),", ",(0,o.jsx)(n.code,{children:"string"})," | ",(0,o.jsx)(n.code,{children:"number"}),"> & ",(0,o.jsx)(n.code,{children:"RefAttributes"}),"<",(0,o.jsx)(n.code,{children:"unknown"}),">"]})]})})]}),"\n",(0,o.jsx)(n.h4,{id:"returns",children:"Returns"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"ReactElement"}),"<",(0,o.jsx)(n.code,{children:"any"}),", ",(0,o.jsx)(n.code,{children:"string"})," | ",(0,o.jsx)(n.code,{children:"JSXElementConstructor"}),"<",(0,o.jsx)(n.code,{children:"any"}),">>"]}),"\n",(0,o.jsx)(n.h4,{id:"source",children:"Source"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://github.com/selfcommunity/community-js/blob/e662efcd235f7af73f248bd448d664d71e43b1eb/packages/react-core/src/components/router/index.tsx#L63",children:"packages/react-core/src/components/router/index.tsx:63"})})]})}function a(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>c});var o=t(67294);const r={},s=o.createContext(r);function c(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);