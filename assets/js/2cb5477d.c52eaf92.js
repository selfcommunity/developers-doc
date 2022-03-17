"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[95941],{421:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return d},metadata:function(){return s},assets:function(){return p},toc:function(){return l},default:function(){return u}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),o=["components"],c={id:"types_embed.SCEmbedType",title:"Interface: SCEmbedType",sidebar_label:"SCEmbedType",custom_edit_url:null},d=void 0,s={unversionedId:"sdk/community-ui/sc-core/API_Reference/interfaces/types_embed.SCEmbedType",id:"sdk/community-ui/sc-core/API_Reference/interfaces/types_embed.SCEmbedType",title:"Interface: SCEmbedType",description:"types/embed.SCEmbedType",source:"@site/docs/sdk/community-ui/sc-core/API_Reference/interfaces/types_embed.SCEmbedType.md",sourceDirName:"sdk/community-ui/sc-core/API_Reference/interfaces",slug:"/sdk/community-ui/sc-core/API_Reference/interfaces/types_embed.SCEmbedType",permalink:"/docs/sdk/community-ui/sc-core/API_Reference/interfaces/types_embed.SCEmbedType",editUrl:null,tags:[],version:"current",frontMatter:{id:"types_embed.SCEmbedType",title:"Interface: SCEmbedType",sidebar_label:"SCEmbedType",custom_edit_url:null},sidebar:"sdkSidebar",previous:{title:"SCCustomNotificationType",permalink:"/docs/sdk/community-ui/sc-core/API_Reference/interfaces/types_customNotification.SCCustomNotificationType"},next:{title:"SCFeedDiscussionType",permalink:"/docs/sdk/community-ui/sc-core/API_Reference/interfaces/types_feed.SCFeedDiscussionType"}},p={},l=[{value:"Properties",id:"properties",level:2},{value:"embed_id",id:"embed_id",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"embed_type",id:"embed_type",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"id",id:"id",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"metadata",id:"metadata",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"url",id:"url",level:3},{value:"Defined in",id:"defined-in-4",level:4}],m={toc:l};function u(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/sdk/community-ui/sc-core/API_Reference/modules/types_embed"},"types/embed"),".SCEmbedType"),(0,a.kt)("p",null,"Interface SCEmbedType.\nEmbed Schema."),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"embed_id"},"embed","_","id"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"embed","_","id"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("p",null,"External id for the embed object"),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/selfcommunity/community-ui/blob/e8a635a/packages/sc-core/src/types/embed.ts#L21"},"types/embed.ts:21")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"embed_type"},"embed","_","type"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"embed","_","type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"Type of the embed, can be any string except\nsc_vimeo, sc_link or sc_shared_object that are used\nfor embedded objects automatically created by the community"),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/selfcommunity/community-ui/blob/e8a635a/packages/sc-core/src/types/embed.ts#L16"},"types/embed.ts:16")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"id"},"id"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"id"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("p",null,"Id of the embed"),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/selfcommunity/community-ui/blob/e8a635a/packages/sc-core/src/types/embed.ts#L9"},"types/embed.ts:9")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"metadata"},"metadata"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"metadata"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Record"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,a.kt)("p",null,"Metadata associated to this embed. It mus be a valid json object.\nFor embed_type sc_vimeo or sc_link it contains metadata associated\nwith the external resource. For embed_type sc_shared_object it contains a field\ntype that is the type of the object (Discussion or Post) and a field id\nthat contains the id of the object shared"),(0,a.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/selfcommunity/community-ui/blob/e8a635a/packages/sc-core/src/types/embed.ts#L35"},"types/embed.ts:35")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"url"},"url"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"url"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"Url for the resource, if any"),(0,a.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/selfcommunity/community-ui/blob/e8a635a/packages/sc-core/src/types/embed.ts#L26"},"types/embed.ts:26")))}u.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=r.createContext({}),s=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,d=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(n),u=i,f=m["".concat(d,".").concat(u)]||m[u]||l[u]||a;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);