"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[70593],{32342:(e,t,r)=>{r.d(t,{Z:()=>i});r(67294);var n=r(36905);const s={tabItem:"tabItem_Ymn6"};var l=r(85893);function i(e){let{children:t,hidden:r,className:i}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,n.Z)(s.tabItem,i),hidden:r,children:t})}},71125:(e,t,r)=>{r.d(t,{Z:()=>_});var n=r(67294),s=r(36905),l=r(63735),i=r(16550),a=r(20613),o=r(34423),c=r(20636),d=r(99200);function u(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:s}}=e;return{value:t,label:r,attributes:n,default:s}}))}(r);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function x(e){let{queryString:t=!1,groupId:r}=e;const s=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,o._X)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(s.location.search);t.set(l,e),s.replace({...s.location,search:t.toString()})}),[l,s])]}function g(e){const{defaultValue:t,queryString:r=!1,groupId:s}=e,l=h(e),[i,o]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[c,u]=x({queryString:r,groupId:s}),[g,j]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,l]=(0,d.Nk)(r);return[s,(0,n.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:s}),f=(()=>{const e=c??g;return p({value:e,tabValues:l})?e:null})();(0,a.Z)((()=>{f&&o(f)}),[f]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),j(e)}),[u,j,l]),tabValues:l}}var j=r(5730);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var m=r(85893);function b(e){let{className:t,block:r,selectedValue:n,selectValue:i,tabValues:a}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),d=e=>{const t=e.currentTarget,r=o.indexOf(t),s=a[r].value;s!==n&&(c(t),i(s))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=o.indexOf(e.currentTarget)+1;t=o[r]??o[0];break}case"ArrowLeft":{const r=o.indexOf(e.currentTarget)-1;t=o[r]??o[o.length-1];break}}t?.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":r},t),children:a.map((e=>{let{value:t,label:r,attributes:l}=e;return(0,m.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>o.push(e),onKeyDown:u,onClick:d,...l,className:(0,s.Z)("tabs__item",f.tabItem,l?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function v(e){let{lazy:t,children:r,selectedValue:s}=e;const l=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:l.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function y(e){const t=g(e);return(0,m.jsxs)("div",{className:(0,s.Z)("tabs-container",f.tabList),children:[(0,m.jsx)(b,{...e,...t}),(0,m.jsx)(v,{...e,...t})]})}function _(e){const t=(0,j.Z)();return(0,m.jsx)(y,{...e,children:u(e.children)},String(t))}},37954:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var n=r(85893),s=r(11151),l=r(71125),i=r(32342);const a={sidebar_label:"Get Followed Categories",sidebar_position:1,title:"Get Followed Categories"},o=void 0,c={id:"apireference/v2/category/get_followed_categories",title:"Get Followed Categories",description:"This endpoint retrieves all followed categories by the user.",source:"@site/docs/apireference/v2/category/get_followed_categories.md",sourceDirName:"apireference/v2/category",slug:"/apireference/v2/category/get_followed_categories",permalink:"/docs/apireference/v2/category/get_followed_categories",draft:!1,unlisted:!1,editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/apireference/v2/category/get_followed_categories.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Get Followed Categories",sidebar_position:1,title:"Get Followed Categories"},sidebar:"apireferenceSidebar",previous:{title:"Get Category's Trending Followers",permalink:"/docs/apireference/v2/category/get_categorys_trending_followers"},next:{title:"Get Popular Categories",permalink:"/docs/apireference/v2/category/get_popular_categories"}},d={},u=[{value:"HTTP Request",id:"http-request",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Example Request",id:"example-request",level:3},{value:"Responses",id:"responses",level:2},{value:"Response Schema",id:"response-schema",level:3},{value:"Example responses",id:"example-responses",level:3}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"This endpoint retrieves all followed categories by the user."}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsx)(t.p,{children:"This operation requires authentication"})}),"\n",(0,n.jsx)(t.h2,{id:"http-request",children:"HTTP Request"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:"GET /api/v2/category/followed/"})}),"\n",(0,n.jsx)(t.h3,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"In"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Required"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"limit"}),(0,n.jsx)(t.td,{children:"query"}),(0,n.jsx)(t.td,{children:"integer"}),(0,n.jsx)(t.td,{children:"false"}),(0,n.jsx)(t.td,{children:"Number of results to return per page"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"offset"}),(0,n.jsx)(t.td,{children:"query"}),(0,n.jsx)(t.td,{children:"integer"}),(0,n.jsx)(t.td,{children:"false"}),(0,n.jsx)(t.td,{children:"The initial index from which to return the results"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"search"}),(0,n.jsx)(t.td,{children:"query"}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{children:"false"}),(0,n.jsx)(t.td,{children:"A search term"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"active"}),(0,n.jsx)(t.td,{children:"query"}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{children:"false"}),(0,n.jsx)(t.td,{children:"Filter using field active"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"deleted"}),(0,n.jsx)(t.td,{children:"query"}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{children:"false"}),(0,n.jsx)(t.td,{children:"Filter using field deleted"})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"example-request",children:"Example Request"}),"\n","\n","\n",(0,n.jsxs)(l.Z,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"Bash",value:"bash"}],children:[(0,n.jsx)(i.Z,{value:"js",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"const headers = {\n  'Accept':'application/json',\n  'Authorization': 'Bearer {access_token}'\n};\n\nfetch('/api/v2/category/followed/',\n{\n  method: 'GET',\n\n  headers: headers\n})\n.then(function(res) {\n    return res.json();\n}).then(function(body) {\n    console.log(body);\n});\n\n"})})}),(0,n.jsx)(i.Z,{value:"bash",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"# You can also use wget\ncurl -X GET /api/v2/category/followed/ \\\n  -H 'Accept: application/json'\n  -H 'Authorization: Bearer {access_token}'\n"})})})]}),"\n",(0,n.jsx)(t.h2,{id:"responses",children:"Responses"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Status"}),(0,n.jsx)(t.th,{children:"Meaning"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Schema"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"200"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://tools.ietf.org/html/rfc7231#section-6.3.1",children:"OK"})}),(0,n.jsx)(t.td,{children:"Response status code"}),(0,n.jsx)(t.td,{children:"Inline"})]})})]}),"\n",(0,n.jsx)(t.h3,{id:"response-schema",children:"Response Schema"}),"\n",(0,n.jsxs)(t.p,{children:["Status Code ",(0,n.jsx)(t.strong,{children:"200"})]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Required"}),(0,n.jsx)(t.th,{children:"Restrictions"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"\xbb count"}),(0,n.jsx)(t.td,{children:"integer"}),(0,n.jsx)(t.td,{children:"false"}),(0,n.jsx)(t.td,{children:"none"}),(0,n.jsx)(t.td,{children:"Total results count"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"\xbb next"}),(0,n.jsx)(t.td,{children:"string(uri)\xa6null"}),(0,n.jsx)(t.td,{children:"false"}),(0,n.jsx)(t.td,{children:"none"}),(0,n.jsx)(t.td,{children:"Next page url"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"\xbb previous"}),(0,n.jsx)(t.td,{children:"string(uri)\xa6null"}),(0,n.jsx)(t.td,{children:"false"}),(0,n.jsx)(t.td,{children:"none"}),(0,n.jsx)(t.td,{children:"Previous page url"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"\xbb results"}),(0,n.jsxs)(t.td,{children:["list(",(0,n.jsx)(t.a,{href:"/docs/apireference/v2/schemas/category",children:"Category"}),")"]}),(0,n.jsx)(t.td,{children:"false"}),(0,n.jsx)(t.td,{children:"none"}),(0,n.jsx)(t.td,{children:"List of results"})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"example-responses",children:"Example responses"}),"\n",(0,n.jsx)(l.Z,{defaultValue:"200",values:[{label:"200",value:"200"}],children:(0,n.jsx)(i.Z,{value:"200",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'{\n  "count": "integer",\n  "next": "string(uri)",\n  "previous": "string(uri)",\n  "results": [\n    {\n      "id": "integer",\n      "tags": [{Tag}],\n      "followed": "boolean",\n      "order": "integer",\n      "name": "string",\n      "name_synonyms": "string",\n      "slug": "string",\n      "slogan": "string",\n      "html_info": "string",\n      "seo_title": "string",\n      "seo_description": "string",\n      "auto_follow": "string",\n      "active": "boolean",\n      "image_original": "string",\n      "image_bigger": "string",\n      "image_big": "string",\n      "image_medium": "string",\n      "image_small": "string",\n      "emotional_image_original": "string",\n      "emotional_image_position": "integer",\n      "lastmod_datetime": "string",\n      "stream_order_by": "string",\n      "followers_counter": "integer",\n      "parents": ["integer"]\n    }\n  ]\n}\n'})})})})]})}function p(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},11151:(e,t,r)=>{r.d(t,{Z:()=>a,a:()=>i});var n=r(67294);const s={},l=n.createContext(s);function i(e){const t=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);