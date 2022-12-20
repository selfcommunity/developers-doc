"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[51073],{54215:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=n(83117),a=(n(67294),n(3905));const l={sidebar_label:"Feed Activity",sidebar_position:1,title:"Feed Activity"},i=void 0,o={unversionedId:"apireference/v2/schemas/feed_activity",id:"apireference/v2/schemas/feed_activity",title:"Feed Activity",description:"Properties",source:"@site/docs/apireference/v2/schemas/feed_activity.md",sourceDirName:"apireference/v2/schemas",slug:"/apireference/v2/schemas/feed_activity",permalink:"/docs/apireference/v2/schemas/feed_activity",editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/apireference/v2/schemas/feed_activity.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Feed Activity",sidebar_position:1,title:"Feed Activity"},sidebar:"apireferenceSidebar",previous:{title:"Feed",permalink:"/docs/apireference/v2/schemas/feed"},next:{title:"Feed Unseen Count",permalink:"/docs/apireference/v2/schemas/feed_unseen_count"}},p={},s=[{value:"Properties",id:"properties",level:4},{value:"Enumerated Values",id:"enumerated-values",level:4}],d={toc:s};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "string",\n  "comment": {},\n  "author": {\n    "id": 0,\n    "username": "string",\n    "real_name": "string",\n    "date_joined": "2019-08-24T14:15:22Z",\n    "bio": "string",\n    "location": "string",\n    "location_lat_lng": "string",\n    "position_lat_lng": "string",\n    "date_of_birth": "string",\n    "description": "string",\n    "gender": "Male",\n    "website": "https://example.com",\n    "avatar": "string",\n    "cover": "string",\n    "ext_id": "string",\n    "tags": [\n      {\n        "id": 0,\n        "active": true,\n        "type": "user",\n        "name": "string",\n        "description": "string",\n        "color": "string",\n        "visible": true,\n        "deleted": true,\n        "created_at": "2019-08-24T14:15:22Z"\n      }\n    ],\n    "reputation":111\n  },\n  "active_at": "2019-08-24T14:15:22Z",\n  "seen_by_id": [\n    0\n  ]\n}\n\n')),(0,a.kt)("h4",{id:"properties"},"Properties"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"),(0,a.kt)("th",{parentName:"tr",align:null},"Restrictions"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"type"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"false"),(0,a.kt)("td",{parentName:"tr",align:null},"read-only"),(0,a.kt)("td",{parentName:"tr",align:null},"none")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"comment"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/apireference/v2/schemas/comment"},"Comment"),"\xa6null"),(0,a.kt)("td",{parentName:"tr",align:null},"false"),(0,a.kt)("td",{parentName:"tr",align:null},"read-only"),(0,a.kt)("td",{parentName:"tr",align:null},"none")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"author"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/apireference/v2/schemas/user"},"User")),(0,a.kt)("td",{parentName:"tr",align:null},"false"),(0,a.kt)("td",{parentName:"tr",align:null},"read-only"),(0,a.kt)("td",{parentName:"tr",align:null},"none")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"active_at"),(0,a.kt)("td",{parentName:"tr",align:null},"string(date-time)"),(0,a.kt)("td",{parentName:"tr",align:null},"false"),(0,a.kt)("td",{parentName:"tr",align:null},"read-only"),(0,a.kt)("td",{parentName:"tr",align:null},"none")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"seen_by_id"),(0,a.kt)("td",{parentName:"tr",align:null},"list(integer)\xa6null"),(0,a.kt)("td",{parentName:"tr",align:null},"false"),(0,a.kt)("td",{parentName:"tr",align:null},"read-only"),(0,a.kt)("td",{parentName:"tr",align:null},"Id of ",(0,a.kt)("a",{parentName:"td",href:"/docs/apireference/v2/schemas/user"},"User")," that have seen this activity")))),(0,a.kt)("h4",{id:"enumerated-values"},"Enumerated Values"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Value"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"type"),(0,a.kt)("td",{parentName:"tr",align:null},"comment"),(0,a.kt)("td",{parentName:"tr",align:null},"The activity involved is a comment")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"type"),(0,a.kt)("td",{parentName:"tr",align:null},"vote"),(0,a.kt)("td",{parentName:"tr",align:null},"The activity involved is a vote")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"type"),(0,a.kt)("td",{parentName:"tr",align:null},"pollvote"),(0,a.kt)("td",{parentName:"tr",align:null},"The activity involved is a poll vote")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"type"),(0,a.kt)("td",{parentName:"tr",align:null},"follow"),(0,a.kt)("td",{parentName:"tr",align:null},"The activity involved is a follow. This type can be returned if the ",(0,a.kt)("a",{parentName:"td",href:"/docs/apireference/v2/schemas/feed"},"Feed")," represent a ",(0,a.kt)("a",{parentName:"td",href:"/docs/apireference/v2/schemas/discussion"},"Discussion"))))))}c.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=s(n),u=a,g=m["".concat(p,".").concat(u)]||m[u]||c[u]||l;return n?r.createElement(g,i(i({ref:t},d),{},{components:n})):r.createElement(g,i({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);