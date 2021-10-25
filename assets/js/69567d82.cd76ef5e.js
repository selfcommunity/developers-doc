"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[8054],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=d(n),m=a,g=s["".concat(p,".").concat(m)]||s[m]||c[m]||l;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},8230:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return u},default:function(){return s}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),i=["components"],o={sidebar_label:"Targeted Notification Banner",sidebar_position:1,title:"Targeted Notification Banner"},p=void 0,d={unversionedId:"apireference/v2/schemas/TargetedBannerTypes/targeted_notification_banner",id:"apireference/v2/schemas/TargetedBannerTypes/targeted_notification_banner",isDocsHomePage:!1,title:"Targeted Notification Banner",description:"`json",source:"@site/docs/apireference/v2/schemas/TargetedBannerTypes/targeted_notification_banner.md",sourceDirName:"apireference/v2/schemas/TargetedBannerTypes",slug:"/apireference/v2/schemas/TargetedBannerTypes/targeted_notification_banner",permalink:"/docs/apireference/v2/schemas/TargetedBannerTypes/targeted_notification_banner",editUrl:"https://github.com/selfcommunity/developers_doc/edit/main/docs/apireference/v2/schemas/TargetedBannerTypes/targeted_notification_banner.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Targeted Notification Banner",sidebar_position:1,title:"Targeted Notification Banner"},sidebar:"apireferenceSidebar",previous:{title:"Targeted Html Banner",permalink:"/docs/apireference/v2/schemas/TargetedBannerTypes/targeted_html_banner"}},u=[],c={toc:u};function s(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "title": "string",\n    "description": "string",\n    "link_text": "Further details linked here &raquo;",\n    "link": "/users/alessia/",\n    "open_in_new_tab": true,\n    "image": null,\n    "added_at": "2020-11-13T09:51:55.415280+01:00",\n    "type_banner": "notification_banner"\n}\n\n')),(0,l.kt)("h4",{id:"properties"},"Properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Restrictions"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"title"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"read-only"),(0,l.kt)("td",{parentName:"tr",align:null},"Title of the banner")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"description"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"read-only"),(0,l.kt)("td",{parentName:"tr",align:null},"Description of the banner")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"link_text"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"read-only"),(0,l.kt)("td",{parentName:"tr",align:null},"Label of the link of the banner")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"link"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"read-only"),(0,l.kt)("td",{parentName:"tr",align:null},"Url link of the banner")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"open_in_new_tab"),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"read-only"),(0,l.kt)("td",{parentName:"tr",align:null},"Url link of the banner")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"image"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"read-only"),(0,l.kt)("td",{parentName:"tr",align:null},"Url of an image")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"added_at"),(0,l.kt)("td",{parentName:"tr",align:null},"string(date-time)"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"read-only"),(0,l.kt)("td",{parentName:"tr",align:null},"Creation date of the banner")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"type_banner"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"read-only"),(0,l.kt)("td",{parentName:"tr",align:null},'Banner of type "notification_banner"')))))}s.isMDXComponent=!0}}]);