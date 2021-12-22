"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[4849],{49935:function(n,e,t){t.r(e),t.d(e,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return d},toc:function(){return m},default:function(){return _}});var o=t(83117),i=t(80102),a=(t(67294),t(3905)),r=t(26396),s=t(58215),l=["components"],c={sidebar_label:"List of Connection Events",sidebar_position:6,title:"List of Connection Events"},u=void 0,d={unversionedId:"webhooks/ls_connection_events",id:"webhooks/ls_connection_events",isDocsHomePage:!1,title:"List of Connection Events",description:"| Connection                   | Triggered When                                          | Note                                                                       |",source:"@site/docs/webhooks/ls_connection_events.md",sourceDirName:"webhooks",slug:"/webhooks/ls_connection_events",permalink:"/docs/webhooks/ls_connection_events",editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/webhooks/ls_connection_events.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_label:"List of Connection Events",sidebar_position:6,title:"List of Connection Events"},sidebar:"webhookSidebar",previous:{title:"List of Comment Events",permalink:"/docs/webhooks/ls_comment_events"},next:{title:"List of Discussion Events",permalink:"/docs/webhooks/ls_discussion_events"}},m=[],p={toc:m};function _(n){var e=n.components,t=(0,i.Z)(n,l);return(0,a.kt)("wrapper",(0,o.Z)({},p,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Connection"),(0,a.kt)("th",{parentName:"tr",align:null},"Triggered When"),(0,a.kt)("th",{parentName:"tr",align:null},"Note"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"connection_request.created"),(0,a.kt)("td",{parentName:"tr",align:null},"a new connection request is created"),(0,a.kt)("td",{parentName:"tr",align:null},"This event is triggered only if ",(0,a.kt)("inlineCode",{parentName:"td"},"follow_enabled")," community option is false")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"connection_request.rejected"),(0,a.kt)("td",{parentName:"tr",align:null},"a connection request is rejected"),(0,a.kt)("td",{parentName:"tr",align:null},"This event is triggered only if ",(0,a.kt)("inlineCode",{parentName:"td"},"follow_enabled")," community option is false")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"connection_request.restored"),(0,a.kt)("td",{parentName:"tr",align:null},"a connection request that has been rejected is restored"),(0,a.kt)("td",{parentName:"tr",align:null},"This event is triggered only if ",(0,a.kt)("inlineCode",{parentName:"td"},"follow_enabled")," community option is false")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"connection_request.cancelled"),(0,a.kt)("td",{parentName:"tr",align:null},"a connection request is cancelled by the creator"),(0,a.kt)("td",{parentName:"tr",align:null},"This event is triggered only if ",(0,a.kt)("inlineCode",{parentName:"td"},"follow_enabled")," community option is false")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"connection.created"),(0,a.kt)("td",{parentName:"tr",align:null},"a new connection is created"),(0,a.kt)("td",{parentName:"tr",align:null},"This event is triggered only if ",(0,a.kt)("inlineCode",{parentName:"td"},"follow_enabled")," community option is false")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"connection.deleted"),(0,a.kt)("td",{parentName:"tr",align:null},"a connection is deleted"),(0,a.kt)("td",{parentName:"tr",align:null},"This event is triggered only if ",(0,a.kt)("inlineCode",{parentName:"td"},"follow_enabled")," community option is false")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"connection.follow"),(0,a.kt)("td",{parentName:"tr",align:null},"a user follows another user"),(0,a.kt)("td",{parentName:"tr",align:null},"This event is triggered only if ",(0,a.kt)("inlineCode",{parentName:"td"},"follow_enabled")," community option is true")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"connection.unfollow"),(0,a.kt)("td",{parentName:"tr",align:null},"a user unfollows another user"),(0,a.kt)("td",{parentName:"tr",align:null},"This event is triggered only if ",(0,a.kt)("inlineCode",{parentName:"td"},"follow_enabled")," community option is true")))),(0,a.kt)("blockquote",null,(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"connection_request.created"),(0,a.kt)("li",{parentName:"ul"},"connection_request.rejected"),(0,a.kt)("li",{parentName:"ul"},"connection_request.cancelled"),(0,a.kt)("li",{parentName:"ul"},"connection.created"),(0,a.kt)("li",{parentName:"ul"},"connection.deleted"))),(0,a.kt)(r.Z,{defaultValue:"json",values:[{label:"JSON",value:"json"}],mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"json",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "event_id": 0,\n    "type": "string",\n    "created": 1625471209.139224,\n    "data": {\n        "to_user": {\n            "id": 33,\n            "username": "string",\n            "real_name": "string",\n            "email": "user@example.com",\n            "email_isvalid": true,\n            "date_joined": "2019-08-24T14:15:22Z",\n            "bio": "string",\n            "location": "string",\n            "location_lat_lng": "string",\n            "position_lat_lng": "string",\n            "date_of_birth": "2019-09-23",\n            "description": "string",\n            "gender": "Male",\n            "status": "a",\n            "website": "https://example.com",\n            "avatar": "string",\n            "cover": "string",\n            "ext_id": 3,\n            "tags": [],\n            "reputation": 111,\n            "connection_requests_sent_counter": 1,\n            "connection_requests_received_counter": 0,\n            "connections_counter": 0,\n            "posts_counter": 0,\n            "discussions_counter": 0,\n            "statuses_counter": 0,\n            "polls_counter": 0\n        },\n        "from_user": {\n            "id": 1,\n            "username": "string",\n            "real_name": "string",\n            "email": "user@example.com",\n            "email_isvalid": true,\n            "date_joined": "2019-08-24T14:15:22Z",\n            "bio": "string",\n            "location": "string",\n            "location_lat_lng": "string",\n            "position_lat_lng": "string",\n            "date_of_birth": "2019-09-23",\n            "description": "string",\n            "gender": "Male",\n            "status": "a",\n            "website": "https://example.com",\n            "avatar": "string",\n            "cover": "string",\n            "ext_id": 3,\n            "tags": [],\n            "reputation": 111,\n            "connection_requests_sent_counter": 1,\n            "connection_requests_received_counter": 0,\n            "connections_counter": 0,\n            "posts_counter": 0,\n            "discussions_counter": 0,\n            "statuses_counter": 0,\n            "polls_counter": 0\n        }\n    }\n}\n')))),(0,a.kt)("blockquote",null,(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"connection.follow"),(0,a.kt)("li",{parentName:"ul"},"connection.unfollow "))),(0,a.kt)(r.Z,{defaultValue:"json",values:[{label:"JSON",value:"json"}],mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"json",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "event_id": 0,\n    "type": "string",\n    "created": 1625471209.139224,\n    "data": {\n        "to_user": {\n            "id": 114,\n            "username": "string",\n            "real_name": "string",\n            "email": "user@example.com",\n            "email_isvalid": true,\n            "date_joined": "2019-08-24T14:15:22Z",\n            "bio": "string",\n            "location": "string",\n            "location_lat_lng": "string",\n            "position_lat_lng": "string",\n            "date_of_birth": "2019-09-23",\n            "description": "string",\n            "gender": "Male",\n            "status": "a",\n            "website": "https://example.com",\n            "avatar": "string",\n            "cover": "string",\n            "ext_id": 3,\n            "tags": [],\n            "reputation": 14,\n            "connection_requests_sent_counter": 1,\n            "connection_requests_received_counter": 0,\n            "connections_counter": 0,\n            "posts_counter": 0,\n            "discussions_counter": 0,\n            "statuses_counter": 0,\n            "polls_counter": 0\n        },\n        "from_user": {\n            "id": 1,\n            "username": "string",\n            "real_name": "string",\n            "email": "user@example.com",\n            "email_isvalid": true,\n            "date_joined": "2019-08-24T14:15:22Z",\n            "bio": "string",\n            "location": "string",\n            "location_lat_lng": "string",\n            "position_lat_lng": "string",\n            "date_of_birth": "2019-09-23",\n            "description": "string",\n            "gender": "Male",\n            "status": "a",\n            "website": "https://example.com",\n            "avatar": "string",\n            "cover": "string",\n            "ext_id": 3,\n            "tags": [],\n            "reputation": 81,\n            "connection_requests_sent_counter": 1,\n            "connection_requests_received_counter": 0,\n            "connections_counter": 0,\n            "posts_counter": 0,\n            "discussions_counter": 0,\n            "statuses_counter": 0,\n            "polls_counter": 0\n        }\n    }\n}\n')))))}_.isMDXComponent=!0}}]);