"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[3539],{88200:function(n,e,t){t.r(e),t.d(e,{frontMatter:function(){return d},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return p},default:function(){return g}});var a=t(83117),s=t(80102),i=(t(67294),t(3905)),r=t(26396),l=t(58215),o=["components"],d={sidebar_label:"Search a Discussion",sidebar_position:3,title:"Search a Discussion"},u=void 0,c={unversionedId:"apireference/v2/discussion/search_a_discussion",id:"apireference/v2/discussion/search_a_discussion",isDocsHomePage:!1,title:"Search a Discussion",description:"This endpoint performs search operation to discussions.",source:"@site/docs/apireference/v2/discussion/search_a_discussion.md",sourceDirName:"apireference/v2/discussion",slug:"/apireference/v2/discussion/search_a_discussion",permalink:"/docs/apireference/v2/discussion/search_a_discussion",editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/apireference/v2/discussion/search_a_discussion.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"Search a Discussion",sidebar_position:3,title:"Search a Discussion"},sidebar:"apireferenceSidebar",previous:{title:"Get All Uncommented Discussions",permalink:"/docs/apireference/v2/discussion/get_all_uncommented_discussions"},next:{title:"Create a Discussion",permalink:"/docs/apireference/v2/discussion/create_a_discussion"}},p=[{value:"HTTP Request",id:"http-request",children:[{value:"Parameters",id:"parameters",children:[],level:3},{value:"Example Request",id:"example-request",children:[],level:3}],level:2},{value:"Responses",id:"responses",children:[{value:"Example responses",id:"example-responses",children:[],level:3}],level:2}],m={toc:p};function g(n){var e=n.components,t=(0,s.Z)(n,o);return(0,i.kt)("wrapper",(0,a.Z)({},m,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This endpoint performs search operation to discussions."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This operation requires authentication only if ",(0,i.kt)("inlineCode",{parentName:"p"},"content_availability")," community option is false"))),(0,i.kt)("h2",{id:"http-request"},"HTTP Request"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"GET /api/v2/discussion/search/")),(0,i.kt)("h3",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"In"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"search"),(0,i.kt)("td",{parentName:"tr",align:null},"query"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"false"),(0,i.kt)("td",{parentName:"tr",align:null},"A search term.")))),(0,i.kt)("h3",{id:"example-request"},"Example Request"),(0,i.kt)(r.Z,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"Bash",value:"bash"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const headers = {\n  'Accept':'application/json',\n  'Authorization': 'Bearer {access_token}'\n};\n\nfetch('/api/v2/discussion/search/',\n{\n  method: 'GET',\n\n  headers: headers\n})\n.then(function(res) {\n    return res.json();\n}).then(function(body) {\n    console.log(body);\n});\n"))),(0,i.kt)(l.Z,{value:"bash",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# You can also use wget\ncurl -X GET /api/v2/discussion/search/ \\\n  -H 'Accept: application/json' \\\n  -H 'Authorization: Bearer {access_token}'\n")))),(0,i.kt)("h2",{id:"responses"},"Responses"),(0,i.kt)("p",null,"Status Code ",(0,i.kt)("strong",{parentName:"p"},"200")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Restrictions"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"\xbb count"),(0,i.kt)("td",{parentName:"tr",align:null},"integer"),(0,i.kt)("td",{parentName:"tr",align:null},"true"),(0,i.kt)("td",{parentName:"tr",align:null},"none"),(0,i.kt)("td",{parentName:"tr",align:null},"Total results count")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"\xbb next"),(0,i.kt)("td",{parentName:"tr",align:null},"string\xa6null"),(0,i.kt)("td",{parentName:"tr",align:null},"false"),(0,i.kt)("td",{parentName:"tr",align:null},"none"),(0,i.kt)("td",{parentName:"tr",align:null},"Next page url")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"\xbb previous"),(0,i.kt)("td",{parentName:"tr",align:null},"string\xa6null"),(0,i.kt)("td",{parentName:"tr",align:null},"false"),(0,i.kt)("td",{parentName:"tr",align:null},"none"),(0,i.kt)("td",{parentName:"tr",align:null},"Previous page url")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"\xbb results"),(0,i.kt)("td",{parentName:"tr",align:null},"list(",(0,i.kt)("a",{parentName:"td",href:"../schemas/search_discussion"},"SearchDiscussion"),")"),(0,i.kt)("td",{parentName:"tr",align:null},"true"),(0,i.kt)("td",{parentName:"tr",align:null},"none"),(0,i.kt)("td",{parentName:"tr",align:null},"List of results")))),(0,i.kt)("h3",{id:"example-responses"},"Example responses"),(0,i.kt)(r.Z,{defaultValue:"200",values:[{label:"200",value:"200"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"200",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "count": 123,\n  "next": "string",\n  "previous": "string",\n  "results": [\n      {\n        "id": 0,\n        "categories": [\n          {\n            "id": 0,\n            "tags": [],\n            "order": 123,\n            "name": "string",\n            "name_synonyms": "string",\n            "slug": "string",\n            "slogan": "string",\n            "html_info": "string",\n            "seo_title": "string",\n            "seo_description": "string",\n            "auto_follow": "string",\n            "active": true,\n            "deleted": false,\n            "image_original": "string",\n            "image_bigger": "string",\n            "image_big": "string",\n            "image_medium": "string",\n            "image_small": "string",\n            "emotional_image_original": "string",\n            "emotional_image_position": 123,\n            "lastmod_datetime": "2019-08-24T14:15:22Z",\n            "stream_order_by": "string",\n          }\n        ],\n        "medias": [\n          {\n            "id": 0,\n            "added_at": "2019-08-24T14:15:22Z",\n            "type": "url",\n            "title": "string",\n            "description": "string",\n            "url": "https://example.com",\n            "image": "string",\n            "image_width": 0,\n            "image_height": 0,\n            "order": 0,\n            "embed": {\n              "id": 0,\n              "embed_type": "string",\n              "embed_id": "string",\n              "url": "string",\n              "metadata": {}\n            }\n          }\n        ],\n        "location": {\n            "location": "string",\n            "lat": 0,\n            "lng": 0\n        },\n        "poll": {\n            "id": 0,\n            "title": "string",\n            "multiple_choices": true,\n            "added_at": "2019-08-24T14:15:22Z",\n            "modified_at": "2019-08-24T14:15:22Z",\n            "closed": true,\n            "expiration_at": "2019-08-24T14:15:22Z",\n            "hidden": "string",\n            "choices": [\n              {\n                  "id": 0,\n                  "choice": "string",\n                  "order": 0,\n                  "added_at": "2019-08-24T14:15:22Z",\n                  "deleted": "string",\n                  "vote_count": 0,\n                  "voted": true\n              }\n            ]\n        },\n        "last_activity_at": "2019-08-24T14:15:22Z",\n        "view_count": 0,\n        "author": {\n            "id": 0,\n            "username": "string",\n            "real_name": "string",\n            "date_joined": "2019-08-24T14:15:22Z",\n            "bio": "string",\n            "location": "string",\n            "location_lat_lng": "string",\n            "position_lat_lng": "string",\n            "date_of_birth": "string",\n            "description": "string",\n            "gender": "Male",\n            "website": "https://example.com",\n            "avatar": "string",\n            "cover": "string",\n            "ext_id": "string",\n            "tags": [],\n            "reputation": 111,\n            "followings_counter": 1,\n            "followers_counter": 1,\n            "posts_counter": 2,\n            "discussions_counter": 4,\n            "statuses_counter": 1,\n            "polls_counter": 6\n        },\n        "added_at": "2019-08-24T14:15:22Z",\n        "html": "string",\n        "summary": "string",\n        "deleted": true,\n        "collapsed": false,\n        "comment_count": 0,\n        "vote_count": "string",\n        "voted": false,\n        "followed": false,\n        "suspended": true,\n        "flag_count": 0,\n        "share_count": 0,\n        "addressing": [],\n        "title": "string",\n        "slug": "string",\n        "view_count": 1,\n        "follower_count": "string",\n        "matches": [\n          {\n            "object": {\n                "id": 238,\n                "type": "comment",\n                "added_at": "2020-10-19T16:05:34.974676+00:00",\n                "html": "string"\n            },\n            "author": {\n              "id": 3,\n              "username": "string",\n              "real_name": "string",\n              "date_joined": "2019-08-24T14:15:22Z",\n              "bio": "string",\n              "location": "string",\n              "location_lat_lng": "string",\n              "position_lat_lng": "string",\n              "date_of_birth": "string",\n              "description": "string",\n              "gender": "Male",\n              "website": "https://example.com",\n              "avatar": "string",\n              "cover": "string",\n              "ext_id": "string",\n              "tags": [],\n              "reputation": 111,\n              "followings_counter": 1,\n              "followers_counter": 1,\n              "posts_counter": 2,\n              "discussions_counter": 4,\n              "statuses_counter": 1,\n              "polls_counter": 6\n            }\n          }\n        ]\n      }\n    ]\n}\n')))))}g.isMDXComponent=!0}}]);