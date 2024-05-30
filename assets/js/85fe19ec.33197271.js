"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[57009],{11284:(e,s,c)=>{c.r(s),c.d(s,{assets:()=>l,contentTitle:()=>t,default:()=>o,frontMatter:()=>i,metadata:()=>d,toc:()=>a});var r=c(85893),n=c(11151);const i={},t="TagService",d={id:"sdk/community-js/api-services/API_Reference/services/tag/classes/TagService",title:"TagService",description:"Constructors",source:"@site/docs/sdk/community-js/api-services/API_Reference/services/tag/classes/TagService.md",sourceDirName:"sdk/community-js/api-services/API_Reference/services/tag/classes",slug:"/sdk/community-js/api-services/API_Reference/services/tag/classes/TagService",permalink:"/docs/sdk/community-js/api-services/API_Reference/services/tag/classes/TagService",draft:!1,unlisted:!1,editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/sdk/community-js/api-services/API_Reference/services/tag/classes/TagService.md",tags:[],version:"current",frontMatter:{},sidebar:"sdkSidebar",previous:{title:"TagApiClient",permalink:"/docs/sdk/community-js/api-services/API_Reference/services/tag/classes/TagApiClient"},next:{title:"TagApiClientInterface",permalink:"/docs/sdk/community-js/api-services/API_Reference/services/tag/interfaces/TagApiClientInterface"}},l={},a=[{value:"Constructors",id:"constructors",level:2},{value:"new TagService()",id:"new-tagservice",level:3},{value:"Returns",id:"returns",level:4},{value:"Methods",id:"methods",level:2},{value:"assignATag()",id:"assignatag",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Source",id:"source",level:4},{value:"createTag()",id:"createtag",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Source",id:"source-1",level:4},{value:"getAllTags()",id:"getalltags",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Source",id:"source-2",level:4},{value:"getSpecificTag()",id:"getspecifictag",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Source",id:"source-3",level:4},{value:"patchTag()",id:"patchtag",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-5",level:4},{value:"Source",id:"source-4",level:4},{value:"searchTag()",id:"searchtag",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-6",level:4},{value:"Source",id:"source-5",level:4},{value:"updateTag()",id:"updatetag",level:3},{value:"Parameters",id:"parameters-6",level:4},{value:"Returns",id:"returns-7",level:4},{value:"Source",id:"source-6",level:4}];function h(e){const s={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"tagservice",children:"TagService"}),"\n",(0,r.jsxs)(s.admonition,{title:"Tag service can be used in the following way:",type:"tip",children:[(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-jsx",children:'1. Import the service from our library:\n\nimport {TagService} from "@selfcommunity/api-services";\n'})}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-jsx",children:"2. Create a function and put the service inside it!\nThe async function `getAllTags` will return the paginated list of tags.\n\nasync getAllTags() {\n       return await TagService.getAllTags();\n     }\n"})}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-jsx",children:"In case of required `params`, just add them inside the brackets.\n\nasync getSpecificTag(tagId) {\n      return await TagService.getSpecificTag(tagId);\n     }\n"})}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-jsx",children:"If you need to customize the request, you can add optional config params (`AxiosRequestConfig` type).\n\n1. Declare it(or declare them, it is possible to add multiple params)\n\nconst headers = headers: {Authorization: `Bearer ${yourToken}`}\n\n2. Add it inside the brackets and pass it to the function, as shown in the previous example!\n"})})]}),"\n",(0,r.jsx)(s.h2,{id:"constructors",children:"Constructors"}),"\n",(0,r.jsx)(s.h3,{id:"new-tagservice",children:"new TagService()"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"new TagService"}),"(): ",(0,r.jsx)(s.a,{href:"/docs/sdk/community-js/api-services/API_Reference/services/tag/classes/TagService",children:(0,r.jsx)(s.code,{children:"TagService"})})]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"/docs/sdk/community-js/api-services/API_Reference/services/tag/classes/TagService",children:(0,r.jsx)(s.code,{children:"TagService"})})}),"\n",(0,r.jsx)(s.h2,{id:"methods",children:"Methods"}),"\n",(0,r.jsx)(s.h3,{id:"assignatag",children:"assignATag()"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"static"})," ",(0,r.jsx)(s.strong,{children:"assignATag"}),"(",(0,r.jsx)(s.code,{children:"id"}),", ",(0,r.jsx)(s.code,{children:"user"}),"?, ",(0,r.jsx)(s.code,{children:"category"}),"?, ",(0,r.jsx)(s.code,{children:"config"}),"?): ",(0,r.jsx)(s.code,{children:"Promise"}),"<",(0,r.jsx)(s.code,{children:"SCTagType"}),">"]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Parameter"}),(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"id"})}),(0,r.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,r.jsx)(s.code,{children:"string"})," | ",(0,r.jsx)(s.code,{children:"number"})]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,r.jsx)(s.code,{children:"user"}),"?"]}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"number"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,r.jsx)(s.code,{children:"category"}),"?"]}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"number"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,r.jsx)(s.code,{children:"config"}),"?"]}),(0,r.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,r.jsx)(s.code,{children:"AxiosRequestConfig"}),"<",(0,r.jsx)(s.code,{children:"any"}),">"]})]})]})]}),"\n",(0,r.jsx)(s.h4,{id:"returns-1",children:"Returns"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"Promise"}),"<",(0,r.jsx)(s.code,{children:"SCTagType"}),">"]}),"\n",(0,r.jsx)(s.h4,{id:"source",children:"Source"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"https://github.com/selfcommunity/community-js/blob/bed4f8e1bc5223dca39ec9e5678370a4c307ed4c/packages/api-services/src/services/tag/index.ts#L152",children:"services/tag/index.ts:152"})}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"createtag",children:"createTag()"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"static"})," ",(0,r.jsx)(s.strong,{children:"createTag"}),"(",(0,r.jsx)(s.code,{children:"data"}),", ",(0,r.jsx)(s.code,{children:"config"}),"?): ",(0,r.jsx)(s.code,{children:"Promise"}),"<",(0,r.jsx)(s.code,{children:"SCTagType"}),">"]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Parameter"}),(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"data"})}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.a,{href:"/docs/sdk/community-js/api-services/API_Reference/types/tag/interfaces/TagParams",children:(0,r.jsx)(s.code,{children:"TagParams"})})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,r.jsx)(s.code,{children:"config"}),"?"]}),(0,r.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,r.jsx)(s.code,{children:"AxiosRequestConfig"}),"<",(0,r.jsx)(s.code,{children:"any"}),">"]})]})]})]}),"\n",(0,r.jsx)(s.h4,{id:"returns-2",children:"Returns"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"Promise"}),"<",(0,r.jsx)(s.code,{children:"SCTagType"}),">"]}),"\n",(0,r.jsx)(s.h4,{id:"source-1",children:"Source"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"https://github.com/selfcommunity/community-js/blob/bed4f8e1bc5223dca39ec9e5678370a4c307ed4c/packages/api-services/src/services/tag/index.ts#L137",children:"services/tag/index.ts:137"})}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"getalltags",children:"getAllTags()"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"static"})," ",(0,r.jsx)(s.strong,{children:"getAllTags"}),"(",(0,r.jsx)(s.code,{children:"params"}),"?, ",(0,r.jsx)(s.code,{children:"config"}),"?): ",(0,r.jsx)(s.code,{children:"Promise"})," <",(0,r.jsx)(s.a,{href:"/docs/sdk/community-js/api-services/API_Reference/types/paginatedResponse/interfaces/SCPaginatedResponse",children:(0,r.jsx)(s.code,{children:"SCPaginatedResponse"})}),"<",(0,r.jsx)(s.code,{children:"SCTagType"}),">>"]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Parameter"}),(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,r.jsx)(s.code,{children:"params"}),"?"]}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.a,{href:"/docs/sdk/community-js/api-services/API_Reference/types/tag/interfaces/TagGetParams",children:(0,r.jsx)(s.code,{children:"TagGetParams"})})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,r.jsx)(s.code,{children:"config"}),"?"]}),(0,r.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,r.jsx)(s.code,{children:"AxiosRequestConfig"}),"<",(0,r.jsx)(s.code,{children:"any"}),">"]})]})]})]}),"\n",(0,r.jsx)(s.h4,{id:"returns-3",children:"Returns"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"Promise"})," <",(0,r.jsx)(s.a,{href:"/docs/sdk/community-js/api-services/API_Reference/types/paginatedResponse/interfaces/SCPaginatedResponse",children:(0,r.jsx)(s.code,{children:"SCPaginatedResponse"})}),"<",(0,r.jsx)(s.code,{children:"SCTagType"}),">>"]}),"\n",(0,r.jsx)(s.h4,{id:"source-2",children:"Source"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"https://github.com/selfcommunity/community-js/blob/bed4f8e1bc5223dca39ec9e5678370a4c307ed4c/packages/api-services/src/services/tag/index.ts#L134",children:"services/tag/index.ts:134"})}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"getspecifictag",children:"getSpecificTag()"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"static"})," ",(0,r.jsx)(s.strong,{children:"getSpecificTag"}),"(",(0,r.jsx)(s.code,{children:"id"}),", ",(0,r.jsx)(s.code,{children:"config"}),"?): ",(0,r.jsx)(s.code,{children:"Promise"}),"<",(0,r.jsx)(s.code,{children:"SCTagType"}),">"]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"parameters-3",children:"Parameters"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Parameter"}),(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"id"})}),(0,r.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,r.jsx)(s.code,{children:"string"})," | ",(0,r.jsx)(s.code,{children:"number"})]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,r.jsx)(s.code,{children:"config"}),"?"]}),(0,r.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,r.jsx)(s.code,{children:"AxiosRequestConfig"}),"<",(0,r.jsx)(s.code,{children:"any"}),">"]})]})]})]}),"\n",(0,r.jsx)(s.h4,{id:"returns-4",children:"Returns"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"Promise"}),"<",(0,r.jsx)(s.code,{children:"SCTagType"}),">"]}),"\n",(0,r.jsx)(s.h4,{id:"source-3",children:"Source"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"https://github.com/selfcommunity/community-js/blob/bed4f8e1bc5223dca39ec9e5678370a4c307ed4c/packages/api-services/src/services/tag/index.ts#L143",children:"services/tag/index.ts:143"})}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"patchtag",children:"patchTag()"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"static"})," ",(0,r.jsx)(s.strong,{children:"patchTag"}),"(",(0,r.jsx)(s.code,{children:"id"}),", ",(0,r.jsx)(s.code,{children:"data"}),"?, ",(0,r.jsx)(s.code,{children:"config"}),"?): ",(0,r.jsx)(s.code,{children:"Promise"}),"<",(0,r.jsx)(s.code,{children:"SCTagType"}),">"]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"parameters-4",children:"Parameters"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Parameter"}),(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"id"})}),(0,r.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,r.jsx)(s.code,{children:"string"})," | ",(0,r.jsx)(s.code,{children:"number"})]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,r.jsx)(s.code,{children:"data"}),"?"]}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.a,{href:"/docs/sdk/community-js/api-services/API_Reference/types/tag/interfaces/TagParams",children:(0,r.jsx)(s.code,{children:"TagParams"})})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,r.jsx)(s.code,{children:"config"}),"?"]}),(0,r.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,r.jsx)(s.code,{children:"AxiosRequestConfig"}),"<",(0,r.jsx)(s.code,{children:"any"}),">"]})]})]})]}),"\n",(0,r.jsx)(s.h4,{id:"returns-5",children:"Returns"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"Promise"}),"<",(0,r.jsx)(s.code,{children:"SCTagType"}),">"]}),"\n",(0,r.jsx)(s.h4,{id:"source-4",children:"Source"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"https://github.com/selfcommunity/community-js/blob/bed4f8e1bc5223dca39ec9e5678370a4c307ed4c/packages/api-services/src/services/tag/index.ts#L149",children:"services/tag/index.ts:149"})}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"searchtag",children:"searchTag()"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"static"})," ",(0,r.jsx)(s.strong,{children:"searchTag"}),"(",(0,r.jsx)(s.code,{children:"params"}),"?, ",(0,r.jsx)(s.code,{children:"config"}),"?): ",(0,r.jsx)(s.code,{children:"Promise"})," <",(0,r.jsx)(s.a,{href:"/docs/sdk/community-js/api-services/API_Reference/types/paginatedResponse/interfaces/SCPaginatedResponse",children:(0,r.jsx)(s.code,{children:"SCPaginatedResponse"})}),"<",(0,r.jsx)(s.code,{children:"SCTagType"}),">>"]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"parameters-5",children:"Parameters"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Parameter"}),(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,r.jsx)(s.code,{children:"params"}),"?"]}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.a,{href:"/docs/sdk/community-js/api-services/API_Reference/types/tag/interfaces/TagGetParams",children:(0,r.jsx)(s.code,{children:"TagGetParams"})})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,r.jsx)(s.code,{children:"config"}),"?"]}),(0,r.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,r.jsx)(s.code,{children:"AxiosRequestConfig"}),"<",(0,r.jsx)(s.code,{children:"any"}),">"]})]})]})]}),"\n",(0,r.jsx)(s.h4,{id:"returns-6",children:"Returns"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"Promise"})," <",(0,r.jsx)(s.a,{href:"/docs/sdk/community-js/api-services/API_Reference/types/paginatedResponse/interfaces/SCPaginatedResponse",children:(0,r.jsx)(s.code,{children:"SCPaginatedResponse"})}),"<",(0,r.jsx)(s.code,{children:"SCTagType"}),">>"]}),"\n",(0,r.jsx)(s.h4,{id:"source-5",children:"Source"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"https://github.com/selfcommunity/community-js/blob/bed4f8e1bc5223dca39ec9e5678370a4c307ed4c/packages/api-services/src/services/tag/index.ts#L140",children:"services/tag/index.ts:140"})}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"updatetag",children:"updateTag()"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"static"})," ",(0,r.jsx)(s.strong,{children:"updateTag"}),"(",(0,r.jsx)(s.code,{children:"id"}),", ",(0,r.jsx)(s.code,{children:"data"}),"?, ",(0,r.jsx)(s.code,{children:"config"}),"?): ",(0,r.jsx)(s.code,{children:"Promise"}),"<",(0,r.jsx)(s.code,{children:"SCTagType"}),">"]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"parameters-6",children:"Parameters"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Parameter"}),(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"id"})}),(0,r.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,r.jsx)(s.code,{children:"string"})," | ",(0,r.jsx)(s.code,{children:"number"})]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,r.jsx)(s.code,{children:"data"}),"?"]}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.a,{href:"/docs/sdk/community-js/api-services/API_Reference/types/tag/interfaces/TagParams",children:(0,r.jsx)(s.code,{children:"TagParams"})})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,r.jsx)(s.code,{children:"config"}),"?"]}),(0,r.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,r.jsx)(s.code,{children:"AxiosRequestConfig"}),"<",(0,r.jsx)(s.code,{children:"any"}),">"]})]})]})]}),"\n",(0,r.jsx)(s.h4,{id:"returns-7",children:"Returns"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"Promise"}),"<",(0,r.jsx)(s.code,{children:"SCTagType"}),">"]}),"\n",(0,r.jsx)(s.h4,{id:"source-6",children:"Source"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"https://github.com/selfcommunity/community-js/blob/bed4f8e1bc5223dca39ec9e5678370a4c307ed4c/packages/api-services/src/services/tag/index.ts#L146",children:"services/tag/index.ts:146"})})]})}function o(e={}){const{wrapper:s}={...(0,n.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},11151:(e,s,c)=>{c.d(s,{Z:()=>d,a:()=>t});var r=c(67294);const n={},i=r.createContext(n);function t(e){const s=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:t(e.components),r.createElement(i.Provider,{value:s},e.children)}}}]);