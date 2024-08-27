"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[28257],{32342:(e,t,n)=>{n.d(t,{Z:()=>i});n(67294);var s=n(36905);const r={tabItem:"tabItem_Ymn6"};var l=n(85893);function i(e){let{children:t,hidden:n,className:i}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,s.Z)(r.tabItem,i),hidden:n,children:t})}},71125:(e,t,n)=>{n.d(t,{Z:()=>y});var s=n(67294),r=n(36905),l=n(63735),i=n(16550),o=n(20613),a=n(34423),c=n(20636),d=n(99200);function u(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,s.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:s,default:r}}=e;return{value:t,label:n,attributes:s,default:r}}))}(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const r=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,a._X)(l),(0,s.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function x(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,l=h(e),[i,a]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=n.find((e=>e.default))??n[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:l}))),[c,u]=f({queryString:n,groupId:r}),[x,j]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,d.Nk)(n);return[r,(0,s.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:r}),m=(()=>{const e=c??x;return p({value:e,tabValues:l})?e:null})();(0,o.Z)((()=>{m&&a(m)}),[m]);return{selectedValue:i,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);a(e),u(e),j(e)}),[u,j,l]),tabValues:l}}var j=n(5730);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=n(85893);function g(e){let{className:t,block:n,selectedValue:s,selectValue:i,tabValues:o}=e;const a=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),d=e=>{const t=e.currentTarget,n=a.indexOf(t),r=o[n].value;r!==s&&(c(t),i(r))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=a.indexOf(e.currentTarget)+1;t=a[n]??a[0];break}case"ArrowLeft":{const n=a.indexOf(e.currentTarget)-1;t=a[n]??a[a.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:l}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>a.push(e),onKeyDown:u,onClick:d,...l,className:(0,r.Z)("tabs__item",m.tabItem,l?.className,{"tabs__item--active":s===t}),children:n??t},t)}))})}function v(e){let{lazy:t,children:n,selectedValue:r}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===r));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:l.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function _(e){const t=x(e);return(0,b.jsxs)("div",{className:(0,r.Z)("tabs-container",m.tabList),children:[(0,b.jsx)(g,{...e,...t}),(0,b.jsx)(v,{...e,...t})]})}function y(e){const t=(0,j.Z)();return(0,b.jsx)(_,{...e,children:u(e.children)},String(t))}},95093:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var s=n(85893),r=n(11151),l=n(71125),i=n(32342);const o={sidebar_label:"Get List of Following Posts",sidebar_position:1,title:"Get List of Following Posts"},a=void 0,c={id:"apireference/v2/post/get_list_of_followed_posts",title:"Get List of Following Posts",description:"This endpoint retrieves all followed posts by me",source:"@site/docs/apireference/v2/post/get_list_of_followed_posts.md",sourceDirName:"apireference/v2/post",slug:"/apireference/v2/post/get_list_of_followed_posts",permalink:"/docs/apireference/v2/post/get_list_of_followed_posts",draft:!1,unlisted:!1,editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/apireference/v2/post/get_list_of_followed_posts.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Get List of Following Posts",sidebar_position:1,title:"Get List of Following Posts"},sidebar:"apireferenceSidebar",previous:{title:"Get List of Flags for a Specific Post",permalink:"/docs/apireference/v2/post/get_list_of_flags_for_a_specific_post"},next:{title:"Get List of Poll Votes for a Specific Post",permalink:"/docs/apireference/v2/post/get_list_of_pollvotes_for_a_specific_post"}},d={},u=[{value:"HTTP Request",id:"http-request",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Example Request",id:"example-request",level:3},{value:"Responses",id:"responses",level:2},{value:"Response Schema",id:"response-schema",level:3},{value:"Example responses",id:"example-responses",level:3}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"This endpoint retrieves all followed posts by me"}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsx)(t.p,{children:"This operation requires authentication."})}),"\n",(0,s.jsx)(t.h2,{id:"http-request",children:"HTTP Request"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"GET /api/v2/post/following/"})}),"\n",(0,s.jsx)(t.h3,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"In"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Required"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"limit"}),(0,s.jsx)(t.td,{children:"query"}),(0,s.jsx)(t.td,{children:"integer"}),(0,s.jsx)(t.td,{children:"false"}),(0,s.jsx)(t.td,{children:"Number of results to return per page"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"offset"}),(0,s.jsx)(t.td,{children:"query"}),(0,s.jsx)(t.td,{children:"integer"}),(0,s.jsx)(t.td,{children:"false"}),(0,s.jsx)(t.td,{children:"The initial index from which to return the results"})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"example-request",children:"Example Request"}),"\n","\n","\n",(0,s.jsxs)(l.Z,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"Bash",value:"bash"}],children:[(0,s.jsx)(i.Z,{value:"js",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"const headers = {\n  'Accept':'application/json',\n  'Authorization': 'Bearer {access_token}'\n};\n\nfetch('/api/v2/post/following/',\n{\n  method: 'GET',\n  headers: headers\n})\n.then(function(res) {\n    return res.json();\n}).then(function(body) {\n    console.log(body);\n});\n\n"})})}),(0,s.jsx)(i.Z,{value:"bash",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"# You can also use wget\ncurl -X GET /api/v2/post/following/ \\\n  -H 'Accept: application/json' \\\n  -H 'Authorization: Bearer {access_token}'\n"})})})]}),"\n",(0,s.jsx)(t.h2,{id:"responses",children:"Responses"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Status"}),(0,s.jsx)(t.th,{children:"Meaning"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Schema"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"200"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://tools.ietf.org/html/rfc7231#section-6.3.1",children:"OK"})}),(0,s.jsx)(t.td,{children:"Response status code"}),(0,s.jsx)(t.td,{children:"Inline"})]})})]}),"\n",(0,s.jsx)(t.h3,{id:"response-schema",children:"Response Schema"}),"\n",(0,s.jsxs)(t.p,{children:["Status Code ",(0,s.jsx)(t.strong,{children:"200"})]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Required"}),(0,s.jsx)(t.th,{children:"Restrictions"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"\xbb count"}),(0,s.jsx)(t.td,{children:"integer"}),(0,s.jsx)(t.td,{children:"true"}),(0,s.jsx)(t.td,{children:"none"}),(0,s.jsx)(t.td,{children:"Total results count"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"\xbb next"}),(0,s.jsx)(t.td,{children:"string\xa6null"}),(0,s.jsx)(t.td,{children:"false"}),(0,s.jsx)(t.td,{children:"none"}),(0,s.jsx)(t.td,{children:"Next page url"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"\xbb previous"}),(0,s.jsx)(t.td,{children:"string\xa6null"}),(0,s.jsx)(t.td,{children:"false"}),(0,s.jsx)(t.td,{children:"none"}),(0,s.jsx)(t.td,{children:"Previous page url"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"\xbb results"}),(0,s.jsxs)(t.td,{children:["list(",(0,s.jsx)(t.a,{href:"/docs/apireference/v2/schemas/post",children:"Post"}),")"]}),(0,s.jsx)(t.td,{children:"true"}),(0,s.jsx)(t.td,{children:"none"}),(0,s.jsx)(t.td,{children:"List of posts and a field added_at that represent the timestamp"})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"example-responses",children:"Example responses"}),"\n",(0,s.jsx)(l.Z,{defaultValue:"200",values:[{label:"200",value:"200"}],children:(0,s.jsx)(i.Z,{value:"200",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n  "count": "integer",\n  "next": "string(uri)",\n  "previous": "string(uri)",\n  "results": [\n    {\n    "post": {    \n                  "id": "integer",\n                  "type": "string",\n                  "last_activity_at": "string",\n                  "author": {User},\n                  "added_at": "string",\n                  "last_edited_at": "string",\n                  "html": "string",\n                  "summary": "string",\n                  "deleted": "boolean",\n                  "collapsed": "boolean",\n                  "comment_count": "integer",\n                  "view_count": "integer",\n                  "vote_count": "integer",\n                  "reactions_count": [{Reaction}],\n                  "voted": "boolean",\n                  "reaction": {Reaction},\n                  "follower_count": "integer",\n                  "followed": "boolean",\n                  "suspended": "boolean",\n                  "flag_count": "integer",\n                  "share_count": "integer",\n                  "slug": "string",\n                  "categories": [{Category}],\n                  "medias": [{Media}],\n                  "location": "string",\n                  "addressing": ["integer"],\n                  "tags": ["integer"],\n                  "poll": {Poll}\n   },\n   "added_at": "string"\n   },\n  ]\n}\n'})})})})]})}function p(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>i});var s=n(67294);const r={},l=s.createContext(r);function i(e){const t=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(l.Provider,{value:t},e.children)}}}]);