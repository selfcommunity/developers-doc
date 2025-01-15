"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[62608],{86382:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>d,metadata:()=>c,toc:()=>l});var t=n(85893),r=n(11151);const d={sidebar_label:"Feed",sidebar_position:1,title:"Feed"},i=void 0,c={id:"apireference/v2/schemas/feed",title:"Feed",description:"Properties",source:"@site/docs/apireference/v2/schemas/feed.md",sourceDirName:"apireference/v2/schemas",slug:"/apireference/v2/schemas/feed",permalink:"/docs/apireference/v2/schemas/feed",draft:!1,unlisted:!1,editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/apireference/v2/schemas/feed.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Feed",sidebar_position:1,title:"Feed"},sidebar:"apireferenceSidebar",previous:{title:"Feature",permalink:"/docs/apireference/v2/schemas/feature"},next:{title:"Feed Activity",permalink:"/docs/apireference/v2/schemas/feed_activity"}},o={},l=[{value:"Properties",id:"properties",level:4}];function a(e){const s={a:"a",code:"code",h4:"h4",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-json",children:'{\n  "type": "string",\n  "discussion": {\n    "id": "integer",\n    "type": "string",\n    "last_activity_at": "string",\n    "author": {},\n    "added_at": "string",\n    "last_edited_at": "string",\n    "html": "string",\n    "summary": "string",\n    "deleted": "boolean",\n    "collapsed": "boolean",\n    "comment_count": "integer",\n    "view_count": "integer",\n    "vote_count": "integer",\n    "reactions_count": [],\n    "voted": "boolean",\n    "follower_count": "integer",\n    "followed": "boolean",\n    "suspended": "boolean",\n    "flag_count": "integer",\n    "share_count": "integer",\n    "slug": "string",\n    "categories": [],\n    "medias": [],\n    "location": "string",\n    "addressing": [],\n    "tags": [],\n    "poll": {},\n    "title": "string"\n  },\n  "seen_by_id": [],\n  "has_boost": "boolean"\n}\n\n'})}),"\n",(0,t.jsx)(s.h4,{id:"properties",children:"Properties"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Name"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{children:"Required"}),(0,t.jsx)(s.th,{children:"Restrictions"}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"type"}),(0,t.jsx)(s.td,{children:"string"}),(0,t.jsx)(s.td,{children:"false"}),(0,t.jsx)(s.td,{children:"read-only"}),(0,t.jsxs)(s.td,{children:["The type of the object, can be ",(0,t.jsx)(s.code,{children:"discussion"})," , ",(0,t.jsx)(s.code,{children:"post"})," or ",(0,t.jsx)(s.code,{children:"status"})]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"discussion"}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.a,{href:"/docs/apireference/v2/schemas/discussion",children:"Discussion"}),"\xa6null"]}),(0,t.jsx)(s.td,{children:"false"}),(0,t.jsx)(s.td,{children:"read-only"}),(0,t.jsx)(s.td,{children:"The discussion obj"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"post"}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.a,{href:"/docs/apireference/v2/schemas/post",children:"Post"}),"\xa6undefined"]}),(0,t.jsx)(s.td,{children:"false"}),(0,t.jsx)(s.td,{children:"read-only"}),(0,t.jsx)(s.td,{children:"The post obj"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"status"}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.a,{href:"/docs/apireference/v2/schemas/status",children:"Status"}),"\xa6undefined"]}),(0,t.jsx)(s.td,{children:"false"}),(0,t.jsx)(s.td,{children:"read-only"}),(0,t.jsx)(s.td,{children:"The status obj"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"seen_by_id"}),(0,t.jsx)(s.td,{children:"list(integer)\xa6undefined"}),(0,t.jsx)(s.td,{children:"false"}),(0,t.jsx)(s.td,{children:"read-only"}),(0,t.jsxs)(s.td,{children:["Id of ",(0,t.jsx)(s.a,{href:"/docs/apireference/v2/schemas/user",children:"User"})," that have seen this object"]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"has_boost"}),(0,t.jsx)(s.td,{children:"\xa6undefined"}),(0,t.jsx)(s.td,{children:"false"}),(0,t.jsx)(s.td,{children:"read-only"}),(0,t.jsx)(s.td,{children:"If true, this object has the visibility boost"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"activities"}),(0,t.jsxs)(s.td,{children:["list(",(0,t.jsx)(s.a,{href:"/docs/apireference/v2/schemas/feed_activity",children:"FeedActivity"}),")\xa6undefined"]}),(0,t.jsx)(s.td,{children:"false"}),(0,t.jsx)(s.td,{children:"read-only"}),(0,t.jsx)(s.td,{children:"List of feed acitivity. This field is returned only for relevance feed"})]})]})]})]})}function h(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},11151:(e,s,n)=>{n.d(s,{Z:()=>c,a:()=>i});var t=n(67294);const r={},d=t.createContext(r);function i(e){const s=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(d.Provider,{value:s},e.children)}}}]);