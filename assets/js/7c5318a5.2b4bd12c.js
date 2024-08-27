"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[53348],{32342:(e,t,n)=>{n.d(t,{Z:()=>l});n(67294);var r=n(36905);const s={tabItem:"tabItem_Ymn6"};var i=n(85893);function l(e){let{children:t,hidden:n,className:l}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.Z)(s.tabItem,l),hidden:n,children:t})}},71125:(e,t,n)=>{n.d(t,{Z:()=>_});var r=n(67294),s=n(36905),i=n(63735),l=n(16550),a=n(20613),d=n(34423),c=n(20636),o=n(99200);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:s}}=e;return{value:t,label:n,attributes:r,default:s}}))}(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function x(e){let{queryString:t=!1,groupId:n}=e;const s=(0,l.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,d._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(s.location.search);t.set(i,e),s.replace({...s.location,search:t.toString()})}),[i,s])]}function j(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,i=h(e),[l,d]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:i}))),[c,u]=x({queryString:n,groupId:s}),[j,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,i]=(0,o.Nk)(n);return[s,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:s}),v=(()=>{const e=c??j;return p({value:e,tabValues:i})?e:null})();(0,a.Z)((()=>{v&&d(v)}),[v]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);d(e),u(e),f(e)}),[u,f,i]),tabValues:i}}var f=n(5730);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=n(85893);function m(e){let{className:t,block:n,selectedValue:r,selectValue:l,tabValues:a}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),o=e=>{const t=e.currentTarget,n=d.indexOf(t),s=a[n].value;s!==r&&(c(t),l(s))},u=e=>{let t=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const n=d.indexOf(e.currentTarget)+1;t=d[n]??d[0];break}case"ArrowLeft":{const n=d.indexOf(e.currentTarget)-1;t=d[n]??d[d.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},t),children:a.map((e=>{let{value:t,label:n,attributes:i}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>d.push(e),onKeyDown:u,onClick:o,...i,className:(0,s.Z)("tabs__item",v.tabItem,i?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function g(e){let{lazy:t,children:n,selectedValue:s}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function y(e){const t=j(e);return(0,b.jsxs)("div",{className:(0,s.Z)("tabs-container",v.tabList),children:[(0,b.jsx)(m,{...e,...t}),(0,b.jsx)(g,{...e,...t})]})}function _(e){const t=(0,f.Z)();return(0,b.jsx)(y,{...e,children:u(e.children)},String(t))}},96494:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>d,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var r=n(85893),s=n(11151),i=n(71125),l=n(32342);const a={sidebar_label:"Get Event Feed",sidebar_position:1,title:"Get Event Feed"},d=void 0,c={id:"apireference/v2/event/get_event_feed",title:"Get Event Feed",description:"This endpoint retrieves the event feed.",source:"@site/docs/apireference/v2/event/get_event_feed.md",sourceDirName:"apireference/v2/event",slug:"/apireference/v2/event/get_event_feed",permalink:"/docs/apireference/v2/event/get_event_feed",draft:!1,unlisted:!1,editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/apireference/v2/event/get_event_feed.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Get Event Feed",sidebar_position:1,title:"Get Event Feed"},sidebar:"apireferenceSidebar",previous:{title:"Generic Suggested Event Users",permalink:"/docs/apireference/v2/event/generic_event_suggested_users"},next:{title:"Get Event Going Users",permalink:"/docs/apireference/v2/event/get_event_going_users"}},o={},u=[{value:"HTTP Request",id:"http-request",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Example Request",id:"example-request",level:3},{value:"Responses",id:"responses",level:2},{value:"Response Schema",id:"response-schema",level:3}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"This endpoint retrieves the event feed."}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsx)(t.p,{children:"This operation requires authentication and being subscribed to the event."})}),"\n",(0,r.jsx)(t.h2,{id:"http-request",children:"HTTP Request"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"GET /api/v2/event/{id}/feed/"})}),"\n",(0,r.jsx)(t.h3,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"In"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Required"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"id"}),(0,r.jsx)(t.td,{children:"path"}),(0,r.jsx)(t.td,{children:"integer"}),(0,r.jsx)(t.td,{children:"true"}),(0,r.jsx)(t.td,{children:"A unique integer value identifying this event"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"limit"}),(0,r.jsx)(t.td,{children:"query"}),(0,r.jsx)(t.td,{children:"integer"}),(0,r.jsx)(t.td,{children:"false"}),(0,r.jsx)(t.td,{children:"Number of results to return per page"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"offset"}),(0,r.jsx)(t.td,{children:"query"}),(0,r.jsx)(t.td,{children:"integer"}),(0,r.jsx)(t.td,{children:"false"}),(0,r.jsx)(t.td,{children:"The initial index from which to return the results"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ordering"}),(0,r.jsx)(t.td,{children:"query"}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"false"}),(0,r.jsx)(t.td,{children:"Order the contents of the feed; valid values are: recent, relevance and last_activity; default value is recent"})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"example-request",children:"Example Request"}),"\n","\n","\n",(0,r.jsxs)(i.Z,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"Bash",value:"bash"}],children:[(0,r.jsx)(l.Z,{value:"js",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"const headers = {\n  'Accept':'application/json',\n  'Authorization': 'Bearer {access_token}'\n};\n\nfetch('/api/v2/event/{id}/feed/',\n{\n  method: 'GET',\n\n  headers: headers\n})\n.then(function(res) {\n    return res.json();\n}).then(function(body) {\n    console.log(body);\n});\n\n"})})}),(0,r.jsx)(l.Z,{value:"bash",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"# You can also use wget\ncurl -X GET /api/v2/event/{id}/feed/ \\\n  -H 'Accept: application/json'\n  -H 'Authorization: Bearer {access_token}'\n"})})})]}),"\n",(0,r.jsx)(t.h2,{id:"responses",children:"Responses"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Status"}),(0,r.jsx)(t.th,{children:"Meaning"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Schema"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"200"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://tools.ietf.org/html/rfc7231#section-6.3.1",children:"OK"})}),(0,r.jsx)(t.td,{children:"Response status code"}),(0,r.jsx)(t.td,{children:"Inline"})]})})]}),"\n",(0,r.jsx)(t.h3,{id:"response-schema",children:"Response Schema"}),"\n",(0,r.jsxs)(t.p,{children:["Status Code ",(0,r.jsx)(t.strong,{children:"200"})]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Required"}),(0,r.jsx)(t.th,{children:"Restrictions"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"\xbb count"}),(0,r.jsx)(t.td,{children:"integer"}),(0,r.jsx)(t.td,{children:"false"}),(0,r.jsx)(t.td,{children:"none"}),(0,r.jsx)(t.td,{children:"Total results count"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"\xbb next"}),(0,r.jsx)(t.td,{children:"string(uri)\xa6null"}),(0,r.jsx)(t.td,{children:"false"}),(0,r.jsx)(t.td,{children:"none"}),(0,r.jsx)(t.td,{children:"Next page url"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"\xbb previous"}),(0,r.jsx)(t.td,{children:"string(uri)\xa6null"}),(0,r.jsx)(t.td,{children:"false"}),(0,r.jsx)(t.td,{children:"none"}),(0,r.jsx)(t.td,{children:"Previous page url"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"\xbb results"}),(0,r.jsxs)(t.td,{children:["[",(0,r.jsx)(t.a,{href:"/docs/apireference/v2/schemas/feed",children:"Feed"}),"]"]}),(0,r.jsx)(t.td,{children:"false"}),(0,r.jsx)(t.td,{children:"none"}),(0,r.jsx)(t.td,{children:"List of results"})]})]})]})]})}function p(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>l});var r=n(67294);const s={},i=r.createContext(s);function l(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);