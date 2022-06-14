"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[37725],{8593:function(e,r,n){n.r(r),n.d(r,{assets:function(){return p},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return a},metadata:function(){return d},toc:function(){return l}});var t=n(83117),o=n(80102),i=(n(67294),n(3905)),c=["components"],a={id:"components_provider_SCPreferencesProvider",title:"Module: components/provider/SCPreferencesProvider",sidebar_label:"components/provider/SCPreferencesProvider",sidebar_position:0,custom_edit_url:null},s=void 0,d={unversionedId:"sdk/community-js/react-core/API_Reference/modules/components_provider_SCPreferencesProvider",id:"sdk/community-js/react-core/API_Reference/modules/components_provider_SCPreferencesProvider",title:"Module: components/provider/SCPreferencesProvider",description:"Variables",source:"@site/docs/sdk/community-js/react-core/API_Reference/modules/components_provider_SCPreferencesProvider.md",sourceDirName:"sdk/community-js/react-core/API_Reference/modules",slug:"/sdk/community-js/react-core/API_Reference/modules/components_provider_SCPreferencesProvider",permalink:"/docs/sdk/community-js/react-core/API_Reference/modules/components_provider_SCPreferencesProvider",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"components_provider_SCPreferencesProvider",title:"Module: components/provider/SCPreferencesProvider",sidebar_label:"components/provider/SCPreferencesProvider",sidebar_position:0,custom_edit_url:null},sidebar:"sdkSidebar",previous:{title:"components/provider/SCNotificationProvider",permalink:"/docs/sdk/community-js/react-core/API_Reference/modules/components_provider_SCNotificationProvider"},next:{title:"components/provider/SCRoutingProvider",permalink:"/docs/sdk/community-js/react-core/API_Reference/modules/components_provider_SCRoutingProvider"}},p={},l=[{value:"Variables",id:"variables",level:2},{value:"SCPreferencesContext",id:"scpreferencescontext",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"Functions",id:"functions",level:2},{value:"SCPreferencesProvider",id:"scpreferencesprovider",level:3},{value:"Description:",id:"description",level:4},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"useSCPreferences",id:"usescpreferences",level:3},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-2",level:4}],m={toc:l};function u(e){var r=e.components,n=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,t.Z)({},m,n,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"variables"},"Variables"),(0,i.kt)("h3",{id:"scpreferencescontext"},"SCPreferencesContext"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"SCPreferencesContext"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Context"),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/sdk/community-js/react-core/API_Reference/interfaces/types_context.SCPreferencesContextType"},(0,i.kt)("inlineCode",{parentName:"a"},"SCPreferencesContextType")),">"),(0,i.kt)("p",null,"Creates Preferences/Features Context"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Context can be consumed in one of the following ways:")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"1. <SCPreferencesContext.Consumer>{(preferences) => (...)}</SCPreferencesContext.Consumer>\n")),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"2. const scPreferences: SCPreferencesType = usePreferencesContext(SCPreferencesContext);\n")),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"3. const scPreferences: SCPreferencesType = useSCPreferences();\n")))),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/selfcommunity/community-js/blob/14fcc72/packages/react-core/src/components/provider/SCPreferencesProvider/index.tsx#L24"},"components/provider/SCPreferencesProvider/index.tsx:24")),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("h3",{id:"scpreferencesprovider"},"SCPreferencesProvider"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"SCPreferencesProvider"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"children"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"JSX.Element")),(0,i.kt)("h4",{id:"description"},"Description:"),(0,i.kt)("p",null,"This component imports all preferences and features enabled."),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"children")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Object"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"children.children")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"ReactNode"))))),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"JSX.Element")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"<SCPreferencesContext.Provider value={{preferences, features}}>{!loading && children}</SCPreferencesContext.Provider>\n")),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/selfcommunity/community-js/blob/14fcc72/packages/react-core/src/components/provider/SCPreferencesProvider/index.tsx#L35"},"components/provider/SCPreferencesProvider/index.tsx:35")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"usescpreferences"},"useSCPreferences"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"useSCPreferences"),"(): ",(0,i.kt)("a",{parentName:"p",href:"/docs/sdk/community-js/react-core/API_Reference/interfaces/types_context.SCPreferencesContextType"},(0,i.kt)("inlineCode",{parentName:"a"},"SCPreferencesContextType"))),(0,i.kt)("p",null,"Let's only export the ",(0,i.kt)("inlineCode",{parentName:"p"},"useSCPreferences")," hook instead of the context.\nWe only want to use the hook directly and never the context component."),(0,i.kt)("h4",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/sdk/community-js/react-core/API_Reference/interfaces/types_context.SCPreferencesContextType"},(0,i.kt)("inlineCode",{parentName:"a"},"SCPreferencesContextType"))),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/selfcommunity/community-js/blob/14fcc72/packages/react-core/src/components/provider/SCPreferencesProvider/index.tsx#L69"},"components/provider/SCPreferencesProvider/index.tsx:69")))}u.isMDXComponent=!0},3905:function(e,r,n){n.d(r,{Zo:function(){return p},kt:function(){return u}});var t=n(67294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function a(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=t.createContext({}),d=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):c(c({},r),e)),n},p=function(e){var r=d(e.components);return t.createElement(s.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),m=d(n),u=o,f=m["".concat(s,".").concat(u)]||m[u]||l[u]||i;return n?t.createElement(f,c(c({ref:r},p),{},{components:n})):t.createElement(f,c({ref:r},p))}));function u(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=m;var a={};for(var s in r)hasOwnProperty.call(r,s)&&(a[s]=r[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var d=2;d<i;d++)c[d]=n[d];return t.createElement.apply(null,c)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);