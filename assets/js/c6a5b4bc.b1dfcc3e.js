"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[6626],{32342:(e,n,t)=>{t.d(n,{Z:()=>l});t(67294);var s=t(36905);const r={tabItem:"tabItem_Ymn6"};var i=t(85893);function l(e){let{children:n,hidden:t,className:l}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,s.Z)(r.tabItem,l),hidden:t,children:n})}},71125:(e,n,t)=>{t.d(n,{Z:()=>y});var s=t(67294),r=t(36905),i=t(63735),l=t(16550),a=t(20613),o=t(34423),c=t(20636),d=t(99200);function u(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:s,default:r}}=e;return{value:n,label:t,attributes:s,default:r}}))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const r=(0,l.k6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o._X)(i),(0,s.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(r.location.search);n.set(i,e),r.replace({...r.location,search:n.toString()})}),[i,r])]}function x(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,i=h(e),[l,o]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=t.find((e=>e.default))??t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:i}))),[c,u]=m({queryString:t,groupId:r}),[x,j]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,i]=(0,d.Nk)(t);return[r,(0,s.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:r}),f=(()=>{const e=c??x;return p({value:e,tabValues:i})?e:null})();(0,a.Z)((()=>{f&&o(f)}),[f]);return{selectedValue:l,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),j(e)}),[u,j,i]),tabValues:i}}var j=t(5730);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=t(85893);function v(e){let{className:n,block:t,selectedValue:s,selectValue:l,tabValues:a}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),d=e=>{const n=e.currentTarget,t=o.indexOf(n),r=a[t].value;r!==s&&(c(n),l(r))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n),children:a.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>o.push(e),onKeyDown:u,onClick:d,...i,className:(0,r.Z)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":s===n}),children:t??n},n)}))})}function g(e){let{lazy:n,children:t,selectedValue:r}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===r));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function _(e){const n=x(e);return(0,b.jsxs)("div",{className:(0,r.Z)("tabs-container",f.tabList),children:[(0,b.jsx)(v,{...e,...n}),(0,b.jsx)(g,{...e,...n})]})}function y(e){const n=(0,j.Z)();return(0,b.jsx)(_,{...e,children:u(e.children)},String(n))}},77052:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var s=t(85893),r=t(11151),i=t(71125),l=t(32342);const a={sidebar_label:"Get All Uncommented Discussions",sidebar_position:1,title:"Get All Uncommented Discussions"},o=void 0,c={id:"apireference/v2/discussion/get_all_uncommented_discussions",title:"Get All Uncommented Discussions",description:"This endpoint retrieves all uncommented discussions.",source:"@site/docs/apireference/v2/discussion/get_all_uncommented_discussions.md",sourceDirName:"apireference/v2/discussion",slug:"/apireference/v2/discussion/get_all_uncommented_discussions",permalink:"/docs/apireference/v2/discussion/get_all_uncommented_discussions",draft:!1,unlisted:!1,editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/apireference/v2/discussion/get_all_uncommented_discussions.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Get All Uncommented Discussions",sidebar_position:1,title:"Get All Uncommented Discussions"},sidebar:"apireferenceSidebar",previous:{title:"Get All Discussions",permalink:"/docs/apireference/v2/discussion/get_all_discussions"},next:{title:"Get Flag Status for a Specific Discussion",permalink:"/docs/apireference/v2/discussion/get_flag_status_for_a_specific_discussion"}},d={},u=[{value:"HTTP Request",id:"http-request",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Example Request",id:"example-request",level:3},{value:"Responses",id:"responses",level:2},{value:"Response Schema",id:"response-schema",level:3},{value:"Example responses",id:"example-responses",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"This endpoint retrieves all uncommented discussions."}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsx)(n.p,{children:"This operation requires authentication"})}),"\n",(0,s.jsx)(n.h2,{id:"http-request",children:"HTTP Request"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"GET /api/v2/discussion/uncommented/"})}),"\n",(0,s.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"In"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Required"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"limit"}),(0,s.jsx)(n.td,{children:"query"}),(0,s.jsx)(n.td,{children:"integer"}),(0,s.jsx)(n.td,{children:"false"}),(0,s.jsx)(n.td,{children:"Number of results to return per page"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"offset"}),(0,s.jsx)(n.td,{children:"query"}),(0,s.jsx)(n.td,{children:"integer"}),(0,s.jsx)(n.td,{children:"false"}),(0,s.jsx)(n.td,{children:"The initial index from which to return the results"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"example-request",children:"Example Request"}),"\n","\n","\n",(0,s.jsxs)(i.Z,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"Bash",value:"bash"}],children:[(0,s.jsx)(l.Z,{value:"js",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const headers = {\n  'Accept':'application/json',\n  'Authorization': 'Bearer {access_token}'\n};\n\nfetch('/api/v2/discussion/uncommented/',\n{\n  method: 'GET',\n\n  headers: headers\n})\n.then(function(res) {\n    return res.json();\n}).then(function(body) {\n    console.log(body);\n});\n\n"})})}),(0,s.jsx)(l.Z,{value:"bash",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# You can also use wget\ncurl -X GET /api/v2/discussion/uncommented/ \\\n  -H 'Accept: application/json' \\\n  -H 'Authorization: Bearer {access_token}'\n"})})})]}),"\n",(0,s.jsx)(n.h2,{id:"responses",children:"Responses"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Status"}),(0,s.jsx)(n.th,{children:"Meaning"}),(0,s.jsx)(n.th,{children:"Description"}),(0,s.jsx)(n.th,{children:"Schema"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"200"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"https://tools.ietf.org/html/rfc7231#section-6.3.1",children:"OK"})}),(0,s.jsx)(n.td,{children:"Response status code"}),(0,s.jsx)(n.td,{children:"Inline"})]})})]}),"\n",(0,s.jsx)(n.h3,{id:"response-schema",children:"Response Schema"}),"\n",(0,s.jsxs)(n.p,{children:["Status Code ",(0,s.jsx)(n.strong,{children:"200"})]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Required"}),(0,s.jsx)(n.th,{children:"Restrictions"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\xbb count"}),(0,s.jsx)(n.td,{children:"integer"}),(0,s.jsx)(n.td,{children:"true"}),(0,s.jsx)(n.td,{children:"none"}),(0,s.jsx)(n.td,{children:"Total results count"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\xbb next"}),(0,s.jsx)(n.td,{children:"string\xa6null"}),(0,s.jsx)(n.td,{children:"false"}),(0,s.jsx)(n.td,{children:"none"}),(0,s.jsx)(n.td,{children:"Next page url"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\xbb previous"}),(0,s.jsx)(n.td,{children:"string\xa6null"}),(0,s.jsx)(n.td,{children:"false"}),(0,s.jsx)(n.td,{children:"none"}),(0,s.jsx)(n.td,{children:"Previous page url"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\xbb results"}),(0,s.jsxs)(n.td,{children:["list(",(0,s.jsx)(n.a,{href:"/docs/apireference/v2/schemas/discussion",children:"Discussion"}),")"]}),(0,s.jsx)(n.td,{children:"true"}),(0,s.jsx)(n.td,{children:"none"}),(0,s.jsx)(n.td,{children:"List of results"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"example-responses",children:"Example responses"}),"\n",(0,s.jsx)(i.Z,{defaultValue:"200",values:[{label:"200",value:"200"}],children:(0,s.jsx)(l.Z,{value:"200",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "count": "integer",\n  "next": "string(uri)",\n  "previous": "string(uri)",\n  "results": [\n    {\n      "id": "integer",\n      "type": "string",\n      "last_activity_at": "string",\n      "author": {User},\n      "added_at": "string",\n      "last_edited_at": "string",\n      "html": "string",\n      "summary": "string",\n      "deleted": "boolean",\n      "collapsed": "boolean",\n      "comment_count": "integer",\n      "view_count": "integer",\n      "vote_count": "integer",\n      "reactions_count": [{Reaction}],\n      "voted": "boolean",\n      "reaction": {Reaction},\n      "follower_count": "integer",\n      "followed": "boolean",\n      "suspended": "boolean",\n      "flag_count": "integer",\n      "share_count": "integer",\n      "slug": "string",\n      "categories": [{Category}],\n      "medias": [{Media}],\n      "location": "string",\n      "addressing": ["integer"],\n      "tags": ["integer"],\n      "poll": {Poll},\n      "title": "string"\n    }\n  ]\n}\n'})})})})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>l});var s=t(67294);const r={},i=s.createContext(r);function l(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);