"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[6974],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,f=d["".concat(p,".").concat(m)]||d[m]||c[m]||i;return n?a.createElement(f,o(o({ref:t},u),{},{components:n})):a.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},5064:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(7294),r=n(9443);var i=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},o=n(6010),l="tabItem_1uMI",p="tabItemActive_2DSg";var s=function(e){var t,n=e.lazy,r=e.block,s=e.defaultValue,u=e.values,c=e.groupId,d=e.className,m=a.Children.toArray(e.children),f=null!=u?u:m.map((function(e){return{value:e.props.value,label:e.props.label}})),k=null!=s?s:null==(t=m.find((function(e){return e.props.default})))?void 0:t.props.value,b=i(),h=b.tabGroupChoices,v=b.setTabGroupChoices,g=(0,a.useState)(k),N=g[0],y=g[1],_=[];if(null!=c){var w=h[c];null!=w&&w!==N&&f.some((function(e){return e.value===w}))&&y(w)}var T=function(e){var t=e.currentTarget,n=_.indexOf(t),a=f[n].value;y(a),null!=c&&(v(c,a),setTimeout((function(){var e,n,a,r,i,o,l,s;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,i=e.right,o=window,l=o.innerHeight,s=o.innerWidth,n>=0&&i<=s&&r<=l&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(p),setTimeout((function(){return t.classList.remove(p)}),2e3))}),150))},x=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=_.indexOf(e.target)+1;n=_[a]||_[0];break;case"ArrowLeft":var r=_.indexOf(e.target)-1;n=_[r]||_[_.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},d)},f.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,className:(0,o.Z)("tabs__item",l,{"tabs__item--active":N===t}),key:t,ref:function(e){return _.push(e)},onKeyDown:x,onFocus:T,onClick:T},null!=n?n:t)}))),n?(0,a.cloneElement)(m.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},m.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}},9443:function(e,t,n){var a=(0,n(7294).createContext)(void 0);t.Z=a},7173:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return d},default:function(){return f}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=n(5064),l=n(8215),p=["components"],s={sidebar_label:"Update a Specific Webhook Endpoint",sidebar_position:5,title:"Update a Specific Webhook Endpoint"},u=void 0,c={unversionedId:"apireference/v2/webhook/update_a_specific_webhook_endpoint",id:"apireference/v2/webhook/update_a_specific_webhook_endpoint",isDocsHomePage:!1,title:"Update a Specific Webhook Endpoint",description:"This endpoint updates a specific webhook endpoint",source:"@site/docs/apireference/v2/webhook/update_a_specific_webhook_endpoint.md",sourceDirName:"apireference/v2/webhook",slug:"/apireference/v2/webhook/update_a_specific_webhook_endpoint",permalink:"/docs/apireference/v2/webhook/update_a_specific_webhook_endpoint",editUrl:"https://github.com/selfcommunity/developers_doc/edit/main/docs/apireference/v2/webhook/update_a_specific_webhook_endpoint.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_label:"Update a Specific Webhook Endpoint",sidebar_position:5,title:"Update a Specific Webhook Endpoint"},sidebar:"apireferenceSidebar",previous:{title:"Get a specific Webhook Endpoint",permalink:"/docs/apireference/v2/webhook/get_a_specific_webhook_endpoint"},next:{title:"Update a single field of a Specific Webhook Endpoint",permalink:"/docs/apireference/v2/webhook/update_a_single_field_of_a_specific_webhook_endpoint"}},d=[{value:"HTTP Request",id:"http-request",children:[{value:"Parameters",id:"parameters",children:[]},{value:"Example Request",id:"example-request",children:[]}]},{value:"Responses",id:"responses",children:[{value:"Example responses",id:"example-responses",children:[]}]}],m={toc:d};function f(e){var t=e.components,n=(0,r.Z)(e,p);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This endpoint updates a specific webhook endpoint"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This operation requires authentication and admin role."))),(0,i.kt)("h2",{id:"http-request"},"HTTP Request"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"PUT /api/v2/webhook/endpoint/{id}/")),(0,i.kt)("h3",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"In"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"id"),(0,i.kt)("td",{parentName:"tr",align:null},"path"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"true"),(0,i.kt)("td",{parentName:"tr",align:null},"A unique integer value identifying this endpoint")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"\xbb is_active"),(0,i.kt)("td",{parentName:"tr",align:null},"body"),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"false"),(0,i.kt)("td",{parentName:"tr",align:null},"none")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"\xbb target"),(0,i.kt)("td",{parentName:"tr",align:null},"body"),(0,i.kt)("td",{parentName:"tr",align:null},"string(uri)"),(0,i.kt)("td",{parentName:"tr",align:null},"true"),(0,i.kt)("td",{parentName:"tr",align:null},"none")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"\xbb description"),(0,i.kt)("td",{parentName:"tr",align:null},"body"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"false"),(0,i.kt)("td",{parentName:"tr",align:null},"none")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"\xbb events"),(0,i.kt)("td",{parentName:"tr",align:null},"body"),(0,i.kt)("td",{parentName:"tr",align:null},"list"),(0,i.kt)("td",{parentName:"tr",align:null},"true"),(0,i.kt)("td",{parentName:"tr",align:null},"none")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"\xbb\xbb type"),(0,i.kt)("td",{parentName:"tr",align:null},"body"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"true"),(0,i.kt)("td",{parentName:"tr",align:null},"The ",(0,i.kt)("a",{parentName:"td",href:"#list-of-events"},"webhook event type"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"\xbb ssl_cert_verification"),(0,i.kt)("td",{parentName:"tr",align:null},"body"),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"false"),(0,i.kt)("td",{parentName:"tr",align:null},"True if the SSL certificates for HTTPS requests must be enabled")))),(0,i.kt)("h4",{id:"example-body-parameters"},"Example Body Parameters"),(0,i.kt)(o.Z,{defaultValue:"json",values:[{label:"JSON",value:"json"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"json",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "is_active": true,\n  "target": "https://example.com",\n  "description": "string",\n  "events": [\n    {\n      "type": "comment.created"\n    }\n  ],\n  "ssl_cert_verification": true\n}\n')))),(0,i.kt)("h3",{id:"example-request"},"Example Request"),(0,i.kt)(o.Z,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"Bash",value:"bash"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const inputBody = '{\n  \"is_active\": true,\n  \"target\": \"https://example.com\",\n  \"description\": \"string\",\n  \"events\": [\n    {\n      \"type\": \"comment.created\"\n    }\n  ],\n  \"ssl_cert_verification\": true\n}';\nconst headers = {\n  'Content-Type':'application/json',\n  'Accept':'application/json',\n  'Authorization': 'Bearer {access_token}'\n};\n\nfetch('/api/v2/webhook/endpoint/{id}/',\n{\n  method: 'PUT',\n  body: inputBody,\n  headers: headers\n})\n.then(function(res) {\n    return res.json();\n}).then(function(body) {\n    console.log(body);\n});\n\n"))),(0,i.kt)(l.Z,{value:"bash",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'# You can also use wget\ncurl -X PUT /api/v2/webhook/endpoint/{id}/ \\\n  -H \'Content-Type: application/json\' \\\n  -H \'Accept: application/json\' \\\n  -H \'Authorization: Bearer {access_token}\' \\\n  --data-raw \'{\n    "is_active": true,\n    "target": "https://example.com",\n    "description": "string",\n    "events": [\n      {\n        "type": "comment.created"\n      }\n    ],\n    "ssl_cert_verification": true\n  }\'\n')))),(0,i.kt)("h2",{id:"responses"},"Responses"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Status"),(0,i.kt)("th",{parentName:"tr",align:null},"Meaning"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Schema"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"200"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://tools.ietf.org/html/rfc7231#section-6.3.1"},"OK")),(0,i.kt)("td",{parentName:"tr",align:null},"none"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#schemaendpoint"},"Endpoint"))))),(0,i.kt)("h3",{id:"example-responses"},"Example responses"),(0,i.kt)(o.Z,{defaultValue:"200",values:[{label:"200",value:"200"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"200",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": 0,\n  "created_at": "2019-08-24T14:15:22Z",\n  "updated_at": "2019-08-24T14:15:22Z",\n  "is_active": true,\n  "target": "https://example.com",\n  "description": "string",\n  "events": [\n    {\n      "type": "comment.created",\n      "added_at": "2019-08-24T14:15:22Z"\n    }\n  ],\n  "ssl_cert_verification": true\n}\n')))))}f.isMDXComponent=!0},6010:function(e,t,n){function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})}}]);