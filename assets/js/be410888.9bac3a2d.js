"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[21775],{52044:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=t(85893),s=t(11151);const i={sidebar_label:"User External Provider",sidebar_position:1,title:"User External Provider"},d=void 0,o={id:"apireference/v2/schemas/user_external_provider",title:"User External Provider",description:"Properties",source:"@site/docs/apireference/v2/schemas/user_external_provider.md",sourceDirName:"apireference/v2/schemas",slug:"/apireference/v2/schemas/user_external_provider",permalink:"/docs/apireference/v2/schemas/user_external_provider",draft:!1,unlisted:!1,editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/apireference/v2/schemas/user_external_provider.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"User External Provider",sidebar_position:1,title:"User External Provider"},sidebar:"apireferenceSidebar",previous:{title:"User",permalink:"/docs/apireference/v2/schemas/user"},next:{title:"User Permission",permalink:"/docs/apireference/v2/schemas/user_permission"}},l={},c=[{value:"Properties",id:"properties",level:4}];function a(e){const r={code:"code",h4:"h4",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-json",children:'{\n  "user_id": "integer",\n  "provider": "string",\n  "ext_id": "string",\n  "profile_url": "string",\n  "show_in_profile": "boolean"\n}\n\n'})}),"\n",(0,n.jsx)(r.h4,{id:"properties",children:"Properties"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Required"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"user_id"}),(0,n.jsx)(r.td,{children:"integer"}),(0,n.jsx)(r.td,{children:"true"}),(0,n.jsx)(r.td,{children:"The user id"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"ext_id"}),(0,n.jsx)(r.td,{children:"string"}),(0,n.jsx)(r.td,{children:"true"}),(0,n.jsx)(r.td,{children:"A unique external id identifying the user"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"provider"}),(0,n.jsx)(r.td,{children:"string"}),(0,n.jsx)(r.td,{children:"true"}),(0,n.jsx)(r.td,{children:"The external provider of the ext_id"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"profile_url"}),(0,n.jsx)(r.td,{children:"string"}),(0,n.jsx)(r.td,{children:"false"}),(0,n.jsx)(r.td,{children:"An optional url to the social profile; only for providers other than external"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"metadata"}),(0,n.jsx)(r.td,{children:"string"}),(0,n.jsx)(r.td,{children:"false"}),(0,n.jsx)(r.td,{children:"An optional json only for the external provider"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"show_in_profile"}),(0,n.jsx)(r.td,{children:"bool"}),(0,n.jsx)(r.td,{children:"false"}),(0,n.jsx)(r.td,{children:"Default false. An optional flag to indicate if the social association can be showed in the user profile. Provider must not be 'external'"})]})]})]})]})}function h(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},11151:(e,r,t)=>{t.d(r,{Z:()=>o,a:()=>d});var n=t(67294);const s={},i=n.createContext(s);function d(e){const r=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);