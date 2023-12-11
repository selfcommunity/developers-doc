"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[52820],{32342:(e,n,t)=>{t.d(n,{Z:()=>i});t(67294);var a=t(36905);const r={tabItem:"tabItem_Ymn6"};var s=t(85893);function i(e){let{children:n,hidden:t,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,i),hidden:t,children:n})}},71125:(e,n,t)=>{t.d(n,{Z:()=>_});var a=t(67294),r=t(36905),s=t(63735),i=t(16550),l=t(20613),o=t(34423),c=t(20636),d=t(99200);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function b(e){let{queryString:n=!1,groupId:t}=e;const r=(0,i.k6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o._X)(s),(0,a.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(r.location.search);n.set(s,e),r.replace({...r.location,search:n.toString()})}),[s,r])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,s=h(e),[i,o]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:s}))),[c,u]=b({queryString:t,groupId:r}),[f,m]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,s]=(0,d.Nk)(t);return[r,(0,a.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:r}),x=(()=>{const e=c??f;return p({value:e,tabValues:s})?e:null})();(0,l.Z)((()=>{x&&o(x)}),[x]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),m(e)}),[u,m,s]),tabValues:s}}var m=t(5730);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(85893);function v(e){let{className:n,block:t,selectedValue:a,selectValue:i,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),d=e=>{const n=e.currentTarget,t=o.indexOf(n),r=l[t].value;r!==a&&(c(n),i(r))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>o.push(e),onKeyDown:u,onClick:d,...s,className:(0,r.Z)("tabs__item",x.tabItem,s?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:r}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function y(e){const n=f(e);return(0,g.jsxs)("div",{className:(0,r.Z)("tabs-container",x.tabList),children:[(0,g.jsx)(v,{...e,...n}),(0,g.jsx)(j,{...e,...n})]})}function _(e){const n=(0,m.Z)();return(0,g.jsx)(y,{...e,children:u(e.children)},String(n))}},10712:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var a=t(85893),r=t(11151),s=t(71125),i=t(32342);const l={sidebar_label:"Patch a Specific Tag",sidebar_position:6,title:"Patch a Specific Tag"},o=void 0,c={id:"apireference/v2/tag/patch_a_specific_tag",title:"Patch a Specific Tag",description:"This endpoint patches a specific tag",source:"@site/docs/apireference/v2/tag/patch_a_specific_tag.md",sourceDirName:"apireference/v2/tag",slug:"/apireference/v2/tag/patch_a_specific_tag",permalink:"/docs/apireference/v2/tag/patch_a_specific_tag",draft:!1,unlisted:!1,editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/apireference/v2/tag/patch_a_specific_tag.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_label:"Patch a Specific Tag",sidebar_position:6,title:"Patch a Specific Tag"},sidebar:"apireferenceSidebar",previous:{title:"Update a Specific Tag",permalink:"/docs/apireference/v2/tag/update_a_specific_tag"},next:{title:"Assign a Tag",permalink:"/docs/apireference/v2/tag/assign_a_tag"}},d={},u=[{value:"HTTP Request",id:"http-request",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Example Body Parameters",id:"example-body-parameters",level:4},{value:"Example Request",id:"example-request",level:3},{value:"Responses",id:"responses",level:2},{value:"Example responses",id:"example-responses",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"This endpoint patches a specific tag"}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsxs)(n.p,{children:["You can use this endpoint to edit a single field passing only the id and the needed field (without mandatory fields).\nFor example to change ",(0,a.jsx)(n.code,{children:"active"})," or ",(0,a.jsx)(n.code,{children:"visible"})," flags in an admin list/table interface."]})}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsx)(n.p,{children:"This operation requires authentication and admin role."})}),"\n",(0,a.jsx)(n.h2,{id:"http-request",children:"HTTP Request"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"PATCH /api/v2/tag/{id}/"})}),"\n",(0,a.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Name"}),(0,a.jsx)(n.th,{children:"In"}),(0,a.jsx)(n.th,{children:"Type"}),(0,a.jsx)(n.th,{children:"Required"}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"id"}),(0,a.jsx)(n.td,{children:"path"}),(0,a.jsx)(n.td,{children:"string"}),(0,a.jsx)(n.td,{children:"true"}),(0,a.jsx)(n.td,{children:"A unique integer value identifying this tag"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"body"}),(0,a.jsx)(n.td,{children:"body"}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.a,{href:"/docs/apireference/v2/schemas/tag",children:"Tag"})}),(0,a.jsx)(n.td,{children:"false"}),(0,a.jsx)(n.td,{children:"The request body(tag params)"})]})]})]}),"\n",(0,a.jsx)(n.h4,{id:"example-body-parameters",children:"Example Body Parameters"}),"\n","\n","\n",(0,a.jsx)(s.Z,{defaultValue:"json",values:[{label:"JSON",value:"json"}],children:(0,a.jsx)(i.Z,{value:"json",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "active": "boolean",\n  "type": "string",\n  "name": "string",\n  "description": "string",\n  "color": "string",\n  "visible": "boolean"\n  "visibility_boost": "boolean",\n  "deleted": "boolean"\n}\n'})})})}),"\n",(0,a.jsx)(n.h3,{id:"example-request",children:"Example Request"}),"\n",(0,a.jsxs)(s.Z,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"Bash",value:"bash"}],children:[(0,a.jsx)(i.Z,{value:"js",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'\nconst inputBody = \'{\n  "active": "boolean",\n  "type": "string",\n  "name": "string",\n  "description": "string",\n  "color": "string",\n  "visible": "boolean"\n  "visibility_boost": "boolean",\n  "deleted": "boolean"\n}\';\nconst headers = {\n  \'Content-Type\':\'application/x-www-form-urlencoded\',\n  \'Accept\':\'application/json\',\n  \'Authorization\': \'Bearer {access_token}\'\n};\n\nfetch(\'/api/v2/tag/{id}/\',\n{\n  method: \'PATCH\',\n  body: inputBody,\n  headers: headers\n})\n.then(function(res) {\n    return res.json();\n}).then(function(body) {\n    console.log(body);\n});\n'})})}),(0,a.jsx)(i.Z,{value:"bash",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"# You can also use wget\ncurl -X PATCH /api/v2/tag/{id}/ \\\n  -H 'Content-Type: application/x-www-form-urlencoded' \\\n  -H 'Accept: application/json' \\\n  -H 'Authorization: Bearer {access_token}' \\\n  --DATA '{body}'\n"})})})]}),"\n",(0,a.jsx)(n.h2,{id:"responses",children:"Responses"}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Status"}),(0,a.jsx)(n.th,{children:"Meaning"}),(0,a.jsx)(n.th,{children:"Description"}),(0,a.jsx)(n.th,{children:"Schema"})]})}),(0,a.jsx)(n.tbody,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"200"}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.a,{href:"https://tools.ietf.org/html/rfc7231#section-6.3.1",children:"OK"})}),(0,a.jsx)(n.td,{children:"Response status code"}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.a,{href:"/docs/apireference/v2/schemas/tag",children:"Tag"})})]})})]}),"\n",(0,a.jsx)(n.h3,{id:"example-responses",children:"Example responses"}),"\n",(0,a.jsx)(s.Z,{defaultValue:"200",values:[{label:"200",value:"200"}],children:(0,a.jsx)(i.Z,{value:"200",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "id": "integer",\n  "type": "string",      \n  "name": "string",      \n  "description": "string",\n  "color": "string",\n  "visible": "boolean",\n  "visibility_boost": "boolean",\n  "created_at": "string",\n  "active": "boolean",\n  "deleted": "boolean"\n}\n'})})})})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>i});var a=t(67294);const r={},s=a.createContext(r);function i(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);