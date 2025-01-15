"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[25777],{32342:(e,r,t)=>{t.d(r,{Z:()=>l});t(67294);var n=t(36905);const s={tabItem:"tabItem_Ymn6"};var i=t(85893);function l(e){let{children:r,hidden:t,className:l}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,n.Z)(s.tabItem,l),hidden:t,children:r})}},71125:(e,r,t)=>{t.d(r,{Z:()=>_});var n=t(67294),s=t(36905),i=t(63735),l=t(16550),a=t(20613),c=t(34423),o=t(20636),d=t(99200);function u(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:r,children:t}=e;return(0,n.useMemo)((()=>{const e=r??function(e){return u(e).map((e=>{let{props:{value:r,label:t,attributes:n,default:s}}=e;return{value:r,label:t,attributes:n,default:s}}))}(t);return function(e){const r=(0,o.l)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function p(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function j(e){let{queryString:r=!1,groupId:t}=e;const s=(0,l.k6)(),i=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,c._X)(i),(0,n.useCallback)((e=>{if(!i)return;const r=new URLSearchParams(s.location.search);r.set(i,e),s.replace({...s.location,search:r.toString()})}),[i,s])]}function x(e){const{defaultValue:r,queryString:t=!1,groupId:s}=e,i=h(e),[l,c]=(0,n.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:r,tabValues:i}))),[o,u]=j({queryString:t,groupId:s}),[x,f]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[s,i]=(0,d.Nk)(t);return[s,(0,n.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:s}),b=(()=>{const e=o??x;return p({value:e,tabValues:i})?e:null})();(0,a.Z)((()=>{b&&c(b)}),[b]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),f(e)}),[u,f,i]),tabValues:i}}var f=t(5730);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var m=t(85893);function v(e){let{className:r,block:t,selectedValue:n,selectValue:l,tabValues:a}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,i.o5)(),d=e=>{const r=e.currentTarget,t=c.indexOf(r),s=a[t].value;s!==n&&(o(r),l(s))},u=e=>{let r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;r=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;r=c[t]??c[c.length-1];break}}r?.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},r),children:a.map((e=>{let{value:r,label:t,attributes:i}=e;return(0,m.jsx)("li",{role:"tab",tabIndex:n===r?0:-1,"aria-selected":n===r,ref:e=>c.push(e),onKeyDown:u,onClick:d,...i,className:(0,s.Z)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":n===r}),children:t??r},r)}))})}function g(e){let{lazy:r,children:t,selectedValue:s}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(r){const e=i.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:i.map(((e,r)=>(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==s})))})}function y(e){const r=x(e);return(0,m.jsxs)("div",{className:(0,s.Z)("tabs-container",b.tabList),children:[(0,m.jsx)(v,{...e,...r}),(0,m.jsx)(g,{...e,...r})]})}function _(e){const r=(0,f.Z)();return(0,m.jsx)(y,{...e,children:u(e.children)},String(r))}},13966:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var n=t(85893),s=t(11151),i=t(71125),l=t(32342);const a={sidebar_label:"Get Joined Courses",sidebar_position:1,title:"Get Joined Courses"},c=void 0,o={id:"apireference/v2/course/get_joined_courses",title:"Get Joined Courses",description:"This endpoint retrieves all joined courses by the user authenticated.",source:"@site/docs/apireference/v2/course/get_joined_courses.md",sourceDirName:"apireference/v2/course",slug:"/apireference/v2/course/get_joined_courses",permalink:"/docs/apireference/v2/course/get_joined_courses",draft:!1,unlisted:!1,editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/apireference/v2/course/get_joined_courses.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Get Joined Courses",sidebar_position:1,title:"Get Joined Courses"},sidebar:"apireferenceSidebar",previous:{title:"Get Course Users Waiting Approval",permalink:"/docs/apireference/v2/course/get_course_users_to_approve"},next:{title:"Invite Users Or Accept Users",permalink:"/docs/apireference/v2/course/invite_users_to_course"}},d={},u=[{value:"HTTP Request",id:"http-request",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Example Request",id:"example-request",level:3},{value:"Responses",id:"responses",level:2},{value:"Response Schema",id:"response-schema",level:3}];function h(e){const r={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"This endpoint retrieves all joined courses by the user authenticated."}),"\n",(0,n.jsx)(r.admonition,{type:"info",children:(0,n.jsx)(r.p,{children:"This operation requires authentication."})}),"\n",(0,n.jsx)(r.h2,{id:"http-request",children:"HTTP Request"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:"GET /api/v2/course/"})}),"\n",(0,n.jsx)(r.h3,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"In"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Required"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"join_status"}),(0,n.jsx)(r.td,{children:"query"}),(0,n.jsx)(r.td,{children:"string"}),(0,n.jsx)(r.td,{children:"false"}),(0,n.jsxs)(r.td,{children:["Filter by join ",(0,n.jsx)(r.a,{href:"/docs/apireference/v2/schemas/course#enumerated-values",children:"join_status"})]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"created_by"}),(0,n.jsx)(r.td,{children:"query"}),(0,n.jsx)(r.td,{children:"integer"}),(0,n.jsx)(r.td,{children:"false"}),(0,n.jsx)(r.td,{children:"Return only courses created by this user id"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"limit"}),(0,n.jsx)(r.td,{children:"query"}),(0,n.jsx)(r.td,{children:"integer"}),(0,n.jsx)(r.td,{children:"false"}),(0,n.jsx)(r.td,{children:"Number of results to return per page"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"offset"}),(0,n.jsx)(r.td,{children:"query"}),(0,n.jsx)(r.td,{children:"integer"}),(0,n.jsx)(r.td,{children:"false"}),(0,n.jsx)(r.td,{children:"The initial index from which to return the results"})]})]})]}),"\n",(0,n.jsx)(r.h3,{id:"example-request",children:"Example Request"}),"\n","\n","\n",(0,n.jsxs)(i.Z,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"Bash",value:"bash"}],children:[(0,n.jsx)(l.Z,{value:"js",children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-js",children:"const headers = {\n  'Accept':'application/json',\n  'Authorization': 'Bearer {access_token}'\n};\n\nfetch('/api/v2/course/',\n{\n  method: 'GET',\n\n  headers: headers\n})\n.then(function(res) {\n    return res.json();\n}).then(function(body) {\n    console.log(body);\n});\n\n"})})}),(0,n.jsx)(l.Z,{value:"bash",children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"# You can also use wget\ncurl -X GET /api/v2/course/ \\\n  -H 'Accept: application/json'\n  -H 'Authorization: Bearer {access_token}'\n"})})})]}),"\n",(0,n.jsx)(r.h2,{id:"responses",children:"Responses"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Status"}),(0,n.jsx)(r.th,{children:"Meaning"}),(0,n.jsx)(r.th,{children:"Description"}),(0,n.jsx)(r.th,{children:"Schema"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"200"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"https://tools.ietf.org/html/rfc7231#section-6.3.1",children:"OK"})}),(0,n.jsx)(r.td,{children:"Response status code"}),(0,n.jsx)(r.td,{children:"Inline"})]})})]}),"\n",(0,n.jsx)(r.h3,{id:"response-schema",children:"Response Schema"}),"\n",(0,n.jsxs)(r.p,{children:["Status Code ",(0,n.jsx)(r.strong,{children:"200"})]}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Required"}),(0,n.jsx)(r.th,{children:"Restrictions"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"\xbb count"}),(0,n.jsx)(r.td,{children:"integer"}),(0,n.jsx)(r.td,{children:"false"}),(0,n.jsx)(r.td,{children:"none"}),(0,n.jsx)(r.td,{children:"Total results count"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"\xbb next"}),(0,n.jsx)(r.td,{children:"string(uri)\xa6null"}),(0,n.jsx)(r.td,{children:"false"}),(0,n.jsx)(r.td,{children:"none"}),(0,n.jsx)(r.td,{children:"Next page url"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"\xbb previous"}),(0,n.jsx)(r.td,{children:"string(uri)\xa6null"}),(0,n.jsx)(r.td,{children:"false"}),(0,n.jsx)(r.td,{children:"none"}),(0,n.jsx)(r.td,{children:"Previous page url"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"\xbb results"}),(0,n.jsxs)(r.td,{children:["list(",(0,n.jsx)(r.a,{href:"/docs/apireference/v2/schemas/course",children:"Course"}),")"]}),(0,n.jsx)(r.td,{children:"false"}),(0,n.jsx)(r.td,{children:"none"}),(0,n.jsx)(r.td,{children:"List of results"})]})]})]})]})}function p(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},11151:(e,r,t)=>{t.d(r,{Z:()=>a,a:()=>l});var n=t(67294);const s={},i=n.createContext(s);function l(e){const r=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);