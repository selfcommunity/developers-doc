"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[4583],{1282:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return d},default:function(){return h}});var a=n(3117),r=n(102),s=(n(7294),n(3905)),i=n(6396),o=n(8215),l=["components"],u={sidebar_label:"Me",sidebar_position:14,title:"Me"},p=void 0,c={unversionedId:"apireference/v2/user/me",id:"apireference/v2/user/me",isDocsHomePage:!1,title:"Me",description:"This endpoint returns the user identified by the authentication token",source:"@site/docs/apireference/v2/user/me.md",sourceDirName:"apireference/v2/user",slug:"/apireference/v2/user/me",permalink:"/docs/apireference/v2/user/me",editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/apireference/v2/user/me.md",tags:[],version:"current",sidebarPosition:14,frontMatter:{sidebar_label:"Me",sidebar_position:14,title:"Me"},sidebar:"apireferenceSidebar",previous:{title:"Change User's Settings",permalink:"/docs/apireference/v2/user/change_users_settings"},next:{title:"Permission",permalink:"/docs/apireference/v2/user/permission"}},d=[{value:"HTTP Request",id:"http-request",children:[{value:"Example Request",id:"example-request",children:[],level:3}],level:2},{value:"Responses",id:"responses",children:[{value:"Example responses",id:"example-responses",children:[],level:3}],level:2}],m={toc:d};function h(e){var t=e.components,n=(0,r.Z)(e,l);return(0,s.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"This endpoint returns the user identified by the authentication token"),(0,s.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"This operation requires authentication."))),(0,s.kt)("h2",{id:"http-request"},"HTTP Request"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"GET /api/v2/user/me/")),(0,s.kt)("h3",{id:"example-request"},"Example Request"),(0,s.kt)(i.Z,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"Bash",value:"bash"}],mdxType:"Tabs"},(0,s.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const headers = {\n  'Accept':'application/json',\n  'Authorization: Bearer <token>'\n};\n\nfetch('/api/v2/user/me/',\n{\n  method: 'GET',\n  headers: headers\n})\n.then(function(res) {\n    return res.json();\n}).then(function(body) {\n    console.log(body);\n});\n\n"))),(0,s.kt)(o.Z,{value:"bash",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"# You can also use wget\ncurl -X GET /api/v2/user/me/ \\\n  -H 'Accept: application/json'\n  -H \"Authorization: Bearer <token>\"\n")))),(0,s.kt)("h2",{id:"responses"},"Responses"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Status"),(0,s.kt)("th",{parentName:"tr",align:null},"Meaning"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"),(0,s.kt)("th",{parentName:"tr",align:null},"Schema"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"200"),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"https://tools.ietf.org/html/rfc7231#section-6.3.1"},"OK")),(0,s.kt)("td",{parentName:"tr",align:null},"none"),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"../schemas/user"},"User"))))),(0,s.kt)("h3",{id:"example-responses"},"Example responses"),(0,s.kt)(i.Z,{defaultValue:"200",values:[{label:"200",value:"200"}],mdxType:"Tabs"},(0,s.kt)(o.Z,{value:"200",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": 0,\n  "username": "string",\n  "real_name": "string",\n  "email": "user@example.com",\n  "email_isvalid": true,\n  "date_joined": "2019-08-24T14:15:22Z",\n  "bio": "string",\n  "location": "string",\n  "location_lat_lng": "string",\n  "position_lat_lng": "string",\n  "date_of_birth": "string",\n  "description": "string",\n  "gender": "Male",\n  "status": "a",\n  "website": "https://example.com",\n  "avatar": "string",\n  "cover": "string",\n  "ext_id": 3,\n  "tags": [],\n  "reputation": 39,\n  "connection_status": "string",\n  "followings_counter": 1,\n  "followers_counter": 0,\n  "posts_counter": 2,\n  "discussions_counter": 4,\n  "statuses_counter": 1,\n  "polls_counter": 6,\n  "permission": {\n    "upload_video": false,\n    "create_contribute": true,\n    "create_poll": true,\n    "locate_post": false,\n    "create_post": true,\n    "create_post_with_category": true,\n    "follow_user": true,\n    "request_connection": true,\n    "accept_connection": true\n  },\n  "role": "string"\n}\n')))))}h.isMDXComponent=!0}}]);