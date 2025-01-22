"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[24794],{44523:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>i,default:()=>a,frontMatter:()=>t,metadata:()=>l,toc:()=>h});var r=n(85893),d=n(11151);const t={sidebar_label:"User",sidebar_position:1,title:"User"},i=void 0,l={id:"apireference/v2/schemas/user",title:"User",description:"Properties",source:"@site/docs/apireference/v2/schemas/user.md",sourceDirName:"apireference/v2/schemas",slug:"/apireference/v2/schemas/user",permalink:"/docs/apireference/v2/schemas/user",draft:!1,unlisted:!1,editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/apireference/v2/schemas/user.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"User",sidebar_position:1,title:"User"},sidebar:"apireferenceSidebar",previous:{title:"Token",permalink:"/docs/apireference/v2/schemas/token"},next:{title:"User Course Dashboard",permalink:"/docs/apireference/v2/schemas/user_course_dashboard"}},c={},h=[{value:"Properties",id:"properties",level:4},{value:"Enumerated Values",id:"enumerated-values",level:4},{value:"Connection statuses values",id:"connection-statuses-values",level:4}];function o(e){const s={a:"a",admonition:"admonition",code:"code",h4:"h4",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-json",children:'{\n  "id": "integer",\n  "username": "string",\n  "real_name": "string",\n  "avatar": "string",\n  "ext_id": "integer",\n  "followings_counter": "integer",\n  "followers_counter": "integer",\n  "posts_counter": "integer",\n  "discussions_counter": "integer",\n  "polls_counter": "integer",\n  "connection_status": "string",\n  "categories_counter": "integer",\n  "date_joined": "string",\n  "bio": "string",\n  "location": "string",\n  "location_lat_lng": "string",\n  "position_lat_lng": "string",\n  "date_of_birth": "string",\n  "description": "string",\n  "gender": "string",\n  "website": "string",\n  "cover": "string",\n  "tags": [],\n  "reputation": "integer",\n  "community_badge": "boolean",\n  "reg_approved": "boolean",\n  "deleted": "boolean",\n  "company_name": "string",\n  "company_role": "string"\n}\n\n'})}),"\n",(0,r.jsx)(s.h4,{id:"properties",children:"Properties"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Name"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{children:"Required"}),(0,r.jsx)(s.th,{children:"Restrictions"}),(0,r.jsx)(s.th,{children:"Description"}),(0,r.jsx)(s.th,{children:"Note"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"id"}),(0,r.jsx)(s.td,{children:"integer"}),(0,r.jsx)(s.td,{children:"false"}),(0,r.jsx)(s.td,{children:"read-only"}),(0,r.jsx)(s.td,{children:"A unique integer value identifying this user"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"username"}),(0,r.jsx)(s.td,{children:"string"}),(0,r.jsx)(s.td,{children:"false"}),(0,r.jsx)(s.td,{children:"read-only"}),(0,r.jsx)(s.td,{children:"The username of the user. Max 255 characters. Letters, numbers and -/_ characters"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"real_name"}),(0,r.jsx)(s.td,{children:"string"}),(0,r.jsx)(s.td,{children:"false"}),(0,r.jsx)(s.td,{children:"none"}),(0,r.jsx)(s.td,{children:"Real name. Max 255 characters"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"avatar"}),(0,r.jsx)(s.td,{children:"string(binary)\xa6null"}),(0,r.jsx)(s.td,{children:"false"}),(0,r.jsx)(s.td,{children:"none"}),(0,r.jsx)(s.td,{children:"The user avatar"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"ext_id"}),(0,r.jsx)(s.td,{children:"integer"}),(0,r.jsx)(s.td,{children:"false"}),(0,r.jsx)(s.td,{children:"read-only"}),(0,r.jsx)(s.td,{children:"The external ID of the user. It is assigned only during signup"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"followings_counter"}),(0,r.jsx)(s.td,{children:"integer\xa6null"}),(0,r.jsx)(s.td,{children:"false"}),(0,r.jsx)(s.td,{children:"read-only"}),(0,r.jsx)(s.td,{children:"Number of followings of the user"}),(0,r.jsxs)(s.td,{children:["Only if dynamic preference ",(0,r.jsx)(s.code,{children:"configurations.follow_enabled"})," is ",(0,r.jsx)(s.code,{children:"true"})]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"followers_counter"}),(0,r.jsx)(s.td,{children:"integer\xa6null"}),(0,r.jsx)(s.td,{children:"false"}),(0,r.jsx)(s.td,{children:"read-only"}),(0,r.jsx)(s.td,{children:"Number of followers of the user"}),(0,r.jsxs)(s.td,{children:["Only if dynamic preference ",(0,r.jsx)(s.code,{children:"configurations.follow_enabled"})," is ",(0,r.jsx)(s.code,{children:"true"})]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"posts_counter"}),(0,r.jsx)(s.td,{children:"integer\xa6null"}),(0,r.jsx)(s.td,{children:"false"}),(0,r.jsx)(s.td,{children:"read-only"}),(0,r.jsx)(s.td,{children:"Number of posts created by the user"}),(0,r.jsxs)(s.td,{children:["Only if dynamic preference ",(0,r.jsx)(s.code,{children:"configurations.post_type_enabled"})," is ",(0,r.jsx)(s.code,{children:"true"})]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"discussions_counter"}),(0,r.jsx)(s.td,{children:"integer\xa6null"}),(0,r.jsx)(s.td,{children:"false"}),(0,r.jsx)(s.td,{children:"read-only"}),(0,r.jsx)(s.td,{children:"Number of discussions created by the user"}),(0,r.jsxs)(s.td,{children:["Only if dynamic preference ",(0,r.jsx)(s.code,{children:"configurations.post_type_enabled"})," is ",(0,r.jsx)(s.code,{children:"true"})]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"polls_counter"}),(0,r.jsx)(s.td,{children:"integer\xa6null"}),(0,r.jsx)(s.td,{children:"false"}),(0,r.jsx)(s.td,{children:"read-only"}),(0,r.jsx)(s.td,{children:"Number of polls created by the user"}),(0,r.jsxs)(s.td,{children:["Only if dynamic preference ",(0,r.jsx)(s.code,{children:"addons.polls_enabled"})," is ",(0,r.jsx)(s.code,{children:"true"})," or if the user has a staff role"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"connection_status"}),(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.a,{href:"/docs/apireference/v2/schemas/user#connection-statuses-values",children:"string"}),"\xa6null"]}),(0,r.jsx)(s.td,{children:"false"}),(0,r.jsx)(s.td,{children:"read-only"}),(0,r.jsx)(s.td,{children:"The connection status between the request user and this user"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"categories_counter"}),(0,r.jsx)(s.td,{children:"integer\xa6null"}),(0,r.jsx)(s.td,{children:"false"}),(0,r.jsx)(s.td,{children:"read-only"}),(0,r.jsx)(s.td,{children:"Number of categories followed by the user"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"date_joined"}),(0,r.jsx)(s.td,{children:"string(date-time)"}),(0,r.jsx)(s.td,{children:"false"}),(0,r.jsx)(s.td,{children:"read-only"}),(0,r.jsx)(s.td,{children:"Date joined to the community"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"bio"}),(0,r.jsx)(s.td,{children:"string"}),(0,r.jsx)(s.td,{children:"false"}),(0,r.jsx)(s.td,{children:"none"}),(0,r.jsx)(s.td,{children:"User biography"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"location"}),(0,r.jsx)(s.td,{children:"string"}),(0,r.jsx)(s.td,{children:"false"}),(0,r.jsx)(s.td,{children:"none"}),(0,r.jsx)(s.td,{children:"User location. Max 100 characters"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"location_lat_lng"}),(0,r.jsx)(s.td,{children:"string"}),(0,r.jsx)(s.td,{children:"false"}),(0,r.jsx)(s.td,{children:"none"}),(0,r.jsx)(s.td,{children:'Location in coordinates. It is populated automatically if "Google Geocoding" integration is active. Format: lat,lng'}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"position_lat_lng"}),(0,r.jsx)(s.td,{children:"string"}),(0,r.jsx)(s.td,{children:"false"}),(0,r.jsx)(s.td,{children:"none"}),(0,r.jsx)(s.td,{children:"User current position. Format: lat,lng"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"date_of_birth"}),(0,r.jsx)(s.td,{children:"string(date)"}),(0,r.jsx)(s.td,{children:"false"}),(0,r.jsx)(s.td,{children:"none"}),(0,r.jsx)(s.td,{children:"Date of birth. Format: YYYY-MM-DD (ISO 8601)"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"description"}),(0,r.jsx)(s.td,{children:"string"}),(0,r.jsx)(s.td,{children:"false"}),(0,r.jsx)(s.td,{children:"none"}),(0,r.jsx)(s.td,{children:"User description. Max 50 characters."}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"gender"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"/docs/apireference/v2/schemas/user#enumerated-values",children:"string"})}),(0,r.jsx)(s.td,{children:"false"}),(0,r.jsx)(s.td,{children:"none"}),(0,r.jsx)(s.td,{children:"User gender. Values: Male, Female, Unspecified. Default: Unspecified"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"website"}),(0,r.jsx)(s.td,{children:"string(uri)"}),(0,r.jsx)(s.td,{children:"false"}),(0,r.jsx)(s.td,{children:"none"}),(0,r.jsx)(s.td,{children:"User website. Max 200 characters."}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"cover"}),(0,r.jsx)(s.td,{children:"string(binary)\xa6null"}),(0,r.jsx)(s.td,{children:"false"}),(0,r.jsx)(s.td,{children:"none"}),(0,r.jsx)(s.td,{children:"Cover of the user"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"tags"}),(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.a,{href:"/docs/apireference/v2/schemas/tag",children:"Tag"}),"  \xa6[]"]}),(0,r.jsx)(s.td,{children:"false"}),(0,r.jsx)(s.td,{children:"none"}),(0,r.jsxs)(s.td,{children:["User's tag list. List of ",(0,r.jsx)(s.a,{href:"/docs/apireference/v2/schemas/tag",children:"Tag"})]}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"reputation"}),(0,r.jsx)(s.td,{children:"integer"}),(0,r.jsx)(s.td,{children:"false"}),(0,r.jsx)(s.td,{children:"read-only"}),(0,r.jsx)(s.td,{children:"User reputation"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"community_badge"}),(0,r.jsx)(s.td,{children:"boolean"}),(0,r.jsx)(s.td,{children:"false"}),(0,r.jsx)(s.td,{children:"read-only"}),(0,r.jsx)(s.td,{children:"Community badge active. Default: False"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"reg_approved"}),(0,r.jsx)(s.td,{children:"boolean"}),(0,r.jsx)(s.td,{children:"false"}),(0,r.jsx)(s.td,{children:"read-only"}),(0,r.jsx)(s.td,{children:"Registration approved (false only if users_approval_enabled=true and the user is not approved)"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"company_name"}),(0,r.jsx)(s.td,{children:"string"}),(0,r.jsx)(s.td,{children:"false"}),(0,r.jsx)(s.td,{children:"read-only"}),(0,r.jsx)(s.td,{children:"User company name"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"company_role"}),(0,r.jsx)(s.td,{children:"string"}),(0,r.jsx)(s.td,{children:"false"}),(0,r.jsx)(s.td,{children:"read-only"}),(0,r.jsx)(s.td,{children:"User company role"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"deleted"}),(0,r.jsx)(s.td,{children:"boolean"}),(0,r.jsx)(s.td,{children:"false"}),(0,r.jsx)(s.td,{children:"read-only"}),(0,r.jsx)(s.td,{children:"The user account deletion state"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"deleted_at"}),(0,r.jsx)(s.td,{children:"string(date-time)"}),(0,r.jsx)(s.td,{children:"false"}),(0,r.jsx)(s.td,{children:"read-only"}),(0,r.jsx)(s.td,{children:"The user account deletion datetime"}),(0,r.jsxs)(s.td,{children:["Only if ",(0,r.jsx)(s.code,{children:"deleted"})," is ",(0,r.jsx)(s.code,{children:"true"})]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"can_send_pm_to"}),(0,r.jsx)(s.td,{children:"boolean"}),(0,r.jsx)(s.td,{children:"false"}),(0,r.jsx)(s.td,{children:"read-only"}),(0,r.jsx)(s.td,{children:"Shows if the logged user is able to send a private message to the requested user"}),(0,r.jsxs)(s.td,{children:["Only  in ",(0,r.jsx)(s.a,{href:"/docs/apireference/v2/user/get_a_specific_user",children:"Get a specific User"})," endpoint response"]})]})]})]}),"\n",(0,r.jsx)(s.h4,{id:"enumerated-values",children:"Enumerated Values"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Property"}),(0,r.jsx)(s.th,{children:"Value"}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"gender"}),(0,r.jsx)(s.td,{children:"Male"}),(0,r.jsx)(s.td,{children:"Male"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"gender"}),(0,r.jsx)(s.td,{children:"Female"}),(0,r.jsx)(s.td,{children:"Female"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"gender"}),(0,r.jsx)(s.td,{children:"Unspecified"}),(0,r.jsx)(s.td,{children:"Unspecified"})]})]})]}),"\n",(0,r.jsx)(s.h4,{id:"connection-statuses-values",children:"Connection statuses values"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Property"}),(0,r.jsx)(s.th,{children:"Value"}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"connection_status"}),(0,r.jsx)(s.td,{children:"null"}),(0,r.jsx)(s.td,{children:"No connection status between the request user and this user"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"connection_status"}),(0,r.jsx)(s.td,{children:"followed"}),(0,r.jsx)(s.td,{children:"This user is followed"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"connection_status"}),(0,r.jsx)(s.td,{children:"connected"}),(0,r.jsx)(s.td,{children:"This user is connected (friend)"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"connection_status"}),(0,r.jsx)(s.td,{children:"sent_connection_request"}),(0,r.jsx)(s.td,{children:"Connection (friendship) request sent to this user"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"connection_status"}),(0,r.jsx)(s.td,{children:"received_connection_request"}),(0,r.jsx)(s.td,{children:"Connection (friendship) request received from this user"})]})]})]}),"\n",(0,r.jsx)(s.admonition,{type:"info",children:(0,r.jsxs)(s.p,{children:["It is possible to define additional custom fields for the user.\nFor further information on how these custom fields (user's metadata) work, refer to the following\nguide\n",(0,r.jsx)(s.a,{href:"/docs/apireference/v2/usermetadata/",children:"User's custom fields (metadata)"})]})})]})}function a(e={}){const{wrapper:s}={...(0,d.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},11151:(e,s,n)=>{n.d(s,{Z:()=>l,a:()=>i});var r=n(67294);const d={},t=r.createContext(d);function i(e){const s=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),r.createElement(t.Provider,{value:s},e.children)}}}]);