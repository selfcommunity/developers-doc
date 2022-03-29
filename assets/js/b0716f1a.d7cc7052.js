"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[74087],{56832:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return a},metadata:function(){return p},assets:function(){return u},toc:function(){return f},default:function(){return y}});var i=n(87462),r=n(63366),o=(n(67294),n(3905)),c=["components"],s={id:"types_context.SCNotificationsType",title:"Interface: SCNotificationsType",sidebar_label:"SCNotificationsType",custom_edit_url:null},a=void 0,p={unversionedId:"sdk/community-ui/sc-core/API_Reference/interfaces/types_context.SCNotificationsType",id:"sdk/community-ui/sc-core/API_Reference/interfaces/types_context.SCNotificationsType",title:"Interface: SCNotificationsType",description:"types/context.SCNotificationsType",source:"@site/docs/sdk/community-ui/sc-core/API_Reference/interfaces/types_context.SCNotificationsType.md",sourceDirName:"sdk/community-ui/sc-core/API_Reference/interfaces",slug:"/sdk/community-ui/sc-core/API_Reference/interfaces/types_context.SCNotificationsType",permalink:"/docs/sdk/community-ui/sc-core/API_Reference/interfaces/types_context.SCNotificationsType",editUrl:null,tags:[],version:"current",frontMatter:{id:"types_context.SCNotificationsType",title:"Interface: SCNotificationsType",sidebar_label:"SCNotificationsType",custom_edit_url:null},sidebar:"sdkSidebar",previous:{title:"SCNotificationContextType",permalink:"/docs/sdk/community-ui/sc-core/API_Reference/interfaces/types_context.SCNotificationContextType"},next:{title:"SCNotificationsWebPushMessagingType",permalink:"/docs/sdk/community-ui/sc-core/API_Reference/interfaces/types_context.SCNotificationsWebPushMessagingType"}},u={},f=[{value:"Properties",id:"properties",level:2},{value:"webPushMessaging",id:"webpushmessaging",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"webSocket",id:"websocket",level:3},{value:"Defined in",id:"defined-in-1",level:4}],l={toc:f};function y(e){var t=e.components,n=(0,r.Z)(e,c);return(0,o.kt)("wrapper",(0,i.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/sdk/community-ui/sc-core/API_Reference/modules/types_context"},"types/context"),".SCNotificationsType"),(0,o.kt)("p",null,"Interface SCNotificationsType"),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"webpushmessaging"},"webPushMessaging"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"webPushMessaging"),": ",(0,o.kt)("a",{parentName:"p",href:"/docs/sdk/community-ui/sc-core/API_Reference/interfaces/types_context.SCNotificationsWebPushMessagingType"},(0,o.kt)("inlineCode",{parentName:"a"},"SCNotificationsWebPushMessagingType"))),(0,o.kt)("p",null,"Web push messaging notification"),(0,o.kt)("h4",{id:"defined-in"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-core/src/types/context.ts#L399"},"types/context.ts:399")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"websocket"},"webSocket"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"webSocket"),": ",(0,o.kt)("a",{parentName:"p",href:"/docs/sdk/community-ui/sc-core/API_Reference/interfaces/types_context.SCNotificationsWebSocketType"},(0,o.kt)("inlineCode",{parentName:"a"},"SCNotificationsWebSocketType"))),(0,o.kt)("p",null,"Web socket notification"),(0,o.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-core/src/types/context.ts#L395"},"types/context.ts:395")))}y.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return y}});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var a=i.createContext({}),p=function(e){var t=i.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return i.createElement(a.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},l=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=p(n),y=r,d=l["".concat(a,".").concat(y)]||l[y]||f[y]||o;return n?i.createElement(d,c(c({ref:t},u),{},{components:n})):i.createElement(d,c({ref:t},u))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=l;var s={};for(var a in t)hasOwnProperty.call(t,a)&&(s[a]=t[a]);s.originalType=e,s.mdxType="string"==typeof e?e:r,c[1]=s;for(var p=2;p<o;p++)c[p]=n[p];return i.createElement.apply(null,c)}return i.createElement.apply(null,n)}l.displayName="MDXCreateElement"}}]);