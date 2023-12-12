"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[61081],{95114:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=s(85893),o=s(11151);const i={id:"hooks_useSCAuth",title:"Module: hooks/useSCAuth",sidebar_label:"hooks/useSCAuth",sidebar_position:0,custom_edit_url:null},r=void 0,l={id:"sdk/community-js/react-core/API_Reference/modules/hooks_useSCAuth",title:"Module: hooks/useSCAuth",description:"Functions",source:"@site/docs/sdk/community-js/react-core/API_Reference/modules/hooks_useSCAuth.md",sourceDirName:"sdk/community-js/react-core/API_Reference/modules",slug:"/sdk/community-js/react-core/API_Reference/modules/hooks_useSCAuth",permalink:"/docs/sdk/community-js/react-core/API_Reference/modules/hooks_useSCAuth",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"hooks_useSCAuth",title:"Module: hooks/useSCAuth",sidebar_label:"hooks/useSCAuth",sidebar_position:0,custom_edit_url:null},sidebar:"sdkSidebar",previous:{title:"components/router",permalink:"/docs/sdk/community-js/react-core/API_Reference/modules/components_router"},next:{title:"hooks/useSCBlockedUsersManager",permalink:"/docs/sdk/community-js/react-core/API_Reference/modules/hooks_useSCBlockedUsersManager"}},c={},d=[{value:"Functions",id:"functions",level:2},{value:"useAuth",id:"useauth",level:3},{value:"Usage",id:"usage",level:4},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"functions",children:"Functions"}),"\n",(0,n.jsx)(t.h3,{id:"useauth",children:"useAuth"}),"\n",(0,n.jsxs)(t.p,{children:["\u25b8 ",(0,n.jsx)(t.strong,{children:"useAuth"}),"(",(0,n.jsx)(t.code,{children:"initialSession"}),"): ",(0,n.jsx)(t.code,{children:"Object"})]}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsx)(t.p,{children:"This component is used to navigate through the application."})}),"\n",(0,n.jsx)(t.h4,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(t.p,{children:"In order to use router you need to import this components first:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-jsx",children:"import {SCRoutingContextType, useSCRouting, Link, SCRoutes} from '@selfcommunity/react-core';\n"})}),"\n",(0,n.jsxs)(t.admonition,{title:"Usage Example:",type:"tip",children:[(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-jsx",children:"const scRoutingContext: SCRoutingContextType = useSCRouting();\n<Button component={Link} to={scRoutingContext.url(SCRoutes.USER_PROFILE_ROUTE_NAME, {id: user.id})>Go to profile</Button>\n"})}),(0,n.jsx)(t.p,{children:"or"}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-jsx",children:"const scRoutingContext: SCRoutingContextType = useSCRouting();\n<Link to={scRoutingContext.url('profile', {id: user.id})}>Go to profile</Link>\n"})})]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{}),"\n"]}),"\n",(0,n.jsx)(t.h4,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Name"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"initialSession"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"/docs/sdk/community-js/react-core/API_Reference/interfaces/types_context.SCSessionType",children:(0,n.jsx)(t.code,{children:"SCSessionType"})})})]})})]}),"\n",(0,n.jsx)(t.h4,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:"Object"})}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Name"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"dispatch"})}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,n.jsx)(t.code,{children:"Dispatch"}),"<",(0,n.jsx)(t.code,{children:"any"}),">"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"helpers"})}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:["{ ",(0,n.jsx)(t.code,{children:"logoutSession"}),": () => ",(0,n.jsx)(t.code,{children:"void"})," ; ",(0,n.jsx)(t.code,{children:"refreshSession"}),": () => ",(0,n.jsx)(t.code,{children:"Promise"}),"<",(0,n.jsx)(t.code,{children:"SCAuthTokenType"}),">  }"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"helpers.logoutSession"})}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:["() => ",(0,n.jsx)(t.code,{children:"void"})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"helpers.refreshSession"})}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:["() => ",(0,n.jsx)(t.code,{children:"Promise"}),"<",(0,n.jsx)(t.code,{children:"SCAuthTokenType"}),">"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"state"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"any"})})]})]})]}),"\n",(0,n.jsx)(t.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://github.com/selfcommunity/community-js/blob/6572d63/packages/react-core/src/hooks/useSCAuth.ts#L145",children:"packages/react-core/src/hooks/useSCAuth.ts:145"})})]})}function u(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},11151:(e,t,s)=>{s.d(t,{Z:()=>l,a:()=>r});var n=s(67294);const o={},i=n.createContext(o);function r(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);