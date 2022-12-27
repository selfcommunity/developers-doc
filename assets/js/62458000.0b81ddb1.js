"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[37052],{42271:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=n(83117),a=(n(67294),n(3905));const i={sidebar_label:"Notification Type Private Message",sidebar_position:1,title:"Notification Type Private Message"},l=void 0,o={unversionedId:"apireference/v2/schemas/NotificationTypes/type_private_message",id:"apireference/v2/schemas/NotificationTypes/type_private_message",title:"Notification Type Private Message",description:"Example preview:",source:"@site/docs/apireference/v2/schemas/NotificationTypes/type_private_message.md",sourceDirName:"apireference/v2/schemas/NotificationTypes",slug:"/apireference/v2/schemas/NotificationTypes/type_private_message",permalink:"/docs/apireference/v2/schemas/NotificationTypes/type_private_message",editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/apireference/v2/schemas/NotificationTypes/type_private_message.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Notification Type Private Message",sidebar_position:1,title:"Notification Type Private Message"},sidebar:"apireferenceSidebar",previous:{title:"Notification Type Mention",permalink:"/docs/apireference/v2/schemas/NotificationTypes/type_mention"},next:{title:"Notification Type Unblocked User",permalink:"/docs/apireference/v2/schemas/NotificationTypes/type_unblocked_user"}},p={},s=[{value:"Properties",id:"properties",level:4}],c={toc:s};function m(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "is_new": "boolean",\n    "sid": "string",\n    "type": "string",\n    "active_at": "string",\n    "message": {\n      "id": "integer",\n      "sender_id": "integer",\n      "message": "string",\n      "created_at": "string",\n      "status": "string",\n      "file": "object"\n    }\n}\n')),(0,a.kt)("p",null,"Example preview:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Notification",src:n(8121).Z,width:"490",height:"86"})),(0,a.kt)("h4",{id:"properties"},"Properties"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"),(0,a.kt)("th",{parentName:"tr",align:null},"Restrictions"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"is_new"),(0,a.kt)("td",{parentName:"tr",align:null},"boolean"),(0,a.kt)("td",{parentName:"tr",align:null},"true"),(0,a.kt)("td",{parentName:"tr",align:null},"read-only"),(0,a.kt)("td",{parentName:"tr",align:null},"If true, the notification has been read")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"sid"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"true"),(0,a.kt)("td",{parentName:"tr",align:null},"read-only"),(0,a.kt)("td",{parentName:"tr",align:null},"Serialization id of the notification")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"type"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"true"),(0,a.kt)("td",{parentName:"tr",align:null},"read-only"),(0,a.kt)("td",{parentName:"tr",align:null},'Type "private_message"')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"active_at"),(0,a.kt)("td",{parentName:"tr",align:null},"string(date-time)"),(0,a.kt)("td",{parentName:"tr",align:null},"true"),(0,a.kt)("td",{parentName:"tr",align:null},"read-only"),(0,a.kt)("td",{parentName:"tr",align:null},"Time when the notification was generated")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"message"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/apireference/v2/schemas/private_message"},"Message")),(0,a.kt)("td",{parentName:"tr",align:null},"true"),(0,a.kt)("td",{parentName:"tr",align:null},"read-only"),(0,a.kt)("td",{parentName:"tr",align:null},"Message received")))))}m.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(n),u=a,g=d["".concat(p,".").concat(u)]||d[u]||m[u]||i;return n?r.createElement(g,l(l({ref:t},c),{},{components:n})):r.createElement(g,l({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8121:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/private_message-8c0710979678bf33dcd8b5a6c665bb27.png"}}]);