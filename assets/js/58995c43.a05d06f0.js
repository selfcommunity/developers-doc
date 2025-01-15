"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[39977],{32342:(e,n,r)=>{r.d(n,{Z:()=>i});r(67294);var t=r(36905);const a={tabItem:"tabItem_Ymn6"};var s=r(85893);function i(e){let{children:n,hidden:r,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.Z)(a.tabItem,i),hidden:r,children:n})}},71125:(e,n,r)=>{r.d(n,{Z:()=>_});var t=r(67294),a=r(36905),s=r(63735),i=r(16550),c=r(20613),l=r(34423),o=r(20636),u=r(99200);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:a}}=e;return{value:n,label:r,attributes:t,default:a}}))}(r);return function(e){const n=(0,o.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function h(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:r}=e;const a=(0,i.k6)(),s=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,l._X)(s),(0,t.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function m(e){const{defaultValue:n,queryString:r=!1,groupId:a}=e,s=p(e),[i,l]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:s}))),[o,d]=f({queryString:r,groupId:a}),[m,b]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,s]=(0,u.Nk)(r);return[a,(0,t.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:a}),v=(()=>{const e=o??m;return h({value:e,tabValues:s})?e:null})();(0,c.Z)((()=>{v&&l(v)}),[v]);return{selectedValue:i,selectValue:(0,t.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),b(e)}),[d,b,s]),tabValues:s}}var b=r(5730);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=r(85893);function j(e){let{className:n,block:r,selectedValue:t,selectValue:i,tabValues:c}=e;const l=[],{blockElementScrollPositionUntilNextRender:o}=(0,s.o5)(),u=e=>{const n=e.currentTarget,r=l.indexOf(n),a=c[r].value;a!==t&&(o(n),i(a))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;n=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;n=l[r]??l[l.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},n),children:c.map((e=>{let{value:n,label:r,attributes:s}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>l.push(e),onKeyDown:d,onClick:u,...s,className:(0,a.Z)("tabs__item",v.tabItem,s?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function y(e){let{lazy:n,children:r,selectedValue:a}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===a));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function g(e){const n=m(e);return(0,x.jsxs)("div",{className:(0,a.Z)("tabs-container",v.tabList),children:[(0,x.jsx)(j,{...e,...n}),(0,x.jsx)(y,{...e,...n})]})}function _(e){const n=(0,b.Z)();return(0,x.jsx)(g,{...e,children:d(e.children)},String(n))}},59894:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>o,toc:()=>d});var t=r(85893),a=r(11151),s=r(71125),i=r(32342);const c={sidebar_label:"Get a Specific Dynamic Preference",sidebar_position:1,title:"Get a Specific Dynamic Preference"},l=void 0,o={id:"apireference/v2/dynamicpreference/get_a_specific_dynamic_preference",title:"Get a Specific Dynamic Preference",description:"This endpoint retrieves a specific dynamic preference.",source:"@site/docs/apireference/v2/dynamicpreference/get_a_specific_dynamic_preference.md",sourceDirName:"apireference/v2/dynamicpreference",slug:"/apireference/v2/dynamicpreference/get_a_specific_dynamic_preference",permalink:"/docs/apireference/v2/dynamicpreference/get_a_specific_dynamic_preference",draft:!1,unlisted:!1,editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/apireference/v2/dynamicpreference/get_a_specific_dynamic_preference.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Get a Specific Dynamic Preference",sidebar_position:1,title:"Get a Specific Dynamic Preference"},sidebar:"apireferenceSidebar",previous:{title:"Upvote for a Specific Poll Choice",permalink:"/docs/apireference/v2/discussion/upvote_for_a_specific_pollchoice"},next:{title:"Get All Dynamic Preferences",permalink:"/docs/apireference/v2/dynamicpreference/get_all_dynamic_preferences"}},u={},d=[{value:"HTTP Request",id:"http-request",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Example Request",id:"example-request",level:3},{value:"Responses",id:"responses",level:2},{value:"Example responses",id:"example-responses",level:3}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"This endpoint retrieves a specific dynamic preference."}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"This operation does not require authentication"})}),"\n",(0,t.jsx)(n.h2,{id:"http-request",children:"HTTP Request"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"GET /api/v2/dynamic_preference/{id}/"})}),"\n",(0,t.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Name"}),(0,t.jsx)(n.th,{children:"In"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Required"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"id"}),(0,t.jsx)(n.td,{children:"path"}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"true"}),(0,t.jsx)(n.td,{children:"A unique integer value identifying this dynamic preference"})]})})]}),"\n",(0,t.jsx)(n.h3,{id:"example-request",children:"Example Request"}),"\n","\n","\n",(0,t.jsxs)(s.Z,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"Bash",value:"bash"}],children:[(0,t.jsx)(i.Z,{value:"js",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"const headers = {\n  'Accept':'application/json',\n  'Authorization': 'Bearer {access_token}'\n};\n\nfetch('/api/v2/dynamic_preference/{id}/',\n{\n  method: 'GET',\n\n  headers: headers\n})\n.then(function(res) {\n    return res.json();\n}).then(function(body) {\n    console.log(body);\n});\n\n"})})}),(0,t.jsx)(i.Z,{value:"bash",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# You can also use wget\ncurl -X GET /api/v2/dynamic_preference/{id}/ \\\n  -H 'Accept: application/json'\n  -H 'Authorization: Bearer {access_token}'\n"})})})]}),"\n",(0,t.jsx)(n.h2,{id:"responses",children:"Responses"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Status"}),(0,t.jsx)(n.th,{children:"Meaning"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Schema"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"200"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"https://tools.ietf.org/html/rfc7231#section-6.3.1",children:"OK"})}),(0,t.jsx)(n.td,{children:"Response status code"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/apireference/v2/schemas/dynamic_preference",children:"DynamicPreference"})})]})})]}),"\n",(0,t.jsx)(n.h3,{id:"example-responses",children:"Example responses"}),"\n",(0,t.jsx)(s.Z,{defaultValue:"200",values:[{label:"200",value:"200"}],children:(0,t.jsx)(i.Z,{value:"200",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "id": "integer",\n  "section": "string",\n  "name": "string",\n  "value": "string"\n}\n'})})})})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>c,a:()=>i});var t=r(67294);const a={},s=t.createContext(a);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);