"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[87643],{32342:(e,r,t)=>{t.d(r,{Z:()=>o});t(67294);var n=t(36905);const s={tabItem:"tabItem_Ymn6"};var a=t(85893);function o(e){let{children:r,hidden:t,className:o}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,n.Z)(s.tabItem,o),hidden:t,children:r})}},71125:(e,r,t)=>{t.d(r,{Z:()=>q});var n=t(67294),s=t(36905),a=t(63735),o=t(16550),i=t(20613),u=t(34423),l=t(20636),c=t(99200);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:r,children:t}=e;return(0,n.useMemo)((()=>{const e=r??function(e){return d(e).map((e=>{let{props:{value:r,label:t,attributes:n,default:s}}=e;return{value:r,label:t,attributes:n,default:s}}))}(t);return function(e){const r=(0,l.l)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function p(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function b(e){let{queryString:r=!1,groupId:t}=e;const s=(0,o.k6)(),a=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,u._X)(a),(0,n.useCallback)((e=>{if(!a)return;const r=new URLSearchParams(s.location.search);r.set(a,e),s.replace({...s.location,search:r.toString()})}),[a,s])]}function m(e){const{defaultValue:r,queryString:t=!1,groupId:s}=e,a=h(e),[o,u]=(0,n.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:r,tabValues:a}))),[l,d]=b({queryString:t,groupId:s}),[m,f]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[s,a]=(0,c.Nk)(t);return[s,(0,n.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:s}),v=(()=>{const e=l??m;return p({value:e,tabValues:a})?e:null})();(0,i.Z)((()=>{v&&u(v)}),[v]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);u(e),d(e),f(e)}),[d,f,a]),tabValues:a}}var f=t(5730);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(85893);function g(e){let{className:r,block:t,selectedValue:n,selectValue:o,tabValues:i}=e;const u=[],{blockElementScrollPositionUntilNextRender:l}=(0,a.o5)(),c=e=>{const r=e.currentTarget,t=u.indexOf(r),s=i[t].value;s!==n&&(l(r),o(s))},d=e=>{let r=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;r=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;r=u[t]??u[u.length-1];break}}r?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},r),children:i.map((e=>{let{value:r,label:t,attributes:a}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:n===r?0:-1,"aria-selected":n===r,ref:e=>u.push(e),onKeyDown:d,onClick:c,...a,className:(0,s.Z)("tabs__item",v.tabItem,a?.className,{"tabs__item--active":n===r}),children:t??r},r)}))})}function j(e){let{lazy:r,children:t,selectedValue:s}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(r){const e=a.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:a.map(((e,r)=>(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==s})))})}function y(e){const r=m(e);return(0,x.jsxs)("div",{className:(0,s.Z)("tabs-container",v.tabList),children:[(0,x.jsx)(g,{...e,...r}),(0,x.jsx)(j,{...e,...r})]})}function q(e){const r=(0,f.Z)();return(0,x.jsx)(y,{...e,children:d(e.children)},String(r))}},7970:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>u,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=t(85893),s=t(11151),a=t(71125),o=t(32342);const i={sidebar_label:"Unsubscribe From Group Or Remove request",sidebar_position:1,title:"Unsubscribe From Group Or Remove request"},u=void 0,l={id:"apireference/v2/group/unsubscribe_from_group",title:"Unsubscribe From Group Or Remove request",description:"This endpoint allows users to unsubscribe from the group identified by . If the user is not subscribed to the",source:"@site/docs/apireference/v2/group/unsubscribe_from_group.md",sourceDirName:"apireference/v2/group",slug:"/apireference/v2/group/unsubscribe_from_group",permalink:"/docs/apireference/v2/group/unsubscribe_from_group",draft:!1,unlisted:!1,editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/apireference/v2/group/unsubscribe_from_group.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Unsubscribe From Group Or Remove request",sidebar_position:1,title:"Unsubscribe From Group Or Remove request"},sidebar:"apireferenceSidebar",previous:{title:"Subscribe Or Accept Invite",permalink:"/docs/apireference/v2/group/subscribe_or_accept_invite_to_group"},next:{title:"Update a Group",permalink:"/docs/apireference/v2/group/update_a_group"}},c={},d=[{value:"HTTP Request",id:"http-request",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Example Request",id:"example-request",level:3},{value:"Responses",id:"responses",level:2}];function h(e){const r={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:["This endpoint allows users to unsubscribe from the group identified by ",(0,n.jsx)(r.code,{children:"{id}"}),". If the user is not subscribed to the\ngroup but has requested to participate to a private group then remove the request to participate."]}),"\n",(0,n.jsx)(r.admonition,{type:"note",children:(0,n.jsxs)(r.p,{children:["By passing the optional param ",(0,n.jsx)(r.code,{children:"user"})," an group manager is able to remove the user from the group."]})}),"\n",(0,n.jsx)(r.admonition,{type:"info",children:(0,n.jsxs)(r.p,{children:["This operation requires only authentication without the ",(0,n.jsx)(r.code,{children:"user"})," param. It requires also that the user is the manager of\nthe group if the ",(0,n.jsx)(r.code,{children:"user"})," param is passed."]})}),"\n",(0,n.jsx)(r.h2,{id:"http-request",children:"HTTP Request"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:"DELETE /api/v2/group/{id}/subscribe/"})}),"\n",(0,n.jsx)(r.h3,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"In"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Required"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"id"}),(0,n.jsx)(r.td,{children:"path"}),(0,n.jsx)(r.td,{children:"integer"}),(0,n.jsx)(r.td,{children:"true"}),(0,n.jsx)(r.td,{children:"A unique integer value identifying this group"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"user"}),(0,n.jsx)(r.td,{children:"path"}),(0,n.jsx)(r.td,{children:"integer"}),(0,n.jsx)(r.td,{children:"false"}),(0,n.jsx)(r.td,{children:"A unique integer value identifying the user to remove from the group"})]})]})]}),"\n",(0,n.jsx)(r.h3,{id:"example-request",children:"Example Request"}),"\n","\n","\n",(0,n.jsxs)(a.Z,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"Bash",value:"bash"}],children:[(0,n.jsx)(o.Z,{value:"js",children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-js",children:"const headers = {\n  'Content-Type':'application/x-www-form-urlencoded',\n  'Accept':'application/json',\n  'Authorization: Bearer <token>'\n};\nfetch('/api/v2/group/{id}/subscribe/',\n{\n  method: 'DELETE',\n  headers: headers\n})\n.then(function(res) {\n    return res.json();\n}).then(function(body) {\n    console.log(body);\n});\n\n"})})}),(0,n.jsx)(o.Z,{value:"bash",children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:'# You can also use wget\ncurl -X DELETE /api/v2/group/{id}/subscribe/\n  -H "Authorization: Bearer <token>"\n'})})})]}),"\n",(0,n.jsx)(r.h2,{id:"responses",children:"Responses"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Status"}),(0,n.jsx)(r.th,{children:"Meaning"}),(0,n.jsx)(r.th,{children:"Description"}),(0,n.jsx)(r.th,{children:"Schema"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"204"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"https://tools.ietf.org/html/rfc7231#section-6.3.5",children:"No Content"})}),(0,n.jsx)(r.td,{children:"Response status code"}),(0,n.jsx)(r.td,{children:"None"})]})})]})]})}function p(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},11151:(e,r,t)=>{t.d(r,{Z:()=>i,a:()=>o});var n=t(67294);const s={},a=n.createContext(s);function o(e){const r=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(a.Provider,{value:r},e.children)}}}]);