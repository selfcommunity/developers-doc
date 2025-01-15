"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[56007],{16642:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>d,default:()=>x,frontMatter:()=>r,metadata:()=>l,toc:()=>o});var i=t(85893),n=t(11151);const r={},d="ModerationApiClient",l={id:"sdk/community-js/api-services/API_Reference/services/moderation/classes/ModerationApiClient",title:"ModerationApiClient",description:"Contains all the endpoints needed to manage moderation.",source:"@site/docs/sdk/community-js/api-services/API_Reference/services/moderation/classes/ModerationApiClient.md",sourceDirName:"sdk/community-js/api-services/API_Reference/services/moderation/classes",slug:"/sdk/community-js/api-services/API_Reference/services/moderation/classes/ModerationApiClient",permalink:"/docs/sdk/community-js/api-services/API_Reference/services/moderation/classes/ModerationApiClient",draft:!1,unlisted:!1,editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/sdk/community-js/api-services/API_Reference/services/moderation/classes/ModerationApiClient.md",tags:[],version:"current",frontMatter:{},sidebar:"sdkSidebar",previous:{title:"services/moderation",permalink:"/docs/sdk/community-js/api-services/API_Reference/services/moderation/"},next:{title:"ModerationService",permalink:"/docs/sdk/community-js/api-services/API_Reference/services/moderation/classes/ModerationService"}},c={},o=[{value:"Constructors",id:"constructors",level:2},{value:"new ModerationApiClient()",id:"new-moderationapiclient",level:3},{value:"Returns",id:"returns",level:4},{value:"Methods",id:"methods",level:2},{value:"getAllFlaggedContributions()",id:"getallflaggedcontributions",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Source",id:"source",level:4},{value:"getAllFlagsForSpecificContribution()",id:"getallflagsforspecificcontribution",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Source",id:"source-1",level:4},{value:"getContributionModerationStatus()",id:"getcontributionmoderationstatus",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Source",id:"source-2",level:4},{value:"getUsersForModeration()",id:"getusersformoderation",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Source",id:"source-3",level:4},{value:"moderateAContribution()",id:"moderateacontribution",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-5",level:4},{value:"Source",id:"source-4",level:4},{value:"moderateASpecificUser()",id:"moderateaspecificuser",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-6",level:4},{value:"Source",id:"source-5",level:4}];function a(e){const s={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"moderationapiclient",children:"ModerationApiClient"}),"\n",(0,i.jsx)(s.p,{children:"Contains all the endpoints needed to manage moderation."}),"\n",(0,i.jsx)(s.h2,{id:"constructors",children:"Constructors"}),"\n",(0,i.jsx)(s.h3,{id:"new-moderationapiclient",children:"new ModerationApiClient()"}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"new ModerationApiClient"}),"(): ",(0,i.jsx)(s.a,{href:"/docs/sdk/community-js/api-services/API_Reference/services/moderation/classes/ModerationApiClient",children:(0,i.jsx)(s.code,{children:"ModerationApiClient"})})]}),"\n"]}),"\n",(0,i.jsx)(s.h4,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"/docs/sdk/community-js/api-services/API_Reference/services/moderation/classes/ModerationApiClient",children:(0,i.jsx)(s.code,{children:"ModerationApiClient"})})}),"\n",(0,i.jsx)(s.h2,{id:"methods",children:"Methods"}),"\n",(0,i.jsx)(s.h3,{id:"getallflaggedcontributions",children:"getAllFlaggedContributions()"}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"static"})," ",(0,i.jsx)(s.strong,{children:"getAllFlaggedContributions"}),"(",(0,i.jsx)(s.code,{children:"params"}),"?, ",(0,i.jsx)(s.code,{children:"config"}),"?): ",(0,i.jsx)(s.code,{children:"Promise"})," <",(0,i.jsx)(s.a,{href:"/docs/sdk/community-js/api-services/API_Reference/types/paginatedResponse/interfaces/SCPaginatedResponse",children:(0,i.jsx)(s.code,{children:"SCPaginatedResponse"})}),"<",(0,i.jsx)(s.code,{children:"SCFlaggedContributionType"}),">>"]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"This endpoint retrieves all flagged contributions."}),"\n",(0,i.jsx)(s.h4,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{style:{textAlign:"left"},children:"Parameter"}),(0,i.jsx)(s.th,{style:{textAlign:"left"},children:"Type"}),(0,i.jsx)(s.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,i.jsx)(s.code,{children:"params"}),"?"]}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.a,{href:"/docs/sdk/community-js/api-services/API_Reference/types/moderation/interfaces/FlaggedContributionParams",children:(0,i.jsx)(s.code,{children:"FlaggedContributionParams"})})}),(0,i.jsx)(s.td,{style:{textAlign:"left"}})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,i.jsx)(s.code,{children:"config"}),"?"]}),(0,i.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,i.jsx)(s.code,{children:"AxiosRequestConfig"}),"<",(0,i.jsx)(s.code,{children:"any"}),">"]}),(0,i.jsx)(s.td,{style:{textAlign:"left"}})]})]})]}),"\n",(0,i.jsx)(s.h4,{id:"returns-1",children:"Returns"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"Promise"})," <",(0,i.jsx)(s.a,{href:"/docs/sdk/community-js/api-services/API_Reference/types/paginatedResponse/interfaces/SCPaginatedResponse",children:(0,i.jsx)(s.code,{children:"SCPaginatedResponse"})}),"<",(0,i.jsx)(s.code,{children:"SCFlaggedContributionType"}),">>"]}),"\n",(0,i.jsx)(s.h4,{id:"source",children:"Source"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://github.com/selfcommunity/community-js/blob/e662efcd235f7af73f248bd448d664d71e43b1eb/packages/api-services/src/services/moderation/index.ts#L73",children:"services/moderation/index.ts:73"})}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h3,{id:"getallflagsforspecificcontribution",children:"getAllFlagsForSpecificContribution()"}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"static"})," ",(0,i.jsx)(s.strong,{children:"getAllFlagsForSpecificContribution"}),"(",(0,i.jsx)(s.code,{children:"id"}),", ",(0,i.jsx)(s.code,{children:"contribution_type"}),", ",(0,i.jsx)(s.code,{children:"flag_type"}),"?, ",(0,i.jsx)(s.code,{children:"config"}),"?): ",(0,i.jsx)(s.code,{children:"Promise"})," <",(0,i.jsx)(s.a,{href:"/docs/sdk/community-js/api-services/API_Reference/types/paginatedResponse/interfaces/SCPaginatedResponse",children:(0,i.jsx)(s.code,{children:"SCPaginatedResponse"})}),"<",(0,i.jsx)(s.code,{children:"SCFlagType"}),">>"]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"This endpoint retrieves all flags for a specific contribution."}),"\n",(0,i.jsx)(s.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{style:{textAlign:"left"},children:"Parameter"}),(0,i.jsx)(s.th,{style:{textAlign:"left"},children:"Type"}),(0,i.jsx)(s.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"id"})}),(0,i.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,i.jsx)(s.code,{children:"string"})," | ",(0,i.jsx)(s.code,{children:"number"})]}),(0,i.jsx)(s.td,{style:{textAlign:"left"}})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"contribution_type"})}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"SCContributionType"})}),(0,i.jsx)(s.td,{style:{textAlign:"left"}})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,i.jsx)(s.code,{children:"flag_type"}),"?"]}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"SCFlagTypeEnum"})}),(0,i.jsx)(s.td,{style:{textAlign:"left"}})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,i.jsx)(s.code,{children:"config"}),"?"]}),(0,i.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,i.jsx)(s.code,{children:"AxiosRequestConfig"}),"<",(0,i.jsx)(s.code,{children:"any"}),">"]}),(0,i.jsx)(s.td,{style:{textAlign:"left"}})]})]})]}),"\n",(0,i.jsx)(s.h4,{id:"returns-2",children:"Returns"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"Promise"})," <",(0,i.jsx)(s.a,{href:"/docs/sdk/community-js/api-services/API_Reference/types/paginatedResponse/interfaces/SCPaginatedResponse",children:(0,i.jsx)(s.code,{children:"SCPaginatedResponse"})}),"<",(0,i.jsx)(s.code,{children:"SCFlagType"}),">>"]}),"\n",(0,i.jsx)(s.h4,{id:"source-1",children:"Source"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://github.com/selfcommunity/community-js/blob/e662efcd235f7af73f248bd448d664d71e43b1eb/packages/api-services/src/services/moderation/index.ts#L88",children:"services/moderation/index.ts:88"})}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h3,{id:"getcontributionmoderationstatus",children:"getContributionModerationStatus()"}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"static"})," ",(0,i.jsx)(s.strong,{children:"getContributionModerationStatus"}),"(",(0,i.jsx)(s.code,{children:"id"}),", ",(0,i.jsx)(s.code,{children:"contribution_type"}),", ",(0,i.jsx)(s.code,{children:"config"}),"?): ",(0,i.jsx)(s.code,{children:"Promise"}),"<",(0,i.jsx)(s.code,{children:"SCContributionStatus"}),">"]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"This endpoint retrieves moderation status for a specific contribution."}),"\n",(0,i.jsx)(s.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{style:{textAlign:"left"},children:"Parameter"}),(0,i.jsx)(s.th,{style:{textAlign:"left"},children:"Type"}),(0,i.jsx)(s.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"id"})}),(0,i.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,i.jsx)(s.code,{children:"string"})," | ",(0,i.jsx)(s.code,{children:"number"})]}),(0,i.jsx)(s.td,{style:{textAlign:"left"}})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"contribution_type"})}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"SCContributionType"})}),(0,i.jsx)(s.td,{style:{textAlign:"left"}})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,i.jsx)(s.code,{children:"config"}),"?"]}),(0,i.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,i.jsx)(s.code,{children:"AxiosRequestConfig"}),"<",(0,i.jsx)(s.code,{children:"any"}),">"]}),(0,i.jsx)(s.td,{style:{textAlign:"left"}})]})]})]}),"\n",(0,i.jsx)(s.h4,{id:"returns-3",children:"Returns"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"Promise"}),"<",(0,i.jsx)(s.code,{children:"SCContributionStatus"}),">"]}),"\n",(0,i.jsx)(s.h4,{id:"source-2",children:"Source"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://github.com/selfcommunity/community-js/blob/e662efcd235f7af73f248bd448d664d71e43b1eb/packages/api-services/src/services/moderation/index.ts#L120",children:"services/moderation/index.ts:120"})}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h3,{id:"getusersformoderation",children:"getUsersForModeration()"}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"static"})," ",(0,i.jsx)(s.strong,{children:"getUsersForModeration"}),"(",(0,i.jsx)(s.code,{children:"params"}),"?, ",(0,i.jsx)(s.code,{children:"config"}),"?): ",(0,i.jsx)(s.code,{children:"Promise"})," <",(0,i.jsx)(s.a,{href:"/docs/sdk/community-js/api-services/API_Reference/types/paginatedResponse/interfaces/SCPaginatedResponse",children:(0,i.jsx)(s.code,{children:"SCPaginatedResponse"})}),"<",(0,i.jsx)(s.code,{children:"SCUserModerationType"}),">>"]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"This endpoint retrieves all users for moderation purpose."}),"\n",(0,i.jsx)(s.h4,{id:"parameters-3",children:"Parameters"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{style:{textAlign:"left"},children:"Parameter"}),(0,i.jsx)(s.th,{style:{textAlign:"left"},children:"Type"}),(0,i.jsx)(s.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,i.jsx)(s.code,{children:"params"}),"?"]}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.a,{href:"/docs/sdk/community-js/api-services/API_Reference/types/moderation/interfaces/ModerationParams",children:(0,i.jsx)(s.code,{children:"ModerationParams"})})}),(0,i.jsx)(s.td,{style:{textAlign:"left"}})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,i.jsx)(s.code,{children:"config"}),"?"]}),(0,i.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,i.jsx)(s.code,{children:"AxiosRequestConfig"}),"<",(0,i.jsx)(s.code,{children:"any"}),">"]}),(0,i.jsx)(s.td,{style:{textAlign:"left"}})]})]})]}),"\n",(0,i.jsx)(s.h4,{id:"returns-4",children:"Returns"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"Promise"})," <",(0,i.jsx)(s.a,{href:"/docs/sdk/community-js/api-services/API_Reference/types/paginatedResponse/interfaces/SCPaginatedResponse",children:(0,i.jsx)(s.code,{children:"SCPaginatedResponse"})}),"<",(0,i.jsx)(s.code,{children:"SCUserModerationType"}),">>"]}),"\n",(0,i.jsx)(s.h4,{id:"source-3",children:"Source"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://github.com/selfcommunity/community-js/blob/e662efcd235f7af73f248bd448d664d71e43b1eb/packages/api-services/src/services/moderation/index.ts#L39",children:"services/moderation/index.ts:39"})}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h3,{id:"moderateacontribution",children:"moderateAContribution()"}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"static"})," ",(0,i.jsx)(s.strong,{children:"moderateAContribution"}),"(",(0,i.jsx)(s.code,{children:"id"}),", ",(0,i.jsx)(s.code,{children:"data"}),", ",(0,i.jsx)(s.code,{children:"config"}),"?): ",(0,i.jsx)(s.code,{children:"Promise"}),"<",(0,i.jsx)(s.code,{children:"any"}),">"]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"This endpoint provides actions for flagged contributions moderation."}),"\n",(0,i.jsx)(s.h4,{id:"parameters-4",children:"Parameters"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{style:{textAlign:"left"},children:"Parameter"}),(0,i.jsx)(s.th,{style:{textAlign:"left"},children:"Type"}),(0,i.jsx)(s.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"id"})}),(0,i.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,i.jsx)(s.code,{children:"string"})," | ",(0,i.jsx)(s.code,{children:"number"})]}),(0,i.jsx)(s.td,{style:{textAlign:"left"}})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"data"})}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.a,{href:"/docs/sdk/community-js/api-services/API_Reference/types/moderation/interfaces/ModerateContributionParams",children:(0,i.jsx)(s.code,{children:"ModerateContributionParams"})})}),(0,i.jsx)(s.td,{style:{textAlign:"left"}})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,i.jsx)(s.code,{children:"config"}),"?"]}),(0,i.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,i.jsx)(s.code,{children:"AxiosRequestConfig"}),"<",(0,i.jsx)(s.code,{children:"any"}),">"]}),(0,i.jsx)(s.td,{style:{textAlign:"left"}})]})]})]}),"\n",(0,i.jsx)(s.h4,{id:"returns-5",children:"Returns"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"Promise"}),"<",(0,i.jsx)(s.code,{children:"any"}),">"]}),"\n",(0,i.jsx)(s.h4,{id:"source-4",children:"Source"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://github.com/selfcommunity/community-js/blob/e662efcd235f7af73f248bd448d664d71e43b1eb/packages/api-services/src/services/moderation/index.ts#L110",children:"services/moderation/index.ts:110"})}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h3,{id:"moderateaspecificuser",children:"moderateASpecificUser()"}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"static"})," ",(0,i.jsx)(s.strong,{children:"moderateASpecificUser"}),"(",(0,i.jsx)(s.code,{children:"id"}),", ",(0,i.jsx)(s.code,{children:"status"}),", ",(0,i.jsx)(s.code,{children:"days_blocked"}),"?, ",(0,i.jsx)(s.code,{children:"hard"}),"?, ",(0,i.jsx)(s.code,{children:"config"}),"?): ",(0,i.jsx)(s.code,{children:"Promise"}),"<",(0,i.jsx)(s.code,{children:"any"}),">"]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"This endpoint performs users moderation."}),"\n",(0,i.jsx)(s.h4,{id:"parameters-5",children:"Parameters"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{style:{textAlign:"left"},children:"Parameter"}),(0,i.jsx)(s.th,{style:{textAlign:"left"},children:"Type"}),(0,i.jsx)(s.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"id"})}),(0,i.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,i.jsx)(s.code,{children:"string"})," | ",(0,i.jsx)(s.code,{children:"number"})]}),(0,i.jsx)(s.td,{style:{textAlign:"left"}})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"status"})}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"SCUserStatus"})}),(0,i.jsx)(s.td,{style:{textAlign:"left"}})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,i.jsx)(s.code,{children:"days_blocked"}),"?"]}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"string"})}),(0,i.jsx)(s.td,{style:{textAlign:"left"}})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,i.jsx)(s.code,{children:"hard"}),"?"]}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"number"})}),(0,i.jsx)(s.td,{style:{textAlign:"left"}})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,i.jsx)(s.code,{children:"config"}),"?"]}),(0,i.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,i.jsx)(s.code,{children:"AxiosRequestConfig"}),"<",(0,i.jsx)(s.code,{children:"any"}),">"]}),(0,i.jsx)(s.td,{style:{textAlign:"left"}})]})]})]}),"\n",(0,i.jsx)(s.h4,{id:"returns-6",children:"Returns"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"Promise"}),"<",(0,i.jsx)(s.code,{children:"any"}),">"]}),"\n",(0,i.jsx)(s.h4,{id:"source-5",children:"Source"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://github.com/selfcommunity/community-js/blob/e662efcd235f7af73f248bd448d664d71e43b1eb/packages/api-services/src/services/moderation/index.ts#L52",children:"services/moderation/index.ts:52"})})]})}function x(e={}){const{wrapper:s}={...(0,n.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},11151:(e,s,t)=>{t.d(s,{Z:()=>l,a:()=>d});var i=t(67294);const n={},r=i.createContext(n);function d(e){const s=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),i.createElement(r.Provider,{value:s},e.children)}}}]);