"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[3198],{32342:(e,r,t)=>{t.d(r,{Z:()=>i});t(67294);var n=t(36905);const s={tabItem:"tabItem_Ymn6"};var a=t(85893);function i(e){let{children:r,hidden:t,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,n.Z)(s.tabItem,i),hidden:t,children:r})}},71125:(e,r,t)=>{t.d(r,{Z:()=>y});var n=t(67294),s=t(36905),a=t(63735),i=t(16550),l=t(20613),o=t(34423),c=t(20636),d=t(99200);function u(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:r,children:t}=e;return(0,n.useMemo)((()=>{const e=r??function(e){return u(e).map((e=>{let{props:{value:r,label:t,attributes:n,default:s}}=e;return{value:r,label:t,attributes:n,default:s}}))}(t);return function(e){const r=(0,c.l)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function p(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function x(e){let{queryString:r=!1,groupId:t}=e;const s=(0,i.k6)(),a=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,o._X)(a),(0,n.useCallback)((e=>{if(!a)return;const r=new URLSearchParams(s.location.search);r.set(a,e),s.replace({...s.location,search:r.toString()})}),[a,s])]}function f(e){const{defaultValue:r,queryString:t=!1,groupId:s}=e,a=h(e),[i,o]=(0,n.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:r,tabValues:a}))),[c,u]=x({queryString:t,groupId:s}),[f,j]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[s,a]=(0,d.Nk)(t);return[s,(0,n.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:s}),b=(()=>{const e=c??f;return p({value:e,tabValues:a})?e:null})();(0,l.Z)((()=>{b&&o(b)}),[b]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),j(e)}),[u,j,a]),tabValues:a}}var j=t(5730);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var m=t(85893);function v(e){let{className:r,block:t,selectedValue:n,selectValue:i,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.o5)(),d=e=>{const r=e.currentTarget,t=o.indexOf(r),s=l[t].value;s!==n&&(c(r),i(s))},u=e=>{let r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;r=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;r=o[t]??o[o.length-1];break}}r?.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},r),children:l.map((e=>{let{value:r,label:t,attributes:a}=e;return(0,m.jsx)("li",{role:"tab",tabIndex:n===r?0:-1,"aria-selected":n===r,ref:e=>o.push(e),onKeyDown:u,onClick:d,...a,className:(0,s.Z)("tabs__item",b.tabItem,a?.className,{"tabs__item--active":n===r}),children:t??r},r)}))})}function g(e){let{lazy:r,children:t,selectedValue:s}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(r){const e=a.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:a.map(((e,r)=>(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==s})))})}function _(e){const r=f(e);return(0,m.jsxs)("div",{className:(0,s.Z)("tabs-container",b.tabList),children:[(0,m.jsx)(v,{...e,...r}),(0,m.jsx)(g,{...e,...r})]})}function y(e){const r=(0,j.Z)();return(0,m.jsx)(_,{...e,children:u(e.children)},String(r))}},5451:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var n=t(85893),s=t(11151),a=t(71125),i=t(32342);const l={sidebar_label:"Create a social association",sidebar_position:200,title:"Create a social association"},o=void 0,c={id:"apireference/v2/user/create_a_social_association",title:"Create a social association",description:"This operation requires that the user is the same or has the admin role.",source:"@site/docs/apireference/v2/user/create_a_social_association.md",sourceDirName:"apireference/v2/user",slug:"/apireference/v2/user/create_a_social_association",permalink:"/docs/apireference/v2/user/create_a_social_association",draft:!1,unlisted:!1,editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/apireference/v2/user/create_a_social_association.md",tags:[],version:"current",sidebarPosition:200,frontMatter:{sidebar_label:"Create a social association",sidebar_position:200,title:"Create a social association"},sidebar:"apireferenceSidebar",previous:{title:"Set My Primary Avatar",permalink:"/docs/apireference/v2/user/set_my_primary_avatar"},next:{title:"Delete a social association",permalink:"/docs/apireference/v2/user/delete_a_social_association"}},d={},u=[{value:"HTTP Request",id:"http-request",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Example Request",id:"example-request",level:3},{value:"Responses",id:"responses",level:2},{value:"Example responses",id:"example-responses",level:3}];function h(e){const r={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.admonition,{type:"info",children:(0,n.jsx)(r.p,{children:"This operation requires that the user is the same or has the admin role."})}),"\n",(0,n.jsx)(r.h2,{id:"http-request",children:"HTTP Request"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:"POST /api/v2/user/provider/"})}),"\n",(0,n.jsx)(r.h3,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"In"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Required"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"user_id"}),(0,n.jsx)(r.td,{children:"body"}),(0,n.jsx)(r.td,{children:"integer"}),(0,n.jsx)(r.td,{children:"true"}),(0,n.jsx)(r.td,{children:"The user id"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"ext_id"}),(0,n.jsx)(r.td,{children:"body"}),(0,n.jsx)(r.td,{children:"string"}),(0,n.jsx)(r.td,{children:"true"}),(0,n.jsx)(r.td,{children:"A unique external id identifying the user"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"provider"}),(0,n.jsx)(r.td,{children:"body"}),(0,n.jsx)(r.td,{children:"string"}),(0,n.jsx)(r.td,{children:"true"}),(0,n.jsx)(r.td,{children:"The external provider of the ext_id"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"profile_url"}),(0,n.jsx)(r.td,{children:"body"}),(0,n.jsx)(r.td,{children:"string"}),(0,n.jsx)(r.td,{children:"false"}),(0,n.jsx)(r.td,{children:"An optional url to the social profile; only for providers other than external"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"metadata"}),(0,n.jsx)(r.td,{children:"body"}),(0,n.jsx)(r.td,{children:"string"}),(0,n.jsx)(r.td,{children:"false"}),(0,n.jsx)(r.td,{children:"An optional json only for the external provider"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"show_in_profile"}),(0,n.jsx)(r.td,{children:"body"}),(0,n.jsx)(r.td,{children:"bool"}),(0,n.jsx)(r.td,{children:"false"}),(0,n.jsx)(r.td,{children:"Default false. An optional flag to indicate if the social association can be showed in the user profile. Provider must not be 'external'"})]})]})]}),"\n",(0,n.jsx)(r.h3,{id:"example-request",children:"Example Request"}),"\n","\n","\n",(0,n.jsxs)(a.Z,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"Bash",value:"bash"}],children:[(0,n.jsx)(i.Z,{value:"js",children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-js",children:"const inputBody = '{\n  \"user_id\": \"integer\",\n  \"ext_id\": \"string\",\n  \"provider\": \"string\"\n}';\nconst headers = {\n  'Authorization':'Bearer {access_token}',\n  'Content-Type':'application/json',\n  'Accept':'application/json'\n};\n\nfetch('/api/v2/user/provider/',\n{\n  method: 'POST',\n  body: inputBody,\n  headers: headers\n})\n.then(function(res) {\n    return res.json();\n}).then(function(body) {\n    console.log(body);\n});\n\n"})})}),(0,n.jsx)(i.Z,{value:"bash",children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:'# You can also use wget\ncurl -X POST /api/v2/user/provider/ \\\n  -H \'Authorization: Bearer {access_token}\'\n  -H \'Content-Type: application/json\' \\\n  -H \'Accept: application/json\'\n  -d \'{\n  "user_id": "integer",\n  "ext_id": "string",\n  "provider": "string"\n }\'\n'})})})]}),"\n",(0,n.jsx)(r.h2,{id:"responses",children:"Responses"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Status"}),(0,n.jsx)(r.th,{children:"Meaning"}),(0,n.jsx)(r.th,{children:"Schema"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"201"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"https://tools.ietf.org/html/rfc7231#section-6.3.2",children:"Created"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/docs/apireference/v2/schemas/user_external_provider",children:"User External Provider"})})]})})]}),"\n",(0,n.jsx)(r.h3,{id:"example-responses",children:"Example responses"}),"\n",(0,n.jsx)(a.Z,{defaultValue:"201",values:[{label:"201",value:"201"}],children:(0,n.jsx)(i.Z,{value:"201",children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-json",children:'{\n    "user_id": "integer",\n    "provider": "string",\n    "ext_id": "integer",\n    "profile_url": "string(uri)",\n    "show_in_profile":  "boolean"\n}\n'})})})})]})}function p(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},11151:(e,r,t)=>{t.d(r,{Z:()=>l,a:()=>i});var n=t(67294);const s={},a=n.createContext(s);function i(e){const r=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(a.Provider,{value:r},e.children)}}}]);