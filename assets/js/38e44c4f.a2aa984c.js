"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[4729],{40874:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return d},contentTitle:function(){return p},metadata:function(){return m},toc:function(){return u},default:function(){return c}});var a=n(83117),l=n(80102),r=(n(67294),n(3905)),i=n(26396),o=n(58215),s=["components"],d={sidebar_label:"Create a Post",sidebar_position:2,title:"Create a Post"},p=void 0,m={unversionedId:"apireference/v2/post/create_a_post",id:"apireference/v2/post/create_a_post",isDocsHomePage:!1,title:"Create a Post",description:"This endpoint creates a post",source:"@site/docs/apireference/v2/post/create_a_post.md",sourceDirName:"apireference/v2/post",slug:"/apireference/v2/post/create_a_post",permalink:"/docs/apireference/v2/post/create_a_post",editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/apireference/v2/post/create_a_post.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Create a Post",sidebar_position:2,title:"Create a Post"},sidebar:"apireferenceSidebar",previous:{title:"Get All Posts",permalink:"/docs/apireference/v2/post/get_all_posts"},next:{title:"Get All Uncommented Posts",permalink:"/docs/apireference/v2/post/get_all_uncommented_posts"}},u=[{value:"HTTP Request",id:"http-request",children:[{value:"Parameters",id:"parameters",children:[{value:"Example Body Parameters",id:"example-body-parameters",children:[],level:4}],level:3},{value:"Example Request",id:"example-request",children:[],level:3}],level:2},{value:"Responses",id:"responses",children:[{value:"Example responses",id:"example-responses",children:[],level:3}],level:2}],g={toc:u};function c(t){var e=t.components,n=(0,l.Z)(t,s);return(0,r.kt)("wrapper",(0,a.Z)({},g,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This endpoint creates a post"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This operation requires authentication."))),(0,r.kt)("h2",{id:"http-request"},"HTTP Request"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"POST /api/v2/post/")),(0,r.kt)("h3",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"In"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\xbb text"),(0,r.kt)("td",{parentName:"tr",align:null},"body"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"The content of the post in html format, it can contain some ",(0,r.kt)("a",{parentName:"td",href:"../mention/mention"},"mentions"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\xbb categories"),(0,r.kt)("td",{parentName:"tr",align:null},"body"),(0,r.kt)("td",{parentName:"tr",align:null},"list(integer)"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"List of id of ",(0,r.kt)("a",{parentName:"td",href:"../schemas/category"},"Category"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\xbb medias"),(0,r.kt)("td",{parentName:"tr",align:null},"body"),(0,r.kt)("td",{parentName:"tr",align:null},"list(integer)"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"List of id of ",(0,r.kt)("a",{parentName:"td",href:"../schemas/media"},"Media")," (only one media of type share is allowed)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\xbb location"),(0,r.kt)("td",{parentName:"tr",align:null},"body"),(0,r.kt)("td",{parentName:"tr",align:null},"object\xa6null"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"The Location object to associate at the post")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\xbb\xbb location"),(0,r.kt)("td",{parentName:"tr",align:null},"body"),(0,r.kt)("td",{parentName:"tr",align:null},"string\xa6null"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"none")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\xbb\xbb lat"),(0,r.kt)("td",{parentName:"tr",align:null},"body"),(0,r.kt)("td",{parentName:"tr",align:null},"number\xa6null"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"none")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\xbb\xbb lng"),(0,r.kt)("td",{parentName:"tr",align:null},"body"),(0,r.kt)("td",{parentName:"tr",align:null},"number\xa6null"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"none")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\xbb poll"),(0,r.kt)("td",{parentName:"tr",align:null},"body"),(0,r.kt)("td",{parentName:"tr",align:null},"object\xa6null"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"The poll object to associate at the post")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\xbb\xbb title"),(0,r.kt)("td",{parentName:"tr",align:null},"body"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"none")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\xbb\xbb multiple_choices"),(0,r.kt)("td",{parentName:"tr",align:null},"body"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"none")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\xbb\xbb expiration_at"),(0,r.kt)("td",{parentName:"tr",align:null},"body"),(0,r.kt)("td",{parentName:"tr",align:null},"string(date-time)"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"none")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\xbb\xbb choices"),(0,r.kt)("td",{parentName:"tr",align:null},"body"),(0,r.kt)("td",{parentName:"tr",align:null},"list(object)"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"none")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\xbb\xbb\xbb choice"),(0,r.kt)("td",{parentName:"tr",align:null},"body"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"none")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\xbb addressing"),(0,r.kt)("td",{parentName:"tr",align:null},"body"),(0,r.kt)("td",{parentName:"tr",align:null},"list(integer)"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"List of id of ",(0,r.kt)("a",{parentName:"td",href:"../schemas/tag"},"Tag"))))),(0,r.kt)("h4",{id:"example-body-parameters"},"Example Body Parameters"),(0,r.kt)(i.Z,{defaultValue:"json",values:[{label:"JSON",value:"json"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"json",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "text": "string",\n  "categories": [0],\n  "medias": [0],\n  "location": {\n    "location": "string",\n    "lat": 0,\n    "lng": 0\n  },\n  "poll": {\n    "title": "string",\n    "multiple_choices": true,\n    "closed": true,\n    "expiration_at": "2019-08-24T14:15:22Z",\n    "choices": [\n      {\n        "choice": "string"\n      }\n    ]\n  },\n  "addressing": []\n}\n')))),(0,r.kt)("h3",{id:"example-request"},"Example Request"),(0,r.kt)(i.Z,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"Bash",value:"bash"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const inputBody = \'{\n  "text": "string",\n  "categories": [0],\n  "medias": [0],\n  "location": {\n    "location": "string",\n    "lat": 0,\n    "lng": 0\n  },\n  "poll": {\n    "title": "string",\n    "multiple_choices": true,\n    "closed": true,\n    "expiration_at": "2019-08-24T14:15:22Z",\n    "choices": [\n      {\n        "choice": "string"\n      }\n    ]\n  },\n  "addressing": []\n}\';\nconst headers = {\n  \'Content-Type\':\'application/json\',\n  \'Accept\':\'application/json\',\n  \'Authorization\': \'Bearer {access_token}\'\n};\n\nfetch(\'/api/v2/post/\',\n{\n  method: \'POST\',\n  body: inputBody,\n  headers: headers\n})\n.then(function(res) {\n    return res.json();\n}).then(function(body) {\n    console.log(body);\n});\n\n'))),(0,r.kt)(o.Z,{value:"bash",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# You can also use wget\ncurl -X POST /api/v2/post/ \\\n  -H \'Content-Type: application/json\' \\\n  -H \'Accept: application/json\' \\\n  -H \'Authorization: Bearer {access_token}\' \\\n  --data-raw \'{\n    "text": "string",\n    "categories": [0],\n    "medias": [0],\n    "location": {\n      "location": "string",\n      "lat": 0,\n      "lng": 0\n    },\n    "poll": {\n      "title": "string",\n      "multiple_choices": true,\n      "closed": true,\n      "expiration_at": "2019-08-24T14:15:22Z",\n      "choices": [\n        {\n          "choice": "string"\n        }\n      ]\n    },\n    "addressing": []\n  }\'\n')))),(0,r.kt)("h2",{id:"responses"},"Responses"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Status"),(0,r.kt)("th",{parentName:"tr",align:null},"Meaning"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Schema"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"201"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://tools.ietf.org/html/rfc7231#section-6.3.2"},"Created")),(0,r.kt)("td",{parentName:"tr",align:null},"none"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"../schemas/post"},"Post"))))),(0,r.kt)("h3",{id:"example-responses"},"Example responses"),(0,r.kt)(i.Z,{defaultValue:"200",values:[{label:"200",value:"200"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"200",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": 0,\n  "type": "post",\n  "categories": [\n    {\n      "id": 0,\n      "tags": [],\n      "order": 123,\n      "name": "string",\n      "name_synonyms": "string",\n      "slug": "string",\n      "slogan": "string",\n      "html_info": "string",\n      "seo_title": "string",\n      "seo_description": "string",\n      "auto_follow": "string",\n      "active": true,\n      "deleted": false,\n      "image_original": "string",\n      "image_bigger": "string",\n      "image_big": "string",\n      "image_medium": "string",\n      "image_small": "string",\n      "emotional_image_original": "string",\n      "emotional_image_position": 123,\n      "lastmod_datetime": "2019-08-24T14:15:22Z",\n      "stream_order_by": "string",\n    }\n  ],\n  "medias": [\n    {\n      "id": 0,\n      "added_at": "2019-08-24T14:15:22Z",\n      "type": "url",\n      "title": "string",\n      "description": "string",\n      "url": "https://example.com",\n      "image": "string",\n      "image_width": 0,\n      "image_height": 0,\n      "order": 0,\n      "embed": {\n        "id": 0,\n        "embed_type": "string",\n        "embed_id": "string",\n        "url": "string",\n        "metadata": {}\n      }\n    }\n  ],\n  "location": {\n    "location": "string",\n    "lat": 0,\n    "lng": 0\n  },\n  "poll": {\n    "id": 0,\n    "title": "string",\n    "multiple_choices": true,\n    "added_at": "2019-08-24T14:15:22Z",\n    "modified_at": "2019-08-24T14:15:22Z",\n    "closed": true,\n    "expiration_at": "2019-08-24T14:15:22Z",\n    "hidden": "string",\n    "choices": [\n      {\n        "id": 0,\n        "choice": "string",\n        "order": 0,\n        "added_at": "2019-08-24T14:15:22Z",\n        "deleted": "string",\n        "vote_count": 0,\n        "voted": true\n      }\n    ]\n  },\n  "last_activity_at": "2019-08-24T14:15:22Z",\n  "author": {\n    "id": 0,\n    "username": "string",\n    "real_name": "string",\n    "date_joined": "2019-08-24T14:15:22Z",\n    "bio": "string",\n    "location": "string",\n    "location_lat_lng": "string",\n    "position_lat_lng": "string",\n    "date_of_birth": "string",\n    "description": "string",\n    "gender": "Male",\n    "website": "https://example.com",\n    "avatar": "string",\n    "cover": "string",\n    "ext_id": "string",\n    "tags": [],\n    "reputation": 111,\n    "followings_counter": 0,\n    "followers_counter": 0,\n    "posts_counter": 0,\n    "discussions_counter": 0,\n    "statuses_counter": 0,\n    "polls_counter": 0\n  },\n  "added_at": "2019-08-24T14:15:22Z",\n  "summary": "string",\n  "deleted": true,\n  "collapsed": false,\n  "comment_count": 0,\n  "vote_count": 0,\n  "voted": false,\n  "followed": false,\n  "suspended": true,\n  "flag_count": 0,\n  "share_count": 0,\n  "addressing": []\n}\n')))))}c.isMDXComponent=!0}}]);