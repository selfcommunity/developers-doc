"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[48666],{32342:(e,r,n)=>{n.d(r,{Z:()=>o});n(67294);var t=n(36905);const a={tabItem:"tabItem_Ymn6"};var s=n(85893);function o(e){let{children:r,hidden:n,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.Z)(a.tabItem,o),hidden:n,children:r})}},71125:(e,r,n)=>{n.d(r,{Z:()=>_});var t=n(67294),a=n(36905),s=n(63735),o=n(16550),l=n(20613),i=n(34423),c=n(20636),u=n(99200);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:r,children:n}=e;return(0,t.useMemo)((()=>{const e=r??function(e){return d(e).map((e=>{let{props:{value:r,label:n,attributes:t,default:a}}=e;return{value:r,label:n,attributes:t,default:a}}))}(n);return function(e){const r=(0,c.l)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,n])}function p(e){let{value:r,tabValues:n}=e;return n.some((e=>e.value===r))}function m(e){let{queryString:r=!1,groupId:n}=e;const a=(0,o.k6)(),s=function(e){let{queryString:r=!1,groupId:n}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:r,groupId:n});return[(0,i._X)(s),(0,t.useCallback)((e=>{if(!s)return;const r=new URLSearchParams(a.location.search);r.set(s,e),a.replace({...a.location,search:r.toString()})}),[s,a])]}function f(e){const{defaultValue:r,queryString:n=!1,groupId:a}=e,s=h(e),[o,i]=(0,t.useState)((()=>function(e){let{defaultValue:r,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const t=n.find((e=>e.default))??n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:r,tabValues:s}))),[c,d]=m({queryString:n,groupId:a}),[f,b]=function(e){let{groupId:r}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(r),[a,s]=(0,u.Nk)(n);return[a,(0,t.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:a}),x=(()=>{const e=c??f;return p({value:e,tabValues:s})?e:null})();(0,l.Z)((()=>{x&&i(x)}),[x]);return{selectedValue:o,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),b(e)}),[d,b,s]),tabValues:s}}var b=n(5730);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(85893);function j(e){let{className:r,block:n,selectedValue:t,selectValue:o,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),u=e=>{const r=e.currentTarget,n=i.indexOf(r),a=l[n].value;a!==t&&(c(r),o(a))},d=e=>{let r=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;r=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;r=i[n]??i[i.length-1];break}}r?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},r),children:l.map((e=>{let{value:r,label:n,attributes:s}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:t===r?0:-1,"aria-selected":t===r,ref:e=>i.push(e),onKeyDown:d,onClick:u,...s,className:(0,a.Z)("tabs__item",x.tabItem,s?.className,{"tabs__item--active":t===r}),children:n??r},r)}))})}function g(e){let{lazy:r,children:n,selectedValue:a}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(r){const e=s.find((e=>e.props.value===a));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map(((e,r)=>(0,t.cloneElement)(e,{key:r,hidden:e.props.value!==a})))})}function y(e){const r=f(e);return(0,v.jsxs)("div",{className:(0,a.Z)("tabs-container",x.tabList),children:[(0,v.jsx)(j,{...e,...r}),(0,v.jsx)(g,{...e,...r})]})}function _(e){const r=(0,b.Z)();return(0,v.jsx)(y,{...e,children:d(e.children)},String(r))}},68090:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var t=n(85893),a=n(11151),s=n(71125),o=n(32342);const l={sidebar_label:"Create a Course",sidebar_position:1,title:"Create a Course"},i=void 0,c={id:"apireference/v2/course/create_a_course",title:"Create a Course",description:"This endpoint creates a course.",source:"@site/docs/apireference/v2/course/create_a_course.md",sourceDirName:"apireference/v2/course",slug:"/apireference/v2/course/create_a_course",permalink:"/docs/apireference/v2/course/create_a_course",draft:!1,unlisted:!1,editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/apireference/v2/course/create_a_course.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Create a Course",sidebar_position:1,title:"Create a Course"},sidebar:"apireferenceSidebar",previous:{title:"Change User Role",permalink:"/docs/apireference/v2/course/change_user_role_course"},next:{title:"Create a Course Comment",permalink:"/docs/apireference/v2/course/create_a_course_comment"}},u={},d=[{value:"HTTP Request",id:"http-request",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Example Body Parameters",id:"example-body-parameters",level:4},{value:"Example Request",id:"example-request",level:3},{value:"Responses",id:"responses",level:2}];function h(e){const r={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.p,{children:"This endpoint creates a course."}),"\n",(0,t.jsx)(r.admonition,{type:"info",children:(0,t.jsxs)(r.p,{children:["This operation requires authentication.",(0,t.jsx)("br",{}),"If ",(0,t.jsx)(r.code,{children:"courses_only_staff_enabled"})," is ",(0,t.jsx)(r.code,{children:"true"})," only staff members can create new\ncourses."]})}),"\n",(0,t.jsx)(r.h2,{id:"http-request",children:"HTTP Request"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.code,{children:"POST /api/v2/course/"})}),"\n",(0,t.jsx)(r.h3,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Name"}),(0,t.jsx)(r.th,{children:"In"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{children:"Required"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"body"}),(0,t.jsx)(r.td,{children:"body"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/apireference/v2/schemas/course",children:"Course"})}),(0,t.jsx)(r.td,{children:"true"}),(0,t.jsx)(r.td,{children:"The request body (course params)"})]})})]}),"\n",(0,t.jsx)(r.h4,{id:"example-body-parameters",children:"Example Body Parameters"}),"\n","\n","\n",(0,t.jsx)(s.Z,{defaultValue:"json",values:[{label:"JSON",value:"json"}],children:(0,t.jsx)(o.Z,{value:"json",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-json",children:'{\n    "name": "string",\n    "description": "string",\n    "type": "string",\n    "privacy": "string",\n    "image_original": "string",\n    "categories": [integer]\n}\n'})})})}),"\n",(0,t.jsx)(r.h3,{id:"example-request",children:"Example Request"}),"\n",(0,t.jsxs)(s.Z,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"Bash",value:"bash"}],children:[(0,t.jsx)(o.Z,{value:"js",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-js",children:'const inputBody = \'{\n    "name": "string",\n    "description": "string",\n    "type": "string",\n    "privacy": "string",\n    "image_original": "string",\n    "categories": [integer]\n}\';\nconst headers = {\n  \'Content-Type\':\'application/x-www-form-urlencoded\',\n  \'Accept\':\'application/json\',\n  \'Authorization\': \'Bearer {access_token}\'\n};\n\nfetch(\'/api/v2/course/\',\n{\n  method: \'POST\',\n  body: inputBody,\n  headers: headers\n})\n.then(function(res) {\n    return res.json();\n}).then(function(body) {\n    console.log(body);\n});\n\n'})})}),(0,t.jsx)(o.Z,{value:"bash",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"# You can also use wget\ncurl -X POST /api/v2/course/ \\\n  -H 'Content-Type: application/x-www-form-urlencoded' \\\n  -H 'Accept: application/json'\n  -H 'Authorization: Bearer {access_token}'\n  --DATA '{body}'\n"})})})]}),"\n",(0,t.jsx)(r.h2,{id:"responses",children:"Responses"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Status"}),(0,t.jsx)(r.th,{children:"Meaning"}),(0,t.jsx)(r.th,{children:"Description"}),(0,t.jsx)(r.th,{children:"Schema"})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"201"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://tools.ietf.org/html/rfc7231#section-6.3.2",children:"Created"})}),(0,t.jsx)(r.td,{children:"Response status code"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/apireference/v2/schemas/course",children:"Course"})})]})})]})]})}function p(e={}){const{wrapper:r}={...(0,a.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},11151:(e,r,n)=>{n.d(r,{Z:()=>l,a:()=>o});var t=n(67294);const a={},s=t.createContext(a);function o(e){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);