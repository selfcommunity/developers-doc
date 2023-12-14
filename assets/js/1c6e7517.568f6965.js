"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[67682],{9636:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>a,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var o=t(85893),r=t(11151);const s={id:"components_router",title:"Module: components/router",sidebar_label:"components/router",sidebar_position:0,custom_edit_url:null},c=void 0,i={id:"sdk/community-js/react-core/API_Reference/modules/components_router",title:"Module: components/router",description:"Namespaces",source:"@site/docs/sdk/community-js/react-core/API_Reference/modules/components_router.md",sourceDirName:"sdk/community-js/react-core/API_Reference/modules",slug:"/sdk/community-js/react-core/API_Reference/modules/components_router",permalink:"/docs/sdk/community-js/react-core/API_Reference/modules/components_router",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"components_router",title:"Module: components/router",sidebar_label:"components/router",sidebar_position:0,custom_edit_url:null},sidebar:"sdkSidebar",previous:{title:"components/provider/SCVoteProvider",permalink:"/docs/sdk/community-js/react-core/API_Reference/modules/components_provider_SCVoteProvider"},next:{title:"hooks/useSCAuth",permalink:"/docs/sdk/community-js/react-core/API_Reference/modules/hooks_useSCAuth"}},d={},l=[{value:"Namespaces",id:"namespaces",level:2},{value:"Functions",id:"functions",level:2},{value:"router",id:"router",level:3},{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"namespaces",children:"Namespaces"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/docs/sdk/community-js/react-core/API_Reference/namespaces/components_router.router",children:"router"})}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"functions",children:"Functions"}),"\n",(0,o.jsx)(n.h3,{id:"router",children:"router"}),"\n",(0,o.jsxs)(n.p,{children:["\u25b8 ",(0,o.jsx)(n.strong,{children:"router"}),"(",(0,o.jsx)(n.code,{children:"props"}),"): ",(0,o.jsx)(n.code,{children:"ReactElement"}),"<",(0,o.jsx)(n.code,{children:"any"}),", ",(0,o.jsx)(n.code,{children:"string"})," | ",(0,o.jsx)(n.code,{children:"JSXElementConstructor"}),"<",(0,o.jsx)(n.code,{children:"any"}),">>"]}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsx)(n.p,{children:"This component is used to navigate through the application."})}),"\n",(0,o.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(n.p,{children:"In order to use router you need to import this components first:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",children:"import {SCRoutingContextType, useSCRouting, Link, SCRoutes} from '@selfcommunity/react-core';\n"})}),"\n",(0,o.jsxs)(n.admonition,{title:"Usage Example:",type:"tip",children:[(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",children:"const scRoutingContext: SCRoutingContextType = useSCRouting();\n<Button component={Link} to={scRoutingContext.url(SCRoutes.USER_PROFILE_ROUTE_NAME, {id: user.id})>Go to profile</Button>\n"})}),(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"or"})}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",children:"const scRoutingContext: SCRoutingContextType = useSCRouting();\n<Link to={scRoutingContext.url('profile', {id: user.id})}>Go to profile</Link>\n"})})]}),"\n",(0,o.jsx)(n.h4,{id:"parameters",children:"Parameters"}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{style:{textAlign:"left"},children:"Name"}),(0,o.jsx)(n.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,o.jsx)(n.tbody,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{style:{textAlign:"left"},children:(0,o.jsx)(n.code,{children:"props"})}),(0,o.jsxs)(n.td,{style:{textAlign:"left"},children:[(0,o.jsx)(n.code,{children:"Pick"}),"<{ ",(0,o.jsx)(n.code,{children:"children"}),": ",(0,o.jsx)(n.code,{children:"any"}),"  }, ",(0,o.jsx)(n.code,{children:"string"})," | ",(0,o.jsx)(n.code,{children:"number"}),"> & ",(0,o.jsx)(n.code,{children:"RefAttributes"}),"<",(0,o.jsx)(n.code,{children:"unknown"}),">"]})]})})]}),"\n",(0,o.jsx)(n.h4,{id:"returns",children:"Returns"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"ReactElement"}),"<",(0,o.jsx)(n.code,{children:"any"}),", ",(0,o.jsx)(n.code,{children:"string"})," | ",(0,o.jsx)(n.code,{children:"JSXElementConstructor"}),"<",(0,o.jsx)(n.code,{children:"any"}),">>"]}),"\n",(0,o.jsx)(n.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,o.jsx)(n.p,{children:"node_modules/@types/react/index.d.ts:350"})]})}function a(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>c});var o=t(67294);const r={},s=o.createContext(r);function c(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);