"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[22168],{32342:(e,n,r)=>{r.d(n,{Z:()=>l});r(67294);var t=r(36905);const s={tabItem:"tabItem_Ymn6"};var a=r(85893);function l(e){let{children:n,hidden:r,className:l}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,t.Z)(s.tabItem,l),hidden:r,children:n})}},71125:(e,n,r)=>{r.d(n,{Z:()=>_});var t=r(67294),s=r(36905),a=r(63735),l=r(16550),i=r(20613),d=r(34423),c=r(20636),o=r(99200);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:s}}=e;return{value:n,label:r,attributes:t,default:s}}))}(r);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function p(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:r}=e;const s=(0,l.k6)(),a=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,d._X)(a),(0,t.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(s.location.search);n.set(a,e),s.replace({...s.location,search:n.toString()})}),[a,s])]}function m(e){const{defaultValue:n,queryString:r=!1,groupId:s}=e,a=h(e),[l,d]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:a}))),[c,u]=x({queryString:r,groupId:s}),[m,b]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,a]=(0,o.Nk)(r);return[s,(0,t.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:s}),j=(()=>{const e=c??m;return p({value:e,tabValues:a})?e:null})();(0,i.Z)((()=>{j&&d(j)}),[j]);return{selectedValue:l,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);d(e),u(e),b(e)}),[u,b,a]),tabValues:a}}var b=r(5730);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=r(85893);function v(e){let{className:n,block:r,selectedValue:t,selectValue:l,tabValues:i}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.o5)(),o=e=>{const n=e.currentTarget,r=d.indexOf(n),s=i[r].value;s!==t&&(c(n),l(s))},u=e=>{let n=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const r=d.indexOf(e.currentTarget)+1;n=d[r]??d[0];break}case"ArrowLeft":{const r=d.indexOf(e.currentTarget)-1;n=d[r]??d[d.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":r},n),children:i.map((e=>{let{value:n,label:r,attributes:a}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>d.push(e),onKeyDown:u,onClick:o,...a,className:(0,s.Z)("tabs__item",j.tabItem,a?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function g(e){let{lazy:n,children:r,selectedValue:s}=e;const a=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===s));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function y(e){const n=m(e);return(0,f.jsxs)("div",{className:(0,s.Z)("tabs-container",j.tabList),children:[(0,f.jsx)(v,{...e,...n}),(0,f.jsx)(g,{...e,...n})]})}function _(e){const n=(0,b.Z)();return(0,f.jsx)(y,{...e,children:u(e.children)},String(n))}},54258:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var t=r(85893),s=r(11151),a=r(71125),l=r(32342);const i={sidebar_label:"Search an Embed",sidebar_position:1,title:"Search an Embed"},d=void 0,c={id:"apireference/v2/embed/search_an_embed",title:"Search an Embed",description:"This endpoint performs search to Embeds",source:"@site/docs/apireference/v2/embed/search_an_embed.md",sourceDirName:"apireference/v2/embed",slug:"/apireference/v2/embed/search_an_embed",permalink:"/docs/apireference/v2/embed/search_an_embed",draft:!1,unlisted:!1,editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/apireference/v2/embed/search_an_embed.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Search an Embed",sidebar_position:1,title:"Search an Embed"},sidebar:"apireferenceSidebar",previous:{title:"Patch a Specific Embed",permalink:"/docs/apireference/v2/embed/patch_a_specific_embed"},next:{title:"Update a specific Embed",permalink:"/docs/apireference/v2/embed/update_a_specific_embed"}},o={},u=[{value:"HTTP Request",id:"http-request",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Example Request",id:"example-request",level:3},{value:"Responses",id:"responses",level:2},{value:"Response Schema",id:"response-schema",level:3},{value:"Example responses",id:"example-responses",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"This endpoint performs search to Embeds"}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["This operation requires authentication only if ",(0,t.jsx)(n.code,{children:"content_availability"})," community option is false"]})}),"\n",(0,t.jsx)(n.h2,{id:"http-request",children:"HTTP Request"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"GET /api/v2/embed/search/"})}),"\n",(0,t.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Name"}),(0,t.jsx)(n.th,{children:"In"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Required"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"embed_type"}),(0,t.jsx)(n.td,{children:"query"}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"false"}),(0,t.jsx)(n.td,{children:"embed_type"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"embed_id"}),(0,t.jsx)(n.td,{children:"query"}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"false"}),(0,t.jsx)(n.td,{children:"embed_id"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"limit"}),(0,t.jsx)(n.td,{children:"query"}),(0,t.jsx)(n.td,{children:"integer"}),(0,t.jsx)(n.td,{children:"false"}),(0,t.jsx)(n.td,{children:"Number of results to return per page"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"offset"}),(0,t.jsx)(n.td,{children:"query"}),(0,t.jsx)(n.td,{children:"integer"}),(0,t.jsx)(n.td,{children:"false"}),(0,t.jsx)(n.td,{children:"The initial index from which to return the results"})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"example-request",children:"Example Request"}),"\n","\n","\n",(0,t.jsxs)(a.Z,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"Bash",value:"bash"}],children:[(0,t.jsx)(l.Z,{value:"js",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"const headers = {\n  'Accept':'application/json',\n  'Authorization': 'Bearer {access_token}'\n};\n\nfetch('/api/v2/embed/search/',\n{\n  method: 'GET',\n\n  headers: headers\n})\n.then(function(res) {\n    return res.json();\n}).then(function(body) {\n    console.log(body);\n});\n\n"})})}),(0,t.jsx)(l.Z,{value:"bash",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# You can also use wget\ncurl -X GET /api/v2/embed/search/ \\\n  -H 'Accept: application/json' \\\n  -H 'Authorization: Bearer {access_token}'\n"})})})]}),"\n",(0,t.jsx)(n.h2,{id:"responses",children:"Responses"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Status"}),(0,t.jsx)(n.th,{children:"Meaning"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Schema"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"200"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"https://tools.ietf.org/html/rfc7231#section-6.3.1",children:"OK"})}),(0,t.jsx)(n.td,{children:"Response status code"}),(0,t.jsx)(n.td,{children:"Inline"})]})})]}),"\n",(0,t.jsx)(n.h3,{id:"response-schema",children:"Response Schema"}),"\n",(0,t.jsxs)(n.p,{children:["Status Code ",(0,t.jsx)(n.strong,{children:"200"})]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Name"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Required"}),(0,t.jsx)(n.th,{children:"Restrictions"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"\xbb count"}),(0,t.jsx)(n.td,{children:"integer"}),(0,t.jsx)(n.td,{children:"false"}),(0,t.jsx)(n.td,{children:"none"}),(0,t.jsx)(n.td,{children:"Total results count"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"\xbb next"}),(0,t.jsx)(n.td,{children:"string(uri)\xa6null"}),(0,t.jsx)(n.td,{children:"false"}),(0,t.jsx)(n.td,{children:"none"}),(0,t.jsx)(n.td,{children:"Next page url"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"\xbb previous"}),(0,t.jsx)(n.td,{children:"string(uri)\xa6null"}),(0,t.jsx)(n.td,{children:"false"}),(0,t.jsx)(n.td,{children:"none"}),(0,t.jsx)(n.td,{children:"Previous page url"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"\xbb results"}),(0,t.jsxs)(n.td,{children:["list(",(0,t.jsx)(n.a,{href:"/docs/apireference/v2/schemas/embed",children:"Embed"}),")"]}),(0,t.jsx)(n.td,{children:"false"}),(0,t.jsx)(n.td,{children:"none"}),(0,t.jsx)(n.td,{children:"List of results"})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"example-responses",children:"Example responses"}),"\n",(0,t.jsx)(a.Z,{defaultValue:"200",values:[{label:"200",value:"200"}],children:(0,t.jsx)(l.Z,{value:"200",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "count": "integer",\n  "next": "string(uri)",\n  "previous": "string(uri)",\n  "results": [\n    {\n      "id": "integer",\n      "embed_type": "string",\n      "embed_id": "string",\n      "url": "string(uri)",\n      "metadata": {}\n    }\n  ]\n}\n'})})})})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>i,a:()=>l});var t=r(67294);const s={},a=t.createContext(s);function l(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);