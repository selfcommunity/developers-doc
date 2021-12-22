"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[8516],{91209:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return m},default:function(){return k}});var a=n(83117),r=n(80102),s=(n(67294),n(3905)),l=n(26396),i=n(58215),o=["components"],u={sidebar_label:"Get User's Connection Requests sent",sidebar_position:27,title:"Get User's Connection Requests sent"},p=void 0,d={unversionedId:"apireference/v2/user/get_users_connection_requests_sent",id:"apireference/v2/user/get_users_connection_requests_sent",isDocsHomePage:!1,title:"Get User's Connection Requests sent",description:"This endpoint retrieves a specific user's list of connection requests sent by user",source:"@site/docs/apireference/v2/user/get_users_connection_requests_sent.md",sourceDirName:"apireference/v2/user",slug:"/apireference/v2/user/get_users_connection_requests_sent",permalink:"/docs/apireference/v2/user/get_users_connection_requests_sent",editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/apireference/v2/user/get_users_connection_requests_sent.md",tags:[],version:"current",sidebarPosition:27,frontMatter:{sidebar_label:"Get User's Connection Requests sent",sidebar_position:27,title:"Get User's Connection Requests sent"},sidebar:"apireferenceSidebar",previous:{title:"Get User's Connection Requests",permalink:"/docs/apireference/v2/user/get_users_connection_requests"},next:{title:"Accept a User Connection",permalink:"/docs/apireference/v2/user/accept_a_user_connection"}},m=[{value:"HTTP Request",id:"http-request",children:[{value:"Parameters",id:"parameters",children:[],level:3},{value:"Example Request",id:"example-request",children:[],level:3}],level:2},{value:"Responses",id:"responses",children:[{value:"Response Schema",id:"response-schema",children:[],level:3},{value:"Example responses",id:"example-responses",children:[],level:3}],level:2}],c={toc:m};function k(e){var t=e.components,n=(0,r.Z)(e,o);return(0,s.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"This endpoint retrieves a specific user's list of connection requests sent by user"),(0,s.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"This operation requires the community to be set to friendship mode."))),(0,s.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"This operation requires authentication."))),(0,s.kt)("h2",{id:"http-request"},"HTTP Request"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"GET /api/v2/user/{id}/connection/requests_sent/")),(0,s.kt)("h3",{id:"parameters"},"Parameters"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Name"),(0,s.kt)("th",{parentName:"tr",align:null},"In"),(0,s.kt)("th",{parentName:"tr",align:null},"Type"),(0,s.kt)("th",{parentName:"tr",align:null},"Required"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"id"),(0,s.kt)("td",{parentName:"tr",align:null},"path"),(0,s.kt)("td",{parentName:"tr",align:null},"string"),(0,s.kt)("td",{parentName:"tr",align:null},"true"),(0,s.kt)("td",{parentName:"tr",align:null},"A unique integer value identifying this user.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"limit"),(0,s.kt)("td",{parentName:"tr",align:null},"query"),(0,s.kt)("td",{parentName:"tr",align:null},"integer"),(0,s.kt)("td",{parentName:"tr",align:null},"false"),(0,s.kt)("td",{parentName:"tr",align:null},"Number of results to return per page.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"offset"),(0,s.kt)("td",{parentName:"tr",align:null},"query"),(0,s.kt)("td",{parentName:"tr",align:null},"integer"),(0,s.kt)("td",{parentName:"tr",align:null},"false"),(0,s.kt)("td",{parentName:"tr",align:null},"The initial index from which to return the results.")))),(0,s.kt)("h3",{id:"example-request"},"Example Request"),(0,s.kt)(l.Z,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"Bash",value:"bash"}],mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"js",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const headers = {\n  'Accept':'application/json',\n  'Authorization: Bearer <token>'\n};\n\nfetch('/api/v2/user/{id}/connection/requests_sent/',\n{\n  method: 'GET',\n  headers: headers\n})\n.then(function(res) {\n    return res.json();\n}).then(function(body) {\n    console.log(body);\n});\n\n"))),(0,s.kt)(i.Z,{value:"bash",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"# You can also use wget\ncurl -X GET /api/v2/user/{id}/connection/requests_sent/ \\\n  -H 'Accept: application/json'\n  -H \"Authorization: Bearer <token>\"\n")))),(0,s.kt)("h2",{id:"responses"},"Responses"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Status"),(0,s.kt)("th",{parentName:"tr",align:null},"Meaning"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"),(0,s.kt)("th",{parentName:"tr",align:null},"Schema"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"200"),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"https://tools.ietf.org/html/rfc7231#section-6.3.1"},"OK")),(0,s.kt)("td",{parentName:"tr",align:null},"none"),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"../schemas/connection_request"},"ConnectionRequest"))))),(0,s.kt)("h3",{id:"response-schema"},"Response Schema"),(0,s.kt)("p",null,"Status Code ",(0,s.kt)("strong",{parentName:"p"},"200")),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Name"),(0,s.kt)("th",{parentName:"tr",align:null},"Type"),(0,s.kt)("th",{parentName:"tr",align:null},"Required"),(0,s.kt)("th",{parentName:"tr",align:null},"Restrictions"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"\xbb count"),(0,s.kt)("td",{parentName:"tr",align:null},"integer"),(0,s.kt)("td",{parentName:"tr",align:null},"false"),(0,s.kt)("td",{parentName:"tr",align:null},"none"),(0,s.kt)("td",{parentName:"tr",align:null},"none")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"\xbb next"),(0,s.kt)("td",{parentName:"tr",align:null},"string(uri)\xa6null"),(0,s.kt)("td",{parentName:"tr",align:null},"false"),(0,s.kt)("td",{parentName:"tr",align:null},"none"),(0,s.kt)("td",{parentName:"tr",align:null},"none")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"\xbb previous"),(0,s.kt)("td",{parentName:"tr",align:null},"string(uri)\xa6null"),(0,s.kt)("td",{parentName:"tr",align:null},"false"),(0,s.kt)("td",{parentName:"tr",align:null},"none"),(0,s.kt)("td",{parentName:"tr",align:null},"none")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"\xbb results"),(0,s.kt)("td",{parentName:"tr",align:null},"[",(0,s.kt)("a",{parentName:"td",href:"../schemas/connection_request"},"ConnectionRequest"),"]"),(0,s.kt)("td",{parentName:"tr",align:null},"false"),(0,s.kt)("td",{parentName:"tr",align:null},"none"),(0,s.kt)("td",{parentName:"tr",align:null},"none")))),(0,s.kt)("h3",{id:"example-responses"},"Example responses"),(0,s.kt)(l.Z,{defaultValue:"200",values:[{label:"200",value:"200"}],mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"200",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "count": 123,\n  "next": "string(uri)",\n  "previous": "string(uri)",\n  "results": [\n    {\n      "to_user": {\n        "id": 0,\n        "username": "string",\n        "real_name": "string",\n        "date_joined": "2019-08-24T14:15:22Z",\n        "bio": "string",\n        "location": "string",\n        "location_lat_lng": "string",\n        "position_lat_lng": "string",\n        "date_of_birth": "string",\n        "description": "string",\n        "gender": "Male",\n        "status": "a",\n        "website": "https://example.com",\n        "avatar": "string",\n        "cover": "string",\n        "ext_id": 3,\n        "tags": [],\n        "reputation": 39,\n        "connection_status": "string",\n        "connection_requests_sent_counter": 0,\n        "connection_requests_received_counter": 1,\n        "connections_counter": 0,\n        "posts_counter": 2,\n        "discussions_counter": 4,\n        "statuses_counter": 1,\n        "polls_counter": 6\n      },\n      "created": "2019-08-24T14:15:22Z",\n      "rejected": "2019-08-24T14:15:22Z",\n      "viewed": "2019-08-24T14:15:22Z"\n    }\n  ]\n}\n')))))}k.isMDXComponent=!0}}]);