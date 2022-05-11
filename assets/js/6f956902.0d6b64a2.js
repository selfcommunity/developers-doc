"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[5269],{71871:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(67294);function o(e){var t=e.children,n=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:o},t)}},52080:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return m}});var r=n(83117),o=n(80102),i=(n(67294),n(3905)),a=n(71871),c=["components"],u={sidebar_label:"Usage",sidebar_position:2,title:"Usage"},s=void 0,l={unversionedId:"sdk/community-ui/getting_started/usage",id:"sdk/community-ui/getting_started/usage",title:"Usage",description:"Here is a quick example to get you started, it's all you need:",source:"@site/docs/sdk/community-ui/getting_started/usage.md",sourceDirName:"sdk/community-ui/getting_started",slug:"/sdk/community-ui/getting_started/usage",permalink:"/docs/sdk/community-ui/getting_started/usage",editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/sdk/community-ui/getting_started/usage.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Usage",sidebar_position:2,title:"Usage"},sidebar:"sdkSidebar",previous:{title:"Installation",permalink:"/docs/sdk/community-ui/getting_started/installation"},next:{title:"Overview",permalink:"/docs/sdk/community-ui/icons/overview"}},p={},m=[],d={toc:m};function f(e){var t=e.components,n=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Here is a quick example to get you started, ",(0,i.kt)("strong",{parentName:"p"},"it's all you need"),":"),(0,i.kt)(a.Z,{value:"jsx",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport ReactDOM from 'react-dom';\nimport {SCContextProvider} from '@selfcommunity/core';\nimport {PeopleSuggestion} from '@selfcommunity/ui';\n\nfunction App() {\n  const conf = {\n    portal: '<community-path>',\n    session: {\n      type: 'OAuth',\n      token: '<community-token>',\n      refreshToken: '<community-refresh-token>',\n      refreshTokenEndpoint: '<community-refresh-endpoint>',\n    },\n  };\n  return (\n    <SCContextProvider conf={conf}><PeopleSuggestion /></SCContextProvider>\n  );\n}\n\nReactDOM.render(<App />, document.querySelector('#app'));\n"))))}f.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=s(n),d=o,f=m["".concat(u,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(f,a(a({ref:t},l),{},{components:n})):r.createElement(f,a({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);