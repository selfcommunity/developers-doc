"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[85617],{31843:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var o=n(87462),r=(n(67294),n(3905));const i={sidebar_label:"Overview",sidebar_position:1,title:"Overview"},a=void 0,s={unversionedId:"sdk/community-js/icons/overview",id:"sdk/community-js/icons/overview",title:"Overview",description:"In our library, we use icons through MUI icon component and font icons.",source:"@site/docs/sdk/community-js/icons/overview.md",sourceDirName:"sdk/community-js/icons",slug:"/sdk/community-js/icons/overview",permalink:"/docs/sdk/community-js/icons/overview",draft:!1,editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/sdk/community-js/icons/overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Overview",sidebar_position:1,title:"Overview"},sidebar:"sdkSidebar",previous:{title:"Usage",permalink:"/docs/sdk/community-js/getting_started/usage"},next:{title:"Icons List",permalink:"/docs/sdk/community-js/icons/list"}},l={},c=[{value:"Setup (Google Web Fonts)",id:"setup-google-web-fonts",level:3},{value:"Customization",id:"customization",level:4},{value:"Styling icons",id:"styling-icons",level:3}],p={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In our library, we use icons through MUI icon ",(0,r.kt)("a",{parentName:"p",href:"https://mui.com/api/icon/"},"component")," and ",(0,r.kt)("a",{parentName:"p",href:"https://mui.com/components/icons/#icon-font-icons"},"font")," icons."),(0,r.kt)("h3",{id:"setup-google-web-fonts"},"Setup (Google Web Fonts)"),(0,r.kt)("p",null,"All you need to do is to include this line in your html:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'<link\n  rel="stylesheet"\n  href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined"\n/>\n\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Icon")," will set the outlined variant class name for the Material Icons font."),(0,r.kt)("h4",{id:"customization"},"Customization"),(0,r.kt)("p",null,"Material Icons offers five different ",(0,r.kt)("inlineCode",{parentName:"p"},"font")," styles, so you can ",(0,r.kt)("strong",{parentName:"p"},"customize")," the default settings by adding your desired\nclass at the end of the href link.\nThen, insert ",(0,r.kt)("inlineCode",{parentName:"p"},"baseClassName")," prop in your ",(0,r.kt)("inlineCode",{parentName:"p"},"Icon")," component or in your theme."),(0,r.kt)("p",null,"For Example:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"1")," ",(0,r.kt)("strong",{parentName:"li"},"Import"),":")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'<link\n  rel="stylesheet"\n  href="https://fonts.googleapis.com/icon?family=Material+Icons+Rounded"\n/>\n\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"2")," ",(0,r.kt)("strong",{parentName:"p"},"Usage"),":")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Inclusion through props in the icon component"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import Icon from '@mui/material/Icon';\n\n<Icon baseClassName=\"material-icons-rounded\">add_circle</Icon>\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"or")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Inclusion through global style in the theme.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"const theme = createTheme({\n  components: {\n    MuiIcon: {\n      defaultProps: {\n        // Replace the `material-icons` default value.\n        baseClassName: 'material-icons-rounded',\n      },\n    },\n  },\n});\n\n")),(0,r.kt)("h3",{id:"styling-icons"},"Styling icons"),(0,r.kt)("p",null,"To style icons follow the ",(0,r.kt)("a",{parentName:"p",href:"https://material.io/design/iconography/product-icons.html#design-principles"},"material design guidelines"),"."))}m.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return n?o.createElement(f,a(a({ref:t},p),{},{components:n})):o.createElement(f,a({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);