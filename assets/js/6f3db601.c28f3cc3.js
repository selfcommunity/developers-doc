"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[1420],{69989:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},assets:function(){return p},toc:function(){return f},default:function(){return m}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],c={sidebar_label:"Notification",sidebar_position:1,title:"Notification"},s=void 0,l={unversionedId:"apireference/v2/schemas/notification",id:"apireference/v2/schemas/notification",title:"Notification",description:"Properties",source:"@site/docs/apireference/v2/schemas/notification.md",sourceDirName:"apireference/v2/schemas",slug:"/apireference/v2/schemas/notification",permalink:"/docs/apireference/v2/schemas/notification",editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/apireference/v2/schemas/notification.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Notification",sidebar_position:1,title:"Notification"},sidebar:"apireferenceSidebar",previous:{title:"Moderation User",permalink:"/docs/apireference/v2/schemas/moderation_user"},next:{title:"Poll Vote",permalink:"/docs/apireference/v2/schemas/poll_vote"}},p={},f=[{value:"Properties",id:"properties",level:4}],d={toc:f};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "is_new": false,\n   "sid": "1605259249000",\n   "discussion": {...},\n   "post": {...},\n   "status": {...},\n   "aggregated": [\n        {\n          "is_new": false,\n          "type": "connection_accept",\n          "sid": 16037238513640000000074020,\n          "active_at": "2020-10-26T15:50:51.364336+01:00",\n          "accept_user": {}\n        }\n   ]\n}\n')),(0,i.kt)("h4",{id:"properties"},"Properties"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Restrictions"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"is_new"),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"true"),(0,i.kt)("td",{parentName:"tr",align:null},"read-only"),(0,i.kt)("td",{parentName:"tr",align:null},"True if there is in aggregate list at least one notification not yet read by the user, otherwise false.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"sid"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"true"),(0,i.kt)("td",{parentName:"tr",align:null},"read-only"),(0,i.kt)("td",{parentName:"tr",align:null},"Serialization id of the macro notification aggregate block.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"discussion"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/apireference/v2/schemas/discussion"},"Discussion")),(0,i.kt)("td",{parentName:"tr",align:null},"false"),(0,i.kt)("td",{parentName:"tr",align:null},"read-only"),(0,i.kt)("td",{parentName:"tr",align:null},"Primary object involved (object that is common to notifications group) if it is a discusssion. For some types of notifications it will not be present.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"post"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/apireference/v2/schemas/post"},"Post")),(0,i.kt)("td",{parentName:"tr",align:null},"false"),(0,i.kt)("td",{parentName:"tr",align:null},"read-only"),(0,i.kt)("td",{parentName:"tr",align:null},"Primary object involved (object that is common to notifications group) if it is a post. For some types of notifications it will not be present.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"status"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/apireference/v2/schemas/status"},"Status")),(0,i.kt)("td",{parentName:"tr",align:null},"false"),(0,i.kt)("td",{parentName:"tr",align:null},"read-only"),(0,i.kt)("td",{parentName:"tr",align:null},"Primary object involved (object that is common to notifications group) if it is a status. For some types of notifications it will not be present.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"aggregated"),(0,i.kt)("td",{parentName:"tr",align:null},"list(Object)"),(0,i.kt)("td",{parentName:"tr",align:null},"false"),(0,i.kt)("td",{parentName:"tr",align:null},"read-only"),(0,i.kt)("td",{parentName:"tr",align:null},"List of aggregated notifications by type. Types Object: ",(0,i.kt)("a",{parentName:"td",href:"/docs/apireference/v2/schemas/NotificationTypes/type_comment"},"NotificationTypeComment"),", ",(0,i.kt)("a",{parentName:"td",href:"/docs/apireference/v2/schemas/NotificationTypes/type_mention"},"NotificationTypeMention"),", ",(0,i.kt)("a",{parentName:"td",href:"/docs/apireference/v2/schemas/NotificationTypes/type_connection_accept"},"NotificationTypeConnectionAccept"),", ",(0,i.kt)("a",{parentName:"td",href:"/docs/apireference/v2/schemas/NotificationTypes/type_connection_request"},"NotificationTypeConnectionRequest"),", ",(0,i.kt)("a",{parentName:"td",href:"/docs/apireference/v2/schemas/private_message"},"NotificationTypePrivateMessage"),", ",(0,i.kt)("a",{parentName:"td",href:"/docs/apireference/v2/schemas/NotificationTypes/type_follow"},"NotificationTypeFollow"),", ",(0,i.kt)("a",{parentName:"td",href:"/docs/apireference/v2/schemas/NotificationTypes/type_voteup"},"NotificationTypeVoteUp"),", ",(0,i.kt)("a",{parentName:"td",href:"/docs/apireference/v2/schemas/NotificationTypes/type_blocked_user"},"NotificationTypeBlockedUser"),", ",(0,i.kt)("a",{parentName:"td",href:"/docs/apireference/v2/schemas/NotificationTypes/type_unblocked_user"},"NotificationTypeUnBlockedUser"),", ",(0,i.kt)("a",{parentName:"td",href:"/docs/apireference/v2/schemas/NotificationTypes/type_kindly_notice"},"NotificationTypeKindlyNotice"),", ",(0,i.kt)("a",{parentName:"td",href:"/docs/apireference/v2/schemas/NotificationTypes/type_collapsed_for"},"NotificationTypeCollapsedFor"),", ",(0,i.kt)("a",{parentName:"td",href:"/docs/apireference/v2/schemas/NotificationTypes/type_deleted_for"},"NotificationTypeDeletedFor"),", ",(0,i.kt)("a",{parentName:"td",href:"/docs/apireference/v2/schemas/NotificationTypes/type_custom_notification"},"NotificationTypeCustomNotification"))))))}m.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,u=d["".concat(s,".").concat(m)]||d[m]||f[m]||i;return n?a.createElement(u,o(o({ref:t},p),{},{components:n})):a.createElement(u,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);