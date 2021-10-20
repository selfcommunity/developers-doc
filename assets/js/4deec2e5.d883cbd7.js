"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[1982],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return d}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),u=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=u(t.components);return a.createElement(s.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),c=u(n),d=r,g=c["".concat(s,".").concat(d)]||c[d]||m[d]||l;return n?a.createElement(g,i(i({ref:e},p),{},{components:n})):a.createElement(g,i({ref:e},p))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8215:function(t,e,n){var a=n(7294);e.Z=function(t){var e=t.children,n=t.hidden,r=t.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},e)}},5064:function(t,e,n){n.d(e,{Z:function(){return u}});var a=n(7294),r=n(9443);var l=function(){var t=(0,a.useContext)(r.Z);if(null==t)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return t},i=n(6010),o="tabItem_1uMI",s="tabItemActive_2DSg";var u=function(t){var e,n=t.lazy,r=t.block,u=t.defaultValue,p=t.values,m=t.groupId,c=t.className,d=a.Children.toArray(t.children),g=null!=p?p:d.map((function(t){return{value:t.props.value,label:t.props.label}})),k=null!=u?u:null==(e=d.find((function(t){return t.props.default})))?void 0:e.props.value,f=l(),b=f.tabGroupChoices,N=f.setTabGroupChoices,h=(0,a.useState)(k),v=h[0],y=h[1],_=[];if(null!=m){var T=b[m];null!=T&&T!==v&&g.some((function(t){return t.value===T}))&&y(T)}var x=function(t){var e=t.currentTarget,n=_.indexOf(e),a=g[n].value;y(a),null!=m&&(N(m,a),setTimeout((function(){var t,n,a,r,l,i,o,u;(t=e.getBoundingClientRect(),n=t.top,a=t.left,r=t.bottom,l=t.right,i=window,o=i.innerHeight,u=i.innerWidth,n>=0&&l<=u&&r<=o&&a>=0)||(e.scrollIntoView({block:"center",behavior:"smooth"}),e.classList.add(s),setTimeout((function(){return e.classList.remove(s)}),2e3))}),150))},w=function(t){var e,n=null;switch(t.key){case"ArrowRight":var a=_.indexOf(t.target)+1;n=_[a]||_[0];break;case"ArrowLeft":var r=_.indexOf(t.target)-1;n=_[r]||_[_.length-1]}null==(e=n)||e.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},c)},g.map((function(t){var e=t.value,n=t.label;return a.createElement("li",{role:"tab",tabIndex:v===e?0:-1,"aria-selected":v===e,className:(0,i.Z)("tabs__item",o,{"tabs__item--active":v===e}),key:e,ref:function(t){return _.push(t)},onKeyDown:w,onFocus:x,onClick:x},null!=n?n:e)}))),n?(0,a.cloneElement)(d.filter((function(t){return t.props.value===v}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},d.map((function(t,e){return(0,a.cloneElement)(t,{key:e,hidden:t.props.value!==v})}))))}},9443:function(t,e,n){var a=(0,n(7294).createContext)(void 0);e.Z=a},2743:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return u},contentTitle:function(){return p},metadata:function(){return m},toc:function(){return c},default:function(){return g}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=n(5064),o=n(8215),s=["components"],u={sidebar_label:"Get All Incubators",sidebar_position:1,title:"Get All Incubators"},p=void 0,m={unversionedId:"apireference/v2/incubator/get_all_incubators",id:"apireference/v2/incubator/get_all_incubators",isDocsHomePage:!1,title:"Get All Incubators",description:"This endpoint retrieves all incubators.",source:"@site/docs/apireference/v2/incubator/get_all_incubators.md",sourceDirName:"apireference/v2/incubator",slug:"/apireference/v2/incubator/get_all_incubators",permalink:"/docs/apireference/v2/incubator/get_all_incubators",editUrl:"https://github.com/selfcommunity/developers_doc/edit/main/docs/apireference/v2/incubator/get_all_incubators.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Get All Incubators",sidebar_position:1,title:"Get All Incubators"},sidebar:"apireferenceSidebar",previous:{title:"Like These feed objects",permalink:"/docs/apireference/v2/feed/like_these"},next:{title:"Get Localities",permalink:"/docs/apireference/v2/locality/get_localities"}},c=[{value:"HTTP Request",id:"http-request",children:[{value:"Parameters",id:"parameters",children:[]},{value:"Example Request",id:"example-request",children:[]}]},{value:"Responses",id:"responses",children:[{value:"Response Schema",id:"response-schema",children:[]},{value:"Example responses",id:"example-responses",children:[]}]}],d={toc:c};function g(t){var e=t.components,n=(0,r.Z)(t,s);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This endpoint retrieves all incubators."),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"This operation requires authentication only if ",(0,l.kt)("inlineCode",{parentName:"p"},"content_availability")," community option is false."))),(0,l.kt)("h2",{id:"http-request"},"HTTP Request"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"GET /api/v2/incubator/")),(0,l.kt)("h3",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"In"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"limit"),(0,l.kt)("td",{parentName:"tr",align:null},"query"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of results to return per page.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"offset"),(0,l.kt)("td",{parentName:"tr",align:null},"query"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"The initial index from which to return the results.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"search"),(0,l.kt)("td",{parentName:"tr",align:null},"query"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"A search term to be applied to the fields 'name' and 'slogan').")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"status"),(0,l.kt)("td",{parentName:"tr",align:null},"query"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"Valid values are from 0 to 3")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ordering"),(0,l.kt)("td",{parentName:"tr",align:null},"query"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"Which field to use when ordering the results.")))),(0,l.kt)("h4",{id:"status-filter-values"},"Status filter Values"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"status"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"pending")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"status"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"proposal")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"status"),(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"approved")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"status"),(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"ignored")))),(0,l.kt)("h3",{id:"example-request"},"Example Request"),(0,l.kt)(i.Z,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"Bash",value:"bash"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"\nconst headers = {\n  'Accept':'application/json',\n  'Authorization': 'Bearer {access_token}'\n};\n\nfetch('/api/v2/incubator/',\n{\n  method: 'GET',\n  headers: headers\n})\n.then(function(res) {\n    return res.json();\n}).then(function(body) {\n    console.log(body);\n});\n\n"))),(0,l.kt)(o.Z,{value:"bash",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# You can also use wget\ncurl -X GET /api/v2/incubator/ \\\n  -H 'Accept: application/json'\n  -H 'Authorization: Bearer {access_token}'\n")))),(0,l.kt)("h2",{id:"responses"},"Responses"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Status"),(0,l.kt)("th",{parentName:"tr",align:null},"Meaning"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Schema"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"200"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://tools.ietf.org/html/rfc7231#section-6.3.1"},"OK")),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"Inline")))),(0,l.kt)("h3",{id:"response-schema"},"Response Schema"),(0,l.kt)("p",null,"Status Code ",(0,l.kt)("strong",{parentName:"p"},"200")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Restrictions"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\xbb count"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"Total results count")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\xbb next"),(0,l.kt)("td",{parentName:"tr",align:null},"string(uri)\xa6null"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"Next page url")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\xbb previous"),(0,l.kt)("td",{parentName:"tr",align:null},"string(uri)\xa6null"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"Previous page url")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\xbb results"),(0,l.kt)("td",{parentName:"tr",align:null},"list(",(0,l.kt)("a",{parentName:"td",href:"../schemas/incubator"},"Incubator"),")"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"List of results")))),(0,l.kt)("h3",{id:"example-responses"},"Example responses"),(0,l.kt)(i.Z,{defaultValue:"200",values:[{label:"200",value:"200"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"200",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "count": 123,\n  "next": string(uri),\n  "previous": string(uri),\n  "results": [\n    {\n      "id": 0,\n      "name": "string",\n      "slug": "string",\n      "slogan": "string",\n      "status": 2,\n      "approved_category": {\n        "id": 0,\n        "tags": [\n          {\n            "id": 0,\n            "active": true,\n            "type": "user",\n            "name": "string",\n            "description": "string",\n            "color": "string",\n            "visible": true,\n            "visibility_boost": true,\n            "deleted": true,\n            "created_at": "2019-08-24T14:15:22Z"\n          }\n        ],\n        "order": -2147483648,\n        "name": "string",\n        "name_synonyms": "string",\n        "slug": "string",\n        "slogan": "string",\n        "html_info": "string",\n        "seo_title": "string",\n        "seo_description": "string",\n        "auto_follow": "none",\n        "active": true,\n        "deleted": true,\n        "image_original": "string",\n        "image_bigger": "string",\n        "image_big": "string",\n        "image_medium": "string",\n        "image_small": "string",\n        "emotional_image_original": "string",\n        "emotional_image_position": -2147483648,\n        "lastmod_datetime": "2019-08-24T14:15:22Z",\n        "stream_order_by": "recent"\n      },\n      "added_at": "2019-08-24T14:15:22Z",\n      "user": {\n        "id": 0,\n        "username": "string",\n        "real_name": "string",\n        "avatar": "string",\n        "ext_id": "string"\n      },\n      "subscribers_count": "string",\n      "subscribers_threshold": "string"\n    }\n  ]\n}\n')))))}g.isMDXComponent=!0},6010:function(t,e,n){function a(t){var e,n,r="";if("string"==typeof t||"number"==typeof t)r+=t;else if("object"==typeof t)if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=a(t[e]))&&(r&&(r+=" "),r+=n);else for(e in t)t[e]&&(r&&(r+=" "),r+=e);return r}function r(){for(var t,e,n=0,r="";n<arguments.length;)(t=arguments[n++])&&(e=a(t))&&(r&&(r+=" "),r+=e);return r}n.d(e,{Z:function(){return r}})}}]);