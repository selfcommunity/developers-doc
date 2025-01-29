"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[5610],{56313:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>i,default:()=>a,frontMatter:()=>d,metadata:()=>c,toc:()=>o});var r=t(85893),n=t(11151);const d={sidebar_label:"Course Lesson",sidebar_position:1,title:"Course Lesson"},i=void 0,c={id:"apireference/v2/schemas/course_lesson",title:"Course Lesson",description:"Properties",source:"@site/docs/apireference/v2/schemas/course_lesson.md",sourceDirName:"apireference/v2/schemas",slug:"/apireference/v2/schemas/course_lesson",permalink:"/docs/apireference/v2/schemas/course_lesson",draft:!1,unlisted:!1,editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/apireference/v2/schemas/course_lesson.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Course Lesson",sidebar_position:1,title:"Course Lesson"},sidebar:"apireferenceSidebar",previous:{title:"Course Detail",permalink:"/docs/apireference/v2/schemas/course_detail"},next:{title:"Course Minimal",permalink:"/docs/apireference/v2/schemas/course_minimal"}},l={},o=[{value:"Properties",id:"properties",level:4},{value:"Enumerated Values",id:"enumerated-values",level:4}];function h(e){const s={a:"a",code:"code",h4:"h4",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-json",children:'{\n  "id": "integer",\n  "name": "string",\n  "type": "string",\n  "status": "string",\n  "comments_enabled": "boolean",\n  "completion_status": "string",\n  "course_id": "integer",\n  "section_id": "integer",\n  "html": "string",\n  "created_at": "string",\n  "created_by": {},\n  "medias": [],\n  "passing_grade": "integer",\n  "questions_order": [],\n  "questions": [],\n  "last_attempt": {}\n}\n'})}),"\n",(0,r.jsx)(s.h4,{id:"properties",children:"Properties"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Name"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{children:"Required"}),(0,r.jsx)(s.th,{children:"Restrictions"}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"id"}),(0,r.jsx)(s.td,{children:"integer"}),(0,r.jsx)(s.td,{children:"false"}),(0,r.jsx)(s.td,{children:"read-only"}),(0,r.jsx)(s.td,{children:"Unique integer value identifying this lesson course"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"name"}),(0,r.jsx)(s.td,{children:"string"}),(0,r.jsx)(s.td,{children:"true"}),(0,r.jsx)(s.td,{children:"none"}),(0,r.jsx)(s.td,{children:"Name of the lesson course"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"type"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"/docs/apireference/v2/schemas/course_lesson#enumerated-values",children:"type"})}),(0,r.jsx)(s.td,{children:"true"}),(0,r.jsx)(s.td,{children:"none"}),(0,r.jsx)(s.td,{children:"Enum to define the course lesson type"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"status"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"/docs/apireference/v2/schemas/course_lesson#enumerated-values",children:"status"})}),(0,r.jsx)(s.td,{children:"false"}),(0,r.jsx)(s.td,{children:"none"}),(0,r.jsxs)(s.td,{children:["Enum to define the course lesson status.",(0,r.jsx)("br",{}),"Default: draft"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"comments_enabled"}),(0,r.jsx)(s.td,{children:"boolean"}),(0,r.jsx)(s.td,{children:"false"}),(0,r.jsx)(s.td,{children:"none"}),(0,r.jsxs)(s.td,{children:["Enable the comments on the current lesson; if enabled, the users can comment the current lesson.",(0,r.jsx)("br",{}),"Default: true"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"completion_status"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"/docs/apireference/v2/schemas/course_lesson#enumerated-values",children:"completion_status"})}),(0,r.jsx)(s.td,{children:"false"}),(0,r.jsx)(s.td,{children:"read-only"}),(0,r.jsx)(s.td,{children:"Enum to define the course lesson completion status for the user"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"course_id"}),(0,r.jsx)(s.td,{children:"integer"}),(0,r.jsx)(s.td,{children:"false"}),(0,r.jsx)(s.td,{children:"read-only"}),(0,r.jsx)(s.td,{children:"Unique integer value identifying the course of the lesson"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"section_id"}),(0,r.jsx)(s.td,{children:"integer"}),(0,r.jsx)(s.td,{children:"false"}),(0,r.jsx)(s.td,{children:"read-only"}),(0,r.jsx)(s.td,{children:"Unique integer value identifying the section of the lesson"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"text"}),(0,r.jsx)(s.td,{children:"string"}),(0,r.jsx)(s.td,{children:"false"}),(0,r.jsx)(s.td,{children:"write-only"}),(0,r.jsxs)(s.td,{children:["The lesson course text.",(0,r.jsx)("br",{}),"Default: empty string.",(0,r.jsx)("br",{}),"Only available when creating or updating a lesson course"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"html"}),(0,r.jsx)(s.td,{children:"string"}),(0,r.jsx)(s.td,{children:"false"}),(0,r.jsx)(s.td,{children:"read-only"}),(0,r.jsxs)(s.td,{children:["The lesson course text.",(0,r.jsx)("br",{}),">Only available when getting a lesson course"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"created_at"}),(0,r.jsx)(s.td,{children:"string(date-time)"}),(0,r.jsx)(s.td,{children:"false"}),(0,r.jsx)(s.td,{children:"read-only"}),(0,r.jsx)(s.td,{children:"Datetime of lesson course creation"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"created_by"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"/docs/apireference/v2/schemas/user",children:"User"})}),(0,r.jsx)(s.td,{children:"false"}),(0,r.jsx)(s.td,{children:"read-only"}),(0,r.jsx)(s.td,{children:"The lesson course creator"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"medias"}),(0,r.jsx)(s.td,{children:"list(integer)"}),(0,r.jsx)(s.td,{children:"false"}),(0,r.jsx)(s.td,{children:"none"}),(0,r.jsxs)(s.td,{children:["List of id of ",(0,r.jsx)(s.a,{href:"/docs/apireference/v2/schemas/media",children:"Media"})," for the lesson course"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"passing_grade"}),(0,r.jsx)(s.td,{children:"integer"}),(0,r.jsx)(s.td,{children:"false"}),(0,r.jsx)(s.td,{children:"none"}),(0,r.jsx)(s.td,{children:"Define the minimum percentage of score required for students to pass the quiz; default: 60"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"questions_order"}),(0,r.jsx)(s.td,{children:"list(integer)"}),(0,r.jsx)(s.td,{children:"false"}),(0,r.jsx)(s.td,{children:"write-only"}),(0,r.jsx)(s.td,{children:"Define the order of the questions for the lesson; should be a list of question ids"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"questions"}),(0,r.jsxs)(s.td,{children:["list(",(0,r.jsx)(s.a,{href:"/docs/apireference/v2/schemas/course_question",children:"Course Quiz Question"}),")"]}),(0,r.jsx)(s.td,{children:"false"}),(0,r.jsx)(s.td,{children:"read-only"}),(0,r.jsxs)(s.td,{children:["List of ",(0,r.jsx)(s.a,{href:"/docs/apireference/v2/schemas/course_question",children:"Course Quiz Question"})," for the lesson"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"last_attempt"}),(0,r.jsxs)(s.td,{children:["list(",(0,r.jsx)(s.a,{href:"/docs/apireference/v2/schemas/course_attempt",children:"Course Quiz Attempt"}),")"]}),(0,r.jsx)(s.td,{children:"false"}),(0,r.jsx)(s.td,{children:"read-only"}),(0,r.jsxs)(s.td,{children:["Last ",(0,r.jsx)(s.a,{href:"/docs/apireference/v2/schemas/course_attempt",children:"Course Quiz Attempt"})," by the current user in this lesson course"]})]})]})]}),"\n",(0,r.jsx)(s.h4,{id:"enumerated-values",children:"Enumerated Values"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Property"}),(0,r.jsx)(s.th,{children:"Value"}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"type"}),(0,r.jsx)(s.td,{children:"lesson"}),(0,r.jsx)(s.td,{children:"Lesson course of type lesson"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"type"}),(0,r.jsx)(s.td,{children:"quiz"}),(0,r.jsx)(s.td,{children:"Lesson course of type quiz"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"status"}),(0,r.jsx)(s.td,{children:"draft"}),(0,r.jsx)(s.td,{children:"Lesson course status is draft (not yet published for all the users that joined the course)"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"status"}),(0,r.jsx)(s.td,{children:"published"}),(0,r.jsx)(s.td,{children:"Lesson course status is published"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"completion_status"}),(0,r.jsx)(s.td,{children:"uncompleted"}),(0,r.jsx)(s.td,{children:"Lesson course completion status is uncompleted for the user"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"completion_status"}),(0,r.jsx)(s.td,{children:"completed"}),(0,r.jsx)(s.td,{children:"Lesson course completion status is completed for the user"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"completion_status"}),(0,r.jsx)(s.td,{children:"failed"}),(0,r.jsx)(s.td,{children:"Lesson course completion status is failed for the user"})]})]})]})]})}function a(e={}){const{wrapper:s}={...(0,n.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},11151:(e,s,t)=>{t.d(s,{Z:()=>c,a:()=>i});var r=t(67294);const n={},d=r.createContext(n);function i(e){const s=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),r.createElement(d.Provider,{value:s},e.children)}}}]);