"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[95779],{26550:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>n,metadata:()=>c,toc:()=>l});var d=t(85893),r=t(11151);const n={sidebar_label:"Embed",sidebar_position:1,title:"Embed"},i=void 0,c={id:"apireference/v2/schemas/embed",title:"Embed",description:"Properties",source:"@site/docs/apireference/v2/schemas/embed.md",sourceDirName:"apireference/v2/schemas",slug:"/apireference/v2/schemas/embed",permalink:"/docs/apireference/v2/schemas/embed",draft:!1,unlisted:!1,editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/apireference/v2/schemas/embed.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Embed",sidebar_position:1,title:"Embed"},sidebar:"apireferenceSidebar",previous:{title:"Dynamic Preference",permalink:"/docs/apireference/v2/schemas/dynamic_preference"},next:{title:"Endpoint",permalink:"/docs/apireference/v2/schemas/endpoint"}},a={},l=[{value:"Properties",id:"properties",level:4},{value:"Enumerated Values",id:"enumerated-values",level:4}];function o(e){const s={a:"a",code:"code",h4:"h4",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-json",children:'{\n  "id": "integer",\n  "embed_type": "string",\n  "embed_id": "string",\n  "url": "string",\n  "metadata": {}\n}\n\n'})}),"\n",(0,d.jsx)(s.h4,{id:"properties",children:"Properties"}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"Name"}),(0,d.jsx)(s.th,{children:"Type"}),(0,d.jsx)(s.th,{children:"Required"}),(0,d.jsx)(s.th,{children:"Restrictions"}),(0,d.jsx)(s.th,{children:"Description"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"id"}),(0,d.jsx)(s.td,{children:"integer"}),(0,d.jsx)(s.td,{children:"false"}),(0,d.jsx)(s.td,{children:"read-only"}),(0,d.jsx)(s.td,{children:"A unique integer value identifying this embed"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"embed_type"}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.a,{href:"/docs/apireference/v2/schemas/embed#enumerated-values",children:"string"})}),(0,d.jsx)(s.td,{children:"true"}),(0,d.jsx)(s.td,{children:"none"}),(0,d.jsxs)(s.td,{children:["Type of the embed, can be any string except ",(0,d.jsx)(s.code,{children:"sc_vimeo"}),", ",(0,d.jsx)(s.code,{children:"sc_link"})," or ",(0,d.jsx)(s.code,{children:"sc_shared_object"})," that are used for embedded objects auomatically created by the community"]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"embed_id"}),(0,d.jsx)(s.td,{children:"string"}),(0,d.jsx)(s.td,{children:"true"}),(0,d.jsx)(s.td,{children:"none"}),(0,d.jsx)(s.td,{children:"External id for the embed object"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"url"}),(0,d.jsx)(s.td,{children:"string(uri)\xa6null"}),(0,d.jsx)(s.td,{children:"false"}),(0,d.jsx)(s.td,{children:"none"}),(0,d.jsx)(s.td,{children:"Url for the resource, if any"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"metadata"}),(0,d.jsx)(s.td,{children:"json"}),(0,d.jsx)(s.td,{children:"false"}),(0,d.jsx)(s.td,{children:"none"}),(0,d.jsxs)(s.td,{children:["Metadata associated to this embed. It mus be a valid json object. For embed_type ",(0,d.jsx)(s.code,{children:"sc_vimeo"})," or ",(0,d.jsx)(s.code,{children:"sc_link"})," it contains metadata associated with the external resource. For embed_type ",(0,d.jsx)(s.code,{children:"sc_shared_object"})," it contains a field ",(0,d.jsx)(s.code,{children:"type"})," that is the type of the object (",(0,d.jsx)(s.a,{href:"/docs/apireference/v2/schemas/discussion",children:"Discussion"})," or ",(0,d.jsx)(s.a,{href:"/docs/apireference/v2/schemas/post",children:"Post"}),") and a field ",(0,d.jsx)(s.code,{children:"id"})," that contains the id of the object shared"]})]})]})]}),"\n",(0,d.jsx)(s.h4,{id:"enumerated-values",children:"Enumerated Values"}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"Parameter"}),(0,d.jsx)(s.th,{children:"Value"}),(0,d.jsx)(s.th,{children:"Description"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"embed_type"}),(0,d.jsx)(s.td,{children:"sc_vimeo"}),(0,d.jsx)(s.td,{children:"Embed of type video uploaded on vimeo platform (when enabled). This type is used internally by the community"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"embed_type"}),(0,d.jsx)(s.td,{children:"sc_link"}),(0,d.jsx)(s.td,{children:"Embed of type link. This type is used internally by the community"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"embed_type"}),(0,d.jsx)(s.td,{children:"sc_shared_object"}),(0,d.jsxs)(s.td,{children:["Embed of type shared object. This type is used internally by the community when the user share a ",(0,d.jsx)(s.a,{href:"/docs/apireference/v2/schemas/discussion",children:"Discussion"})," or ",(0,d.jsx)(s.a,{href:"/docs/apireference/v2/schemas/post",children:"Post"})]})]})]})]})]})}function h(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,d.jsx)(s,{...e,children:(0,d.jsx)(o,{...e})}):o(e)}},11151:(e,s,t)=>{t.d(s,{Z:()=>c,a:()=>i});var d=t(67294);const r={},n=d.createContext(r);function i(e){const s=d.useContext(n);return d.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),d.createElement(n.Provider,{value:s},e.children)}}}]);