"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[3030],{83739:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return m},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return d},default:function(){return g}});var a=n(83117),r=n(80102),i=(n(67294),n(3905)),s=n(26396),o=n(58215),l=["components"],m={sidebar_label:"Update a specific Comment",sidebar_position:4,title:"Update a specific Comment"},p=void 0,c={unversionedId:"apireference/v2/comment/update_a_specific_comment",id:"apireference/v2/comment/update_a_specific_comment",isDocsHomePage:!1,title:"Update a specific Comment",description:"This endpoint updates a specific comment.",source:"@site/docs/apireference/v2/comment/update_a_specific_comment.md",sourceDirName:"apireference/v2/comment",slug:"/apireference/v2/comment/update_a_specific_comment",permalink:"/docs/apireference/v2/comment/update_a_specific_comment",editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/apireference/v2/comment/update_a_specific_comment.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_label:"Update a specific Comment",sidebar_position:4,title:"Update a specific Comment"},sidebar:"apireferenceSidebar",previous:{title:"Get a specific Comment",permalink:"/docs/apireference/v2/comment/get_a_specific_comment"},next:{title:"Delete a Comment",permalink:"/docs/apireference/v2/comment/delete_a_comment"}},d=[{value:"HTTP Request",id:"http-request",children:[{value:"Parameters",id:"parameters",children:[{value:"Example Body Parameters",id:"example-body-parameters",children:[],level:4}],level:3},{value:"Example Request",id:"example-request",children:[],level:3}],level:2},{value:"Responses",id:"responses",children:[{value:"Example responses",id:"example-responses",children:[],level:3}],level:2}],u={toc:d};function g(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This endpoint updates a specific comment."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This operation requires authentication. The logged user must be the comment creator"))),(0,i.kt)("h2",{id:"http-request"},"HTTP Request"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"PUT /api/v2/comment/{id}/")),(0,i.kt)("h3",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"In"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"id"),(0,i.kt)("td",{parentName:"tr",align:null},"path"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"true"),(0,i.kt)("td",{parentName:"tr",align:null},"A unique integer value identifying this post.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"\xbb text"),(0,i.kt)("td",{parentName:"tr",align:null},"body"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"true"),(0,i.kt)("td",{parentName:"tr",align:null},"text for the ",(0,i.kt)("a",{parentName:"td",href:"../schemas/comment"},"Comment"),", html format, it can contain some ",(0,i.kt)("a",{parentName:"td",href:"../mention/mention"},"mentions"))))),(0,i.kt)("h4",{id:"example-body-parameters"},"Example Body Parameters"),(0,i.kt)(s.Z,{defaultValue:"json",values:[{label:"JSON",value:"json"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"json",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "text": "string"\n}\n')))),(0,i.kt)("h3",{id:"example-request"},"Example Request"),(0,i.kt)(s.Z,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"Bash",value:"bash"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const inputBody = '{\n  \"text\": \"string\"\n}';\nconst headers = {\n  'Content-Type':'application/json',\n  'Accept':'application/json',\n  'Authorization': 'Bearer {access_token}'\n};\n\nfetch('/api/v2/comment/{id}/',\n{\n  method: 'PUT',\n  body: inputBody,\n  headers: headers\n})\n.then(function(res) {\n    return res.json();\n}).then(function(body) {\n    console.log(body);\n});\n\n"))),(0,i.kt)(o.Z,{value:"bash",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# You can also use wget\ncurl -X PUT /api/v2/comment/{id}/ \\\n  -H 'Content-Type: application/json' \\\n  -H 'Accept: application/json' \\\n  -H 'Authorization: Bearer {access_token}' \\\n  --data-raw '{\n    \"text\": \"string\"\n  }'\n")))),(0,i.kt)("h2",{id:"responses"},"Responses"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Status"),(0,i.kt)("th",{parentName:"tr",align:null},"Meaning"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Schema"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"200"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://tools.ietf.org/html/rfc7231#section-6.3.1"},"OK")),(0,i.kt)("td",{parentName:"tr",align:null},"none"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"../schemas/comment"},"Comment"))))),(0,i.kt)("h3",{id:"example-responses"},"Example responses"),(0,i.kt)(s.Z,{defaultValue:"200",values:[{label:"200",value:"200"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"200",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": 0,\n  "discussion": 0,\n  "author": {\n    "id": 0,\n    "username": "string",\n    "real_name": "string",\n    "date_joined": "2019-08-24T14:15:22Z",\n    "bio": "string",\n    "location": "string",\n    "location_lat_lng": "string",\n    "position_lat_lng": "string",\n    "date_of_birth": "string",\n    "description": "string",\n    "gender": "Male",\n    "website": "https://example.com",\n    "avatar": "string",\n    "cover": "string",\n    "ext_id": "string",\n    "tags": [\n      {\n        "id": 0,\n        "active": true,\n        "type": "user",\n        "name": "string",\n        "description": "string",\n        "color": "string",\n        "visible": true,\n        "deleted": true,\n        "created_at": "2019-08-24T14:15:22Z"\n      }\n    ],\n  "reputation": 111,\n  "followings_counter": 7,\n  "followers_counter": 2,\n  "posts_counter": 4,\n  "discussions_counter": 3,\n  "statuses_counter": 0,\n  "polls_counter": 1\n  },\n  "added_at": "2019-08-24T14:15:22Z",\n  "html": "string",\n  "summary": "string",\n  "deleted": true,\n  "collapsed": true,\n  "parent": 0,\n  "in_reply_to": 0,\n  "vote_count": 0,\n  "voted": false,\n  "flag_count": 0,\n  "comment_count": 1,\n  "latest_comments": [\n    {\n      "id": 1,\n      "object": 1,\n      "author": {\n        "id": 0,\n        "username": "string",\n        "real_name": "string",\n        "date_joined": "2019-08-24T14:15:22Z",\n        "bio": "string",\n        "location": "string",\n        "location_lat_lng": "string",\n        "position_lat_lng": "string",\n        "date_of_birth": "string",\n        "description": "string",\n        "gender": "Male",\n        "website": "https://example.com",\n        "avatar": "string",\n        "cover": "string",\n        "ext_id": "string",\n        "tags": [\n          {\n            "id": 0,\n            "active": true,\n            "type": "user",\n            "name": "string",\n            "description": "string",\n            "color": "string",\n            "visible": true,\n            "deleted": true,\n            "created_at": "2019-08-24T14:15:22Z"\n          }\n        ],\n      "reputation": 111,\n      "followings_counter": 7,\n      "followers_counter": 2,\n      "posts_counter": 4,\n      "discussions_counter": 3,\n      "statuses_counter": 0,\n      "polls_counter": 1\n      },\n      "added_at": "2019-08-24T14:15:22Z",\n      "html": "string",\n      "summary": "string",\n      "deleted": true,\n      "collapsed": true,\n      "parent": 0,\n      "in_reply_to": 0,\n      "comments_count": 0,\n      "vote_count": 0,\n      "voted": false,\n      "flag_count": 0,\n      "comment_count": 0\n    }\n  ]\n}\n')))))}g.isMDXComponent=!0}}]);