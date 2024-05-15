"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[82086],{36914:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>x,frontMatter:()=>r,metadata:()=>i,toc:()=>o});var n=s(85893),l=s(11151);const r={},d="User",i={id:"sdk/community-js/react-ui/component_API/User",title:"User",description:"Interfaces",source:"@site/docs/sdk/community-js/react-ui/component_API/User.md",sourceDirName:"sdk/community-js/react-ui/component_API",slug:"/sdk/community-js/react-ui/component_API/User",permalink:"/docs/sdk/community-js/react-ui/component_API/User",draft:!1,unlisted:!1,editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/sdk/community-js/react-ui/component_API/User.md",tags:[],version:"current",frontMatter:{},sidebar:"sdkSidebar",previous:{title:"ToastNotifications",permalink:"/docs/sdk/community-js/react-ui/component_API/ToastNotifications"},next:{title:"UserActionIconButton",permalink:"/docs/sdk/community-js/react-ui/component_API/UserActionIconButton"}},c={},o=[{value:"Interfaces",id:"interfaces",level:2},{value:"UserProps",id:"userprops",level:3},{value:"Import",id:"import",level:4},{value:"Component Name",id:"component-name",level:4},{value:"CSS",id:"css",level:4},{value:"Extends",id:"extends",level:4},{value:"Indexable",id:"indexable",level:4},{value:"Properties",id:"properties",level:4},{value:"Functions",id:"functions",level:2},{value:"User()",id:"user-1",level:3},{value:"Import",id:"import-1",level:4},{value:"Component Name",id:"component-name-1",level:4},{value:"CSS",id:"css-1",level:4},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Source",id:"source",level:4},{value:"UserSkeleton()",id:"userskeleton",level:3},{value:"Import",id:"import-2",level:4},{value:"Component Name",id:"component-name-2",level:4},{value:"CSS",id:"css-2",level:4},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Source",id:"source-1",level:4}];function h(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"user",children:"User"}),"\n",(0,n.jsx)(t.h2,{id:"interfaces",children:"Interfaces"}),"\n",(0,n.jsx)(t.h3,{id:"userprops",children:"UserProps"}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"API documentation for the Community-JS Widget component. Learn about the available props and the CSS API."}),"\n"]}),"\n",(0,n.jsx)(t.h4,{id:"import",children:"Import"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-jsx",children:"import {Widget} from '@selfcommunity/react-ui';\n"})}),"\n",(0,n.jsx)(t.h4,{id:"component-name",children:"Component Name"}),"\n",(0,n.jsxs)(t.p,{children:["The name ",(0,n.jsx)(t.code,{children:"SCWidget"})," can be used when providing style overrides in the theme."]}),"\n",(0,n.jsx)(t.h4,{id:"css",children:"CSS"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Rule Name"}),(0,n.jsx)(t.th,{children:"Global class"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"root"}),(0,n.jsx)(t.td,{children:".SCWidget-root"}),(0,n.jsx)(t.td,{children:"Styles applied to the root element."})]})})]}),"\n",(0,n.jsx)(t.h4,{id:"extends",children:"Extends"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/docs/sdk/community-js/react-ui/component_API/Widget#widgetprops",children:(0,n.jsx)(t.code,{children:"WidgetProps"})})}),"\n"]}),"\n",(0,n.jsx)(t.h4,{id:"indexable",children:"Indexable"}),"\n",(0,n.jsxs)(t.p,{children:["[",(0,n.jsx)(t.code,{children:"p"}),": ",(0,n.jsx)(t.code,{children:"string"}),"]: ",(0,n.jsx)(t.code,{children:"any"})]}),"\n",(0,n.jsx)(t.h4,{id:"properties",children:"Properties"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Property"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Description"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Inherited from"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"actions?"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"ReactNode"})}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:["Prop to add actions",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)(t.strong,{children:"Default"}),(0,n.jsx)("br",{}),(0,n.jsx)(t.code,{children:"null"})]}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"-"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"badgeContent?"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"any"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Badge content to show as user avatar badge if show reaction is true."}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"-"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"buttonProps?"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"ButtonBaseProps"})}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:["Props to spread to the button",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)(t.strong,{children:"Default"}),(0,n.jsx)("br",{}),(0,n.jsx)(t.code,{children:"{}"})]}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"-"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"className?"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"string"})}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:["Overrides or extends the styles applied to the component.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)(t.strong,{children:"Default"}),(0,n.jsx)("br",{}),(0,n.jsx)(t.code,{children:"null"})]}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,n.jsx)(t.a,{href:"/docs/sdk/community-js/react-ui/component_API/Widget#widgetprops",children:(0,n.jsx)(t.code,{children:"WidgetProps"})}),".",(0,n.jsx)(t.code,{children:"className"})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"followConnectUserButtonProps?"})}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,n.jsx)(t.a,{href:"/docs/sdk/community-js/react-ui/component_API/FollowUserButton#followuserbuttonprops",children:(0,n.jsx)(t.code,{children:"FollowUserButtonProps"})})," | ",(0,n.jsx)(t.a,{href:"/docs/sdk/community-js/react-ui/component_API/FriendshipUserButton#friendshipbuttonprops",children:(0,n.jsx)(t.code,{children:"FriendshipButtonProps"})})]}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:["Props to spread to follow/friendship button",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)(t.strong,{children:"Default"}),(0,n.jsx)("br",{}),(0,n.jsx)(t.code,{children:"{}"})]}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"-"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"handleIgnoreAction?"})}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:["(",(0,n.jsx)(t.code,{children:"u"}),": ",(0,n.jsx)(t.code,{children:"any"}),") => ",(0,n.jsx)(t.code,{children:"void"})]}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:["Handles actions ignore",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)(t.strong,{children:"Default"}),(0,n.jsx)("br",{}),(0,n.jsx)(t.code,{children:"null"})]}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"-"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"isGroupAdmin?"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"boolean"})}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:["If true, shows a custom label next to the user username",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)(t.strong,{children:"Default"}),(0,n.jsx)("br",{}),(0,n.jsx)(t.code,{children:"false"})]}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"-"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"showFollowers?"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"boolean"})}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:["Prop to show user followers as secondary text",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)(t.strong,{children:"Default"}),(0,n.jsx)("br",{}),(0,n.jsx)(t.code,{children:"false"})]}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"-"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"user?"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"SCUserType"})}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:["User Object",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)(t.strong,{children:"Default"}),(0,n.jsx)("br",{}),(0,n.jsx)(t.code,{children:"null"})]}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"-"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"userId?"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"number"})}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:["User Id",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)(t.strong,{children:"Default"}),(0,n.jsx)("br",{}),(0,n.jsx)(t.code,{children:"null"})]}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"-"})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"functions",children:"Functions"}),"\n",(0,n.jsx)(t.h3,{id:"user-1",children:"User()"}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"User"}),"(",(0,n.jsx)(t.code,{children:"inProps"}),"): ",(0,n.jsx)(t.code,{children:"JSX.Element"})]}),"\n"]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"API documentation for the Community-JS User component. Learn about the available props and the CSS API."}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["This component renders a user item.\nTake a look at our ",(0,n.jsx)("strong",{children:"demo"})," component ",(0,n.jsx)(t.a,{href:"/docs/sdk/community-js/react-ui/Components/User",children:"here"})]}),"\n",(0,n.jsx)(t.h4,{id:"import-1",children:"Import"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-jsx",children:"import {User} from '@selfcommunity/react-ui';\n"})}),"\n",(0,n.jsx)(t.h4,{id:"component-name-1",children:"Component Name"}),"\n",(0,n.jsxs)(t.p,{children:["The name ",(0,n.jsx)(t.code,{children:"SCUser"})," can be used when providing style overrides in the theme."]}),"\n",(0,n.jsx)(t.h4,{id:"css-1",children:"CSS"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Rule Name"}),(0,n.jsx)(t.th,{children:"Global class"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"root"}),(0,n.jsx)(t.td,{children:".SCUser-root"}),(0,n.jsx)(t.td,{children:"Styles applied to the root element."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"avatar"}),(0,n.jsx)(t.td,{children:".SCUser-avatar"}),(0,n.jsx)(t.td,{children:"Styles applied to the avatar element."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"staffBadgeLabel"}),(0,n.jsx)(t.td,{children:".SCUser-staff-badge-label"}),(0,n.jsx)(t.td,{children:"Styles applied to the staff badge label element."})]})]})]}),"\n",(0,n.jsx)(t.h4,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Parameter"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"inProps"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"/docs/sdk/community-js/react-ui/component_API/User#userprops",children:(0,n.jsx)(t.code,{children:"UserProps"})})}),(0,n.jsx)(t.td,{style:{textAlign:"left"}})]})})]}),"\n",(0,n.jsx)(t.h4,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:"JSX.Element"})}),"\n",(0,n.jsx)(t.h4,{id:"source",children:"Source"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://github.com/selfcommunity/community-js/blob/88ddf460a21d4471fb84839f097f9d428e19bd86/packages/react-ui/src/components/User/User.tsx#L129",children:"packages/react-ui/src/components/User/User.tsx:129"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h3,{id:"userskeleton",children:"UserSkeleton()"}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"UserSkeleton"}),"(",(0,n.jsx)(t.code,{children:"props"}),"): ",(0,n.jsx)(t.code,{children:"JSX.Element"})]}),"\n"]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"API documentation for the Community-JS User Skeleton component. Learn about the available props and the CSS API."}),"\n"]}),"\n",(0,n.jsx)(t.h4,{id:"import-2",children:"Import"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-jsx",children:"import {UserSkeleton} from '@selfcommunity/react-ui';\n"})}),"\n",(0,n.jsx)(t.h4,{id:"component-name-2",children:"Component Name"}),"\n",(0,n.jsxs)(t.p,{children:["The name ",(0,n.jsx)(t.code,{children:"SCUser-skeleton-root"})," can be used when providing style overrides in the theme."]}),"\n",(0,n.jsx)(t.h4,{id:"css-2",children:"CSS"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Rule Name"}),(0,n.jsx)(t.th,{children:"Global class"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"root"}),(0,n.jsx)(t.td,{children:".SCUser-skeleton-root"}),(0,n.jsx)(t.td,{children:"Styles applied to the root element."})]})})]}),"\n",(0,n.jsx)(t.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Parameter"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"props"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"/docs/sdk/community-js/react-ui/component_API/Widget#widgetprops",children:(0,n.jsx)(t.code,{children:"WidgetProps"})})})]})})]}),"\n",(0,n.jsx)(t.h4,{id:"returns-1",children:"Returns"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:"JSX.Element"})}),"\n",(0,n.jsx)(t.h4,{id:"source-1",children:"Source"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://github.com/selfcommunity/community-js/blob/88ddf460a21d4471fb84839f097f9d428e19bd86/packages/react-ui/src/components/User/Skeleton.tsx#L39",children:"packages/react-ui/src/components/User/Skeleton.tsx:39"})})]})}function x(e={}){const{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},11151:(e,t,s)=>{s.d(t,{Z:()=>i,a:()=>d});var n=s(67294);const l={},r=n.createContext(l);function d(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:d(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);