"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[59526],{71871:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(67294);function r(e){let{children:t,hidden:n,className:r}=e;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},76018:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(83117),r=n(67294),l=n(5730),i=n(87139),s=n(86010);const o="tabItem_LplD";function d(e){var t,n;const{lazy:l,block:d,defaultValue:u,values:p,groupId:m,className:c}=e,g=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=p??g.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),b=(0,i.lx)(f,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const h=null===u?u:u??(null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)??(null==(n=g[0])?void 0:n.props.value);if(null!==h&&!f.some((e=>e.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:v}=(0,i.UB)(),[N,_]=(0,r.useState)(h),y=[],{blockElementScrollPositionUntilNextRender:T}=(0,i.o5)();if(null!=m){const e=k[m];null!=e&&e!==N&&f.some((t=>t.value===e))&&_(e)}const w=e=>{const t=e.currentTarget,n=y.indexOf(t),a=f[n].value;a!==N&&(T(t),_(a),null!=m&&v(m,a))},E=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=y.indexOf(e.currentTarget)+1;n=y[t]||y[0];break}case"ArrowLeft":{const t=y.indexOf(e.currentTarget)-1;n=y[t]||y[y.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":d},c)},f.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>y.push(e),onKeyDown:E,onFocus:w,onClick:w},l,{className:(0,s.Z)("tabs__item",o,null==l?void 0:l.className,{"tabs__item--active":N===t})}),n??t)}))),l?(0,r.cloneElement)(g.filter((e=>e.props.value===N))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},g.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function u(e){const t=(0,l.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},26788:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>d,toc:()=>p});var a=n(83117),r=(n(67294),n(3905)),l=n(76018),i=n(71871);const s={sidebar_label:"Get a specific Embed's Feed",sidebar_position:7,title:"Get a specific Embed's Feed"},o=void 0,d={unversionedId:"apireference/v2/embed/get_a_specific_embeds_feed",id:"apireference/v2/embed/get_a_specific_embeds_feed",title:"Get a specific Embed's Feed",description:"This endpoint retrieves the embed's feed witch contains Feed that has the Embed as associated media.",source:"@site/docs/apireference/v2/embed/get_a_specific_embeds_feed.md",sourceDirName:"apireference/v2/embed",slug:"/apireference/v2/embed/get_a_specific_embeds_feed",permalink:"/docs/apireference/v2/embed/get_a_specific_embeds_feed",editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/apireference/v2/embed/get_a_specific_embeds_feed.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_label:"Get a specific Embed's Feed",sidebar_position:7,title:"Get a specific Embed's Feed"},sidebar:"apireferenceSidebar",previous:{title:"Patch a Specific Embed",permalink:"/docs/apireference/v2/embed/patch_a_specific_embed"},next:{title:"Get Embed's Feed",permalink:"/docs/apireference/v2/embed/get_embeds_feed"}},u={},p=[{value:"HTTP Request",id:"http-request",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Enumerated Values",id:"enumerated-values",level:4},{value:"Example Request",id:"example-request",level:3},{value:"Responses",id:"responses",level:2},{value:"Response Schema",id:"response-schema",level:3},{value:"Example responses",id:"example-responses",level:3}],m={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This endpoint retrieves the embed's feed witch contains ",(0,r.kt)("a",{parentName:"p",href:"/docs/apireference/v2/schemas/feed"},"Feed")," that has the ",(0,r.kt)("a",{parentName:"p",href:"/docs/apireference/v2/schemas/embed"},"Embed")," as associated media."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This operation requires authentication only if ",(0,r.kt)("inlineCode",{parentName:"p"},"content_availability")," community option is false."))),(0,r.kt)("h2",{id:"http-request"},"HTTP Request"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"GET /api/v2/embed/{id}/feed/")),(0,r.kt)("h3",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"In"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"id"),(0,r.kt)("td",{parentName:"tr",align:null},"path"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"A unique integer value identifying this Category.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"limit"),(0,r.kt)("td",{parentName:"tr",align:null},"query"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of results to return per page.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"offset"),(0,r.kt)("td",{parentName:"tr",align:null},"query"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"The initial index from which to return the results.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ordering"),(0,r.kt)("td",{parentName:"tr",align:null},"query"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"The ordering of the feed. Default to 'recent'")))),(0,r.kt)("h4",{id:"enumerated-values"},"Enumerated Values"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\xbb ordering"),(0,r.kt)("td",{parentName:"tr",align:null},"recent"),(0,r.kt)("td",{parentName:"tr",align:null},"Order by recent creation datetime")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\xbb ordering"),(0,r.kt)("td",{parentName:"tr",align:null},"last_activity"),(0,r.kt)("td",{parentName:"tr",align:null},"Order by last activity in the ",(0,r.kt)("a",{parentName:"td",href:"/docs/apireference/v2/schemas/feed"},"Feed")," object")))),(0,r.kt)("h3",{id:"example-request"},"Example Request"),(0,r.kt)(l.Z,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"Bash",value:"bash"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const headers = {\n  'Accept':'application/json',\n  'Authorization': 'Bearer {access_token}'\n};\n\nfetch('/api/v2/embed/{id}/feed/',\n{\n  method: 'GET',\n\n  headers: headers\n})\n.then(function(res) {\n    return res.json();\n}).then(function(body) {\n    console.log(body);\n});\n\n"))),(0,r.kt)(i.Z,{value:"bash",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# You can also use wget\ncurl -X GET /api/v2/embed/{id}/feed/ \\\n  -H 'Accept: application/json'\n  -H 'Authorization: Bearer {access_token}'\n")))),(0,r.kt)("h2",{id:"responses"},"Responses"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Status"),(0,r.kt)("th",{parentName:"tr",align:null},"Meaning"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Schema"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"200"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://tools.ietf.org/html/rfc7231#section-6.3.1"},"OK")),(0,r.kt)("td",{parentName:"tr",align:null},"none"),(0,r.kt)("td",{parentName:"tr",align:null},"Inline")))),(0,r.kt)("h3",{id:"response-schema"},"Response Schema"),(0,r.kt)("p",null,"Status Code ",(0,r.kt)("strong",{parentName:"p"},"200")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Restrictions"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\xbb count"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"none"),(0,r.kt)("td",{parentName:"tr",align:null},"Total results count")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\xbb next"),(0,r.kt)("td",{parentName:"tr",align:null},"string(uri)\xa6null"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"none"),(0,r.kt)("td",{parentName:"tr",align:null},"Next page url")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\xbb previous"),(0,r.kt)("td",{parentName:"tr",align:null},"string(uri)\xa6null"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"none"),(0,r.kt)("td",{parentName:"tr",align:null},"Previous page url")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\xbb results"),(0,r.kt)("td",{parentName:"tr",align:null},"[",(0,r.kt)("a",{parentName:"td",href:"/docs/apireference/v2/schemas/feed"},"Feed"),"]"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"none"),(0,r.kt)("td",{parentName:"tr",align:null},"List of results")))),(0,r.kt)("h3",{id:"example-responses"},"Example responses"),(0,r.kt)(l.Z,{defaultValue:"200",values:[{label:"200",value:"200"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"200",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "count": 123,\n  "next": "http://api.example.org/accounts/?offset=400&limit=100",\n  "previous": "http://api.example.org/accounts/?offset=200&limit=100",\n  "results": [\n    {\n      "type": "discussion",\n      "discussion": {\n        "id": 0,\n        "categories": [\n            {\n                "id": 0,\n                "tags": [],\n                "order": 123,\n                "name": "string",\n                "name_synonyms": "string",\n                "slug": "string",\n                "slogan": "string",\n                "html_info": "string",\n                "seo_title": "string",\n                "seo_description": "string",\n                "auto_follow": "string",\n                "active": true,\n                "deleted": false,\n                "image_original": "string",\n                "image_bigger": "string",\n                "image_big": "string",\n                "image_medium": "string",\n                "image_small": "string",\n                "emotional_image_original": "string",\n                "emotional_image_position": 123,\n                "lastmod_datetime": "2019-08-24T14:15:22Z",\n                "stream_order_by": "string",\n            }\n        ],\n        "medias": [\n            {\n                "id": 0,\n                "added_at": "2019-08-24T14:15:22Z",\n                "type": "url",\n                "title": "string",\n                "description": "string",\n                "url": "https://example.com",\n                "image": "string",\n                "image_width": 0,\n                "image_height": 0,\n                "order": 0,\n                "embed": {\n                    "id": 0,\n                    "embed_type": "string",\n                    "embed_id": "string",\n                    "url": "string",\n                    "metadata": {}\n            }\n          }\n        ],\n        "location": {\n          "location": "string",\n          "lat": 0,\n          "lng": 0\n        },\n        "poll": {\n          "id": 0,\n          "title": "string",\n          "multiple_choices": true,\n          "added_at": "2019-08-24T14:15:22Z",\n          "modified_at": "2019-08-24T14:15:22Z",\n          "closed": true,\n          "expiration_at": "2019-08-24T14:15:22Z",\n          "hidden": "string",\n          "choices": [\n            {\n              "id": 0,\n              "choice": "string",\n              "order": 0,\n              "added_at": "2019-08-24T14:15:22Z",\n              "deleted": "string",\n              "vote_count": 0,\n              "voted": true\n            }\n          ]\n        },\n        "last_activity_at": "2019-08-24T14:15:22Z",\n        "last_edited_at": null,\n        "author": {\n          "id": 0,\n          "username": "string",\n          "real_name": "string",\n          "date_joined": "2019-08-24T14:15:22Z",\n          "bio": "string",\n          "location": "string",\n          "location_lat_lng": "string",\n          "position_lat_lng": "string",\n          "date_of_birth": "string",\n          "description": "string",\n          "gender": "Male",\n          "website": "https://example.com",\n          "avatar": "string",\n          "cover": "string",\n          "ext_id": "string",\n          "tags": [\n            {\n              "id": 0,\n              "active": true,\n              "type": "user",\n              "name": "string",\n              "description": "string",\n              "color": "string",\n              "visible": true,\n              "deleted": true,\n              "created_at": "2019-08-24T14:15:22Z"\n            }\n          ],\n        "reputation": 111,\n        "followings_counter": 1,\n        "followers_counter": 1,\n        "posts_counter": 2,\n        "discussions_counter": 5,\n        "statuses_counter": 1,\n        "polls_counter": 7\n        \n        },\n        "added_at": "2019-08-24T14:15:22Z",\n        "html": "string",\n        "summary": "string",\n        "deleted": true,\n        "collapsed": false,\n        "comment_count": 1,\n        "vote_count": 0,\n        "voted": false,\n        "flag_count": 0,\n        "share_count": 0,\n        "addressing": [0],\n        "title": "string",\n        "slug": "string",\n        "view_count": 0,\n        "follower_count": 0\n      }\n    }\n  ]\n}\n')))))}c.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),d=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=d(n),c=r,g=m["".concat(o,".").concat(c)]||m[c]||p[c]||l;return n?a.createElement(g,i(i({ref:t},u),{},{components:n})):a.createElement(g,i({ref:t},u))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);