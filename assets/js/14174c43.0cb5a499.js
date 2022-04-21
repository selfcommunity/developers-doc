"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[4795],{71871:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(67294);function r(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},76018:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(87462),r=n(67294),l=n(5730),i=n(62040),s=n(86010),o="tabItem_LplD";function d(e){var t,n,l,d=e.lazy,u=e.block,m=e.defaultValue,p=e.values,c=e.groupId,g=e.className,f=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=p?p:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,i.lx)(v,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===m?m:null!=(t=null!=m?m:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(l=f[0])?void 0:l.props.value;if(null!==h&&!v.some((function(e){return e.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=(0,i.UB)(),N=b.tabGroupChoices,y=b.setTabGroupChoices,_=(0,r.useState)(h),T=_[0],w=_[1],E=[],x=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=c){var O=N[c];null!=O&&O!==T&&v.some((function(e){return e.value===O}))&&w(O)}var j=function(e){var t=e.currentTarget,n=E.indexOf(t),a=v[n].value;a!==T&&(x(t),w(a),null!=c&&y(c,a))},Z=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=E.indexOf(e.currentTarget)+1;n=E[a]||E[0];break;case"ArrowLeft":var r=E.indexOf(e.currentTarget)-1;n=E[r]||E[E.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":u},g)},v.map((function(e){var t=e.value,n=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return E.push(e)},onKeyDown:Z,onFocus:j,onClick:j},l,{className:(0,s.Z)("tabs__item",o,null==l?void 0:l.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),d?(0,r.cloneElement)(f.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function u(e){var t=(0,l.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},71673:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return d},contentTitle:function(){return u},metadata:function(){return m},assets:function(){return p},toc:function(){return c},default:function(){return f}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=n(76018),s=n(71871),o=["components"],d={sidebar_label:"Get Embed's Feed",sidebar_position:8,title:"Get Embed's Feed"},u=void 0,m={unversionedId:"apireference/v2/embed/get_embeds_feed",id:"apireference/v2/embed/get_embeds_feed",title:"Get Embed's Feed",description:"This endpoint retrieves the embed's feed witch contains Feed that has an Embed as associated media.",source:"@site/docs/apireference/v2/embed/get_embeds_feed.md",sourceDirName:"apireference/v2/embed",slug:"/apireference/v2/embed/get_embeds_feed",permalink:"/docs/apireference/v2/embed/get_embeds_feed",editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/apireference/v2/embed/get_embeds_feed.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_label:"Get Embed's Feed",sidebar_position:8,title:"Get Embed's Feed"},sidebar:"apireferenceSidebar",previous:{title:"Get a specific Embed's Feed",permalink:"/docs/apireference/v2/embed/get_a_specific_embeds_feed"},next:{title:"Get All Features",permalink:"/docs/apireference/v2/feature/get_all_features"}},p={},c=[{value:"HTTP Request",id:"http-request",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Enumerated Values",id:"enumerated-values",level:4},{value:"Example Request",id:"example-request",level:3},{value:"Responses",id:"responses",level:2},{value:"Response Schema",id:"response-schema",level:3},{value:"Example responses",id:"example-responses",level:3}],g={toc:c};function f(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This endpoint retrieves the embed's feed witch contains ",(0,l.kt)("a",{parentName:"p",href:"/docs/apireference/v2/schemas/feed"},"Feed")," that has an ",(0,l.kt)("a",{parentName:"p",href:"/docs/apireference/v2/schemas/embed"},"Embed")," as associated media."),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"If the tuple ",(0,l.kt)("inlineCode",{parentName:"p"},"embed_type")," ",(0,l.kt)("inlineCode",{parentName:"p"},"embed_id")," is passed as parameter retrieves a list of ",(0,l.kt)("a",{parentName:"p",href:"/docs/apireference/v2/schemas/feed"},"Feed")," that has ",(0,l.kt)("a",{parentName:"p",href:"/docs/apireference/v2/schemas/embed"},"Embed")," as associated media like the ",(0,l.kt)("a",{parentName:"p",href:"/docs/apireference/v2/embed/get_a_specific_embeds_feed"},"Get a specific Embed's Feed API"),"."))),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"This operation requires authentication only if ",(0,l.kt)("inlineCode",{parentName:"p"},"content_availability")," community option is false"))),(0,l.kt)("h2",{id:"http-request"},"HTTP Request"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"GET /api/v2/embed/feed/")),(0,l.kt)("h3",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"In"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"embed_type"),(0,l.kt)("td",{parentName:"tr",align:null},"query"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"embed_type")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"embed_id"),(0,l.kt)("td",{parentName:"tr",align:null},"query"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"embed_id")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"limit"),(0,l.kt)("td",{parentName:"tr",align:null},"query"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of results to return per page.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"offset"),(0,l.kt)("td",{parentName:"tr",align:null},"query"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"The initial index from which to return the results.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ordering"),(0,l.kt)("td",{parentName:"tr",align:null},"query"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"The ordering of the feed. Default to 'recent'")))),(0,l.kt)("h4",{id:"enumerated-values"},"Enumerated Values"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\xbb ordering"),(0,l.kt)("td",{parentName:"tr",align:null},"recent"),(0,l.kt)("td",{parentName:"tr",align:null},"Order by recent creation datetime")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\xbb ordering"),(0,l.kt)("td",{parentName:"tr",align:null},"last_activity"),(0,l.kt)("td",{parentName:"tr",align:null},"Order by last activity in the ",(0,l.kt)("a",{parentName:"td",href:"/docs/apireference/v2/schemas/feed"},"Feed")," object")))),(0,l.kt)("h3",{id:"example-request"},"Example Request"),(0,l.kt)(i.Z,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"Bash",value:"bash"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const headers = {\n  'Accept':'application/json',\n  'Authorization': 'Bearer {access_token}'\n};\n\nfetch('/api/v2/embed/feed/',\n{\n  method: 'GET',\n\n  headers: headers\n})\n.then(function(res) {\n    return res.json();\n}).then(function(body) {\n    console.log(body);\n});\n\n"))),(0,l.kt)(s.Z,{value:"bash",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# You can also use wget\ncurl -X GET /api/v2/embed/feed/ \\\n  -H 'Accept: application/json' \\\n  -H 'Authorization: Bearer {access_token}'\n")))),(0,l.kt)("h2",{id:"responses"},"Responses"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Status"),(0,l.kt)("th",{parentName:"tr",align:null},"Meaning"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Schema"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"200"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://tools.ietf.org/html/rfc7231#section-6.3.1"},"OK")),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"Inline")))),(0,l.kt)("h3",{id:"response-schema"},"Response Schema"),(0,l.kt)("p",null,"Status Code ",(0,l.kt)("strong",{parentName:"p"},"200")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Restrictions"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\xbb count"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"none")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\xbb next"),(0,l.kt)("td",{parentName:"tr",align:null},"string(uri)\xa6null"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"none")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\xbb previous"),(0,l.kt)("td",{parentName:"tr",align:null},"string(uri)\xa6null"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"none")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\xbb results"),(0,l.kt)("td",{parentName:"tr",align:null},"list(",(0,l.kt)("a",{parentName:"td",href:"/docs/apireference/v2/schemas/feed"},"Feed"),")"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"none")))),(0,l.kt)("h3",{id:"example-responses"},"Example responses"),(0,l.kt)(i.Z,{defaultValue:"200",values:[{label:"200",value:"200"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"200",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "count": 123,\n  "next": "http://api.example.org/accounts/?offset=400&limit=100",\n  "previous": "http://api.example.org/accounts/?offset=200&limit=100",\n  "results": [\n    {\n      "type": "discussion",\n      "discussion": {\n        "id": 0,\n        "categories": [\n            {\n                "id": 0,\n                "tags": [],\n                "order": 123,\n                "name": "string",\n                "name_synonyms": "string",\n                "slug": "string",\n                "slogan": "string",\n                "html_info": "string",\n                "seo_title": "string",\n                "seo_description": "string",\n                "auto_follow": "string",\n                "active": true,\n                "deleted": false,\n                "image_original": "string",\n                "image_bigger": "string",\n                "image_big": "string",\n                "image_medium": "string",\n                "image_small": "string",\n                "emotional_image_original": "string",\n                "emotional_image_position": 123,\n                "lastmod_datetime": "2019-08-24T14:15:22Z",\n                "stream_order_by": "string",\n            }\n        ],\n        "medias": [\n            {\n                "id": 0,\n                "added_at": "2019-08-24T14:15:22Z",\n                "type": "url",\n                "title": "string",\n                "description": "string",\n                "url": "https://example.com",\n                "image": "string",\n                "image_width": 0,\n                "image_height": 0,\n                "order": 0,\n                "embed": {\n                    "id": 0,\n                    "embed_type": "string",\n                    "embed_id": "string",\n                    "url": "string",\n                    "metadata": {}\n            }\n          }\n        ],\n        "location": {\n          "location": "string",\n          "lat": 0,\n          "lng": 0\n        },\n        "poll": {\n          "id": 0,\n          "title": "string",\n          "multiple_choices": true,\n          "added_at": "2019-08-24T14:15:22Z",\n          "modified_at": "2019-08-24T14:15:22Z",\n          "closed": true,\n          "expiration_at": "2019-08-24T14:15:22Z",\n          "hidden": "string",\n          "choices": [\n            {\n              "id": 0,\n              "choice": "string",\n              "order": 0,\n              "added_at": "2019-08-24T14:15:22Z",\n              "deleted": false,\n              "vote_count": 0,\n              "voted": true\n            }\n          ],\n          "votes": [\n            {\n              "id": 0,\n              "choice": "string",\n              "user": "string"\n            }\n          ]\n        },\n        "last_activity_at": "2019-08-24T14:15:22Z",\n        "author": {\n          "id": 0,\n          "username": "string",\n          "real_name": "string",\n          "date_joined": "2019-08-24T14:15:22Z",\n          "bio": "string",\n          "location": "string",\n          "location_lat_lng": "string",\n          "position_lat_lng": "string",\n          "date_of_birth": "string",\n          "description": "string",\n          "gender": "Male",\n          "website": "https://example.com",\n          "avatar": "string",\n          "cover": "string",\n          "ext_id": "string",\n          "tags": [\n            {\n              "id": 0,\n              "active": true,\n              "type": "user",\n              "name": "string",\n              "description": "string",\n              "color": "string",\n              "visible": true,\n              "deleted": true,\n              "created_at": "2019-08-24T14:15:22Z"\n            }\n          ],\n        "reputation": 111,\n        "followings_counter": 1,\n        "followers_counter": 1,\n        "posts_counter": 2,\n        "discussions_counter": 5,\n        "statuses_counter": 1,\n        "polls_counter": 7\n        },\n        "added_at": "2019-08-24T14:15:22Z",\n        "html": "string",\n        "summary": "string",\n        "deleted": true,\n        "collapsed": false,\n        "comment_count": 1,\n        "vote_count": 0,\n        "voted": false,\n        "flag_count": 0,\n        "share_count": 0,\n        "addressing": [0],\n        "title": "string",\n        "slug": "string",\n        "view_count": 0,\n        "follower_count": 0\n      }\n    }\n  ]\n}\n')))))}f.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return c}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),d=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=d(n),c=r,g=p["".concat(o,".").concat(c)]||p[c]||m[c]||l;return n?a.createElement(g,i(i({ref:t},u),{},{components:n})):a.createElement(g,i({ref:t},u))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=p;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);