"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[409],{14468:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return u}});var r=n(83117),a=n(80102),l=(n(67294),n(3905)),i=["components"],o={sidebar_label:"Notification Type Deleted For",sidebar_position:1,title:"Notification Type Deleted For"},p=void 0,d={unversionedId:"apireference/v2/schemas/NotificationTypes/type_deleted_for",id:"apireference/v2/schemas/NotificationTypes/type_deleted_for",title:"Notification Type Deleted For",description:"Example preview:",source:"@site/docs/apireference/v2/schemas/NotificationTypes/type_deleted_for.md",sourceDirName:"apireference/v2/schemas/NotificationTypes",slug:"/apireference/v2/schemas/NotificationTypes/type_deleted_for",permalink:"/docs/apireference/v2/schemas/NotificationTypes/type_deleted_for",editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/apireference/v2/schemas/NotificationTypes/type_deleted_for.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Notification Type Deleted For",sidebar_position:1,title:"Notification Type Deleted For"},sidebar:"apireferenceSidebar",previous:{title:"Notification Type Custom Notification",permalink:"/docs/apireference/v2/schemas/NotificationTypes/type_custom_notification"},next:{title:"Notification Type Follow",permalink:"/docs/apireference/v2/schemas/NotificationTypes/type_follow"}},s={},u=[{value:"Properties",id:"properties",level:4},{value:"Enumerated Values",id:"enumerated-values",level:4}],c={toc:u};function m(e){var t=e.components,o=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "is_new": true,\n  "sid": 16053813898480000000224680,\n  "type": "deleted_for_<type>",\n  "active_at": "2020-11-14T20:16:29.848490+01:00",\n  "discussion": {},\n  "post": {},\n  "comment": {},\n  "status": {}\n}\n')),(0,l.kt)("p",null,"Example preview:"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Notification",src:n(61797).Z,width:"493",height:"114"})),(0,l.kt)("h4",{id:"properties"},"Properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Restrictions"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"is_new"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"read-only"),(0,l.kt)("td",{parentName:"tr",align:null},"True if the notification has been read, otherwise false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sid"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"read-only"),(0,l.kt)("td",{parentName:"tr",align:null},"Serialization id of the notification")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"type"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"read-only"),(0,l.kt)("td",{parentName:"tr",align:null},'Types: "deleted_for_advertising", "deleted_for_aggressive", "deleted_for_vulgar", "deleted_for_poor", "deleted_for_offtopic", "undeleted_for"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"active_at"),(0,l.kt)("td",{parentName:"tr",align:null},"string(date-time)"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"read-only"),(0,l.kt)("td",{parentName:"tr",align:null},"Time when the notification was generated")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"discussion"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/apireference/v2/schemas/discussion"},"Discussion")),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"read-only"),(0,l.kt)("td",{parentName:"tr",align:null},"if a discussion is deleted")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"post"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/apireference/v2/schemas/post"},"Post")),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"read-only"),(0,l.kt)("td",{parentName:"tr",align:null},"if a post is deleted")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"comment"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/apireference/v2/schemas/comment"},"Comment")),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"read-only"),(0,l.kt)("td",{parentName:"tr",align:null},"if a comment is deleted")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"status"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/apireference/v2/schemas/status"},"Status")),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"read-only"),(0,l.kt)("td",{parentName:"tr",align:null},"if a status is deleted")))),(0,l.kt)("h4",{id:"enumerated-values"},"Enumerated Values"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"type"),(0,l.kt)("td",{parentName:"tr",align:null},"deleted_for_advertising"),(0,l.kt)("td",{parentName:"tr",align:null},"Advertising content")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"type"),(0,l.kt)("td",{parentName:"tr",align:null},"deleted_for_aggressive"),(0,l.kt)("td",{parentName:"tr",align:null},"Aggressive content")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"type"),(0,l.kt)("td",{parentName:"tr",align:null},"deleted_for_vulgar"),(0,l.kt)("td",{parentName:"tr",align:null},"Vulgar content")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"type"),(0,l.kt)("td",{parentName:"tr",align:null},"deleted_for_poor"),(0,l.kt)("td",{parentName:"tr",align:null},"Poor content")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"type"),(0,l.kt)("td",{parentName:"tr",align:null},"deleted_for_offtopic"),(0,l.kt)("td",{parentName:"tr",align:null},"Offtopic content")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"type"),(0,l.kt)("td",{parentName:"tr",align:null},"undeleted_for"),(0,l.kt)("td",{parentName:"tr",align:null},"Undeleted content")))))}m.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=d(n),m=a,f=c["".concat(p,".").concat(m)]||c[m]||u[m]||l;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},61797:function(e,t,n){t.Z=n.p+"assets/images/deleted_for_aggressive-260011238f7f5a8f3583ddb0ddd138e4.png"}}]);