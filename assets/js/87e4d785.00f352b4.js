"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[1693],{3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),p=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),c=p(n),m=r,g=c["".concat(s,".").concat(m)]||c[m]||u[m]||l;return n?a.createElement(g,i(i({ref:e},d),{},{components:n})):a.createElement(g,i({ref:e},d))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8215:function(t,e,n){var a=n(7294);e.Z=function(t){var e=t.children,n=t.hidden,r=t.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},e)}},5064:function(t,e,n){n.d(e,{Z:function(){return p}});var a=n(7294),r=n(9443);var l=function(){var t=(0,a.useContext)(r.Z);if(null==t)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return t},i=n(6010),o="tabItem_1uMI",s="tabItemActive_2DSg";var p=function(t){var e,n=t.lazy,r=t.block,p=t.defaultValue,d=t.values,u=t.groupId,c=t.className,m=a.Children.toArray(t.children),g=null!=d?d:m.map((function(t){return{value:t.props.value,label:t.props.label}})),f=null!=p?p:null==(e=m.find((function(t){return t.props.default})))?void 0:e.props.value,k=l(),N=k.tabGroupChoices,h=k.setTabGroupChoices,b=(0,a.useState)(f),v=b[0],y=b[1],_=[];if(null!=u){var T=N[u];null!=T&&T!==v&&g.some((function(t){return t.value===T}))&&y(T)}var x=function(t){var e=t.currentTarget,n=_.indexOf(e),a=g[n].value;y(a),null!=u&&(h(u,a),setTimeout((function(){var t,n,a,r,l,i,o,p;(t=e.getBoundingClientRect(),n=t.top,a=t.left,r=t.bottom,l=t.right,i=window,o=i.innerHeight,p=i.innerWidth,n>=0&&l<=p&&r<=o&&a>=0)||(e.scrollIntoView({block:"center",behavior:"smooth"}),e.classList.add(s),setTimeout((function(){return e.classList.remove(s)}),2e3))}),150))},w=function(t){var e,n=null;switch(t.key){case"ArrowRight":var a=_.indexOf(t.target)+1;n=_[a]||_[0];break;case"ArrowLeft":var r=_.indexOf(t.target)-1;n=_[r]||_[_.length-1]}null==(e=n)||e.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},c)},g.map((function(t){var e=t.value,n=t.label;return a.createElement("li",{role:"tab",tabIndex:v===e?0:-1,"aria-selected":v===e,className:(0,i.Z)("tabs__item",o,{"tabs__item--active":v===e}),key:e,ref:function(t){return _.push(t)},onKeyDown:w,onFocus:x,onClick:x},null!=n?n:e)}))),n?(0,a.cloneElement)(m.filter((function(t){return t.props.value===v}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},m.map((function(t,e){return(0,a.cloneElement)(t,{key:e,hidden:t.props.value!==v})}))))}},9443:function(t,e,n){var a=(0,n(7294).createContext)(void 0);e.Z=a},6227:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return p},contentTitle:function(){return d},metadata:function(){return u},toc:function(){return c},default:function(){return g}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=n(5064),o=n(8215),s=["components"],p={sidebar_label:"Update a specific Post",sidebar_position:5,title:"Update a specific Post"},d=void 0,u={unversionedId:"apireference/v2/post/update_a_specific_post",id:"apireference/v2/post/update_a_specific_post",isDocsHomePage:!1,title:"Update a specific Post",description:"This endpoint updates a specific post",source:"@site/docs/apireference/v2/post/update_a_specific_post.md",sourceDirName:"apireference/v2/post",slug:"/apireference/v2/post/update_a_specific_post",permalink:"/docs/apireference/v2/post/update_a_specific_post",editUrl:"https://github.com/selfcommunity/developers_doc/edit/main/docs/apireference/v2/post/update_a_specific_post.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_label:"Update a specific Post",sidebar_position:5,title:"Update a specific Post"},sidebar:"apireferenceSidebar",previous:{title:"Get a specific Post",permalink:"/docs/apireference/v2/post/get_a_specific_post"},next:{title:"Delete a Post",permalink:"/docs/apireference/v2/post/delete_a_post"}},c=[{value:"HTTP Request",id:"http-request",children:[{value:"Parameters",id:"parameters",children:[]},{value:"Example Request",id:"example-request",children:[]}]},{value:"Responses",id:"responses",children:[{value:"Example responses",id:"example-responses",children:[]}]}],m={toc:c};function g(t){var e=t.components,n=(0,r.Z)(t,s);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This endpoint updates a specific post"),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"This operation requires authentication. The logged user must be the post creator."))),(0,l.kt)("h2",{id:"http-request"},"HTTP Request"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"PUT /api/v2/post/{id}/")),(0,l.kt)("h3",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"In"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\xbb text"),(0,l.kt)("td",{parentName:"tr",align:null},"body"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"The content of the post in html format, it can contain some ",(0,l.kt)("a",{parentName:"td",href:"#selfcommunity-api-mention"},"mentions"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\xbb categories"),(0,l.kt)("td",{parentName:"tr",align:null},"body"),(0,l.kt)("td",{parentName:"tr",align:null},"list(integer)"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"List of id of ",(0,l.kt)("a",{parentName:"td",href:"../schemas/category"},"Category"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\xbb medias"),(0,l.kt)("td",{parentName:"tr",align:null},"body"),(0,l.kt)("td",{parentName:"tr",align:null},"list(integer)"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"List of id of ",(0,l.kt)("a",{parentName:"td",href:"../schemas/media"},"Media"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\xbb location"),(0,l.kt)("td",{parentName:"tr",align:null},"body"),(0,l.kt)("td",{parentName:"tr",align:null},"object\xa6null"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"The Location object to associate at the post")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\xbb\xbb location"),(0,l.kt)("td",{parentName:"tr",align:null},"body"),(0,l.kt)("td",{parentName:"tr",align:null},"string\xa6null"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"none")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\xbb\xbb lat"),(0,l.kt)("td",{parentName:"tr",align:null},"body"),(0,l.kt)("td",{parentName:"tr",align:null},"number\xa6null"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"none")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\xbb\xbb lng"),(0,l.kt)("td",{parentName:"tr",align:null},"body"),(0,l.kt)("td",{parentName:"tr",align:null},"number\xa6null"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"none")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\xbb poll"),(0,l.kt)("td",{parentName:"tr",align:null},"body"),(0,l.kt)("td",{parentName:"tr",align:null},"object\xa6null"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"The poll object to associate at the post")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\xbb\xbb title"),(0,l.kt)("td",{parentName:"tr",align:null},"body"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"none")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\xbb\xbb multiple_choices"),(0,l.kt)("td",{parentName:"tr",align:null},"body"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"none")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\xbb\xbb expiration_at"),(0,l.kt)("td",{parentName:"tr",align:null},"body"),(0,l.kt)("td",{parentName:"tr",align:null},"string(date-time)"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"none")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\xbb\xbb choices"),(0,l.kt)("td",{parentName:"tr",align:null},"body"),(0,l.kt)("td",{parentName:"tr",align:null},"list(object)"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"none")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\xbb\xbb\xbb choice"),(0,l.kt)("td",{parentName:"tr",align:null},"body"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"none")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\xbb addressing"),(0,l.kt)("td",{parentName:"tr",align:null},"body"),(0,l.kt)("td",{parentName:"tr",align:null},"list(integer)"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"List of id of ",(0,l.kt)("a",{parentName:"td",href:"../schemas/tag"},"Tag"))))),(0,l.kt)("h4",{id:"example-body-parameters"},"Example Body Parameters"),(0,l.kt)(i.Z,{defaultValue:"json",values:[{label:"JSON",value:"json"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"json",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "text": "string",\n  "categories": [0],\n  "medias": [0],\n  "location": {\n    "location": "string",\n    "lat": 0,\n    "lng": 0\n  },\n  "poll": {\n    "title": "string",\n    "multiple_choices": true,\n    "closed": true,\n    "expiration_at": "2019-08-24T14:15:22Z",\n    "choices": [\n      {\n        "choice": "string"\n      }\n    ]\n  },\n  "addressing": []\n}\n')))),(0,l.kt)("h3",{id:"example-request"},"Example Request"),(0,l.kt)(i.Z,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"Bash",value:"bash"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'const inputBody = \'{\n  "text": "string",\n  "categories": [0],\n  "medias": [0],\n  "location": {\n    "location": "string",\n    "lat": 0,\n    "lng": 0\n  },\n  "poll": {\n    "title": "string",\n    "multiple_choices": true,\n    "closed": true,\n    "expiration_at": "2019-08-24T14:15:22Z",\n    "choices": [\n      {\n        "choice": "string"\n      }\n    ]\n  },\n  "addressing": []\n}\';\nconst headers = {\n  \'Content-Type\':\'application/json\',\n  \'Accept\':\'application/json\',\n  \'Authorization\': \'Bearer {access_token}\'\n};\n\nfetch(\'/api/v2/post/{id}/\',\n{\n  method: \'PUT\',\n  body: inputBody,\n  headers: headers\n})\n.then(function(res) {\n    return res.json();\n}).then(function(body) {\n    console.log(body);\n});\n\n'))),(0,l.kt)(o.Z,{value:"bash",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'# You can also use wget\ncurl -X PUT /api/v2/post/{id}/ \\\n  -H \'Content-Type: application/json\' \\\n  -H \'Accept: application/json\' \\\n  -H \'Authorization: Bearer {access_token}\' \\\n  --data-raw \'{\n    "text": "string",\n    "categories": [0],\n    "medias": [0],\n    "location": {\n      "location": "string",\n      "lat": 0,\n      "lng": 0\n    },\n    "poll": {\n      "title": "string",\n      "multiple_choices": true,\n      "closed": true,\n      "expiration_at": "2019-08-24T14:15:22Z",\n      "choices": [\n        {\n          "choice": "string"\n        }\n      ]\n    },\n    "addressing": []\n  }\'\n')))),(0,l.kt)("h2",{id:"responses"},"Responses"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Status"),(0,l.kt)("th",{parentName:"tr",align:null},"Meaning"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Schema"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"200"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://tools.ietf.org/html/rfc7231#section-6.3.1"},"OK")),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"../schemas/update_post"},"UpdatePost"))))),(0,l.kt)("h3",{id:"example-responses"},"Example responses"),(0,l.kt)(i.Z,{defaultValue:"200",values:[{label:"200",value:"200"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"200",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": 0,\n  "categories": [\n    {\n      "id": 0,\n      "tags": [],\n      "order": 123,\n      "name": "string",\n      "name_synonyms": "string",\n      "slug": "string",\n      "slogan": "string",\n      "html_info": "string",\n      "seo_title": "string",\n      "seo_description": "string",\n      "auto_follow": "string",\n      "active": true,\n      "deleted": false,\n      "image_original": "string",\n      "image_bigger": "string",\n      "image_big": "string",\n      "image_medium": "string",\n      "image_small": "string",\n      "emotional_image_original": "string",\n      "emotional_image_position": 123,\n      "lastmod_datetime": "2019-08-24T14:15:22Z",\n      "stream_order_by": "string",\n    }\n  ],\n  "medias": [\n    {\n      "id": 0,\n      "added_at": "2019-08-24T14:15:22Z",\n      "type": "url",\n      "title": "string",\n      "description": "string",\n      "url": "https://example.com",\n      "image": "string",\n      "image_width": 0,\n      "image_height": 0,\n      "order": 0,\n      "embed": {\n        "id": 0,\n        "embed_type": "string",\n        "embed_id": "string",\n        "url": "string",\n        "metadata": {}\n      }\n    }\n  ],\n  "location": {\n    "location": "string",\n    "lat": 0,\n    "lng": 0\n  },\n  "poll": {\n    "id": 0,\n    "title": "string",\n    "multiple_choices": true,\n    "added_at": "2019-08-24T14:15:22Z",\n    "modified_at": "2019-08-24T14:15:22Z",\n    "closed": true,\n    "expiration_at": "2019-08-24T14:15:22Z",\n    "hidden": "string",\n    "choices": [\n      {\n        "id": 0,\n        "choice": "string",\n        "order": 0,\n        "added_at": "2019-08-24T14:15:22Z",\n        "deleted": "string",\n        "vote_count": 0,\n        "voted": true\n      }\n    ]\n  },\n  "last_activity_at": "2019-08-24T14:15:22Z",\n  "author": {\n    "id": 0,\n    "username": "string",\n    "real_name": "string",\n    "date_joined": "2019-08-24T14:15:22Z",\n    "bio": "string",\n    "location": "string",\n    "location_lat_lng": "string",\n    "position_lat_lng": "string",\n    "date_of_birth": "string",\n    "description": "string",\n    "gender": "Male",\n    "website": "https://example.com",\n    "avatar": "string",\n    "cover": "string",\n    "ext_id": "string",\n    "tags": [],\n    "reputation": 111,\n    "followings_counter": 0,\n    "followers_counter": 0,\n    "posts_counter": 0,\n    "discussions_counter": 0,\n    "statuses_counter": 0,\n    "polls_counter": 0\n  },\n  "added_at": "2019-08-24T14:15:22Z",\n  "html": "string",\n  "summary": "string",\n  "deleted": true,\n  "collapsed": false,\n  "comment_count": 0,\n  "vote_count": 0,\n  "voted": false,\n  "flag_count": 0,\n  "share_count": 0,\n  "addressing": []\n}\n')))))}g.isMDXComponent=!0},6010:function(t,e,n){function a(t){var e,n,r="";if("string"==typeof t||"number"==typeof t)r+=t;else if("object"==typeof t)if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=a(t[e]))&&(r&&(r+=" "),r+=n);else for(e in t)t[e]&&(r&&(r+=" "),r+=e);return r}function r(){for(var t,e,n=0,r="";n<arguments.length;)(t=arguments[n++])&&(e=a(t))&&(r&&(r+=" "),r+=e);return r}n.d(e,{Z:function(){return r}})}}]);