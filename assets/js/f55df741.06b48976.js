"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[12693],{32342:(e,n,t)=>{t.d(n,{Z:()=>l});t(67294);var r=t(36905);const s={tabItem:"tabItem_Ymn6"};var a=t(85893);function l(e){let{children:n,hidden:t,className:l}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.Z)(s.tabItem,l),hidden:t,children:n})}},71125:(e,n,t)=>{t.d(n,{Z:()=>q});var r=t(67294),s=t(36905),a=t(63735),l=t(16550),i=t(20613),c=t(34423),o=t(20636),u=t(99200);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:s}}=e;return{value:n,label:t,attributes:r,default:s}}))}(t);return function(e){const n=(0,o.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:t}=e;const s=(0,l.k6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,c._X)(a),(0,r.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(s.location.search);n.set(a,e),s.replace({...s.location,search:n.toString()})}),[a,s])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,a=h(e),[l,c]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:a}))),[o,d]=x({queryString:t,groupId:s}),[f,j]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,a]=(0,u.Nk)(t);return[s,(0,r.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:s}),m=(()=>{const e=o??f;return p({value:e,tabValues:a})?e:null})();(0,i.Z)((()=>{m&&c(m)}),[m]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),j(e)}),[d,j,a]),tabValues:a}}var j=t(5730);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=t(85893);function v(e){let{className:n,block:t,selectedValue:r,selectValue:l,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,a.o5)(),u=e=>{const n=e.currentTarget,t=c.indexOf(n),s=i[t].value;s!==r&&(o(n),l(s))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>c.push(e),onKeyDown:d,onClick:u,...a,className:(0,s.Z)("tabs__item",m.tabItem,a?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function _(e){let{lazy:n,children:t,selectedValue:s}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function g(e){const n=f(e);return(0,b.jsxs)("div",{className:(0,s.Z)("tabs-container",m.tabList),children:[(0,b.jsx)(v,{...e,...n}),(0,b.jsx)(_,{...e,...n})]})}function q(e){const n=(0,j.Z)();return(0,b.jsx)(g,{...e,children:d(e.children)},String(n))}},65996:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var r=t(85893),s=t(11151),a=t(71125),l=t(32342);const i={sidebar_label:"Cancel a Request Connection",sidebar_position:32,title:"Cancel a Request Connection"},c=void 0,o={id:"apireference/v2/user/cancel_a_request_connection",title:"Cancel a Request Connection",description:"This endpoint cancels a request connection for a user",source:"@site/docs/apireference/v2/user/cancel_a_request_connection.md",sourceDirName:"apireference/v2/user",slug:"/apireference/v2/user/cancel_a_request_connection",permalink:"/docs/apireference/v2/user/cancel_a_request_connection",draft:!1,unlisted:!1,editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/apireference/v2/user/cancel_a_request_connection.md",tags:[],version:"current",sidebarPosition:32,frontMatter:{sidebar_label:"Cancel a Request Connection",sidebar_position:32,title:"Cancel a Request Connection"},sidebar:"apireferenceSidebar",previous:{title:"Cancel a Rejected Connection",permalink:"/docs/apireference/v2/user/cancel_a_rejected_connection"},next:{title:"Reject a Connection Request",permalink:"/docs/apireference/v2/user/reject_a_connection_request"}},u={},d=[{value:"HTTP Request",id:"http-request",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Example Request",id:"example-request",level:3},{value:"Responses",id:"responses",level:2},{value:"Connection Status values",id:"connection-status-values",level:4},{value:"Example responses",id:"example-responses",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"This endpoint cancels a request connection for a user"}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsx)(n.p,{children:"This operation requires the community to be set to friendship mode."})}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsx)(n.p,{children:"This operation requires authentication."})}),"\n",(0,r.jsx)(n.h2,{id:"http-request",children:"HTTP Request"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"POST /api/v2/user/{id}/connection/cancel_request/"})}),"\n",(0,r.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"In"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Required"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"id"}),(0,r.jsx)(n.td,{children:"path"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"true"}),(0,r.jsx)(n.td,{children:"A unique integer value identifying this user"})]})})]}),"\n",(0,r.jsx)(n.h3,{id:"example-request",children:"Example Request"}),"\n","\n","\n",(0,r.jsxs)(a.Z,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"Bash",value:"bash"}],children:[(0,r.jsx)(l.Z,{value:"js",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const headers = {\n  'Content-Type':'application/x-www-form-urlencoded',\n  'Accept':'application/json',\n  'Authorization: Bearer <token>'\n};\n\nfetch('/api/v2/user/{id}/connection/cancel_request/',\n{\n  method: 'POST',\n  headers: headers\n})\n.then(function(res) {\n    return res.json();\n}).then(function(body) {\n    console.log(body);\n});\n\n"})})}),(0,r.jsx)(l.Z,{value:"bash",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# You can also use wget\ncurl -X POST /api/v2/user/{id}/connection/cancel_request/ \\\n  -H 'Content-Type: application/x-www-form-urlencoded' \\\n  -H 'Accept: application/json'\n  -H \"Authorization: Bearer <token>\"\n"})})})]}),"\n",(0,r.jsx)(n.h2,{id:"responses",children:"Responses"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Status"}),(0,r.jsx)(n.th,{children:"Meaning"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Schema"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"200"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://tools.ietf.org/html/rfc7231#section-6.3.1",children:"OK"})}),(0,r.jsx)(n.td,{children:"Response status code"}),(0,r.jsx)(n.td,{children:"Inline"})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"connection-status-values",children:"Connection Status values"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Value"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"connection_status"}),(0,r.jsx)(n.td,{children:"connected"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"connection_status"}),(0,r.jsx)(n.td,{children:"sent_connection_request"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"connection_status"}),(0,r.jsx)(n.td,{children:"received_connection_request"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"connection_status"}),(0,r.jsx)(n.td,{children:"null"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"example-responses",children:"Example responses"}),"\n",(0,r.jsx)(a.Z,{defaultValue:"200",values:[{label:"200",value:"200"}],children:(0,r.jsx)(l.Z,{value:"200",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n    "connection_status": "string"\n}\n'})})})})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>l});var r=t(67294);const s={},a=r.createContext(s);function l(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);