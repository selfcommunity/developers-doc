"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[34677],{32342:(e,t,n)=>{n.d(t,{Z:()=>a});n(67294);var r=n(36905);const s={tabItem:"tabItem_Ymn6"};var i=n(85893);function a(e){let{children:t,hidden:n,className:a}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.Z)(s.tabItem,a),hidden:n,children:t})}},71125:(e,t,n)=>{n.d(t,{Z:()=>_});var r=n(67294),s=n(36905),i=n(63735),a=n(16550),l=n(20613),c=n(34423),d=n(20636),o=n(99200);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:s}}=e;return{value:t,label:n,attributes:r,default:s}}))}(n);return function(e){const t=(0,d.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function x(e){let{queryString:t=!1,groupId:n}=e;const s=(0,a.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(s.location.search);t.set(i,e),s.replace({...s.location,search:t.toString()})}),[i,s])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,i=h(e),[a,c]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:i}))),[d,u]=x({queryString:n,groupId:s}),[m,j]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,i]=(0,o.Nk)(n);return[s,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:s}),f=(()=>{const e=d??m;return p({value:e,tabValues:i})?e:null})();(0,l.Z)((()=>{f&&c(f)}),[f]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),j(e)}),[u,j,i]),tabValues:i}}var j=n(5730);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(85893);function b(e){let{className:t,block:n,selectedValue:r,selectValue:a,tabValues:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),o=e=>{const t=e.currentTarget,n=c.indexOf(t),s=l[n].value;s!==r&&(d(t),a(s))},u=e=>{let t=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:i}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>c.push(e),onKeyDown:u,onClick:o,...i,className:(0,s.Z)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function g(e){let{lazy:t,children:n,selectedValue:s}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function y(e){const t=m(e);return(0,v.jsxs)("div",{className:(0,s.Z)("tabs-container",f.tabList),children:[(0,v.jsx)(b,{...e,...t}),(0,v.jsx)(g,{...e,...t})]})}function _(e){const t=(0,j.Z)();return(0,v.jsx)(y,{...e,children:u(e.children)},String(t))}},46776:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var r=n(85893),s=n(11151),i=n(71125),a=n(32342);const l={sidebar_label:"Search Custom Adv",sidebar_position:1,title:"Search Custom Adv"},c=void 0,d={id:"apireference/v2/customadv/search_custom_adv",title:"Search Custom Adv",description:"This endpoint performs search of a Custom Adv",source:"@site/docs/apireference/v2/customadv/search_custom_adv.md",sourceDirName:"apireference/v2/customadv",slug:"/apireference/v2/customadv/search_custom_adv",permalink:"/docs/apireference/v2/customadv/search_custom_adv",draft:!1,unlisted:!1,editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/apireference/v2/customadv/search_custom_adv.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Search Custom Adv",sidebar_position:1,title:"Search Custom Adv"},sidebar:"apireferenceSidebar",previous:{title:"Get All Custom adv",permalink:"/docs/apireference/v2/customadv/get_all_custom_adv"},next:{title:"Get a Specific Custom Menu",permalink:"/docs/apireference/v2/custommenu/get_a_specific_custom_menu"}},o={},u=[{value:"HTTP Request",id:"http-request",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Example Request",id:"example-request",level:3},{value:"Responses",id:"responses",level:2},{value:"Response Schema",id:"response-schema",level:3},{value:"Example responses",id:"example-responses",level:3}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"This endpoint performs search of a Custom Adv"}),"\n",(0,r.jsxs)(t.admonition,{type:"info",children:[(0,r.jsxs)(t.p,{children:["This operation requires authentication only if ",(0,r.jsx)(t.code,{children:"content_availability"})," community option is false."]}),(0,r.jsxs)(t.p,{children:["This operation requires ",(0,r.jsx)(t.code,{children:"custom_adv_enabled"})," community option set to true."]}),(0,r.jsxs)(t.p,{children:["If ",(0,r.jsx)(t.code,{children:"custom_adv_only_for_anonymous_users_enabled"})," community option is set to true the results will be returned only for anonymous users."]})]}),"\n",(0,r.jsx)(t.h2,{id:"http-request",children:"HTTP Request"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"GET /api/v2/custom_adv/search/"})}),"\n",(0,r.jsx)(t.h3,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"In"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Required"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"limit"}),(0,r.jsx)(t.td,{children:"query"}),(0,r.jsx)(t.td,{children:"integer"}),(0,r.jsx)(t.td,{children:"false"}),(0,r.jsx)(t.td,{children:"Number of results to return per adv"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"offset"}),(0,r.jsx)(t.td,{children:"query"}),(0,r.jsx)(t.td,{children:"integer"}),(0,r.jsx)(t.td,{children:"false"}),(0,r.jsx)(t.td,{children:"The initial index from which to return the results"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"position"}),(0,r.jsx)(t.td,{children:"query"}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"false"}),(0,r.jsx)(t.td,{children:"Filter using field position"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"category"}),(0,r.jsx)(t.td,{children:"query"}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"false"}),(0,r.jsx)(t.td,{children:"Filter using field category"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"active"}),(0,r.jsx)(t.td,{children:"query"}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"false"}),(0,r.jsx)(t.td,{children:"Filter using field active (only if user is administrator or editor)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"search"}),(0,r.jsx)(t.td,{children:"query"}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"false"}),(0,r.jsx)(t.td,{children:"A search term"})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"example-request",children:"Example Request"}),"\n","\n","\n",(0,r.jsxs)(i.Z,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"Bash",value:"bash"}],children:[(0,r.jsx)(a.Z,{value:"js",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"\nconst headers = {\n  'Accept':'application/json',\n  'Authorization': 'Bearer {access_token}'\n};\n\nfetch('/api/v2/custom_adv/search/',\n{\n  method: 'GET',\n  headers: headers\n})\n.then(function(res) {\n    return res.json();\n}).then(function(body) {\n    console.log(body);\n});\n\n"})})}),(0,r.jsx)(a.Z,{value:"bash",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"# You can also use wget\ncurl -X GET /api/v2/custom_adv/ \\\n  -H 'Accept: application/json' \\\n  -H 'Authorization: Bearer {access_token}'\n"})})})]}),"\n",(0,r.jsx)(t.h2,{id:"responses",children:"Responses"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Status"}),(0,r.jsx)(t.th,{children:"Meaning"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Schema"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"200"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://tools.ietf.org/html/rfc7231#section-6.3.1",children:"OK"})}),(0,r.jsx)(t.td,{children:"Response status code"}),(0,r.jsx)(t.td,{children:"Inline"})]})})]}),"\n",(0,r.jsx)(t.h3,{id:"response-schema",children:"Response Schema"}),"\n",(0,r.jsxs)(t.p,{children:["Status Code ",(0,r.jsx)(t.strong,{children:"200"})]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Required"}),(0,r.jsx)(t.th,{children:"Restrictions"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"\xbb count"}),(0,r.jsx)(t.td,{children:"integer"}),(0,r.jsx)(t.td,{children:"false"}),(0,r.jsx)(t.td,{children:"none"}),(0,r.jsx)(t.td,{children:"Total results count"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"\xbb next"}),(0,r.jsx)(t.td,{children:"string(uri)\xa6null"}),(0,r.jsx)(t.td,{children:"false"}),(0,r.jsx)(t.td,{children:"none"}),(0,r.jsx)(t.td,{children:"Next page url"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"\xbb previous"}),(0,r.jsx)(t.td,{children:"string(uri)\xa6null"}),(0,r.jsx)(t.td,{children:"false"}),(0,r.jsx)(t.td,{children:"none"}),(0,r.jsx)(t.td,{children:"Previous page url"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"\xbb results"}),(0,r.jsxs)(t.td,{children:["list(",(0,r.jsx)(t.a,{href:"/docs/apireference/v2/schemas/custom_adv",children:"Custom Adv"}),")"]}),(0,r.jsx)(t.td,{children:"false"}),(0,r.jsx)(t.td,{children:"none"}),(0,r.jsx)(t.td,{children:"List of results"})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"example-responses",children:"Example responses"}),"\n",(0,r.jsx)(i.Z,{defaultValue:"200",values:[{label:"200",value:"200"}],children:(0,r.jsx)(a.Z,{value:"200",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\n  "count": "integer",\n  "next": "string(uri)",\n  "previous": "string(uri)",\n  "results": [ \n    {\n      "id": "integer",\n      "position": "string",\n      "title": "string",\n      "link": "string(uri)",\n      "image": "string",\n      "embed_code": "string",\n      "active": "boolean",\n      "created_at": "string",\n      "lastmod_datetime": "string",\n      "category": "integer",\n      "created_by": "integer"\n    }\n  ]\n}\n'})})})})]})}function p(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>a});var r=n(67294);const s={},i=r.createContext(s);function a(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);