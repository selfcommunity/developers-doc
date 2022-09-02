"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[72769],{54837:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return m},default:function(){return c},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return u}});var a=n(83117),r=n(80102),l=(n(67294),n(3905)),i=["components"],o={sidebar_label:"Comment Summary",sidebar_position:1,title:"Comment Summary"},m=void 0,d={unversionedId:"apireference/v2/schemas/comment_summary",id:"apireference/v2/schemas/comment_summary",title:"Comment Summary",description:"Properties",source:"@site/docs/apireference/v2/schemas/comment_summary.md",sourceDirName:"apireference/v2/schemas",slug:"/apireference/v2/schemas/comment_summary",permalink:"/docs/apireference/v2/schemas/comment_summary",editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/apireference/v2/schemas/comment_summary.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Comment Summary",sidebar_position:1,title:"Comment Summary"},sidebar:"apireferenceSidebar",previous:{title:"Comment",permalink:"/docs/apireference/v2/schemas/comment"},next:{title:"Connection Request",permalink:"/docs/apireference/v2/schemas/connection_request"}},p={},u=[{value:"Properties",id:"properties",level:4}],s={toc:u};function c(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": 0,\n  "discussion": 0,\n  "author": {\n    "id": 0,\n    "username": "string",\n    "real_name": "string",\n    "date_joined": "2019-08-24T14:15:22Z",\n    "bio": "string",\n    "location": "string",\n    "location_lat_lng": "string",\n    "position_lat_lng": "string",\n    "date_of_birth": "string",\n    "description": "string",\n    "gender": "Male",\n    "website": "https://example.com",\n    "avatar": "string",\n    "cover": "string",\n    "ext_id": "string",\n    "tags": [\n      {\n        "id": 0,\n        "active": true,\n        "type": "user",\n        "name": "string",\n        "description": "string",\n        "color": "string",\n        "visible": true,\n        "deleted": true,\n        "created_at": "2019-08-24T14:15:22Z"\n      }\n    ],\n    "reputation": 111\n  },\n  "added_at": "2019-08-24T14:15:22Z",\n  "html": "string",\n  "summary": "string",\n  "deleted": true,\n  "collapsed": true,\n  "parent": 0,\n  "in_reply_to": 0,\n  "comments_count": 0,\n  "vote_count": 4,\n  "reactions_count": [\n    {\n      "reaction": {\n        "id": 1,\n        "label": "Mi piace",\n        "image": "reactions/like.svg",\n        "sentiment": 1,\n        "active": true\n      },\n      "count": 1\n    },\n    {\n      "reaction": {\n        "id": 2,\n        "label": "Indifferente",\n        "image": "reactions/indifferent.png",\n        "sentiment": 0,\n        "active": true\n      },\n      "count": 3\n    }\n  ],\n  "voted": true,\n  "reaction": {\n    "id": 2,\n    "label": "Indifferente",\n    "image": "reactions/indifferent.png",\n    "sentiment": 0,\n    "active": true\n  },\n  "flag_count": 0,\n  "comment_count": 0\n}\n\n')),(0,l.kt)("h4",{id:"properties"},"Properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Restrictions"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"id"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"read-only"),(0,l.kt)("td",{parentName:"tr",align:null},"none")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"discussion"),(0,l.kt)("td",{parentName:"tr",align:null},"integer\xa6null"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"Id of the ",(0,l.kt)("a",{parentName:"td",href:"/docs/apireference/v2/schemas/discussion"},"Discussion"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"post"),(0,l.kt)("td",{parentName:"tr",align:null},"integer\xa6null"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"Id of the ",(0,l.kt)("a",{parentName:"td",href:"/docs/apireference/v2/schemas/post"},"Post"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"status"),(0,l.kt)("td",{parentName:"tr",align:null},"integer\xa6null"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"Id of the ",(0,l.kt)("a",{parentName:"td",href:"/docs/apireference/v2/schemas/status"},"Status"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"author"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/apireference/v2/schemas/user"},"User")),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"read-only"),(0,l.kt)("td",{parentName:"tr",align:null},"none")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"added_at"),(0,l.kt)("td",{parentName:"tr",align:null},"string(date-time)"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"read-only"),(0,l.kt)("td",{parentName:"tr",align:null},"none")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"html"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"read-only"),(0,l.kt)("td",{parentName:"tr",align:null},"none")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"summary"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"read-only"),(0,l.kt)("td",{parentName:"tr",align:null},"none")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"deleted"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"read-only"),(0,l.kt)("td",{parentName:"tr",align:null},"Is this comment deleted")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"collapsed"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"read-only"),(0,l.kt)("td",{parentName:"tr",align:null},"Is this comment collapsed")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"parent"),(0,l.kt)("td",{parentName:"tr",align:null},"integer\xa6null"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"Id of the parent ",(0,l.kt)("a",{parentName:"td",href:"/docs/apireference/v2/schemas/comment"},"Comment"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"in_reply_to"),(0,l.kt)("td",{parentName:"tr",align:null},"integer\xa6null"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"Id of the reply ",(0,l.kt)("a",{parentName:"td",href:"/docs/apireference/v2/schemas/comment"},"Comment"),", it must have the same ",(0,l.kt)("inlineCode",{parentName:"td"},"parent")," and ",(0,l.kt)("inlineCode",{parentName:"td"},"object"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"vote_count"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"read-only"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of votes/reactions associated to this contribution")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"reactions_count"),(0,l.kt)("td",{parentName:"tr",align:null},"list(",(0,l.kt)("a",{parentName:"td",href:"/docs/apireference/v2/schemas/reaction"},"Reaction"),")"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"read-only"),(0,l.kt)("td",{parentName:"tr",align:null},"Reactions associated to this contribution")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"voted"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"read-only"),(0,l.kt)("td",{parentName:"tr",align:null},"true if the logged user has already voted this contribution")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"reaction"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/apireference/v2/schemas/reaction"},"Reaction")),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"read-only"),(0,l.kt)("td",{parentName:"tr",align:null},"Reaction of the logged user (if he voted this contribution)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"flag_count"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"read-only"),(0,l.kt)("td",{parentName:"tr",align:null},"none")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"comment_count"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"read-only"),(0,l.kt)("td",{parentName:"tr",align:null},"none")))))}c.isMDXComponent=!0},3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return c}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var m=a.createContext({}),d=function(t){var e=a.useContext(m),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=d(t.components);return a.createElement(m.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),s=d(n),c=r,g=s["".concat(m,".").concat(c)]||s[c]||u[c]||l;return n?a.createElement(g,i(i({ref:e},p),{},{components:n})):a.createElement(g,i({ref:e},p))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var m in e)hasOwnProperty.call(e,m)&&(o[m]=e[m]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);