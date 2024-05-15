"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[71645],{2090:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>i});var c=t(85893),n=t(11151);const r={},d="hooks/useSCFetchBroadcastMessages",o={id:"sdk/community-js/react-core/API_Reference/hooks/useSCFetchBroadcastMessages",title:"hooks/useSCFetchBroadcastMessages",description:"Functions",source:"@site/docs/sdk/community-js/react-core/API_Reference/hooks/useSCFetchBroadcastMessages.md",sourceDirName:"sdk/community-js/react-core/API_Reference/hooks",slug:"/sdk/community-js/react-core/API_Reference/hooks/useSCFetchBroadcastMessages",permalink:"/docs/sdk/community-js/react-core/API_Reference/hooks/useSCFetchBroadcastMessages",draft:!1,unlisted:!1,editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/sdk/community-js/react-core/API_Reference/hooks/useSCFetchBroadcastMessages.md",tags:[],version:"current",frontMatter:{},sidebar:"sdkSidebar",previous:{title:"hooks/useSCFetchAddressingTagList",permalink:"/docs/sdk/community-js/react-core/API_Reference/hooks/useSCFetchAddressingTagList"},next:{title:"hooks/useSCFetchCategories",permalink:"/docs/sdk/community-js/react-core/API_Reference/hooks/useSCFetchCategories"}},l={},i=[{value:"Functions",id:"functions",level:2},{value:"useSCFetchBroadcastMessages()",id:"usescfetchbroadcastmessages",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Source",id:"source",level:4}];function a(e){const s={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(s.h1,{id:"hooksusescfetchbroadcastmessages",children:"hooks/useSCFetchBroadcastMessages"}),"\n",(0,c.jsx)(s.h2,{id:"functions",children:"Functions"}),"\n",(0,c.jsx)(s.h3,{id:"usescfetchbroadcastmessages",children:"useSCFetchBroadcastMessages()"}),"\n",(0,c.jsxs)(s.blockquote,{children:["\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.strong,{children:"useSCFetchBroadcastMessages"}),"(",(0,c.jsx)(s.code,{children:"props"}),"?): ",(0,c.jsx)(s.code,{children:"object"})]}),"\n"]}),"\n",(0,c.jsxs)(s.admonition,{type:"info",children:[(0,c.jsx)(s.p,{children:"This custom hook is used to fetch broadcast messages."}),(0,c.jsx)(s.admonition,{title:"Context can be consumed in this way:",type:"tip",children:(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-jsx",children:"const {messages, isLoading} = useSCFetchBroadcastMessages();\n"})})})]}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsx)(s.li,{}),"\n"]}),"\n",(0,c.jsx)(s.h4,{id:"parameters",children:"Parameters"}),"\n",(0,c.jsxs)(s.table,{children:[(0,c.jsx)(s.thead,{children:(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.th,{style:{textAlign:"left"},children:"Parameter"}),(0,c.jsx)(s.th,{style:{textAlign:"left"},children:"Type"}),(0,c.jsx)(s.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,c.jsxs)(s.tbody,{children:[(0,c.jsxs)(s.tr,{children:[(0,c.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,c.jsx)(s.code,{children:"props"}),"?"]}),(0,c.jsx)(s.td,{style:{textAlign:"left"},children:(0,c.jsx)(s.code,{children:"object"})}),(0,c.jsx)(s.td,{style:{textAlign:"left"}})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,c.jsx)(s.code,{children:"props.cacheStrategy"}),"?"]}),(0,c.jsx)(s.td,{style:{textAlign:"left"},children:(0,c.jsx)(s.code,{children:"CacheStrategies"})}),(0,c.jsx)(s.td,{style:{textAlign:"left"},children:"-"})]})]})]}),"\n",(0,c.jsx)(s.h4,{id:"returns",children:"Returns"}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.code,{children:"object"})}),"\n",(0,c.jsxs)(s.table,{children:[(0,c.jsx)(s.thead,{children:(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.th,{style:{textAlign:"left"},children:"Member"}),(0,c.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,c.jsxs)(s.tbody,{children:[(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{style:{textAlign:"left"},children:(0,c.jsx)(s.code,{children:"data"})}),(0,c.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,c.jsx)(s.code,{children:"SCPaginatedResponse"}),"<",(0,c.jsx)(s.code,{children:"SCBroadcastMessageType"}),">"]})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{style:{textAlign:"left"},children:(0,c.jsx)(s.code,{children:"fetchMessages"})}),(0,c.jsxs)(s.td,{style:{textAlign:"left"},children:["(",(0,c.jsx)(s.code,{children:"refresh"}),") => ",(0,c.jsx)(s.code,{children:"Promise"}),"<",(0,c.jsx)(s.code,{children:"SCPaginatedResponse"}),"<",(0,c.jsx)(s.code,{children:"SCBroadcastMessageType"}),">>"]})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{style:{textAlign:"left"},children:(0,c.jsx)(s.code,{children:"loading"})}),(0,c.jsx)(s.td,{style:{textAlign:"left"},children:(0,c.jsx)(s.code,{children:"boolean"})})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{style:{textAlign:"left"},children:(0,c.jsx)(s.code,{children:"setMessages"})}),(0,c.jsxs)(s.td,{style:{textAlign:"left"},children:["(",(0,c.jsx)(s.code,{children:"messages"}),") => ",(0,c.jsx)(s.code,{children:"object"})]})]})]})]}),"\n",(0,c.jsx)(s.h4,{id:"source",children:"Source"}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.a,{href:"https://github.com/selfcommunity/community-js/blob/88ddf460a21d4471fb84839f097f9d428e19bd86/packages/react-core/src/hooks/useSCFetchBroadcastMessages.ts#L35",children:"packages/react-core/src/hooks/useSCFetchBroadcastMessages.ts:35"})})]})}function h(e={}){const{wrapper:s}={...(0,n.a)(),...e.components};return s?(0,c.jsx)(s,{...e,children:(0,c.jsx)(a,{...e})}):a(e)}},11151:(e,s,t)=>{t.d(s,{Z:()=>o,a:()=>d});var c=t(67294);const n={},r=c.createContext(n);function d(e){const s=c.useContext(r);return c.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),c.createElement(r.Provider,{value:s},e.children)}}}]);