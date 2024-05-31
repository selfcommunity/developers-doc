"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[27368],{32342:(e,n,r)=>{r.d(n,{Z:()=>l});r(67294);var t=r(36905);const s={tabItem:"tabItem_Ymn6"};var i=r(85893);function l(e){let{children:n,hidden:r,className:l}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,t.Z)(s.tabItem,l),hidden:r,children:n})}},71125:(e,n,r)=>{r.d(n,{Z:()=>y});var t=r(67294),s=r(36905),i=r(63735),l=r(16550),a=r(20613),o=r(34423),d=r(20636),c=r(99200);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:s}}=e;return{value:n,label:r,attributes:t,default:s}}))}(r);return function(e){const n=(0,d.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function p(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:r}=e;const s=(0,l.k6)(),i=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,o._X)(i),(0,t.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(s.location.search);n.set(i,e),s.replace({...s.location,search:n.toString()})}),[i,s])]}function j(e){const{defaultValue:n,queryString:r=!1,groupId:s}=e,i=h(e),[l,o]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:i}))),[d,u]=x({queryString:r,groupId:s}),[j,g]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,i]=(0,c.Nk)(r);return[s,(0,t.useCallback)((e=>{r&&i.set(e)}),[r,i])]}({groupId:s}),f=(()=>{const e=d??j;return p({value:e,tabValues:i})?e:null})();(0,a.Z)((()=>{f&&o(f)}),[f]);return{selectedValue:l,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),g(e)}),[u,g,i]),tabValues:i}}var g=r(5730);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var m=r(85893);function v(e){let{className:n,block:r,selectedValue:t,selectValue:l,tabValues:a}=e;const o=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),c=e=>{const n=e.currentTarget,r=o.indexOf(n),s=a[r].value;s!==t&&(d(n),l(s))},u=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=o.indexOf(e.currentTarget)+1;n=o[r]??o[0];break}case"ArrowLeft":{const r=o.indexOf(e.currentTarget)-1;n=o[r]??o[o.length-1];break}}n?.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":r},n),children:a.map((e=>{let{value:n,label:r,attributes:i}=e;return(0,m.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>o.push(e),onKeyDown:u,onClick:c,...i,className:(0,s.Z)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function b(e){let{lazy:n,children:r,selectedValue:s}=e;const i=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===s));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function _(e){const n=j(e);return(0,m.jsxs)("div",{className:(0,s.Z)("tabs-container",f.tabList),children:[(0,m.jsx)(v,{...e,...n}),(0,m.jsx)(b,{...e,...n})]})}function y(e){const n=(0,g.Z)();return(0,m.jsx)(_,{...e,children:u(e.children)},String(n))}},57095:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>d,toc:()=>u});var t=r(85893),s=r(11151),i=r(71125),l=r(32342);const a={sidebar_label:"Get Group Invited Users",sidebar_position:1,title:"Get Group Invited Users"},o=void 0,d={id:"apireference/v2/group/get_group_invited_users",title:"Get Group Invited Users",description:"This endpoint retrieves the list of all invited users to the group identified by \\.",source:"@site/docs/apireference/v2/group/get_group_invited_users.md",sourceDirName:"apireference/v2/group",slug:"/apireference/v2/group/get_group_invited_users",permalink:"/docs/apireference/v2/group/get_group_invited_users",draft:!1,unlisted:!1,editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/apireference/v2/group/get_group_invited_users.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Get Group Invited Users",sidebar_position:1,title:"Get Group Invited Users"},sidebar:"apireferenceSidebar",previous:{title:"Get Group Info",permalink:"/docs/apireference/v2/group/get_group_info"},next:{title:"Get Group Subscribed Users",permalink:"/docs/apireference/v2/group/get_group_subscribed_users"}},c={},u=[{value:"HTTP Request",id:"http-request",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Example Request",id:"example-request",level:3},{value:"Responses",id:"responses",level:2},{value:"Response Schema",id:"response-schema",level:3},{value:"Example responses",id:"example-responses",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"This endpoint retrieves the list of all invited users to the group identified by {id}."}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"This operation requires authentication and the group manager role."})}),"\n",(0,t.jsx)(n.h2,{id:"http-request",children:"HTTP Request"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"GET /api/v2/group/{id}/invite/"})}),"\n",(0,t.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Name"}),(0,t.jsx)(n.th,{children:"In"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Required"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"id"}),(0,t.jsx)(n.td,{children:"path"}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"true"}),(0,t.jsx)(n.td,{children:"A unique integer value identifying this group"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"limit"}),(0,t.jsx)(n.td,{children:"query"}),(0,t.jsx)(n.td,{children:"integer"}),(0,t.jsx)(n.td,{children:"false"}),(0,t.jsx)(n.td,{children:"Number of results to return per page"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"offset"}),(0,t.jsx)(n.td,{children:"query"}),(0,t.jsx)(n.td,{children:"integer"}),(0,t.jsx)(n.td,{children:"false"}),(0,t.jsx)(n.td,{children:"The initial index from which to return the results"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"search"}),(0,t.jsx)(n.td,{children:"query"}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"false"}),(0,t.jsx)(n.td,{children:"A search term. Search in fields: username, real_name"})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"example-request",children:"Example Request"}),"\n","\n","\n",(0,t.jsxs)(i.Z,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"Bash",value:"bash"}],children:[(0,t.jsx)(l.Z,{value:"js",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"const headers = {\n  'Accept':'application/json',\n  'Authorization: Bearer <token>'\n};\n\nfetch('/api/v2/group/{id}/invite/',\n{\n  method: 'GET',\n  headers: headers\n})\n.then(function(res) {\n    return res.json();\n}).then(function(body) {\n    console.log(body);\n});\n\n"})})}),(0,t.jsx)(l.Z,{value:"bash",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# You can also use wget\ncurl -X GET /api/v2/group/{id}/invite/ \\\n  -H 'Accept: application/json'\n  -H \"Authorization: Bearer <token>\"\n"})})})]}),"\n",(0,t.jsx)(n.h2,{id:"responses",children:"Responses"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Status"}),(0,t.jsx)(n.th,{children:"Meaning"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Schema"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"200"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"https://tools.ietf.org/html/rfc7231#section-6.3.1",children:"OK"})}),(0,t.jsx)(n.td,{children:"Response status code"}),(0,t.jsx)(n.td,{children:"Inline"})]})})]}),"\n",(0,t.jsx)(n.h3,{id:"response-schema",children:"Response Schema"}),"\n",(0,t.jsxs)(n.p,{children:["Status Code ",(0,t.jsx)(n.strong,{children:"200"})]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Name"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Required"}),(0,t.jsx)(n.th,{children:"Restrictions"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"\xbb count"}),(0,t.jsx)(n.td,{children:"integer"}),(0,t.jsx)(n.td,{children:"false"}),(0,t.jsx)(n.td,{children:"none"}),(0,t.jsx)(n.td,{children:"Total results count"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"\xbb next"}),(0,t.jsx)(n.td,{children:"string(uri)\xa6null"}),(0,t.jsx)(n.td,{children:"false"}),(0,t.jsx)(n.td,{children:"none"}),(0,t.jsx)(n.td,{children:"Next page url"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"\xbb previous"}),(0,t.jsx)(n.td,{children:"string(uri)\xa6null"}),(0,t.jsx)(n.td,{children:"false"}),(0,t.jsx)(n.td,{children:"none"}),(0,t.jsx)(n.td,{children:"Previous page url"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"\xbb results"}),(0,t.jsxs)(n.td,{children:["list(",(0,t.jsx)(n.a,{href:"/docs/apireference/v2/schemas/user",children:"User"}),")"]}),(0,t.jsx)(n.td,{children:"false"}),(0,t.jsx)(n.td,{children:"none"}),(0,t.jsx)(n.td,{children:"List of results. Every items will contain only the following attributes: id, username, real_name, ext_id and avatar"})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"example-responses",children:"Example responses"}),"\n",(0,t.jsx)(i.Z,{defaultValue:"200",values:[{label:"200",value:"200"}],children:(0,t.jsx)(l.Z,{value:"200",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "count": "integer",\n  "next": "string(uri)",\n  "previous": "string(uri)",\n  "results": [\n    {\n      "id": "integer",\n      "username": "string",\n      "real_name": "string",\n      "avatar": "string",\n      "ext_id": "integer",\n      "followings_counter": "integer",\n      "followers_counter": "integer",\n      "posts_counter": "integer",\n      "discussions_counter": "integer",\n      "polls_counter": "integer",\n      "connection_status": "string",\n      "categories_counter": "integer",\n      "date_joined": "string",\n      "bio": "string",\n      "location": "string",\n      "location_lat_lng": "string",\n      "position_lat_lng": "string",\n      "date_of_birth": "string",\n      "description": "string",\n      "gender": "string",\n      "website": "string",\n      "cover": "string",\n      "tags": [{Tag}],\n      "reputation": "integer",\n      "community_badge": "boolean",\n      "reg_approved": "boolean",\n      "deleted" : "boolean",\n      "company_name": "string",\n      "company_role": "string"\n    }\n  ]\n}\n'})})})})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>a,a:()=>l});var t=r(67294);const s={},i=t.createContext(s);function l(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);