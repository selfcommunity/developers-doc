"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[54047],{32342:(e,t,s)=>{s.d(t,{Z:()=>a});s(67294);var r=s(36905);const n={tabItem:"tabItem_Ymn6"};var i=s(85893);function a(e){let{children:t,hidden:s,className:a}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.Z)(n.tabItem,a),hidden:s,children:t})}},71125:(e,t,s)=>{s.d(t,{Z:()=>y});var r=s(67294),n=s(36905),i=s(63735),a=s(16550),l=s(20613),o=s(34423),c=s(20636),d=s(99200);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:s}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:s,attributes:r,default:n}}=e;return{value:t,label:s,attributes:r,default:n}}))}(s);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,s])}function p(e){let{value:t,tabValues:s}=e;return s.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:s}=e;const n=(0,a.k6)(),i=function(e){let{queryString:t=!1,groupId:s}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:t,groupId:s});return[(0,o._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(n.location.search);t.set(i,e),n.replace({...n.location,search:t.toString()})}),[i,n])]}function x(e){const{defaultValue:t,queryString:s=!1,groupId:n}=e,i=h(e),[a,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=s.find((e=>e.default))??s[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:i}))),[c,u]=f({queryString:s,groupId:n}),[x,j]=function(e){let{groupId:t}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,i]=(0,d.Nk)(s);return[n,(0,r.useCallback)((e=>{s&&i.set(e)}),[s,i])]}({groupId:n}),m=(()=>{const e=c??x;return p({value:e,tabValues:i})?e:null})();(0,l.Z)((()=>{m&&o(m)}),[m]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),j(e)}),[u,j,i]),tabValues:i}}var j=s(5730);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=s(85893);function v(e){let{className:t,block:s,selectedValue:r,selectValue:a,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),d=e=>{const t=e.currentTarget,s=o.indexOf(t),n=l[s].value;n!==r&&(c(t),a(n))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const s=o.indexOf(e.currentTarget)+1;t=o[s]??o[0];break}case"ArrowLeft":{const s=o.indexOf(e.currentTarget)-1;t=o[s]??o[o.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":s},t),children:l.map((e=>{let{value:t,label:s,attributes:i}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>o.push(e),onKeyDown:u,onClick:d,...i,className:(0,n.Z)("tabs__item",m.tabItem,i?.className,{"tabs__item--active":r===t}),children:s??t},t)}))})}function g(e){let{lazy:t,children:s,selectedValue:n}=e;const i=(Array.isArray(s)?s:[s]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function _(e){const t=x(e);return(0,b.jsxs)("div",{className:(0,n.Z)("tabs-container",m.tabList),children:[(0,b.jsx)(v,{...e,...t}),(0,b.jsx)(g,{...e,...t})]})}function y(e){const t=(0,j.Z)();return(0,b.jsx)(_,{...e,children:u(e.children)},String(t))}},86839:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var r=s(85893),n=s(11151),i=s(71125),a=s(32342);const l={sidebar_label:"Get List of Shares Users for a Specific Post",sidebar_position:1,title:"Get List of Shares Users for a Specific Post"},o=void 0,c={id:"apireference/v2/post/get_list_of_shares_users_for_a_specific_post",title:"Get List of Shares Users for a Specific Post",description:"This endpoint retrieves all shares users for a specific post",source:"@site/docs/apireference/v2/post/get_list_of_shares_users_for_a_specific_post.md",sourceDirName:"apireference/v2/post",slug:"/apireference/v2/post/get_list_of_shares_users_for_a_specific_post",permalink:"/docs/apireference/v2/post/get_list_of_shares_users_for_a_specific_post",draft:!1,unlisted:!1,editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/apireference/v2/post/get_list_of_shares_users_for_a_specific_post.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Get List of Shares Users for a Specific Post",sidebar_position:1,title:"Get List of Shares Users for a Specific Post"},sidebar:"apireferenceSidebar",previous:{title:"Get List of Shares for a Specific Post",permalink:"/docs/apireference/v2/post/get_list_of_shares_for_a_specific_post"},next:{title:"Get List of Suspended Posts",permalink:"/docs/apireference/v2/post/get_list_of_suspended_posts"}},d={},u=[{value:"HTTP Request",id:"http-request",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Example Request",id:"example-request",level:3},{value:"Responses",id:"responses",level:2},{value:"Response Schema",id:"response-schema",level:3},{value:"Example responses",id:"example-responses",level:3}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"This endpoint retrieves all shares users for a specific post"}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsxs)(t.p,{children:["This operation requires authentication only if ",(0,r.jsx)(t.code,{children:"content_availability"})," community option is false."]})}),"\n",(0,r.jsx)(t.h2,{id:"http-request",children:"HTTP Request"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"GET /api/v2/post/{id}/shares_users/"})}),"\n",(0,r.jsx)(t.h3,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"In"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Required"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"id"}),(0,r.jsx)(t.td,{children:"path"}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"true"}),(0,r.jsx)(t.td,{children:"A unique integer value identifying this post"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"limit"}),(0,r.jsx)(t.td,{children:"query"}),(0,r.jsx)(t.td,{children:"integer"}),(0,r.jsx)(t.td,{children:"false"}),(0,r.jsx)(t.td,{children:"Number of results to return per page"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"offset"}),(0,r.jsx)(t.td,{children:"query"}),(0,r.jsx)(t.td,{children:"integer"}),(0,r.jsx)(t.td,{children:"false"}),(0,r.jsx)(t.td,{children:"The initial index from which to return the results"})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"example-request",children:"Example Request"}),"\n","\n","\n",(0,r.jsxs)(i.Z,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"Bash",value:"bash"}],children:[(0,r.jsx)(a.Z,{value:"js",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"const headers = {\n  'Accept':'application/json',\n  'Authorization': 'Bearer {access_token}'\n};\n\nfetch('/api/v2/post/{id}/shares_users/',\n{\n  method: 'GET',\n\n  headers: headers\n})\n.then(function(res) {\n    return res.json();\n}).then(function(body) {\n    console.log(body);\n});\n\n"})})}),(0,r.jsx)(a.Z,{value:"bash",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"# You can also use wget\ncurl -X GET /api/v2/post/{id}/shares_users/ \\\n  -H 'Accept: application/json' \\\n  -H 'Authorization: Bearer {access_token}'\n"})})})]}),"\n",(0,r.jsx)(t.h2,{id:"responses",children:"Responses"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Status"}),(0,r.jsx)(t.th,{children:"Meaning"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Schema"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"200"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://tools.ietf.org/html/rfc7231#section-6.3.1",children:"OK"})}),(0,r.jsx)(t.td,{children:"Response status code"}),(0,r.jsx)(t.td,{children:"Inline"})]})})]}),"\n",(0,r.jsx)(t.h3,{id:"response-schema",children:"Response Schema"}),"\n",(0,r.jsxs)(t.p,{children:["Status Code ",(0,r.jsx)(t.strong,{children:"200"})]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Required"}),(0,r.jsx)(t.th,{children:"Restrictions"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"\xbb count"}),(0,r.jsx)(t.td,{children:"integer"}),(0,r.jsx)(t.td,{children:"true"}),(0,r.jsx)(t.td,{children:"none"}),(0,r.jsx)(t.td,{children:"Total results count"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"\xbb next"}),(0,r.jsx)(t.td,{children:"string\xa6null"}),(0,r.jsx)(t.td,{children:"false"}),(0,r.jsx)(t.td,{children:"none"}),(0,r.jsx)(t.td,{children:"Next page url"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"\xbb previous"}),(0,r.jsx)(t.td,{children:"string\xa6null"}),(0,r.jsx)(t.td,{children:"false"}),(0,r.jsx)(t.td,{children:"none"}),(0,r.jsx)(t.td,{children:"Previous page url"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"\xbb results"}),(0,r.jsxs)(t.td,{children:["list(",(0,r.jsx)(t.a,{href:"/docs/apireference/v2/schemas/user",children:"User"}),")"]}),(0,r.jsx)(t.td,{children:"true"}),(0,r.jsx)(t.td,{children:"none"}),(0,r.jsx)(t.td,{children:"List of results"})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"example-responses",children:"Example responses"}),"\n",(0,r.jsx)(i.Z,{defaultValue:"200",values:[{label:"200",value:"200"}],children:(0,r.jsx)(a.Z,{value:"200",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\n  "count": "integer",\n  "next": "string(uri)",\n  "previous": "string(uri)",\n  "results": [\n        {\n          "id": "integer",\n          "username": "string",\n          "real_name": "string",\n          "avatar": "string",\n          "ext_id": "integer",\n          "followings_counter": "integer",\n          "followers_counter": "integer",\n          "posts_counter": "integer",\n          "discussions_counter": "integer",\n          "polls_counter": "integer",\n          "connection_status": "string",\n          "categories_counter": "integer"  \n        },\n        {...},\n  ]\n}\n'})})})})]})}function p(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},11151:(e,t,s)=>{s.d(t,{Z:()=>l,a:()=>a});var r=s(67294);const n={},i=r.createContext(n);function a(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);