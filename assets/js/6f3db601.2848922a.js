"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[91420],{69989:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const i={sidebar_label:"Notification",sidebar_position:1,title:"Notification"},o=void 0,s={unversionedId:"apireference/v2/schemas/notification",id:"apireference/v2/schemas/notification",title:"Notification",description:"Properties",source:"@site/docs/apireference/v2/schemas/notification.md",sourceDirName:"apireference/v2/schemas",slug:"/apireference/v2/schemas/notification",permalink:"/docs/apireference/v2/schemas/notification",draft:!1,editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/apireference/v2/schemas/notification.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Notification",sidebar_position:1,title:"Notification"},sidebar:"apireferenceSidebar",previous:{title:"Moderation User",permalink:"/docs/apireference/v2/schemas/moderation_user"},next:{title:"Poll",permalink:"/docs/apireference/v2/schemas/poll"}},c={},l=[{value:"Properties",id:"properties",level:4}],p={toc:l},d="wrapper";function f(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "is_new": "boolean",\n  "sid": "string",\n  "post/discussion/status": {},\n  "aggregated": [\n    {\n      "is_new": "boolean",\n      "sid": "string",\n      "type": "string",\n      "active_at": "string",\n      "post/discussion/status/comment/follower": {}\n    }\n  ]\n}\n')),(0,r.kt)("h4",{id:"properties"},"Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Restrictions"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"is_new"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"read-only"),(0,r.kt)("td",{parentName:"tr",align:null},"If true, there is in aggregate list at least one notification not yet read by the user, otherwise it is false.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sid"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"read-only"),(0,r.kt)("td",{parentName:"tr",align:null},"Serialization id of the macro notification aggregate block.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"discussion"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/apireference/v2/schemas/discussion"},"Discussion")),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"read-only"),(0,r.kt)("td",{parentName:"tr",align:null},"Primary object involved (object that is common to notifications group) if it is a discusssion. For some types of notifications it will not be present.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"post"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/apireference/v2/schemas/post"},"Post")),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"read-only"),(0,r.kt)("td",{parentName:"tr",align:null},"Primary object involved (object that is common to notifications group) if it is a post. For some types of notifications it will not be present.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"status"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/apireference/v2/schemas/status"},"Status")),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"read-only"),(0,r.kt)("td",{parentName:"tr",align:null},"Primary object involved (object that is common to notifications group) if it is a status. For some types of notifications it will not be present.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"aggregated"),(0,r.kt)("td",{parentName:"tr",align:null},"list(Object)"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"read-only"),(0,r.kt)("td",{parentName:"tr",align:null},"List of aggregated notifications by type. Types Object: ",(0,r.kt)("a",{parentName:"td",href:"/docs/apireference/v2/schemas/NotificationTypes/type_comment"},"NotificationTypeComment"),", ",(0,r.kt)("a",{parentName:"td",href:"/docs/apireference/v2/schemas/NotificationTypes/type_mention"},"NotificationTypeMention"),", ",(0,r.kt)("a",{parentName:"td",href:"/docs/apireference/v2/schemas/NotificationTypes/type_connection_accept"},"NotificationTypeConnectionAccept"),", ",(0,r.kt)("a",{parentName:"td",href:"/docs/apireference/v2/schemas/NotificationTypes/type_connection_request"},"NotificationTypeConnectionRequest"),", ",(0,r.kt)("a",{parentName:"td",href:"/docs/apireference/v2/schemas/private_message"},"NotificationTypePrivateMessage"),", ",(0,r.kt)("a",{parentName:"td",href:"/docs/apireference/v2/schemas/NotificationTypes/type_follow"},"NotificationTypeFollow"),", ",(0,r.kt)("a",{parentName:"td",href:"/docs/apireference/v2/schemas/NotificationTypes/type_voteup"},"NotificationTypeVoteUp"),", ",(0,r.kt)("a",{parentName:"td",href:"/docs/apireference/v2/schemas/NotificationTypes/type_blocked_user"},"NotificationTypeBlockedUser"),", ",(0,r.kt)("a",{parentName:"td",href:"/docs/apireference/v2/schemas/NotificationTypes/type_unblocked_user"},"NotificationTypeUnBlockedUser"),", ",(0,r.kt)("a",{parentName:"td",href:"/docs/apireference/v2/schemas/NotificationTypes/type_kindly_notice"},"NotificationTypeKindlyNotice"),", ",(0,r.kt)("a",{parentName:"td",href:"/docs/apireference/v2/schemas/NotificationTypes/type_collapsed_for"},"NotificationTypeCollapsedFor"),", ",(0,r.kt)("a",{parentName:"td",href:"/docs/apireference/v2/schemas/NotificationTypes/type_deleted_for"},"NotificationTypeDeletedFor"),", ",(0,r.kt)("a",{parentName:"td",href:"/docs/apireference/v2/schemas/NotificationTypes/type_custom_notification"},"NotificationTypeCustomNotification"),", ",(0,r.kt)("a",{parentName:"td",href:"/docs/apireference/v2/schemas/NotificationTypes/type_contribution"},"NotificationTypeContribution"))))))}f.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,u=d["".concat(c,".").concat(m)]||d[m]||f[m]||i;return n?a.createElement(u,o(o({ref:t},p),{},{components:n})):a.createElement(u,o({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);