"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[46236],{32342:(e,r,t)=>{t.d(r,{Z:()=>a});t(67294);var n=t(36905);const s={tabItem:"tabItem_Ymn6"};var l=t(85893);function a(e){let{children:r,hidden:t,className:a}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,n.Z)(s.tabItem,a),hidden:t,children:r})}},71125:(e,r,t)=>{t.d(r,{Z:()=>y});var n=t(67294),s=t(36905),l=t(63735),a=t(16550),o=t(20613),i=t(34423),u=t(20636),c=t(99200);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:r,children:t}=e;return(0,n.useMemo)((()=>{const e=r??function(e){return d(e).map((e=>{let{props:{value:r,label:t,attributes:n,default:s}}=e;return{value:r,label:t,attributes:n,default:s}}))}(t);return function(e){const r=(0,u.l)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function p(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function f(e){let{queryString:r=!1,groupId:t}=e;const s=(0,a.k6)(),l=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,i._X)(l),(0,n.useCallback)((e=>{if(!l)return;const r=new URLSearchParams(s.location.search);r.set(l,e),s.replace({...s.location,search:r.toString()})}),[l,s])]}function m(e){const{defaultValue:r,queryString:t=!1,groupId:s}=e,l=h(e),[a,i]=(0,n.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:r,tabValues:l}))),[u,d]=f({queryString:t,groupId:s}),[m,b]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[s,l]=(0,c.Nk)(t);return[s,(0,n.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:s}),v=(()=>{const e=u??m;return p({value:e,tabValues:l})?e:null})();(0,o.Z)((()=>{v&&i(v)}),[v]);return{selectedValue:a,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),b(e)}),[d,b,l]),tabValues:l}}var b=t(5730);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(85893);function j(e){let{className:r,block:t,selectedValue:n,selectValue:a,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,l.o5)(),c=e=>{const r=e.currentTarget,t=i.indexOf(r),s=o[t].value;s!==n&&(u(r),a(s))},d=e=>{let r=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;r=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;r=i[t]??i[i.length-1];break}}r?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},r),children:o.map((e=>{let{value:r,label:t,attributes:l}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:n===r?0:-1,"aria-selected":n===r,ref:e=>i.push(e),onKeyDown:d,onClick:c,...l,className:(0,s.Z)("tabs__item",v.tabItem,l?.className,{"tabs__item--active":n===r}),children:t??r},r)}))})}function g(e){let{lazy:r,children:t,selectedValue:s}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(r){const e=l.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:l.map(((e,r)=>(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==s})))})}function w(e){const r=m(e);return(0,x.jsxs)("div",{className:(0,s.Z)("tabs-container",v.tabList),children:[(0,x.jsx)(j,{...e,...r}),(0,x.jsx)(g,{...e,...r})]})}function y(e){const r=(0,b.Z)();return(0,x.jsx)(w,{...e,children:d(e.children)},String(r))}},78039:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>u,toc:()=>d});var n=t(85893),s=t(11151),l=t(71125),a=t(32342);const o={sidebar_label:"Check User Follower",sidebar_position:23,title:"Check User Follower"},i=void 0,u={id:"apireference/v2/user/check_user_follower",title:"Check User Follower",description:"This endpoint returns is_follower = true if the user (identified in path) follow me",source:"@site/docs/apireference/v2/user/check_user_follower.md",sourceDirName:"apireference/v2/user",slug:"/apireference/v2/user/check_user_follower",permalink:"/docs/apireference/v2/user/check_user_follower",draft:!1,unlisted:!1,editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/apireference/v2/user/check_user_follower.md",tags:[],version:"current",sidebarPosition:23,frontMatter:{sidebar_label:"Check User Follower",sidebar_position:23,title:"Check User Follower"},sidebar:"apireferenceSidebar",previous:{title:"Check User Followed",permalink:"/docs/apireference/v2/user/check_user_followed"},next:{title:"Get User's Connections",permalink:"/docs/apireference/v2/user/get_users_connections"}},c={},d=[{value:"HTTP Request",id:"http-request",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Example Request",id:"example-request",level:3},{value:"Responses",id:"responses",level:2},{value:"Example responses",id:"example-responses",level:3}];function h(e){const r={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"This endpoint returns is_follower = true if the user (identified in path) follow me"}),"\n",(0,n.jsx)(r.admonition,{type:"info",children:(0,n.jsx)(r.p,{children:"This operation requires the community to be set to follow mode."})}),"\n",(0,n.jsx)(r.admonition,{type:"info",children:(0,n.jsx)(r.p,{children:"This operation requires authentication."})}),"\n",(0,n.jsx)(r.h2,{id:"http-request",children:"HTTP Request"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:"GET /api/v2/user/{id}/is_follower/"})}),"\n",(0,n.jsx)(r.h3,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"In"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Required"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"id"}),(0,n.jsx)(r.td,{children:"path"}),(0,n.jsx)(r.td,{children:"string"}),(0,n.jsx)(r.td,{children:"true"}),(0,n.jsx)(r.td,{children:"A unique integer value identifying this user"})]})})]}),"\n",(0,n.jsx)(r.h3,{id:"example-request",children:"Example Request"}),"\n","\n","\n",(0,n.jsxs)(l.Z,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"Bash",value:"bash"}],children:[(0,n.jsx)(a.Z,{value:"js",children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-js",children:"const headers = {\n  'Accept':'application/json',\n  'Authorization: Bearer <token>'\n};\n\nfetch('/api/v2/user/{id}/is_follower/',\n{\n  method: 'GET',\n  headers: headers\n})\n.then(function(res) {\n    return res.json();\n}).then(function(body) {\n    console.log(body);\n});\n\n"})})}),(0,n.jsx)(a.Z,{value:"bash",children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"# You can also use wget\ncurl -X GET /api/v2/user/{id}/is_follower/ \\\n  -H 'Accept: application/json'\n  -H \"Authorization: Bearer <token>\"\n"})})})]}),"\n",(0,n.jsx)(r.h2,{id:"responses",children:"Responses"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Status"}),(0,n.jsx)(r.th,{children:"Meaning"}),(0,n.jsx)(r.th,{children:"Description"}),(0,n.jsx)(r.th,{children:"Schema"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"200"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"https://tools.ietf.org/html/rfc7231#section-6.3.1",children:"OK"})}),(0,n.jsx)(r.td,{children:"Response status code"}),(0,n.jsx)(r.td,{children:"none"})]})})]}),"\n",(0,n.jsx)(r.h3,{id:"example-responses",children:"Example responses"}),"\n",(0,n.jsx)(l.Z,{defaultValue:"200",values:[{label:"200",value:"200"}],children:(0,n.jsx)(a.Z,{value:"200",children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-json",children:'{\n    "is_follower": "boolean"\n}\n'})})})})]})}function p(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},11151:(e,r,t)=>{t.d(r,{Z:()=>o,a:()=>a});var n=t(67294);const s={},l=n.createContext(s);function a(e){const r=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(l.Provider,{value:r},e.children)}}}]);