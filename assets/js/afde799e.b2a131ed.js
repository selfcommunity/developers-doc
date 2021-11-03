"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[8055],{472:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return m},default:function(){return u}});var a=n(3117),i=n(102),r=(n(7294),n(3905)),l=["components"],o={sidebar_label:"Notification Type Mention",sidebar_position:1,title:"Notification Type Mention"},p=void 0,s={unversionedId:"apireference/v2/schemas/NotificationTypes/type_mention",id:"apireference/v2/schemas/NotificationTypes/type_mention",isDocsHomePage:!1,title:"Notification Type Mention",description:"Example preview:",source:"@site/docs/apireference/v2/schemas/NotificationTypes/type_mention.md",sourceDirName:"apireference/v2/schemas/NotificationTypes",slug:"/apireference/v2/schemas/NotificationTypes/type_mention",permalink:"/docs/apireference/v2/schemas/NotificationTypes/type_mention",editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/apireference/v2/schemas/NotificationTypes/type_mention.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Notification Type Mention",sidebar_position:1,title:"Notification Type Mention"},sidebar:"apireferenceSidebar",previous:{title:"Notification Type Kindly Notice",permalink:"/docs/apireference/v2/schemas/NotificationTypes/type_kindly_notice"},next:{title:"Notification Type Private Message",permalink:"/docs/apireference/v2/schemas/NotificationTypes/type_private_message"}},m=[{value:"Properties",id:"properties",children:[],level:4}],d={toc:m};function u(t){var e=t.components,o=(0,i.Z)(t,l);return(0,r.kt)("wrapper",(0,a.Z)({},d,o,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "is_new": false,\n  "sid": 16052906326300000000007190,\n  "type": "mention",\n  "active_at": "2020-11-14T17:52:20.967302+01:00",\n  "discussion": {...},\n  "post": {...},\n  "comment": {...},\n  "status": {...}\n}\n')),(0,r.kt)("p",null,"Example preview:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Notification",src:n(5348).Z})),(0,r.kt)("h4",{id:"properties"},"Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Restrictions"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"is_new"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"read-only"),(0,r.kt)("td",{parentName:"tr",align:null},"True if the notification has been read, otherwise false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sid"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"read-only"),(0,r.kt)("td",{parentName:"tr",align:null},"Serialization id of the notification")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"type"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"read-only"),(0,r.kt)("td",{parentName:"tr",align:null},'Type "mention"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"active_at"),(0,r.kt)("td",{parentName:"tr",align:null},"string(date-time)"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"read-only"),(0,r.kt)("td",{parentName:"tr",align:null},"Time when the notification was generated")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"discussion"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"../discussion"},"Discussion")),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"read-only"),(0,r.kt)("td",{parentName:"tr",align:null},"if user is mentioned in a discussion")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"post"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"../post"},"Post")),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"read-only"),(0,r.kt)("td",{parentName:"tr",align:null},"if the user is mentioned in a post")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"comment"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"../comment"},"Comment")),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"read-only"),(0,r.kt)("td",{parentName:"tr",align:null},"if user is mentioned in a comment")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"status"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"../status"},"Status")),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"read-only"),(0,r.kt)("td",{parentName:"tr",align:null},"if user is mentioned in a status")))))}u.isMDXComponent=!0},5348:function(t,e,n){e.Z=n.p+"assets/images/mention-0c5eee6551ced23fa471039e025c0187.png"}}]);