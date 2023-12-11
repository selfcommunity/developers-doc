"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[57726],{32342:(e,t,s)=>{s.d(t,{Z:()=>i});s(67294);var n=s(36905);const r={tabItem:"tabItem_Ymn6"};var a=s(85893);function i(e){let{children:t,hidden:s,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,n.Z)(r.tabItem,i),hidden:s,children:t})}},71125:(e,t,s)=>{s.d(t,{Z:()=>y});var n=s(67294),r=s(36905),a=s(63735),i=s(16550),l=s(20613),u=s(34423),o=s(20636),c=s(99200);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:s}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:s,attributes:n,default:r}}=e;return{value:t,label:s,attributes:n,default:r}}))}(s);return function(e){const t=(0,o.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,s])}function p(e){let{value:t,tabValues:s}=e;return s.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:s}=e;const r=(0,i.k6)(),a=function(e){let{queryString:t=!1,groupId:s}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:t,groupId:s});return[(0,u._X)(a),(0,n.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(r.location.search);t.set(a,e),r.replace({...r.location,search:t.toString()})}),[a,r])]}function b(e){const{defaultValue:t,queryString:s=!1,groupId:r}=e,a=h(e),[i,u]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=s.find((e=>e.default))??s[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:a}))),[o,d]=f({queryString:s,groupId:r}),[b,m]=function(e){let{groupId:t}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,a]=(0,c.Nk)(s);return[r,(0,n.useCallback)((e=>{s&&a.set(e)}),[s,a])]}({groupId:r}),v=(()=>{const e=o??b;return p({value:e,tabValues:a})?e:null})();(0,l.Z)((()=>{v&&u(v)}),[v]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);u(e),d(e),m(e)}),[d,m,a]),tabValues:a}}var m=s(5730);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=s(85893);function j(e){let{className:t,block:s,selectedValue:n,selectValue:i,tabValues:l}=e;const u=[],{blockElementScrollPositionUntilNextRender:o}=(0,a.o5)(),c=e=>{const t=e.currentTarget,s=u.indexOf(t),r=l[s].value;r!==n&&(o(t),i(r))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const s=u.indexOf(e.currentTarget)+1;t=u[s]??u[0];break}case"ArrowLeft":{const s=u.indexOf(e.currentTarget)-1;t=u[s]??u[u.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":s},t),children:l.map((e=>{let{value:t,label:s,attributes:a}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>u.push(e),onKeyDown:d,onClick:c,...a,className:(0,r.Z)("tabs__item",v.tabItem,a?.className,{"tabs__item--active":n===t}),children:s??t},t)}))})}function g(e){let{lazy:t,children:s,selectedValue:r}=e;const a=(Array.isArray(s)?s:[s]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function _(e){const t=b(e);return(0,x.jsxs)("div",{className:(0,r.Z)("tabs-container",v.tabList),children:[(0,x.jsx)(j,{...e,...t}),(0,x.jsx)(g,{...e,...t})]})}function y(e){const t=(0,m.Z)();return(0,x.jsx)(_,{...e,children:d(e.children)},String(t))}},13290:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var n=s(85893),r=s(11151),a=s(71125),i=s(32342);const l={sidebar_label:"Get Hide Status for a Specific Status",sidebar_position:17,title:"Get Hide Status for a Specific Status"},u=void 0,o={id:"apireference/v2/status/get_hide_status_for_a_specific_status",title:"Get Hide Status for a Specific Status",description:"This endpoint retrieves if the logged user has hidden the Status",source:"@site/docs/apireference/v2/status/get_hide_status_for_a_specific_status.md",sourceDirName:"apireference/v2/status",slug:"/apireference/v2/status/get_hide_status_for_a_specific_status",permalink:"/docs/apireference/v2/status/get_hide_status_for_a_specific_status",draft:!1,unlisted:!1,editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/apireference/v2/status/get_hide_status_for_a_specific_status.md",tags:[],version:"current",sidebarPosition:17,frontMatter:{sidebar_label:"Get Hide Status for a Specific Status",sidebar_position:17,title:"Get Hide Status for a Specific Status"},sidebar:"apireferenceSidebar",previous:{title:"Unsuspend a Status",permalink:"/docs/apireference/v2/status/unsuspend_a_status"},next:{title:"Check if Following Status",permalink:"/docs/apireference/v2/status/check_following_status"}},c={},d=[{value:"HTTP Request",id:"http-request",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Example Request",id:"example-request",level:3},{value:"Responses",id:"responses",level:2},{value:"Example responses",id:"example-responses",level:3}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["This endpoint retrieves if the logged user has hidden the ",(0,n.jsx)(t.a,{href:"/docs/apireference/v2/schemas/status",children:"Status"})]}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsx)(t.p,{children:"This operation requires authentication."})}),"\n",(0,n.jsx)(t.h2,{id:"http-request",children:"HTTP Request"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:"GET /api/v2/status/{id}/hide/status/"})}),"\n",(0,n.jsx)(t.h3,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"In"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Required"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"id"}),(0,n.jsx)(t.td,{children:"path"}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{children:"true"}),(0,n.jsx)(t.td,{children:"A unique integer value identifying this status."})]})})]}),"\n",(0,n.jsx)(t.h3,{id:"example-request",children:"Example Request"}),"\n","\n","\n",(0,n.jsxs)(a.Z,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"Bash",value:"bash"}],children:[(0,n.jsx)(i.Z,{value:"js",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"const headers = {\n  'Accept':'application/json',\n  'Authorization': 'Bearer {access_token}'\n};\n\nfetch('/api/v2/status/{id}/hide/status/',\n{\n  method: 'GET',\n  headers: headers\n})\n.then(function(res) {\n    return res.json();\n}).then(function(body) {\n    console.log(body);\n});\n\n"})})}),(0,n.jsx)(i.Z,{value:"bash",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"# You can also use wget\ncurl -X GET /api/v2/status/{id}/hide/status/ \\\n  -H 'Accept: application/json' \\\n  -H 'Authorization: Bearer {access_token}' \\\n"})})})]}),"\n",(0,n.jsx)(t.h2,{id:"responses",children:"Responses"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Status"}),(0,n.jsx)(t.th,{children:"Meaning"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Schema"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"200"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://tools.ietf.org/html/rfc7231#section-6.3.1",children:"OK"})}),(0,n.jsx)(t.td,{children:"Response status code"}),(0,n.jsx)(t.td,{children:"none"})]})})]}),"\n",(0,n.jsx)(t.h3,{id:"example-responses",children:"Example responses"}),"\n",(0,n.jsx)(a.Z,{defaultValue:"200",values:[{label:"200",value:"200"}],children:(0,n.jsx)(i.Z,{value:"200",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'{\n  "hidden": "boolean"\n}\n'})})})})]})}function p(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},11151:(e,t,s)=>{s.d(t,{Z:()=>l,a:()=>i});var n=s(67294);const r={},a=n.createContext(r);function i(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);