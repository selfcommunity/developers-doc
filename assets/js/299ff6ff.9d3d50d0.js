"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[43221],{74401:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>l,contentTitle:()=>d,default:()=>x,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var n=i(85893),t=i(11151);const r={id:"services_tag.TagService",title:"Class: TagService",sidebar_label:"TagService",custom_edit_url:null},d=void 0,c={id:"sdk/community-js/api-services/API_Reference/classes/services_tag.TagService",title:"Class: TagService",description:"services/tag.TagService",source:"@site/docs/sdk/community-js/api-services/API_Reference/classes/services_tag.TagService.md",sourceDirName:"sdk/community-js/api-services/API_Reference/classes",slug:"/sdk/community-js/api-services/API_Reference/classes/services_tag.TagService",permalink:"/docs/sdk/community-js/api-services/API_Reference/classes/services_tag.TagService",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"services_tag.TagService",title:"Class: TagService",sidebar_label:"TagService",custom_edit_url:null},sidebar:"sdkSidebar",previous:{title:"TagApiClient",permalink:"/docs/sdk/community-js/api-services/API_Reference/classes/services_tag.TagApiClient"},next:{title:"UserApiClient",permalink:"/docs/sdk/community-js/api-services/API_Reference/classes/services_user.UserApiClient"}},l={},a=[{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Returns",id:"returns",level:4},{value:"Methods",id:"methods",level:2},{value:"assignATag",id:"assignatag",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"createTag",id:"createtag",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"getAllTags",id:"getalltags",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"getSpecificTag",id:"getspecifictag",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"patchTag",id:"patchtag",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-5",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"searchTag",id:"searchtag",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-6",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"updateTag",id:"updatetag",level:3},{value:"Parameters",id:"parameters-6",level:4},{value:"Returns",id:"returns-7",level:4},{value:"Defined in",id:"defined-in-6",level:4}];function h(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"/docs/sdk/community-js/api-services/API_Reference/modules/services_tag",children:"services/tag"}),".TagService"]}),"\n",(0,n.jsxs)(s.admonition,{title:"Tag service can be used in the following way:",type:"tip",children:[(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-jsx",children:'1. Import the service from our library:\n\nimport {TagService} from "@selfcommunity/api-services";\n'})}),(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-jsx",children:"2. Create a function and put the service inside it!\nThe async function `getAllTags` will return the paginated list of tags.\n\nasync getAllTags() {\n       return await TagService.getAllTags();\n     }\n"})}),(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-jsx",children:"In case of required `params`, just add them inside the brackets.\n\nasync getSpecificTag(tagId) {\n      return await TagService.getSpecificTag(tagId);\n     }\n"})}),(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-jsx",children:"If you need to customize the request, you can add optional config params (`AxiosRequestConfig` type).\n\n1. Declare it(or declare them, it is possible to add multiple params)\n\nconst headers = headers: {Authorization: `Bearer ${yourToken}`}\n\n2. Add it inside the brackets and pass it to the function, as shown in the previous example!\n"})})]}),"\n",(0,n.jsx)(s.h2,{id:"constructors",children:"Constructors"}),"\n",(0,n.jsx)(s.h3,{id:"constructor",children:"constructor"}),"\n",(0,n.jsxs)(s.p,{children:["\u2022 ",(0,n.jsx)(s.strong,{children:"new TagService"}),"(): ",(0,n.jsx)(s.a,{href:"/docs/sdk/community-js/api-services/API_Reference/classes/services_tag.TagService",children:(0,n.jsx)(s.code,{children:"TagService"})})]}),"\n",(0,n.jsx)(s.h4,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"/docs/sdk/community-js/api-services/API_Reference/classes/services_tag.TagService",children:(0,n.jsx)(s.code,{children:"TagService"})})}),"\n",(0,n.jsx)(s.h2,{id:"methods",children:"Methods"}),"\n",(0,n.jsx)(s.h3,{id:"assignatag",children:"assignATag"}),"\n",(0,n.jsxs)(s.p,{children:["\u25b8 ",(0,n.jsx)(s.strong,{children:"assignATag"}),"(",(0,n.jsx)(s.code,{children:"id"}),", ",(0,n.jsx)(s.code,{children:"user?"}),", ",(0,n.jsx)(s.code,{children:"category?"}),", ",(0,n.jsx)(s.code,{children:"config?"}),"): ",(0,n.jsx)(s.code,{children:"Promise"}),"<",(0,n.jsx)(s.code,{children:"SCTagType"}),">"]}),"\n",(0,n.jsx)(s.h4,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Name"}),(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"id"})}),(0,n.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,n.jsx)(s.code,{children:"string"})," | ",(0,n.jsx)(s.code,{children:"number"})]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"user?"})}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"number"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"category?"})}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"number"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"config?"})}),(0,n.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,n.jsx)(s.code,{children:"AxiosRequestConfig"}),"<",(0,n.jsx)(s.code,{children:"any"}),">"]})]})]})]}),"\n",(0,n.jsx)(s.h4,{id:"returns-1",children:"Returns"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"Promise"}),"<",(0,n.jsx)(s.code,{children:"SCTagType"}),">"]}),"\n",(0,n.jsx)(s.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"https://github.com/selfcommunity/community-js/blob/6572d63/packages/api-services/src/services/tag/index.ts#L152",children:"services/tag/index.ts:152"})}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"createtag",children:"createTag"}),"\n",(0,n.jsxs)(s.p,{children:["\u25b8 ",(0,n.jsx)(s.strong,{children:"createTag"}),"(",(0,n.jsx)(s.code,{children:"data"}),", ",(0,n.jsx)(s.code,{children:"config?"}),"): ",(0,n.jsx)(s.code,{children:"Promise"}),"<",(0,n.jsx)(s.code,{children:"SCTagType"}),">"]}),"\n",(0,n.jsx)(s.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Name"}),(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"data"})}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.a,{href:"/docs/sdk/community-js/api-services/API_Reference/interfaces/types_tag.TagParams",children:(0,n.jsx)(s.code,{children:"TagParams"})})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"config?"})}),(0,n.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,n.jsx)(s.code,{children:"AxiosRequestConfig"}),"<",(0,n.jsx)(s.code,{children:"any"}),">"]})]})]})]}),"\n",(0,n.jsx)(s.h4,{id:"returns-2",children:"Returns"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"Promise"}),"<",(0,n.jsx)(s.code,{children:"SCTagType"}),">"]}),"\n",(0,n.jsx)(s.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"https://github.com/selfcommunity/community-js/blob/6572d63/packages/api-services/src/services/tag/index.ts#L137",children:"services/tag/index.ts:137"})}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"getalltags",children:"getAllTags"}),"\n",(0,n.jsxs)(s.p,{children:["\u25b8 ",(0,n.jsx)(s.strong,{children:"getAllTags"}),"(",(0,n.jsx)(s.code,{children:"params?"}),", ",(0,n.jsx)(s.code,{children:"config?"}),"): ",(0,n.jsx)(s.code,{children:"Promise"}),"<",(0,n.jsx)(s.a,{href:"/docs/sdk/community-js/api-services/API_Reference/interfaces/types_paginatedResponse.SCPaginatedResponse",children:(0,n.jsx)(s.code,{children:"SCPaginatedResponse"})}),"<",(0,n.jsx)(s.code,{children:"SCTagType"}),">>"]}),"\n",(0,n.jsx)(s.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Name"}),(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"params?"})}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.a,{href:"/docs/sdk/community-js/api-services/API_Reference/interfaces/types_tag.TagGetParams",children:(0,n.jsx)(s.code,{children:"TagGetParams"})})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"config?"})}),(0,n.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,n.jsx)(s.code,{children:"AxiosRequestConfig"}),"<",(0,n.jsx)(s.code,{children:"any"}),">"]})]})]})]}),"\n",(0,n.jsx)(s.h4,{id:"returns-3",children:"Returns"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"Promise"}),"<",(0,n.jsx)(s.a,{href:"/docs/sdk/community-js/api-services/API_Reference/interfaces/types_paginatedResponse.SCPaginatedResponse",children:(0,n.jsx)(s.code,{children:"SCPaginatedResponse"})}),"<",(0,n.jsx)(s.code,{children:"SCTagType"}),">>"]}),"\n",(0,n.jsx)(s.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"https://github.com/selfcommunity/community-js/blob/6572d63/packages/api-services/src/services/tag/index.ts#L134",children:"services/tag/index.ts:134"})}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"getspecifictag",children:"getSpecificTag"}),"\n",(0,n.jsxs)(s.p,{children:["\u25b8 ",(0,n.jsx)(s.strong,{children:"getSpecificTag"}),"(",(0,n.jsx)(s.code,{children:"id"}),", ",(0,n.jsx)(s.code,{children:"config?"}),"): ",(0,n.jsx)(s.code,{children:"Promise"}),"<",(0,n.jsx)(s.code,{children:"SCTagType"}),">"]}),"\n",(0,n.jsx)(s.h4,{id:"parameters-3",children:"Parameters"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Name"}),(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"id"})}),(0,n.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,n.jsx)(s.code,{children:"string"})," | ",(0,n.jsx)(s.code,{children:"number"})]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"config?"})}),(0,n.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,n.jsx)(s.code,{children:"AxiosRequestConfig"}),"<",(0,n.jsx)(s.code,{children:"any"}),">"]})]})]})]}),"\n",(0,n.jsx)(s.h4,{id:"returns-4",children:"Returns"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"Promise"}),"<",(0,n.jsx)(s.code,{children:"SCTagType"}),">"]}),"\n",(0,n.jsx)(s.h4,{id:"defined-in-3",children:"Defined in"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"https://github.com/selfcommunity/community-js/blob/6572d63/packages/api-services/src/services/tag/index.ts#L143",children:"services/tag/index.ts:143"})}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"patchtag",children:"patchTag"}),"\n",(0,n.jsxs)(s.p,{children:["\u25b8 ",(0,n.jsx)(s.strong,{children:"patchTag"}),"(",(0,n.jsx)(s.code,{children:"id"}),", ",(0,n.jsx)(s.code,{children:"data?"}),", ",(0,n.jsx)(s.code,{children:"config?"}),"): ",(0,n.jsx)(s.code,{children:"Promise"}),"<",(0,n.jsx)(s.code,{children:"SCTagType"}),">"]}),"\n",(0,n.jsx)(s.h4,{id:"parameters-4",children:"Parameters"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Name"}),(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"id"})}),(0,n.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,n.jsx)(s.code,{children:"string"})," | ",(0,n.jsx)(s.code,{children:"number"})]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"data?"})}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.a,{href:"/docs/sdk/community-js/api-services/API_Reference/interfaces/types_tag.TagParams",children:(0,n.jsx)(s.code,{children:"TagParams"})})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"config?"})}),(0,n.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,n.jsx)(s.code,{children:"AxiosRequestConfig"}),"<",(0,n.jsx)(s.code,{children:"any"}),">"]})]})]})]}),"\n",(0,n.jsx)(s.h4,{id:"returns-5",children:"Returns"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"Promise"}),"<",(0,n.jsx)(s.code,{children:"SCTagType"}),">"]}),"\n",(0,n.jsx)(s.h4,{id:"defined-in-4",children:"Defined in"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"https://github.com/selfcommunity/community-js/blob/6572d63/packages/api-services/src/services/tag/index.ts#L149",children:"services/tag/index.ts:149"})}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"searchtag",children:"searchTag"}),"\n",(0,n.jsxs)(s.p,{children:["\u25b8 ",(0,n.jsx)(s.strong,{children:"searchTag"}),"(",(0,n.jsx)(s.code,{children:"params?"}),", ",(0,n.jsx)(s.code,{children:"config?"}),"): ",(0,n.jsx)(s.code,{children:"Promise"}),"<",(0,n.jsx)(s.a,{href:"/docs/sdk/community-js/api-services/API_Reference/interfaces/types_paginatedResponse.SCPaginatedResponse",children:(0,n.jsx)(s.code,{children:"SCPaginatedResponse"})}),"<",(0,n.jsx)(s.code,{children:"SCTagType"}),">>"]}),"\n",(0,n.jsx)(s.h4,{id:"parameters-5",children:"Parameters"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Name"}),(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"params?"})}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.a,{href:"/docs/sdk/community-js/api-services/API_Reference/interfaces/types_tag.TagGetParams",children:(0,n.jsx)(s.code,{children:"TagGetParams"})})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"config?"})}),(0,n.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,n.jsx)(s.code,{children:"AxiosRequestConfig"}),"<",(0,n.jsx)(s.code,{children:"any"}),">"]})]})]})]}),"\n",(0,n.jsx)(s.h4,{id:"returns-6",children:"Returns"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"Promise"}),"<",(0,n.jsx)(s.a,{href:"/docs/sdk/community-js/api-services/API_Reference/interfaces/types_paginatedResponse.SCPaginatedResponse",children:(0,n.jsx)(s.code,{children:"SCPaginatedResponse"})}),"<",(0,n.jsx)(s.code,{children:"SCTagType"}),">>"]}),"\n",(0,n.jsx)(s.h4,{id:"defined-in-5",children:"Defined in"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"https://github.com/selfcommunity/community-js/blob/6572d63/packages/api-services/src/services/tag/index.ts#L140",children:"services/tag/index.ts:140"})}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"updatetag",children:"updateTag"}),"\n",(0,n.jsxs)(s.p,{children:["\u25b8 ",(0,n.jsx)(s.strong,{children:"updateTag"}),"(",(0,n.jsx)(s.code,{children:"id"}),", ",(0,n.jsx)(s.code,{children:"data?"}),", ",(0,n.jsx)(s.code,{children:"config?"}),"): ",(0,n.jsx)(s.code,{children:"Promise"}),"<",(0,n.jsx)(s.code,{children:"SCTagType"}),">"]}),"\n",(0,n.jsx)(s.h4,{id:"parameters-6",children:"Parameters"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Name"}),(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"id"})}),(0,n.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,n.jsx)(s.code,{children:"string"})," | ",(0,n.jsx)(s.code,{children:"number"})]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"data?"})}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.a,{href:"/docs/sdk/community-js/api-services/API_Reference/interfaces/types_tag.TagParams",children:(0,n.jsx)(s.code,{children:"TagParams"})})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"config?"})}),(0,n.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,n.jsx)(s.code,{children:"AxiosRequestConfig"}),"<",(0,n.jsx)(s.code,{children:"any"}),">"]})]})]})]}),"\n",(0,n.jsx)(s.h4,{id:"returns-7",children:"Returns"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"Promise"}),"<",(0,n.jsx)(s.code,{children:"SCTagType"}),">"]}),"\n",(0,n.jsx)(s.h4,{id:"defined-in-6",children:"Defined in"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"https://github.com/selfcommunity/community-js/blob/6572d63/packages/api-services/src/services/tag/index.ts#L146",children:"services/tag/index.ts:146"})})]})}function x(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},11151:(e,s,i)=>{i.d(s,{Z:()=>c,a:()=>d});var n=i(67294);const t={},r=n.createContext(t);function d(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);