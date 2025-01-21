"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[39321],{45738:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var t=r(85893),n=r(11151);const i={sidebar_label:"Course Section Detail",sidebar_position:1,title:"Course Section Detail"},d=void 0,c={id:"apireference/v2/schemas/course_section_detail",title:"Course Section Detail",description:"Properties",source:"@site/docs/apireference/v2/schemas/course_section_detail.md",sourceDirName:"apireference/v2/schemas",slug:"/apireference/v2/schemas/course_section_detail",permalink:"/docs/apireference/v2/schemas/course_section_detail",draft:!1,unlisted:!1,editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/apireference/v2/schemas/course_section_detail.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Course Section Detail",sidebar_position:1,title:"Course Section Detail"},sidebar:"apireferenceSidebar",previous:{title:"Course Section",permalink:"/docs/apireference/v2/schemas/course_section"},next:{title:"Course User Dashboard",permalink:"/docs/apireference/v2/schemas/course_user_dashboard"}},o={},l=[{value:"Properties",id:"properties",level:4}];function a(e){const s={a:"a",code:"code",h4:"h4",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-json",children:'{\n  "id": "integer",\n  "name": "string",\n  "dripped_at": "string",\n  "drip_delay": "integer",\n  "lessons_order": [],\n  "lessons": []\n}\n\n'})}),"\n",(0,t.jsx)(s.h4,{id:"properties",children:"Properties"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Name"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{children:"Required"}),(0,t.jsx)(s.th,{children:"Restrictions"}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"id"}),(0,t.jsx)(s.td,{children:"integer"}),(0,t.jsx)(s.td,{children:"false"}),(0,t.jsx)(s.td,{children:"read-only"}),(0,t.jsx)(s.td,{children:"Unique integer value identifying this section course"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"name"}),(0,t.jsx)(s.td,{children:"string"}),(0,t.jsx)(s.td,{children:"true"}),(0,t.jsx)(s.td,{children:"read-only"}),(0,t.jsx)(s.td,{children:"Name of the section course"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"dripped_at"}),(0,t.jsx)(s.td,{children:"string(date-time)"}),(0,t.jsx)(s.td,{children:"false"}),(0,t.jsx)(s.td,{children:"read-only"}),(0,t.jsxs)(s.td,{children:["Sections are dripped relative to this date; used only id course type is ",(0,t.jsx)(s.a,{href:"/docs/apireference/v2/schemas/course#enumerated-values",children:"scheduled"})]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"drip_delay"}),(0,t.jsx)(s.td,{children:"integer"}),(0,t.jsx)(s.td,{children:"false"}),(0,t.jsx)(s.td,{children:"read-only"}),(0,t.jsxs)(s.td,{children:["Sections are dripped relative to the enrollment date of the current user; used only if course type is ",(0,t.jsx)(s.a,{href:"/docs/apireference/v2/schemas/course#enumerated-values",children:"structured"})," .",(0,t.jsx)("br",{}),"Default: 0 days; it means the section will be immediately available after joining a course"]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"lessons_order"}),(0,t.jsx)(s.td,{children:"list(integer)"}),(0,t.jsx)(s.td,{children:"false"}),(0,t.jsx)(s.td,{children:"read-only"}),(0,t.jsx)(s.td,{children:"List of all lesson IDs belonging to the current section course; IDs are sorted based on the choice made by the course managers"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"lessons"}),(0,t.jsxs)(s.td,{children:["list(",(0,t.jsx)(s.a,{href:"/docs/apireference/v2/schemas/course_lesson_detail",children:"Course Lesson Detail"}),")"]}),(0,t.jsx)(s.td,{children:"false"}),(0,t.jsx)(s.td,{children:"read-only"}),(0,t.jsx)(s.td,{children:"The lessons associated to the course section"})]})]})]})]})}function h(e={}){const{wrapper:s}={...(0,n.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},11151:(e,s,r)=>{r.d(s,{Z:()=>c,a:()=>d});var t=r(67294);const n={},i=t.createContext(n);function d(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);