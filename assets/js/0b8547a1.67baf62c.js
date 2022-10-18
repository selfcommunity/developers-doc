"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[98753],{52875:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return a},default:function(){return y},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return l}});var r=n(83117),c=n(80102),o=(n(67294),n(3905)),i=["components"],s={id:"types_context.SCPreferencesContextType",title:"Interface: SCPreferencesContextType",sidebar_label:"SCPreferencesContextType",custom_edit_url:null},a=void 0,p={unversionedId:"sdk/community-js/react-core/API_Reference/interfaces/types_context.SCPreferencesContextType",id:"sdk/community-js/react-core/API_Reference/interfaces/types_context.SCPreferencesContextType",title:"Interface: SCPreferencesContextType",description:"types/context.SCPreferencesContextType",source:"@site/docs/sdk/community-js/react-core/API_Reference/interfaces/types_context.SCPreferencesContextType.md",sourceDirName:"sdk/community-js/react-core/API_Reference/interfaces",slug:"/sdk/community-js/react-core/API_Reference/interfaces/types_context.SCPreferencesContextType",permalink:"/docs/sdk/community-js/react-core/API_Reference/interfaces/types_context.SCPreferencesContextType",editUrl:null,tags:[],version:"current",frontMatter:{id:"types_context.SCPreferencesContextType",title:"Interface: SCPreferencesContextType",sidebar_label:"SCPreferencesContextType",custom_edit_url:null},sidebar:"sdkSidebar",previous:{title:"SCNotificationsWebSocketType",permalink:"/docs/sdk/community-js/react-core/API_Reference/interfaces/types_context.SCNotificationsWebSocketType"},next:{title:"SCRoutingContextType",permalink:"/docs/sdk/community-js/react-core/API_Reference/interfaces/types_context.SCRoutingContextType"}},f={},l=[{value:"Properties",id:"properties",level:2},{value:"features",id:"features",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"preferences",id:"preferences",level:3},{value:"Defined in",id:"defined-in-1",level:4}],u={toc:l};function y(e){var t=e.components,n=(0,c.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/sdk/community-js/react-core/API_Reference/modules/types_context"},"types/context"),".SCPreferencesContextType"),(0,o.kt)("p",null,"Interface SCPreferencesType"),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"features"},"features"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"features"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,o.kt)("p",null,"List of all community enabled features"),(0,o.kt)("h4",{id:"defined-in"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/selfcommunity/community-js/blob/724cf8e/packages/react-core/src/types/context.ts#L355"},"types/context.ts:355")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"preferences"},"preferences"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"preferences"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"Record"),"<",(0,o.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,o.kt)("p",null,"List of all community preferences"),(0,o.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/selfcommunity/community-js/blob/724cf8e/packages/react-core/src/types/context.ts#L350"},"types/context.ts:350")))}y.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return f},kt:function(){return y}});var r=n(67294);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var a=r.createContext({}),p=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},f=function(e){var t=p(e.components);return r.createElement(a.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,c=e.mdxType,o=e.originalType,a=e.parentName,f=s(e,["components","mdxType","originalType","parentName"]),u=p(n),y=c,d=u["".concat(a,".").concat(y)]||u[y]||l[y]||o;return n?r.createElement(d,i(i({ref:t},f),{},{components:n})):r.createElement(d,i({ref:t},f))}));function y(e,t){var n=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var a in t)hasOwnProperty.call(t,a)&&(s[a]=t[a]);s.originalType=e,s.mdxType="string"==typeof e?e:c,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);