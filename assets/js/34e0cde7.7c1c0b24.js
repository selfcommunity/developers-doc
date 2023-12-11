"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[57946],{32342:(e,n,t)=>{t.d(n,{Z:()=>a});t(67294);var r=t(36905);const s={tabItem:"tabItem_Ymn6"};var l=t(85893);function a(e){let{children:n,hidden:t,className:a}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,r.Z)(s.tabItem,a),hidden:t,children:n})}},71125:(e,n,t)=>{t.d(n,{Z:()=>_});var r=t(67294),s=t(36905),l=t(63735),a=t(16550),i=t(20613),c=t(34423),d=t(20636),o=t(99200);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:s}}=e;return{value:n,label:t,attributes:r,default:s}}))}(t);return function(e){const n=(0,d.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const s=(0,a.k6)(),l=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,c._X)(l),(0,r.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(s.location.search);n.set(l,e),s.replace({...s.location,search:n.toString()})}),[l,s])]}function x(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,l=h(e),[a,c]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:l}))),[d,u]=m({queryString:t,groupId:s}),[x,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,l]=(0,o.Nk)(t);return[s,(0,r.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:s}),j=(()=>{const e=d??x;return p({value:e,tabValues:l})?e:null})();(0,i.Z)((()=>{j&&c(j)}),[j]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),b(e)}),[u,b,l]),tabValues:l}}var b=t(5730);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=t(85893);function v(e){let{className:n,block:t,selectedValue:r,selectValue:a,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),o=e=>{const n=e.currentTarget,t=c.indexOf(n),s=i[t].value;s!==r&&(d(n),a(s))},u=e=>{let n=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:l}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>c.push(e),onKeyDown:u,onClick:o,...l,className:(0,s.Z)("tabs__item",j.tabItem,l?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function g(e){let{lazy:n,children:t,selectedValue:s}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function y(e){const n=x(e);return(0,f.jsxs)("div",{className:(0,s.Z)("tabs-container",j.tabList),children:[(0,f.jsx)(v,{...e,...n}),(0,f.jsx)(g,{...e,...n})]})}function _(e){const n=(0,b.Z)();return(0,f.jsx)(y,{...e,children:u(e.children)},String(n))}},47830:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>d,toc:()=>u});var r=t(85893),s=t(11151),l=t(71125),a=t(32342);const i={sidebar_label:"Get All Embeds",sidebar_position:1,title:"Get All Embeds"},c=void 0,d={id:"apireference/v2/embed/get_all_embeds",title:"Get All Embeds",description:"This endpoint retrieves all embeds.",source:"@site/docs/apireference/v2/embed/get_all_embeds.md",sourceDirName:"apireference/v2/embed",slug:"/apireference/v2/embed/get_all_embeds",permalink:"/docs/apireference/v2/embed/get_all_embeds",draft:!1,unlisted:!1,editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/apireference/v2/embed/get_all_embeds.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Get All Embeds",sidebar_position:1,title:"Get All Embeds"},sidebar:"apireferenceSidebar",previous:{title:"Get a Specific Dynamic Preference",permalink:"/docs/apireference/v2/dynamicpreference/get_a_specific_dynamic_preference"},next:{title:"Create an Embed",permalink:"/docs/apireference/v2/embed/create_an_embed"}},o={},u=[{value:"HTTP Request",id:"http-request",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Example Request",id:"example-request",level:3},{value:"Responses",id:"responses",level:2},{value:"Response Schema",id:"response-schema",level:3},{value:"Example responses",id:"example-responses",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"This endpoint retrieves all embeds."}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["This operation requires authentication only if ",(0,r.jsx)(n.code,{children:"content_availability"})," community option is false"]})}),"\n",(0,r.jsx)(n.h2,{id:"http-request",children:"HTTP Request"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"GET /api/v2/embed/"})}),"\n",(0,r.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"In"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Required"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"limit"}),(0,r.jsx)(n.td,{children:"query"}),(0,r.jsx)(n.td,{children:"integer"}),(0,r.jsx)(n.td,{children:"false"}),(0,r.jsx)(n.td,{children:"Number of results to return per page"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"offset"}),(0,r.jsx)(n.td,{children:"query"}),(0,r.jsx)(n.td,{children:"integer"}),(0,r.jsx)(n.td,{children:"false"}),(0,r.jsx)(n.td,{children:"The initial index from which to return the results"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"example-request",children:"Example Request"}),"\n","\n","\n",(0,r.jsxs)(l.Z,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"Bash",value:"bash"}],children:[(0,r.jsx)(a.Z,{value:"js",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const headers = {\n  'Accept':'application/json',\n  'Authorization': 'Bearer {access_token}'\n};\n\nfetch('/api/v2/embed/',\n{\n  method: 'GET',\n\n  headers: headers\n})\n.then(function(res) {\n    return res.json();\n}).then(function(body) {\n    console.log(body);\n});\n\n"})})}),(0,r.jsx)(a.Z,{value:"bash",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# You can also use wget\ncurl -X GET /api/v2/embed/ \\\n  -H 'Accept: application/json' \\\n  -H 'Authorization: Bearer {access_token}'\n"})})})]}),"\n",(0,r.jsx)(n.h2,{id:"responses",children:"Responses"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Status"}),(0,r.jsx)(n.th,{children:"Meaning"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Schema"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"200"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://tools.ietf.org/html/rfc7231#section-6.3.1",children:"OK"})}),(0,r.jsx)(n.td,{children:"Response status code"}),(0,r.jsx)(n.td,{children:"Inline"})]})})]}),"\n",(0,r.jsx)(n.h3,{id:"response-schema",children:"Response Schema"}),"\n",(0,r.jsxs)(n.p,{children:["Status Code ",(0,r.jsx)(n.strong,{children:"200"})]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Required"}),(0,r.jsx)(n.th,{children:"Restrictions"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\xbb count"}),(0,r.jsx)(n.td,{children:"integer"}),(0,r.jsx)(n.td,{children:"false"}),(0,r.jsx)(n.td,{children:"none"}),(0,r.jsx)(n.td,{children:"Total results count"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\xbb next"}),(0,r.jsx)(n.td,{children:"string(uri)\xa6null"}),(0,r.jsx)(n.td,{children:"false"}),(0,r.jsx)(n.td,{children:"none"}),(0,r.jsx)(n.td,{children:"Next page url"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\xbb previous"}),(0,r.jsx)(n.td,{children:"string(uri)\xa6null"}),(0,r.jsx)(n.td,{children:"false"}),(0,r.jsx)(n.td,{children:"none"}),(0,r.jsx)(n.td,{children:"Previous page url"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\xbb results"}),(0,r.jsxs)(n.td,{children:["list(",(0,r.jsx)(n.a,{href:"/docs/apireference/v2/schemas/embed",children:"Embed"}),")"]}),(0,r.jsx)(n.td,{children:"false"}),(0,r.jsx)(n.td,{children:"none"}),(0,r.jsx)(n.td,{children:"List of results"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"example-responses",children:"Example responses"}),"\n",(0,r.jsx)(l.Z,{defaultValue:"200",values:[{label:"200",value:"200"}],children:(0,r.jsx)(a.Z,{value:"200",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "count": "integer",\n  "next": "string(uri)",\n  "previous": "string(uri)",\n  "results": [\n    {\n      "id": "integer",\n      "embed_type": "string",\n      "embed_id": "string",\n      "url": "string",\n      "metadata": {}\n    }\n  ]\n}\n'})})})})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>a});var r=t(67294);const s={},l=r.createContext(s);function a(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);