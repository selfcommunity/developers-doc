"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[91015],{32342:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),a=n(86010);const l={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l.tabItem,i),hidden:n},t)}},71125:(e,t,n)=>{n.d(t,{Z:()=>y});var r=n(87462),a=n(67294),l=n(86010),i=n(63735),s=n(16550),u=n(34423),o=n(20636),p=n(99200);function d(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function c(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,o.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:n}=e;const r=(0,s.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u._X)(l),(0,a.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function k(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,l=c(e),[i,s]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[u,o]=g({queryString:n,groupId:r}),[d,k]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,p.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:r}),f=(()=>{const e=u??d;return m({value:e,tabValues:l})?e:null})();(0,a.useLayoutEffect)((()=>{f&&s(f)}),[f]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),o(e),k(e)}),[o,k,l]),tabValues:l}}var f=n(5730);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function N(e){let{className:t,block:n,selectedValue:s,selectValue:u,tabValues:o}=e;const p=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),c=e=>{const t=e.currentTarget,n=p.indexOf(t),r=o[n].value;r!==s&&(d(t),u(r))},m=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;t=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;t=p[n]??p[p.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},o.map((e=>{let{value:t,label:n,attributes:i}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>p.push(e),onKeyDown:m,onClick:c},i,{className:(0,l.Z)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":s===t})}),n??t)})))}function h(e){let{lazy:t,children:n,selectedValue:r}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function v(e){const t=k(e);return a.createElement("div",{className:(0,l.Z)("tabs-container",b.tabList)},a.createElement(N,(0,r.Z)({},e,t)),a.createElement(h,(0,r.Z)({},e,t)))}function y(e){const t=(0,f.Z)();return a.createElement(v,(0,r.Z)({key:String(t)},e))}},44533:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>g,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var r=n(87462),a=(n(67294),n(3905)),l=n(71125),i=n(32342);const s={sidebar_label:"Get All Users",sidebar_position:1,title:"Get All Users"},u=void 0,o={unversionedId:"apireference/v2/user/get_all_users",id:"apireference/v2/user/get_all_users",title:"Get All Users",description:"This endpoint retrieves the list of all users",source:"@site/docs/apireference/v2/user/get_all_users.md",sourceDirName:"apireference/v2/user",slug:"/apireference/v2/user/get_all_users",permalink:"/docs/apireference/v2/user/get_all_users",draft:!1,editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/apireference/v2/user/get_all_users.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Get All Users",sidebar_position:1,title:"Get All Users"},sidebar:"apireferenceSidebar",previous:{title:"Get Contributions tagged with a Specific Tag",permalink:"/docs/apireference/v2/tag/get_contributions_tagged_with_a_specific_tag"},next:{title:"List Hidden Users",permalink:"/docs/apireference/v2/user/list_hidden_users"}},p={},d=[{value:"HTTP Request",id:"http-request",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Example Request",id:"example-request",level:3},{value:"Responses",id:"responses",level:2},{value:"Response Schema",id:"response-schema",level:3},{value:"Example responses",id:"example-responses",level:3}],c={toc:d},m="wrapper";function g(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This endpoint retrieves the list of all users"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"This operation requires authentication.")),(0,a.kt)("h2",{id:"http-request"},"HTTP Request"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"GET /api/v2/user/")),(0,a.kt)("h3",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"In"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"limit"),(0,a.kt)("td",{parentName:"tr",align:null},"query"),(0,a.kt)("td",{parentName:"tr",align:null},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},"false"),(0,a.kt)("td",{parentName:"tr",align:null},"Number of results to return per page")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"offset"),(0,a.kt)("td",{parentName:"tr",align:null},"query"),(0,a.kt)("td",{parentName:"tr",align:null},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},"false"),(0,a.kt)("td",{parentName:"tr",align:null},"The initial index from which to return the results")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"search"),(0,a.kt)("td",{parentName:"tr",align:null},"query"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"false"),(0,a.kt)("td",{parentName:"tr",align:null},"A search term. Search in fields: username, real_name")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"username"),(0,a.kt)("td",{parentName:"tr",align:null},"query"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"false"),(0,a.kt)("td",{parentName:"tr",align:null},"Filter using field username")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"gender"),(0,a.kt)("td",{parentName:"tr",align:null},"query"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"false"),(0,a.kt)("td",{parentName:"tr",align:null},"Filter using field gender type")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"real_name"),(0,a.kt)("td",{parentName:"tr",align:null},"query"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"false"),(0,a.kt)("td",{parentName:"tr",align:null},"Filter using field real_name")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"location"),(0,a.kt)("td",{parentName:"tr",align:null},"query"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"false"),(0,a.kt)("td",{parentName:"tr",align:null},"Filter using field location")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"description"),(0,a.kt)("td",{parentName:"tr",align:null},"query"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"false"),(0,a.kt)("td",{parentName:"tr",align:null},"Filter using field description")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ordering"),(0,a.kt)("td",{parentName:"tr",align:null},"query"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"false"),(0,a.kt)("td",{parentName:"tr",align:null},"Ordering fields (eg: ",(0,a.kt)("inlineCode",{parentName:"td"},"?ordering=username"),"). Minus char is used for descending ordering, eg. ",(0,a.kt)("inlineCode",{parentName:"td"},"-username"))))),(0,a.kt)("h3",{id:"example-request"},"Example Request"),(0,a.kt)(l.Z,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"Bash",value:"bash"}],mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"js",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const headers = {\n  'Accept':'application/json',\n  'Authorization: Bearer <token>'\n};\n\nfetch('/api/v2/user/',\n{\n  method: 'GET',\n  headers: headers\n})\n.then(function(res) {\n    return res.json();\n}).then(function(body) {\n    console.log(body);\n});\n\n"))),(0,a.kt)(i.Z,{value:"bash",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# You can also use wget\ncurl -X GET /api/v2/user/ \\\n  -H 'Accept: application/json'\n  -H \"Authorization: Bearer <token>\"\n")))),(0,a.kt)("h2",{id:"responses"},"Responses"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Status"),(0,a.kt)("th",{parentName:"tr",align:null},"Meaning"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Schema"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"200"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://tools.ietf.org/html/rfc7231#section-6.3.1"},"OK")),(0,a.kt)("td",{parentName:"tr",align:null},"Response status code"),(0,a.kt)("td",{parentName:"tr",align:null},"Inline")))),(0,a.kt)("h3",{id:"response-schema"},"Response Schema"),(0,a.kt)("p",null,"Status Code ",(0,a.kt)("strong",{parentName:"p"},"200")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"),(0,a.kt)("th",{parentName:"tr",align:null},"Restrictions"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\xbb count"),(0,a.kt)("td",{parentName:"tr",align:null},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},"false"),(0,a.kt)("td",{parentName:"tr",align:null},"none"),(0,a.kt)("td",{parentName:"tr",align:null},"Total results count")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\xbb next"),(0,a.kt)("td",{parentName:"tr",align:null},"string(uri)\xa6null"),(0,a.kt)("td",{parentName:"tr",align:null},"false"),(0,a.kt)("td",{parentName:"tr",align:null},"none"),(0,a.kt)("td",{parentName:"tr",align:null},"Next page url")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\xbb previous"),(0,a.kt)("td",{parentName:"tr",align:null},"string(uri)\xa6null"),(0,a.kt)("td",{parentName:"tr",align:null},"false"),(0,a.kt)("td",{parentName:"tr",align:null},"none"),(0,a.kt)("td",{parentName:"tr",align:null},"Previous page url")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\xbb results"),(0,a.kt)("td",{parentName:"tr",align:null},"list(",(0,a.kt)("a",{parentName:"td",href:"/docs/apireference/v2/schemas/user"},"User"),")"),(0,a.kt)("td",{parentName:"tr",align:null},"false"),(0,a.kt)("td",{parentName:"tr",align:null},"none"),(0,a.kt)("td",{parentName:"tr",align:null},"List of results")))),(0,a.kt)("h3",{id:"example-responses"},"Example responses"),(0,a.kt)(l.Z,{defaultValue:"200",values:[{label:"200",value:"200"}],mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"200",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "count": "integer",\n  "next": "string(uri)",\n  "previous": "string(uri)",\n  "results": [\n    {\n      "id": "integer",\n      "username": "string",\n      "real_name": "string",\n      "avatar": "string",\n      "ext_id": "integer",\n      "followings_counter": "integer",\n      "followers_counter": "integer",\n      "posts_counter": "integer",\n      "discussions_counter": "integer",\n      "polls_counter": "integer",\n      "connection_status": "string",\n      "categories_counter": "integer",\n      "date_joined": "string",\n      "bio": "string",\n      "location": "string",\n      "location_lat_lng": "string",\n      "position_lat_lng": "string",\n      "date_of_birth": "string",\n      "description": "string",\n      "gender": "string",\n      "website": "string",\n      "cover": "string",\n      "tags": [{Tag}],\n      "reputation": "integer",\n      "community_badge": "boolean",\n      "reg_approved": "boolean",\n      "company_name": "string",\n      "company_role": "string"\n    }\n  ]\n}\n')))))}g.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),o=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=o(e.components);return r.createElement(u.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=o(n),m=a,g=d["".concat(u,".").concat(m)]||d[m]||c[m]||l;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var o=2;o<l;o++)i[o]=n[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);