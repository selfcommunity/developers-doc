"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[36289],{71871:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(67294);function r(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},76018:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(83117),r=n(67294),l=n(5730),i=n(69143),o=n(86010),s="tabItem_LplD";function u(e){var t,n,l,u=e.lazy,d=e.block,p=e.defaultValue,c=e.values,m=e.groupId,f=e.className,g=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=c?c:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,i.lx)(v,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===p?p:null!=(t=null!=p?p:null==(n=g.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(l=g[0])?void 0:l.props.value;if(null!==h&&!v.some((function(e){return e.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=(0,i.UB)(),N=k.tabGroupChoices,y=k.setTabGroupChoices,_=(0,r.useState)(h),T=_[0],w=_[1],x=[],j=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var O=N[m];null!=O&&O!==T&&v.some((function(e){return e.value===O}))&&w(O)}var E=function(e){var t=e.currentTarget,n=x.indexOf(t),a=v[n].value;a!==T&&(j(t),w(a),null!=m&&y(m,a))},Z=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=x.indexOf(e.currentTarget)+1;n=x[a]||x[0];break;case"ArrowLeft":var r=x.indexOf(e.currentTarget)-1;n=x[r]||x[x.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},f)},v.map((function(e){var t=e.value,n=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return x.push(e)},onKeyDown:Z,onFocus:E,onClick:E},l,{className:(0,o.Z)("tabs__item",s,null==l?void 0:l.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),u?(0,r.cloneElement)(g.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function d(e){var t=(0,l.Z)();return r.createElement(u,(0,a.Z)({key:String(t)},e))}},86655:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return d},default:function(){return g},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return m}});var a=n(83117),r=n(80102),l=(n(67294),n(3905)),i=n(76018),o=n(71871),s=["components"],u={sidebar_label:"Like These feed objects",sidebar_position:5,title:"Like These feed objects"},d=void 0,p={unversionedId:"apireference/v2/feed/like_these",id:"apireference/v2/feed/like_these",title:"Like These feed objects",description:"This endpoint retrieves a list of Feed objects similar to the id of passed objects",source:"@site/docs/apireference/v2/feed/like_these.md",sourceDirName:"apireference/v2/feed",slug:"/apireference/v2/feed/like_these",permalink:"/docs/apireference/v2/feed/like_these",editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/apireference/v2/feed/like_these.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_label:"Like These feed objects",sidebar_position:5,title:"Like These feed objects"},sidebar:"apireferenceSidebar",previous:{title:"Mark a Specific Feed Object as Read",permalink:"/docs/apireference/v2/feed/mark_object_as_read"},next:{title:"Get All Incubators",permalink:"/docs/apireference/v2/incubator/get_all_incubators"}},c={},m=[{value:"HTTP Request",id:"http-request",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Example Body Parameters",id:"example-body-parameters",level:4},{value:"Example Request",id:"example-request",level:3},{value:"Responses",id:"responses",level:2},{value:"Example responses",id:"example-responses",level:3}],f={toc:m};function g(e){var t=e.components,n=(0,r.Z)(e,s);return(0,l.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This endpoint retrieves a list of ",(0,l.kt)("a",{parentName:"p",href:"/docs/apireference/v2/schemas/feed"},"Feed")," objects similar to the id of passed objects"),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"This operation requires authentication"))),(0,l.kt)("h2",{id:"http-request"},"HTTP Request"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"POST /api/v2/feed/likethis/")),(0,l.kt)("h3",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"In"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"limit"),(0,l.kt)("td",{parentName:"tr",align:null},"query"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of results to return per page.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"offset"),(0,l.kt)("td",{parentName:"tr",align:null},"query"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"The initial index from which to return the results.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"body"),(0,l.kt)("td",{parentName:"tr",align:null},"list"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"List of ",(0,l.kt)("a",{parentName:"td",href:"/docs/apireference/v2/schemas/feed"},"Feed"),"'s object id")))),(0,l.kt)("h4",{id:"example-body-parameters"},"Example Body Parameters"),(0,l.kt)(i.Z,{defaultValue:"json",values:[{label:"JSON",value:"json"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"json",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "object": [0]\n}\n')))),(0,l.kt)("h3",{id:"example-request"},"Example Request"),(0,l.kt)(i.Z,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"Bash",value:"bash"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const inputBody = {\n    \"object\": [0]\n};\nconst headers = {\n  'Content-Type':'application/x-www-form-urlencoded',\n  'Accept':'application/json',\n  'Authorization': 'Bearer {access_token}'\n};\n\nfetch('/api/v2/feed/likethis/',\n{\n  method: 'POST',\n  body: inputBody,\n  headers: headers\n})\n.then(function(res) {\n    return res.json();\n}).then(function(body) {\n    console.log(body);\n});\n\n"))),(0,l.kt)(o.Z,{value:"bash",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# You can also use wget\ncurl -X POST /api/v2/feed/likethis/ \\\n  -H 'Content-Type: application/x-www-form-urlencoded' \\\n  -H 'Accept: application/json' \\\n  -H 'Authorization: Bearer {access_token}' \\\n  --data-raw '{\n    \"object\": [0]\n  }'\n")))),(0,l.kt)("h2",{id:"responses"},"Responses"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Restrictions"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\xbb count"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"none")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\xbb next"),(0,l.kt)("td",{parentName:"tr",align:null},"string(uri)\xa6null"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"none")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\xbb previous"),(0,l.kt)("td",{parentName:"tr",align:null},"string(uri)\xa6null"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"none")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\xbb results"),(0,l.kt)("td",{parentName:"tr",align:null},"list(",(0,l.kt)("a",{parentName:"td",href:"/docs/apireference/v2/schemas/feed"},"Feed"),")"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"none")))),(0,l.kt)("h3",{id:"example-responses"},"Example responses"),(0,l.kt)(i.Z,{defaultValue:"200",values:[{label:"200",value:"200"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"200",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "count": 123,\n  "next": "http://api.example.org/accounts/?offset=400&limit=100",\n  "previous": "http://api.example.org/accounts/?offset=200&limit=100",\n  "results": [\n    {\n      "type": "discussion",\n      "discussion": {\n        "id": 0,\n        "categories": [\n            {\n              "id": 0,\n              "tags": [],\n              "followed": false,\n              "order": 123,\n              "name": "string",\n              "name_synonyms": "string",\n              "slug": "string",\n              "slogan": "string",\n              "html_info": "string",\n              "seo_title": "string",\n              "seo_description": "string",\n              "auto_follow": "none",\n              "active": true,\n              "image_original": "string",\n              "image_bigger": "string",\n              "image_big": "string",\n              "image_medium": "string",\n              "image_small": "string",\n              "emotional_image_original": "string",\n              "emotional_image_position": 0,\n              "lastmod_datetime": "2019-08-24T14:15:22Z",\n              "stream_order_by": "recent",\n              "followers_counter": 13\n            }\n        ],\n        "medias": [\n            {\n            "id": 0,\n            "added_at": "2019-08-24T14:15:22Z",\n            "type": "url",\n            "title": "string",\n            "description": "string",\n            "url": "https://example.com",\n            "image": "string",\n            "image_width": 0,\n            "image_height": 0,\n            "order": 0,\n            "embed": {\n                "id": 0,\n                "embed_type": "string",\n                "embed_id": "string",\n                "url": "string",\n                "metadata": {}\n            }\n            }\n        ],\n        "location": {\n          "location": "string",\n          "lat": 0,\n          "lng": 0\n        },\n        "poll": {\n          "id": 0,\n          "title": "string",\n          "multiple_choices": true,\n          "added_at": "2019-08-24T14:15:22Z",\n          "modified_at": "2019-08-24T14:15:22Z",\n          "closed": true,\n          "expiration_at": "2019-08-24T14:15:22Z",\n          "hidden": "string",\n          "choices": [\n            {\n              "id": 0,\n              "choice": "string",\n              "order": 0,\n              "added_at": "2019-08-24T14:15:22Z",\n              "deleted": "string",\n              "vote_count": 0,\n              "voted": true\n            }\n          ]\n        },\n        "last_activity_at": "2019-08-24T14:15:22Z",\n        "last_edited_at": null,\n        "author": {\n          "id": 0,\n          "username": "string",\n          "real_name": "string",\n          "date_joined": "2019-08-24T14:15:22Z",\n          "bio": "string",\n          "location": "string",\n          "location_lat_lng": "string",\n          "position_lat_lng": "string",\n          "date_of_birth": "string",\n          "description": "string",\n          "gender": "Male",\n          "website": "https://example.com",\n          "avatar": "string",\n          "cover": "string",\n          "ext_id": "string",\n          "tags": [\n            {\n              "id": 0,\n              "active": true,\n              "type": "user",\n              "name": "string",\n              "description": "string",\n              "color": "string",\n              "visible": true,\n              "deleted": true,\n              "created_at": "2019-08-24T14:15:22Z"\n            }\n          ],\n        "reputation": 111,\n        "followings_counter": 1,\n        "followers_counter": 1,\n        "posts_counter": 2,\n        "discussions_counter": 5,\n        "statuses_counter": 1,\n        "polls_counter": 7\n        },\n        "added_at": "2019-08-24T14:15:22Z",\n        "html": "string",\n        "summary": "string",\n        "deleted": true,\n        "collapsed": false,\n        "comment_count": 0,\n        "vote_count": 0,\n        "voted": false,\n        "flag_count": 0,\n        "share_count": 0,\n        "addressing": [],\n        "title": "string",\n        "slug": "string",\n        "view_count": 0,\n        "follower_count": "string"\n      },\n      "seen_by_id": [\n        0\n      ],\n      "has_boost": false\n    }\n  ]\n}\n')))))}g.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,f=c["".concat(s,".").concat(m)]||c[m]||p[m]||l;return n?a.createElement(f,i(i({ref:t},d),{},{components:n})):a.createElement(f,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"}}]);