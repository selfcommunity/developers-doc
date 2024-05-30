"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[36315],{32342:(e,r,n)=>{n.d(r,{Z:()=>o});n(67294);var t=n(36905);const s={tabItem:"tabItem_Ymn6"};var a=n(85893);function o(e){let{children:r,hidden:n,className:o}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,t.Z)(s.tabItem,o),hidden:n,children:r})}},71125:(e,r,n)=>{n.d(r,{Z:()=>_});var t=n(67294),s=n(36905),a=n(63735),o=n(16550),l=n(20613),i=n(34423),c=n(20636),d=n(99200);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:r,children:n}=e;return(0,t.useMemo)((()=>{const e=r??function(e){return u(e).map((e=>{let{props:{value:r,label:n,attributes:t,default:s}}=e;return{value:r,label:n,attributes:t,default:s}}))}(n);return function(e){const r=(0,c.l)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,n])}function p(e){let{value:r,tabValues:n}=e;return n.some((e=>e.value===r))}function m(e){let{queryString:r=!1,groupId:n}=e;const s=(0,o.k6)(),a=function(e){let{queryString:r=!1,groupId:n}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:r,groupId:n});return[(0,i._X)(a),(0,t.useCallback)((e=>{if(!a)return;const r=new URLSearchParams(s.location.search);r.set(a,e),s.replace({...s.location,search:r.toString()})}),[a,s])]}function v(e){const{defaultValue:r,queryString:n=!1,groupId:s}=e,a=h(e),[o,i]=(0,t.useState)((()=>function(e){let{defaultValue:r,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const t=n.find((e=>e.default))??n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:r,tabValues:a}))),[c,u]=m({queryString:n,groupId:s}),[v,x]=function(e){let{groupId:r}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(r),[s,a]=(0,d.Nk)(n);return[s,(0,t.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:s}),f=(()=>{const e=c??v;return p({value:e,tabValues:a})?e:null})();(0,l.Z)((()=>{f&&i(f)}),[f]);return{selectedValue:o,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),x(e)}),[u,x,a]),tabValues:a}}var x=n(5730);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=n(85893);function j(e){let{className:r,block:n,selectedValue:t,selectValue:o,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.o5)(),d=e=>{const r=e.currentTarget,n=i.indexOf(r),s=l[n].value;s!==t&&(c(r),o(s))},u=e=>{let r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;r=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;r=i[n]??i[i.length-1];break}}r?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},r),children:l.map((e=>{let{value:r,label:n,attributes:a}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:t===r?0:-1,"aria-selected":t===r,ref:e=>i.push(e),onKeyDown:u,onClick:d,...a,className:(0,s.Z)("tabs__item",f.tabItem,a?.className,{"tabs__item--active":t===r}),children:n??r},r)}))})}function g(e){let{lazy:r,children:n,selectedValue:s}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(r){const e=a.find((e=>e.props.value===s));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:a.map(((e,r)=>(0,t.cloneElement)(e,{key:r,hidden:e.props.value!==s})))})}function y(e){const r=v(e);return(0,b.jsxs)("div",{className:(0,s.Z)("tabs-container",f.tabList),children:[(0,b.jsx)(j,{...e,...r}),(0,b.jsx)(g,{...e,...r})]})}function _(e){const r=(0,x.Z)();return(0,b.jsx)(y,{...e,children:u(e.children)},String(r))}},17752:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var t=n(85893),s=n(11151),a=n(71125),o=n(32342);const l={sidebar_label:"Add/Remove Score to a User",sidebar_position:1,title:"Add/Remove Score to a User"},i=void 0,c={id:"apireference/v2/score/addremove_score_to_user",title:"Add/Remove Score to a User",description:"This endpoint adds/removes score to a user.",source:"@site/docs/apireference/v2/score/addremove_score_to_user.md",sourceDirName:"apireference/v2/score",slug:"/apireference/v2/score/addremove_score_to_user",permalink:"/docs/apireference/v2/score/addremove_score_to_user",draft:!1,unlisted:!1,editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/apireference/v2/score/addremove_score_to_user.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Add/Remove Score to a User",sidebar_position:1,title:"Add/Remove Score to a User"},sidebar:"apireferenceSidebar",previous:{title:"Search a Reaction",permalink:"/docs/apireference/v2/reaction/search_a_reaction"},next:{title:"Get All Scores",permalink:"/docs/apireference/v2/score/get_all_scores"}},d={},u=[{value:"HTTP Request",id:"http-request",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Example Body Parameters",id:"example-body-parameters",level:4},{value:"Example Request",id:"example-request",level:3},{value:"Responses",id:"responses",level:2},{value:"Example responses",id:"example-responses",level:3}];function h(e){const r={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.p,{children:"This endpoint adds/removes score to a user."}),"\n",(0,t.jsx)(r.admonition,{type:"info",children:(0,t.jsx)(r.p,{children:"This operation requires admin or moderation role."})}),"\n",(0,t.jsx)(r.h2,{id:"http-request",children:"HTTP Request"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.code,{children:"POST /api/v2/score/"})}),"\n",(0,t.jsx)(r.h3,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Name"}),(0,t.jsx)(r.th,{children:"In"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{children:"Required"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"user"}),(0,t.jsx)(r.td,{children:"body"}),(0,t.jsx)(r.td,{children:"integer"}),(0,t.jsx)(r.td,{children:"true"}),(0,t.jsx)(r.td,{children:"A unique integer value identifying the user"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"score"}),(0,t.jsx)(r.td,{children:"body"}),(0,t.jsx)(r.td,{children:"integer"}),(0,t.jsx)(r.td,{children:"true"}),(0,t.jsx)(r.td,{children:"Positive or negative integer value"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"comment"}),(0,t.jsx)(r.td,{children:"body"}),(0,t.jsx)(r.td,{children:"string"}),(0,t.jsx)(r.td,{children:"false"}),(0,t.jsx)(r.td,{children:"A comment about this operation (only for internal usage)"})]})]})]}),"\n",(0,t.jsx)(r.h4,{id:"example-body-parameters",children:"Example Body Parameters"}),"\n","\n","\n",(0,t.jsx)(a.Z,{defaultValue:"json",values:[{label:"JSON",value:"json"}],children:(0,t.jsx)(o.Z,{value:"json",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-json",children:'{\n  "comment": "string",\n  "user": "integer",\n  "score": "integer"\n}\n'})})})}),"\n",(0,t.jsx)(r.h3,{id:"example-request",children:"Example Request"}),"\n",(0,t.jsxs)(a.Z,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"Bash",value:"bash"}],children:[(0,t.jsx)(o.Z,{value:"js",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-js",children:"const inputBody = '{\n  \"user\": \"integer\",\n  \"score\": \"integer\",\n  \"comment\": \"string\"\n}';\nconst headers = {\n  'Content-Type':'application/x-www-form-urlencoded',\n  'Accept':'application/json',\n  'Authorization': 'Bearer {access_token}'\n};\n\nfetch('/api/v2/score/',\n{\n  method: 'POST',\n  body: inputBody,\n  headers: headers\n})\n.then(function(res) {\n    return res.json();\n}).then(function(body) {\n    console.log(body);\n});\n\n"})})}),(0,t.jsx)(o.Z,{value:"bash",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:'# You can also use wget\ncurl -X POST /api/v2/score/ \\\n  -H \'Content-Type: application/json\' \\\n  -H \'Accept: application/json\' \\\n  -H \'Authorization: Bearer {access_token}\' \\\n  --data-raw \'{\n      "user": "integer",\n      "score": "integer",\n      "comment": "string"\n  }\'\n'})})})]}),"\n",(0,t.jsx)(r.h2,{id:"responses",children:"Responses"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Status"}),(0,t.jsx)(r.th,{children:"Meaning"}),(0,t.jsx)(r.th,{children:"Description"}),(0,t.jsx)(r.th,{children:"Schema"})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"201"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://tools.ietf.org/html/rfc7231#section-6.3.2",children:"Created"})}),(0,t.jsx)(r.td,{children:"Response status code"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/apireference/v2/schemas/score",children:"Score"})})]})})]}),"\n",(0,t.jsx)(r.h3,{id:"example-responses",children:"Example responses"}),"\n",(0,t.jsx)(a.Z,{defaultValue:"200",values:[{label:"200",value:"200"}],children:(0,t.jsx)(o.Z,{value:"200",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-json",children:'{\n  "id": "integer",\n  "user": {\n    "id": "integer",\n    "username": "string",\n    "real_name": "string",\n    "email": "string",\n    "description": "string",\n    "avatar": "string",\n    "reputation": "integer"\n  },\n  "score": "string",\n  "reputation_type": "integer",\n  "reputation_type_description": "string",\n  "comment": "string"\n}\n'})})})})]})}function p(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},11151:(e,r,n)=>{n.d(r,{Z:()=>l,a:()=>o});var t=n(67294);const s={},a=t.createContext(s);function o(e){const r=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(a.Provider,{value:r},e.children)}}}]);