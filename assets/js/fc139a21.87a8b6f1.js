"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[70395],{32342:(e,t,n)=>{n.d(t,{Z:()=>i});n(67294);var r=n(36905);const s={tabItem:"tabItem_Ymn6"};var l=n(85893);function i(e){let{children:t,hidden:n,className:i}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,r.Z)(s.tabItem,i),hidden:n,children:t})}},71125:(e,t,n)=>{n.d(t,{Z:()=>y});var r=n(67294),s=n(36905),l=n(63735),i=n(16550),a=n(20613),o=n(34423),c=n(20636),d=n(99200);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:s}}=e;return{value:t,label:n,attributes:r,default:s}}))}(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function x(e){let{queryString:t=!1,groupId:n}=e;const s=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(s.location.search);t.set(l,e),s.replace({...s.location,search:t.toString()})}),[l,s])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,l=h(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[c,u]=x({queryString:n,groupId:s}),[f,j]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,l]=(0,d.Nk)(n);return[s,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:s}),m=(()=>{const e=c??f;return p({value:e,tabValues:l})?e:null})();(0,a.Z)((()=>{m&&o(m)}),[m]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),j(e)}),[u,j,l]),tabValues:l}}var j=n(5730);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=n(85893);function v(e){let{className:t,block:n,selectedValue:r,selectValue:i,tabValues:a}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),d=e=>{const t=e.currentTarget,n=o.indexOf(t),s=a[n].value;s!==r&&(c(t),i(s))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;t=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;t=o[n]??o[o.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},t),children:a.map((e=>{let{value:t,label:n,attributes:l}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>o.push(e),onKeyDown:u,onClick:d,...l,className:(0,s.Z)("tabs__item",m.tabItem,l?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function g(e){let{lazy:t,children:n,selectedValue:s}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function _(e){const t=f(e);return(0,b.jsxs)("div",{className:(0,s.Z)("tabs-container",m.tabList),children:[(0,b.jsx)(v,{...e,...t}),(0,b.jsx)(g,{...e,...t})]})}function y(e){const t=(0,j.Z)();return(0,b.jsx)(_,{...e,children:u(e.children)},String(t))}},57855:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var r=n(85893),s=n(11151),l=n(71125),i=n(32342);const a={sidebar_label:"Get list of related Posts",sidebar_position:9,title:"Get list of related Posts"},o=void 0,c={id:"apireference/v2/post/get_list_of_related_posts",title:"Get list of related Posts",description:"This endpoint retrieves related posts",source:"@site/docs/apireference/v2/post/get_list_of_related_posts.md",sourceDirName:"apireference/v2/post",slug:"/apireference/v2/post/get_list_of_related_posts",permalink:"/docs/apireference/v2/post/get_list_of_related_posts",draft:!1,unlisted:!1,editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/apireference/v2/post/get_list_of_related_posts.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_label:"Get list of related Posts",sidebar_position:9,title:"Get list of related Posts"},sidebar:"apireferenceSidebar",previous:{title:"Get List of Votes for a Specific Post",permalink:"/docs/apireference/v2/post/get_list_of_votes_for_a_specific_post"},next:{title:"Upvote for a Specific Post",permalink:"/docs/apireference/v2/post/upvote_for_a_specific_post"}},d={},u=[{value:"HTTP Request",id:"http-request",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Example Request",id:"example-request",level:3},{value:"Responses",id:"responses",level:2},{value:"Response Schema",id:"response-schema",level:3},{value:"Example responses",id:"example-responses",level:3}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"This endpoint retrieves related posts"}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsxs)(t.p,{children:["This operation requires authentication only if ",(0,r.jsx)(t.code,{children:"content_availability"})," community option is false."]})}),"\n",(0,r.jsx)(t.h2,{id:"http-request",children:"HTTP Request"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"GET /api/v2/post/{id}/related/"})}),"\n",(0,r.jsx)(t.h3,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"In"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Required"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"id"}),(0,r.jsx)(t.td,{children:"path"}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"true"}),(0,r.jsx)(t.td,{children:"A unique integer value identifying this post"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"limit"}),(0,r.jsx)(t.td,{children:"query"}),(0,r.jsx)(t.td,{children:"integer"}),(0,r.jsx)(t.td,{children:"false"}),(0,r.jsx)(t.td,{children:"Number of results to return per page"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"offset"}),(0,r.jsx)(t.td,{children:"query"}),(0,r.jsx)(t.td,{children:"integer"}),(0,r.jsx)(t.td,{children:"false"}),(0,r.jsx)(t.td,{children:"The initial index from which to return the results"})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"example-request",children:"Example Request"}),"\n","\n","\n",(0,r.jsxs)(l.Z,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"Bash",value:"bash"}],children:[(0,r.jsx)(i.Z,{value:"js",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"const headers = {\n  'Accept':'application/json',\n  'Authorization': 'Bearer {access_token}'\n};\n\nfetch('/api/v2/post/{id}/related/',\n{\n  method: 'GET',\n\n  headers: headers\n})\n.then(function(res) {\n    return res.json();\n}).then(function(body) {\n    console.log(body);\n});\n\n"})})}),(0,r.jsx)(i.Z,{value:"bash",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"# You can also use wget\ncurl -X GET /api/v2/post/{id}/related/ \\\n  -H 'Accept: application/json' \\\n  -H 'Authorization: Bearer {access_token}'\n"})})})]}),"\n",(0,r.jsx)(t.h2,{id:"responses",children:"Responses"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Status"}),(0,r.jsx)(t.th,{children:"Meaning"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Schema"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"200"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://tools.ietf.org/html/rfc7231#section-6.3.1",children:"OK"})}),(0,r.jsx)(t.td,{children:"Response status code"}),(0,r.jsx)(t.td,{children:"Inline"})]})})]}),"\n",(0,r.jsx)(t.h3,{id:"response-schema",children:"Response Schema"}),"\n",(0,r.jsxs)(t.p,{children:["Status Code ",(0,r.jsx)(t.strong,{children:"200"})]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Required"}),(0,r.jsx)(t.th,{children:"Restrictions"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"\xbb count"}),(0,r.jsx)(t.td,{children:"integer"}),(0,r.jsx)(t.td,{children:"true"}),(0,r.jsx)(t.td,{children:"none"}),(0,r.jsx)(t.td,{children:"Total results count"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"\xbb next"}),(0,r.jsx)(t.td,{children:"string\xa6null"}),(0,r.jsx)(t.td,{children:"false"}),(0,r.jsx)(t.td,{children:"none"}),(0,r.jsx)(t.td,{children:"Next page url"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"\xbb previous"}),(0,r.jsx)(t.td,{children:"string\xa6null"}),(0,r.jsx)(t.td,{children:"false"}),(0,r.jsx)(t.td,{children:"none"}),(0,r.jsx)(t.td,{children:"Previous page url"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"\xbb results"}),(0,r.jsxs)(t.td,{children:["list(",(0,r.jsx)(t.a,{href:"/docs/apireference/v2/schemas/post",children:"Post"}),")"]}),(0,r.jsx)(t.td,{children:"true"}),(0,r.jsx)(t.td,{children:"none"}),(0,r.jsx)(t.td,{children:"List of results"})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"example-responses",children:"Example responses"}),"\n",(0,r.jsx)(l.Z,{defaultValue:"200",values:[{label:"200",value:"200"}],children:(0,r.jsx)(i.Z,{value:"200",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\n  "count": "integer",\n  "next": "string(uri)",\n  "previous": "string(uri)",\n  "results": [\n      {\n          "id": "integer",\n          "type": "string",\n          "last_activity_at": "string",\n          "author": {User},\n          "added_at": "string",\n          "last_edited_at": "string",\n          "html": "string",\n          "summary": "string",\n          "deleted": "boolean",\n          "collapsed": "boolean",\n          "comment_count": "integer",\n          "view_count": "integer",\n          "vote_count": "integer",\n          "reactions_count": [{Reaction}],\n          "voted": "boolean",\n          "reaction": {Reaction},\n          "follower_count": "integer",\n          "followed": "boolean",\n          "suspended": "boolean",\n          "flag_count": "integer",\n          "share_count": "integer",\n          "slug": "string",\n          "categories": [{Category}],\n          "medias": [{Media}],\n          "location": {Locality},\n          "addressing": ["integer"],\n          "tags": ["integer"],\n          "poll": {Poll}\n      }\n    ]\n}\n'})})})})]})}function p(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>i});var r=n(67294);const s={},l=r.createContext(s);function i(e){const t=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(l.Provider,{value:t},e.children)}}}]);