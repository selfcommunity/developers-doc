"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[20396],{84912:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var i=n(87462),r=(n(67294),n(3905));const o={id:"hooks_useSCMobileNativePushMessaging",title:"Module: hooks/useSCMobileNativePushMessaging",sidebar_label:"hooks/useSCMobileNativePushMessaging",sidebar_position:0,custom_edit_url:null},a=void 0,s={unversionedId:"sdk/community-js/react-core/API_Reference/modules/hooks_useSCMobileNativePushMessaging",id:"sdk/community-js/react-core/API_Reference/modules/hooks_useSCMobileNativePushMessaging",title:"Module: hooks/useSCMobileNativePushMessaging",description:"Functions",source:"@site/docs/sdk/community-js/react-core/API_Reference/modules/hooks_useSCMobileNativePushMessaging.md",sourceDirName:"sdk/community-js/react-core/API_Reference/modules",slug:"/sdk/community-js/react-core/API_Reference/modules/hooks_useSCMobileNativePushMessaging",permalink:"/docs/sdk/community-js/react-core/API_Reference/modules/hooks_useSCMobileNativePushMessaging",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"hooks_useSCMobileNativePushMessaging",title:"Module: hooks/useSCMobileNativePushMessaging",sidebar_label:"hooks/useSCMobileNativePushMessaging",sidebar_position:0,custom_edit_url:null},sidebar:"sdkSidebar",previous:{title:"hooks/useSCMediaClick",permalink:"/docs/sdk/community-js/react-core/API_Reference/modules/hooks_useSCMediaClick"},next:{title:"hooks/useSCSettingsManager",permalink:"/docs/sdk/community-js/react-core/API_Reference/modules/hooks_useSCSettingsManager"}},l={},c=[{value:"Functions",id:"functions",level:2},{value:"useSCMobileNativePushMessaging",id:"usescmobilenativepushmessaging",level:3},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4}],u={toc:c},d="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"functions"},"Functions"),(0,r.kt)("h3",{id:"usescmobilenativepushmessaging"},"useSCMobileNativePushMessaging"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"useSCMobileNativePushMessaging"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"Object")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This custom hook is used to manage native push notification:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"register device (Android/iOS)"),(0,r.kt)("li",{parentName:"ul"},"unregister device (Android/iOS)\n!important: the device is registered only if exist in the global window\nobject (or as keys in the localstorage) the follow:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"        - _platform: <android|iOS>\n        - _notification_service: <gcm:fcm:apns>\n        - _registration_id: <registration_id>\n        - _device_id: <device_id>\n"))))),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Object")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"mnpmInstance")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"SCDeviceType"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"setMnpmInstance")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Dispatch"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"SetStateAction"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"SCDeviceType"),">",">")))),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/selfcommunity/community-js/blob/f677bf1/packages/react-core/src/hooks/useSCMobileNativePushMessaging.ts#L36"},"packages/react-core/src/hooks/useSCMobileNativePushMessaging.ts:36")))}p.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,g=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?i.createElement(g,a(a({ref:t},u),{},{components:n})):i.createElement(g,a({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);