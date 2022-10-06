"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[15142],{11892:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return o}});var n=a(83117),i=a(80102),r=(a(67294),a(3905)),s=["components"],l={id:"services_private_message.PrivateMessageService",title:"Class: PrivateMessageService",sidebar_label:"PrivateMessageService",custom_edit_url:null},p=void 0,d={unversionedId:"sdk/community-js/api-services/API_Reference/classes/services_private_message.PrivateMessageService",id:"sdk/community-js/api-services/API_Reference/classes/services_private_message.PrivateMessageService",title:"Class: PrivateMessageService",description:"services/privatemessage.PrivateMessageService",source:"@site/docs/sdk/community-js/api-services/API_Reference/classes/services_private_message.PrivateMessageService.md",sourceDirName:"sdk/community-js/api-services/API_Reference/classes",slug:"/sdk/community-js/api-services/API_Reference/classes/services_private_message.PrivateMessageService",permalink:"/docs/sdk/community-js/api-services/API_Reference/classes/services_private_message.PrivateMessageService",editUrl:null,tags:[],version:"current",frontMatter:{id:"services_private_message.PrivateMessageService",title:"Class: PrivateMessageService",sidebar_label:"PrivateMessageService",custom_edit_url:null},sidebar:"sdkSidebar",previous:{title:"PrivateMessageApiClient",permalink:"/docs/sdk/community-js/api-services/API_Reference/classes/services_private_message.PrivateMessageApiClient"},next:{title:"ScoreApiClient",permalink:"/docs/sdk/community-js/api-services/API_Reference/classes/services_score.ScoreApiClient"}},m={},o=[{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Methods",id:"methods",level:2},{value:"chunkUploadDone",id:"chunkuploaddone",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"deleteAMessage",id:"deleteamessage",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"deleteAThread",id:"deleteathread",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"getASingleMessage",id:"getasinglemessage",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"getAThread",id:"getathread",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"getAllSnippets",id:"getallsnippets",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-5",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"sendAMessage",id:"sendamessage",level:3},{value:"Parameters",id:"parameters-6",level:4},{value:"Returns",id:"returns-6",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"uploadMedia",id:"uploadmedia",level:3},{value:"Parameters",id:"parameters-7",level:4},{value:"Returns",id:"returns-7",level:4},{value:"Defined in",id:"defined-in-7",level:4},{value:"uploadMediaInChunks",id:"uploadmediainchunks",level:3},{value:"Parameters",id:"parameters-8",level:4},{value:"Returns",id:"returns-8",level:4},{value:"Defined in",id:"defined-in-8",level:4},{value:"uploadThumbnail",id:"uploadthumbnail",level:3},{value:"Parameters",id:"parameters-9",level:4},{value:"Returns",id:"returns-9",level:4},{value:"Defined in",id:"defined-in-9",level:4}],k={toc:o};function c(e){var t=e.components,a=(0,i.Z)(e,s);return(0,r.kt)("wrapper",(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/sdk/community-js/api-services/API_Reference/modules/services_private_message"},"services/private_message"),".PrivateMessageService"),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Private Message service can be used in the following way:")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'1. Import the service from our library:\n\nimport {PrivateMessageService} from "@selfcommunity/api-services";\n')),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"2. Create a function and put the service inside it!\nThe async function `getAllSnippets` will return the paginated list of snippets.\n\nasync getAllSnippets() {\nreturn await PrivateMessageService.getAllSnippets();\n}\n")),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"In case of required `params`, just add them inside the brackets.\n\nasync getASingleMessage(messageId) {\nreturn await PrivateMessageService.getASingleMessage(messageId);\n}\n")),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"If you need to customize the request, you can add optional config params (`AxiosRequestConfig` type).\n\n1. Declare it(or declare them, it is possible to add multiple params)\n\nconst headers = headers: {Authorization: `Bearer ${yourToken}`}\n\n2. Add it inside the brackets and pass it to the function, as shown in the previous example!\n")))),(0,r.kt)("h2",{id:"constructors"},"Constructors"),(0,r.kt)("h3",{id:"constructor"},"constructor"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"new PrivateMessageService"),"()"),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"chunkuploaddone"},"chunkUploadDone"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("strong",{parentName:"p"},"chunkUploadDone"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"data"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"config?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"SCPrivateMessageUploadMediaType"),">"),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"data")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/sdk/community-js/api-services/API_Reference/interfaces/types.MessageChunkUploadDoneParams"},(0,r.kt)("inlineCode",{parentName:"a"},"MessageChunkUploadDoneParams")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"config?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"AxiosRequestConfig"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"any"),">")))),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"SCPrivateMessageUploadMediaType"),">"),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/selfcommunity/community-js/blob/724cf8e/packages/api-services/src/services/private_message/index.ts#L205"},"services/private_message/index.ts:205")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"deleteamessage"},"deleteAMessage"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("strong",{parentName:"p"},"deleteAMessage"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"id"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"config?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"id")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"config?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"AxiosRequestConfig"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"any"),">")))),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/selfcommunity/community-js/blob/724cf8e/packages/api-services/src/services/private_message/index.ts#L190"},"services/private_message/index.ts:190")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"deleteathread"},"deleteAThread"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("strong",{parentName:"p"},"deleteAThread"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"id"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"config?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,r.kt)("h4",{id:"parameters-2"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"id")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"config?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"AxiosRequestConfig"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"any"),">")))),(0,r.kt)("h4",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/selfcommunity/community-js/blob/724cf8e/packages/api-services/src/services/private_message/index.ts#L193"},"services/private_message/index.ts:193")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getasinglemessage"},"getASingleMessage"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("strong",{parentName:"p"},"getASingleMessage"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"id"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"config?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"SCPrivateMessageType"),">"),(0,r.kt)("h4",{id:"parameters-3"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"id")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"config?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"AxiosRequestConfig"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"any"),">")))),(0,r.kt)("h4",{id:"returns-3"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"SCPrivateMessageType"),">"),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/selfcommunity/community-js/blob/724cf8e/packages/api-services/src/services/private_message/index.ts#L184"},"services/private_message/index.ts:184")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getathread"},"getAThread"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("strong",{parentName:"p"},"getAThread"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"data"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"config?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/docs/sdk/community-js/api-services/API_Reference/interfaces/types.SCPaginatedResponse"},(0,r.kt)("inlineCode",{parentName:"a"},"SCPaginatedResponse")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"SCPrivateMessageType"),">",">"),(0,r.kt)("h4",{id:"parameters-4"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"data")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/sdk/community-js/api-services/API_Reference/interfaces/types.ThreadParams"},(0,r.kt)("inlineCode",{parentName:"a"},"ThreadParams")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"config?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"AxiosRequestConfig"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"any"),">")))),(0,r.kt)("h4",{id:"returns-4"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/docs/sdk/community-js/api-services/API_Reference/interfaces/types.SCPaginatedResponse"},(0,r.kt)("inlineCode",{parentName:"a"},"SCPaginatedResponse")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"SCPrivateMessageType"),">",">"),(0,r.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/selfcommunity/community-js/blob/724cf8e/packages/api-services/src/services/private_message/index.ts#L181"},"services/private_message/index.ts:181")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getallsnippets"},"getAllSnippets"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("strong",{parentName:"p"},"getAllSnippets"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"config?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/docs/sdk/community-js/api-services/API_Reference/interfaces/types.SCPaginatedResponse"},(0,r.kt)("inlineCode",{parentName:"a"},"SCPaginatedResponse")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"SCPrivateMessageType"),">",">"),(0,r.kt)("h4",{id:"parameters-5"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"config?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"AxiosRequestConfig"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"any"),">")))),(0,r.kt)("h4",{id:"returns-5"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/docs/sdk/community-js/api-services/API_Reference/interfaces/types.SCPaginatedResponse"},(0,r.kt)("inlineCode",{parentName:"a"},"SCPaginatedResponse")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"SCPrivateMessageType"),">",">"),(0,r.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/selfcommunity/community-js/blob/724cf8e/packages/api-services/src/services/private_message/index.ts#L178"},"services/private_message/index.ts:178")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"sendamessage"},"sendAMessage"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("strong",{parentName:"p"},"sendAMessage"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"data"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"config?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"SCPrivateMessageType"),">"),(0,r.kt)("h4",{id:"parameters-6"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"data")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/sdk/community-js/api-services/API_Reference/interfaces/types.MessageCreateParams"},(0,r.kt)("inlineCode",{parentName:"a"},"MessageCreateParams")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"config?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"AxiosRequestConfig"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"any"),">")))),(0,r.kt)("h4",{id:"returns-6"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"SCPrivateMessageType"),">"),(0,r.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/selfcommunity/community-js/blob/724cf8e/packages/api-services/src/services/private_message/index.ts#L187"},"services/private_message/index.ts:187")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"uploadmedia"},"uploadMedia"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("strong",{parentName:"p"},"uploadMedia"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"data"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"config?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"SCPrivateMessageUploadMediaType"),">"),(0,r.kt)("h4",{id:"parameters-7"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"data")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/sdk/community-js/api-services/API_Reference/interfaces/types.MessageMediaUploadParams"},(0,r.kt)("inlineCode",{parentName:"a"},"MessageMediaUploadParams")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"config?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"AxiosRequestConfig"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"any"),">")))),(0,r.kt)("h4",{id:"returns-7"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"SCPrivateMessageUploadMediaType"),">"),(0,r.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/selfcommunity/community-js/blob/724cf8e/packages/api-services/src/services/private_message/index.ts#L196"},"services/private_message/index.ts:196")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"uploadmediainchunks"},"uploadMediaInChunks"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("strong",{parentName:"p"},"uploadMediaInChunks"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"data"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"config?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"SCPrivateMessageUploadMediaChunkType"),">"),(0,r.kt)("h4",{id:"parameters-8"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"data")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/sdk/community-js/api-services/API_Reference/interfaces/types.MessageMediaChunksParams"},(0,r.kt)("inlineCode",{parentName:"a"},"MessageMediaChunksParams")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"config?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"AxiosRequestConfig"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"any"),">")))),(0,r.kt)("h4",{id:"returns-8"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"SCPrivateMessageUploadMediaChunkType"),">"),(0,r.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/selfcommunity/community-js/blob/724cf8e/packages/api-services/src/services/private_message/index.ts#L202"},"services/private_message/index.ts:202")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"uploadthumbnail"},"uploadThumbnail"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("strong",{parentName:"p"},"uploadThumbnail"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"data"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"config?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"SCPrivateMessageUploadThumbnailType"),">"),(0,r.kt)("h4",{id:"parameters-9"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"data")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/sdk/community-js/api-services/API_Reference/interfaces/types.MessageThumbnailUploadParams"},(0,r.kt)("inlineCode",{parentName:"a"},"MessageThumbnailUploadParams")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"config?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"AxiosRequestConfig"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"any"),">")))),(0,r.kt)("h4",{id:"returns-9"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"SCPrivateMessageUploadThumbnailType"),">"),(0,r.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/selfcommunity/community-js/blob/724cf8e/packages/api-services/src/services/private_message/index.ts#L199"},"services/private_message/index.ts:199")))}c.isMDXComponent=!0},3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return c}});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=n.createContext({}),d=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},m=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),k=d(a),c=i,u=k["".concat(p,".").concat(c)]||k[c]||o[c]||r;return a?n.createElement(u,s(s({ref:t},m),{},{components:a})):n.createElement(u,s({ref:t},m))}));function c(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,s=new Array(r);s[0]=k;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,s[1]=l;for(var d=2;d<r;d++)s[d]=a[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"}}]);