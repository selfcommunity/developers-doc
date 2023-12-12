"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[73092],{73425:(e,d,o)=>{o.r(d),o.d(d,{assets:()=>i,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>r,toc:()=>t});var n=o(85893),s=o(11151);const c={id:"hooks_useSCFollowedManager",title:"Module: hooks/useSCFollowedManager",sidebar_label:"hooks/useSCFollowedManager",sidebar_position:0,custom_edit_url:null},l=void 0,r={id:"sdk/community-js/react-core/API_Reference/modules/hooks_useSCFollowedManager",title:"Module: hooks/useSCFollowedManager",description:"Functions",source:"@site/docs/sdk/community-js/react-core/API_Reference/modules/hooks_useSCFollowedManager.md",sourceDirName:"sdk/community-js/react-core/API_Reference/modules",slug:"/sdk/community-js/react-core/API_Reference/modules/hooks_useSCFollowedManager",permalink:"/docs/sdk/community-js/react-core/API_Reference/modules/hooks_useSCFollowedManager",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"hooks_useSCFollowedManager",title:"Module: hooks/useSCFollowedManager",sidebar_label:"hooks/useSCFollowedManager",sidebar_position:0,custom_edit_url:null},sidebar:"sdkSidebar",previous:{title:"hooks/useSCFollowedCategoriesManager",permalink:"/docs/sdk/community-js/react-core/API_Reference/modules/hooks_useSCFollowedCategoriesManager"},next:{title:"hooks/useSCFollowersManager",permalink:"/docs/sdk/community-js/react-core/API_Reference/modules/hooks_useSCFollowersManager"}},i={},t=[{value:"Functions",id:"functions",level:2},{value:"useSCFollowedManager",id:"usescfollowedmanager",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4}];function a(e){const d={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(d.h2,{id:"functions",children:"Functions"}),"\n",(0,n.jsx)(d.h3,{id:"usescfollowedmanager",children:"useSCFollowedManager"}),"\n",(0,n.jsxs)(d.p,{children:["\u25b8 ",(0,n.jsx)(d.strong,{children:"useSCFollowedManager"}),"(",(0,n.jsx)(d.code,{children:"user?"}),"): { ",(0,n.jsx)(d.code,{children:"emptyCache"}),": ",(0,n.jsx)(d.code,{children:"undefined"})," ; ",(0,n.jsx)(d.code,{children:"follow"}),": ",(0,n.jsx)(d.code,{children:"undefined"})," ; ",(0,n.jsx)(d.code,{children:"followed"}),": ",(0,n.jsx)(d.code,{children:"any"}),"[] = data; ",(0,n.jsx)(d.code,{children:"isFollowed"}),": ",(0,n.jsx)(d.code,{children:"undefined"})," ; ",(0,n.jsx)(d.code,{children:"isLoading"}),": (",(0,n.jsx)(d.code,{children:"v"}),": ",(0,n.jsx)(d.code,{children:"number"})," | { ",(0,n.jsx)(d.code,{children:"id"}),": ",(0,n.jsx)(d.code,{children:"number"}),"  }) => ",(0,n.jsx)(d.code,{children:"boolean"})," ; ",(0,n.jsx)(d.code,{children:"loading"}),": ",(0,n.jsx)(d.code,{children:"any"}),"[] ; ",(0,n.jsx)(d.code,{children:"refresh"}),": ",(0,n.jsx)(d.code,{children:"undefined"}),"  } | { ",(0,n.jsx)(d.code,{children:"emptyCache"}),": () => ",(0,n.jsx)(d.code,{children:"void"})," ; ",(0,n.jsx)(d.code,{children:"follow"}),": (",(0,n.jsx)(d.code,{children:"user"}),": ",(0,n.jsx)(d.code,{children:"SCUserType"}),") => ",(0,n.jsx)(d.code,{children:"Promise"}),"<",(0,n.jsx)(d.code,{children:"any"}),"> ; ",(0,n.jsx)(d.code,{children:"followed"}),": ",(0,n.jsx)(d.code,{children:"any"}),"[] = data; ",(0,n.jsx)(d.code,{children:"isFollowed"}),": (",(0,n.jsx)(d.code,{children:"user"}),": ",(0,n.jsx)(d.code,{children:"SCUserType"}),") => ",(0,n.jsx)(d.code,{children:"boolean"})," ; ",(0,n.jsx)(d.code,{children:"isLoading"}),": (",(0,n.jsx)(d.code,{children:"v"}),": ",(0,n.jsx)(d.code,{children:"number"})," | { ",(0,n.jsx)(d.code,{children:"id"}),": ",(0,n.jsx)(d.code,{children:"number"}),"  }) => ",(0,n.jsx)(d.code,{children:"boolean"})," ; ",(0,n.jsx)(d.code,{children:"loading"}),": ",(0,n.jsx)(d.code,{children:"any"}),"[] ; ",(0,n.jsx)(d.code,{children:"refresh"}),": () => ",(0,n.jsx)(d.code,{children:"void"}),"  }"]}),"\n",(0,n.jsx)(d.admonition,{type:"info",children:(0,n.jsx)(d.p,{children:"This custom hook is used to manage followed users."})}),"\n",(0,n.jsxs)(d.admonition,{title:"How to use it:",type:"tip",children:[(0,n.jsx)(d.p,{children:"Follow these steps:"}),(0,n.jsx)(d.pre,{children:(0,n.jsx)(d.code,{className:"language-jsx",children:"1. const scUserContext: SCUserContextType = useSCUser();\n2. const scFollowedManager: SCFollowedManagerType = scUserContext.manager.followed;\n3. scFollowedManager.isFollowed(user)\n"})})]}),"\n",(0,n.jsx)(d.h4,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(d.table,{children:[(0,n.jsx)(d.thead,{children:(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.th,{style:{textAlign:"left"},children:"Name"}),(0,n.jsx)(d.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,n.jsx)(d.tbody,{children:(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{style:{textAlign:"left"},children:(0,n.jsx)(d.code,{children:"user?"})}),(0,n.jsx)(d.td,{style:{textAlign:"left"},children:(0,n.jsx)(d.code,{children:"SCUserType"})})]})})]}),"\n",(0,n.jsx)(d.h4,{id:"returns",children:"Returns"}),"\n",(0,n.jsxs)(d.p,{children:["{ ",(0,n.jsx)(d.code,{children:"emptyCache"}),": ",(0,n.jsx)(d.code,{children:"undefined"})," ; ",(0,n.jsx)(d.code,{children:"follow"}),": ",(0,n.jsx)(d.code,{children:"undefined"})," ; ",(0,n.jsx)(d.code,{children:"followed"}),": ",(0,n.jsx)(d.code,{children:"any"}),"[] = data; ",(0,n.jsx)(d.code,{children:"isFollowed"}),": ",(0,n.jsx)(d.code,{children:"undefined"})," ; ",(0,n.jsx)(d.code,{children:"isLoading"}),": (",(0,n.jsx)(d.code,{children:"v"}),": ",(0,n.jsx)(d.code,{children:"number"})," | { ",(0,n.jsx)(d.code,{children:"id"}),": ",(0,n.jsx)(d.code,{children:"number"}),"  }) => ",(0,n.jsx)(d.code,{children:"boolean"})," ; ",(0,n.jsx)(d.code,{children:"loading"}),": ",(0,n.jsx)(d.code,{children:"any"}),"[] ; ",(0,n.jsx)(d.code,{children:"refresh"}),": ",(0,n.jsx)(d.code,{children:"undefined"}),"  } | { ",(0,n.jsx)(d.code,{children:"emptyCache"}),": () => ",(0,n.jsx)(d.code,{children:"void"})," ; ",(0,n.jsx)(d.code,{children:"follow"}),": (",(0,n.jsx)(d.code,{children:"user"}),": ",(0,n.jsx)(d.code,{children:"SCUserType"}),") => ",(0,n.jsx)(d.code,{children:"Promise"}),"<",(0,n.jsx)(d.code,{children:"any"}),"> ; ",(0,n.jsx)(d.code,{children:"followed"}),": ",(0,n.jsx)(d.code,{children:"any"}),"[] = data; ",(0,n.jsx)(d.code,{children:"isFollowed"}),": (",(0,n.jsx)(d.code,{children:"user"}),": ",(0,n.jsx)(d.code,{children:"SCUserType"}),") => ",(0,n.jsx)(d.code,{children:"boolean"})," ; ",(0,n.jsx)(d.code,{children:"isLoading"}),": (",(0,n.jsx)(d.code,{children:"v"}),": ",(0,n.jsx)(d.code,{children:"number"})," | { ",(0,n.jsx)(d.code,{children:"id"}),": ",(0,n.jsx)(d.code,{children:"number"}),"  }) => ",(0,n.jsx)(d.code,{children:"boolean"})," ; ",(0,n.jsx)(d.code,{children:"loading"}),": ",(0,n.jsx)(d.code,{children:"any"}),"[] ; ",(0,n.jsx)(d.code,{children:"refresh"}),": () => ",(0,n.jsx)(d.code,{children:"void"}),"  }"]}),"\n",(0,n.jsx)(d.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,n.jsx)(d.p,{children:(0,n.jsx)(d.a,{href:"https://github.com/selfcommunity/community-js/blob/6572d63/packages/react-core/src/hooks/useSCFollowedManager.ts#L32",children:"packages/react-core/src/hooks/useSCFollowedManager.ts:32"})})]})}function h(e={}){const{wrapper:d}={...(0,s.a)(),...e.components};return d?(0,n.jsx)(d,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},11151:(e,d,o)=>{o.d(d,{Z:()=>r,a:()=>l});var n=o(67294);const s={},c=n.createContext(s);function l(e){const d=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function r(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),n.createElement(c.Provider,{value:d},e.children)}}}]);