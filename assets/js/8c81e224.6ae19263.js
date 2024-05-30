"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[35564],{32342:(e,r,n)=>{n.d(r,{Z:()=>a});n(67294);var t=n(36905);const s={tabItem:"tabItem_Ymn6"};var i=n(85893);function a(e){let{children:r,hidden:n,className:a}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,t.Z)(s.tabItem,a),hidden:n,children:r})}},71125:(e,r,n)=>{n.d(r,{Z:()=>y});var t=n(67294),s=n(36905),i=n(63735),a=n(16550),l=n(20613),o=n(34423),c=n(20636),u=n(99200);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:r,children:n}=e;return(0,t.useMemo)((()=>{const e=r??function(e){return d(e).map((e=>{let{props:{value:r,label:n,attributes:t,default:s}}=e;return{value:r,label:n,attributes:t,default:s}}))}(n);return function(e){const r=(0,c.l)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,n])}function p(e){let{value:r,tabValues:n}=e;return n.some((e=>e.value===r))}function b(e){let{queryString:r=!1,groupId:n}=e;const s=(0,a.k6)(),i=function(e){let{queryString:r=!1,groupId:n}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:r,groupId:n});return[(0,o._X)(i),(0,t.useCallback)((e=>{if(!i)return;const r=new URLSearchParams(s.location.search);r.set(i,e),s.replace({...s.location,search:r.toString()})}),[i,s])]}function x(e){const{defaultValue:r,queryString:n=!1,groupId:s}=e,i=h(e),[a,o]=(0,t.useState)((()=>function(e){let{defaultValue:r,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const t=n.find((e=>e.default))??n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:r,tabValues:i}))),[c,d]=b({queryString:n,groupId:s}),[x,j]=function(e){let{groupId:r}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(r),[s,i]=(0,u.Nk)(n);return[s,(0,t.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:s}),m=(()=>{const e=c??x;return p({value:e,tabValues:i})?e:null})();(0,l.Z)((()=>{m&&o(m)}),[m]);return{selectedValue:a,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),j(e)}),[d,j,i]),tabValues:i}}var j=n(5730);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(85893);function f(e){let{className:r,block:n,selectedValue:t,selectValue:a,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),u=e=>{const r=e.currentTarget,n=o.indexOf(r),s=l[n].value;s!==t&&(c(r),a(s))},d=e=>{let r=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;r=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;r=o[n]??o[o.length-1];break}}r?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},r),children:l.map((e=>{let{value:r,label:n,attributes:i}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:t===r?0:-1,"aria-selected":t===r,ref:e=>o.push(e),onKeyDown:d,onClick:u,...i,className:(0,s.Z)("tabs__item",m.tabItem,i?.className,{"tabs__item--active":t===r}),children:n??r},r)}))})}function v(e){let{lazy:r,children:n,selectedValue:s}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(r){const e=i.find((e=>e.props.value===s));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:i.map(((e,r)=>(0,t.cloneElement)(e,{key:r,hidden:e.props.value!==s})))})}function _(e){const r=x(e);return(0,g.jsxs)("div",{className:(0,s.Z)("tabs-container",m.tabList),children:[(0,g.jsx)(f,{...e,...r}),(0,g.jsx)(v,{...e,...r})]})}function y(e){const r=(0,j.Z)();return(0,g.jsx)(_,{...e,children:d(e.children)},String(r))}},3574:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var t=n(85893),s=n(11151),i=n(71125),a=n(32342);const l={sidebar_label:"Get Subscribed Groups",sidebar_position:1,title:"Get Subscribed Groups"},o=void 0,c={id:"apireference/v2/group/get_subscribed_groups",title:"Get Subscribed Groups",description:"This endpoint retrieves all subscribed groups by the user.",source:"@site/docs/apireference/v2/group/get_subscribed_groups.md",sourceDirName:"apireference/v2/group",slug:"/apireference/v2/group/get_subscribed_groups",permalink:"/docs/apireference/v2/group/get_subscribed_groups",draft:!1,unlisted:!1,editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/apireference/v2/group/get_subscribed_groups.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Get Subscribed Groups",sidebar_position:1,title:"Get Subscribed Groups"},sidebar:"apireferenceSidebar",previous:{title:"Get Group Users Waiting Approval",permalink:"/docs/apireference/v2/group/get_group_users_to_approve"},next:{title:"Get Subscription Status",permalink:"/docs/apireference/v2/group/get_subscription_status"}},u={},d=[{value:"HTTP Request",id:"http-request",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Example Request",id:"example-request",level:3},{value:"Responses",id:"responses",level:2},{value:"Response Schema",id:"response-schema",level:3},{value:"Example responses",id:"example-responses",level:3}];function h(e){const r={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.p,{children:"This endpoint retrieves all subscribed groups by the user."}),"\n",(0,t.jsx)(r.admonition,{type:"info",children:(0,t.jsx)(r.p,{children:"This operation requires authentication."})}),"\n",(0,t.jsx)(r.h2,{id:"http-request",children:"HTTP Request"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.code,{children:"GET /api/v2/group/"})}),"\n",(0,t.jsx)(r.h3,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Name"}),(0,t.jsx)(r.th,{children:"In"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{children:"Required"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"limit"}),(0,t.jsx)(r.td,{children:"query"}),(0,t.jsx)(r.td,{children:"integer"}),(0,t.jsx)(r.td,{children:"false"}),(0,t.jsx)(r.td,{children:"Number of results to return per page"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"offset"}),(0,t.jsx)(r.td,{children:"query"}),(0,t.jsx)(r.td,{children:"integer"}),(0,t.jsx)(r.td,{children:"false"}),(0,t.jsx)(r.td,{children:"The initial index from which to return the results"})]})]})]}),"\n",(0,t.jsx)(r.h3,{id:"example-request",children:"Example Request"}),"\n","\n","\n",(0,t.jsxs)(i.Z,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"Bash",value:"bash"}],children:[(0,t.jsx)(a.Z,{value:"js",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-js",children:"const headers = {\n  'Accept':'application/json',\n  'Authorization': 'Bearer {access_token}'\n};\n\nfetch('/api/v2/group/',\n{\n  method: 'GET',\n\n  headers: headers\n})\n.then(function(res) {\n    return res.json();\n}).then(function(body) {\n    console.log(body);\n});\n\n"})})}),(0,t.jsx)(a.Z,{value:"bash",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"# You can also use wget\ncurl -X GET /api/v2/group/ \\\n  -H 'Accept: application/json'\n  -H 'Authorization: Bearer {access_token}'\n"})})})]}),"\n",(0,t.jsx)(r.h2,{id:"responses",children:"Responses"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Status"}),(0,t.jsx)(r.th,{children:"Meaning"}),(0,t.jsx)(r.th,{children:"Description"}),(0,t.jsx)(r.th,{children:"Schema"})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"200"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://tools.ietf.org/html/rfc7231#section-6.3.1",children:"OK"})}),(0,t.jsx)(r.td,{children:"Response status code"}),(0,t.jsx)(r.td,{children:"Inline"})]})})]}),"\n",(0,t.jsx)(r.h3,{id:"response-schema",children:"Response Schema"}),"\n",(0,t.jsxs)(r.p,{children:["Status Code ",(0,t.jsx)(r.strong,{children:"200"})]}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Name"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{children:"Required"}),(0,t.jsx)(r.th,{children:"Restrictions"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"\xbb count"}),(0,t.jsx)(r.td,{children:"integer"}),(0,t.jsx)(r.td,{children:"false"}),(0,t.jsx)(r.td,{children:"none"}),(0,t.jsx)(r.td,{children:"Total results count"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"\xbb next"}),(0,t.jsx)(r.td,{children:"string(uri)\xa6null"}),(0,t.jsx)(r.td,{children:"false"}),(0,t.jsx)(r.td,{children:"none"}),(0,t.jsx)(r.td,{children:"Next page url"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"\xbb previous"}),(0,t.jsx)(r.td,{children:"string(uri)\xa6null"}),(0,t.jsx)(r.td,{children:"false"}),(0,t.jsx)(r.td,{children:"none"}),(0,t.jsx)(r.td,{children:"Previous page url"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"\xbb results"}),(0,t.jsxs)(r.td,{children:["list(",(0,t.jsx)(r.a,{href:"/docs/apireference/v2/schemas/group",children:"Group"}),")"]}),(0,t.jsx)(r.td,{children:"false"}),(0,t.jsx)(r.td,{children:"none"}),(0,t.jsx)(r.td,{children:"List of results"})]})]})]}),"\n",(0,t.jsx)(r.h3,{id:"example-responses",children:"Example responses"}),"\n",(0,t.jsx)(i.Z,{defaultValue:"200",values:[{label:"200",value:"200"}],children:(0,t.jsx)(a.Z,{value:"200",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-json",children:'{\n  "count": "integer",\n  "next": "string(uri)",\n  "previous": "string(uri)",\n  "results": [\n                {\n                  "id": "integer",\n                  "name": "string",\n                  "description": "string",\n                  "slug": "string",\n                  "color": "string",\n                  "privacy": {},\n                  "visible": "boolean",\n                  "active": "boolean",\n                  "subscription_status": {},\n                  "subscribed": "boolean",\n                  "image_bigger": "string",\n                  "image_big": "string",\n                  "image_medium": "string",\n                  "image_small": "string",\n                  "emotional_image": "string",\n                  "emotional_image_position": "integer",\n                  "subscribers_counter": "integer"\n                  "created_at": "string",\n                  "created_by": {},\n                  "managed_by": {},\n                }\n  ]\n}\n'})})})})]})}function p(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},11151:(e,r,n)=>{n.d(r,{Z:()=>l,a:()=>a});var t=n(67294);const s={},i=t.createContext(s);function a(e){const r=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(i.Provider,{value:r},e.children)}}}]);