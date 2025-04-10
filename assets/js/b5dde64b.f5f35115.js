"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[88315],{88344:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>o,frontMatter:()=>d,metadata:()=>c,toc:()=>h});var t=s(85893),n=s(11151);const d={sidebar_label:"Course With Member Count",sidebar_position:1,title:"Course With Member Count"},i=void 0,c={id:"apireference/v2/schemas/course_with_member_count",title:"Course With Member Count",description:"Properties",source:"@site/docs/apireference/v2/schemas/course_with_member_count.md",sourceDirName:"apireference/v2/schemas",slug:"/apireference/v2/schemas/course_with_member_count",permalink:"/docs/apireference/v2/schemas/course_with_member_count",draft:!1,unlisted:!1,editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/apireference/v2/schemas/course_with_member_count.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Course With Member Count",sidebar_position:1,title:"Course With Member Count"},sidebar:"apireferenceSidebar",previous:{title:"Course User Section Detail",permalink:"/docs/apireference/v2/schemas/course_user_section_detail"},next:{title:"Custom Adv",permalink:"/docs/apireference/v2/schemas/custom_adv"}},l={},h=[{value:"Properties",id:"properties",level:4},{value:"Enumerated Values",id:"enumerated-values",level:4}];function a(e){const r={a:"a",code:"code",h4:"h4",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-json",children:'{\n  "id": "integer",\n  "name": "string",\n  "slug": "string",\n  "description": "string",\n  "type": "string",\n  "privacy": "string",\n  "enforce_lessons_order": "boolean",\n  "new_comment_notification_enabled": "boolean",\n  "hide_member_count": "boolean",\n  "meta_title": "string",\n  "meta_description": "string",\n  "og_title": "string",\n  "og_description": "string",\n  "og_image": "string",\n  "sections_order": [],\n  "image_bigger": "string",\n  "image_big": "string",\n  "image_medium": "string",\n  "image_small": "string",\n  "deleted": "boolean",\n  "join_status": "string",\n  "user_completion_rate": "integer",\n  "created_at": "string",\n  "created_by": {},\n  "categories": [],\n  "member_count": "integer"\n}\n\n'})}),"\n",(0,t.jsx)(r.h4,{id:"properties",children:"Properties"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Name"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{children:"Required"}),(0,t.jsx)(r.th,{children:"Restrictions"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"id"}),(0,t.jsx)(r.td,{children:"integer"}),(0,t.jsx)(r.td,{children:"false"}),(0,t.jsx)(r.td,{children:"read-only"}),(0,t.jsx)(r.td,{children:"Unique integer value identifying this course"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"name"}),(0,t.jsx)(r.td,{children:"string"}),(0,t.jsx)(r.td,{children:"true"}),(0,t.jsx)(r.td,{children:"read-only"}),(0,t.jsx)(r.td,{children:"Unique name of the course"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"slug"}),(0,t.jsx)(r.td,{children:"string"}),(0,t.jsx)(r.td,{children:"false"}),(0,t.jsx)(r.td,{children:"read-only"}),(0,t.jsx)(r.td,{children:"Unique slug identifying this course in a URL; it will be generated from the name if not specified. Can be changed later"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"description"}),(0,t.jsx)(r.td,{children:"string"}),(0,t.jsx)(r.td,{children:"false"}),(0,t.jsx)(r.td,{children:"read-only"}),(0,t.jsx)(r.td,{children:"The course description (default value: empty string)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"type"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/apireference/v2/schemas/course_with_member_count#enumerated-values",children:"type"})}),(0,t.jsx)(r.td,{children:"true"}),(0,t.jsx)(r.td,{children:"read-only"}),(0,t.jsx)(r.td,{children:"Enum to define the course type"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"privacy"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/apireference/v2/schemas/course_with_member_count#enumerated-values",children:"privacy"})}),(0,t.jsx)(r.td,{children:"false"}),(0,t.jsx)(r.td,{children:"read-only"}),(0,t.jsx)(r.td,{children:"Enum to define the course privacy (default value: empty string); cannot revert privacy to the empty string with an update"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"enforce_lessons_order"}),(0,t.jsx)(r.td,{children:"boolean"}),(0,t.jsx)(r.td,{children:"false"}),(0,t.jsx)(r.td,{children:"read-only"}),(0,t.jsxs)(r.td,{children:["Lesson order enforcement (default: false).",(0,t.jsx)("br",{}),"Your members will have to complete each lesson in order before moving onto the next one"]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"new_comment_notification_enabled"}),(0,t.jsx)(r.td,{children:"boolean"}),(0,t.jsx)(r.td,{children:"false"}),(0,t.jsx)(r.td,{children:"read-only"}),(0,t.jsxs)(r.td,{children:["Notify course admins about new lesson comments (default: true).",(0,t.jsx)("br",{}),"If enabled, admins and moderators will receive a new comment notification anytime members leave a lesson comment"]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"hide_member_count"}),(0,t.jsx)(r.td,{children:"boolean"}),(0,t.jsx)(r.td,{children:"false"}),(0,t.jsx)(r.td,{children:"read-only"}),(0,t.jsxs)(r.td,{children:["Hide member count (default: false).",(0,t.jsx)("br",{}),"If enabled, only managers can see the member count"]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"meta_title"}),(0,t.jsx)(r.td,{children:"string"}),(0,t.jsx)(r.td,{children:"false"}),(0,t.jsx)(r.td,{children:"read-only"}),(0,t.jsx)(r.td,{children:"The course meta title"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"meta_description"}),(0,t.jsx)(r.td,{children:"string"}),(0,t.jsx)(r.td,{children:"false"}),(0,t.jsx)(r.td,{children:"read-only"}),(0,t.jsx)(r.td,{children:"The course meta description"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"og_title"}),(0,t.jsx)(r.td,{children:"string"}),(0,t.jsx)(r.td,{children:"false"}),(0,t.jsx)(r.td,{children:"read-only"}),(0,t.jsx)(r.td,{children:"The course Open Graph title"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"og_description"}),(0,t.jsx)(r.td,{children:"string"}),(0,t.jsx)(r.td,{children:"false"}),(0,t.jsx)(r.td,{children:"read-only"}),(0,t.jsx)(r.td,{children:"The course Open Graph description"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"og_image"}),(0,t.jsx)(r.td,{children:"string"}),(0,t.jsx)(r.td,{children:"false"}),(0,t.jsx)(r.td,{children:"read-only"}),(0,t.jsx)(r.td,{children:"The course Open Graph image"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"sections_order"}),(0,t.jsx)(r.td,{children:"list(integer)"}),(0,t.jsx)(r.td,{children:"false"}),(0,t.jsx)(r.td,{children:"read-only"}),(0,t.jsx)(r.td,{children:"List of all section IDs belonging to the current course; IDs are sorted based on the choice made by the course managers"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"image_bigger"}),(0,t.jsx)(r.td,{children:"string"}),(0,t.jsx)(r.td,{children:"false"}),(0,t.jsx)(r.td,{children:"read-only"}),(0,t.jsx)(r.td,{children:"Squared image - auto generated bigger size"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"image_big"}),(0,t.jsx)(r.td,{children:"string"}),(0,t.jsx)(r.td,{children:"false"}),(0,t.jsx)(r.td,{children:"read-only"}),(0,t.jsx)(r.td,{children:"Squared image - auto generated big size"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"image_medium"}),(0,t.jsx)(r.td,{children:"string"}),(0,t.jsx)(r.td,{children:"false"}),(0,t.jsx)(r.td,{children:"read-only"}),(0,t.jsx)(r.td,{children:"Squared image - auto generated medium size"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"image_small"}),(0,t.jsx)(r.td,{children:"string"}),(0,t.jsx)(r.td,{children:"false"}),(0,t.jsx)(r.td,{children:"read-only"}),(0,t.jsx)(r.td,{children:"Squared image - auto generated small size"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"deleted"}),(0,t.jsx)(r.td,{children:"boolean"}),(0,t.jsx)(r.td,{children:"false"}),(0,t.jsx)(r.td,{children:"read-only"}),(0,t.jsx)(r.td,{children:"Define if this course is deleted"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"join_status"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/apireference/v2/schemas/course_with_member_count#enumerated-values",children:"status"})}),(0,t.jsx)(r.td,{children:"false"}),(0,t.jsx)(r.td,{children:"read-only"}),(0,t.jsx)(r.td,{children:"Enum to define the course subscription status of the current user"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"user_completion_rate"}),(0,t.jsx)(r.td,{children:"integer"}),(0,t.jsx)(r.td,{children:"false"}),(0,t.jsx)(r.td,{children:"read-only"}),(0,t.jsx)(r.td,{children:"Progress completion of the course in percentage for the current user"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"created_at"}),(0,t.jsx)(r.td,{children:"string(date-time)"}),(0,t.jsx)(r.td,{children:"false"}),(0,t.jsx)(r.td,{children:"read-only"}),(0,t.jsx)(r.td,{children:"Datetime of course creation"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"created_by"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/apireference/v2/schemas/user_minimal",children:"User Minimal"})}),(0,t.jsx)(r.td,{children:"false"}),(0,t.jsx)(r.td,{children:"read-only"}),(0,t.jsx)(r.td,{children:"The course creator"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"categories"}),(0,t.jsxs)(r.td,{children:["list(",(0,t.jsx)(r.a,{href:"/docs/apireference/v2/schemas/category",children:"Category"}),")"]}),(0,t.jsx)(r.td,{children:"false"}),(0,t.jsx)(r.td,{children:"read-only"}),(0,t.jsx)(r.td,{children:"The categories associated to the course"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"member_count"}),(0,t.jsx)(r.td,{children:"integer"}),(0,t.jsx)(r.td,{children:"false"}),(0,t.jsx)(r.td,{children:"read-only"}),(0,t.jsx)(r.td,{children:"Progress completion of the course in percentage for the current user"})]})]})]}),"\n",(0,t.jsx)(r.h4,{id:"enumerated-values",children:"Enumerated Values"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Property"}),(0,t.jsx)(r.th,{children:"Value"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"type"}),(0,t.jsx)(r.td,{children:"self-paced"}),(0,t.jsx)(r.td,{children:"Course starts when a member enrolls. All contents are available immediately"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"type"}),(0,t.jsx)(r.td,{children:"structured"}),(0,t.jsx)(r.td,{children:"Course starts when a member enrolls. Sections are dripped relative to their enrollment date"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"type"}),(0,t.jsx)(r.td,{children:"scheduled"}),(0,t.jsx)(r.td,{children:"Course starts on a specific date. Sections are dripped relative to that date"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"privacy"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"Unselected privacy status (aka draft); cannot revert to this status after selecting another privacy status"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"privacy"}),(0,t.jsx)(r.td,{children:"open"}),(0,t.jsxs)(r.td,{children:["Access: Open. Anyone in your community can see and join this course.",(0,t.jsx)("br",{}),"Visibility: Visible to all members of your community"]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"privacy"}),(0,t.jsx)(r.td,{children:"private"}),(0,t.jsxs)(r.td,{children:["Access: Closed. Only members who are added by you will be able to access this course.",(0,t.jsx)("br",{}),"Visibility: Invited members only. Non-members will see the lock screen"]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"privacy"}),(0,t.jsx)(r.td,{children:"secret"}),(0,t.jsxs)(r.td,{children:["Access: Closed. Only members who are added by you will be able to access this course.",(0,t.jsx)("br",{}),"Visibility: Invited members only. Non-members will not see that this course exists"]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"join_status"}),(0,t.jsx)(r.td,{children:"null"}),(0,t.jsx)(r.td,{children:"The user has no status"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"join_status"}),(0,t.jsx)(r.td,{children:"creator"}),(0,t.jsx)(r.td,{children:"The user is the creator of the course; the user cannot leave the course or change status"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"join_status"}),(0,t.jsx)(r.td,{children:"manager"}),(0,t.jsx)(r.td,{children:"The user is a manager of the course"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"join_status"}),(0,t.jsx)(r.td,{children:"joined"}),(0,t.jsx)(r.td,{children:"The user joined the course"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"join_status"}),(0,t.jsx)(r.td,{children:"invited"}),(0,t.jsx)(r.td,{children:"The user was invited to the course"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"join_status"}),(0,t.jsx)(r.td,{children:"requested"}),(0,t.jsx)(r.td,{children:"The user requests access to the course (available when the course is closed)"})]})]})]})]})}function o(e={}){const{wrapper:r}={...(0,n.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},11151:(e,r,s)=>{s.d(r,{Z:()=>c,a:()=>i});var t=s(67294);const n={},d=t.createContext(n);function i(e){const r=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),t.createElement(d.Provider,{value:r},e.children)}}}]);