"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[8980],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},5064:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(7294),a=n(9443);var o=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=n(6010),i="tabItem_1uMI",s="tabItemActive_2DSg";var c=function(e){var t,n=e.lazy,a=e.block,c=e.defaultValue,u=e.values,p=e.groupId,d=e.className,m=r.Children.toArray(e.children),f=null!=u?u:m.map((function(e){return{value:e.props.value,label:e.props.label}})),g=null!=c?c:null==(t=m.find((function(e){return e.props.default})))?void 0:t.props.value,v=o(),h=v.tabGroupChoices,y=v.setTabGroupChoices,b=(0,r.useState)(g),k=b[0],N=b[1],w=[];if(null!=p){var _=h[p];null!=_&&_!==k&&f.some((function(e){return e.value===_}))&&N(_)}var x=function(e){var t=e.currentTarget,n=w.indexOf(t),r=f[n].value;N(r),null!=p&&(y(p,r),setTimeout((function(){var e,n,r,a,o,l,i,c;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,o=e.right,l=window,i=l.innerHeight,c=l.innerWidth,n>=0&&o<=c&&a<=i&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},T=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=w.indexOf(e.target)+1;n=w[r]||w[0];break;case"ArrowLeft":var a=w.indexOf(e.target)-1;n=w[a]||w[w.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},d)},f.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,className:(0,l.Z)("tabs__item",i,{"tabs__item--active":k===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:T,onFocus:x,onClick:x},null!=n?n:t)}))),n?(0,r.cloneElement)(m.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},m.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==k})}))))}},9443:function(e,t,n){var r=(0,n(7294).createContext)(void 0);t.Z=r},9403:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return d},default:function(){return f}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),l=n(5064),i=n(8215),s=["components"],c={sidebar_label:"Get Category's Followers",sidebar_position:10,title:"Get Category's Followers"},u=void 0,p={unversionedId:"apireference/v2/category/get_categorys_followers",id:"apireference/v2/category/get_categorys_followers",isDocsHomePage:!1,title:"Get Category's Followers",description:"This endpoint returns all followers of a specific category.",source:"@site/docs/apireference/v2/category/get_categorys_followers.md",sourceDirName:"apireference/v2/category",slug:"/apireference/v2/category/get_categorys_followers",permalink:"/docs/apireference/v2/category/get_categorys_followers",editUrl:"https://github.com/selfcommunity/developers_doc/edit/main/docs/apireference/v2/category/get_categorys_followers.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_label:"Get Category's Followers",sidebar_position:10,title:"Get Category's Followers"},sidebar:"apireferenceSidebar",previous:{title:"Get Category's Audience",permalink:"/docs/apireference/v2/category/get_categorys_audience"},next:{title:"Get Category's Feed",permalink:"/docs/apireference/v2/category/get_categorys_feed"}},d=[{value:"HTTP Request",id:"http-request",children:[{value:"Parameters",id:"parameters",children:[]},{value:"Example Request",id:"example-request",children:[]}]},{value:"Responses",id:"responses",children:[{value:"Example responses",id:"example-responses",children:[]}]}],m={toc:d};function f(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This endpoint returns all followers of a specific category."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This operation requires authentication"))),(0,o.kt)("h2",{id:"http-request"},"HTTP Request"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"GET /api/v2/category/{id}/followers/")),(0,o.kt)("h3",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"In"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Required"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"id"),(0,o.kt)("td",{parentName:"tr",align:null},"path"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"true"),(0,o.kt)("td",{parentName:"tr",align:null},"A unique integer value identifying this Category.")))),(0,o.kt)("h3",{id:"example-request"},"Example Request"),(0,o.kt)(l.Z,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"Bash",value:"bash"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const headers = {\n  'Accept':'application/json',\n  'Authorization': 'Bearer {access_token}'\n};\n\nfetch('/api/v2/category/{id}/followers/',\n{\n  method: 'GET',\n\n  headers: headers\n})\n.then(function(res) {\n    return res.json();\n}).then(function(body) {\n    console.log(body);\n});\n\n"))),(0,o.kt)(i.Z,{value:"bash",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# You can also use wget\ncurl -X GET /api/v2/category/{id}/followers/ \\\n  -H 'Accept: application/json'\n  -H 'Authorization: Bearer {access_token}'\n")))),(0,o.kt)("h2",{id:"responses"},"Responses"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Status"),(0,o.kt)("th",{parentName:"tr",align:null},"Meaning"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Schema"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"200"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://tools.ietf.org/html/rfc7231#section-6.3.1"},"OK")),(0,o.kt)("td",{parentName:"tr",align:null},"none"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"#schemauser"},"User"))))),(0,o.kt)("h3",{id:"example-responses"},"Example responses"),(0,o.kt)(l.Z,{defaultValue:"200",values:[{label:"200",value:"200"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"200",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "count": 123,\n  "next": "string(uri)",\n  "previous": "string(uri)",\n  "results": [\n    {\n      "id": 1,\n      "username": "string",\n      "real_name": "string",\n      "date_joined": "2019-08-24T14:15:22Z",\n      "bio": "string",\n      "location": "string",\n      "location_lat_lng": "string",\n      "position_lat_lng": "string",\n      "date_of_birth": "string",\n      "description": "string",\n      "gender": "Male",\n      "website": "https://example.com",\n      "avatar": "string",\n      "cover": "string",\n      "ext_id": "string",\n      "tags": [],\n      "reputation": 1,\n      "connection_status": "followed",\n      "followings_counter": 0,\n      "followers_counter": 0,\n      "posts_counter": 0,\n      "discussions_counter": 0,\n      "statuses_counter": 0,\n      "polls_counter": 0\n    }\n  ]\n}\n')))))}f.isMDXComponent=!0},6010:function(e,t,n){function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})}}]);