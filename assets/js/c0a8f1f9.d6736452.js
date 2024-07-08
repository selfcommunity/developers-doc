"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[74561],{32342:(e,n,r)=>{r.d(n,{Z:()=>i});r(67294);var t=r(36905);const a={tabItem:"tabItem_Ymn6"};var s=r(85893);function i(e){let{children:n,hidden:r,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.Z)(a.tabItem,i),hidden:r,children:n})}},71125:(e,n,r)=>{r.d(n,{Z:()=>_});var t=r(67294),a=r(36905),s=r(63735),i=r(16550),l=r(20613),d=r(34423),c=r(20636),o=r(99200);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:a}}=e;return{value:n,label:r,attributes:t,default:a}}))}(r);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function p(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:r}=e;const a=(0,i.k6)(),s=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,d._X)(s),(0,t.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function x(e){const{defaultValue:n,queryString:r=!1,groupId:a}=e,s=h(e),[i,d]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:s}))),[c,u]=m({queryString:r,groupId:a}),[x,j]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,s]=(0,o.Nk)(r);return[a,(0,t.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:a}),b=(()=>{const e=c??x;return p({value:e,tabValues:s})?e:null})();(0,l.Z)((()=>{b&&d(b)}),[b]);return{selectedValue:i,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);d(e),u(e),j(e)}),[u,j,s]),tabValues:s}}var j=r(5730);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=r(85893);function v(e){let{className:n,block:r,selectedValue:t,selectValue:i,tabValues:l}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),o=e=>{const n=e.currentTarget,r=d.indexOf(n),a=l[r].value;a!==t&&(c(n),i(a))},u=e=>{let n=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const r=d.indexOf(e.currentTarget)+1;n=d[r]??d[0];break}case"ArrowLeft":{const r=d.indexOf(e.currentTarget)-1;n=d[r]??d[d.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},n),children:l.map((e=>{let{value:n,label:r,attributes:s}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>d.push(e),onKeyDown:u,onClick:o,...s,className:(0,a.Z)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function g(e){let{lazy:n,children:r,selectedValue:a}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===a));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function y(e){const n=x(e);return(0,f.jsxs)("div",{className:(0,a.Z)("tabs-container",b.tabList),children:[(0,f.jsx)(v,{...e,...n}),(0,f.jsx)(g,{...e,...n})]})}function _(e){const n=(0,j.Z)();return(0,f.jsx)(y,{...e,children:u(e.children)},String(n))}},38475:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var t=r(85893),a=r(11151),s=r(71125),i=r(32342);const l={sidebar_label:"Create a Media",sidebar_position:1,title:"Create a Media"},d=void 0,c={id:"apireference/v2/media/create_a_media",title:"Create a Media",description:"This endpoint creates a Media",source:"@site/docs/apireference/v2/media/create_a_media.md",sourceDirName:"apireference/v2/media",slug:"/apireference/v2/media/create_a_media",permalink:"/docs/apireference/v2/media/create_a_media",draft:!1,unlisted:!1,editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/apireference/v2/media/create_a_media.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Create a Media",sidebar_position:1,title:"Create a Media"},sidebar:"apireferenceSidebar",previous:{title:"Click a specific Media",permalink:"/docs/apireference/v2/media/click_a_specific_media"},next:{title:"Delete a Media",permalink:"/docs/apireference/v2/media/delete_a_media"}},o={},u=[{value:"HTTP Request",id:"http-request",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Enumerated Values",id:"enumerated-values",level:4},{value:"Example Body Parameters",id:"example-body-parameters",level:4},{value:"Example Request",id:"example-request",level:3},{value:"Responses",id:"responses",level:2},{value:"Example responses",id:"example-responses",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"This endpoint creates a Media"}),"\n",(0,t.jsxs)(n.admonition,{type:"info",children:[(0,t.jsx)(n.p,{children:"The allowed types for this endpoint are:"}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"image"})," for image upload. The endpoint retrieve the image associated with the given url and creates an image media type."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"url"})," for url fetch. The endpoint retrieve metadata associated with the given url and create a preview."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"share"})," for sharing a community object (",(0,t.jsx)(n.a,{href:"/docs/apireference/v2/schemas/post",children:"Post"}),", ",(0,t.jsx)(n.a,{href:"/docs/apireference/v2/schemas/discussion",children:"Discussion"})," or ",(0,t.jsx)(n.a,{href:"/docs/apireference/v2/schemas/status",children:"Status"}),"). The community object can't contain a media of type share."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"embed"})," for external objects. The endpoint create an association with an external object using ",(0,t.jsx)(n.a,{href:"/docs/apireference/v2/schemas/embed",children:"Embed"})," format."]}),"\n"]}),"\n"]}),(0,t.jsxs)(n.p,{children:["If ",(0,t.jsx)(n.em,{children:"embed"})," parameter are set and no ",(0,t.jsx)(n.a,{href:"/docs/apireference/v2/schemas/embed",children:"Embed"})," with ",(0,t.jsx)(n.code,{children:"embed_type"})," - ",(0,t.jsx)(n.code,{children:"embed_id"})," are in the community database this endpoint create an ",(0,t.jsx)(n.a,{href:"/docs/apireference/v2/schemas/embed",children:"Embed"})," object with the metadata passed."]})]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"This operation requires authentication"})}),"\n",(0,t.jsx)(n.h2,{id:"http-request",children:"HTTP Request"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"POST /api/v2/media/"})}),"\n",(0,t.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Name"}),(0,t.jsx)(n.th,{children:"In"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Required"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"\xbb type"}),(0,t.jsx)(n.td,{children:"body"}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"true"}),(0,t.jsx)(n.td,{children:"The media type"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"\xbb url"}),(0,t.jsx)(n.td,{children:"body"}),(0,t.jsx)(n.td,{children:"string(uri)"}),(0,t.jsxs)(n.td,{children:["if ",(0,t.jsx)(n.code,{children:"type"})," is ",(0,t.jsx)(n.em,{children:"url"})]}),(0,t.jsx)(n.td,{children:"Required for type url"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"\xbb shared_object"}),(0,t.jsx)(n.td,{children:"body"}),(0,t.jsx)(n.td,{children:"integer"}),(0,t.jsxs)(n.td,{children:["if ",(0,t.jsx)(n.code,{children:"type"})," is ",(0,t.jsx)(n.em,{children:"share"})]}),(0,t.jsx)(n.td,{children:"Required for type share"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"\xbb embed"}),(0,t.jsx)(n.td,{children:"body"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/apireference/v2/schemas/embed",children:"Embed"})}),(0,t.jsxs)(n.td,{children:["if ",(0,t.jsx)(n.code,{children:"type"})," is ",(0,t.jsx)(n.em,{children:"embed"})]}),(0,t.jsx)(n.td,{children:"The embed object"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"enumerated-values",children:"Enumerated Values"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Value"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"\xbb type"}),(0,t.jsx)(n.td,{children:"image"}),(0,t.jsx)(n.td,{children:"Url media type"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"\xbb type"}),(0,t.jsx)(n.td,{children:"url"}),(0,t.jsx)(n.td,{children:"Url media type (used for any webpages, youtube etc.)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"\xbb type"}),(0,t.jsx)(n.td,{children:"embed"}),(0,t.jsx)(n.td,{children:"External resource"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"example-body-parameters",children:"Example Body Parameters"}),"\n","\n","\n",(0,t.jsx)(s.Z,{defaultValue:"json",values:[{label:"JSON",value:"json"}],children:(0,t.jsx)(i.Z,{value:"json",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "type": "string",\n  "url": "string(uri)",\n  "embed": {Embed}\n}\n'})})})}),"\n",(0,t.jsx)(n.h3,{id:"example-request",children:"Example Request"}),"\n",(0,t.jsxs)(s.Z,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"Bash",value:"bash"}],children:[(0,t.jsx)(i.Z,{value:"js",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"const inputBody = '{\n  \"type\": \"url\",\n  \"url\": \"https://example.com\",\n  \"embed\": null\n}';\nconst headers = {\n  'Content-Type':'application/json',\n  'Accept':'application/json',\n  'Authorization': 'Bearer {access_token}'\n};\n\nfetch('/api/v2/media/',\n{\n  method: 'POST',\n  body: inputBody,\n  headers: headers\n})\n.then(function(res) {\n    return res.json();\n}).then(function(body) {\n    console.log(body);\n});\n\n"})})}),(0,t.jsx)(i.Z,{value:"bash",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# You can also use wget\ncurl -X POST /api/v2/media/ \\\n  -H 'Content-Type: application/json' \\\n  -H 'Accept: application/json' \\\n  -H 'Authorization: Bearer {access_token}' \\\n  --data-raw '{\n      \"type\": \"string\",\n      \"url\": \"string(uri)\",\n  }'\n"})})})]}),"\n",(0,t.jsx)(n.h2,{id:"responses",children:"Responses"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Status"}),(0,t.jsx)(n.th,{children:"Meaning"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Schema"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"201"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"https://tools.ietf.org/html/rfc7231#section-6.3.2",children:"Created"})}),(0,t.jsx)(n.td,{children:"Response status code"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/apireference/v2/schemas/media",children:"Media"})})]})})]}),"\n",(0,t.jsx)(n.h3,{id:"example-responses",children:"Example responses"}),"\n",(0,t.jsx)(s.Z,{defaultValue:"200",values:[{label:"200",value:"200"}],children:(0,t.jsx)(i.Z,{value:"200",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "id": "integer",\n  "added_at": "string",\n  "type": "string",\n  "title": "string",\n  "description": "string",\n  "url": "string(uri)",\n  "image": "string",\n  "image_width": "integer",\n  "image_height": "integer",\n  "order": "integer",\n  "embed": {Embed}\n}\n'})})})})]})}function p(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>l,a:()=>i});var t=r(67294);const a={},s=t.createContext(a);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);