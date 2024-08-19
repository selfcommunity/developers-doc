"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[91112],{10786:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var s=n(85893),r=n(11151);const i={sidebar_label:"Start An Onboarding Step",sidebar_position:4,title:"Start An Onboarding Step"},o=void 0,a={id:"apireference/v2/onboarding/start_a_step",title:"Start An Onboarding Step",description:"This endpoint start a specific onboarding step.",source:"@site/docs/apireference/v2/onboarding/start_a_step.md",sourceDirName:"apireference/v2/onboarding",slug:"/apireference/v2/onboarding/start_a_step",permalink:"/docs/apireference/v2/onboarding/start_a_step",draft:!1,unlisted:!1,editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/apireference/v2/onboarding/start_a_step.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_label:"Start An Onboarding Step",sidebar_position:4,title:"Start An Onboarding Step"},sidebar:"apireferenceSidebar",previous:{title:"Reset An Onboarding Step",permalink:"/docs/apireference/v2/onboarding/reset_a_step"},next:{title:"Check if Following Post",permalink:"/docs/apireference/v2/post/check_following_post"}},d={},c=[{value:"HTTP Request",id:"http-request",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Example Request",id:"example-request",level:3},{value:"Responses",id:"responses",level:2}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components},{TabItem:n,Tabs:i}=t;return n||p("TabItem",!0),i||p("Tabs",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:['This endpoint start a specific onboarding step.\nSome steps do not allow this api call to be performed. In particular for the "contents" and "categories" steps you can\nuse this api call, otherwise use the\napi call ',(0,s.jsx)(t.a,{href:"/docs/apireference/v2/onboarding/complete_a_step",children:"Complete An Onboarding Step"}),'.\nStep status should be "not_started" or "failed".']}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsx)(t.p,{children:"This operation requires authentication. The logged user must be the creator of the community (id=1)."})}),"\n",(0,s.jsx)(t.h2,{id:"http-request",children:"HTTP Request"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"POST /api/v2/onboarding/{id}/start/"})}),"\n",(0,s.jsx)(t.h3,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"In"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Required"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"id"}),(0,s.jsx)(t.td,{children:"path"}),(0,s.jsx)(t.td,{children:"integer"}),(0,s.jsx)(t.td,{children:"true"}),(0,s.jsx)(t.td,{children:"A unique integer value identifying this onboarding step"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"num_posts"}),(0,s.jsx)(t.td,{children:"query"}),(0,s.jsx)(t.td,{children:"integer"}),(0,s.jsx)(t.td,{children:"false"}),(0,s.jsx)(t.td,{children:'Number of total posts to be generated; only for step "contents". Only for stage. Default: 10'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"num_images"}),(0,s.jsx)(t.td,{children:"query"}),(0,s.jsx)(t.td,{children:"integer"}),(0,s.jsx)(t.td,{children:"false"}),(0,s.jsx)(t.td,{children:'For each category specify how many images will be generated and then associated to a post; only for step "contents". Only for stage. Default: 1'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"force"}),(0,s.jsx)(t.td,{children:"query"}),(0,s.jsx)(t.td,{children:"boolean"}),(0,s.jsx)(t.td,{children:"false"}),(0,s.jsx)(t.td,{children:'Force the start even if the status is not "not_started" or "failed". Only for stage'})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"example-request",children:"Example Request"}),"\n",(0,s.jsxs)(i,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"Bash",value:"bash"}],children:[(0,s.jsx)(n,{value:"js",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"const headers = {\n  'Content-Type':'application/x-www-form-urlencoded',\n  'Accept':'application/json',\n  'Authorization': 'Bearer {access_token}'\n};\n\nfetch('/api/v2/onboarding/{id}/start/',\n{\n  method: 'POST',\n  headers: headers\n})\n.then(function(res) {\n    return res.json();\n}).then(function(body) {\n    console.log(body);\n});\n\n"})})}),(0,s.jsx)(n,{value:"bash",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"# You can also use wget\ncurl -X POST /api/v2/onboarding/{id}/start/ \\\n  -H 'Content-Type: application/json' \\\n  -H 'Accept: application/json' \\\n  -H 'Authorization: Bearer {access_token}'\n"})})})]}),"\n",(0,s.jsx)(t.h2,{id:"responses",children:"Responses"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Status"}),(0,s.jsx)(t.th,{children:"Meaning"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Schema"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"200"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://tools.ietf.org/html/rfc7231#section-6.3.1",children:"OK"})}),(0,s.jsx)(t.td,{children:"Response status code"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/docs/apireference/v2/schemas/onboarding_step",children:"Onboarding Step"})})]})})]})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}function p(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>o});var s=n(67294);const r={},i=s.createContext(r);function o(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);