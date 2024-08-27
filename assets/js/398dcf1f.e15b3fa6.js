"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[33277],{32342:(e,t,r)=>{r.d(t,{Z:()=>i});r(67294);var n=r(36905);const s={tabItem:"tabItem_Ymn6"};var a=r(85893);function i(e){let{children:t,hidden:r,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,n.Z)(s.tabItem,i),hidden:r,children:t})}},71125:(e,t,r)=>{r.d(t,{Z:()=>_});var n=r(67294),s=r(36905),a=r(63735),i=r(16550),l=r(20613),c=r(34423),o=r(20636),d=r(99200);function u(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:s}}=e;return{value:t,label:r,attributes:n,default:s}}))}(r);return function(e){const t=(0,o.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function x(e){let{queryString:t=!1,groupId:r}=e;const s=(0,i.k6)(),a=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,c._X)(a),(0,n.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(s.location.search);t.set(a,e),s.replace({...s.location,search:t.toString()})}),[a,s])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:s}=e,a=h(e),[i,c]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:a}))),[o,u]=x({queryString:r,groupId:s}),[f,j]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,a]=(0,d.Nk)(r);return[s,(0,n.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:s}),m=(()=>{const e=o??f;return p({value:e,tabValues:a})?e:null})();(0,l.Z)((()=>{m&&c(m)}),[m]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),j(e)}),[u,j,a]),tabValues:a}}var j=r(5730);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=r(85893);function v(e){let{className:t,block:r,selectedValue:n,selectValue:i,tabValues:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,a.o5)(),d=e=>{const t=e.currentTarget,r=c.indexOf(t),s=l[r].value;s!==n&&(o(t),i(s))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":r},t),children:l.map((e=>{let{value:t,label:r,attributes:a}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>c.push(e),onKeyDown:u,onClick:d,...a,className:(0,s.Z)("tabs__item",m.tabItem,a?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function y(e){let{lazy:t,children:r,selectedValue:s}=e;const a=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function g(e){const t=f(e);return(0,b.jsxs)("div",{className:(0,s.Z)("tabs-container",m.tabList),children:[(0,b.jsx)(v,{...e,...t}),(0,b.jsx)(y,{...e,...t})]})}function _(e){const t=(0,j.Z)();return(0,b.jsx)(g,{...e,children:u(e.children)},String(t))}},92151:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var n=r(85893),s=r(11151),a=r(71125),i=r(32342);const l={sidebar_label:"Patch a Specific Prize Request",sidebar_position:1,title:"Patch a Specific Prize Request"},c=void 0,o={id:"apireference/v2/loyalty/patch_a_specific_prize_request",title:"Patch a Specific Prize Request",description:"This endpoint patches a specific request for a loyalty prize",source:"@site/docs/apireference/v2/loyalty/patch_a_specific_prize_request.md",sourceDirName:"apireference/v2/loyalty",slug:"/apireference/v2/loyalty/patch_a_specific_prize_request",permalink:"/docs/apireference/v2/loyalty/patch_a_specific_prize_request",draft:!1,unlisted:!1,editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/apireference/v2/loyalty/patch_a_specific_prize_request.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Patch a Specific Prize Request",sidebar_position:1,title:"Patch a Specific Prize Request"},sidebar:"apireferenceSidebar",previous:{title:"Patch a Specific Prize",permalink:"/docs/apireference/v2/loyalty/patch_a_specific_prize"},next:{title:"Update a Specific Prize",permalink:"/docs/apireference/v2/loyalty/update_a_specific_prize"}},d={},u=[{value:"HTTP Request",id:"http-request",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Example Body Parameters",id:"example-body-parameters",level:4},{value:"Enumerated Values",id:"enumerated-values",level:4},{value:"Example Request",id:"example-request",level:3},{value:"Responses",id:"responses",level:2},{value:"Example responses",id:"example-responses",level:3}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"This endpoint patches a specific request for a loyalty prize"}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsxs)(t.p,{children:["You can use this endpoint to to change ",(0,n.jsx)(t.code,{children:"status"})," in an admin list/table interface."]})}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsx)(t.p,{children:"This operation requires admin or editor role."})}),"\n",(0,n.jsx)(t.h2,{id:"http-request",children:"HTTP Request"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:"PATCH /api/v2/loyalty/request/{id}/"})}),"\n",(0,n.jsx)(t.h3,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"In"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Required"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"id"}),(0,n.jsx)(t.td,{children:"path"}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{children:"true"}),(0,n.jsx)(t.td,{children:"A unique integer value identifying this loyalty prize user"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"body"}),(0,n.jsx)(t.td,{children:"body"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/apireference/v2/schemas/loyalty_prize_user",children:"Loyalty Prize User"})}),(0,n.jsx)(t.td,{children:"false"}),(0,n.jsx)(t.td,{children:"The request body(loyalty prize user params)"})]})]})]}),"\n",(0,n.jsx)(t.h4,{id:"example-body-parameters",children:"Example Body Parameters"}),"\n","\n","\n",(0,n.jsx)(a.Z,{defaultValue:"json",values:[{label:"JSON",value:"json"}],children:(0,n.jsx)(i.Z,{value:"json",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'{\n  "status": "integer"\n}\n'})})})}),"\n",(0,n.jsx)(t.h4,{id:"enumerated-values",children:"Enumerated Values"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Parameter"}),(0,n.jsx)(t.th,{children:"Value"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"status"}),(0,n.jsx)(t.td,{children:"0"}),(0,n.jsx)(t.td,{children:"pending"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"status"}),(0,n.jsx)(t.td,{children:"1"}),(0,n.jsx)(t.td,{children:"refused"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"status"}),(0,n.jsx)(t.td,{children:"2"}),(0,n.jsx)(t.td,{children:"sent"})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"example-request",children:"Example Request"}),"\n",(0,n.jsxs)(a.Z,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"Bash",value:"bash"}],children:[(0,n.jsx)(i.Z,{value:"js",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"const inputBody = '{\n  \"status\": \"integer\"\n}';\nconst headers = {\n  'Content-Type':'application/x-www-form-urlencoded',\n  'Accept':'application/json',\n  'Authorization': 'Bearer {access_token}'\n};\n\nfetch('/api/v2/loyalty/request/{id}/',\n{\n  method: 'PATCH',\n  body: inputBody,\n  headers: headers\n})\n.then(function(res) {\n    return res.json();\n}).then(function(body) {\n    console.log(body);\n});\n"})})}),(0,n.jsx)(i.Z,{value:"bash",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"# You can also use wget\ncurl -X PATCH /api/v2/loyalty/request/{id}/ \\\n  -H 'Content-Type: application/x-www-form-urlencoded' \\\n  -H 'Accept: application/json' \\\n  -H 'Authorization: Bearer {access_token}' \\\n  --DATA '{body}'\n\n"})})})]}),"\n",(0,n.jsx)(t.h2,{id:"responses",children:"Responses"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Status"}),(0,n.jsx)(t.th,{children:"Meaning"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Schema"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"200"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://tools.ietf.org/html/rfc7231#section-6.3.1",children:"OK"})}),(0,n.jsx)(t.td,{children:"Response status code"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/apireference/v2/schemas/loyalty_prize_user",children:"Loyalty Prize User"})})]})})]}),"\n",(0,n.jsx)(t.h3,{id:"example-responses",children:"Example responses"}),"\n",(0,n.jsx)(a.Z,{defaultValue:"200",values:[{label:"200",value:"200"}],children:(0,n.jsx)(i.Z,{value:"200",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'{\n  "id": "integer",\n  "user": {User},\n  "prize": {Prize},\n  "prize_points": "integer",\n  "pending_at": "string",\n  "status": "integer",\n  "status_description": "string"\n}\n'})})})})]})}function p(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},11151:(e,t,r)=>{r.d(t,{Z:()=>l,a:()=>i});var n=r(67294);const s={},a=n.createContext(s);function i(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);