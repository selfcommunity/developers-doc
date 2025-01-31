"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[46987],{1445:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>n,metadata:()=>c,toc:()=>a});var t=r(85893),i=r(11151);const n={sidebar_label:"Course Quiz Dashboard",sidebar_position:1,title:"Course Quiz Dashboard"},d=void 0,c={id:"apireference/v2/schemas/course_quiz_dashboard",title:"Course Quiz Dashboard",description:"Properties",source:"@site/docs/apireference/v2/schemas/course_quiz_dashboard.md",sourceDirName:"apireference/v2/schemas",slug:"/apireference/v2/schemas/course_quiz_dashboard",permalink:"/docs/apireference/v2/schemas/course_quiz_dashboard",draft:!1,unlisted:!1,editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/apireference/v2/schemas/course_quiz_dashboard.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Course Quiz Dashboard",sidebar_position:1,title:"Course Quiz Dashboard"},sidebar:"apireferenceSidebar",previous:{title:"Course Quiz Question Answer",permalink:"/docs/apireference/v2/schemas/course_question_answer"},next:{title:"Course Section",permalink:"/docs/apireference/v2/schemas/course_section"}},l={},a=[{value:"Properties",id:"properties",level:4},{value:"Enumerated Values",id:"enumerated-values",level:4}];function o(e){const s={a:"a",code:"code",h4:"h4",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-json",children:'{\n  "id": "integer",\n  "course_id": "integer",\n  "section_id": "integer",\n  "lesson_id": "integer",\n  "name": "string",\n  "created_at": "string",\n  "grade": "integer",\n  "result": "string",\n  "user": {}\n}\n\n'})}),"\n",(0,t.jsx)(s.h4,{id:"properties",children:"Properties"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Name"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{children:"Required"}),(0,t.jsx)(s.th,{children:"Restrictions"}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"id"}),(0,t.jsx)(s.td,{children:"integer"}),(0,t.jsx)(s.td,{children:"false"}),(0,t.jsx)(s.td,{children:"read-only"}),(0,t.jsx)(s.td,{children:"Unique integer value identifying this quiz attempt"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"course_id"}),(0,t.jsx)(s.td,{children:"integer"}),(0,t.jsx)(s.td,{children:"false"}),(0,t.jsx)(s.td,{children:"read-only"}),(0,t.jsx)(s.td,{children:"Unique integer value identifying the course of this quiz"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"section_id"}),(0,t.jsx)(s.td,{children:"integer"}),(0,t.jsx)(s.td,{children:"false"}),(0,t.jsx)(s.td,{children:"read-only"}),(0,t.jsx)(s.td,{children:"Unique integer value identifying the section of this quiz"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"lesson_id"}),(0,t.jsx)(s.td,{children:"integer"}),(0,t.jsx)(s.td,{children:"false"}),(0,t.jsx)(s.td,{children:"read-only"}),(0,t.jsx)(s.td,{children:"Unique integer value identifying this quiz (lesson course)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"name"}),(0,t.jsx)(s.td,{children:"string"}),(0,t.jsx)(s.td,{children:"false"}),(0,t.jsx)(s.td,{children:"read-only"}),(0,t.jsx)(s.td,{children:"The name of the lesson (quiz)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"created_at"}),(0,t.jsx)(s.td,{children:"string(date-time)"}),(0,t.jsx)(s.td,{children:"false"}),(0,t.jsx)(s.td,{children:"read-only"}),(0,t.jsx)(s.td,{children:"Datetime of quiz attempt"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"grade"}),(0,t.jsx)(s.td,{children:"integer"}),(0,t.jsx)(s.td,{children:"false"}),(0,t.jsx)(s.td,{children:"read-only"}),(0,t.jsx)(s.td,{children:"The grade (score in percentage) the user received at the end of the following quiz attempt"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"result"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"/docs/apireference/v2/schemas/course_quiz_dashboard#enumerated-values",children:"result"})}),(0,t.jsx)(s.td,{children:"false"}),(0,t.jsx)(s.td,{children:"read-only"}),(0,t.jsx)(s.td,{children:"Enum to define the course subscription status of the current user"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"user"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"/docs/apireference/v2/schemas/user_minimal",children:"User Minimal"})}),(0,t.jsx)(s.td,{children:"false"}),(0,t.jsx)(s.td,{children:"read-only"}),(0,t.jsx)(s.td,{children:"the user who attempted to solve the quiz"})]})]})]}),"\n",(0,t.jsx)(s.h4,{id:"enumerated-values",children:"Enumerated Values"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Property"}),(0,t.jsx)(s.th,{children:"Value"}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"result"}),(0,t.jsx)(s.td,{children:"uncompleted"}),(0,t.jsx)(s.td,{children:"Quiz course completion status is uncompleted for the user"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"result"}),(0,t.jsx)(s.td,{children:"completed"}),(0,t.jsxs)(s.td,{children:["Quiz course completion status is completed for the user.",(0,t.jsx)("br",{}),"Quiz passed"]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"result"}),(0,t.jsx)(s.td,{children:"failed"}),(0,t.jsx)(s.td,{children:"Quiz course completion status is failed for the user"})]})]})]})]})}function h(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},11151:(e,s,r)=>{r.d(s,{Z:()=>c,a:()=>d});var t=r(67294);const i={},n=t.createContext(i);function d(e){const s=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),t.createElement(n.Provider,{value:s},e.children)}}}]);