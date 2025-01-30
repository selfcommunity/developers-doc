"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[66405],{32342:(e,t,n)=>{n.d(t,{Z:()=>o});n(67294);var s=n(36905);const r={tabItem:"tabItem_Ymn6"};var i=n(85893);function o(e){let{children:t,hidden:n,className:o}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,s.Z)(r.tabItem,o),hidden:n,children:t})}},71125:(e,t,n)=>{n.d(t,{Z:()=>q});var s=n(67294),r=n(36905),i=n(63735),o=n(16550),l=n(20613),a=n(34423),c=n(20636),u=n(99200);function d(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,s.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:s,default:r}}=e;return{value:t,label:n,attributes:s,default:r}}))}(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const r=(0,o.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,a._X)(i),(0,s.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(r.location.search);t.set(i,e),r.replace({...r.location,search:t.toString()})}),[i,r])]}function x(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,i=h(e),[o,a]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=n.find((e=>e.default))??n[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:i}))),[c,d]=f({queryString:n,groupId:r}),[x,j]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,i]=(0,u.Nk)(n);return[r,(0,s.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:r}),b=(()=>{const e=c??x;return p({value:e,tabValues:i})?e:null})();(0,l.Z)((()=>{b&&a(b)}),[b]);return{selectedValue:o,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);a(e),d(e),j(e)}),[d,j,i]),tabValues:i}}var j=n(5730);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var m=n(85893);function v(e){let{className:t,block:n,selectedValue:s,selectValue:o,tabValues:l}=e;const a=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),u=e=>{const t=e.currentTarget,n=a.indexOf(t),r=l[n].value;r!==s&&(c(t),o(r))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=a.indexOf(e.currentTarget)+1;t=a[n]??a[0];break}case"ArrowLeft":{const n=a.indexOf(e.currentTarget)-1;t=a[n]??a[a.length-1];break}}t?.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:i}=e;return(0,m.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>a.push(e),onKeyDown:d,onClick:u,...i,className:(0,r.Z)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":s===t}),children:n??t},t)}))})}function g(e){let{lazy:t,children:n,selectedValue:r}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===r));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function _(e){const t=x(e);return(0,m.jsxs)("div",{className:(0,r.Z)("tabs-container",b.tabList),children:[(0,m.jsx)(v,{...e,...t}),(0,m.jsx)(g,{...e,...t})]})}function q(e){const t=(0,j.Z)();return(0,m.jsx)(_,{...e,children:d(e.children)},String(t))}},92845:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var s=n(85893),r=n(11151),i=n(71125),o=n(32342);const l={sidebar_label:"Get Course Quiz Question",sidebar_position:1,title:"Get Course Quiz Question"},a=void 0,c={id:"apireference/v2/course/get_course_question",title:"Get Course Quiz Question",description:"This endpoint retrieves a specific question with id  for the course identified by {courseid}, under",source:"@site/docs/apireference/v2/course/get_course_question.md",sourceDirName:"apireference/v2/course",slug:"/apireference/v2/course/get_course_question",permalink:"/docs/apireference/v2/course/get_course_question",draft:!1,unlisted:!1,editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/apireference/v2/course/get_course_question.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Get Course Quiz Question",sidebar_position:1,title:"Get Course Quiz Question"},sidebar:"apireferenceSidebar",previous:{title:"Get Course Lessons",permalink:"/docs/apireference/v2/course/get_course_lessons"},next:{title:"Get Course Quiz Questions",permalink:"/docs/apireference/v2/course/get_course_questions"}},u={},d=[{value:"HTTP Request",id:"http-request",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Example Request",id:"example-request",level:3},{value:"Responses",id:"responses",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["This endpoint retrieves a specific question with id ",(0,s.jsx)(t.code,{children:"{question_id}"})," for the course identified by ",(0,s.jsx)(t.code,{children:"{course_id}"}),", under\nthe section identified by ",(0,s.jsx)(t.code,{children:"{section_id}"})," and written in the lesson identified by ",(0,s.jsx)(t.code,{children:"{lesson_id}"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["The lesson must be of type ",(0,s.jsx)(t.code,{children:"quiz"}),"."]}),"\n",(0,s.jsxs)(t.admonition,{type:"info",children:[(0,s.jsx)(t.p,{children:"This operation requires the user joins the course; the user must also have access to the lesson."}),(0,s.jsx)(t.p,{children:"Users with role creator or manager can always access a lesson while the other users should follow the rules setup by the\nmanagers."}),(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Rules"}),":"]}),(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["lesson should be ",(0,s.jsx)(t.code,{children:"published"}),";"]}),"\n",(0,s.jsxs)(t.li,{children:["if the course ",(0,s.jsx)(t.code,{children:"type"})," is ",(0,s.jsx)(t.code,{children:"scheduled"})," the current datetime should be greater than or equal to ",(0,s.jsx)(t.code,{children:"dripped_at"}),";"]}),"\n",(0,s.jsxs)(t.li,{children:["if the course ",(0,s.jsx)(t.code,{children:"type"})," is ",(0,s.jsx)(t.code,{children:"structured"})," the current datetime should be greater than or equal to the ",(0,s.jsx)(t.code,{children:"joined_at"})," datetime\nplus ",(0,s.jsx)(t.code,{children:"drip_delay"})," days;"]}),"\n",(0,s.jsxs)(t.li,{children:["if the course has ",(0,s.jsx)(t.code,{children:"enforce_lessons_order"})," set to true then all the published lessons before the current one should be\ncompleted."]}),"\n"]})]}),"\n",(0,s.jsx)(t.h2,{id:"http-request",children:"HTTP Request"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"GET /api/v2/course/{course_id}/section/{section_id}/lesson/{lesson_id}/question/{question_id}/"})}),"\n",(0,s.jsx)(t.h3,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"In"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Required"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"course_id"}),(0,s.jsx)(t.td,{children:"path"}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"true"}),(0,s.jsx)(t.td,{children:"A unique integer value identifying the course of the question"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"section_id"}),(0,s.jsx)(t.td,{children:"path"}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"true"}),(0,s.jsx)(t.td,{children:"A unique integer value identifying the section of the question"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"lesson_id"}),(0,s.jsx)(t.td,{children:"path"}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"true"}),(0,s.jsx)(t.td,{children:"A unique integer value identifying the lesson of the question"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"question_id"}),(0,s.jsx)(t.td,{children:"path"}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"true"}),(0,s.jsx)(t.td,{children:"A unique integer value identifying the question"})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"example-request",children:"Example Request"}),"\n","\n","\n",(0,s.jsxs)(i.Z,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"Bash",value:"bash"}],children:[(0,s.jsx)(o.Z,{value:"js",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"const headers = {\n  'Accept':'application/json',\n  'Authorization': 'Bearer {access_token}'\n};\n\nfetch('/api/v2/course/{course_id}/section/{section_id}/lesson/{lesson_id}/question/{question_id}/',\n{\n  method: 'GET',\n  headers: headers\n})\n.then(function(res) {\n    return res.json();\n}).then(function(body) {\n    console.log(body);\n});\n\n"})})}),(0,s.jsx)(o.Z,{value:"bash",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"# You can also use wget\ncurl -X GET /api/v2/course/{course_id}/section/{section_id}/lesson/{lesson_id}/question/{question_id}/ \\\n  -H 'Accept: application/json'\n  -H 'Authorization: Bearer {access_token}'\n"})})})]}),"\n",(0,s.jsx)(t.h2,{id:"responses",children:"Responses"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Status"}),(0,s.jsx)(t.th,{children:"Meaning"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Schema"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"200"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://tools.ietf.org/html/rfc7231#section-6.3.1",children:"OK"})}),(0,s.jsx)(t.td,{children:"Response status code"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/docs/apireference/v2/schemas/course_question",children:"Course Quiz Question"})})]})})]})]})}function p(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>o});var s=n(67294);const r={},i=s.createContext(r);function o(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);