"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[77142],{39071:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>n,metadata:()=>c,toc:()=>a});var t=r(85893),d=r(11151);const n={sidebar_label:"Course Detail",sidebar_position:1,title:"Course Detail"},i=void 0,c={id:"apireference/v2/schemas/course_detail",title:"Course Detail",description:"Properties",source:"@site/docs/apireference/v2/schemas/course_detail.md",sourceDirName:"apireference/v2/schemas",slug:"/apireference/v2/schemas/course_detail",permalink:"/docs/apireference/v2/schemas/course_detail",draft:!1,unlisted:!1,editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/apireference/v2/schemas/course_detail.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Course Detail",sidebar_position:1,title:"Course Detail"},sidebar:"apireferenceSidebar",previous:{title:"Course Dashboard",permalink:"/docs/apireference/v2/schemas/course_dashboard"},next:{title:"Course Lesson",permalink:"/docs/apireference/v2/schemas/course_lesson"}},l={},a=[{value:"Properties",id:"properties",level:4},{value:"Enumerated Values",id:"enumerated-values",level:4}];function o(e){const s={a:"a",code:"code",h4:"h4",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-json",children:'{\n  "id": "integer",\n  "name": "string",\n  "slug": "string",\n  "description": "string",\n  "type": "string",\n  "privacy": "string",\n  "enforce_lessons_order": "boolean",\n  "new_comment_notification_enabled": "boolean",\n  "sections_order": [],\n  "image_bigger": "string",\n  "image_big": "string",\n  "image_medium": "string",\n  "image_small": "string",\n  "join_status": "string",\n  "user_completion_rate": "integer",\n  "created_at": "string",\n  "created_by": {},\n  "categories": [],\n  "sections": []\n}\n\n'})}),"\n",(0,t.jsx)(s.h4,{id:"properties",children:"Properties"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Name"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{children:"Required"}),(0,t.jsx)(s.th,{children:"Restrictions"}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"id"}),(0,t.jsx)(s.td,{children:"integer"}),(0,t.jsx)(s.td,{children:"false"}),(0,t.jsx)(s.td,{children:"read-only"}),(0,t.jsx)(s.td,{children:"Unique integer value identifying this course"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"name"}),(0,t.jsx)(s.td,{children:"string"}),(0,t.jsx)(s.td,{children:"true"}),(0,t.jsx)(s.td,{children:"read-only"}),(0,t.jsx)(s.td,{children:"Unique name of the course"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"slug"}),(0,t.jsx)(s.td,{children:"string"}),(0,t.jsx)(s.td,{children:"false"}),(0,t.jsx)(s.td,{children:"read-only"}),(0,t.jsx)(s.td,{children:"Unique slug identifying this course in a URL"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"description"}),(0,t.jsx)(s.td,{children:"string"}),(0,t.jsx)(s.td,{children:"false"}),(0,t.jsx)(s.td,{children:"read-only"}),(0,t.jsx)(s.td,{children:"The course description (default value: empty string)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"type"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"/docs/apireference/v2/schemas/course#enumerated-values",children:"type"})}),(0,t.jsx)(s.td,{children:"true"}),(0,t.jsx)(s.td,{children:"read-only"}),(0,t.jsx)(s.td,{children:"Enum to define the course type"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"privacy"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"/docs/apireference/v2/schemas/course#enumerated-values",children:"privacy"})}),(0,t.jsx)(s.td,{children:"false"}),(0,t.jsx)(s.td,{children:"read-only"}),(0,t.jsx)(s.td,{children:"Enum to define the course privacy (default value: empty string)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"enforce_lessons_order"}),(0,t.jsx)(s.td,{children:"boolean"}),(0,t.jsx)(s.td,{children:"false"}),(0,t.jsx)(s.td,{children:"read-only"}),(0,t.jsxs)(s.td,{children:["Lesson order enforcement (default: false).",(0,t.jsx)("br",{}),"Your members will have to complete each lesson in order before moving onto the next one"]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"new_comment_notification_enabled"}),(0,t.jsx)(s.td,{children:"boolean"}),(0,t.jsx)(s.td,{children:"false"}),(0,t.jsx)(s.td,{children:"read-only"}),(0,t.jsxs)(s.td,{children:["Notify course admins about new lesson comments (default: true).",(0,t.jsx)("br",{}),"If enabled, admins and moderators will receive a new comment notification anytime members leave a lesson comment"]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"sections_order"}),(0,t.jsx)(s.td,{children:"list(integer)"}),(0,t.jsx)(s.td,{children:"false"}),(0,t.jsx)(s.td,{children:"read-only"}),(0,t.jsx)(s.td,{children:"List of all section IDs belonging to the current course; IDs are sorted based on the choice made by the course managers"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"image_bigger"}),(0,t.jsx)(s.td,{children:"string"}),(0,t.jsx)(s.td,{children:"false"}),(0,t.jsx)(s.td,{children:"read-only"}),(0,t.jsx)(s.td,{children:"Squared image - auto generated bigger size"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"image_big"}),(0,t.jsx)(s.td,{children:"string"}),(0,t.jsx)(s.td,{children:"false"}),(0,t.jsx)(s.td,{children:"read-only"}),(0,t.jsx)(s.td,{children:"Squared image - auto generated big size"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"image_medium"}),(0,t.jsx)(s.td,{children:"string"}),(0,t.jsx)(s.td,{children:"false"}),(0,t.jsx)(s.td,{children:"read-only"}),(0,t.jsx)(s.td,{children:"Squared image - auto generated medium size"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"image_small"}),(0,t.jsx)(s.td,{children:"string"}),(0,t.jsx)(s.td,{children:"false"}),(0,t.jsx)(s.td,{children:"read-only"}),(0,t.jsx)(s.td,{children:"Squared image - auto generated small size"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"join_status"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"/docs/apireference/v2/schemas/course#enumerated-values",children:"status"})}),(0,t.jsx)(s.td,{children:"false"}),(0,t.jsx)(s.td,{children:"read-only"}),(0,t.jsx)(s.td,{children:"Enum to define the course subscription status of the current user"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"user_completion_rate"}),(0,t.jsx)(s.td,{children:"integer"}),(0,t.jsx)(s.td,{children:"false"}),(0,t.jsx)(s.td,{children:"read-only"}),(0,t.jsx)(s.td,{children:"Progress completion of the course in percentage for the current user"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"created_at"}),(0,t.jsx)(s.td,{children:"string(date-time)"}),(0,t.jsx)(s.td,{children:"false"}),(0,t.jsx)(s.td,{children:"read-only"}),(0,t.jsx)(s.td,{children:"Datetime of course creation"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"created_by"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"/docs/apireference/v2/schemas/user",children:"User"})}),(0,t.jsx)(s.td,{children:"false"}),(0,t.jsx)(s.td,{children:"read-only"}),(0,t.jsx)(s.td,{children:"The course creator"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"categories"}),(0,t.jsxs)(s.td,{children:["list(",(0,t.jsx)(s.a,{href:"/docs/apireference/v2/schemas/category",children:"Category"}),")"]}),(0,t.jsx)(s.td,{children:"false"}),(0,t.jsx)(s.td,{children:"read-only"}),(0,t.jsx)(s.td,{children:"The categories associated to the course"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"sections"}),(0,t.jsxs)(s.td,{children:["list(",(0,t.jsx)(s.a,{href:"/docs/apireference/v2/schemas/course_section_detail",children:"Course Section Detail"}),")"]}),(0,t.jsx)(s.td,{children:"false"}),(0,t.jsx)(s.td,{children:"read-only"}),(0,t.jsx)(s.td,{children:"The sections associated to the course"})]})]})]}),"\n",(0,t.jsx)(s.h4,{id:"enumerated-values",children:"Enumerated Values"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Property"}),(0,t.jsx)(s.th,{children:"Value"}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"type"}),(0,t.jsx)(s.td,{children:"self-paced"}),(0,t.jsx)(s.td,{children:"Course starts when a member enrolls. All contents are available immediately"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"type"}),(0,t.jsx)(s.td,{children:"structured"}),(0,t.jsx)(s.td,{children:"Course starts when a member enrolls. Sections are dripped relative to their enrollment date"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"type"}),(0,t.jsx)(s.td,{children:"scheduled"}),(0,t.jsx)(s.td,{children:"Course starts on a specific date. Sections are dripped relative to that date"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"privacy"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"Unselected privacy status (aka draft); cannot revert to this status after selecting another privacy status"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"privacy"}),(0,t.jsx)(s.td,{children:"open"}),(0,t.jsxs)(s.td,{children:["Access: Open. Anyone in your community can see and join this course.",(0,t.jsx)("br",{}),"Visibility: Visible to all members of your community"]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"privacy"}),(0,t.jsx)(s.td,{children:"private"}),(0,t.jsxs)(s.td,{children:["Access: Closed. Only members who are added by you will be able to access this course.",(0,t.jsx)("br",{}),"Visibility: Invited members only. Non-members will see the lock screen"]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"privacy"}),(0,t.jsx)(s.td,{children:"secret"}),(0,t.jsxs)(s.td,{children:["Access: Closed. Only members who are added by you will be able to access this course.",(0,t.jsx)("br",{}),"Visibility: Invited members only. Non-members will not see that this course exists"]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"join_status"}),(0,t.jsx)(s.td,{children:"null"}),(0,t.jsx)(s.td,{children:"The user has no status"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"join_status"}),(0,t.jsx)(s.td,{children:"joined"}),(0,t.jsx)(s.td,{children:"The user joined the course"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"join_status"}),(0,t.jsx)(s.td,{children:"invited"}),(0,t.jsx)(s.td,{children:"The user was invited to the course"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"join_status"}),(0,t.jsx)(s.td,{children:"requested"}),(0,t.jsx)(s.td,{children:"The user requests access to the course (available when the course is closed)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"join_status"}),(0,t.jsx)(s.td,{children:"manager"}),(0,t.jsx)(s.td,{children:"The user is a manager of the course and of course the user joined the course"})]})]})]})]})}function h(e={}){const{wrapper:s}={...(0,d.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},11151:(e,s,r)=>{r.d(s,{Z:()=>c,a:()=>i});var t=r(67294);const d={},n=t.createContext(d);function i(e){const s=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),t.createElement(n.Provider,{value:s},e.children)}}}]);