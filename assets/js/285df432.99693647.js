"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[34517],{68372:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>c,default:()=>j,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var d=n(85893),s=n(11151);const i={id:"FeedObject",title:"Module: FeedObject",sidebar_label:"FeedObject",sidebar_position:0,custom_edit_url:null},c=void 0,l={id:"sdk/community-js/react-ui/component_API/modules/FeedObject",title:"Module: FeedObject",description:"Interfaces",source:"@site/docs/sdk/community-js/react-ui/component_API/modules/FeedObject.md",sourceDirName:"sdk/community-js/react-ui/component_API/modules",slug:"/sdk/community-js/react-ui/component_API/modules/FeedObject",permalink:"/docs/sdk/community-js/react-ui/component_API/modules/FeedObject",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"FeedObject",title:"Module: FeedObject",sidebar_label:"FeedObject",sidebar_position:0,custom_edit_url:null},sidebar:"sdkSidebar",previous:{title:"Feed",permalink:"/docs/sdk/community-js/react-ui/component_API/modules/Feed"},next:{title:"FeedObjectMediaPreview",permalink:"/docs/sdk/community-js/react-ui/component_API/modules/FeedObjectMediaPreview"}},r={},o=[{value:"Interfaces",id:"interfaces",level:2},{value:"Functions",id:"functions",level:2},{value:"FeedObject",id:"feedobject",level:3},{value:"Import",id:"import",level:4},{value:"Component Name",id:"component-name",level:4},{value:"CSS",id:"css",level:4},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"FeedObjectSkeleton",id:"feedobjectskeleton",level:3},{value:"Import",id:"import-1",level:4},{value:"Component Name",id:"component-name-1",level:4},{value:"CSS",id:"css-1",level:4},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-1",level:4}];function h(e){const t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(t.h2,{id:"interfaces",children:"Interfaces"}),"\n",(0,d.jsxs)(t.ul,{children:["\n",(0,d.jsx)(t.li,{children:(0,d.jsx)(t.a,{href:"/docs/sdk/community-js/react-ui/component_API/interfaces/FeedObject.FeedObjectProps",children:"FeedObjectProps"})}),"\n"]}),"\n",(0,d.jsx)(t.h2,{id:"functions",children:"Functions"}),"\n",(0,d.jsx)(t.h3,{id:"feedobject",children:"FeedObject"}),"\n",(0,d.jsxs)(t.p,{children:["\u25b8 ",(0,d.jsx)(t.strong,{children:"FeedObject"}),"(",(0,d.jsx)(t.code,{children:"inProps"}),"): ",(0,d.jsx)(t.code,{children:"JSX.Element"})]}),"\n",(0,d.jsxs)(t.blockquote,{children:["\n",(0,d.jsx)(t.p,{children:"API documentation for the Community-JS Feed Object component. Learn about the available props and the CSS API."}),"\n"]}),"\n",(0,d.jsxs)(t.p,{children:["This component renders a feed object item (post, discussion or status).\nTake a look at our ",(0,d.jsx)("strong",{children:"demo"})," component ",(0,d.jsx)(t.a,{href:"/docs/sdk/community-js/react-ui/Components/FeedObject",children:"here"})]}),"\n",(0,d.jsx)(t.h4,{id:"import",children:"Import"}),"\n",(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:"language-jsx",children:"import {FeedObject} from '@selfcommunity/react-ui';\n"})}),"\n",(0,d.jsx)(t.h4,{id:"component-name",children:"Component Name"}),"\n",(0,d.jsxs)(t.p,{children:["The name ",(0,d.jsx)(t.code,{children:"SCFeedObject"})," can be used when providing style overrides in the theme."]}),"\n",(0,d.jsx)(t.h4,{id:"css",children:"CSS"}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Rule Name"}),(0,d.jsx)(t.th,{children:"Global class"}),(0,d.jsx)(t.th,{children:"Description"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"root"}),(0,d.jsx)(t.td,{children:".SCFeedObject-root"}),(0,d.jsx)(t.td,{children:"Styles applied to the root element."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"deleted"}),(0,d.jsx)(t.td,{children:".SCFeedObject-deleted"}),(0,d.jsx)(t.td,{children:"Styles applied to the feed obj when is deleted (visible only for admin and moderator)."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"header"}),(0,d.jsx)(t.td,{children:".SCFeedObject-header"}),(0,d.jsx)(t.td,{children:"Styles applied to the header of the card."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"category"}),(0,d.jsx)(t.td,{children:".SCFeedObject-category"}),(0,d.jsx)(t.td,{children:"Styles applied to the category element."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"avatar"}),(0,d.jsx)(t.td,{children:".SCFeedObject-avatar"}),(0,d.jsx)(t.td,{children:"Styles applied to the avatar element."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"username"}),(0,d.jsx)(t.td,{children:".SCFeedObject-username"}),(0,d.jsx)(t.td,{children:"Styles applied to the username element."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"activityAt"}),(0,d.jsx)(t.td,{children:".SCFeedObject-activity-at"}),(0,d.jsx)(t.td,{children:"Styles applied to the activity at section."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"tag"}),(0,d.jsx)(t.td,{children:".SCFeedObject-tag"}),(0,d.jsx)(t.td,{children:"Styles applied to the tag element."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"location"}),(0,d.jsx)(t.td,{children:".SCFeedObject-location"}),(0,d.jsx)(t.td,{children:"Styles applied to the location element."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"content"}),(0,d.jsx)(t.td,{children:".SCFeedObject-content"}),(0,d.jsx)(t.td,{children:"Styles applied to the content section. Content section include: title-section, text-section, snippetContent, subContent, medias-section, polls-section, info-section."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"error"}),(0,d.jsx)(t.td,{children:".SCFeedObject-error"}),(0,d.jsx)(t.td,{children:"Styles applied to the error element."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"title-section"}),(0,d.jsx)(t.td,{children:".SCFeedObject-title-section"}),(0,d.jsx)(t.td,{children:"Styles applied to the title section."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"title"}),(0,d.jsx)(t.td,{children:".SCFeedObject-title"}),(0,d.jsx)(t.td,{children:"Styles applied to the title element."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"text-section"}),(0,d.jsx)(t.td,{children:".SCFeedObject-text-section"}),(0,d.jsx)(t.td,{children:"Styles applied to the text section."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"text"}),(0,d.jsx)(t.td,{children:".SCFeedObject-text"}),(0,d.jsx)(t.td,{children:"Styles applied to the text element."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"snippet"}),(0,d.jsx)(t.td,{children:".SCFeedObject-snippet"}),(0,d.jsx)(t.td,{children:"Styles applied to snippet element."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"snippet-content"}),(0,d.jsx)(t.td,{children:".SCFeedObject-snippet-content"}),(0,d.jsx)(t.td,{children:"Styles applied to snippet content element."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"medias-section"}),(0,d.jsx)(t.td,{children:".SCFeedObject-medias-section"}),(0,d.jsx)(t.td,{children:"Styles applied to the medias section."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"polls-section"}),(0,d.jsx)(t.td,{children:".SCFeedObject-polls-section"}),(0,d.jsx)(t.td,{children:"Styles applied to the polls section."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"info-section"}),(0,d.jsx)(t.td,{children:".SCFeedObject-info-section"}),(0,d.jsx)(t.td,{children:"Styles applied to the info section."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"actions-section"}),(0,d.jsx)(t.td,{children:".SCFeedObject-actions-section"}),(0,d.jsx)(t.td,{children:"Styles applied to the actions container."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"reply-content"}),(0,d.jsx)(t.td,{children:".SCFeedObject-reply-content"}),(0,d.jsx)(t.td,{children:"Styles applied to the reply box."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"activitiesSection"}),(0,d.jsx)(t.td,{children:".SCFeedObject-activities-section"}),(0,d.jsx)(t.td,{children:"Styles applied to the activities section element."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"activitiesContent"}),(0,d.jsx)(t.td,{children:".SCFeedObject-activities-content"}),(0,d.jsx)(t.td,{children:"Styles applied to the activities content element."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"followButton"}),(0,d.jsx)(t.td,{children:".SCFeedObject-follow-button"}),(0,d.jsx)(t.td,{children:"Styles applied to the follow button element."})]})]})]}),"\n",(0,d.jsx)(t.h4,{id:"parameters",children:"Parameters"}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{style:{textAlign:"left"},children:"Name"}),(0,d.jsx)(t.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,d.jsx)(t.tbody,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{style:{textAlign:"left"},children:(0,d.jsx)(t.code,{children:"inProps"})}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:(0,d.jsx)(t.a,{href:"/docs/sdk/community-js/react-ui/component_API/interfaces/FeedObject.FeedObjectProps",children:(0,d.jsx)(t.code,{children:"FeedObjectProps"})})})]})})]}),"\n",(0,d.jsx)(t.h4,{id:"returns",children:"Returns"}),"\n",(0,d.jsx)(t.p,{children:(0,d.jsx)(t.code,{children:"JSX.Element"})}),"\n",(0,d.jsx)(t.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,d.jsx)(t.p,{children:(0,d.jsx)(t.a,{href:"https://github.com/selfcommunity/community-js/blob/6572d63/packages/react-ui/src/components/FeedObject/FeedObject.tsx#L320",children:"packages/react-ui/src/components/FeedObject/FeedObject.tsx:320"})}),"\n",(0,d.jsx)(t.hr,{}),"\n",(0,d.jsx)(t.h3,{id:"feedobjectskeleton",children:"FeedObjectSkeleton"}),"\n",(0,d.jsxs)(t.p,{children:["\u25b8 ",(0,d.jsx)(t.strong,{children:"FeedObjectSkeleton"}),"(",(0,d.jsx)(t.code,{children:"props"}),"): ",(0,d.jsx)(t.code,{children:"JSX.Element"})]}),"\n",(0,d.jsxs)(t.blockquote,{children:["\n",(0,d.jsx)(t.p,{children:"API documentation for the Community-JS Feed Object Skeleton component. Learn about the available props and the CSS API."}),"\n"]}),"\n",(0,d.jsx)(t.h4,{id:"import-1",children:"Import"}),"\n",(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:"language-jsx",children:"import {FeedObjectSkeleton} from '@selfcommunity/react-ui';\n"})}),"\n",(0,d.jsx)(t.h4,{id:"component-name-1",children:"Component Name"}),"\n",(0,d.jsxs)(t.p,{children:["The name ",(0,d.jsx)(t.code,{children:"SCFeedObject-skeleton-root"})," can be used when providing style overrides in the theme."]}),"\n",(0,d.jsx)(t.h4,{id:"css-1",children:"CSS"}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Rule Name"}),(0,d.jsx)(t.th,{children:"Global class"}),(0,d.jsx)(t.th,{children:"Description"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"root"}),(0,d.jsx)(t.td,{children:".SCFeedObject-skeleton-root"}),(0,d.jsx)(t.td,{children:"Styles applied to the root element."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"media"}),(0,d.jsx)(t.td,{children:".SCFeedObject-media"}),(0,d.jsx)(t.td,{children:"Styles applied to the media element."})]})]})]}),"\n",(0,d.jsx)(t.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{style:{textAlign:"left"},children:"Name"}),(0,d.jsx)(t.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{style:{textAlign:"left"},children:(0,d.jsx)(t.code,{children:"props"})}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:(0,d.jsx)(t.code,{children:"Object"})})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{style:{textAlign:"left"},children:(0,d.jsx)(t.code,{children:"props.template?"})}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:(0,d.jsx)(t.code,{children:"SCFeedObjectTemplateType"})})]})]})]}),"\n",(0,d.jsx)(t.h4,{id:"returns-1",children:"Returns"}),"\n",(0,d.jsx)(t.p,{children:(0,d.jsx)(t.code,{children:"JSX.Element"})}),"\n",(0,d.jsx)(t.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,d.jsx)(t.p,{children:(0,d.jsx)(t.a,{href:"https://github.com/selfcommunity/community-js/blob/6572d63/packages/react-ui/src/components/FeedObject/Skeleton.tsx#L54",children:"packages/react-ui/src/components/FeedObject/Skeleton.tsx:54"})})]})}function j(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(h,{...e})}):h(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>c});var d=n(67294);const s={},i=d.createContext(s);function c(e){const t=d.useContext(i);return d.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),d.createElement(i.Provider,{value:t},e.children)}}}]);