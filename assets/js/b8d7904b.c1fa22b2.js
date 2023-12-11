"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[43584],{32342:(e,n,t)=>{t.d(n,{Z:()=>i});t(67294);var r=t(36905);const s={tabItem:"tabItem_Ymn6"};var l=t(85893);function i(e){let{children:n,hidden:t,className:i}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,r.Z)(s.tabItem,i),hidden:t,children:n})}},71125:(e,n,t)=>{t.d(n,{Z:()=>_});var r=t(67294),s=t(36905),l=t(63735),i=t(16550),a=t(20613),o=t(34423),d=t(20636),c=t(99200);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:s}}=e;return{value:n,label:t,attributes:r,default:s}}))}(t);return function(e){const n=(0,d.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:t}=e;const s=(0,i.k6)(),l=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o._X)(l),(0,r.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(s.location.search);n.set(l,e),s.replace({...s.location,search:n.toString()})}),[l,s])]}function j(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,l=h(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:l}))),[d,u]=x({queryString:t,groupId:s}),[j,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,l]=(0,c.Nk)(t);return[s,(0,r.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:s}),m=(()=>{const e=d??j;return p({value:e,tabValues:l})?e:null})();(0,a.Z)((()=>{m&&o(m)}),[m]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),f(e)}),[u,f,l]),tabValues:l}}var f=t(5730);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=t(85893);function v(e){let{className:n,block:t,selectedValue:r,selectValue:i,tabValues:a}=e;const o=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),c=e=>{const n=e.currentTarget,t=o.indexOf(n),s=a[t].value;s!==r&&(d(n),i(s))},u=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},n),children:a.map((e=>{let{value:n,label:t,attributes:l}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>o.push(e),onKeyDown:u,onClick:c,...l,className:(0,s.Z)("tabs__item",m.tabItem,l?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function g(e){let{lazy:n,children:t,selectedValue:s}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function y(e){const n=j(e);return(0,b.jsxs)("div",{className:(0,s.Z)("tabs-container",m.tabList),children:[(0,b.jsx)(v,{...e,...n}),(0,b.jsx)(g,{...e,...n})]})}function _(e){const n=(0,f.Z)();return(0,b.jsx)(y,{...e,children:u(e.children)},String(n))}},85258:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>d,toc:()=>u});var r=t(85893),s=t(11151),l=t(71125),i=t(32342);const a={sidebar_label:"Get Explore Feed",sidebar_position:2,title:"Get Explore Feed"},o=void 0,d={id:"apireference/v2/feed/explore",title:"Get Explore Feed",description:"This operation requires authentication only if content_availability community option is false",source:"@site/docs/apireference/v2/feed/explore.md",sourceDirName:"apireference/v2/feed",slug:"/apireference/v2/feed/explore",permalink:"/docs/apireference/v2/feed/explore",draft:!1,unlisted:!1,editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/apireference/v2/feed/explore.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Get Explore Feed",sidebar_position:2,title:"Get Explore Feed"},sidebar:"apireferenceSidebar",previous:{title:"Get Main Feed",permalink:"/docs/apireference/v2/feed/main"},next:{title:"Get Main Feed Unseen Count",permalink:"/docs/apireference/v2/feed/main_unseen_count"}},c={},u=[{value:"HTTP Request",id:"http-request",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Enumerated Values",id:"enumerated-values",level:4},{value:"Example Request",id:"example-request",level:3},{value:"Responses",id:"responses",level:2},{value:"Response Schema",id:"response-schema",level:3},{value:"Example responses",id:"example-responses",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["This operation requires authentication only if ",(0,r.jsx)(n.code,{children:"content_availability"})," community option is false"]})}),"\n",(0,r.jsxs)(n.p,{children:["This endpoint retrieves the explore feed. This endpoint can be disabled by setting ",(0,r.jsx)(n.code,{children:"explore_stream_enabled"})," community option to false"]}),"\n",(0,r.jsx)(n.h2,{id:"http-request",children:"HTTP Request"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"GET /api/v2/feed/explore/"})}),"\n",(0,r.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"In"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Required"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"limit"}),(0,r.jsx)(n.td,{children:"query"}),(0,r.jsx)(n.td,{children:"integer"}),(0,r.jsx)(n.td,{children:"false"}),(0,r.jsx)(n.td,{children:"Number of results to return per page"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"offset"}),(0,r.jsx)(n.td,{children:"query"}),(0,r.jsx)(n.td,{children:"integer"}),(0,r.jsx)(n.td,{children:"false"}),(0,r.jsx)(n.td,{children:"The initial index from which to return the results"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ordering"}),(0,r.jsx)(n.td,{children:"query"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"false"}),(0,r.jsxs)(n.td,{children:["The ordering of the feed. Default to ",(0,r.jsx)(n.code,{children:"explore_stream_order_by"})," community option"]})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"enumerated-values",children:"Enumerated Values"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Value"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\xbb ordering"}),(0,r.jsx)(n.td,{children:"recent"}),(0,r.jsx)(n.td,{children:"Order by recent creation datetime"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\xbb ordering"}),(0,r.jsx)(n.td,{children:"last_activity"}),(0,r.jsxs)(n.td,{children:["Order by last activity in the ",(0,r.jsx)(n.a,{href:"/docs/apireference/v2/schemas/feed",children:"Feed"})," object"]})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"example-request",children:"Example Request"}),"\n","\n","\n",(0,r.jsxs)(l.Z,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"Bash",value:"bash"}],children:[(0,r.jsx)(i.Z,{value:"js",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"\nconst headers = {\n  'Accept':'application/json',\n  'Authorization': 'Bearer {access_token}'\n};\n\nfetch('/api/v2/feed/explore/',\n{\n  method: 'GET',\n\n  headers: headers\n})\n.then(function(res) {\n    return res.json();\n}).then(function(body) {\n    console.log(body);\n});\n\n"})})}),(0,r.jsx)(i.Z,{value:"bash",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# You can also use wget\ncurl -X GET /api/v2/feed/explore/ \\\n  -H 'Accept: application/json' \\\n  -H 'Authorization: Bearer {access_token}'\n"})})})]}),"\n",(0,r.jsx)(n.h2,{id:"responses",children:"Responses"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Status"}),(0,r.jsx)(n.th,{children:"Meaning"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Schema"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"200"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://tools.ietf.org/html/rfc7231#section-6.3.1",children:"OK"})}),(0,r.jsx)(n.td,{children:"Response status code"}),(0,r.jsx)(n.td,{children:"Inline"})]})})]}),"\n",(0,r.jsx)(n.h3,{id:"response-schema",children:"Response Schema"}),"\n",(0,r.jsxs)(n.p,{children:["Status Code ",(0,r.jsx)(n.strong,{children:"200"})]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Required"}),(0,r.jsx)(n.th,{children:"Restrictions"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\xbb count"}),(0,r.jsx)(n.td,{children:"integer"}),(0,r.jsx)(n.td,{children:"false"}),(0,r.jsx)(n.td,{children:"none"}),(0,r.jsx)(n.td,{children:"Total results count"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\xbb next"}),(0,r.jsx)(n.td,{children:"string(uri)\xa6null"}),(0,r.jsx)(n.td,{children:"false"}),(0,r.jsx)(n.td,{children:"none"}),(0,r.jsx)(n.td,{children:"Next page url"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\xbb previous"}),(0,r.jsx)(n.td,{children:"string(uri)\xa6null"}),(0,r.jsx)(n.td,{children:"false"}),(0,r.jsx)(n.td,{children:"none"}),(0,r.jsx)(n.td,{children:"Previous page url"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\xbb results"}),(0,r.jsxs)(n.td,{children:["list(",(0,r.jsx)(n.a,{href:"/docs/apireference/v2/schemas/feed",children:"Feed"}),")"]}),(0,r.jsx)(n.td,{children:"false"}),(0,r.jsx)(n.td,{children:"none"}),(0,r.jsx)(n.td,{children:"List of results"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"example-responses",children:"Example responses"}),"\n",(0,r.jsx)(l.Z,{defaultValue:"200",values:[{label:"200",value:"200"}],children:(0,r.jsx)(i.Z,{value:"200",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "count": "integer",\n  "next": "string(uri)",\n  "previous": "string(uri)",\n  "results": [\n    {\n      "type": "string",\n      "discussion": {\n              "id": "integer",\n              "type": "string",\n              "last_activity_at": "string",\n              "author": {User},\n              "added_at": "string",\n              "last_edited_at": "string",\n              "html": "string",\n              "summary": "string",\n              "deleted": "boolean",\n              "collapsed": "boolean",\n              "comment_count": "integer",\n              "view_count": "integer",\n              "vote_count": "integer",\n              "reactions_count": [{Reaction}],\n              "voted": "boolean",\n              "reaction": {Reaction},\n              "follower_count": "integer",\n              "followed": "boolean",\n              "suspended": "boolean",\n              "flag_count": "integer",\n              "share_count": "integer",\n              "slug": "string",\n              "categories": [{Cateogry}],\n              "medias": [{Media}],\n              "location": "string",\n              "addressing": ["integer"],\n              "tags": ["integer"],\n              "poll": {Poll},\n              "title": "string"\n      },\n      "seen_by_id": ["integer"],\n      "has_boost": "boolean",\n    }\n  ]\n}\n'})})})})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>i});var r=t(67294);const s={},l=r.createContext(s);function i(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);