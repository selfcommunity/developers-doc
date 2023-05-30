"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[45515],{10895:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>c,metadata:()=>a,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const c={id:"types_context.SCVoteContextType",title:"Interface: SCVoteContextType",sidebar_label:"SCVoteContextType",custom_edit_url:null},i=void 0,a={unversionedId:"sdk/community-js/react-core/API_Reference/interfaces/types_context.SCVoteContextType",id:"sdk/community-js/react-core/API_Reference/interfaces/types_context.SCVoteContextType",title:"Interface: SCVoteContextType",description:"types/context.SCVoteContextType",source:"@site/docs/sdk/community-js/react-core/API_Reference/interfaces/types_context.SCVoteContextType.md",sourceDirName:"sdk/community-js/react-core/API_Reference/interfaces",slug:"/sdk/community-js/react-core/API_Reference/interfaces/types_context.SCVoteContextType",permalink:"/docs/sdk/community-js/react-core/API_Reference/interfaces/types_context.SCVoteContextType",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"types_context.SCVoteContextType",title:"Interface: SCVoteContextType",sidebar_label:"SCVoteContextType",custom_edit_url:null},sidebar:"sdkSidebar",previous:{title:"SCUserContextType",permalink:"/docs/sdk/community-js/react-core/API_Reference/interfaces/types_context.SCUserContextType"},next:{title:"SCVoteType",permalink:"/docs/sdk/community-js/react-core/API_Reference/interfaces/types_context.SCVoteType"}},s={},p=[{value:"Properties",id:"properties",level:2},{value:"reactions",id:"reactions",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"refreshReactions",id:"refreshreactions",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Returns",id:"returns",level:5},{value:"Defined in",id:"defined-in-1",level:4}],l={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/sdk/community-js/react-core/API_Reference/modules/types_context"},"types/context"),".SCVoteContextType"),(0,o.kt)("p",null,"Interface SCVoteContextType"),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"reactions"},"reactions"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"reactions"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"SCReactionType"),"[]"),(0,o.kt)("p",null,"List of all reactions"),(0,o.kt)("h4",{id:"defined-in"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/selfcommunity/community-js/blob/38e7e16/packages/react-core/src/types/context.ts#L479"},"packages/react-core/src/types/context.ts:479")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"refreshreactions"},"refreshReactions"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"refreshReactions"),": () => ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,o.kt)("inlineCode",{parentName:"p"},"SCReactionType"),"[]",">"),(0,o.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,o.kt)("p",null,"\u25b8 (): ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,o.kt)("inlineCode",{parentName:"p"},"SCReactionType"),"[]",">"),(0,o.kt)("p",null,"Refresh reactions"),(0,o.kt)("h5",{id:"returns"},"Returns"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,o.kt)("inlineCode",{parentName:"p"},"SCReactionType"),"[]",">"),(0,o.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/selfcommunity/community-js/blob/38e7e16/packages/react-core/src/types/context.ts#L484"},"packages/react-core/src/types/context.ts:484")))}d.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,s=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),u=p(n),y=o,f=u["".concat(s,".").concat(y)]||u[y]||d[y]||c;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,i=new Array(c);i[0]=y;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[u]="string"==typeof e?e:o,i[1]=a;for(var p=2;p<c;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"}}]);