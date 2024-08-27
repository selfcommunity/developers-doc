"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[510],{90272:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>r,default:()=>a,frontMatter:()=>i,metadata:()=>c,toc:()=>o});var n=t(85893),d=t(11151);const i={sidebar_label:"Discussion",sidebar_position:1,title:"Discussion"},r=void 0,c={id:"apireference/v2/schemas/discussion",title:"Discussion",description:"Properties",source:"@site/docs/apireference/v2/schemas/discussion.md",sourceDirName:"apireference/v2/schemas",slug:"/apireference/v2/schemas/discussion",permalink:"/docs/apireference/v2/schemas/discussion",draft:!1,unlisted:!1,editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/apireference/v2/schemas/discussion.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Discussion",sidebar_position:1,title:"Discussion"},sidebar:"apireferenceSidebar",previous:{title:"Custom Page",permalink:"/docs/apireference/v2/schemas/custom_page"},next:{title:"Dynamic Preference",permalink:"/docs/apireference/v2/schemas/dynamic_preference"}},l={},o=[{value:"Properties",id:"properties",level:4}];function h(e){const s={a:"a",code:"code",h4:"h4",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-json",children:'{\n  "id": "integer",\n  "type": "string",\n  "last_activity_at": "string",\n  "author": {},\n  "added_at": "string",\n  "last_edited_at": "string",\n  "html": "string",\n  "summary": "string",\n  "deleted": "boolean",\n  "collapsed": "boolean",\n  "comment_count": "integer",\n  "view_count": "integer",\n  "vote_count": "integer",\n  "reactions_count": [],\n  "voted": "boolean",\n  "reaction": {},\n  "follower_count": "integer",\n  "followed": "boolean",\n  "suspended": "boolean",\n  "flag_count": "integer",\n  "share_count": "integer",\n  "slug": "string",\n  "categories": [],\n  "medias": [],\n  "location": "string",\n  "tags": [],\n  "group": "integer",\n  "event": "integer",\n  "poll": {},\n  "title": "string"\n}\n\n'})}),"\n",(0,n.jsx)(s.h4,{id:"properties",children:"Properties"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Name"}),(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{children:"Required"}),(0,n.jsx)(s.th,{children:"Restrictions"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"id"}),(0,n.jsx)(s.td,{children:"integer"}),(0,n.jsx)(s.td,{children:"false"}),(0,n.jsx)(s.td,{children:"read-only"}),(0,n.jsx)(s.td,{children:"A unique integer value identifying this discussion"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"type"}),(0,n.jsx)(s.td,{children:"string"}),(0,n.jsx)(s.td,{children:"false"}),(0,n.jsx)(s.td,{children:"read-only"}),(0,n.jsx)(s.td,{children:"Discussion type"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"last_activity_at"}),(0,n.jsx)(s.td,{children:"string(date-time)"}),(0,n.jsx)(s.td,{children:"false"}),(0,n.jsx)(s.td,{children:"read-only"}),(0,n.jsx)(s.td,{children:"Discussion last activity datetime"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"author"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"/docs/apireference/v2/schemas/user",children:"User"})}),(0,n.jsx)(s.td,{children:"false"}),(0,n.jsx)(s.td,{children:"read-only"}),(0,n.jsx)(s.td,{children:"Discussion author"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"added_at"}),(0,n.jsx)(s.td,{children:"string(date-time)"}),(0,n.jsx)(s.td,{children:"false"}),(0,n.jsx)(s.td,{children:"read-only"}),(0,n.jsx)(s.td,{children:"Discussion creation time"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"last_edited_at"}),(0,n.jsx)(s.td,{children:"string(date-time)"}),(0,n.jsx)(s.td,{children:"false"}),(0,n.jsx)(s.td,{children:"read-only"}),(0,n.jsx)(s.td,{children:"Discussion last edit time"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"html"}),(0,n.jsx)(s.td,{children:"string"}),(0,n.jsx)(s.td,{children:"false"}),(0,n.jsx)(s.td,{children:"read-only"}),(0,n.jsx)(s.td,{children:"Discussion html content"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"summary"}),(0,n.jsx)(s.td,{children:"string"}),(0,n.jsx)(s.td,{children:"false"}),(0,n.jsx)(s.td,{children:"read-only"}),(0,n.jsx)(s.td,{children:"Discussion summary"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"deleted"}),(0,n.jsx)(s.td,{children:"boolean"}),(0,n.jsx)(s.td,{children:"false"}),(0,n.jsx)(s.td,{children:"read-only"}),(0,n.jsx)(s.td,{children:"If true, discussion has been deleted"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"collapsed"}),(0,n.jsx)(s.td,{children:"string"}),(0,n.jsx)(s.td,{children:"false"}),(0,n.jsx)(s.td,{children:"read-only"}),(0,n.jsx)(s.td,{children:"If true, discussion has been collapsed"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"comment_count"}),(0,n.jsx)(s.td,{children:"integer"}),(0,n.jsx)(s.td,{children:"false"}),(0,n.jsx)(s.td,{children:"read-only"}),(0,n.jsx)(s.td,{children:"The number of comments associated to this contribution"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"view_count"}),(0,n.jsx)(s.td,{children:"integer"}),(0,n.jsx)(s.td,{children:"false"}),(0,n.jsx)(s.td,{children:"read-only"}),(0,n.jsx)(s.td,{children:"The number of views associated to this contribution"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"vote_count"}),(0,n.jsx)(s.td,{children:"integer"}),(0,n.jsx)(s.td,{children:"false"}),(0,n.jsx)(s.td,{children:"read-only"}),(0,n.jsx)(s.td,{children:"The number of votes/reactions associated to this contribution"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"reactions_count"}),(0,n.jsxs)(s.td,{children:["list(",(0,n.jsx)(s.a,{href:"/docs/apireference/v2/schemas/reaction",children:"Reaction"}),")"]}),(0,n.jsx)(s.td,{children:"false"}),(0,n.jsx)(s.td,{children:"read-only"}),(0,n.jsx)(s.td,{children:"Reactions associated to this contribution"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"voted"}),(0,n.jsx)(s.td,{children:"boolean"}),(0,n.jsx)(s.td,{children:"false"}),(0,n.jsx)(s.td,{children:"read-only"}),(0,n.jsx)(s.td,{children:"If true,  the logged user has already voted this contribution"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"reaction"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"/docs/apireference/v2/schemas/reaction",children:"Reaction"})}),(0,n.jsx)(s.td,{children:"false"}),(0,n.jsx)(s.td,{children:"read-only"}),(0,n.jsx)(s.td,{children:"Reaction of the logged user (if he voted this contribution)"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"follower_count"}),(0,n.jsx)(s.td,{children:"string"}),(0,n.jsx)(s.td,{children:"false"}),(0,n.jsx)(s.td,{children:"read-only"}),(0,n.jsx)(s.td,{children:"The number of followers associated to this contribution"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"followed"}),(0,n.jsx)(s.td,{children:"boolean"}),(0,n.jsx)(s.td,{children:"false"}),(0,n.jsx)(s.td,{children:"read-only"}),(0,n.jsx)(s.td,{children:"If true, the logged user follows the discussion"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"suspended"}),(0,n.jsx)(s.td,{children:"boolean"}),(0,n.jsx)(s.td,{children:"false"}),(0,n.jsx)(s.td,{children:"read-only"}),(0,n.jsx)(s.td,{children:"If true, the logged user has suspended the notifications for the discussion"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"flag_count"}),(0,n.jsx)(s.td,{children:"integer"}),(0,n.jsx)(s.td,{children:"false"}),(0,n.jsx)(s.td,{children:"read-only"}),(0,n.jsx)(s.td,{children:"The number of flags associated to this contribution"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"share_count"}),(0,n.jsx)(s.td,{children:"integer"}),(0,n.jsx)(s.td,{children:"false"}),(0,n.jsx)(s.td,{children:"read-only"}),(0,n.jsx)(s.td,{children:"The number of shares associated to this contribution"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"slug"}),(0,n.jsx)(s.td,{children:"string"}),(0,n.jsx)(s.td,{children:"false"}),(0,n.jsx)(s.td,{children:"read-only"}),(0,n.jsx)(s.td,{children:"Discussion  slug"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"categories"}),(0,n.jsxs)(s.td,{children:["list(",(0,n.jsx)(s.a,{href:"/docs/apireference/v2/schemas/category",children:"Category"}),")"]}),(0,n.jsx)(s.td,{children:"true"}),(0,n.jsx)(s.td,{children:"none"}),(0,n.jsx)(s.td,{children:"The categories (at least one category is required) associated to this contribution"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"medias"}),(0,n.jsxs)(s.td,{children:["list(",(0,n.jsx)(s.a,{href:"/docs/apireference/v2/schemas/media",children:"Media"}),")"]}),(0,n.jsx)(s.td,{children:"false"}),(0,n.jsx)(s.td,{children:"none"}),(0,n.jsx)(s.td,{children:"The medias  associated to this contribution"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"location"}),(0,n.jsx)(s.td,{children:"object\xa6null"}),(0,n.jsx)(s.td,{children:"false"}),(0,n.jsx)(s.td,{children:"none"}),(0,n.jsx)(s.td,{children:"The location object associated to this contribution"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"\xbb location"}),(0,n.jsx)(s.td,{children:"string\xa6null"}),(0,n.jsx)(s.td,{children:"true"}),(0,n.jsx)(s.td,{children:"none"}),(0,n.jsx)(s.td,{children:"Location name"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"\xbb lat"}),(0,n.jsx)(s.td,{children:"number\xa6null"}),(0,n.jsx)(s.td,{children:"true"}),(0,n.jsx)(s.td,{children:"none"}),(0,n.jsx)(s.td,{children:"Location latitude"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"\xbb lng"}),(0,n.jsx)(s.td,{children:"number\xa6null"}),(0,n.jsx)(s.td,{children:"true"}),(0,n.jsx)(s.td,{children:"none"}),(0,n.jsx)(s.td,{children:"Location Longitude"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"addressing"}),(0,n.jsx)(s.td,{children:"list(integer)"}),(0,n.jsx)(s.td,{children:"false"}),(0,n.jsx)(s.td,{children:"none"}),(0,n.jsxs)(s.td,{children:["List of ",(0,n.jsx)(s.a,{href:"/docs/apireference/v2/schemas/tag",children:"Tag"})," ids. Only tags of type 'user' used for addressing this contribution"]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"tags"}),(0,n.jsx)(s.td,{children:"list(integer)"}),(0,n.jsx)(s.td,{children:"false"}),(0,n.jsx)(s.td,{children:"none"}),(0,n.jsxs)(s.td,{children:["List of ",(0,n.jsx)(s.a,{href:"/docs/apireference/v2/schemas/tag",children:"Tag"})," ids. Only tags of type 'contribution'"]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"group"}),(0,n.jsx)(s.td,{children:"integer"}),(0,n.jsx)(s.td,{children:"false"}),(0,n.jsx)(s.td,{children:"none"}),(0,n.jsx)(s.td,{children:"The id of the group"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"event"}),(0,n.jsx)(s.td,{children:"integer"}),(0,n.jsx)(s.td,{children:"false"}),(0,n.jsx)(s.td,{children:"none"}),(0,n.jsx)(s.td,{children:"The id of the event"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"poll"}),(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.a,{href:"/docs/apireference/v2/schemas/poll",children:"Poll"}),"\xa6null"]}),(0,n.jsx)(s.td,{children:"false"}),(0,n.jsx)(s.td,{children:"none"}),(0,n.jsx)(s.td,{children:"The poll object associated to this contribution"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"title"}),(0,n.jsx)(s.td,{children:"string"}),(0,n.jsx)(s.td,{children:"true"}),(0,n.jsx)(s.td,{children:"none"}),(0,n.jsx)(s.td,{children:"Discussion title"})]})]})]})]})}function a(e={}){const{wrapper:s}={...(0,d.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},11151:(e,s,t)=>{t.d(s,{Z:()=>c,a:()=>r});var n=t(67294);const d={},i=n.createContext(d);function r(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);