"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[2665],{5371:function(n,t,e){e.r(t),e.d(t,{frontMatter:function(){return d},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return p},default:function(){return g}});var s=e(3117),i=e(102),o=(e(7294),e(3905)),a=e(6396),r=e(8215),l=["components"],d={sidebar_label:"List of Discussion Events",sidebar_position:7,title:"List of Discussion Events"},u=void 0,c={unversionedId:"webhooks/ls_discussion_events",id:"webhooks/ls_discussion_events",isDocsHomePage:!1,title:"List of Discussion Events",description:"| Discussion          | Triggered When                          | Note                                                                          |",source:"@site/docs/webhooks/ls_discussion_events.md",sourceDirName:"webhooks",slug:"/webhooks/ls_discussion_events",permalink:"/docs/webhooks/ls_discussion_events",editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/webhooks/ls_discussion_events.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_label:"List of Discussion Events",sidebar_position:7,title:"List of Discussion Events"},sidebar:"webhookSidebar",previous:{title:"List of Connection Events",permalink:"/docs/webhooks/ls_connection_events"},next:{title:"List of Loyalty Events",permalink:"/docs/webhooks/ls_loyalty_events"}},p=[],m={toc:p};function g(n){var t=n.components,e=(0,i.Z)(n,l);return(0,o.kt)("wrapper",(0,s.Z)({},m,e,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Discussion"),(0,o.kt)("th",{parentName:"tr",align:null},"Triggered When"),(0,o.kt)("th",{parentName:"tr",align:null},"Note"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"discussion.created"),(0,o.kt)("td",{parentName:"tr",align:null},"a new discussion is created"),(0,o.kt)("td",{parentName:"tr",align:null},"This event is triggered only if ",(0,o.kt)("inlineCode",{parentName:"td"},"discussion_enabled")," community option is true")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"discussion.updated"),(0,o.kt)("td",{parentName:"tr",align:null},"a discussion is updated"),(0,o.kt)("td",{parentName:"tr",align:null},"This event is triggered only if ",(0,o.kt)("inlineCode",{parentName:"td"},"discussion_enabled")," community option is true")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"discussion.deleted"),(0,o.kt)("td",{parentName:"tr",align:null},"a discussion is deleted"),(0,o.kt)("td",{parentName:"tr",align:null},"This event is triggered only if ",(0,o.kt)("inlineCode",{parentName:"td"},"discussion_enabled")," community option is true")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"discussion.restored"),(0,o.kt)("td",{parentName:"tr",align:null},"a discussion is restored after deletion"),(0,o.kt)("td",{parentName:"tr",align:null},"This event is triggered only if ",(0,o.kt)("inlineCode",{parentName:"td"},"discussion_enabled")," community option is true")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"discussion.follow"),(0,o.kt)("td",{parentName:"tr",align:null},"a discussion is followed by the user"),(0,o.kt)("td",{parentName:"tr",align:null},"This event is triggered only if ",(0,o.kt)("inlineCode",{parentName:"td"},"discussion_enabled")," community option is true")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"discussion.unfollow"),(0,o.kt)("td",{parentName:"tr",align:null},"a discussion is unfollowed by the user"),(0,o.kt)("td",{parentName:"tr",align:null},"This event is triggered only if ",(0,o.kt)("inlineCode",{parentName:"td"},"discussion_enabled")," community option is true")))),(0,o.kt)("blockquote",null,(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},"discussion.created"),(0,o.kt)("li",{parentName:"ul"},"discussion.updated"),(0,o.kt)("li",{parentName:"ul"},"discussion.deleted"),(0,o.kt)("li",{parentName:"ul"},"discussion.restored"))),(0,o.kt)(a.Z,{defaultValue:"json",values:[{label:"JSON",value:"json"}],mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"json",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "event_id": 0,\n    "type": "string",\n    "created": 1625471209.139224,\n    "data": {\n        "id": 1,\n        "categories": [],\n        "medias": [],\n        "location": [],\n        "poll": [],\n        "last_activity_at": "2021-05-28T11:37:25.178645+02:00",\n        "author": {\n            "id": 100,\n            "username": "string",\n            "real_name": "string",\n            "date_joined": "2021-05-28T10:33:52.269304+02:00",\n            "bio":  "string",\n            "location": "string",\n            "location_lat_lng":  "string",\n            "position_lat_lng":  "string",\n            "date_of_birth": "string",\n            "description": "string",\n            "gender": "Male",\n            "website": "https://example.com",\n            "avatar": "string",\n            "cover": "string",\n            "ext_id": "string",\n            "tags": [],\n            "reputation": 111,\n            "followings_counter": 7,\n            "followers_counter": 2,\n            "posts_counter": 4,\n            "discussions_counter": 3,\n            "statuses_counter": 0,\n            "polls_counter": 1\n        },\n        "added_at": "2021-05-28T11:37:25.178645+02:00",\n        "html":  "string",\n        "summary":  "string",\n        "deleted": true,\n        "collapsed": false,\n        "comment_count": 0,\n        "vote_count": 0,\n        "flag_count": 0,\n        "share_count": 0,\n        "addressing": [],\n        "title": "string",\n        "slug": "string",\n        "view_count": 0,\n        "follower_count": 0\n    }\n}\n')))),(0,o.kt)("blockquote",null,(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},"discussion.follow"),(0,o.kt)("li",{parentName:"ul"},"discussion.unfollow"))),(0,o.kt)(a.Z,{defaultValue:"json",values:[{label:"JSON",value:"json"}],mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"json",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "event_id": 0,\n    "type": "string",\n    "created": 1625471209.139224,\n    "data": {\n        "added_at": "2021-06-07T09:46:39.536844+02:00",\n        "user": {\n            "id": 1,\n            "username": "string",\n            "real_name": "string",\n            "email": "user@example.com",\n            "email_isvalid": true,\n            "date_joined": "2019-08-24T14:15:22Z",\n            "bio": "string",\n            "location": "string",\n            "location_lat_lng": "string",\n            "position_lat_lng": "string",\n            "date_of_birth": "2019-09-23",\n            "description": "string",\n            "gender": "Male",\n            "status": "a",\n            "website": "https://example.com",\n            "avatar": "string",\n            "cover": "string",\n            "ext_id": 3,\n            "tags": [],\n            "reputation": 111,\n            "followings_counter": 7,\n            "followers_counter": 2,\n            "posts_counter": 4,\n            "discussions_counter": 3,\n            "statuses_counter": 0,\n            "polls_counter": 1\n        },\n        "discussion": {\n            "id": 1,\n            "categories": [],\n            "medias": [],\n            "location": "string",\n            "poll": [],\n            "last_activity_at": "2021-06-07T09:44:59.016173+02:00",\n            "author": {\n                "id": 100,\n                "username": "string",\n                "real_name": "string",\n                "date_joined": "2021-05-28T10:33:52.269304+02:00",\n                "bio":  "string",\n                "location": "string",\n                "location_lat_lng":  "string",\n                "position_lat_lng":  "string",\n                "date_of_birth": "string",\n                "description": "string",\n                "gender": "Male",\n                "website": "https://example.com",\n                "avatar": "string",\n                "cover": "string",\n                "ext_id": "string",\n                "tags": [],\n                "reputation": 111,\n                "followings_counter": 7,\n                "followers_counter": 2,\n                "posts_counter": 4,\n                "discussions_counter": 3,\n                "statuses_counter": 0,\n                "polls_counter": 1\n            },\n            "added_at": "2021-06-07T09:44:59.016173+02:00",\n            "html":  "string",\n            "summary":  "string",\n            "deleted": true,\n            "collapsed": false,\n            "comment_count": 0,\n            "vote_count": 0,\n            "flag_count": 0,\n            "share_count": 0,\n            "addressing": [],\n            "title": "string",\n            "slug": "string",\n            "view_count": 0,\n            "follower_count": 0\n        }\n    }\n}\n')))))}g.isMDXComponent=!0}}]);