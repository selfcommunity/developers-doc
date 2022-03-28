"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[64347],{16192:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return m},contentTitle:function(){return p},metadata:function(){return l},assets:function(){return d},toc:function(){return s},default:function(){return u}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],m={id:"components_provider_SCThemeProvider",title:"Module: components/provider/SCThemeProvider",sidebar_label:"components/provider/SCThemeProvider",sidebar_position:0,custom_edit_url:null},p=void 0,l={unversionedId:"sdk/community-ui/sc-core/API_Reference/modules/components_provider_SCThemeProvider",id:"sdk/community-ui/sc-core/API_Reference/modules/components_provider_SCThemeProvider",title:"Module: components/provider/SCThemeProvider",description:"Variables",source:"@site/docs/sdk/community-ui/sc-core/API_Reference/modules/components_provider_SCThemeProvider.md",sourceDirName:"sdk/community-ui/sc-core/API_Reference/modules",slug:"/sdk/community-ui/sc-core/API_Reference/modules/components_provider_SCThemeProvider",permalink:"/docs/sdk/community-ui/sc-core/API_Reference/modules/components_provider_SCThemeProvider",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"components_provider_SCThemeProvider",title:"Module: components/provider/SCThemeProvider",sidebar_label:"components/provider/SCThemeProvider",sidebar_position:0,custom_edit_url:null},sidebar:"sdkSidebar",previous:{title:"components/provider/SCRoutingProvider",permalink:"/docs/sdk/community-ui/sc-core/API_Reference/modules/components_provider_SCRoutingProvider"},next:{title:"components/provider/SCUserProvider",permalink:"/docs/sdk/community-ui/sc-core/API_Reference/modules/components_provider_SCUserProvider"}},d={},s=[{value:"Variables",id:"variables",level:2},{value:"SCThemeContext",id:"scthemecontext",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"Functions",id:"functions",level:2},{value:"SCThemeProvider",id:"scthemeprovider",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"useSCTheme",id:"usesctheme",level:3},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"withSCTheme",id:"withsctheme",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Parameters",id:"parameters-2",level:5},{value:"Returns",id:"returns-3",level:5},{value:"Defined in",id:"defined-in-3",level:4}],c={toc:s};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"variables"},"Variables"),(0,o.kt)("h3",{id:"scthemecontext"},"SCThemeContext"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,o.kt)("strong",{parentName:"p"},"SCThemeContext"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"Context"),"<",(0,o.kt)("a",{parentName:"p",href:"/docs/sdk/community-ui/sc-core/API_Reference/interfaces/types_context.SCThemeContextType"},(0,o.kt)("inlineCode",{parentName:"a"},"SCThemeContextType")),">"),(0,o.kt)("p",null,"Creates Global Context"),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Context can be consumed in one of the following ways:")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"1. <SCThemeContext.Consumer>{(theme,) => (...)}</SCThemeContext.Consumer>\n")),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"2. const scThemeContext: SCThemeContextType = useContext(SCThemeContext);\n")),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"3. const scThemeContext: SCThemeContextType = useSCTheme();\n")))),(0,o.kt)("h4",{id:"defined-in"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/selfcommunity/community-ui/blob/83a6ac6/packages/sc-core/src/components/provider/SCThemeProvider/index.tsx#L28"},"components/provider/SCThemeProvider/index.tsx:28")),(0,o.kt)("h2",{id:"functions"},"Functions"),(0,o.kt)("h3",{id:"scthemeprovider"},"SCThemeProvider"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"SCThemeProvider"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"__namedParameters"),"): ",(0,o.kt)("inlineCode",{parentName:"p"},"JSX.Element")),(0,o.kt)("p",null,"This component makes the ",(0,o.kt)("inlineCode",{parentName:"p"},"theme")," available down the React tree.\nIt should preferably be used at ",(0,o.kt)("strong",{parentName:"p"},"the root of your component tree"),".\nSee: ",(0,o.kt)("a",{parentName:"p",href:"https://mui.com/system/styled/"},"https://mui.com/system/styled/")),(0,o.kt)("h4",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"__namedParameters")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"Object"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"__namedParameters.children")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"ReactNode"))))),(0,o.kt)("h4",{id:"returns"},"Returns"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"JSX.Element")),(0,o.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/selfcommunity/community-ui/blob/83a6ac6/packages/sc-core/src/components/provider/SCThemeProvider/index.tsx#L35"},"components/provider/SCThemeProvider/index.tsx:35")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"usesctheme"},"useSCTheme"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"useSCTheme"),"(): ",(0,o.kt)("a",{parentName:"p",href:"/docs/sdk/community-ui/sc-core/API_Reference/interfaces/types_context.SCThemeContextType"},(0,o.kt)("inlineCode",{parentName:"a"},"SCThemeContextType"))),(0,o.kt)("p",null,"Let's only export the ",(0,o.kt)("inlineCode",{parentName:"p"},"useSCTheme")," hook instead of the context.\nWe only want to use the hook directly and never the context component."),(0,o.kt)("h4",{id:"returns-1"},"Returns"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/sdk/community-ui/sc-core/API_Reference/interfaces/types_context.SCThemeContextType"},(0,o.kt)("inlineCode",{parentName:"a"},"SCThemeContextType"))),(0,o.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/selfcommunity/community-ui/blob/83a6ac6/packages/sc-core/src/components/provider/SCThemeProvider/index.tsx#L70"},"components/provider/SCThemeProvider/index.tsx:70")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"withsctheme"},"withSCTheme"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"withSCTheme"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"Component"),"): (",(0,o.kt)("inlineCode",{parentName:"p"},"props"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"any"),") => ",(0,o.kt)("inlineCode",{parentName:"p"},"Element")),(0,o.kt)("p",null,"Export hoc to inject the base theme to components"),(0,o.kt)("h4",{id:"parameters-1"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"Component")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"any"))))),(0,o.kt)("h4",{id:"returns-2"},"Returns"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"fn")),(0,o.kt)("p",null,"\u25b8 (",(0,o.kt)("inlineCode",{parentName:"p"},"props"),"): ",(0,o.kt)("inlineCode",{parentName:"p"},"Element")),(0,o.kt)("h5",{id:"parameters-2"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"props")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"any"))))),(0,o.kt)("h5",{id:"returns-3"},"Returns"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Element")),(0,o.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/selfcommunity/community-ui/blob/83a6ac6/packages/sc-core/src/components/provider/SCThemeProvider/index.tsx#L57"},"components/provider/SCThemeProvider/index.tsx:57")))}u.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,d=m(e,["components","mdxType","originalType","parentName"]),c=l(n),u=a,h=c["".concat(p,".").concat(u)]||c[u]||s[u]||o;return n?r.createElement(h,i(i({ref:t},d),{},{components:n})):r.createElement(h,i({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var m={};for(var p in t)hasOwnProperty.call(t,p)&&(m[p]=t[p]);m.originalType=e,m.mdxType="string"==typeof e?e:a,i[1]=m;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"}}]);