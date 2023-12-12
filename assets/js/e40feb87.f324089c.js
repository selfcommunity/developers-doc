"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[72707],{89410:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=n(85893),s=n(11151);const r={id:"IncubatorListWidget",title:"Module: IncubatorListWidget",sidebar_label:"IncubatorListWidget",sidebar_position:0,custom_edit_url:null},d=void 0,l={id:"sdk/community-js/react-ui/component_API/modules/IncubatorListWidget",title:"Module: IncubatorListWidget",description:"Interfaces",source:"@site/docs/sdk/community-js/react-ui/component_API/modules/IncubatorListWidget.md",sourceDirName:"sdk/community-js/react-ui/component_API/modules",slug:"/sdk/community-js/react-ui/component_API/modules/IncubatorListWidget",permalink:"/docs/sdk/community-js/react-ui/component_API/modules/IncubatorListWidget",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"IncubatorListWidget",title:"Module: IncubatorListWidget",sidebar_label:"IncubatorListWidget",sidebar_position:0,custom_edit_url:null},sidebar:"sdkSidebar",previous:{title:"IncubatorDetail",permalink:"/docs/sdk/community-js/react-ui/component_API/modules/IncubatorDetail"},next:{title:"IncubatorSubscribeButton",permalink:"/docs/sdk/community-js/react-ui/component_API/modules/IncubatorSubscribeButton"}},o={},c=[{value:"Interfaces",id:"interfaces",level:2},{value:"Functions",id:"functions",level:2},{value:"IncubatorListWidget",id:"incubatorlistwidget",level:3},{value:"Import",id:"import",level:4},{value:"Component Name",id:"component-name",level:4},{value:"CSS",id:"css",level:4},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"IncubatorListWidgetSkeleton",id:"incubatorlistwidgetskeleton",level:3},{value:"Import",id:"import-1",level:4},{value:"Component Name",id:"component-name-1",level:4},{value:"CSS",id:"css-1",level:4},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-1",level:4}];function a(e){const t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"interfaces",children:"Interfaces"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/docs/sdk/community-js/react-ui/component_API/interfaces/IncubatorListWidget.IncubatorListWidgetProps",children:"IncubatorListWidgetProps"})}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"functions",children:"Functions"}),"\n",(0,i.jsx)(t.h3,{id:"incubatorlistwidget",children:"IncubatorListWidget"}),"\n",(0,i.jsxs)(t.p,{children:["\u25b8 ",(0,i.jsx)(t.strong,{children:"IncubatorListWidget"}),"(",(0,i.jsx)(t.code,{children:"inProps"}),"): ",(0,i.jsx)(t.code,{children:"JSX.Element"})]}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:"API documentation for the Community-JS Incubator List Widget component. Learn about the available props and the CSS API."}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["This component renders a list of incubators.\nTake a look at our ",(0,i.jsx)("strong",{children:"demo"})," component ",(0,i.jsx)(t.a,{href:"/docs/sdk/community-js/react-ui/Components/IncubatorsList",children:"here"})]}),"\n",(0,i.jsx)(t.h4,{id:"import",children:"Import"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-jsx",children:"import {IncubatorListWidget} from '@selfcommunity/react-ui';\n"})}),"\n",(0,i.jsx)(t.h4,{id:"component-name",children:"Component Name"}),"\n",(0,i.jsxs)(t.p,{children:["The name ",(0,i.jsx)(t.code,{children:"IncubatorListWidget"})," can be used when providing style overrides in the theme."]}),"\n",(0,i.jsx)(t.h4,{id:"css",children:"CSS"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Rule Name"}),(0,i.jsx)(t.th,{children:"Global class"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"root"}),(0,i.jsx)(t.td,{children:".SCIncubatorListWidget-root"}),(0,i.jsx)(t.td,{children:"Styles applied to the root element."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"header"}),(0,i.jsx)(t.td,{children:".SCIncubatorListWidget-header"}),(0,i.jsx)(t.td,{children:"Styles applied to the header element."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"title"}),(0,i.jsx)(t.td,{children:".SCIncubatorListWidget-title"}),(0,i.jsx)(t.td,{children:"Styles applied to the title element."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"noResults"}),(0,i.jsx)(t.td,{children:".SCIncubatorListWidget-no-results"}),(0,i.jsx)(t.td,{children:"Styles applied to the no results section."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"showMore"}),(0,i.jsx)(t.td,{children:".SCIncubatorListWidget-show-more"}),(0,i.jsx)(t.td,{children:"Styles applied to the show more button element."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"actions"}),(0,i.jsx)(t.td,{children:".SCIncubatorListWidget-actions"}),(0,i.jsx)(t.td,{children:"Styles applied to the actions section."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"helpPopover"}),(0,i.jsx)(t.td,{children:".SCIncubatorListWidget-help-popover"}),(0,i.jsx)(t.td,{children:"Styles applied to the help popover element."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"dialogRoot"}),(0,i.jsx)(t.td,{children:".SCIncubatorListWidget-dialog-root"}),(0,i.jsx)(t.td,{children:"Styles applied to the root dialog element."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"endMessage"}),(0,i.jsx)(t.td,{children:".SCIncubatorListWidget-end-message"}),(0,i.jsx)(t.td,{children:"Styles applied to the end message element."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"createDialog"}),(0,i.jsx)(t.td,{children:".SCIncubatorListWidget-create-dialog"}),(0,i.jsx)(t.td,{children:"Styles applied to the create dialog element."})]})]})]}),"\n",(0,i.jsx)(t.h4,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Name"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"inProps"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.a,{href:"/docs/sdk/community-js/react-ui/component_API/interfaces/IncubatorListWidget.IncubatorListWidgetProps",children:(0,i.jsx)(t.code,{children:"IncubatorListWidgetProps"})})})]})})]}),"\n",(0,i.jsx)(t.h4,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"JSX.Element"})}),"\n",(0,i.jsx)(t.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://github.com/selfcommunity/community-js/blob/6572d63/packages/react-ui/src/components/IncubatorListWidget/IncubatorListWidget.tsx#L127",children:"packages/react-ui/src/components/IncubatorListWidget/IncubatorListWidget.tsx:127"})}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h3,{id:"incubatorlistwidgetskeleton",children:"IncubatorListWidgetSkeleton"}),"\n",(0,i.jsxs)(t.p,{children:["\u25b8 ",(0,i.jsx)(t.strong,{children:"IncubatorListWidgetSkeleton"}),"(",(0,i.jsx)(t.code,{children:"props"}),"): ",(0,i.jsx)(t.code,{children:"JSX.Element"})]}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:"API documentation for the Community-JS Incubator List Skeleton component. Learn about the available props and the CSS API."}),"\n"]}),"\n",(0,i.jsx)(t.h4,{id:"import-1",children:"Import"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-jsx",children:"import {IncubatorListWidgetSkeleton} from '@selfcommunity/react-ui';\n"})}),"\n",(0,i.jsx)(t.h4,{id:"component-name-1",children:"Component Name"}),"\n",(0,i.jsxs)(t.p,{children:["The name ",(0,i.jsx)(t.code,{children:"SCIncubatorListWidget-skeleton-root"})," can be used when providing style overrides in the theme."]}),"\n",(0,i.jsx)(t.h4,{id:"css-1",children:"CSS"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Rule Name"}),(0,i.jsx)(t.th,{children:"Global class"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"root"}),(0,i.jsx)(t.td,{children:".SCIncubatorListWidget-skeleton-root-root"}),(0,i.jsx)(t.td,{children:"Styles applied to the root element."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"list"}),(0,i.jsx)(t.td,{children:".SCIncubatorListWidget-list"}),(0,i.jsx)(t.td,{children:"Styles applied to the list element."})]})]})]}),"\n",(0,i.jsx)(t.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Name"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"props"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"any"})})]})})]}),"\n",(0,i.jsx)(t.h4,{id:"returns-1",children:"Returns"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"JSX.Element"})}),"\n",(0,i.jsx)(t.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://github.com/selfcommunity/community-js/blob/6572d63/packages/react-ui/src/components/IncubatorListWidget/Skeleton.tsx#L40",children:"packages/react-ui/src/components/IncubatorListWidget/Skeleton.tsx:40"})})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>d});var i=n(67294);const s={},r=i.createContext(s);function d(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);