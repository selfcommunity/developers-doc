"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[25739],{32342:(e,n,t)=>{t.d(n,{Z:()=>l});t(67294);var r=t(36905);const s={tabItem:"tabItem_Ymn6"};var i=t(85893);function l(e){let{children:n,hidden:t,className:l}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.Z)(s.tabItem,l),hidden:t,children:n})}},71125:(e,n,t)=>{t.d(n,{Z:()=>_});var r=t(67294),s=t(36905),i=t(63735),l=t(16550),a=t(20613),o=t(34423),c=t(20636),d=t(99200);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:s}}=e;return{value:n,label:t,attributes:r,default:s}}))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:t}=e;const s=(0,l.k6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o._X)(i),(0,r.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(s.location.search);n.set(i,e),s.replace({...s.location,search:n.toString()})}),[i,s])]}function j(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,i=h(e),[l,o]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:i}))),[c,u]=x({queryString:t,groupId:s}),[j,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,i]=(0,d.Nk)(t);return[s,(0,r.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:s}),m=(()=>{const e=c??j;return p({value:e,tabValues:i})?e:null})();(0,a.Z)((()=>{m&&o(m)}),[m]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),f(e)}),[u,f,i]),tabValues:i}}var f=t(5730);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=t(85893);function g(e){let{className:n,block:t,selectedValue:r,selectValue:l,tabValues:a}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),d=e=>{const n=e.currentTarget,t=o.indexOf(n),s=a[t].value;s!==r&&(c(n),l(s))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},n),children:a.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>o.push(e),onKeyDown:u,onClick:d,...i,className:(0,s.Z)("tabs__item",m.tabItem,i?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:s}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function y(e){const n=j(e);return(0,b.jsxs)("div",{className:(0,s.Z)("tabs-container",m.tabList),children:[(0,b.jsx)(g,{...e,...n}),(0,b.jsx)(v,{...e,...n})]})}function _(e){const n=(0,f.Z)();return(0,b.jsx)(y,{...e,children:u(e.children)},String(n))}},51394:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var r=t(85893),s=t(11151),i=t(71125),l=t(32342);const a={sidebar_label:"Get User's Connections",sidebar_position:24,title:"Get User's Connections"},o=void 0,c={id:"apireference/v2/user/get_users_connections",title:"Get User's Connections",description:"This endpoint retrieves the list of connections of a specific user identified by id",source:"@site/docs/apireference/v2/user/get_users_connections.md",sourceDirName:"apireference/v2/user",slug:"/apireference/v2/user/get_users_connections",permalink:"/docs/apireference/v2/user/get_users_connections",draft:!1,unlisted:!1,editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/apireference/v2/user/get_users_connections.md",tags:[],version:"current",sidebarPosition:24,frontMatter:{sidebar_label:"Get User's Connections",sidebar_position:24,title:"Get User's Connections"},sidebar:"apireferenceSidebar",previous:{title:"Check User Follower",permalink:"/docs/apireference/v2/user/check_user_follower"},next:{title:"Check User Connection",permalink:"/docs/apireference/v2/user/check_user_connection"}},d={},u=[{value:"HTTP Request",id:"http-request",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Example Request",id:"example-request",level:3},{value:"Responses",id:"responses",level:2},{value:"Response Schema",id:"response-schema",level:3},{value:"Example responses",id:"example-responses",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"This endpoint retrieves the list of connections of a specific user identified by id"}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsx)(n.p,{children:"his operation requires the community to be set to friendship mode."})}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["This operation requires authentication only if ",(0,r.jsx)(n.code,{children:"content_availability"})," community option is false."]})}),"\n",(0,r.jsx)(n.h2,{id:"http-request",children:"HTTP Request"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"GET /api/v2/user/{id}/connections/"})}),"\n",(0,r.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"In"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Required"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"id"}),(0,r.jsx)(n.td,{children:"path"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"true"}),(0,r.jsx)(n.td,{children:"A unique integer value identifying this user"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"limit"}),(0,r.jsx)(n.td,{children:"query"}),(0,r.jsx)(n.td,{children:"integer"}),(0,r.jsx)(n.td,{children:"false"}),(0,r.jsx)(n.td,{children:"Number of results to return per page"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"offset"}),(0,r.jsx)(n.td,{children:"query"}),(0,r.jsx)(n.td,{children:"integer"}),(0,r.jsx)(n.td,{children:"false"}),(0,r.jsx)(n.td,{children:"The initial index from which to return the results"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"mutual"}),(0,r.jsx)(n.td,{children:"path"}),(0,r.jsx)(n.td,{children:"integer"}),(0,r.jsx)(n.td,{children:"false"}),(0,r.jsx)(n.td,{children:"Allowed values: 0-1. Param 0 returns the list of non mutual connections. Param 1 returns only the mutual list"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"example-request",children:"Example Request"}),"\n","\n","\n",(0,r.jsxs)(i.Z,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"Bash",value:"bash"}],children:[(0,r.jsx)(l.Z,{value:"js",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"\nconst headers = {\n  'Accept':'application/json',\n};\n\nfetch('/api/v2/user/{id}/connections/',\n{\n  method: 'GET',\n  headers: headers\n})\n.then(function(res) {\n    return res.json();\n}).then(function(body) {\n    console.log(body);\n});\n"})})}),(0,r.jsx)(l.Z,{value:"bash",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# You can also use wget\ncurl -X GET /api/v2/user/{id}/connections/ \\\n  -H 'Accept: application/json'\n"})})})]}),"\n",(0,r.jsx)(n.h2,{id:"responses",children:"Responses"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Status"}),(0,r.jsx)(n.th,{children:"Meaning"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Schema"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"200"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://tools.ietf.org/html/rfc7231#section-6.3.1",children:"OK"})}),(0,r.jsx)(n.td,{children:"Response status code"}),(0,r.jsx)(n.td,{children:"Inline"})]})})]}),"\n",(0,r.jsx)(n.h3,{id:"response-schema",children:"Response Schema"}),"\n",(0,r.jsxs)(n.p,{children:["Status Code ",(0,r.jsx)(n.strong,{children:"200"})]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Required"}),(0,r.jsx)(n.th,{children:"Restrictions"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\xbb count"}),(0,r.jsx)(n.td,{children:"integer"}),(0,r.jsx)(n.td,{children:"false"}),(0,r.jsx)(n.td,{children:"none"}),(0,r.jsx)(n.td,{children:"Total results count"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\xbb next"}),(0,r.jsx)(n.td,{children:"string(uri)\xa6null"}),(0,r.jsx)(n.td,{children:"false"}),(0,r.jsx)(n.td,{children:"none"}),(0,r.jsx)(n.td,{children:"Next page url"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\xbb previous"}),(0,r.jsx)(n.td,{children:"string(uri)\xa6null"}),(0,r.jsx)(n.td,{children:"false"}),(0,r.jsx)(n.td,{children:"none"}),(0,r.jsx)(n.td,{children:"Previous page url"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\xbb results"}),(0,r.jsxs)(n.td,{children:["list(",(0,r.jsx)(n.a,{href:"/docs/apireference/v2/schemas/user",children:"User"}),")"]}),(0,r.jsx)(n.td,{children:"false"}),(0,r.jsx)(n.td,{children:"none"}),(0,r.jsx)(n.td,{children:"List of results"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"example-responses",children:"Example responses"}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsx)(n.p,{children:"The results always return users sorted by: first mutuals and then non-mutuals."})}),"\n",(0,r.jsx)(i.Z,{defaultValue:"200",values:[{label:"200",value:"200"}],children:(0,r.jsx)(l.Z,{value:"200",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "count": "integer",\n  "next": "string(uri)",\n  "previous": "string(uri)",\n  "results": [\n    {\n      "id": "integer",\n      "username": "string",\n      "real_name": "string",\n      "avatar": "string",\n      "ext_id": "integer",\n      "followings_counter": "integer",\n      "followers_counter": "integer",\n      "posts_counter": "integer",\n      "discussions_counter": "integer",\n      "polls_counter": "integer",\n      "connection_status": "string",\n      "categories_counter": "integer",\n      "date_joined": "string",\n      "bio": "string",\n      "location": "string",\n      "location_lat_lng": "string",\n      "position_lat_lng": "string",\n      "date_of_birth": "string",\n      "description": "string",\n      "gender": "string",\n      "website": "string",\n      "cover": "string",\n      "tags": [{Tag}],\n      "reputation": "integer",\n      "community_badge": "boolean",\n      "reg_approved": "boolean",\n      "deleted" : "boolean",\n      "company_name": "string",\n      "company_role": "string"\n    },\n    {...}\n  ]\n}\n'})})})})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>l});var r=t(67294);const s={},i=r.createContext(s);function l(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);