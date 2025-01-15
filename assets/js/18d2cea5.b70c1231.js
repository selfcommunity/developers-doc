"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[86219],{14840:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>c,metadata:()=>d,toc:()=>o});var n=i(85893),t=i(11151);const c={},r="NotificationService",d={id:"sdk/community-js/api-services/API_Reference/services/notification/classes/NotificationService",title:"NotificationService",description:"Constructors",source:"@site/docs/sdk/community-js/api-services/API_Reference/services/notification/classes/NotificationService.md",sourceDirName:"sdk/community-js/api-services/API_Reference/services/notification/classes",slug:"/sdk/community-js/api-services/API_Reference/services/notification/classes/NotificationService",permalink:"/docs/sdk/community-js/api-services/API_Reference/services/notification/classes/NotificationService",draft:!1,unlisted:!1,editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/sdk/community-js/api-services/API_Reference/services/notification/classes/NotificationService.md",tags:[],version:"current",frontMatter:{},sidebar:"sdkSidebar",previous:{title:"NotificationApiClient",permalink:"/docs/sdk/community-js/api-services/API_Reference/services/notification/classes/NotificationApiClient"},next:{title:"NotificationApiClientInterface",permalink:"/docs/sdk/community-js/api-services/API_Reference/services/notification/interfaces/NotificationApiClientInterface"}},l={},o=[{value:"Constructors",id:"constructors",level:2},{value:"new NotificationService()",id:"new-notificationservice",level:3},{value:"Returns",id:"returns",level:4},{value:"Methods",id:"methods",level:2},{value:"createCustomNotification()",id:"createcustomnotification",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Source",id:"source",level:4},{value:"disposeBroadcastMessages()",id:"disposebroadcastmessages",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Source",id:"source-1",level:4},{value:"getUnseenNotification()",id:"getunseennotification",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Source",id:"source-2",level:4},{value:"listBroadcastMessages()",id:"listbroadcastmessages",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Source",id:"source-3",level:4},{value:"listBroadcastMessagesUndisposedCount()",id:"listbroadcastmessagesundisposedcount",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-5",level:4},{value:"Source",id:"source-4",level:4},{value:"listBroadcastMessagesUnseenCount()",id:"listbroadcastmessagesunseencount",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-6",level:4},{value:"Source",id:"source-5",level:4},{value:"listUserNotification()",id:"listusernotification",level:3},{value:"Parameters",id:"parameters-6",level:4},{value:"Returns",id:"returns-7",level:4},{value:"Source",id:"source-6",level:4},{value:"markReadBroadcastMessages()",id:"markreadbroadcastmessages",level:3},{value:"Parameters",id:"parameters-7",level:4},{value:"Returns",id:"returns-8",level:4},{value:"Source",id:"source-7",level:4},{value:"markReadNotification()",id:"markreadnotification",level:3},{value:"Parameters",id:"parameters-8",level:4},{value:"Returns",id:"returns-9",level:4},{value:"Source",id:"source-8",level:4}];function a(e){const s={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"notificationservice",children:"NotificationService"}),"\n",(0,n.jsxs)(s.admonition,{title:"Notification service can be used in the following way:",type:"tip",children:[(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-jsx",children:'1. Import the service from our library:\n\nimport {NotificationService} from "@selfcommunity/api-services";\n'})}),(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-jsx",children:"2. Create a function and put the service inside it!\nThe async function `listUserNotification` will return the paginated list of notifications.\n\nasync listUserNotification() {\n      return await NotificationService.listUserNotification();\n     }\n"})}),(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-jsx",children:"In case of required `params`, just add them inside the brackets.\n\nasync disposeBroadcastMessages(banner_ids) {\n       return await NotificationService.disposeBroadcastMessages(banner_ids);\n    }\n"})}),(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-jsx",children:"If you need to customize the request, you can add optional config params (`AxiosRequestConfig` type).\n\n1. Declare it(or declare them, it is possible to add multiple params)\n\nconst headers = headers: {Authorization: `Bearer ${yourToken}`}\n\n2. Add it inside the brackets and pass it to the function, as shown in the previous example!\n"})})]}),"\n",(0,n.jsx)(s.h2,{id:"constructors",children:"Constructors"}),"\n",(0,n.jsx)(s.h3,{id:"new-notificationservice",children:"new NotificationService()"}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"new NotificationService"}),"(): ",(0,n.jsx)(s.a,{href:"/docs/sdk/community-js/api-services/API_Reference/services/notification/classes/NotificationService",children:(0,n.jsx)(s.code,{children:"NotificationService"})})]}),"\n"]}),"\n",(0,n.jsx)(s.h4,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"/docs/sdk/community-js/api-services/API_Reference/services/notification/classes/NotificationService",children:(0,n.jsx)(s.code,{children:"NotificationService"})})}),"\n",(0,n.jsx)(s.h2,{id:"methods",children:"Methods"}),"\n",(0,n.jsx)(s.h3,{id:"createcustomnotification",children:"createCustomNotification()"}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"static"})," ",(0,n.jsx)(s.strong,{children:"createCustomNotification"}),"(",(0,n.jsx)(s.code,{children:"data"}),", ",(0,n.jsx)(s.code,{children:"config"}),"?): ",(0,n.jsx)(s.code,{children:"Promise"}),"<",(0,n.jsx)(s.code,{children:"any"}),">"]}),"\n"]}),"\n",(0,n.jsx)(s.h4,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Parameter"}),(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"data"})}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.a,{href:"/docs/sdk/community-js/api-services/API_Reference/types/notification/interfaces/CustomNotificationParams",children:(0,n.jsx)(s.code,{children:"CustomNotificationParams"})})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,n.jsx)(s.code,{children:"config"}),"?"]}),(0,n.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,n.jsx)(s.code,{children:"AxiosRequestConfig"}),"<",(0,n.jsx)(s.code,{children:"any"}),">"]})]})]})]}),"\n",(0,n.jsx)(s.h4,{id:"returns-1",children:"Returns"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"Promise"}),"<",(0,n.jsx)(s.code,{children:"any"}),">"]}),"\n",(0,n.jsx)(s.h4,{id:"source",children:"Source"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"https://github.com/selfcommunity/community-js/blob/e662efcd235f7af73f248bd448d664d71e43b1eb/packages/api-services/src/services/notification/index.ts#L164",children:"services/notification/index.ts:164"})}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"disposebroadcastmessages",children:"disposeBroadcastMessages()"}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"static"})," ",(0,n.jsx)(s.strong,{children:"disposeBroadcastMessages"}),"(",(0,n.jsx)(s.code,{children:"banner_ids"}),", ",(0,n.jsx)(s.code,{children:"config"}),"?): ",(0,n.jsx)(s.code,{children:"Promise"}),"<",(0,n.jsx)(s.code,{children:"any"}),">"]}),"\n"]}),"\n",(0,n.jsx)(s.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Parameter"}),(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"banner_ids"})}),(0,n.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,n.jsx)(s.code,{children:"number"}),"[]"]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,n.jsx)(s.code,{children:"config"}),"?"]}),(0,n.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,n.jsx)(s.code,{children:"AxiosRequestConfig"}),"<",(0,n.jsx)(s.code,{children:"any"}),">"]})]})]})]}),"\n",(0,n.jsx)(s.h4,{id:"returns-2",children:"Returns"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"Promise"}),"<",(0,n.jsx)(s.code,{children:"any"}),">"]}),"\n",(0,n.jsx)(s.h4,{id:"source-1",children:"Source"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"https://github.com/selfcommunity/community-js/blob/e662efcd235f7af73f248bd448d664d71e43b1eb/packages/api-services/src/services/notification/index.ts#L176",children:"services/notification/index.ts:176"})}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"getunseennotification",children:"getUnseenNotification()"}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"static"})," ",(0,n.jsx)(s.strong,{children:"getUnseenNotification"}),"(",(0,n.jsx)(s.code,{children:"config"}),"?): ",(0,n.jsx)(s.code,{children:"Promise"}),"<",(0,n.jsx)(s.code,{children:"SCNotificationUnseenCountType"}),">"]}),"\n"]}),"\n",(0,n.jsx)(s.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Parameter"}),(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,n.jsx)(s.code,{children:"config"}),"?"]}),(0,n.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,n.jsx)(s.code,{children:"AxiosRequestConfig"}),"<",(0,n.jsx)(s.code,{children:"any"}),">"]})]})})]}),"\n",(0,n.jsx)(s.h4,{id:"returns-3",children:"Returns"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"Promise"}),"<",(0,n.jsx)(s.code,{children:"SCNotificationUnseenCountType"}),">"]}),"\n",(0,n.jsx)(s.h4,{id:"source-2",children:"Source"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"https://github.com/selfcommunity/community-js/blob/e662efcd235f7af73f248bd448d664d71e43b1eb/packages/api-services/src/services/notification/index.ts#L161",children:"services/notification/index.ts:161"})}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"listbroadcastmessages",children:"listBroadcastMessages()"}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"static"})," ",(0,n.jsx)(s.strong,{children:"listBroadcastMessages"}),"(",(0,n.jsx)(s.code,{children:"config"}),"?): ",(0,n.jsx)(s.code,{children:"Promise"})," <",(0,n.jsx)(s.a,{href:"/docs/sdk/community-js/api-services/API_Reference/types/paginatedResponse/interfaces/SCPaginatedResponse",children:(0,n.jsx)(s.code,{children:"SCPaginatedResponse"})}),"<",(0,n.jsx)(s.code,{children:"SCBroadcastMessageType"}),">>"]}),"\n"]}),"\n",(0,n.jsx)(s.h4,{id:"parameters-3",children:"Parameters"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Parameter"}),(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,n.jsx)(s.code,{children:"config"}),"?"]}),(0,n.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,n.jsx)(s.code,{children:"AxiosRequestConfig"}),"<",(0,n.jsx)(s.code,{children:"any"}),">"]})]})})]}),"\n",(0,n.jsx)(s.h4,{id:"returns-4",children:"Returns"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"Promise"})," <",(0,n.jsx)(s.a,{href:"/docs/sdk/community-js/api-services/API_Reference/types/paginatedResponse/interfaces/SCPaginatedResponse",children:(0,n.jsx)(s.code,{children:"SCPaginatedResponse"})}),"<",(0,n.jsx)(s.code,{children:"SCBroadcastMessageType"}),">>"]}),"\n",(0,n.jsx)(s.h4,{id:"source-3",children:"Source"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"https://github.com/selfcommunity/community-js/blob/e662efcd235f7af73f248bd448d664d71e43b1eb/packages/api-services/src/services/notification/index.ts#L167",children:"services/notification/index.ts:167"})}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"listbroadcastmessagesundisposedcount",children:"listBroadcastMessagesUndisposedCount()"}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"static"})," ",(0,n.jsx)(s.strong,{children:"listBroadcastMessagesUndisposedCount"}),"(",(0,n.jsx)(s.code,{children:"config"}),"?): ",(0,n.jsx)(s.code,{children:"Promise"}),"<",(0,n.jsx)(s.code,{children:"SCNotificationUnseenCountType"}),">"]}),"\n"]}),"\n",(0,n.jsx)(s.h4,{id:"parameters-4",children:"Parameters"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Parameter"}),(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,n.jsx)(s.code,{children:"config"}),"?"]}),(0,n.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,n.jsx)(s.code,{children:"AxiosRequestConfig"}),"<",(0,n.jsx)(s.code,{children:"any"}),">"]})]})})]}),"\n",(0,n.jsx)(s.h4,{id:"returns-5",children:"Returns"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"Promise"}),"<",(0,n.jsx)(s.code,{children:"SCNotificationUnseenCountType"}),">"]}),"\n",(0,n.jsx)(s.h4,{id:"source-4",children:"Source"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"https://github.com/selfcommunity/community-js/blob/e662efcd235f7af73f248bd448d664d71e43b1eb/packages/api-services/src/services/notification/index.ts#L173",children:"services/notification/index.ts:173"})}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"listbroadcastmessagesunseencount",children:"listBroadcastMessagesUnseenCount()"}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"static"})," ",(0,n.jsx)(s.strong,{children:"listBroadcastMessagesUnseenCount"}),"(",(0,n.jsx)(s.code,{children:"config"}),"?): ",(0,n.jsx)(s.code,{children:"Promise"}),"<",(0,n.jsx)(s.code,{children:"SCNotificationUnseenCountType"}),">"]}),"\n"]}),"\n",(0,n.jsx)(s.h4,{id:"parameters-5",children:"Parameters"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Parameter"}),(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,n.jsx)(s.code,{children:"config"}),"?"]}),(0,n.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,n.jsx)(s.code,{children:"AxiosRequestConfig"}),"<",(0,n.jsx)(s.code,{children:"any"}),">"]})]})})]}),"\n",(0,n.jsx)(s.h4,{id:"returns-6",children:"Returns"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"Promise"}),"<",(0,n.jsx)(s.code,{children:"SCNotificationUnseenCountType"}),">"]}),"\n",(0,n.jsx)(s.h4,{id:"source-5",children:"Source"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"https://github.com/selfcommunity/community-js/blob/e662efcd235f7af73f248bd448d664d71e43b1eb/packages/api-services/src/services/notification/index.ts#L170",children:"services/notification/index.ts:170"})}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"listusernotification",children:"listUserNotification()"}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"static"})," ",(0,n.jsx)(s.strong,{children:"listUserNotification"}),"(",(0,n.jsx)(s.code,{children:"config"}),"?): ",(0,n.jsx)(s.code,{children:"Promise"})," <",(0,n.jsx)(s.a,{href:"/docs/sdk/community-js/api-services/API_Reference/types/paginatedResponse/interfaces/SCPaginatedResponse",children:(0,n.jsx)(s.code,{children:"SCPaginatedResponse"})}),"<",(0,n.jsx)(s.code,{children:"SCNotificationAggregatedType"}),">>"]}),"\n"]}),"\n",(0,n.jsx)(s.h4,{id:"parameters-6",children:"Parameters"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Parameter"}),(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,n.jsx)(s.code,{children:"config"}),"?"]}),(0,n.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,n.jsx)(s.code,{children:"AxiosRequestConfig"}),"<",(0,n.jsx)(s.code,{children:"any"}),">"]})]})})]}),"\n",(0,n.jsx)(s.h4,{id:"returns-7",children:"Returns"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"Promise"})," <",(0,n.jsx)(s.a,{href:"/docs/sdk/community-js/api-services/API_Reference/types/paginatedResponse/interfaces/SCPaginatedResponse",children:(0,n.jsx)(s.code,{children:"SCPaginatedResponse"})}),"<",(0,n.jsx)(s.code,{children:"SCNotificationAggregatedType"}),">>"]}),"\n",(0,n.jsx)(s.h4,{id:"source-6",children:"Source"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"https://github.com/selfcommunity/community-js/blob/e662efcd235f7af73f248bd448d664d71e43b1eb/packages/api-services/src/services/notification/index.ts#L155",children:"services/notification/index.ts:155"})}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"markreadbroadcastmessages",children:"markReadBroadcastMessages()"}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"static"})," ",(0,n.jsx)(s.strong,{children:"markReadBroadcastMessages"}),"(",(0,n.jsx)(s.code,{children:"banner_ids"}),", ",(0,n.jsx)(s.code,{children:"config"}),"?): ",(0,n.jsx)(s.code,{children:"Promise"}),"<",(0,n.jsx)(s.code,{children:"any"}),">"]}),"\n"]}),"\n",(0,n.jsx)(s.h4,{id:"parameters-7",children:"Parameters"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Parameter"}),(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"banner_ids"})}),(0,n.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,n.jsx)(s.code,{children:"number"}),"[]"]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,n.jsx)(s.code,{children:"config"}),"?"]}),(0,n.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,n.jsx)(s.code,{children:"AxiosRequestConfig"}),"<",(0,n.jsx)(s.code,{children:"any"}),">"]})]})]})]}),"\n",(0,n.jsx)(s.h4,{id:"returns-8",children:"Returns"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"Promise"}),"<",(0,n.jsx)(s.code,{children:"any"}),">"]}),"\n",(0,n.jsx)(s.h4,{id:"source-7",children:"Source"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"https://github.com/selfcommunity/community-js/blob/e662efcd235f7af73f248bd448d664d71e43b1eb/packages/api-services/src/services/notification/index.ts#L179",children:"services/notification/index.ts:179"})}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"markreadnotification",children:"markReadNotification()"}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"static"})," ",(0,n.jsx)(s.strong,{children:"markReadNotification"}),"(",(0,n.jsx)(s.code,{children:"sids"}),", ",(0,n.jsx)(s.code,{children:"config"}),"?): ",(0,n.jsx)(s.code,{children:"Promise"}),"<",(0,n.jsx)(s.code,{children:"any"}),">"]}),"\n"]}),"\n",(0,n.jsx)(s.h4,{id:"parameters-8",children:"Parameters"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Parameter"}),(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"sids"})}),(0,n.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,n.jsx)(s.code,{children:"string"}),"[]"]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,n.jsx)(s.code,{children:"config"}),"?"]}),(0,n.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,n.jsx)(s.code,{children:"AxiosRequestConfig"}),"<",(0,n.jsx)(s.code,{children:"any"}),">"]})]})]})]}),"\n",(0,n.jsx)(s.h4,{id:"returns-9",children:"Returns"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"Promise"}),"<",(0,n.jsx)(s.code,{children:"any"}),">"]}),"\n",(0,n.jsx)(s.h4,{id:"source-8",children:"Source"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"https://github.com/selfcommunity/community-js/blob/e662efcd235f7af73f248bd448d664d71e43b1eb/packages/api-services/src/services/notification/index.ts#L158",children:"services/notification/index.ts:158"})})]})}function h(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},11151:(e,s,i)=>{i.d(s,{Z:()=>d,a:()=>r});var n=i(67294);const t={},c=n.createContext(t);function r(e){const s=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),n.createElement(c.Provider,{value:s},e.children)}}}]);