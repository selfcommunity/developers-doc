"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[71374],{32342:(e,t,n)=>{n.d(t,{Z:()=>i});n(67294);var r=n(36905);const s={tabItem:"tabItem_Ymn6"};var a=n(85893);function i(e){let{children:t,hidden:n,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.Z)(s.tabItem,i),hidden:n,children:t})}},71125:(e,t,n)=>{n.d(t,{Z:()=>y});var r=n(67294),s=n(36905),a=n(63735),i=n(16550),o=n(20613),l=n(34423),c=n(20636),u=n(99200);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:s}}=e;return{value:t,label:n,attributes:r,default:s}}))}(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const s=(0,i.k6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(a),(0,r.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(s.location.search);t.set(a,e),s.replace({...s.location,search:t.toString()})}),[a,s])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,a=h(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:a}))),[c,d]=f({queryString:n,groupId:s}),[b,x]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,a]=(0,u.Nk)(n);return[s,(0,r.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:s}),m=(()=>{const e=c??b;return p({value:e,tabValues:a})?e:null})();(0,o.Z)((()=>{m&&l(m)}),[m]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),x(e)}),[d,x,a]),tabValues:a}}var x=n(5730);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=n(85893);function v(e){let{className:t,block:n,selectedValue:r,selectValue:i,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.o5)(),u=e=>{const t=e.currentTarget,n=l.indexOf(t),s=o[n].value;s!==r&&(c(t),i(s))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>l.push(e),onKeyDown:d,onClick:u,...a,className:(0,s.Z)("tabs__item",m.tabItem,a?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function g(e){let{lazy:t,children:n,selectedValue:s}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function _(e){const t=b(e);return(0,j.jsxs)("div",{className:(0,s.Z)("tabs-container",m.tabList),children:[(0,j.jsx)(v,{...e,...t}),(0,j.jsx)(g,{...e,...t})]})}function y(e){const t=(0,x.Z)();return(0,j.jsx)(_,{...e,children:d(e.children)},String(t))}},87864:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var r=n(85893),s=n(11151),a=n(71125),i=n(32342);const o={sidebar_label:"Delete a Course Lesson",sidebar_position:1,title:"Delete a Course Lesson"},l=void 0,c={id:"apireference/v2/course/delete_a_course_lesson",title:"Delete a Course Lesson",description:"This endpoint deletes a specific lesson with id  for the course identified by {courseid} and under the",source:"@site/docs/apireference/v2/course/delete_a_course_lesson.md",sourceDirName:"apireference/v2/course",slug:"/apireference/v2/course/delete_a_course_lesson",permalink:"/docs/apireference/v2/course/delete_a_course_lesson",draft:!1,unlisted:!1,editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/apireference/v2/course/delete_a_course_lesson.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Delete a Course Lesson",sidebar_position:1,title:"Delete a Course Lesson"},sidebar:"apireferenceSidebar",previous:{title:"Delete a Course",permalink:"/docs/apireference/v2/course/delete_a_course"},next:{title:"Delete a Course Section",permalink:"/docs/apireference/v2/course/delete_a_course_section"}},u={},d=[{value:"HTTP Request",id:"http-request",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Example Request",id:"example-request",level:3},{value:"Responses",id:"responses",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["This endpoint deletes a specific lesson with id ",(0,r.jsx)(t.code,{children:"{lesson_id}"})," for the course identified by ",(0,r.jsx)(t.code,{children:"{course_id}"})," and under the\nsection identified by ",(0,r.jsx)(t.code,{children:"{section_id}"}),"."]}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsx)(t.p,{children:"This operation requires the course manager role."})}),"\n",(0,r.jsx)(t.h2,{id:"http-request",children:"HTTP Request"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"DELETE /api/v2/course/{course_id}/section/{section_id}/lesson/{lesson_id}/"})}),"\n",(0,r.jsx)(t.h3,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"In"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Required"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"course_id"}),(0,r.jsx)(t.td,{children:"path"}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"true"}),(0,r.jsx)(t.td,{children:"A unique integer value identifying the course of the lesson"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"section_id"}),(0,r.jsx)(t.td,{children:"path"}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"true"}),(0,r.jsx)(t.td,{children:"A unique integer value identifying the section of the lesson"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"lesson_id"}),(0,r.jsx)(t.td,{children:"path"}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"true"}),(0,r.jsx)(t.td,{children:"A unique integer value identifying the lesson"})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"example-request",children:"Example Request"}),"\n","\n","\n",(0,r.jsxs)(a.Z,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"Bash",value:"bash"}],children:[(0,r.jsx)(i.Z,{value:"js",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"const headers = {\n  'Content-Type':'application/x-www-form-urlencoded',\n  'Accept':'application/json',\n  'Authorization: Bearer <token>'\n};\nfetch('/api/v2/course/{course_id}/section/{section_id}/lesson/{lesson_id}/',\n{\n  method: 'DELETE',\n  headers: headers\n})\n.then(function(res) {\n    return res.json();\n}).then(function(body) {\n    console.log(body);\n});\n\n\n"})})}),(0,r.jsx)(i.Z,{value:"bash",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:'# You can also use wget\ncurl -X DELETE /api/v2/course/{course_id}/section/{section_id}/lesson/{lesson_id}/\n  -H "Authorization: Bearer <token>"\n'})})})]}),"\n",(0,r.jsx)(t.h2,{id:"responses",children:"Responses"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Status"}),(0,r.jsx)(t.th,{children:"Meaning"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Schema"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"204"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://tools.ietf.org/html/rfc7231#section-6.3.5",children:"No Content"})}),(0,r.jsx)(t.td,{children:"Response status code"}),(0,r.jsx)(t.td,{children:"None"})]})})]})]})}function p(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>i});var r=n(67294);const s={},a=r.createContext(s);function i(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);