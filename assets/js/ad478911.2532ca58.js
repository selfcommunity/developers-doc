"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[6130],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(t),m=i,g=p["".concat(l,".").concat(m)]||p[m]||d[m]||a;return t?r.createElement(g,s(s({ref:n},u),{},{components:t})):r.createElement(g,s({ref:n},u))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,s=new Array(a);s[0]=p;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var c=2;c<a;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},8215:function(e,n,t){var r=t(7294);n.Z=function(e){var n=e.children,t=e.hidden,i=e.className;return r.createElement("div",{role:"tabpanel",hidden:t,className:i},n)}},5064:function(e,n,t){t.d(n,{Z:function(){return c}});var r=t(7294),i=t(9443);var a=function(){var e=(0,r.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=t(6010),o="tabItem_1uMI",l="tabItemActive_2DSg";var c=function(e){var n,t=e.lazy,i=e.block,c=e.defaultValue,u=e.values,d=e.groupId,p=e.className,m=r.Children.toArray(e.children),g=null!=u?u:m.map((function(e){return{value:e.props.value,label:e.props.label}})),f=null!=c?c:null==(n=m.find((function(e){return e.props.default})))?void 0:n.props.value,v=a(),h=v.tabGroupChoices,b=v.setTabGroupChoices,_=(0,r.useState)(f),k=_[0],y=_[1],N=[];if(null!=d){var T=h[d];null!=T&&T!==k&&g.some((function(e){return e.value===T}))&&y(T)}var w=function(e){var n=e.currentTarget,t=N.indexOf(n),r=g[t].value;y(r),null!=d&&(b(d,r),setTimeout((function(){var e,t,r,i,a,s,o,c;(e=n.getBoundingClientRect(),t=e.top,r=e.left,i=e.bottom,a=e.right,s=window,o=s.innerHeight,c=s.innerWidth,t>=0&&a<=c&&i<=o&&r>=0)||(n.scrollIntoView({block:"center",behavior:"smooth"}),n.classList.add(l),setTimeout((function(){return n.classList.remove(l)}),2e3))}),150))},x=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r=N.indexOf(e.target)+1;t=N[r]||N[0];break;case"ArrowLeft":var i=N.indexOf(e.target)-1;t=N[i]||N[N.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":i},p)},g.map((function(e){var n=e.value,t=e.label;return r.createElement("li",{role:"tab",tabIndex:k===n?0:-1,"aria-selected":k===n,className:(0,s.Z)("tabs__item",o,{"tabs__item--active":k===n}),key:n,ref:function(e){return N.push(e)},onKeyDown:x,onFocus:w,onClick:w},null!=t?t:n)}))),t?(0,r.cloneElement)(m.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},m.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==k})}))))}},9443:function(e,n,t){var r=(0,t(7294).createContext)(void 0);n.Z=r},9959:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return d},toc:function(){return p},default:function(){return g}});var r=t(7462),i=t(3366),a=(t(7294),t(3905)),s=t(5064),o=t(8215),l=["components"],c={sidebar_label:"Get a specific Discussion",sidebar_position:5,title:"Get a specific Discussion"},u=void 0,d={unversionedId:"apireference/v2/discussion/get_a_specific_discussion",id:"apireference/v2/discussion/get_a_specific_discussion",isDocsHomePage:!1,title:"Get a specific Discussion",description:"This endpoint retrieves a specific discussion using ID.",source:"@site/docs/apireference/v2/discussion/get_a_specific_discussion.md",sourceDirName:"apireference/v2/discussion",slug:"/apireference/v2/discussion/get_a_specific_discussion",permalink:"/docs/apireference/v2/discussion/get_a_specific_discussion",editUrl:"https://github.com/selfcommunity/developers_doc/edit/main/docs/apireference/v2/discussion/get_a_specific_discussion.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_label:"Get a specific Discussion",sidebar_position:5,title:"Get a specific Discussion"},sidebar:"apireferenceSidebar",previous:{title:"Create a Discussion",permalink:"/docs/apireference/v2/discussion/create_a_discussion"},next:{title:"Update a specific Discussion",permalink:"/docs/apireference/v2/discussion/update_a_specific_discussion"}},p=[{value:"HTTP Request",id:"http-request",children:[{value:"Parameters",id:"parameters",children:[]},{value:"Example Request",id:"example-request",children:[]}]},{value:"Responses",id:"responses",children:[{value:"Example responses",id:"example-responses",children:[]}]}],m={toc:p};function g(e){var n=e.components,t=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This endpoint retrieves a specific discussion using ID."),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"This operation requires authentication only if ",(0,a.kt)("inlineCode",{parentName:"p"},"content_availability")," community option is false"))),(0,a.kt)("h2",{id:"http-request"},"HTTP Request"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"GET /api/v2/discussion/{id}/")),(0,a.kt)("h3",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"In"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"id"),(0,a.kt)("td",{parentName:"tr",align:null},"path"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"true"),(0,a.kt)("td",{parentName:"tr",align:null},"A unique integer value identifying this discussion.")))),(0,a.kt)("h3",{id:"example-request"},"Example Request"),(0,a.kt)(s.Z,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"Bash",value:"bash"}],mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const headers = {\n  'Accept':'application/json',\n  'Authorization': 'Bearer {access_token}'\n};\n\nfetch('/api/v2/discussion/{id}/',\n{\n  method: 'GET',\n\n  headers: headers\n})\n.then(function(res) {\n    return res.json();\n}).then(function(body) {\n    console.log(body);\n});\n\n"))),(0,a.kt)(o.Z,{value:"bash",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# You can also use wget\ncurl -X GET /api/v2/discussion/{id}/ \\\n  -H 'Accept: application/json' \\\n  -H 'Authorization: Bearer {access_token}'\n")))),(0,a.kt)("h2",{id:"responses"},"Responses"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Status"),(0,a.kt)("th",{parentName:"tr",align:null},"Meaning"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Schema"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"200"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://tools.ietf.org/html/rfc7231#section-6.3.1"},"OK")),(0,a.kt)("td",{parentName:"tr",align:null},"none"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"#schemadiscussion"},"Discussion"))))),(0,a.kt)("h3",{id:"example-responses"},"Example responses"),(0,a.kt)(s.Z,{defaultValue:"200",values:[{label:"200",value:"200"}],mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"200",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": 0,\n  "categories": [\n      {\n      "id": 0,\n      "tags": [],\n      "order": 123,\n      "name": "string",\n      "name_synonyms": "string",\n      "slug": "string",\n      "slogan": "string",\n      "html_info": "string",\n      "seo_title": "string",\n      "seo_description": "string",\n      "auto_follow": "string",\n      "active": true,\n      "deleted": false,\n      "image_original": "string",\n      "image_bigger": "string",\n      "image_big": "string",\n      "image_medium": "string",\n      "image_small": "string",\n      "emotional_image_original": "string",\n      "emotional_image_position": 123,\n      "lastmod_datetime": "2019-08-24T14:15:22Z",\n      "stream_order_by": "string",\n    }\n  ],\n  "medias": [\n    {\n      "id": 0,\n      "added_at": "2019-08-24T14:15:22Z",\n      "type": "url",\n      "title": "string",\n      "description": "string",\n      "url": "https://example.com",\n      "image": "string",\n      "image_width": 0,\n      "image_height": 0,\n      "order": 0,\n      "embed": {\n        "id": 0,\n        "embed_type": "string",\n        "embed_id": "string",\n        "url": "string",\n        "metadata": {}\n      }\n    }\n  ],\n  "location": {\n    "location": "string",\n    "lat": 0,\n    "lng": 0\n  },\n  "poll": {\n    "id": 0,\n    "title": "string",\n    "multiple_choices": true,\n    "added_at": "2019-08-24T14:15:22Z",\n    "modified_at": "2019-08-24T14:15:22Z",\n    "closed": true,\n    "expiration_at": "2019-08-24T14:15:22Z",\n    "hidden": "string",\n    "choices": [\n      {\n        "id": 0,\n        "choice": "string",\n        "order": 0,\n        "added_at": "2019-08-24T14:15:22Z",\n        "deleted": "string",\n        "vote_count": 0,\n        "voted": true\n      }\n    ]\n  },\n  "last_activity_at": "2019-08-24T14:15:22Z",\n  "author": {\n    "id": 0,\n    "username": "string",\n    "real_name": "string",\n    "date_joined": "2019-08-24T14:15:22Z",\n    "bio": "string",\n    "location": "string",\n    "location_lat_lng": "string",\n    "position_lat_lng": "string",\n    "date_of_birth": "string",\n    "description": "string",\n    "gender": "Male",\n    "website": "https://example.com",\n    "avatar": "string",\n    "cover": "string",\n    "ext_id": "string",\n    "tags": [],\n    "reputation": 111,\n    "followings_counter": 1,\n    "followers_counter": 1,\n    "posts_counter": 2,\n    "discussions_counter": 4,\n    "statuses_counter": 1,\n    "polls_counter": 6\n  },\n  "added_at": "2019-08-24T14:15:22Z",\n  "html": "string",\n  "summary": "string",\n  "deleted": true,\n  "collapsed": false,\n  "comment_count": 0,\n  "vote_count": "string",\n  "voted": false,\n  "flag_count": 0,\n  "share_count": 0,\n  "addressing": [],\n  "title": "string",\n  "slug": "string",\n  "view_count": 1,\n  "follower_count": "string"\n}\n')))))}g.isMDXComponent=!0},6010:function(e,n,t){function r(e){var n,t,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=r(e[n]))&&(i&&(i+=" "),i+=t);else for(n in e)e[n]&&(i&&(i+=" "),i+=n);return i}function i(){for(var e,n,t=0,i="";t<arguments.length;)(e=arguments[t++])&&(n=r(e))&&(i&&(i+=" "),i+=n);return i}t.d(n,{Z:function(){return i}})}}]);