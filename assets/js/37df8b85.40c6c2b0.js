"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[88878],{32342:(e,n,t)=>{t.d(n,{Z:()=>l});t(67294);var r=t(36905);const s={tabItem:"tabItem_Ymn6"};var a=t(85893);function l(e){let{children:n,hidden:t,className:l}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.Z)(s.tabItem,l),hidden:t,children:n})}},71125:(e,n,t)=>{t.d(n,{Z:()=>k});var r=t(67294),s=t(36905),a=t(63735),l=t(16550),i=t(20613),d=t(34423),o=t(20636),c=t(99200);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:s}}=e;return{value:n,label:t,attributes:r,default:s}}))}(t);return function(e){const n=(0,o.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:t}=e;const s=(0,l.k6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,d._X)(a),(0,r.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(s.location.search);n.set(a,e),s.replace({...s.location,search:n.toString()})}),[a,s])]}function j(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,a=h(e),[l,d]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:a}))),[o,u]=x({queryString:t,groupId:s}),[j,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,a]=(0,c.Nk)(t);return[s,(0,r.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:s}),m=(()=>{const e=o??j;return p({value:e,tabValues:a})?e:null})();(0,i.Z)((()=>{m&&d(m)}),[m]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);d(e),u(e),f(e)}),[u,f,a]),tabValues:a}}var f=t(5730);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=t(85893);function v(e){let{className:n,block:t,selectedValue:r,selectValue:l,tabValues:i}=e;const d=[],{blockElementScrollPositionUntilNextRender:o}=(0,a.o5)(),c=e=>{const n=e.currentTarget,t=d.indexOf(n),s=i[t].value;s!==r&&(o(n),l(s))},u=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=d.indexOf(e.currentTarget)+1;n=d[t]??d[0];break}case"ArrowLeft":{const t=d.indexOf(e.currentTarget)-1;n=d[t]??d[d.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>d.push(e),onKeyDown:u,onClick:c,...a,className:(0,s.Z)("tabs__item",m.tabItem,a?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function g(e){let{lazy:n,children:t,selectedValue:s}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function y(e){const n=j(e);return(0,b.jsxs)("div",{className:(0,s.Z)("tabs-container",m.tabList),children:[(0,b.jsx)(v,{...e,...n}),(0,b.jsx)(g,{...e,...n})]})}function k(e){const n=(0,f.Z)();return(0,b.jsx)(y,{...e,children:u(e.children)},String(n))}},16858:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var r=t(85893),s=t(11151),a=t(71125),l=t(32342);const i={sidebar_label:"Chunk Upload Done",sidebar_position:1,title:"Chunk Upload Done"},d=void 0,o={id:"apireference/v2/privatemessage/chunk_upload_done",title:"Chunk Upload Done",description:"This endpoint finalizes the chunk upload and creates the File",source:"@site/docs/apireference/v2/privatemessage/chunk_upload_done.md",sourceDirName:"apireference/v2/privatemessage",slug:"/apireference/v2/privatemessage/chunk_upload_done",permalink:"/docs/apireference/v2/privatemessage/chunk_upload_done",draft:!1,unlisted:!1,editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/apireference/v2/privatemessage/chunk_upload_done.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Chunk Upload Done",sidebar_position:1,title:"Chunk Upload Done"},sidebar:"apireferenceSidebar",previous:{title:"Upvote for a Specific Post",permalink:"/docs/apireference/v2/post/upvote_for_a_specific_post"},next:{title:"Delete a Single Message",permalink:"/docs/apireference/v2/privatemessage/delete_a_single_message"}},c={},u=[{value:"HTTP Request",id:"http-request",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Example Body Parameters",id:"example-body-parameters",level:4},{value:"Example Request",id:"example-request",level:3},{value:"Responses",id:"responses",level:2},{value:"Response Schema",id:"response-schema",level:3},{value:"Example responses",id:"example-responses",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["This endpoint finalizes the chunk upload and creates the ",(0,r.jsx)(n.a,{href:"/docs/apireference/v2/schemas/file",children:"File"})]}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsx)(n.p,{children:"This operation requires authentication"})}),"\n",(0,r.jsx)(n.h2,{id:"http-request",children:"HTTP Request"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"POST /api/v2/pm/upload/?done/"})}),"\n",(0,r.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"In"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Required"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"done"}),(0,r.jsx)(n.td,{children:"query"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"true"}),(0,r.jsx)(n.td,{children:"Path string"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"uuid"}),(0,r.jsx)(n.td,{children:"body"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"true"}),(0,r.jsx)(n.td,{children:"The file uuid returned by the first chunk upload"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"filename"}),(0,r.jsx)(n.td,{children:"body"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"true"}),(0,r.jsx)(n.td,{children:"The name of the file to upload"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"totalparts"}),(0,r.jsx)(n.td,{children:"body"}),(0,r.jsx)(n.td,{children:"integer"}),(0,r.jsx)(n.td,{children:"false"}),(0,r.jsx)(n.td,{children:"The number of total parts of the chunk to upload"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"md5"}),(0,r.jsx)(n.td,{children:"body"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"false"}),(0,r.jsx)(n.td,{children:"The MD5 of the file to upload"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"filetype"}),(0,r.jsx)(n.td,{children:"body"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"false"}),(0,r.jsx)(n.td,{children:"The type of the file to upload"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"totalfilesize"}),(0,r.jsx)(n.td,{children:"body"}),(0,r.jsx)(n.td,{children:"integer"}),(0,r.jsx)(n.td,{children:"false"}),(0,r.jsx)(n.td,{children:"The size of the file to upload"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"example-body-parameters",children:"Example Body Parameters"}),"\n","\n","\n",(0,r.jsx)(a.Z,{defaultValue:"json",values:[{label:"JSON",value:"json"}],children:(0,r.jsx)(l.Z,{value:"json",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "uuid": "string",\n  "filename": "string"\n  "totalparts": "integer"\n}\n'})})})}),"\n",(0,r.jsx)(n.h3,{id:"example-request",children:"Example Request"}),"\n",(0,r.jsxs)(a.Z,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"Bash",value:"bash"}],children:[(0,r.jsx)(l.Z,{value:"js",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'const inputBody = \'{\n  "uuid": "string",\n  "filename": "string",\n  "totalparts": "integer"\n}\';\nconst headers = {\n  \'Authorization\': \'Bearer {access_token}\'\n};\n\nfetch(\'/api/v2/pm/upload/?done/\',\n{\n  method: \'POST\',\n  body: inputBody,\n  headers: headers\n})\n.then(function(res) {\n    return res.json();\n}).then(function(body) {\n    console.log(body);\n});\n\n'})})}),(0,r.jsx)(l.Z,{value:"bash",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# You can also use wget\ncurl -X POST /api/v2/pm/upload/?done/ \\\n  -H \"Authorization: Bearer {access_token}\"\n  --body-data 'uuid=5ffbebd3-60a7-4b35-ba39-74e7021b0e44&filename=compressed.tracemonkey-pldi-09.pdf&totalparts=5' \\\n   'https://apiv2.quentrix.com/api/v2/pm/upload/?done'\n"})})})]}),"\n",(0,r.jsx)(n.h2,{id:"responses",children:"Responses"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Status"}),(0,r.jsx)(n.th,{children:"Meaning"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Schema"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"200"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://tools.ietf.org/html/rfc7231#section-6.3.1",children:"OK"})}),(0,r.jsx)(n.td,{children:"Response status code"}),(0,r.jsx)(n.td,{children:"Inline"})]})})]}),"\n",(0,r.jsx)(n.h3,{id:"response-schema",children:"Response Schema"}),"\n",(0,r.jsxs)(n.p,{children:["Status Code ",(0,r.jsx)(n.strong,{children:"200"})]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Required"}),(0,r.jsx)(n.th,{children:"Restrictions"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"file_url"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"false"}),(0,r.jsx)(n.td,{children:"none"}),(0,r.jsx)(n.td,{children:"The file url"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"file_uuid"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"false"}),(0,r.jsx)(n.td,{children:"read-only"}),(0,r.jsx)(n.td,{children:"The file id"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"example-responses",children:"Example responses"}),"\n",(0,r.jsx)(a.Z,{defaultValue:"200",values:[{label:"200",value:"200"}],children:(0,r.jsx)(l.Z,{value:"200",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n    "file_url": "string",\n    "file_uuid": "string"\n}\n'})})})})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>l});var r=t(67294);const s={},a=r.createContext(s);function l(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);