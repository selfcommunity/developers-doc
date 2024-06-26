"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[15819],{32342:(e,n,t)=>{t.d(n,{Z:()=>l});t(67294);var s=t(36905);const r={tabItem:"tabItem_Ymn6"};var i=t(85893);function l(e){let{children:n,hidden:t,className:l}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,s.Z)(r.tabItem,l),hidden:t,children:n})}},71125:(e,n,t)=>{t.d(n,{Z:()=>_});var s=t(67294),r=t(36905),i=t(63735),l=t(16550),a=t(20613),d=t(34423),o=t(20636),c=t(99200);function u(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:s,default:r}}=e;return{value:n,label:t,attributes:s,default:r}}))}(t);return function(e){const n=(0,o.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function x(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function j(e){let{queryString:n=!1,groupId:t}=e;const r=(0,l.k6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,d._X)(i),(0,s.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(r.location.search);n.set(i,e),r.replace({...r.location,search:n.toString()})}),[i,r])]}function p(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,i=h(e),[l,d]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!x({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=t.find((e=>e.default))??t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:i}))),[o,u]=j({queryString:t,groupId:r}),[p,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,i]=(0,c.Nk)(t);return[r,(0,s.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:r}),m=(()=>{const e=o??p;return x({value:e,tabValues:i})?e:null})();(0,a.Z)((()=>{m&&d(m)}),[m]);return{selectedValue:l,selectValue:(0,s.useCallback)((e=>{if(!x({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);d(e),u(e),g(e)}),[u,g,i]),tabValues:i}}var g=t(5730);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=t(85893);function f(e){let{className:n,block:t,selectedValue:s,selectValue:l,tabValues:a}=e;const d=[],{blockElementScrollPositionUntilNextRender:o}=(0,i.o5)(),c=e=>{const n=e.currentTarget,t=d.indexOf(n),r=a[t].value;r!==s&&(o(n),l(r))},u=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=d.indexOf(e.currentTarget)+1;n=d[t]??d[0];break}case"ArrowLeft":{const t=d.indexOf(e.currentTarget)-1;n=d[t]??d[d.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n),children:a.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>d.push(e),onKeyDown:u,onClick:c,...i,className:(0,r.Z)("tabs__item",m.tabItem,i?.className,{"tabs__item--active":s===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:r}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===r));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function y(e){const n=p(e);return(0,b.jsxs)("div",{className:(0,r.Z)("tabs-container",m.tabList),children:[(0,b.jsx)(f,{...e,...n}),(0,b.jsx)(v,{...e,...n})]})}function _(e){const n=(0,g.Z)();return(0,b.jsx)(y,{...e,children:u(e.children)},String(n))}},62662:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>x,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var s=t(85893),r=t(11151),i=t(71125),l=t(32342);const a={sidebar_label:"Create a Discussion",sidebar_position:1,title:"Create a Discussion"},d=void 0,o={id:"apireference/v2/discussion/create_a_discussion",title:"Create a Discussion",description:"This endpoint creates a discussion.",source:"@site/docs/apireference/v2/discussion/create_a_discussion.md",sourceDirName:"apireference/v2/discussion",slug:"/apireference/v2/discussion/create_a_discussion",permalink:"/docs/apireference/v2/discussion/create_a_discussion",draft:!1,unlisted:!1,editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/apireference/v2/discussion/create_a_discussion.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Create a Discussion",sidebar_position:1,title:"Create a Discussion"},sidebar:"apireferenceSidebar",previous:{title:"Check if Suspended Discussion",permalink:"/docs/apireference/v2/discussion/check_suspended_discussion"},next:{title:"Delete a Discussion",permalink:"/docs/apireference/v2/discussion/delete_a_discussion"}},c={},u=[{value:"HTTP Request",id:"http-request",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Example Body Parameters",id:"example-body-parameters",level:4},{value:"Example Request",id:"example-request",level:3},{value:"Responses",id:"responses",level:2},{value:"Example responses",id:"example-responses",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"This endpoint creates a discussion."}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsx)(n.p,{children:"This operation requires authentication"})}),"\n",(0,s.jsx)(n.h2,{id:"http-request",children:"HTTP Request"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"POST /api/v2/discussion/"})}),"\n",(0,s.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsx)(n.p,{children:"By passing a category id that has parents defined, the system will automatically ascend the category graph based on the parents and will also automatically add the parents category ids to the discussion."})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"In"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Required"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\xbb title"}),(0,s.jsx)(n.td,{children:"body"}),(0,s.jsx)(n.td,{children:"string\xa6null"}),(0,s.jsx)(n.td,{children:"true"}),(0,s.jsx)(n.td,{children:"The title of the discussion"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\xbb text"}),(0,s.jsx)(n.td,{children:"body"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"false"}),(0,s.jsx)(n.td,{children:"The content of the discussion in html format, it can contain some mentions"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\xbb categories"}),(0,s.jsx)(n.td,{children:"body"}),(0,s.jsx)(n.td,{children:"list(integer)"}),(0,s.jsx)(n.td,{children:"true"}),(0,s.jsxs)(n.td,{children:["List of id of ",(0,s.jsx)(n.a,{href:"/docs/apireference/v2/schemas/category",children:"Category"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\xbb group"}),(0,s.jsx)(n.td,{children:"body"}),(0,s.jsx)(n.td,{children:"integer"}),(0,s.jsx)(n.td,{children:"false"}),(0,s.jsx)(n.td,{children:"The id of the group"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\xbb medias"}),(0,s.jsx)(n.td,{children:"body"}),(0,s.jsx)(n.td,{children:"list(integer)"}),(0,s.jsx)(n.td,{children:"false"}),(0,s.jsxs)(n.td,{children:["List of id of ",(0,s.jsx)(n.a,{href:"/docs/apireference/v2/schemas/media",children:"Media"})," (only one media of type share is allowed)"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\xbb location"}),(0,s.jsx)(n.td,{children:"body"}),(0,s.jsx)(n.td,{children:"object\xa6null"}),(0,s.jsx)(n.td,{children:"false"}),(0,s.jsx)(n.td,{children:"The Location object to associate at the discussion"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\xbb\xbb location"}),(0,s.jsx)(n.td,{children:"body"}),(0,s.jsx)(n.td,{children:"string\xa6null"}),(0,s.jsx)(n.td,{children:"true"}),(0,s.jsx)(n.td,{children:"The location name"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\xbb\xbb lat"}),(0,s.jsx)(n.td,{children:"body"}),(0,s.jsx)(n.td,{children:"number\xa6null"}),(0,s.jsx)(n.td,{children:"true"}),(0,s.jsx)(n.td,{children:"The location latitude"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\xbb\xbb lng"}),(0,s.jsx)(n.td,{children:"body"}),(0,s.jsx)(n.td,{children:"number\xa6null"}),(0,s.jsx)(n.td,{children:"true"}),(0,s.jsx)(n.td,{children:"The location longitude"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\xbb poll"}),(0,s.jsx)(n.td,{children:"body"}),(0,s.jsx)(n.td,{children:"object\xa6null"}),(0,s.jsx)(n.td,{children:"false"}),(0,s.jsx)(n.td,{children:"The poll object to associate at the discussion"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\xbb\xbb title"}),(0,s.jsx)(n.td,{children:"body"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"true"}),(0,s.jsx)(n.td,{children:"The poll title"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\xbb\xbb multiple_choices"}),(0,s.jsx)(n.td,{children:"body"}),(0,s.jsx)(n.td,{children:"boolean"}),(0,s.jsx)(n.td,{children:"false"}),(0,s.jsx)(n.td,{children:"If poll has multiple choices"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\xbb\xbb expiration_at"}),(0,s.jsx)(n.td,{children:"body"}),(0,s.jsx)(n.td,{children:"string(date-time)"}),(0,s.jsx)(n.td,{children:"false"}),(0,s.jsx)(n.td,{children:"Poll expiration datetime"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\xbb\xbb choices"}),(0,s.jsx)(n.td,{children:"body"}),(0,s.jsx)(n.td,{children:"list(object)"}),(0,s.jsx)(n.td,{children:"true"}),(0,s.jsx)(n.td,{children:"Poll choices"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\xbb\xbb\xbb choice"}),(0,s.jsx)(n.td,{children:"body"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"true"}),(0,s.jsx)(n.td,{children:"Poll choice obj"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\xbb addressing"}),(0,s.jsx)(n.td,{children:"body"}),(0,s.jsx)(n.td,{children:"list(integer)"}),(0,s.jsx)(n.td,{children:"false"}),(0,s.jsxs)(n.td,{children:["List of ",(0,s.jsx)(n.a,{href:"/docs/apireference/v2/schemas/tag",children:"Tag"})," ids"]})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"example-body-parameters",children:"Example Body Parameters"}),"\n","\n","\n",(0,s.jsx)(i.Z,{defaultValue:"json",values:[{label:"JSON",value:"json"}],children:(0,s.jsx)(l.Z,{value:"json",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n    "title": "string",\n    "text": "string",\n    "categories": ["integer"],\n    "medias": ["integer"],\n    "location": {\n      "location": "string",\n      "lat": "integer",\n      "lng": "integer"\n    },\n    "poll": {\n      "title": "string",\n      "multiple_choices": "boolean",\n      "closed": "boolean",\n      "expiration_at": "string",\n      "choices": [\n        {\n          "choice": "string"\n        }\n      ]\n    },\n    "addressing": ["integer"],\n    "tags": ["integer"]\n}\n'})})})}),"\n",(0,s.jsx)(n.h3,{id:"example-request",children:"Example Request"}),"\n",(0,s.jsxs)(i.Z,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"Bash",value:"bash"}],children:[(0,s.jsx)(l.Z,{value:"js",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'const inputBody = {\n    "title": "string",\n    "text": "string",\n    "categories": ["integer"],\n    "medias": ["integer"],\n    "location": {\n      "location": "string",\n      "lat": "integer",\n      "lng": "integer"\n    },\n    "poll": {\n      "title": "string",\n      "multiple_choices": "boolean",\n      "closed": "boolean",\n      "expiration_at": "string",\n      "choices": [\n        {\n          "choice": "string"\n        }\n      ]\n    },\n    "addressing": ["integer"],\n    "tags": ["integer"]\n};\nconst headers = {\n  \'Content-Type\':\'application/json\',\n  \'Accept\':\'application/json\',\n  \'Authorization\': \'Bearer {access_token}\'\n};\n\nfetch(\'/api/v2/discussion/\',\n{\n  method: \'POST\',\n  body: inputBody,\n  headers: headers\n})\n.then(function(res) {\n    return res.json();\n}).then(function(body) {\n    console.log(body);\n});\n\n'})})}),(0,s.jsx)(l.Z,{value:"bash",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'# You can also use wget\ncurl -X POST /api/v2/discussion/ \\\n  -H \'Content-Type: application/json\' \\\n  -H \'Accept: application/json\' \\\n  -H \'Authorization: Bearer {access_token}\' \\\n  --data-raw \'{\n    "title": "string",\n    "text": "string",\n    "categories": ["integer"],\n    "medias": ["integer"],\n    "location": {\n      "location": "string",\n      "lat": "integer",\n      "lng": "integer"\n    },\n    "poll": {\n      "title": "string",\n      "multiple_choices": "boolean",\n      "closed": "boolean",\n      "expiration_at": "string",\n      "choices": [\n        {\n          "choice": "string"\n        }\n      ]\n    },\n    "addressing": ["integer"],\n    "tags": ["integer"]\n  }\'\n'})})})]}),"\n",(0,s.jsx)(n.h2,{id:"responses",children:"Responses"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Status"}),(0,s.jsx)(n.th,{children:"Meaning"}),(0,s.jsx)(n.th,{children:"Description"}),(0,s.jsx)(n.th,{children:"Schema"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"201"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"https://tools.ietf.org/html/rfc7231#section-6.3.2",children:"Created"})}),(0,s.jsx)(n.td,{children:"Response status code"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/apireference/v2/schemas/discussion",children:"Discussion"})})]})})]}),"\n",(0,s.jsx)(n.h3,{id:"example-responses",children:"Example responses"}),"\n",(0,s.jsx)(i.Z,{defaultValue:"200",values:[{label:"200",value:"200"}],children:(0,s.jsx)(l.Z,{value:"200",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "id": "integer",\n  "type": "string",\n  "last_activity_at": "string",\n  "author": {User},\n  "added_at": "string",\n  "last_edited_at": "string",\n  "html": "string",\n  "summary": "string",\n  "deleted": "boolean",\n  "collapsed": "boolean",\n  "comment_count": "integer",\n  "view_count": "integer",\n  "vote_count": "integer",\n  "reactions_count": [{Reaction}],\n  "voted": "boolean",\n  "reaction": {Reaction},\n  "follower_count": "integer",\n  "followed": "boolean",\n  "suspended": "boolean",\n  "flag_count": "integer",\n  "share_count": "integer",\n  "slug": "string",\n  "categories": [{Category}],\n  "medias": [{Media}],\n  "location": "string",\n  "addressing": ["integer"],\n  "tags": ["integer"],\n  "poll": {Poll},\n  "title": "string"\n}\n'})})})})]})}function x(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>l});var s=t(67294);const r={},i=s.createContext(r);function l(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);