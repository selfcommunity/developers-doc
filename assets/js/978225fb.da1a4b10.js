"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[85909],{52596:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(83117),i=(n(67294),n(3905));const o={id:"types.ModerateContributionParams",title:"Interface: ModerateContributionParams",sidebar_label:"ModerateContributionParams",custom_edit_url:null},a=void 0,s={unversionedId:"sdk/community-js/api-services/API_Reference/interfaces/types.ModerateContributionParams",id:"sdk/community-js/api-services/API_Reference/interfaces/types.ModerateContributionParams",title:"Interface: ModerateContributionParams",description:"types.ModerateContributionParams",source:"@site/docs/sdk/community-js/api-services/API_Reference/interfaces/types.ModerateContributionParams.md",sourceDirName:"sdk/community-js/api-services/API_Reference/interfaces",slug:"/sdk/community-js/api-services/API_Reference/interfaces/types.ModerateContributionParams",permalink:"/docs/sdk/community-js/api-services/API_Reference/interfaces/types.ModerateContributionParams",editUrl:null,tags:[],version:"current",frontMatter:{id:"types.ModerateContributionParams",title:"Interface: ModerateContributionParams",sidebar_label:"ModerateContributionParams",custom_edit_url:null},sidebar:"sdkSidebar",previous:{title:"MessageThumbnailUploadParams",permalink:"/docs/sdk/community-js/api-services/API_Reference/interfaces/types.MessageThumbnailUploadParams"},next:{title:"ModerationParams",permalink:"/docs/sdk/community-js/api-services/API_Reference/interfaces/types.ModerationParams"}},l={},c=[{value:"Properties",id:"properties",level:2},{value:"action",id:"action",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"contribution_type",id:"contribution_type",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"moderation_type",id:"moderation_type",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"user",id:"user",level:3},{value:"Defined in",id:"defined-in-3",level:4}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/sdk/community-js/api-services/API_Reference/modules/types"},"types"),".ModerateContributionParams"),(0,i.kt)("p",null,"ModerateContributionParams interface"),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"action"},"action"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"action"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"Valid values are: scold_author, scold_flagger, ignore, hide, delete"),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/selfcommunity/community-js/blob/e30c5b9/packages/api-services/src/types/moderation.ts#L29"},"types/moderation.ts:29")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"contribution_type"},"contribution","_","type"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"contribution","_","type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"SCContributionType")),(0,i.kt)("p",null,"Valid values are: post, discussion, comment"),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/selfcommunity/community-js/blob/e30c5b9/packages/api-services/src/types/moderation.ts#L25"},"types/moderation.ts:25")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"moderation_type"},"moderation","_","type"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"moderation","_","type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"SCFlagTypeEnum")),(0,i.kt)("p",null,"An integer value to describe the moderation activity if action is one between scold_author, hide or delete. This param is not needed if the contribute is already hidden or deleted (you are restoring)."),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/selfcommunity/community-js/blob/e30c5b9/packages/api-services/src/types/moderation.ts#L37"},"types/moderation.ts:37")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"user"},"user"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"user"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,"The user id of the contribution flagger to scold (use only with action=scold_flagger)"),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/selfcommunity/community-js/blob/e30c5b9/packages/api-services/src/types/moderation.ts#L33"},"types/moderation.ts:33")))}d.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);