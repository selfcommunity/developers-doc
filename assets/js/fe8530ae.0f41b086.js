"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[42361],{63426:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return d},assets:function(){return l},toc:function(){return p},default:function(){return m}});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),s=["components"],a={id:"components_provider_SCUserProvider",title:"Module: components/provider/SCUserProvider",sidebar_label:"components/provider/SCUserProvider",sidebar_position:0,custom_edit_url:null},c=void 0,d={unversionedId:"sdk/community-ui/sc-core/API_Reference/modules/components_provider_SCUserProvider",id:"sdk/community-ui/sc-core/API_Reference/modules/components_provider_SCUserProvider",title:"Module: components/provider/SCUserProvider",description:"Variables",source:"@site/docs/sdk/community-ui/sc-core/API_Reference/modules/components_provider_SCUserProvider.md",sourceDirName:"sdk/community-ui/sc-core/API_Reference/modules",slug:"/sdk/community-ui/sc-core/API_Reference/modules/components_provider_SCUserProvider",permalink:"/docs/sdk/community-ui/sc-core/API_Reference/modules/components_provider_SCUserProvider",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"components_provider_SCUserProvider",title:"Module: components/provider/SCUserProvider",sidebar_label:"components/provider/SCUserProvider",sidebar_position:0,custom_edit_url:null},sidebar:"sdkSidebar",previous:{title:"components/provider/SCThemeProvider",permalink:"/docs/sdk/community-ui/sc-core/API_Reference/modules/components_provider_SCThemeProvider"},next:{title:"hooks/useSCAuth",permalink:"/docs/sdk/community-ui/sc-core/API_Reference/modules/hooks_useSCAuth"}},l={},p=[{value:"Variables",id:"variables",level:2},{value:"SCUserContext",id:"scusercontext",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"Functions",id:"functions",level:2},{value:"SCUserProvider",id:"scuserprovider",level:3},{value:"Description:",id:"description",level:4},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"useSCUser",id:"usescuser",level:3},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-2",level:4}],u={toc:p};function m(e){var t=e.components,r=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"variables"},"Variables"),(0,i.kt)("h3",{id:"scusercontext"},"SCUserContext"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"SCUserContext"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Context"),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/sdk/community-ui/sc-core/API_Reference/interfaces/types_context.SCUserContextType"},(0,i.kt)("inlineCode",{parentName:"a"},"SCUserContextType")),">"),(0,i.kt)("p",null,"SCUserContext (Authentication Context)"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Context can be consumed in one of the following ways:")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"1. <SCUserContext.Consumer>{(user, session, error, loading, logout) => (...)}</SCUserContext.Consumer>\n")),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"2. const scUserContext: SCUserContextType = useContext(SCUserContext);\n")),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"3. const scUserContext: SCUserContextType = useSCUser();\n")))),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-core/src/components/provider/SCUserProvider/index.tsx#L42"},"components/provider/SCUserProvider/index.tsx:42")),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("h3",{id:"scuserprovider"},"SCUserProvider"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"SCUserProvider"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"children"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"JSX.Element")),(0,i.kt)("h4",{id:"description"},"Description:"),(0,i.kt)("p",null,"This component keeps current user logged and session; it is exported as we need to wrap the entire app with it"),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"children")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Object"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"children.children")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"ReactNode"))))),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"JSX.Element")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"<SCUserContext.Provider value={contextValue}>{!state.loading && children}</SCUserContext.Provider>\n")),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-core/src/components/provider/SCUserProvider/index.tsx#L53"},"components/provider/SCUserProvider/index.tsx:53")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"usescuser"},"useSCUser"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"useSCUser"),"(): ",(0,i.kt)("a",{parentName:"p",href:"/docs/sdk/community-ui/sc-core/API_Reference/interfaces/types_context.SCUserContextType"},(0,i.kt)("inlineCode",{parentName:"a"},"SCUserContextType"))),(0,i.kt)("p",null,"Let's only export the ",(0,i.kt)("inlineCode",{parentName:"p"},"useSCUser")," hook instead of the context.\nWe only want to use the hook directly and never the context component."),(0,i.kt)("h4",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/sdk/community-ui/sc-core/API_Reference/interfaces/types_context.SCUserContextType"},(0,i.kt)("inlineCode",{parentName:"a"},"SCUserContextType"))),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-core/src/components/provider/SCUserProvider/index.tsx#L259"},"components/provider/SCUserProvider/index.tsx:259")))}m.isMDXComponent=!0},3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),d=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),u=d(r),m=o,v=u["".concat(c,".").concat(m)]||u[m]||p[m]||i;return r?n.createElement(v,s(s({ref:t},l),{},{components:r})):n.createElement(v,s({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,s=new Array(i);s[0]=u;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var d=2;d<i;d++)s[d]=r[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);