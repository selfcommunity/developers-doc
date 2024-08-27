"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[45849],{43653:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>c,metadata:()=>l,toc:()=>o});var t=i(85893),n=i(11151);const c={},r="NotificationApiClient",l={id:"sdk/community-js/api-services/API_Reference/services/notification/classes/NotificationApiClient",title:"NotificationApiClient",description:"Contains all the endpoints needed to manage notifications.",source:"@site/docs/sdk/community-js/api-services/API_Reference/services/notification/classes/NotificationApiClient.md",sourceDirName:"sdk/community-js/api-services/API_Reference/services/notification/classes",slug:"/sdk/community-js/api-services/API_Reference/services/notification/classes/NotificationApiClient",permalink:"/docs/sdk/community-js/api-services/API_Reference/services/notification/classes/NotificationApiClient",draft:!1,unlisted:!1,editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/sdk/community-js/api-services/API_Reference/services/notification/classes/NotificationApiClient.md",tags:[],version:"current",frontMatter:{},sidebar:"sdkSidebar",previous:{title:"services/notification",permalink:"/docs/sdk/community-js/api-services/API_Reference/services/notification/"},next:{title:"NotificationService",permalink:"/docs/sdk/community-js/api-services/API_Reference/services/notification/classes/NotificationService"}},d={},o=[{value:"Constructors",id:"constructors",level:2},{value:"new NotificationApiClient()",id:"new-notificationapiclient",level:3},{value:"Returns",id:"returns",level:4},{value:"Methods",id:"methods",level:2},{value:"createCustomNotification()",id:"createcustomnotification",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Source",id:"source",level:4},{value:"disposeBroadcastMessages()",id:"disposebroadcastmessages",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Source",id:"source-1",level:4},{value:"getUnseenNotification()",id:"getunseennotification",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Source",id:"source-2",level:4},{value:"listBroadcastMessages()",id:"listbroadcastmessages",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Source",id:"source-3",level:4},{value:"listBroadcastMessagesUndisposedCount()",id:"listbroadcastmessagesundisposedcount",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-5",level:4},{value:"Source",id:"source-4",level:4},{value:"listBroadcastMessagesUnseenCount()",id:"listbroadcastmessagesunseencount",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-6",level:4},{value:"Source",id:"source-5",level:4},{value:"listUserNotification()",id:"listusernotification",level:3},{value:"Parameters",id:"parameters-6",level:4},{value:"Returns",id:"returns-7",level:4},{value:"Source",id:"source-6",level:4},{value:"markReadBroadcastMessages()",id:"markreadbroadcastmessages",level:3},{value:"Parameters",id:"parameters-7",level:4},{value:"Returns",id:"returns-8",level:4},{value:"Source",id:"source-7",level:4},{value:"markReadNotification()",id:"markreadnotification",level:3},{value:"Parameters",id:"parameters-8",level:4},{value:"Returns",id:"returns-9",level:4},{value:"Source",id:"source-8",level:4}];function a(e){const s={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"notificationapiclient",children:"NotificationApiClient"}),"\n",(0,t.jsx)(s.p,{children:"Contains all the endpoints needed to manage notifications."}),"\n",(0,t.jsx)(s.h2,{id:"constructors",children:"Constructors"}),"\n",(0,t.jsx)(s.h3,{id:"new-notificationapiclient",children:"new NotificationApiClient()"}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"new NotificationApiClient"}),"(): ",(0,t.jsx)(s.a,{href:"/docs/sdk/community-js/api-services/API_Reference/services/notification/classes/NotificationApiClient",children:(0,t.jsx)(s.code,{children:"NotificationApiClient"})})]}),"\n"]}),"\n",(0,t.jsx)(s.h4,{id:"returns",children:"Returns"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"/docs/sdk/community-js/api-services/API_Reference/services/notification/classes/NotificationApiClient",children:(0,t.jsx)(s.code,{children:"NotificationApiClient"})})}),"\n",(0,t.jsx)(s.h2,{id:"methods",children:"Methods"}),"\n",(0,t.jsx)(s.h3,{id:"createcustomnotification",children:"createCustomNotification()"}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"static"})," ",(0,t.jsx)(s.strong,{children:"createCustomNotification"}),"(",(0,t.jsx)(s.code,{children:"data"}),", ",(0,t.jsx)(s.code,{children:"config"}),"?): ",(0,t.jsx)(s.code,{children:"Promise"}),"<",(0,t.jsx)(s.code,{children:"any"}),">"]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:'This endpoint generates a custom notification starting from the user. The recipients of the notification can be the user\'s friends/followers or the user himself (based on recipients_type value). Es. connections -> "user" added an item to the wishlist.'}),"\n",(0,t.jsx)(s.h4,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{style:{textAlign:"left"},children:"Parameter"}),(0,t.jsx)(s.th,{style:{textAlign:"left"},children:"Type"}),(0,t.jsx)(s.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"data"})}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.a,{href:"/docs/sdk/community-js/api-services/API_Reference/types/notification/interfaces/CustomNotificationParams",children:(0,t.jsx)(s.code,{children:"CustomNotificationParams"})})}),(0,t.jsx)(s.td,{style:{textAlign:"left"}})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,t.jsx)(s.code,{children:"config"}),"?"]}),(0,t.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,t.jsx)(s.code,{children:"AxiosRequestConfig"}),"<",(0,t.jsx)(s.code,{children:"any"}),">"]}),(0,t.jsx)(s.td,{style:{textAlign:"left"}})]})]})]}),"\n",(0,t.jsx)(s.h4,{id:"returns-1",children:"Returns"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"Promise"}),"<",(0,t.jsx)(s.code,{children:"any"}),">"]}),"\n",(0,t.jsx)(s.h4,{id:"source",children:"Source"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://github.com/selfcommunity/community-js/blob/e5a29b16d6f18947baa694fc7abb4dc2556ac852/packages/api-services/src/services/notification/index.ts#L58",children:"services/notification/index.ts:58"})}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h3,{id:"disposebroadcastmessages",children:"disposeBroadcastMessages()"}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"static"})," ",(0,t.jsx)(s.strong,{children:"disposeBroadcastMessages"}),"(",(0,t.jsx)(s.code,{children:"banner_ids"}),", ",(0,t.jsx)(s.code,{children:"config"}),"?): ",(0,t.jsx)(s.code,{children:"Promise"}),"<",(0,t.jsx)(s.code,{children:"any"}),">"]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"This endpoint disposes a broadcast message for a user."}),"\n",(0,t.jsx)(s.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{style:{textAlign:"left"},children:"Parameter"}),(0,t.jsx)(s.th,{style:{textAlign:"left"},children:"Type"}),(0,t.jsx)(s.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"banner_ids"})}),(0,t.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,t.jsx)(s.code,{children:"number"}),"[]"]}),(0,t.jsx)(s.td,{style:{textAlign:"left"}})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,t.jsx)(s.code,{children:"config"}),"?"]}),(0,t.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,t.jsx)(s.code,{children:"AxiosRequestConfig"}),"<",(0,t.jsx)(s.code,{children:"any"}),">"]}),(0,t.jsx)(s.td,{style:{textAlign:"left"}})]})]})]}),"\n",(0,t.jsx)(s.h4,{id:"returns-2",children:"Returns"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"Promise"}),"<",(0,t.jsx)(s.code,{children:"any"}),">"]}),"\n",(0,t.jsx)(s.h4,{id:"source-1",children:"Source"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://github.com/selfcommunity/community-js/blob/e5a29b16d6f18947baa694fc7abb4dc2556ac852/packages/api-services/src/services/notification/index.ts#L109",children:"services/notification/index.ts:109"})}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h3,{id:"getunseennotification",children:"getUnseenNotification()"}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"static"})," ",(0,t.jsx)(s.strong,{children:"getUnseenNotification"}),"(",(0,t.jsx)(s.code,{children:"config"}),"?): ",(0,t.jsx)(s.code,{children:"Promise"}),"<",(0,t.jsx)(s.code,{children:"SCNotificationUnseenCountType"}),">"]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"This endpoint retrieves the number of unseen/unread notifications."}),"\n",(0,t.jsx)(s.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{style:{textAlign:"left"},children:"Parameter"}),(0,t.jsx)(s.th,{style:{textAlign:"left"},children:"Type"}),(0,t.jsx)(s.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,t.jsx)(s.tbody,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,t.jsx)(s.code,{children:"config"}),"?"]}),(0,t.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,t.jsx)(s.code,{children:"AxiosRequestConfig"}),"<",(0,t.jsx)(s.code,{children:"any"}),">"]}),(0,t.jsx)(s.td,{style:{textAlign:"left"}})]})})]}),"\n",(0,t.jsx)(s.h4,{id:"returns-3",children:"Returns"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"Promise"}),"<",(0,t.jsx)(s.code,{children:"SCNotificationUnseenCountType"}),">"]}),"\n",(0,t.jsx)(s.h4,{id:"source-2",children:"Source"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://github.com/selfcommunity/community-js/blob/e5a29b16d6f18947baa694fc7abb4dc2556ac852/packages/api-services/src/services/notification/index.ts#L49",children:"services/notification/index.ts:49"})}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h3,{id:"listbroadcastmessages",children:"listBroadcastMessages()"}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"static"})," ",(0,t.jsx)(s.strong,{children:"listBroadcastMessages"}),"(",(0,t.jsx)(s.code,{children:"config"}),"?): ",(0,t.jsx)(s.code,{children:"Promise"})," <",(0,t.jsx)(s.a,{href:"/docs/sdk/community-js/api-services/API_Reference/types/paginatedResponse/interfaces/SCPaginatedResponse",children:(0,t.jsx)(s.code,{children:"SCPaginatedResponse"})}),"<",(0,t.jsx)(s.code,{children:"SCBroadcastMessageType"}),">>"]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"This endpoint lists all broadcast messages. Broadcast Message is a feature which allows a specific user to send messages and announcements to a larger group of users at once."}),"\n",(0,t.jsx)(s.h4,{id:"parameters-3",children:"Parameters"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{style:{textAlign:"left"},children:"Parameter"}),(0,t.jsx)(s.th,{style:{textAlign:"left"},children:"Type"}),(0,t.jsx)(s.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,t.jsx)(s.tbody,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,t.jsx)(s.code,{children:"config"}),"?"]}),(0,t.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,t.jsx)(s.code,{children:"AxiosRequestConfig"}),"<",(0,t.jsx)(s.code,{children:"any"}),">"]}),(0,t.jsx)(s.td,{style:{textAlign:"left"}})]})})]}),"\n",(0,t.jsx)(s.h4,{id:"returns-4",children:"Returns"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"Promise"})," <",(0,t.jsx)(s.a,{href:"/docs/sdk/community-js/api-services/API_Reference/types/paginatedResponse/interfaces/SCPaginatedResponse",children:(0,t.jsx)(s.code,{children:"SCPaginatedResponse"})}),"<",(0,t.jsx)(s.code,{children:"SCBroadcastMessageType"}),">>"]}),"\n",(0,t.jsx)(s.h4,{id:"source-3",children:"Source"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://github.com/selfcommunity/community-js/blob/e5a29b16d6f18947baa694fc7abb4dc2556ac852/packages/api-services/src/services/notification/index.ts#L66",children:"services/notification/index.ts:66"})}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h3,{id:"listbroadcastmessagesundisposedcount",children:"listBroadcastMessagesUndisposedCount()"}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"static"})," ",(0,t.jsx)(s.strong,{children:"listBroadcastMessagesUndisposedCount"}),"(",(0,t.jsx)(s.code,{children:"config"}),"?): ",(0,t.jsx)(s.code,{children:"Promise"}),"<",(0,t.jsx)(s.code,{children:"SCNotificationUnseenCountType"}),">"]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"This endpoint retrieves the total number of broadcast messages not yet disposed by the user."}),"\n",(0,t.jsx)(s.h4,{id:"parameters-4",children:"Parameters"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{style:{textAlign:"left"},children:"Parameter"}),(0,t.jsx)(s.th,{style:{textAlign:"left"},children:"Type"}),(0,t.jsx)(s.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,t.jsx)(s.tbody,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,t.jsx)(s.code,{children:"config"}),"?"]}),(0,t.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,t.jsx)(s.code,{children:"AxiosRequestConfig"}),"<",(0,t.jsx)(s.code,{children:"any"}),">"]}),(0,t.jsx)(s.td,{style:{textAlign:"left"}})]})})]}),"\n",(0,t.jsx)(s.h4,{id:"returns-5",children:"Returns"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"Promise"}),"<",(0,t.jsx)(s.code,{children:"SCNotificationUnseenCountType"}),">"]}),"\n",(0,t.jsx)(s.h4,{id:"source-4",children:"Source"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://github.com/selfcommunity/community-js/blob/e5a29b16d6f18947baa694fc7abb4dc2556ac852/packages/api-services/src/services/notification/index.ts#L82",children:"services/notification/index.ts:82"})}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h3,{id:"listbroadcastmessagesunseencount",children:"listBroadcastMessagesUnseenCount()"}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"static"})," ",(0,t.jsx)(s.strong,{children:"listBroadcastMessagesUnseenCount"}),"(",(0,t.jsx)(s.code,{children:"config"}),"?): ",(0,t.jsx)(s.code,{children:"Promise"}),"<",(0,t.jsx)(s.code,{children:"SCNotificationUnseenCountType"}),">"]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"This endpoint retrieves the total number of broadcast messages not yet seen by the user."}),"\n",(0,t.jsx)(s.h4,{id:"parameters-5",children:"Parameters"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{style:{textAlign:"left"},children:"Parameter"}),(0,t.jsx)(s.th,{style:{textAlign:"left"},children:"Type"}),(0,t.jsx)(s.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,t.jsx)(s.tbody,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,t.jsx)(s.code,{children:"config"}),"?"]}),(0,t.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,t.jsx)(s.code,{children:"AxiosRequestConfig"}),"<",(0,t.jsx)(s.code,{children:"any"}),">"]}),(0,t.jsx)(s.td,{style:{textAlign:"left"}})]})})]}),"\n",(0,t.jsx)(s.h4,{id:"returns-6",children:"Returns"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"Promise"}),"<",(0,t.jsx)(s.code,{children:"SCNotificationUnseenCountType"}),">"]}),"\n",(0,t.jsx)(s.h4,{id:"source-5",children:"Source"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://github.com/selfcommunity/community-js/blob/e5a29b16d6f18947baa694fc7abb4dc2556ac852/packages/api-services/src/services/notification/index.ts#L74",children:"services/notification/index.ts:74"})}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h3,{id:"listusernotification",children:"listUserNotification()"}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"static"})," ",(0,t.jsx)(s.strong,{children:"listUserNotification"}),"(",(0,t.jsx)(s.code,{children:"config"}),"?): ",(0,t.jsx)(s.code,{children:"Promise"})," <",(0,t.jsx)(s.a,{href:"/docs/sdk/community-js/api-services/API_Reference/types/paginatedResponse/interfaces/SCPaginatedResponse",children:(0,t.jsx)(s.code,{children:"SCPaginatedResponse"})}),"<",(0,t.jsx)(s.code,{children:"SCNotificationAggregatedType"}),">>"]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"List all user notifications (in aggregate form) related to the community."}),"\n",(0,t.jsx)(s.h4,{id:"parameters-6",children:"Parameters"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{style:{textAlign:"left"},children:"Parameter"}),(0,t.jsx)(s.th,{style:{textAlign:"left"},children:"Type"}),(0,t.jsx)(s.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,t.jsx)(s.tbody,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,t.jsx)(s.code,{children:"config"}),"?"]}),(0,t.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,t.jsx)(s.code,{children:"AxiosRequestConfig"}),"<",(0,t.jsx)(s.code,{children:"any"}),">"]}),(0,t.jsx)(s.td,{style:{textAlign:"left"}})]})})]}),"\n",(0,t.jsx)(s.h4,{id:"returns-7",children:"Returns"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"Promise"})," <",(0,t.jsx)(s.a,{href:"/docs/sdk/community-js/api-services/API_Reference/types/paginatedResponse/interfaces/SCPaginatedResponse",children:(0,t.jsx)(s.code,{children:"SCPaginatedResponse"})}),"<",(0,t.jsx)(s.code,{children:"SCNotificationAggregatedType"}),">>"]}),"\n",(0,t.jsx)(s.h4,{id:"source-6",children:"Source"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://github.com/selfcommunity/community-js/blob/e5a29b16d6f18947baa694fc7abb4dc2556ac852/packages/api-services/src/services/notification/index.ts#L27",children:"services/notification/index.ts:27"})}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h3,{id:"markreadbroadcastmessages",children:"markReadBroadcastMessages()"}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"static"})," ",(0,t.jsx)(s.strong,{children:"markReadBroadcastMessages"}),"(",(0,t.jsx)(s.code,{children:"banner_ids"}),", ",(0,t.jsx)(s.code,{children:"config"}),"?): ",(0,t.jsx)(s.code,{children:"Promise"}),"<",(0,t.jsx)(s.code,{children:"any"}),">"]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"This endpoint marks as viewed/read a broadcast message for a user."}),"\n",(0,t.jsx)(s.h4,{id:"parameters-7",children:"Parameters"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{style:{textAlign:"left"},children:"Parameter"}),(0,t.jsx)(s.th,{style:{textAlign:"left"},children:"Type"}),(0,t.jsx)(s.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"banner_ids"})}),(0,t.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,t.jsx)(s.code,{children:"number"}),"[]"]}),(0,t.jsx)(s.td,{style:{textAlign:"left"}})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,t.jsx)(s.code,{children:"config"}),"?"]}),(0,t.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,t.jsx)(s.code,{children:"AxiosRequestConfig"}),"<",(0,t.jsx)(s.code,{children:"any"}),">"]}),(0,t.jsx)(s.td,{style:{textAlign:"left"}})]})]})]}),"\n",(0,t.jsx)(s.h4,{id:"returns-8",children:"Returns"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"Promise"}),"<",(0,t.jsx)(s.code,{children:"any"}),">"]}),"\n",(0,t.jsx)(s.h4,{id:"source-7",children:"Source"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://github.com/selfcommunity/community-js/blob/e5a29b16d6f18947baa694fc7abb4dc2556ac852/packages/api-services/src/services/notification/index.ts#L95",children:"services/notification/index.ts:95"})}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h3,{id:"markreadnotification",children:"markReadNotification()"}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"static"})," ",(0,t.jsx)(s.strong,{children:"markReadNotification"}),"(",(0,t.jsx)(s.code,{children:"sids"}),", ",(0,t.jsx)(s.code,{children:"config"}),"?): ",(0,t.jsx)(s.code,{children:"Promise"}),"<",(0,t.jsx)(s.code,{children:"any"}),">"]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"This endpoint marks as read a list of notifications identified by serialization_ids (sids)."}),"\n",(0,t.jsx)(s.h4,{id:"parameters-8",children:"Parameters"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{style:{textAlign:"left"},children:"Parameter"}),(0,t.jsx)(s.th,{style:{textAlign:"left"},children:"Type"}),(0,t.jsx)(s.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"sids"})}),(0,t.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,t.jsx)(s.code,{children:"string"}),"[]"]}),(0,t.jsx)(s.td,{style:{textAlign:"left"}})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,t.jsx)(s.code,{children:"config"}),"?"]}),(0,t.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,t.jsx)(s.code,{children:"AxiosRequestConfig"}),"<",(0,t.jsx)(s.code,{children:"any"}),">"]}),(0,t.jsx)(s.td,{style:{textAlign:"left"}})]})]})]}),"\n",(0,t.jsx)(s.h4,{id:"returns-9",children:"Returns"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"Promise"}),"<",(0,t.jsx)(s.code,{children:"any"}),">"]}),"\n",(0,t.jsx)(s.h4,{id:"source-8",children:"Source"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://github.com/selfcommunity/community-js/blob/e5a29b16d6f18947baa694fc7abb4dc2556ac852/packages/api-services/src/services/notification/index.ts#L36",children:"services/notification/index.ts:36"})})]})}function h(e={}){const{wrapper:s}={...(0,n.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},11151:(e,s,i)=>{i.d(s,{Z:()=>l,a:()=>r});var t=i(67294);const n={},c=t.createContext(n);function r(e){const s=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),t.createElement(c.Provider,{value:s},e.children)}}}]);