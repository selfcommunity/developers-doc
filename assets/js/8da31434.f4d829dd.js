"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[88871],{25398:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var o=n(87462),a=(n(67294),n(3905));const r={sidebar_label:"Introduction",sidebar_position:1,title:"Introduction"},i=void 0,s={unversionedId:"sdk/community-js/react-i18n/introduction",id:"sdk/community-js/react-i18n/introduction",title:"Introduction",description:"React-i18n Package allows the internationalization and localization of your application.",source:"@site/docs/sdk/community-js/react-i18n/introduction.md",sourceDirName:"sdk/community-js/react-i18n",slug:"/sdk/community-js/react-i18n/introduction",permalink:"/docs/sdk/community-js/react-i18n/introduction",draft:!1,editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/sdk/community-js/react-i18n/introduction.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Introduction",sidebar_position:1,title:"Introduction"},sidebar:"sdkSidebar",previous:{title:"User Profile",permalink:"/docs/sdk/community-js/react-templates/Components/UserProfile"},next:{title:"Introduction",permalink:"/docs/sdk/community-js/types/Reference/"}},l={},c=[{value:"How to generate translation files",id:"how-to-generate-translation-files",level:3},{value:"Usage in components",id:"usage-in-components",level:3}],p={toc:c},d="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"React-i18n Package allows the internationalization and localization of your application.")),(0,a.kt)("h3",{id:"how-to-generate-translation-files"},"How to generate translation files"),(0,a.kt)("p",null,"After package ",(0,a.kt)("a",{parentName:"p",href:"/docs/sdk/community-js/getting_started/installation/#install-react-i18n"},"installation")," a folder ",(0,a.kt)("inlineCode",{parentName:"p"},"locales")," with two json files (en, it) will be generated."),(0,a.kt)("p",null,"Inside those files there are components translation strings. The standard pattern in use to define them is :"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},'"package.tag.component name.element name.string description" : "Message to translate"')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"example"),":"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},'"ui.categoriesPopular.button.showMore": "Show More"')),(0,a.kt)("h3",{id:"usage-in-components"},"Usage in components"),(0,a.kt)("p",null,"There are two ways to declare and use translations:"),(0,a.kt)("admonition",{title:"Method 1 steps:",type:"tip"},(0,a.kt)("ol",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ol"},"import ",(0,a.kt)("a",{parentName:"li",href:"https://formatjs.io/docs/react-intl/api#definemessages"},(0,a.kt)("inlineCode",{parentName:"a"},"defineMessages"))," and ",(0,a.kt)("a",{parentName:"li",href:"https://formatjs.io/docs/react-intl/api/#useintl-hook"},(0,a.kt)("inlineCode",{parentName:"a"},"useIntl"))," hook from react-intl API."),(0,a.kt)("li",{parentName:"ol"},"Define a ",(0,a.kt)("inlineCode",{parentName:"li"},"messages")," constant  that will contain the objs with description strings you want to translate."),(0,a.kt)("li",{parentName:"ol"},"Inside your functional component, declare a ",(0,a.kt)("inlineCode",{parentName:"li"},"intl")," constant that uses ",(0,a.kt)("inlineCode",{parentName:"li"},"useIntl")," hook."),(0,a.kt)("li",{parentName:"ol"},"Refer the message string to be translated inside the textual component inside your render function."))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"//Import\nimport {defineMessages, useIntl} from 'react-intl';\n\n// Outside component\nconst messages = defineMessages({\n    categoryFollowers: {\n        id: 'ui.category.categoryFollowers',\n        defaultMessage: 'ui.category.categoryFollowers'\n    }\n});\n//Inside component state\nconst intl = useIntl();\n\n//Inside JSX Render\n`${intl.formatMessage(messages.categoryFollowers)}`\n")),(0,a.kt)("admonition",{title:"Method s steps:",type:"tip"},(0,a.kt)("ol",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ol"},"import ",(0,a.kt)("a",{parentName:"li",href:"https://formatjs.io/docs/react-intl/components#formattedmessage"},(0,a.kt)("inlineCode",{parentName:"a"},"FormattedMessages"))," from react-intl API"),(0,a.kt)("li",{parentName:"ol"},"Use ",(0,a.kt)("inlineCode",{parentName:"li"},"FormattedMessages")," component with ",(0,a.kt)("inlineCode",{parentName:"li"},"id")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"defaultMessage")," string as defined in your JSON files.\n:::"),(0,a.kt)("li",{parentName:"ol"})),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'//Import\nimport {FormattedMessage} from \'react-intl\';\n\n//Inside JSX Render\n<FormattedMessage id="ui.categoriesSuggestion.noResults" defaultMessage="ui.categoriesSuggestion.noResults" />\n'))))}m.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),u=a,f=d["".concat(l,".").concat(u)]||d[u]||m[u]||r;return n?o.createElement(f,i(i({ref:t},p),{},{components:n})):o.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);