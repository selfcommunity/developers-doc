"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[97404],{77327:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>o,frontMatter:()=>d,metadata:()=>c,toc:()=>a});var n=r(85893),s=r(11151);const d={sidebar_label:"Attempt",sidebar_position:1,title:"Attempt"},i=void 0,c={id:"apireference/v2/schemas/attempt",title:"Attempt",description:"Properties",source:"@site/docs/apireference/v2/schemas/attempt.md",sourceDirName:"apireference/v2/schemas",slug:"/apireference/v2/schemas/attempt",permalink:"/docs/apireference/v2/schemas/attempt",draft:!1,unlisted:!1,editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/apireference/v2/schemas/attempt.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Attempt",sidebar_position:1,title:"Attempt"},sidebar:"apireferenceSidebar",previous:{title:"User's custom fields (metadata)",permalink:"/docs/apireference/v2/usermetadata/"},next:{title:"Avatar",permalink:"/docs/apireference/v2/schemas/avatar"}},l={},a=[{value:"Properties",id:"properties",level:4}];function h(e){const t={code:"code",h4:"h4",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'{\n  "id": "integer",\n  "created_at": "string",\n  "event": {\n    "type": "string",\n    "added_at": "string"\n  },\n  "sent_at": "string",\n  "http_request_body": "string",\n  "http_request_signature_header": "string",\n  "http_response_code": "integer",\n  "http_response_body": "string",\n  "next_retry": "string"\n}\n\n'})}),"\n",(0,n.jsx)(t.h4,{id:"properties",children:"Properties"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Required"}),(0,n.jsx)(t.th,{children:"Restrictions"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"id"}),(0,n.jsx)(t.td,{children:"integer"}),(0,n.jsx)(t.td,{children:"false"}),(0,n.jsx)(t.td,{children:"read-only"}),(0,n.jsx)(t.td,{children:"A unique integer value"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"created_at"}),(0,n.jsx)(t.td,{children:"string(date-time)"}),(0,n.jsx)(t.td,{children:"false"}),(0,n.jsx)(t.td,{children:"read-only"}),(0,n.jsx)(t.td,{children:"The creation datetime"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"event"}),(0,n.jsx)(t.td,{children:"list"}),(0,n.jsx)(t.td,{children:"true"}),(0,n.jsx)(t.td,{children:"none"}),(0,n.jsx)(t.td,{children:"The event"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"\xbb type"}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{children:"true"}),(0,n.jsx)(t.td,{children:"none"}),(0,n.jsx)(t.td,{children:"The event type"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"\xbb added_at"}),(0,n.jsx)(t.td,{children:"string(date-time)"}),(0,n.jsx)(t.td,{children:"false"}),(0,n.jsx)(t.td,{children:"read-only"}),(0,n.jsx)(t.td,{children:"The datetime of event creation"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"sent_at"}),(0,n.jsx)(t.td,{children:"string(date-time)"}),(0,n.jsx)(t.td,{children:"false"}),(0,n.jsx)(t.td,{children:"read-only"}),(0,n.jsx)(t.td,{children:"Datetime of sent"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"http_request_body"}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{children:"false"}),(0,n.jsx)(t.td,{children:"read-only"}),(0,n.jsx)(t.td,{children:"Http request body"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"http_request_signature_header"}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{children:"false"}),(0,n.jsx)(t.td,{children:"read-only"}),(0,n.jsx)(t.td,{children:"Http request signature header"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"http_response_code"}),(0,n.jsx)(t.td,{children:"integer"}),(0,n.jsx)(t.td,{children:"false"}),(0,n.jsx)(t.td,{children:"read-only"}),(0,n.jsx)(t.td,{children:"Http response code"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"http_response_body"}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{children:"false"}),(0,n.jsx)(t.td,{children:"read-only"}),(0,n.jsx)(t.td,{children:"Http response body"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"next_retry"}),(0,n.jsx)(t.td,{children:"string(date-time)"}),(0,n.jsx)(t.td,{children:"false"}),(0,n.jsx)(t.td,{children:"read-only"}),(0,n.jsx)(t.td,{children:"Datetime of next retry"})]})]})]})]})}function o(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},11151:(e,t,r)=>{r.d(t,{Z:()=>c,a:()=>i});var n=r(67294);const s={},d=n.createContext(s);function i(e){const t=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(d.Provider,{value:t},e.children)}}}]);