"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[1009],{7466:function(t,n,e){e.r(n),e.d(n,{frontMatter:function(){return d},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return m},default:function(){return g}});var a=e(3117),i=e(102),l=(e(7294),e(3905)),r=e(6396),s=e(8215),o=["components"],d={sidebar_label:"Update a specific Discussion",sidebar_position:6,title:"Update a specific Discussion"},p=void 0,u={unversionedId:"apireference/v2/discussion/update_a_specific_discussion",id:"apireference/v2/discussion/update_a_specific_discussion",isDocsHomePage:!1,title:"Update a specific Discussion",description:"This endpoint updates a specific discussion.",source:"@site/docs/apireference/v2/discussion/update_a_specific_discussion.md",sourceDirName:"apireference/v2/discussion",slug:"/apireference/v2/discussion/update_a_specific_discussion",permalink:"/docs/apireference/v2/discussion/update_a_specific_discussion",editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/apireference/v2/discussion/update_a_specific_discussion.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_label:"Update a specific Discussion",sidebar_position:6,title:"Update a specific Discussion"},sidebar:"apireferenceSidebar",previous:{title:"Get a specific Discussion",permalink:"/docs/apireference/v2/discussion/get_a_specific_discussion"},next:{title:"Delete a Discussion",permalink:"/docs/apireference/v2/discussion/delete_a_discussion"}},m=[{value:"HTTP Request",id:"http-request",children:[{value:"Parameters",id:"parameters",children:[{value:"Example Body Parameters",id:"example-body-parameters",children:[],level:4}],level:3},{value:"Example Request",id:"example-request",children:[],level:3}],level:2},{value:"Responses",id:"responses",children:[{value:"Example responses",id:"example-responses",children:[],level:3}],level:2}],c={toc:m};function g(t){var n=t.components,e=(0,i.Z)(t,o);return(0,l.kt)("wrapper",(0,a.Z)({},c,e,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This endpoint updates a specific discussion."),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"This operation requires authentication. The logged user must be the discussion creator"))),(0,l.kt)("h2",{id:"http-request"},"HTTP Request"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"PUT /api/v2/discussion/{id}/")),(0,l.kt)("h3",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"In"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"id"),(0,l.kt)("td",{parentName:"tr",align:null},"path"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"A unique integer value identifying this discussion")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\xbb title"),(0,l.kt)("td",{parentName:"tr",align:null},"body"),(0,l.kt)("td",{parentName:"tr",align:null},"string\xa6null"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"The title of the discussion")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\xbb text"),(0,l.kt)("td",{parentName:"tr",align:null},"body"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"The content of the discussion in html format, it can contain some ",(0,l.kt)("a",{parentName:"td",href:"../mention/mention"},"mentions"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\xbb categories"),(0,l.kt)("td",{parentName:"tr",align:null},"body"),(0,l.kt)("td",{parentName:"tr",align:null},"list(integer)"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"List of id of ",(0,l.kt)("a",{parentName:"td",href:"../schemas/category"},"Category"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\xbb medias"),(0,l.kt)("td",{parentName:"tr",align:null},"body"),(0,l.kt)("td",{parentName:"tr",align:null},"list(integer)"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"List of id of ",(0,l.kt)("a",{parentName:"td",href:"../schemas/media"},"Media"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\xbb location"),(0,l.kt)("td",{parentName:"tr",align:null},"body"),(0,l.kt)("td",{parentName:"tr",align:null},"object\xa6null"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"The Location object to associate at the discussion")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\xbb\xbb location"),(0,l.kt)("td",{parentName:"tr",align:null},"body"),(0,l.kt)("td",{parentName:"tr",align:null},"string\xa6null"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"none")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\xbb\xbb lat"),(0,l.kt)("td",{parentName:"tr",align:null},"body"),(0,l.kt)("td",{parentName:"tr",align:null},"number\xa6null"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"none")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\xbb\xbb lng"),(0,l.kt)("td",{parentName:"tr",align:null},"body"),(0,l.kt)("td",{parentName:"tr",align:null},"number\xa6null"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"none")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\xbb poll"),(0,l.kt)("td",{parentName:"tr",align:null},"body"),(0,l.kt)("td",{parentName:"tr",align:null},"object\xa6null"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"The poll object to associate at the discussion")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\xbb\xbb title"),(0,l.kt)("td",{parentName:"tr",align:null},"body"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"none")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\xbb\xbb multiple_choices"),(0,l.kt)("td",{parentName:"tr",align:null},"body"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"none")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\xbb\xbb expiration_at"),(0,l.kt)("td",{parentName:"tr",align:null},"body"),(0,l.kt)("td",{parentName:"tr",align:null},"string(date-time)"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"none")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\xbb\xbb choices"),(0,l.kt)("td",{parentName:"tr",align:null},"body"),(0,l.kt)("td",{parentName:"tr",align:null},"list(object)"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"none")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\xbb\xbb\xbb choice"),(0,l.kt)("td",{parentName:"tr",align:null},"body"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"none")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\xbb addressing"),(0,l.kt)("td",{parentName:"tr",align:null},"body"),(0,l.kt)("td",{parentName:"tr",align:null},"list(integer)"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"List of id of ",(0,l.kt)("a",{parentName:"td",href:"../schemas/tag"},"Tag"))))),(0,l.kt)("h4",{id:"example-body-parameters"},"Example Body Parameters"),(0,l.kt)(r.Z,{defaultValue:"json",values:[{label:"JSON",value:"json"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"json",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "title": "string",\n  "text": "string",\n  "categories": [0],\n  "medias": [0],\n  "location": {\n    "location": "string",\n    "lat": 0,\n    "lng": 0\n  },\n  "poll": {\n    "title": "string",\n    "multiple_choices": true,\n    "closed": true,\n    "expiration_at": "2019-08-24T14:15:22Z",\n    "choices": [\n      {\n        "choice": "string"\n      }\n    ]\n  },\n  "addressing": []\n}\n')))),(0,l.kt)("h3",{id:"example-request"},"Example Request"),(0,l.kt)(r.Z,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"Bash",value:"bash"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'const inputBody = {\n  "title": "string",\n  "text": "string",\n  "categories": [0],\n  "medias": [0],\n  "location": {\n    "location": "string",\n    "lat": 0,\n    "lng": 0\n  },\n  "poll": {\n    "title": "string",\n    "multiple_choices": true,\n    "closed": true,\n    "expiration_at": "2019-08-24T14:15:22Z",\n    "choices": [\n      {\n        "choice": "string"\n      }\n    ]\n  },\n  "addressing": []\n};\nconst headers = {\n  \'Content-Type\':\'application/json\',\n  \'Accept\':\'application/json\',\n  \'Authorization\': \'Bearer {access_token}\'\n};\n\nfetch(\'/api/v2/discussion/{id}/\',\n{\n  method: \'PUT\',\n  body: inputBody,\n  headers: headers\n})\n.then(function(res) {\n    return res.json();\n}).then(function(body) {\n    console.log(body);\n});\n\n'))),(0,l.kt)(s.Z,{value:"bash",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'# You can also use wget\ncurl -X PUT /api/v2/discussion/{id}/ \\\n  -H \'Content-Type: application/json\' \\\n  -H \'Accept: application/json\' \\\n  -H \'Authorization: Bearer {access_token}\' \\\n  --data-raw \'{\n    "title": "string",\n    "text": "string",\n    "categories": [0],\n    "medias": [0],\n    "location": {\n      "location": "string",\n      "lat": 0,\n      "lng": 0\n    },\n    "poll": {\n      "title": "string",\n      "multiple_choices": true,\n      "closed": true,\n      "expiration_at": "2019-08-24T14:15:22Z",\n      "choices": [\n        {\n          "choice": "string"\n        }\n      ]\n    },\n    "addressing": []\n  }\'\n')))),(0,l.kt)("h2",{id:"responses"},"Responses"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Status"),(0,l.kt)("th",{parentName:"tr",align:null},"Meaning"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Schema"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"200"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://tools.ietf.org/html/rfc7231#section-6.3.1"},"OK")),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"../schemas/update_discussion"},"UpdateDiscussion"))))),(0,l.kt)("h3",{id:"example-responses"},"Example responses"),(0,l.kt)(r.Z,{defaultValue:"200",values:[{label:"200",value:"200"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"200",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": 0,\n  "categories": [\n    {\n      "id": 0,\n      "tags": [],\n      "order": 123,\n      "name": "string",\n      "name_synonyms": "string",\n      "slug": "string",\n      "slogan": "string",\n      "html_info": "string",\n      "seo_title": "string",\n      "seo_description": "string",\n      "auto_follow": "string",\n      "active": true,\n      "deleted": false,\n      "image_original": "string",\n      "image_bigger": "string",\n      "image_big": "string",\n      "image_medium": "string",\n      "image_small": "string",\n      "emotional_image_original": "string",\n      "emotional_image_position": 123,\n      "lastmod_datetime": "2019-08-24T14:15:22Z",\n      "stream_order_by": "string",\n    }\n  ],\n  "medias": [\n    {\n      "id": 0,\n      "added_at": "2019-08-24T14:15:22Z",\n      "type": "url",\n      "title": "string",\n      "description": "string",\n      "url": "https://example.com",\n      "image": "string",\n      "image_width": 0,\n      "image_height": 0,\n      "order": 0,\n      "embed": {\n        "id": 0,\n        "embed_type": "string",\n        "embed_id": "string",\n        "url": "string",\n        "metadata": {}\n      }\n    }\n  ],\n  "location": {\n    "location": "string",\n    "lat": 0,\n    "lng": 0\n  },\n  "poll": {\n    "id": 0,\n    "title": "string",\n    "multiple_choices": true,\n    "added_at": "2019-08-24T14:15:22Z",\n    "modified_at": "2019-08-24T14:15:22Z",\n    "closed": true,\n    "expiration_at": "2019-08-24T14:15:22Z",\n    "hidden": "string",\n    "choices": [\n      {\n        "id": 0,\n        "choice": "string",\n        "order": 0,\n        "added_at": "2019-08-24T14:15:22Z",\n        "deleted": "string",\n        "vote_count": 0,\n        "voted": true\n      }\n    ]\n  },\n  "last_activity_at": "2019-08-24T14:15:22Z",\n  "author": {\n    "id": 0,\n    "username": "string",\n    "real_name": "string",\n    "date_joined": "2019-08-24T14:15:22Z",\n    "bio": "string",\n    "location": "string",\n    "location_lat_lng": "string",\n    "position_lat_lng": "string",\n    "date_of_birth": "string",\n    "description": "string",\n    "gender": "Male",\n    "website": "https://example.com",\n    "avatar": "string",\n    "cover": "string",\n    "ext_id": "string",\n    "tags": [],\n    "reputation": 111,\n    "followings_counter": 1,\n    "followers_counter": 1,\n    "posts_counter": 2,\n    "discussions_counter": 4,\n    "statuses_counter": 1,\n    "polls_counter": 6\n  },\n  "added_at": "2019-08-24T14:15:22Z",\n  "html": "string",\n  "summary": "string",\n  "deleted": true,\n  "collapsed": false,\n  "comment_count": 0,\n  "vote_count": "string",\n  "voted": false,\n  "flag_count": 0,\n  "share_count": 0,\n  "addressing": [],\n  "title": "string",\n  "slug": "string",\n  "view_count": 1,\n  "follower_count": "string"\n}\n')))))}g.isMDXComponent=!0}}]);