"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[3620],{9520:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return p},contentTitle:function(){return o},metadata:function(){return d},toc:function(){return m},default:function(){return u}});var n=a(3117),r=a(102),l=(a(7294),a(3905)),i=["components"],p={sidebar_label:"Score",sidebar_position:1,title:"Score"},o=void 0,d={unversionedId:"apireference/v2/schemas/score",id:"apireference/v2/schemas/score",isDocsHomePage:!1,title:"Score",description:"Properties",source:"@site/docs/apireference/v2/schemas/score.md",sourceDirName:"apireference/v2/schemas",slug:"/apireference/v2/schemas/score",permalink:"/docs/apireference/v2/schemas/score",editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/apireference/v2/schemas/score.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Score",sidebar_position:1,title:"Score"},sidebar:"apireferenceSidebar",previous:{title:"Private Message",permalink:"/docs/apireference/v2/schemas/private_message"},next:{title:"Search Discussion",permalink:"/docs/apireference/v2/schemas/search_discussion"}},m=[{value:"Properties",id:"properties",children:[],level:4},{value:"Reputation Types",id:"reputation-types",children:[],level:4}],s={toc:m};function u(t){var e=t.components,a=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": 0,\n  "user": {\n    "id": 0,\n    "username": "string",\n    "real_name": "string",\n    "email": "user@example.com",\n    "description": "string",\n    "avatar": "string",\n    "reputation": 0\n  },\n  "score": "string",\n  "reputation_type": 1,\n  "reputation_type_description": "string",\n  "comment": "string"\n}\n\n')),(0,l.kt)("h4",{id:"properties"},"Properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Restrictions"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"id"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"read-only"),(0,l.kt)("td",{parentName:"tr",align:null},"Unique integer value")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"user"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"read-only"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"../schemas/user"},"User"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"score"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"read-only"),(0,l.kt)("td",{parentName:"tr",align:null},"Positive or negative integer value")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"reputation_type"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"read-only"),(0,l.kt)("td",{parentName:"tr",align:null},"Integer code")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"reputation_type_description"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"read-only"),(0,l.kt)("td",{parentName:"tr",align:null},"String description of the code")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"comment"),(0,l.kt)("td",{parentName:"tr",align:null},"string\xa6null"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"Custom comment for this score variation")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"created_by"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"read-only"),(0,l.kt)("td",{parentName:"tr",align:null},"The moderator ",(0,l.kt)("a",{parentName:"td",href:"../schemas/user"},"User"))))),(0,l.kt)("h4",{id:"reputation-types"},"Reputation Types"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"reputation_type"),(0,l.kt)("th",{parentName:"tr",align:null},"reputation_type_description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"gain_by_upvoted")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"10"),(0,l.kt)("td",{parentName:"tr",align:null},"assigned_by_moderator")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"11"),(0,l.kt)("td",{parentName:"tr",align:null},"gain_by_cancelling_contribute_moderation")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"12"),(0,l.kt)("td",{parentName:"tr",align:null},"gain_by_make_post")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"13"),(0,l.kt)("td",{parentName:"tr",align:null},"gain_by_make_first_level_comment")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"14"),(0,l.kt)("td",{parentName:"tr",align:null},"gain_by_make_second_level_comment")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"15"),(0,l.kt)("td",{parentName:"tr",align:null},"gain_by_connection")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"17"),(0,l.kt)("td",{parentName:"tr",align:null},"gain_by_app_used")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"18"),(0,l.kt)("td",{parentName:"tr",align:null},"gain_by_daily_visit")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"19"),(0,l.kt)("td",{parentName:"tr",align:null},"gain_by_follower")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"20"),(0,l.kt)("td",{parentName:"tr",align:null},"gain_by_unblock_account")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-1"),(0,l.kt)("td",{parentName:"tr",align:null},"lose_by_upvote_canceled")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-11"),(0,l.kt)("td",{parentName:"tr",align:null},"lose_by_contribute_moderation")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-12"),(0,l.kt)("td",{parentName:"tr",align:null},"lose_by_delete_post")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-13"),(0,l.kt)("td",{parentName:"tr",align:null},"lose_by_delete_first_level_comment")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-14"),(0,l.kt)("td",{parentName:"tr",align:null},"lose_by_delete_second_level_comment")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-15"),(0,l.kt)("td",{parentName:"tr",align:null},"lose_by_connection")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-19"),(0,l.kt)("td",{parentName:"tr",align:null},"lose_by_follower")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-20"),(0,l.kt)("td",{parentName:"tr",align:null},"lose_by_block_account")))))}u.isMDXComponent=!0}}]);