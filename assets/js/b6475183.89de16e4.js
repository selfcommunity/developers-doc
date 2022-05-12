"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[91401],{71871:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(67294);function r(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},76018:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(83117),r=n(67294),l=n(5730),i=n(69143),s=n(86010),o="tabItem_LplD";function p(e){var t,n,l,p=e.lazy,m=e.block,u=e.defaultValue,d=e.values,c=e.groupId,g=e.className,f=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=d?d:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),N=(0,i.lx)(k,(function(e,t){return e.value===t.value}));if(N.length>0)throw new Error('Docusaurus error: Duplicate values "'+N.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===u?u:null!=(t=null!=u?u:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(l=f[0])?void 0:l.props.value;if(null!==v&&!k.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var h=(0,i.UB)(),b=h.tabGroupChoices,y=h.setTabGroupChoices,_=(0,r.useState)(v),w=_[0],T=_[1],x=[],C=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=c){var E=b[c];null!=E&&E!==w&&k.some((function(e){return e.value===E}))&&T(E)}var O=function(e){var t=e.currentTarget,n=x.indexOf(t),a=k[n].value;a!==w&&(C(t),T(a),null!=c&&y(c,a))},j=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=x.indexOf(e.currentTarget)+1;n=x[a]||x[0];break;case"ArrowLeft":var r=x.indexOf(e.currentTarget)-1;n=x[r]||x[x.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":m},g)},k.map((function(e){var t=e.value,n=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:function(e){return x.push(e)},onKeyDown:j,onFocus:O,onClick:O},l,{className:(0,s.Z)("tabs__item",o,null==l?void 0:l.className,{"tabs__item--active":w===t})}),null!=n?n:t)}))),p?(0,r.cloneElement)(f.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}function m(e){var t=(0,l.Z)();return r.createElement(p,(0,a.Z)({key:String(t)},e))}},18443:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return m},default:function(){return f},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return c}});var a=n(83117),r=n(80102),l=(n(67294),n(3905)),i=n(76018),s=n(71871),o=["components"],p={sidebar_label:"Get All Comments",sidebar_position:1,title:"Get All Comments"},m=void 0,u={unversionedId:"apireference/v2/comment/get_all_comments",id:"apireference/v2/comment/get_all_comments",title:"Get All Comments",description:"This endpoint retrieves all comments.",source:"@site/docs/apireference/v2/comment/get_all_comments.md",sourceDirName:"apireference/v2/comment",slug:"/apireference/v2/comment/get_all_comments",permalink:"/docs/apireference/v2/comment/get_all_comments",editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/apireference/v2/comment/get_all_comments.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Get All Comments",sidebar_position:1,title:"Get All Comments"},sidebar:"apireferenceSidebar",previous:{title:"Get Popular Categories",permalink:"/docs/apireference/v2/category/get_popular_categories"},next:{title:"Create a Comment",permalink:"/docs/apireference/v2/comment/create_a_comment"}},d={},c=[{value:"HTTP Request",id:"http-request",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Enumerated Values",id:"enumerated-values",level:4},{value:"Example Request",id:"example-request",level:3},{value:"Responses",id:"responses",level:2},{value:"Response Schema",id:"response-schema",level:3},{value:"Example responses",id:"example-responses",level:3}],g={toc:c};function f(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This endpoint retrieves all comments. "),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"If the ",(0,l.kt)("inlineCode",{parentName:"p"},"discussion")," parameter is specified the endpoint retrieves all comments of a specific ",(0,l.kt)("a",{parentName:"p",href:"/docs/apireference/v2/schemas/discussion"},"Discussion"),"."),(0,l.kt)("p",{parentName:"div"},"If the ",(0,l.kt)("inlineCode",{parentName:"p"},"post")," parameter is specified the endpoint retrieves all comments of a specific ",(0,l.kt)("a",{parentName:"p",href:"/docs/apireference/v2/schemas/post"},"Post"),"."),(0,l.kt)("p",{parentName:"div"},"If the ",(0,l.kt)("inlineCode",{parentName:"p"},"status")," parameter is specified the endpoint retrieves all comments of a specific ",(0,l.kt)("a",{parentName:"p",href:"/docs/apireference/v2/schemas/status"},"Status"),"."),(0,l.kt)("p",{parentName:"div"},"If the ",(0,l.kt)("inlineCode",{parentName:"p"},"user")," parameter is specified the endpoint retrieves all comments of a specific ",(0,l.kt)("a",{parentName:"p",href:"/docs/apireference/v2/schemas/user"},"User"),"."),(0,l.kt)("p",{parentName:"div"},"The ",(0,l.kt)("inlineCode",{parentName:"p"},"discussion"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"post"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"status")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"user")," parameters cannot be used together and one of these parameters is mandatory."),(0,l.kt)("p",{parentName:"div"},"If the ",(0,l.kt)("inlineCode",{parentName:"p"},"parent")," parameter is specified (only with ",(0,l.kt)("inlineCode",{parentName:"p"},"discussion"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"post")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"status"),") the endpoint retrieves all comments of a specific ",(0,l.kt)("a",{parentName:"p",href:"/docs/apireference/v2/schemas/discussion"},"Discussion")," , ",(0,l.kt)("a",{parentName:"p",href:"/docs/apireference/v2/schemas/post"},"Post")," or ",(0,l.kt)("a",{parentName:"p",href:"/docs/apireference/v2/schemas/status"},"Status")," that has the passed parent (nested comments)."))),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"It is possible to perform multiple ordering by concatenating the params -connection and -added_at."))),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"This operation requires authentication only if ",(0,l.kt)("inlineCode",{parentName:"p"},"content_availability")," community option is false"))),(0,l.kt)("h2",{id:"http-request"},"HTTP Request"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"GET /api/v2/comment/")),(0,l.kt)("h3",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"In"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"limit"),(0,l.kt)("td",{parentName:"tr",align:null},"query"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of results to return per page.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"offset"),(0,l.kt)("td",{parentName:"tr",align:null},"query"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"The initial index from which to return the results.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"discussion"),(0,l.kt)("td",{parentName:"tr",align:null},"query"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"Id of the ",(0,l.kt)("a",{parentName:"td",href:"/docs/apireference/v2/schemas/discussion"},"Discussion"),", required if both post, status and user parameters are not set")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"post"),(0,l.kt)("td",{parentName:"tr",align:null},"query"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"Id of the ",(0,l.kt)("a",{parentName:"td",href:"/docs/apireference/v2/schemas/post"},"Post"),", required if both discussion, status and user parameters are not set")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"status"),(0,l.kt)("td",{parentName:"tr",align:null},"query"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"Id of the ",(0,l.kt)("a",{parentName:"td",href:"/docs/apireference/v2/schemas/status"},"Status"),", required if both discussion, post and user parameters are not set")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"user"),(0,l.kt)("td",{parentName:"tr",align:null},"query"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"Id of the ",(0,l.kt)("a",{parentName:"td",href:"/docs/apireference/v2/schemas/user"},"User"),", required if both discussion, post and status parameters are not set")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"parent"),(0,l.kt)("td",{parentName:"tr",align:null},"query"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"Id of the parent ",(0,l.kt)("a",{parentName:"td",href:"/docs/apireference/v2/schemas/comment"},"Comment"),", used for retrieve nested comments")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ordering"),(0,l.kt)("td",{parentName:"tr",align:null},"query"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"The field for sorting use - for order desc. Default to ",(0,l.kt)("inlineCode",{parentName:"td"},"added_at"))))),(0,l.kt)("h4",{id:"enumerated-values"},"Enumerated Values"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\xbb ordering"),(0,l.kt)("td",{parentName:"tr",align:null},"added_at"),(0,l.kt)("td",{parentName:"tr",align:null},"Order by added_at comment field")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\xbb ordering"),(0,l.kt)("td",{parentName:"tr",align:null},"connection"),(0,l.kt)("td",{parentName:"tr",align:null},"Order giving pripority to user connections (friends or followers)")))),(0,l.kt)("h3",{id:"example-request"},"Example Request"),(0,l.kt)(i.Z,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"Bash",value:"bash"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const headers = {\n  'Accept':'application/json',\n  'Authorization: 'Bearer {access_token}'\n};\n\nfetch('/api/v2/comment/',\n{\n  method: 'GET',\n\n  headers: headers\n})\n.then(function(res) {\n    return res.json();\n}).then(function(body) {\n    console.log(body);\n});\n\n"))),(0,l.kt)(s.Z,{value:"bash",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# You can also use wget\ncurl -X GET /api/v2/comment/ \\\n  -H 'Accept: application/json' \\\n  -H 'Authorization: Bearer {access_token}'\n")))),(0,l.kt)("h2",{id:"responses"},"Responses"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Status"),(0,l.kt)("th",{parentName:"tr",align:null},"Meaning"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Schema"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"200"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://tools.ietf.org/html/rfc7231#section-6.3.1"},"OK")),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"Inline")))),(0,l.kt)("h3",{id:"response-schema"},"Response Schema"),(0,l.kt)("p",null,"Status Code ",(0,l.kt)("strong",{parentName:"p"},"200")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Restrictions"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\xbb count"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"none")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\xbb next"),(0,l.kt)("td",{parentName:"tr",align:null},"string(uri)\xa6null"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"none")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\xbb previous"),(0,l.kt)("td",{parentName:"tr",align:null},"string(uri)\xa6null"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"none")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\xbb results"),(0,l.kt)("td",{parentName:"tr",align:null},"[",(0,l.kt)("a",{parentName:"td",href:"/docs/apireference/v2/schemas/comment"},"Comment"),"]"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"none")))),(0,l.kt)("h3",{id:"example-responses"},"Example responses"),(0,l.kt)(i.Z,{defaultValue:"200",values:[{label:"200",value:"200"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"200",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "count": 123,\n  "next": "http://api.example.org/accounts/?offset=400&limit=100",\n  "previous": "http://api.example.org/accounts/?offset=200&limit=100",\n  "results": [\n    {\n      "id": 0,\n      "discussion": {\n        "id": 0,\n        "slug": "string"\n        },          \n      "author": {\n        "id": 0,\n        "username": "string",\n        "real_name": "string",\n        "date_joined": "2019-08-24T14:15:22Z",\n        "bio": "string",\n        "location": "string",\n        "location_lat_lng": "string",\n        "position_lat_lng": "string",\n        "date_of_birth": "string",\n        "description": "string",\n        "gender": "Male",\n        "website": "https://example.com",\n        "avatar": "string",\n        "cover": "string",\n        "ext_id": "string",\n        "tags": [\n          {\n            "id": 0,\n            "active": true,\n            "type": "user",\n            "name": "string",\n            "description": "string",\n            "color": "string",\n            "visible": true,\n            "deleted": true,\n            "created_at": "2019-08-24T14:15:22Z"\n          }\n        ],\n      "reputation": 111,\n      "followings_counter": 7,\n      "followers_counter": 2,\n      "posts_counter": 4,\n      "discussions_counter": 3,\n      "statuses_counter": 0,\n      "polls_counter": 1\n      },\n      "added_at": "2019-08-24T14:15:22Z",\n      "html": "string",\n      "summary": "string",\n      "deleted": true,\n      "collapsed": true,\n      "parent": 0,\n      "in_reply_to": 0,\n      "vote_count": 0,\n      "voted": false,\n      "flag_count": 0,\n      "comment_count": 1,\n      "latest_comments": [\n        {\n          "id": 1,\n          "object": 1,\n          "author": {\n            "id": 0,\n            "username": "string",\n            "real_name": "string",\n            "date_joined": "2019-08-24T14:15:22Z",\n            "bio": "string",\n            "location": "string",\n            "location_lat_lng": "string",\n            "position_lat_lng": "string",\n            "date_of_birth": "string",\n            "description": "string",\n            "gender": "Male",\n            "website": "https://example.com",\n            "avatar": "string",\n            "cover": "string",\n            "ext_id": "string",\n            "tags": [\n              {\n                "id": 0,\n                "active": true,\n                "type": "user",\n                "name": "string",\n                "description": "string",\n                "color": "string",\n                "visible": true,\n                "deleted": true,\n                "created_at": "2019-08-24T14:15:22Z"\n              }\n            ],\n          "reputation": 111,\n          },\n          "added_at": "2019-08-24T14:15:22Z",\n          "html": "string",\n          "summary": "string",\n          "deleted": true,\n          "collapsed": true,\n          "parent": 0,\n          "in_reply_to": 0,\n          "comments_count": 0,\n          "vote_count": 0,\n          "voted": false,\n          "flag_count": 0,\n          "comment_count": 0\n        }\n      ]\n    }\n  ]\n}\n')))))}f.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return c}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=p(n),c=r,g=d["".concat(o,".").concat(c)]||d[c]||u[c]||l;return n?a.createElement(g,i(i({ref:t},m),{},{components:n})):a.createElement(g,i({ref:t},m))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);