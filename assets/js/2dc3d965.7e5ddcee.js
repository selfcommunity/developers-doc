"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[8272],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},5064:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(7294),a=n(9443);var o=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=n(6010),i="tabItem_1uMI",u="tabItemActive_2DSg";var s=function(e){var t,n=e.lazy,a=e.block,s=e.defaultValue,c=e.values,p=e.groupId,d=e.className,m=r.Children.toArray(e.children),f=null!=c?c:m.map((function(e){return{value:e.props.value,label:e.props.label}})),v=null!=s?s:null==(t=m.find((function(e){return e.props.default})))?void 0:t.props.value,h=o(),b=h.tabGroupChoices,k=h.setTabGroupChoices,g=(0,r.useState)(v),y=g[0],N=g[1],x=[];if(null!=p){var T=b[p];null!=T&&T!==y&&f.some((function(e){return e.value===T}))&&N(T)}var _=function(e){var t=e.currentTarget,n=x.indexOf(t),r=f[n].value;N(r),null!=p&&(k(p,r),setTimeout((function(){var e,n,r,a,o,l,i,s;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,o=e.right,l=window,i=l.innerHeight,s=l.innerWidth,n>=0&&o<=s&&a<=i&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(u),setTimeout((function(){return t.classList.remove(u)}),2e3))}),150))},w=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=x.indexOf(e.target)+1;n=x[r]||x[0];break;case"ArrowLeft":var a=x.indexOf(e.target)-1;n=x[a]||x[x.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},d)},f.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:(0,l.Z)("tabs__item",i,{"tabs__item--active":y===t}),key:t,ref:function(e){return x.push(e)},onKeyDown:w,onFocus:_,onClick:_},null!=n?n:t)}))),n?(0,r.cloneElement)(m.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},m.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},9443:function(e,t,n){var r=(0,n(7294).createContext)(void 0);t.Z=r},9200:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return d},default:function(){return f}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),l=n(5064),i=n(8215),u=["components"],s={sidebar_label:"Get Main Feed Unseen Count",sidebar_position:3,title:"Get Main Feed Unseen Count"},c=void 0,p={unversionedId:"apireference/v2/feed/main_unseen_count",id:"apireference/v2/feed/main_unseen_count",isDocsHomePage:!1,title:"Get Main Feed Unseen Count",description:"This endpoint retrieves Main Feed unseen count",source:"@site/docs/apireference/v2/feed/main_unseen_count.md",sourceDirName:"apireference/v2/feed",slug:"/apireference/v2/feed/main_unseen_count",permalink:"/docs/apireference/v2/feed/main_unseen_count",editUrl:"https://github.com/selfcommunity/developers_doc/edit/main/docs/apireference/v2/feed/main_unseen_count.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"Get Main Feed Unseen Count",sidebar_position:3,title:"Get Main Feed Unseen Count"},sidebar:"apireferenceSidebar",previous:{title:"Get Explore Feed",permalink:"/docs/apireference/v2/feed/explore"},next:{title:"Mark a Specific Feed Object as Read",permalink:"/docs/apireference/v2/feed/mark_object_as_read"}},d=[{value:"HTTP Request",id:"http-request",children:[{value:"Example Request",id:"example-request",children:[]}]},{value:"Responses",id:"responses",children:[{value:"Response Schema",id:"response-schema",children:[]},{value:"Example responses",id:"example-responses",children:[]}]}],m={toc:d};function f(e){var t=e.components,n=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This endpoint retrieves Main Feed unseen count"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This operation requires authentication"))),(0,o.kt)("h2",{id:"http-request"},"HTTP Request"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"GET /api/v2/feed/unseen/count/")),(0,o.kt)("h3",{id:"example-request"},"Example Request"),(0,o.kt)(l.Z,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"Bash",value:"bash"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"\nconst headers = {\n  'Accept':'application/json',\n  'Authorization': 'Bearer {access_token}'\n};\n\nfetch('/api/v2/feed/unseen/count/',\n{\n  method: 'GET',\n\n  headers: headers\n})\n.then(function(res) {\n    return res.json();\n}).then(function(body) {\n    console.log(body);\n});\n\n"))),(0,o.kt)(i.Z,{value:"bash",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# You can also use wget\ncurl -X GET /api/v2/feed/unseen/count/ \\\n  -H 'Accept: application/json' \\\n  -H 'Authorization: Bearer {access_token}'\n")))),(0,o.kt)("h2",{id:"responses"},"Responses"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Status"),(0,o.kt)("th",{parentName:"tr",align:null},"Meaning"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Schema"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"200"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://tools.ietf.org/html/rfc7231#section-6.3.1"},"OK")),(0,o.kt)("td",{parentName:"tr",align:null},"none"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"#schemafeedunseencount"},"FeedUnseenCount"))))),(0,o.kt)("h3",{id:"response-schema"},"Response Schema"),(0,o.kt)("p",null,"Status Code ",(0,o.kt)("strong",{parentName:"p"},"200")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Required"),(0,o.kt)("th",{parentName:"tr",align:null},"Restrictions"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"\xbb total"),(0,o.kt)("td",{parentName:"tr",align:null},"integer"),(0,o.kt)("td",{parentName:"tr",align:null},"true"),(0,o.kt)("td",{parentName:"tr",align:null},"none"),(0,o.kt)("td",{parentName:"tr",align:null},"none")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"\xbb count_by_category"),(0,o.kt)("td",{parentName:"tr",align:null},"list(object)"),(0,o.kt)("td",{parentName:"tr",align:null},"false"),(0,o.kt)("td",{parentName:"tr",align:null},"none"),(0,o.kt)("td",{parentName:"tr",align:null},"none")))),(0,o.kt)("h3",{id:"example-responses"},"Example responses"),(0,o.kt)(l.Z,{defaultValue:"200",values:[{label:"200",value:"200"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"200",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "count_by_category": [\n        {\n            "id": 1,\n            "count": 67\n        }\n    ],\n    "total": 67\n}\n')))))}f.isMDXComponent=!0},6010:function(e,t,n){function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})}}]);