"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[54960],{32342:(e,r,t)=>{t.d(r,{Z:()=>i});t(67294);var n=t(36905);const s={tabItem:"tabItem_Ymn6"};var l=t(85893);function i(e){let{children:r,hidden:t,className:i}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,n.Z)(s.tabItem,i),hidden:t,children:r})}},71125:(e,r,t)=>{t.d(r,{Z:()=>y});var n=t(67294),s=t(36905),l=t(63735),i=t(16550),a=t(20613),d=t(34423),o=t(20636),c=t(99200);function u(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:r,children:t}=e;return(0,n.useMemo)((()=>{const e=r??function(e){return u(e).map((e=>{let{props:{value:r,label:t,attributes:n,default:s}}=e;return{value:r,label:t,attributes:n,default:s}}))}(t);return function(e){const r=(0,o.l)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function x(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function j(e){let{queryString:r=!1,groupId:t}=e;const s=(0,i.k6)(),l=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,d._X)(l),(0,n.useCallback)((e=>{if(!l)return;const r=new URLSearchParams(s.location.search);r.set(l,e),s.replace({...s.location,search:r.toString()})}),[l,s])]}function p(e){const{defaultValue:r,queryString:t=!1,groupId:s}=e,l=h(e),[i,d]=(0,n.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!x({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:r,tabValues:l}))),[o,u]=j({queryString:t,groupId:s}),[p,f]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[s,l]=(0,c.Nk)(t);return[s,(0,n.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:s}),m=(()=>{const e=o??p;return x({value:e,tabValues:l})?e:null})();(0,a.Z)((()=>{m&&d(m)}),[m]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!x({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);d(e),u(e),f(e)}),[u,f,l]),tabValues:l}}var f=t(5730);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=t(85893);function v(e){let{className:r,block:t,selectedValue:n,selectValue:i,tabValues:a}=e;const d=[],{blockElementScrollPositionUntilNextRender:o}=(0,l.o5)(),c=e=>{const r=e.currentTarget,t=d.indexOf(r),s=a[t].value;s!==n&&(o(r),i(s))},u=e=>{let r=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=d.indexOf(e.currentTarget)+1;r=d[t]??d[0];break}case"ArrowLeft":{const t=d.indexOf(e.currentTarget)-1;r=d[t]??d[d.length-1];break}}r?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},r),children:a.map((e=>{let{value:r,label:t,attributes:l}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:n===r?0:-1,"aria-selected":n===r,ref:e=>d.push(e),onKeyDown:u,onClick:c,...l,className:(0,s.Z)("tabs__item",m.tabItem,l?.className,{"tabs__item--active":n===r}),children:t??r},r)}))})}function g(e){let{lazy:r,children:t,selectedValue:s}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(r){const e=l.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:l.map(((e,r)=>(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==s})))})}function _(e){const r=p(e);return(0,b.jsxs)("div",{className:(0,s.Z)("tabs-container",m.tabList),children:[(0,b.jsx)(v,{...e,...r}),(0,b.jsx)(g,{...e,...r})]})}function y(e){const r=(0,f.Z)();return(0,b.jsx)(_,{...e,children:u(e.children)},String(r))}},63950:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>d,default:()=>x,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var n=t(85893),s=t(11151),l=t(71125),i=t(32342);const a={sidebar_label:"Get All Users for Moderation",sidebar_position:1,title:"Get All Users for Moderation"},d=void 0,o={id:"apireference/v2/moderation/get_all_users_for_moderation",title:"Get All Users for Moderation",description:"This endpoint retrieves all users for moderation purpose",source:"@site/docs/apireference/v2/moderation/get_all_users_for_moderation.md",sourceDirName:"apireference/v2/moderation",slug:"/apireference/v2/moderation/get_all_users_for_moderation",permalink:"/docs/apireference/v2/moderation/get_all_users_for_moderation",draft:!1,unlisted:!1,editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/apireference/v2/moderation/get_all_users_for_moderation.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Get All Users for Moderation",sidebar_position:1,title:"Get All Users for Moderation"},sidebar:"apireferenceSidebar",previous:{title:"Mention",permalink:"/docs/apireference/v2/mention/"},next:{title:"Moderate a Specific User",permalink:"/docs/apireference/v2/moderation/moderate_a_specific_user"}},c={},u=[{value:"HTTP Request",id:"http-request",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Enumerated Values",id:"enumerated-values",level:4},{value:"Example Request",id:"example-request",level:3},{value:"Responses",id:"responses",level:2},{value:"Response Schema",id:"response-schema",level:3},{value:"Example responses",id:"example-responses",level:3}];function h(e){const r={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"This endpoint retrieves all users for moderation purpose"}),"\n",(0,n.jsx)(r.admonition,{type:"info",children:(0,n.jsx)(r.p,{children:"This operation requires moderation role."})}),"\n",(0,n.jsx)(r.h2,{id:"http-request",children:"HTTP Request"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:"GET /api/v2/moderation/user/"})}),"\n",(0,n.jsx)(r.h3,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"In"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Required"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"search"}),(0,n.jsx)(r.td,{children:"query"}),(0,n.jsx)(r.td,{children:"string"}),(0,n.jsx)(r.td,{children:"false"}),(0,n.jsx)(r.td,{children:"A search term"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"status"}),(0,n.jsx)(r.td,{children:"query"}),(0,n.jsx)(r.td,{children:"string"}),(0,n.jsx)(r.td,{children:"false"}),(0,n.jsx)(r.td,{children:"Valid values are: a, b, d, u"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"days_blocked"}),(0,n.jsx)(r.td,{children:"query"}),(0,n.jsx)(r.td,{children:"string"}),(0,n.jsx)(r.td,{children:"false"}),(0,n.jsx)(r.td,{children:'"days" or "forever"'})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"limit"}),(0,n.jsx)(r.td,{children:"query"}),(0,n.jsx)(r.td,{children:"integer"}),(0,n.jsx)(r.td,{children:"false"}),(0,n.jsx)(r.td,{children:"Number of results to return per page"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"offset"}),(0,n.jsx)(r.td,{children:"query"}),(0,n.jsx)(r.td,{children:"integer"}),(0,n.jsx)(r.td,{children:"false"}),(0,n.jsx)(r.td,{children:"The initial index from which to return the results"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"order_by"}),(0,n.jsx)(r.td,{children:"query"}),(0,n.jsx)(r.td,{children:"string"}),(0,n.jsx)(r.td,{children:"false"}),(0,n.jsx)(r.td,{children:"Default ordering is: -date_joined. Other valid fields are: expire_at, blocked_at"})]})]})]}),"\n",(0,n.jsx)(r.h4,{id:"enumerated-values",children:"Enumerated Values"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Property"}),(0,n.jsx)(r.th,{children:"Value"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"status"}),(0,n.jsx)(r.td,{children:"a"}),(0,n.jsx)(r.td,{children:"active"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"status"}),(0,n.jsx)(r.td,{children:"b"}),(0,n.jsx)(r.td,{children:"blocked"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"status"}),(0,n.jsx)(r.td,{children:"d"}),(0,n.jsx)(r.td,{children:"deleted"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"status"}),(0,n.jsx)(r.td,{children:"u"}),(0,n.jsx)(r.td,{children:"unregistered (hard deleted user)"})]})]})]}),"\n",(0,n.jsx)(r.h3,{id:"example-request",children:"Example Request"}),"\n","\n","\n",(0,n.jsxs)(l.Z,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"Bash",value:"bash"}],children:[(0,n.jsx)(i.Z,{value:"js",children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-js",children:"const headers = {\n  'Accept':'application/json',\n  'Authorization': 'Bearer {access_token}'\n};\n\nfetch('/api/v2/moderation/user/',\n{\n  method: 'GET',\n  headers: headers\n})\n.then(function(res) {\n    return res.json();\n}).then(function(body) {\n    console.log(body);\n});\n\n"})})}),(0,n.jsx)(i.Z,{value:"bash",children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"# You can also use wget\ncurl -X GET /api/v2/moderation/user/ \\\n  -H 'Accept: application/json'\n  -H 'Authorization: Bearer {access_token}'\n"})})})]}),"\n",(0,n.jsx)(r.h2,{id:"responses",children:"Responses"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Status"}),(0,n.jsx)(r.th,{children:"Meaning"}),(0,n.jsx)(r.th,{children:"Description"}),(0,n.jsx)(r.th,{children:"Schema"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"200"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"https://tools.ietf.org/html/rfc7231#section-6.3.1",children:"OK"})}),(0,n.jsx)(r.td,{children:"Response status code"}),(0,n.jsx)(r.td,{children:"Inline"})]})})]}),"\n",(0,n.jsx)(r.h3,{id:"response-schema",children:"Response Schema"}),"\n",(0,n.jsxs)(r.p,{children:["Status Code ",(0,n.jsx)(r.strong,{children:"200"})]}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Required"}),(0,n.jsx)(r.th,{children:"Restrictions"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"\xbb count"}),(0,n.jsx)(r.td,{children:"integer"}),(0,n.jsx)(r.td,{children:"false"}),(0,n.jsx)(r.td,{children:"none"}),(0,n.jsx)(r.td,{children:"Total results count"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"\xbb next"}),(0,n.jsx)(r.td,{children:"string(uri)\xa6null"}),(0,n.jsx)(r.td,{children:"false"}),(0,n.jsx)(r.td,{children:"none"}),(0,n.jsx)(r.td,{children:"Next page url"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"\xbb previous"}),(0,n.jsx)(r.td,{children:"string(uri)\xa6null"}),(0,n.jsx)(r.td,{children:"false"}),(0,n.jsx)(r.td,{children:"none"}),(0,n.jsx)(r.td,{children:"Previous page url"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"\xbb results"}),(0,n.jsxs)(r.td,{children:["[",(0,n.jsx)(r.a,{href:"/docs/apireference/v2/schemas/moderation_user",children:"ModerationUser"}),"]"]}),(0,n.jsx)(r.td,{children:"false"}),(0,n.jsx)(r.td,{children:"none"}),(0,n.jsx)(r.td,{children:"List of results"})]})]})]}),"\n",(0,n.jsx)(r.h3,{id:"example-responses",children:"Example responses"}),"\n",(0,n.jsx)(l.Z,{defaultValue:"200",values:[{label:"200",value:"200"}],children:(0,n.jsx)(i.Z,{value:"200",children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-json",children:'{\n  "count": "integer",\n  "next": "string(uri)",\n  "previous": "string(uri)",\n  "results": [\n        {\n          "...User": {},\n          "blocked_at": "string",\n          "days_blocked": "integer",\n          "expire_at": "string",\n          "last_seen": "string",\n          "flags_given": "integer",\n          "flags_received": "integer",\n          "last_score_variation": {\n            "score": "integer",\n            "comment": "string",\n            "reputed_at": "string",\n            "created_by": {}\n          }  \n        }\n  ]\n}\n'})})})})]})}function x(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},11151:(e,r,t)=>{t.d(r,{Z:()=>a,a:()=>i});var n=t(67294);const s={},l=n.createContext(s);function i(e){const r=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(l.Provider,{value:r},e.children)}}}]);