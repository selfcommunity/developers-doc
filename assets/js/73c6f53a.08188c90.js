"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[32542],{69163:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=r(87462),o=(r(67294),r(3905));const i={id:"components_provider_SCUserProvider",title:"Module: components/provider/SCUserProvider",sidebar_label:"components/provider/SCUserProvider",sidebar_position:0,custom_edit_url:null},a=void 0,s={unversionedId:"sdk/community-js/react-core/API_Reference/modules/components_provider_SCUserProvider",id:"sdk/community-js/react-core/API_Reference/modules/components_provider_SCUserProvider",title:"Module: components/provider/SCUserProvider",description:"Variables",source:"@site/docs/sdk/community-js/react-core/API_Reference/modules/components_provider_SCUserProvider.md",sourceDirName:"sdk/community-js/react-core/API_Reference/modules",slug:"/sdk/community-js/react-core/API_Reference/modules/components_provider_SCUserProvider",permalink:"/docs/sdk/community-js/react-core/API_Reference/modules/components_provider_SCUserProvider",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"components_provider_SCUserProvider",title:"Module: components/provider/SCUserProvider",sidebar_label:"components/provider/SCUserProvider",sidebar_position:0,custom_edit_url:null},sidebar:"sdkSidebar",previous:{title:"components/provider/SCThemeProvider",permalink:"/docs/sdk/community-js/react-core/API_Reference/modules/components_provider_SCThemeProvider"},next:{title:"components/provider/SCVoteProvider",permalink:"/docs/sdk/community-js/react-core/API_Reference/modules/components_provider_SCVoteProvider"}},c={},d=[{value:"Variables",id:"variables",level:2},{value:"SCUserContext",id:"scusercontext",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"Functions",id:"functions",level:2},{value:"SCUserProvider",id:"scuserprovider",level:3},{value:"Description:",id:"description",level:4},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"useSCUser",id:"usescuser",level:3},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-2",level:4}],p={toc:d},l="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(l,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"variables"},"Variables"),(0,o.kt)("h3",{id:"scusercontext"},"SCUserContext"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,o.kt)("strong",{parentName:"p"},"SCUserContext"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"Context"),"<",(0,o.kt)("a",{parentName:"p",href:"/docs/sdk/community-js/react-core/API_Reference/interfaces/types_context.SCUserContextType"},(0,o.kt)("inlineCode",{parentName:"a"},"SCUserContextType")),">"),(0,o.kt)("p",null,"SCUserContext (Authentication Context)"),(0,o.kt)("admonition",{title:"Context can be consumed in one of the following ways:",type:"tip"},(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"1. <SCUserContext.Consumer>{(user, session, error, loading, logout) => (...)}</SCUserContext.Consumer>\n")),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"2. const scUserContext: SCUserContextType = useContext(SCUserContext);\n")),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"3. const scUserContext: SCUserContextType = useSCUser();\n"))),(0,o.kt)("h4",{id:"defined-in"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/selfcommunity/community-js/blob/38e7e16/packages/react-core/src/components/provider/SCUserProvider/index.tsx#L46"},"packages/react-core/src/components/provider/SCUserProvider/index.tsx:46")),(0,o.kt)("h2",{id:"functions"},"Functions"),(0,o.kt)("h3",{id:"scuserprovider"},"SCUserProvider"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"SCUserProvider"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"children"),"): ",(0,o.kt)("inlineCode",{parentName:"p"},"JSX.Element")),(0,o.kt)("h4",{id:"description"},"Description:"),(0,o.kt)("p",null,"This component keeps current user logged and session; it is exported as we need to wrap the entire app with it"),(0,o.kt)("h4",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"children")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"Object"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"children.children")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"ReactNode"))))),(0,o.kt)("h4",{id:"returns"},"Returns"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"JSX.Element")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"<SCUserContext.Provider value={contextValue}>{!state.loading && children}</SCUserContext.Provider>\n")),(0,o.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/selfcommunity/community-js/blob/38e7e16/packages/react-core/src/components/provider/SCUserProvider/index.tsx#L57"},"packages/react-core/src/components/provider/SCUserProvider/index.tsx:57")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"usescuser"},"useSCUser"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"useSCUser"),"(): ",(0,o.kt)("a",{parentName:"p",href:"/docs/sdk/community-js/react-core/API_Reference/interfaces/types_context.SCUserContextType"},(0,o.kt)("inlineCode",{parentName:"a"},"SCUserContextType"))),(0,o.kt)("p",null,"Let's only export the ",(0,o.kt)("inlineCode",{parentName:"p"},"useSCUser")," hook instead of the context.\nWe only want to use the hook directly and never the context component."),(0,o.kt)("h4",{id:"returns-1"},"Returns"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/sdk/community-js/react-core/API_Reference/interfaces/types_context.SCUserContextType"},(0,o.kt)("inlineCode",{parentName:"a"},"SCUserContextType"))),(0,o.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/selfcommunity/community-js/blob/38e7e16/packages/react-core/src/components/provider/SCUserProvider/index.tsx#L275"},"packages/react-core/src/components/provider/SCUserProvider/index.tsx:275")))}m.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>v});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),d=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},l="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=d(r),u=o,v=l["".concat(c,".").concat(u)]||l[u]||m[u]||i;return r?n.createElement(v,a(a({ref:t},p),{},{components:r})):n.createElement(v,a({ref:t},p))}));function v(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[l]="string"==typeof e?e:o,a[1]=s;for(var d=2;d<i;d++)a[d]=r[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);