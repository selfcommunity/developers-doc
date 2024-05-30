"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[22742],{32342:(e,n,r)=>{r.d(n,{Z:()=>i});r(67294);var t=r(36905);const a={tabItem:"tabItem_Ymn6"};var s=r(85893);function i(e){let{children:n,hidden:r,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.Z)(a.tabItem,i),hidden:r,children:n})}},71125:(e,n,r)=>{r.d(n,{Z:()=>_});var t=r(67294),a=r(36905),s=r(63735),i=r(16550),l=r(20613),o=r(34423),u=r(20636),c=r(99200);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:a}}=e;return{value:n,label:r,attributes:t,default:a}}))}(r);return function(e){const n=(0,u.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function h(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function b(e){let{queryString:n=!1,groupId:r}=e;const a=(0,i.k6)(),s=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,o._X)(s),(0,t.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function m(e){const{defaultValue:n,queryString:r=!1,groupId:a}=e,s=p(e),[i,o]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:s}))),[u,d]=b({queryString:r,groupId:a}),[m,f]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,s]=(0,c.Nk)(r);return[a,(0,t.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:a}),g=(()=>{const e=u??m;return h({value:e,tabValues:s})?e:null})();(0,l.Z)((()=>{g&&o(g)}),[g]);return{selectedValue:i,selectValue:(0,t.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),f(e)}),[d,f,s]),tabValues:s}}var f=r(5730);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=r(85893);function v(e){let{className:n,block:r,selectedValue:t,selectValue:i,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.o5)(),c=e=>{const n=e.currentTarget,r=o.indexOf(n),a=l[r].value;a!==t&&(u(n),i(a))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=o.indexOf(e.currentTarget)+1;n=o[r]??o[0];break}case"ArrowLeft":{const r=o.indexOf(e.currentTarget)-1;n=o[r]??o[o.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},n),children:l.map((e=>{let{value:n,label:r,attributes:s}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>o.push(e),onKeyDown:d,onClick:c,...s,className:(0,a.Z)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function j(e){let{lazy:n,children:r,selectedValue:a}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===a));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function y(e){const n=m(e);return(0,x.jsxs)("div",{className:(0,a.Z)("tabs-container",g.tabList),children:[(0,x.jsx)(v,{...e,...n}),(0,x.jsx)(j,{...e,...n})]})}function _(e){const n=(0,f.Z)();return(0,x.jsx)(y,{...e,children:d(e.children)},String(n))}},73733:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var t=r(85893),a=r(11151),s=r(71125),i=r(32342);const l={sidebar_label:"Update a Group",sidebar_position:1,title:"Update a Group"},o=void 0,u={id:"apireference/v2/group/update_a_group",title:"Update a Group",description:"This endpoint updates a specific group.",source:"@site/docs/apireference/v2/group/update_a_group.md",sourceDirName:"apireference/v2/group",slug:"/apireference/v2/group/update_a_group",permalink:"/docs/apireference/v2/group/update_a_group",draft:!1,unlisted:!1,editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/apireference/v2/group/update_a_group.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Update a Group",sidebar_position:1,title:"Update a Group"},sidebar:"apireferenceSidebar",previous:{title:"Unsubscribe From Group",permalink:"/docs/apireference/v2/group/unsubscribe_from_group"},next:{title:"Check Incubator Subscription",permalink:"/docs/apireference/v2/incubator/check_incubator_subscribed"}},c={},d=[{value:"HTTP Request",id:"http-request",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Example Body Parameters",id:"example-body-parameters",level:4},{value:"Example Request",id:"example-request",level:3},{value:"Responses",id:"responses",level:2},{value:"Example responses",id:"example-responses",level:3}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"This endpoint updates a specific group."}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"This operation requires authentication and to be the group manager."})}),"\n",(0,t.jsx)(n.h2,{id:"http-request",children:"HTTP Request"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"PUT /api/v2/group/{id}/"})}),"\n",(0,t.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Name"}),(0,t.jsx)(n.th,{children:"In"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Required"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"id"}),(0,t.jsx)(n.td,{children:"path"}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"true"}),(0,t.jsx)(n.td,{children:"A unique integer value identifying this group"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"body"}),(0,t.jsx)(n.td,{children:"body"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/apireference/v2/schemas/group",children:"Group"})}),(0,t.jsx)(n.td,{children:"false"}),(0,t.jsx)(n.td,{children:"The request body(group params)"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"example-body-parameters",children:"Example Body Parameters"}),"\n","\n","\n",(0,t.jsx)(s.Z,{defaultValue:"json",values:[{label:"JSON",value:"json"}],children:(0,t.jsx)(i.Z,{value:"json",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n    "name": "string",\n    "description": "string",\n    "color": "string",\n    "visible": boolean\n}\n'})})})}),"\n",(0,t.jsx)(n.h3,{id:"example-request",children:"Example Request"}),"\n",(0,t.jsxs)(s.Z,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"Bash",value:"bash"}],children:[(0,t.jsx)(i.Z,{value:"js",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"const inputBody = '{\n    \"name\": \"string\",\n    \"description\": \"string\",\n    \"color\": \"string\",\n    \"visible\": boolean\n}';\nconst headers = {\n  'Content-Type':'application/x-www-form-urlencoded',\n  'Accept':'application/json',\n  'Authorization': 'Bearer {access_token}'\n};\n\nfetch('/api/v2/group/{id}/',\n{\n  method: 'PUT',\n  body: inputBody,\n  headers: headers\n})\n.then(function(res) {\n    return res.json();\n}).then(function(body) {\n    console.log(body);\n});\n\n"})})}),(0,t.jsx)(i.Z,{value:"bash",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# You can also use wget\ncurl -X PUT /api/v2/group/{id}/ \\\n  -H 'Content-Type: application/x-www-form-urlencoded' \\\n  -H 'Accept: application/json'\n  -H 'Authorization: Bearer {access_token}'\n  --DATA '{body}'\n"})})})]}),"\n",(0,t.jsx)(n.h2,{id:"responses",children:"Responses"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Status"}),(0,t.jsx)(n.th,{children:"Meaning"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Schema"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"200"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"https://tools.ietf.org/html/rfc7231#section-6.3.1",children:"OK"})}),(0,t.jsx)(n.td,{children:"Response status code"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/apireference/v2/schemas/group",children:"Group"})})]})})]}),"\n",(0,t.jsx)(n.h3,{id:"example-responses",children:"Example responses"}),"\n",(0,t.jsx)(s.Z,{defaultValue:"200",values:[{label:"200",value:"200"}],children:(0,t.jsx)(i.Z,{value:"200",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n      "id": "integer",\n      "name": "string",\n      "description": "string",\n      "slug": "string",\n      "color": "string",\n      "privacy": {},\n      "visible": "boolean",\n      "active": "boolean",\n      "subscription_status": {},\n      "subscribed": "boolean",\n      "image_bigger": "string",\n      "image_big": "string",\n      "image_medium": "string",\n      "image_small": "string",\n      "emotional_image": "string",\n      "emotional_image_position": "integer",\n      "subscribers_counter": "integer"\n      "created_at": "string",\n      "created_by": {},\n      "managed_by": {}\n}\n'})})})})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>l,a:()=>i});var t=r(67294);const a={},s=t.createContext(a);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);