"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[26195],{17901:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return p}});var o=n(83117),i=n(80102),r=(n(67294),n(3905)),a=["components"],c={id:"components_provider_SCNotificationProvider",title:"Module: components/provider/SCNotificationProvider",sidebar_label:"components/provider/SCNotificationProvider",sidebar_position:0,custom_edit_url:null},s=void 0,d={unversionedId:"sdk/community-js/react-core/API_Reference/modules/components_provider_SCNotificationProvider",id:"sdk/community-js/react-core/API_Reference/modules/components_provider_SCNotificationProvider",title:"Module: components/provider/SCNotificationProvider",description:"Variables",source:"@site/docs/sdk/community-js/react-core/API_Reference/modules/components_provider_SCNotificationProvider.md",sourceDirName:"sdk/community-js/react-core/API_Reference/modules",slug:"/sdk/community-js/react-core/API_Reference/modules/components_provider_SCNotificationProvider",permalink:"/docs/sdk/community-js/react-core/API_Reference/modules/components_provider_SCNotificationProvider",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"components_provider_SCNotificationProvider",title:"Module: components/provider/SCNotificationProvider",sidebar_label:"components/provider/SCNotificationProvider",sidebar_position:0,custom_edit_url:null},sidebar:"sdkSidebar",previous:{title:"components/provider/SCLocaleProvider",permalink:"/docs/sdk/community-js/react-core/API_Reference/modules/components_provider_SCLocaleProvider"},next:{title:"components/provider/SCPreferencesProvider",permalink:"/docs/sdk/community-js/react-core/API_Reference/modules/components_provider_SCPreferencesProvider"}},l={},p=[{value:"Variables",id:"variables",level:2},{value:"SCNotificationContext",id:"scnotificationcontext",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"Functions",id:"functions",level:2},{value:"SCNotificationProvider",id:"scnotificationprovider",level:3},{value:"Description:",id:"description",level:4},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"useSCNotification",id:"usescnotification",level:3},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-2",level:4}],m={toc:p};function u(e){var t=e.components,n=(0,i.Z)(e,a);return(0,r.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"variables"},"Variables"),(0,r.kt)("h3",{id:"scnotificationcontext"},"SCNotificationContext"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,r.kt)("strong",{parentName:"p"},"SCNotificationContext"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Context"),"<",(0,r.kt)("a",{parentName:"p",href:"/docs/sdk/community-js/react-core/API_Reference/interfaces/types_context.SCNotificationContextType"},(0,r.kt)("inlineCode",{parentName:"a"},"SCNotificationContextType")),">"),(0,r.kt)("p",null,"Creates Global Context"),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Context can be consumed in one of the following ways:")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"1. <SCNotificationContext.Consumer>{(wsInstance, subscribe,) => (...)}</SCNotificationContext.Consumer>\n")),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"2. const scNotificationContext: SCNotificationContextType = useContext(SCNotificationContext);\n")),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"3. const scNotificationContext: SCNotificationContextType = useSCNotification();\n")))),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/selfcommunity/community-js/blob/724cf8e/packages/react-core/src/components/provider/SCNotificationProvider/index.tsx#L22"},"components/provider/SCNotificationProvider/index.tsx:22")),(0,r.kt)("h2",{id:"functions"},"Functions"),(0,r.kt)("h3",{id:"scnotificationprovider"},"SCNotificationProvider"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"SCNotificationProvider"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"children"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"JSX.Element")),(0,r.kt)("h4",{id:"description"},"Description:"),(0,r.kt)("p",null,"This component makes the notification context available down the React tree."),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"children")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Object"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"children.children")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"ReactNode"))))),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"JSX.Element")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"<SCNotificationContext.Provider value={{wsInstance}}>{children}</SCNotificationContext.Provider>\n")),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/selfcommunity/community-js/blob/724cf8e/packages/react-core/src/components/provider/SCNotificationProvider/index.tsx#L33"},"components/provider/SCNotificationProvider/index.tsx:33")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"usescnotification"},"useSCNotification"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"useSCNotification"),"(): ",(0,r.kt)("a",{parentName:"p",href:"/docs/sdk/community-js/react-core/API_Reference/interfaces/types_context.SCNotificationContextType"},(0,r.kt)("inlineCode",{parentName:"a"},"SCNotificationContextType"))),(0,r.kt)("p",null,"Let's only export the ",(0,r.kt)("inlineCode",{parentName:"p"},"useSCNotification")," hook instead of the context.\nWe only want to use the hook directly and never the context component."),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/sdk/community-js/react-core/API_Reference/interfaces/types_context.SCNotificationContextType"},(0,r.kt)("inlineCode",{parentName:"a"},"SCNotificationContextType"))),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/selfcommunity/community-js/blob/724cf8e/packages/react-core/src/components/provider/SCNotificationProvider/index.tsx#L44"},"components/provider/SCNotificationProvider/index.tsx:44")))}u.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return u}});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),d=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=d(n),u=i,f=m["".concat(s,".").concat(u)]||m[u]||p[u]||r;return n?o.createElement(f,a(a({ref:t},l),{},{components:n})):o.createElement(f,a({ref:t},l))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var d=2;d<r;d++)a[d]=n[d];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);