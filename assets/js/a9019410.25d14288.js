"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[65055],{32342:(e,t,r)=>{r.d(t,{Z:()=>a});r(67294);var n=r(36905);const s={tabItem:"tabItem_Ymn6"};var i=r(85893);function a(e){let{children:t,hidden:r,className:a}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,n.Z)(s.tabItem,a),hidden:r,children:t})}},71125:(e,t,r)=>{r.d(t,{Z:()=>y});var n=r(67294),s=r(36905),i=r(63735),a=r(16550),l=r(20613),o=r(34423),c=r(20636),u=r(99200);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:s}}=e;return{value:t,label:r,attributes:n,default:s}}))}(r);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const s=(0,a.k6)(),i=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,o._X)(i),(0,n.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(s.location.search);t.set(i,e),s.replace({...s.location,search:t.toString()})}),[i,s])]}function x(e){const{defaultValue:t,queryString:r=!1,groupId:s}=e,i=h(e),[a,o]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[c,d]=f({queryString:r,groupId:s}),[x,j]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,i]=(0,u.Nk)(r);return[s,(0,n.useCallback)((e=>{r&&i.set(e)}),[r,i])]}({groupId:s}),b=(()=>{const e=c??x;return p({value:e,tabValues:i})?e:null})();(0,l.Z)((()=>{b&&o(b)}),[b]);return{selectedValue:a,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),j(e)}),[d,j,i]),tabValues:i}}var j=r(5730);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var m=r(85893);function v(e){let{className:t,block:r,selectedValue:n,selectValue:a,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),u=e=>{const t=e.currentTarget,r=o.indexOf(t),s=l[r].value;s!==n&&(c(t),a(s))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=o.indexOf(e.currentTarget)+1;t=o[r]??o[0];break}case"ArrowLeft":{const r=o.indexOf(e.currentTarget)-1;t=o[r]??o[o.length-1];break}}t?.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":r},t),children:l.map((e=>{let{value:t,label:r,attributes:i}=e;return(0,m.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>o.push(e),onKeyDown:d,onClick:u,...i,className:(0,s.Z)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function g(e){let{lazy:t,children:r,selectedValue:s}=e;const i=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function _(e){const t=x(e);return(0,m.jsxs)("div",{className:(0,s.Z)("tabs-container",b.tabList),children:[(0,m.jsx)(v,{...e,...t}),(0,m.jsx)(g,{...e,...t})]})}function y(e){const t=(0,j.Z)();return(0,m.jsx)(_,{...e,children:d(e.children)},String(t))}},15648:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var n=r(85893),s=r(11151),i=r(71125),a=r(32342);const l={sidebar_label:"Get List of Contributors for a Specific Status",sidebar_position:8,title:"Get List of Contributors for a Specific Status"},o=void 0,c={id:"apireference/v2/status/get_list_of_contributors_for_a_specific_status",title:"Get List of Contributors for a Specific Status",description:"This endpoint retrieves all contributors for a specific status",source:"@site/docs/apireference/v2/status/get_list_of_contributors_for_a_specific_status.md",sourceDirName:"apireference/v2/status",slug:"/apireference/v2/status/get_list_of_contributors_for_a_specific_status",permalink:"/docs/apireference/v2/status/get_list_of_contributors_for_a_specific_status",draft:!1,unlisted:!1,editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/apireference/v2/status/get_list_of_contributors_for_a_specific_status.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_label:"Get List of Contributors for a Specific Status",sidebar_position:8,title:"Get List of Contributors for a Specific Status"},sidebar:"apireferenceSidebar",previous:{title:"Restore a Status",permalink:"/docs/apireference/v2/status/restore_a_status"},next:{title:"Get List of Shares for a Specific Status",permalink:"/docs/apireference/v2/status/get_list_of_shares_for_a_specific_status"}},u={},d=[{value:"HTTP Request",id:"http-request",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Example Request",id:"example-request",level:3},{value:"Responses",id:"responses",level:2},{value:"Response Schema",id:"response-schema",level:3},{value:"Example responses",id:"example-responses",level:3}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"This endpoint retrieves all contributors for a specific status"}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsxs)(t.p,{children:["This operation requires authentication only if ",(0,n.jsx)(t.code,{children:"content_availability"})," community option is false."]})}),"\n",(0,n.jsx)(t.h2,{id:"http-request",children:"HTTP Request"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:"GET /api/v2/status/{id}/contributors/"})}),"\n",(0,n.jsx)(t.h3,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"In"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Required"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"id"}),(0,n.jsx)(t.td,{children:"path"}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{children:"true"}),(0,n.jsx)(t.td,{children:"A unique integer value identifying this status"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"limit"}),(0,n.jsx)(t.td,{children:"query"}),(0,n.jsx)(t.td,{children:"integer"}),(0,n.jsx)(t.td,{children:"false"}),(0,n.jsx)(t.td,{children:"Number of results to return per page"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"offset"}),(0,n.jsx)(t.td,{children:"query"}),(0,n.jsx)(t.td,{children:"integer"}),(0,n.jsx)(t.td,{children:"false"}),(0,n.jsx)(t.td,{children:"The initial index from which to return the results"})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"example-request",children:"Example Request"}),"\n","\n","\n",(0,n.jsxs)(i.Z,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"Bash",value:"bash"}],children:[(0,n.jsx)(a.Z,{value:"js",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"const headers = {\n  'Accept':'application/json',\n  'Authorization': 'Bearer {access_token}'\n};\n\nfetch('/api/v2/status/{id}/contributors/',\n{\n  method: 'GET',\n\n  headers: headers\n})\n.then(function(res) {\n    return res.json();\n}).then(function(body) {\n    console.log(body);\n});\n\n"})})}),(0,n.jsx)(a.Z,{value:"bash",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"# You can also use wget\ncurl -X GET /api/v2/status/{id}/contributors/ \\\n  -H 'Accept: application/json' \\\n  -H 'Authorization: Bearer {access_token}'\n"})})})]}),"\n",(0,n.jsx)(t.h2,{id:"responses",children:"Responses"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Status"}),(0,n.jsx)(t.th,{children:"Meaning"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Schema"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"200"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://tools.ietf.org/html/rfc7231#section-6.3.1",children:"OK"})}),(0,n.jsx)(t.td,{children:"Response status code"}),(0,n.jsx)(t.td,{children:"Inline"})]})})]}),"\n",(0,n.jsx)(t.h3,{id:"response-schema",children:"Response Schema"}),"\n",(0,n.jsxs)(t.p,{children:["Status Code ",(0,n.jsx)(t.strong,{children:"200"})]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Required"}),(0,n.jsx)(t.th,{children:"Restrictions"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"\xbb count"}),(0,n.jsx)(t.td,{children:"integer"}),(0,n.jsx)(t.td,{children:"true"}),(0,n.jsx)(t.td,{children:"none"}),(0,n.jsx)(t.td,{children:"Total results count"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"\xbb next"}),(0,n.jsx)(t.td,{children:"string\xa6null"}),(0,n.jsx)(t.td,{children:"false"}),(0,n.jsx)(t.td,{children:"none"}),(0,n.jsx)(t.td,{children:"Next page url"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"\xbb previous"}),(0,n.jsx)(t.td,{children:"string\xa6null"}),(0,n.jsx)(t.td,{children:"false"}),(0,n.jsx)(t.td,{children:"none"}),(0,n.jsx)(t.td,{children:"Previous page url"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"\xbb results"}),(0,n.jsxs)(t.td,{children:["list(",(0,n.jsx)(t.a,{href:"/docs/apireference/v2/schemas/user",children:"User"}),")"]}),(0,n.jsx)(t.td,{children:"true"}),(0,n.jsx)(t.td,{children:"none"}),(0,n.jsx)(t.td,{children:"List of results"})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"example-responses",children:"Example responses"}),"\n",(0,n.jsx)(i.Z,{defaultValue:"200",values:[{label:"200",value:"200"}],children:(0,n.jsx)(a.Z,{value:"200",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'{\n  "count": "integer",\n  "next": "string(uri)",\n  "previous": "string(uri)",\n  "results": [\n        {\n          "id": "integer",\n          "username": "string",\n          "real_name": "string",\n          "avatar": "string",\n          "ext_id": "integer",\n          "followings_counter": "integer",\n          "followers_counter": "integer",\n          "posts_counter": "integer",\n          "discussions_counter": "integer",\n          "polls_counter": "integer",\n          "connection_status": "string",\n          "categories_counter": "integer"         \n        },\n        {...},\n  ]\n}\n'})})})})]})}function p(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},11151:(e,t,r)=>{r.d(t,{Z:()=>l,a:()=>a});var n=r(67294);const s={},i=n.createContext(s);function a(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);