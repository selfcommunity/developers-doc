"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[8055],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return d}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),s=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},c=function(t){var e=s(t.components);return a.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,p=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),u=s(n),d=r,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||i;return n?a.createElement(f,l(l({ref:e},c),{},{components:n})):a.createElement(f,l({ref:e},c))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},472:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),l=["components"],o={sidebar_label:"Notification Type Mention",sidebar_position:1,title:"Notification Type Mention"},p=void 0,s={unversionedId:"apireference/v2/schemas/NotificationTypes/type_mention",id:"apireference/v2/schemas/NotificationTypes/type_mention",isDocsHomePage:!1,title:"Notification Type Mention",description:"`json",source:"@site/docs/apireference/v2/schemas/NotificationTypes/type_mention.md",sourceDirName:"apireference/v2/schemas/NotificationTypes",slug:"/apireference/v2/schemas/NotificationTypes/type_mention",permalink:"/docs/apireference/v2/schemas/NotificationTypes/type_mention",editUrl:"https://github.com/selfcommunity/developers_doc/edit/main/docs/apireference/v2/schemas/NotificationTypes/type_mention.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Notification Type Mention",sidebar_position:1,title:"Notification Type Mention"},sidebar:"apireferenceSidebar",previous:{title:"Notification Type Kindly Notice",permalink:"/docs/apireference/v2/schemas/NotificationTypes/type_kindly_notice"},next:{title:"Notification Type Private Message",permalink:"/docs/apireference/v2/schemas/NotificationTypes/type_private_message"}},c=[],m={toc:c};function u(t){var e=t.components,o=(0,r.Z)(t,l);return(0,i.kt)("wrapper",(0,a.Z)({},m,o,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "is_new": false,\n  "sid": 16052906326300000000007190,\n  "type": "mention",\n  "active_at": "2020-11-14T17:52:20.967302+01:00",\n  "discussion": {...},\n  "post": {...},\n  "comment": {...},\n  "status": {...}\n}\n')),(0,i.kt)("p",null,"Example preview:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Notification",src:n(5348).Z})),(0,i.kt)("h4",{id:"properties"},"Properties"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Restrictions"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"is_new"),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"true"),(0,i.kt)("td",{parentName:"tr",align:null},"read-only"),(0,i.kt)("td",{parentName:"tr",align:null},"True if the notification has been read, otherwise false")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"sid"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"true"),(0,i.kt)("td",{parentName:"tr",align:null},"read-only"),(0,i.kt)("td",{parentName:"tr",align:null},"Serialization id of the notification")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"type"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"true"),(0,i.kt)("td",{parentName:"tr",align:null},"read-only"),(0,i.kt)("td",{parentName:"tr",align:null},'Type "mention"')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"active_at"),(0,i.kt)("td",{parentName:"tr",align:null},"string(date-time)"),(0,i.kt)("td",{parentName:"tr",align:null},"true"),(0,i.kt)("td",{parentName:"tr",align:null},"read-only"),(0,i.kt)("td",{parentName:"tr",align:null},"Time when the notification was generated")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"discussion"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#schemadiscussion"},"Discussion")),(0,i.kt)("td",{parentName:"tr",align:null},"false"),(0,i.kt)("td",{parentName:"tr",align:null},"read-only"),(0,i.kt)("td",{parentName:"tr",align:null},"if user is mentioned in a discussion")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"post"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#schemadpost"},"Post")),(0,i.kt)("td",{parentName:"tr",align:null},"false"),(0,i.kt)("td",{parentName:"tr",align:null},"read-only"),(0,i.kt)("td",{parentName:"tr",align:null},"if the user is mentioned in a post")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"comment"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#schemacomment"},"Comment")),(0,i.kt)("td",{parentName:"tr",align:null},"false"),(0,i.kt)("td",{parentName:"tr",align:null},"read-only"),(0,i.kt)("td",{parentName:"tr",align:null},"if user is mentioned in a comment")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"status"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#schemastatus"},"Status")),(0,i.kt)("td",{parentName:"tr",align:null},"false"),(0,i.kt)("td",{parentName:"tr",align:null},"read-only"),(0,i.kt)("td",{parentName:"tr",align:null},"if user is mentioned in a status")))))}u.isMDXComponent=!0},5348:function(t,e,n){e.Z=n.p+"assets/images/mention-0c5eee6551ced23fa471039e025c0187.png"}}]);