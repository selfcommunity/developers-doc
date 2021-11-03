"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[7754],{2015:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return d},contentTitle:function(){return m},metadata:function(){return p},toc:function(){return u},default:function(){return c}});var a=n(3117),r=n(102),l=(n(7294),n(3905)),i=n(6396),s=n(8215),o=["components"],d={sidebar_label:"Get Main Feed",sidebar_position:1,title:"Get Main Feed"},m=void 0,p={unversionedId:"apireference/v2/feed/main",id:"apireference/v2/feed/main",isDocsHomePage:!1,title:"Get Main Feed",description:"This endpoint retrieves the main (home) feed",source:"@site/docs/apireference/v2/feed/main.md",sourceDirName:"apireference/v2/feed",slug:"/apireference/v2/feed/main",permalink:"/docs/apireference/v2/feed/main",editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/apireference/v2/feed/main.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Get Main Feed",sidebar_position:1,title:"Get Main Feed"},sidebar:"apireferenceSidebar",previous:{title:"Get Embed's Feed",permalink:"/docs/apireference/v2/embed/get_embeds_feed"},next:{title:"Get Explore Feed",permalink:"/docs/apireference/v2/feed/explore"}},u=[{value:"HTTP Request",id:"http-request",children:[{value:"Parameters",id:"parameters",children:[{value:"Enumerated Values",id:"enumerated-values",children:[],level:4}],level:3},{value:"Example Request",id:"example-request",children:[],level:3}],level:2},{value:"Responses",id:"responses",children:[{value:"Response Schema",id:"response-schema",children:[],level:3},{value:"Example responses",id:"example-responses",children:[],level:3}],level:2}],g={toc:u};function c(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This endpoint retrieves the main (home) feed"),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"This operation requires authentication"))),(0,l.kt)("h2",{id:"http-request"},"HTTP Request"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"GET /api/v2/feed/")),(0,l.kt)("h3",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"In"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"limit"),(0,l.kt)("td",{parentName:"tr",align:null},"query"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of results to return per page.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"offset"),(0,l.kt)("td",{parentName:"tr",align:null},"query"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"The initial index from which to return the results.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ordering"),(0,l.kt)("td",{parentName:"tr",align:null},"query"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"The ordering of the feed. Default to ",(0,l.kt)("inlineCode",{parentName:"td"},"home_stream_order_by")," community option")))),(0,l.kt)("h4",{id:"enumerated-values"},"Enumerated Values"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\xbb ordering"),(0,l.kt)("td",{parentName:"tr",align:null},"recent"),(0,l.kt)("td",{parentName:"tr",align:null},"Order by recent creation datetime")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\xbb ordering"),(0,l.kt)("td",{parentName:"tr",align:null},"last_activity"),(0,l.kt)("td",{parentName:"tr",align:null},"Order by last activity in the ",(0,l.kt)("a",{parentName:"td",href:"../schemas/feed"},"Feed")," object")))),(0,l.kt)("h3",{id:"example-request"},"Example Request"),(0,l.kt)(i.Z,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"Bash",value:"bash"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"\nconst headers = {\n'Accept':'application/json',\n'Authorization': 'Bearer {access_token}'\n};\n\nfetch('/api/v2/feed/',\n{\nmethod: 'GET',\nheaders: headers\n})\n.then(function(res) {\nreturn res.json();\n}).then(function(body) {\nconsole.log(body);\n});\n\n"))),(0,l.kt)(s.Z,{value:"bash",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# You can also use wget\ncurl -X GET /api/v2/feed/ \\\n  -H 'Accept: application/json' \\\n  -H 'Authorization: Bearer {access_token}'\n")))),(0,l.kt)("h2",{id:"responses"},"Responses"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Status"),(0,l.kt)("th",{parentName:"tr",align:null},"Meaning"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Schema"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"200"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://tools.ietf.org/html/rfc7231#section-6.3.1"},"OK")),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"Inline")))),(0,l.kt)("h3",{id:"response-schema"},"Response Schema"),(0,l.kt)("p",null,"Status Code ",(0,l.kt)("strong",{parentName:"p"},"200")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Restrictions"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\xbb count"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"none")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\xbb next"),(0,l.kt)("td",{parentName:"tr",align:null},"string(uri)\xa6null"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"none")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\xbb previous"),(0,l.kt)("td",{parentName:"tr",align:null},"string(uri)\xa6null"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"none")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\xbb results"),(0,l.kt)("td",{parentName:"tr",align:null},"list(",(0,l.kt)("a",{parentName:"td",href:"../schemas/feed"},"Feed"),")"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"none")))),(0,l.kt)("h3",{id:"example-responses"},"Example responses"),(0,l.kt)(i.Z,{defaultValue:"200",values:[{label:"200",value:"200"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"200",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "count": 123,\n  "next": "http://api.example.org/accounts/?offset=400&limit=100",\n  "previous": "http://api.example.org/accounts/?offset=200&limit=100",\n  "results": [\n    {\n      "type": "discussion",\n      "discussion": {\n        "id": 0,\n        "categories": [\n            {\n            "id": 0,\n            "tags": [],\n            "order": 123,\n            "name": "string",\n            "name_synonyms": "string",\n            "slug": "string",\n            "slogan": "string",\n            "html_info": "string",\n            "seo_title": "string",\n            "seo_description": "string",\n            "auto_follow": "string",\n            "active": true,\n            "deleted": false,\n            "image_original": "string",\n            "image_bigger": "string",\n            "image_big": "string",\n            "image_medium": "string",\n            "image_small": "string",\n            "emotional_image_original": "string",\n            "emotional_image_position": 123,\n            "lastmod_datetime": "2019-08-24T14:15:22Z",\n            "stream_order_by": "string",\n            }\n        ],\n        "media_type": "images",\n        "medias": [\n            {\n            "id": 0,\n            "added_at": "2019-08-24T14:15:22Z",\n            "type": "url",\n            "title": "string",\n            "description": "string",\n            "url": "https://example.com",\n            "image": "string",\n            "image_width": 0,\n            "image_height": 0,\n            "order": 0,\n            "embed": {\n                "id": 0,\n                "embed_type": "string",\n                "embed_id": "string",\n                "url": "string",\n                "metadata": {}\n            }\n            }\n        ],\n        "location": {\n          "location": "string",\n          "lat": 0,\n          "lng": 0\n        },\n        "poll": {\n          "id": 0,\n          "title": "string",\n          "multiple_choices": true,\n          "added_at": "2019-08-24T14:15:22Z",\n          "modified_at": "2019-08-24T14:15:22Z",\n          "closed": true,\n          "expiration_at": "2019-08-24T14:15:22Z",\n          "hidden": "string",\n          "choices": [\n            {\n              "id": 0,\n              "choice": "string",\n              "order": 0,\n              "added_at": "2019-08-24T14:15:22Z",\n              "deleted": "string",\n              "vote_count": 0,\n              "voted": true\n            }\n          ]\n        },\n        "last_activity_at": "2019-08-24T14:15:22Z",\n        "author": {\n          "id": 0,\n          "username": "string",\n          "real_name": "string",\n          "date_joined": "2019-08-24T14:15:22Z",\n          "bio": "string",\n          "location": "string",\n          "location_lat_lng": "string",\n          "position_lat_lng": "string",\n          "date_of_birth": "string",\n          "description": "string",\n          "gender": "Male",\n          "website": "https://example.com",\n          "avatar": "string",\n          "cover": "string",\n          "ext_id": "string",\n          "tags": [\n            {\n              "id": 0,\n              "active": true,\n              "type": "user",\n              "name": "string",\n              "description": "string",\n              "color": "string",\n              "visible": true,\n              "deleted": true,\n              "created_at": "2019-08-24T14:15:22Z"\n            }\n          ],\n        "reputation": 111,\n        "followings_counter": 1,\n        "followers_counter": 1,\n        "posts_counter": 2,\n        "discussions_counter": 5,\n        "statuses_counter": 1,\n        "polls_counter": 7\n        },\n        "added_at": "2019-08-24T14:15:22Z",\n        "html": "string",\n        "summary": "string",\n        "deleted": true,\n        "collapsed": false,\n        "comment_count": 0,\n        "vote_count": 0,\n        "voted": false,\n        "flag_count": 0,\n        "share_count": 0,\n        "addressing": [],\n        "title": "string",\n        "slug": "string",\n        "view_count": 0,\n        "follower_count": "string"\n      },\n      "seen_by_id": [\n        0\n      ],\n      "has_boost": false,\n      "activities": [\n        {\n          "type": "string",\n          "object": {},\n          "author": {\n            "id": 0,\n            "username": "string",\n            "real_name": "string",\n            "date_joined": "2019-08-24T14:15:22Z",\n            "bio": "string",\n            "location": "string",\n            "location_lat_lng": "string",\n            "position_lat_lng": "string",\n            "date_of_birth": "string",\n            "description": "string",\n            "gender": "Male",\n            "website": "https://example.com",\n            "avatar": "string",\n            "cover": "string",\n            "ext_id": "string",\n            "tags": [\n              {\n                "id": 0,\n                "active": true,\n                "type": "user",\n                "name": "string",\n                "description": "string",\n                "color": "string",\n                "visible": true,\n                "deleted": true,\n                "created_at": "2019-08-24T14:15:22Z"\n              }\n            ],\n          "reputation": 111,\n          "followings_counter": 1,\n          "followers_counter": 1,\n          "posts_counter": 2,\n          "discussions_counter": 5,\n          "statuses_counter": 1,\n          "polls_counter": 7\n          },\n          "active_at": "2019-08-24T14:15:22Z",\n          "seen_by_id": [\n            null\n          ]\n        }\n      ]\n    }\n  ]\n}\n')))))}c.isMDXComponent=!0}}]);