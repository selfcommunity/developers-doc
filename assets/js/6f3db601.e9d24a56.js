"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[1420],{9369:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var n=a(3117),i=a(102),o=(a(7294),a(3905)),r=["components"],s={sidebar_label:"Notification",sidebar_position:1,title:"Notification"},l=void 0,p={unversionedId:"apireference/v2/schemas/notification",id:"apireference/v2/schemas/notification",isDocsHomePage:!1,title:"Notification",description:"Properties",source:"@site/docs/apireference/v2/schemas/notification.md",sourceDirName:"apireference/v2/schemas",slug:"/apireference/v2/schemas/notification",permalink:"/docs/apireference/v2/schemas/notification",editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/apireference/v2/schemas/notification.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Notification",sidebar_position:1,title:"Notification"},sidebar:"apireferenceSidebar",previous:{title:"Moderation User",permalink:"/docs/apireference/v2/schemas/moderation_user"},next:{title:"Poll Vote",permalink:"/docs/apireference/v2/schemas/poll_vote"}},c=[{value:"Properties",id:"properties",children:[],level:4}],m={toc:c};function d(t){var e=t.components,a=(0,i.Z)(t,r);return(0,o.kt)("wrapper",(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "is_new": false,\n   "sid": "1605259249000",\n   "discussion": {...},\n   "post": {...},\n   "status": {...},\n   "aggregated": [\n        {\n          "is_new": false,\n          "type": "connection_accept",\n          "sid": 16037238513640000000074020,\n          "active_at": "2020-10-26T15:50:51.364336+01:00",\n          "accept_user": {}\n        }\n   ]\n}\n')),(0,o.kt)("h4",{id:"properties"},"Properties"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Required"),(0,o.kt)("th",{parentName:"tr",align:null},"Restrictions"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"is_new"),(0,o.kt)("td",{parentName:"tr",align:null},"boolean"),(0,o.kt)("td",{parentName:"tr",align:null},"true"),(0,o.kt)("td",{parentName:"tr",align:null},"read-only"),(0,o.kt)("td",{parentName:"tr",align:null},"True if there is in aggregate list at least one notification not yet read by the user, otherwise false.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"sid"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"true"),(0,o.kt)("td",{parentName:"tr",align:null},"read-only"),(0,o.kt)("td",{parentName:"tr",align:null},"Serialization id of the macro notification aggregate block.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"discussion"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"../schemas/discussion"},"Discussion")),(0,o.kt)("td",{parentName:"tr",align:null},"false"),(0,o.kt)("td",{parentName:"tr",align:null},"read-only"),(0,o.kt)("td",{parentName:"tr",align:null},"Primary object involved (object that is common to notifications group) if it is a discusssion. For some types of notifications it will not be present.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"post"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"../schemas/post"},"Post")),(0,o.kt)("td",{parentName:"tr",align:null},"false"),(0,o.kt)("td",{parentName:"tr",align:null},"read-only"),(0,o.kt)("td",{parentName:"tr",align:null},"Primary object involved (object that is common to notifications group) if it is a post. For some types of notifications it will not be present.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"status"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"../schemas/status"},"Status")),(0,o.kt)("td",{parentName:"tr",align:null},"false"),(0,o.kt)("td",{parentName:"tr",align:null},"read-only"),(0,o.kt)("td",{parentName:"tr",align:null},"Primary object involved (object that is common to notifications group) if it is a status. For some types of notifications it will not be present.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"aggregated"),(0,o.kt)("td",{parentName:"tr",align:null},"list(Object)"),(0,o.kt)("td",{parentName:"tr",align:null},"false"),(0,o.kt)("td",{parentName:"tr",align:null},"read-only"),(0,o.kt)("td",{parentName:"tr",align:null},"List of aggregated notifications by type. Types Object: ",(0,o.kt)("a",{parentName:"td",href:"../schemas/NotificationTypes/type_comment"},"NotificationTypeComment"),", ",(0,o.kt)("a",{parentName:"td",href:"../schemas/NotificationTypes/type_mention"},"NotificationTypeMention"),", ",(0,o.kt)("a",{parentName:"td",href:"../schemas/NotificationTypes/type_connection_accept"},"NotificationTypeConnectionAccept"),", ",(0,o.kt)("a",{parentName:"td",href:"../schemas/NotificationTypes/type_connection_request"},"NotificationTypeConnectionRequest"),", ",(0,o.kt)("a",{parentName:"td",href:"../schemas/private_message"},"NotificationTypePrivateMessage"),", ",(0,o.kt)("a",{parentName:"td",href:"../schemas/NotificationTypes/type_follow"},"NotificationTypeFollow"),", ",(0,o.kt)("a",{parentName:"td",href:"../schemas/NotificationTypes/type_voteup"},"NotificationTypeVoteUp"),", ",(0,o.kt)("a",{parentName:"td",href:"../schemas/NotificationTypes/type_blocked_user"},"NotificationTypeBlockedUser"),", ",(0,o.kt)("a",{parentName:"td",href:"../schemas/NotificationTypes/type_unblocked_user"},"NotificationTypeUnBlockedUser"),", ",(0,o.kt)("a",{parentName:"td",href:"../schemas/NotificationTypes/type_kindly_notice"},"NotificationTypeKindlyNotice"),", ",(0,o.kt)("a",{parentName:"td",href:"../schemas/NotificationTypes/type_collapsed_for"},"NotificationTypeCollapsedFor"),", ",(0,o.kt)("a",{parentName:"td",href:"../schemas/NotificationTypes/type_deleted_for"},"NotificationTypeDeletedFor"),", ",(0,o.kt)("a",{parentName:"td",href:"../schemas/NotificationTypes/type_custom_notification"},"NotificationTypeCustomNotification"))))))}d.isMDXComponent=!0}}]);