"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[12141],{71268:(e,i,s)=>{s.r(i),s.d(i,{assets:()=>c,contentTitle:()=>l,default:()=>x,frontMatter:()=>t,metadata:()=>r,toc:()=>h});var d=s(85893),n=s(11151);const t={id:"services_media.MediaApiClient",title:"Class: MediaApiClient",sidebar_label:"MediaApiClient",custom_edit_url:null},l=void 0,r={id:"sdk/community-js/api-services/API_Reference/classes/services_media.MediaApiClient",title:"Class: MediaApiClient",description:"services/media.MediaApiClient",source:"@site/docs/sdk/community-js/api-services/API_Reference/classes/services_media.MediaApiClient.md",sourceDirName:"sdk/community-js/api-services/API_Reference/classes",slug:"/sdk/community-js/api-services/API_Reference/classes/services_media.MediaApiClient",permalink:"/docs/sdk/community-js/api-services/API_Reference/classes/services_media.MediaApiClient",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"services_media.MediaApiClient",title:"Class: MediaApiClient",sidebar_label:"MediaApiClient",custom_edit_url:null},sidebar:"sdkSidebar",previous:{title:"LoyaltyService",permalink:"/docs/sdk/community-js/api-services/API_Reference/classes/services_loyalty.LoyaltyService"},next:{title:"MediaService",permalink:"/docs/sdk/community-js/api-services/API_Reference/classes/services_media.MediaService"}},c={},h=[{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Returns",id:"returns",level:4},{value:"Methods",id:"methods",level:2},{value:"chunkUploadMedia",id:"chunkuploadmedia",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"chunkUploadMediaComplete",id:"chunkuploadmediacomplete",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"clickMedia",id:"clickmedia",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"createMedia",id:"createmedia",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"deleteMedia",id:"deletemedia",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-5",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"getSpecificMedia",id:"getspecificmedia",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-6",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"updateMedia",id:"updatemedia",level:3},{value:"Parameters",id:"parameters-6",level:4},{value:"Returns",id:"returns-7",level:4},{value:"Defined in",id:"defined-in-6",level:4}];function a(e){const i={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(i.p,{children:[(0,d.jsx)(i.a,{href:"/docs/sdk/community-js/api-services/API_Reference/modules/services_media",children:"services/media"}),".MediaApiClient"]}),"\n",(0,d.jsx)(i.p,{children:"Contains all the endpoints needed to manage medias."}),"\n",(0,d.jsx)(i.h2,{id:"constructors",children:"Constructors"}),"\n",(0,d.jsx)(i.h3,{id:"constructor",children:"constructor"}),"\n",(0,d.jsxs)(i.p,{children:["\u2022 ",(0,d.jsx)(i.strong,{children:"new MediaApiClient"}),"(): ",(0,d.jsx)(i.a,{href:"/docs/sdk/community-js/api-services/API_Reference/classes/services_media.MediaApiClient",children:(0,d.jsx)(i.code,{children:"MediaApiClient"})})]}),"\n",(0,d.jsx)(i.h4,{id:"returns",children:"Returns"}),"\n",(0,d.jsx)(i.p,{children:(0,d.jsx)(i.a,{href:"/docs/sdk/community-js/api-services/API_Reference/classes/services_media.MediaApiClient",children:(0,d.jsx)(i.code,{children:"MediaApiClient"})})}),"\n",(0,d.jsx)(i.h2,{id:"methods",children:"Methods"}),"\n",(0,d.jsx)(i.h3,{id:"chunkuploadmedia",children:"chunkUploadMedia"}),"\n",(0,d.jsxs)(i.p,{children:["\u25b8 ",(0,d.jsx)(i.strong,{children:"chunkUploadMedia"}),"(",(0,d.jsx)(i.code,{children:"data"}),", ",(0,d.jsx)(i.code,{children:"bytesStart"}),", ",(0,d.jsx)(i.code,{children:"bytesEnd"}),", ",(0,d.jsx)(i.code,{children:"bytesTotal"}),", ",(0,d.jsx)(i.code,{children:"config?"}),"): ",(0,d.jsx)(i.code,{children:"Promise"}),"<",(0,d.jsx)(i.code,{children:"SCChunkMediaType"}),">"]}),"\n",(0,d.jsx)(i.p,{children:"This endpoint performs the chunk upload of a media with type image or document.\nThe client must split the file into chunks and send to the server in series. After all the chunks have been uploaded the client must call the Chunk Upload Complete endpoint with the given upload_id parameter to finalize the upload and retrieve the Media.\nTo perform chunk upload the request must contain Content-Range header with the information about the chunk(range of the chunk upload in the format bytes start-end/total)"}),"\n",(0,d.jsx)(i.h4,{id:"parameters",children:"Parameters"}),"\n",(0,d.jsxs)(i.table,{children:[(0,d.jsx)(i.thead,{children:(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.th,{style:{textAlign:"left"},children:"Name"}),(0,d.jsx)(i.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,d.jsxs)(i.tbody,{children:[(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{style:{textAlign:"left"},children:(0,d.jsx)(i.code,{children:"data"})}),(0,d.jsx)(i.td,{style:{textAlign:"left"},children:(0,d.jsx)(i.a,{href:"/docs/sdk/community-js/api-services/API_Reference/interfaces/types_media.ChunkUploadParams",children:(0,d.jsx)(i.code,{children:"ChunkUploadParams"})})})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{style:{textAlign:"left"},children:(0,d.jsx)(i.code,{children:"bytesStart"})}),(0,d.jsx)(i.td,{style:{textAlign:"left"},children:(0,d.jsx)(i.code,{children:"number"})})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{style:{textAlign:"left"},children:(0,d.jsx)(i.code,{children:"bytesEnd"})}),(0,d.jsx)(i.td,{style:{textAlign:"left"},children:(0,d.jsx)(i.code,{children:"number"})})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{style:{textAlign:"left"},children:(0,d.jsx)(i.code,{children:"bytesTotal"})}),(0,d.jsx)(i.td,{style:{textAlign:"left"},children:(0,d.jsx)(i.code,{children:"number"})})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{style:{textAlign:"left"},children:(0,d.jsx)(i.code,{children:"config?"})}),(0,d.jsxs)(i.td,{style:{textAlign:"left"},children:[(0,d.jsx)(i.code,{children:"AxiosRequestConfig"}),"<",(0,d.jsx)(i.code,{children:"any"}),">"]})]})]})]}),"\n",(0,d.jsx)(i.h4,{id:"returns-1",children:"Returns"}),"\n",(0,d.jsxs)(i.p,{children:[(0,d.jsx)(i.code,{children:"Promise"}),"<",(0,d.jsx)(i.code,{children:"SCChunkMediaType"}),">"]}),"\n",(0,d.jsx)(i.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,d.jsx)(i.p,{children:(0,d.jsx)(i.a,{href:"https://github.com/selfcommunity/community-js/blob/6572d63/packages/api-services/src/services/media/index.ts#L36",children:"services/media/index.ts:36"})}),"\n",(0,d.jsx)(i.hr,{}),"\n",(0,d.jsx)(i.h3,{id:"chunkuploadmediacomplete",children:"chunkUploadMediaComplete"}),"\n",(0,d.jsxs)(i.p,{children:["\u25b8 ",(0,d.jsx)(i.strong,{children:"chunkUploadMediaComplete"}),"(",(0,d.jsx)(i.code,{children:"data"}),", ",(0,d.jsx)(i.code,{children:"config?"}),"): ",(0,d.jsx)(i.code,{children:"Promise"}),"<",(0,d.jsx)(i.code,{children:"SCMediaType"}),">"]}),"\n",(0,d.jsx)(i.p,{children:"This endpoint completes the chunk upload and create the media."}),"\n",(0,d.jsx)(i.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,d.jsxs)(i.table,{children:[(0,d.jsx)(i.thead,{children:(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.th,{style:{textAlign:"left"},children:"Name"}),(0,d.jsx)(i.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,d.jsxs)(i.tbody,{children:[(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{style:{textAlign:"left"},children:(0,d.jsx)(i.code,{children:"data"})}),(0,d.jsx)(i.td,{style:{textAlign:"left"},children:(0,d.jsx)(i.a,{href:"/docs/sdk/community-js/api-services/API_Reference/interfaces/types_media.ChunkUploadCompleteParams",children:(0,d.jsx)(i.code,{children:"ChunkUploadCompleteParams"})})})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{style:{textAlign:"left"},children:(0,d.jsx)(i.code,{children:"config?"})}),(0,d.jsxs)(i.td,{style:{textAlign:"left"},children:[(0,d.jsx)(i.code,{children:"AxiosRequestConfig"}),"<",(0,d.jsx)(i.code,{children:"any"}),">"]})]})]})]}),"\n",(0,d.jsx)(i.h4,{id:"returns-2",children:"Returns"}),"\n",(0,d.jsxs)(i.p,{children:[(0,d.jsx)(i.code,{children:"Promise"}),"<",(0,d.jsx)(i.code,{children:"SCMediaType"}),">"]}),"\n",(0,d.jsx)(i.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,d.jsx)(i.p,{children:(0,d.jsx)(i.a,{href:"https://github.com/selfcommunity/community-js/blob/6572d63/packages/api-services/src/services/media/index.ts#L57",children:"services/media/index.ts:57"})}),"\n",(0,d.jsx)(i.hr,{}),"\n",(0,d.jsx)(i.h3,{id:"clickmedia",children:"clickMedia"}),"\n",(0,d.jsxs)(i.p,{children:["\u25b8 ",(0,d.jsx)(i.strong,{children:"clickMedia"}),"(",(0,d.jsx)(i.code,{children:"id"}),", ",(0,d.jsx)(i.code,{children:"ip?"}),", ",(0,d.jsx)(i.code,{children:"config?"}),"): ",(0,d.jsx)(i.code,{children:"Promise"}),"<",(0,d.jsx)(i.code,{children:"any"}),">"]}),"\n",(0,d.jsx)(i.p,{children:"This endpoint saves a click on a specific media using ID."}),"\n",(0,d.jsx)(i.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,d.jsxs)(i.table,{children:[(0,d.jsx)(i.thead,{children:(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.th,{style:{textAlign:"left"},children:"Name"}),(0,d.jsx)(i.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,d.jsxs)(i.tbody,{children:[(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{style:{textAlign:"left"},children:(0,d.jsx)(i.code,{children:"id"})}),(0,d.jsxs)(i.td,{style:{textAlign:"left"},children:[(0,d.jsx)(i.code,{children:"string"})," | ",(0,d.jsx)(i.code,{children:"number"})]})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{style:{textAlign:"left"},children:(0,d.jsx)(i.code,{children:"ip?"})}),(0,d.jsx)(i.td,{style:{textAlign:"left"},children:(0,d.jsx)(i.code,{children:"string"})})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{style:{textAlign:"left"},children:(0,d.jsx)(i.code,{children:"config?"})}),(0,d.jsxs)(i.td,{style:{textAlign:"left"},children:[(0,d.jsx)(i.code,{children:"AxiosRequestConfig"}),"<",(0,d.jsx)(i.code,{children:"any"}),">"]})]})]})]}),"\n",(0,d.jsx)(i.h4,{id:"returns-3",children:"Returns"}),"\n",(0,d.jsxs)(i.p,{children:[(0,d.jsx)(i.code,{children:"Promise"}),"<",(0,d.jsx)(i.code,{children:"any"}),">"]}),"\n",(0,d.jsx)(i.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,d.jsx)(i.p,{children:(0,d.jsx)(i.a,{href:"https://github.com/selfcommunity/community-js/blob/6572d63/packages/api-services/src/services/media/index.ts#L81",children:"services/media/index.ts:81"})}),"\n",(0,d.jsx)(i.hr,{}),"\n",(0,d.jsx)(i.h3,{id:"createmedia",children:"createMedia"}),"\n",(0,d.jsxs)(i.p,{children:["\u25b8 ",(0,d.jsx)(i.strong,{children:"createMedia"}),"(",(0,d.jsx)(i.code,{children:"data"}),", ",(0,d.jsx)(i.code,{children:"config?"}),"): ",(0,d.jsx)(i.code,{children:"Promise"}),"<",(0,d.jsx)(i.code,{children:"SCMediaType"}),">"]}),"\n",(0,d.jsx)(i.p,{children:"This endpoint creates a media."}),"\n",(0,d.jsx)(i.h4,{id:"parameters-3",children:"Parameters"}),"\n",(0,d.jsxs)(i.table,{children:[(0,d.jsx)(i.thead,{children:(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.th,{style:{textAlign:"left"},children:"Name"}),(0,d.jsx)(i.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,d.jsxs)(i.tbody,{children:[(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{style:{textAlign:"left"},children:(0,d.jsx)(i.code,{children:"data"})}),(0,d.jsx)(i.td,{style:{textAlign:"left"},children:(0,d.jsx)(i.a,{href:"/docs/sdk/community-js/api-services/API_Reference/interfaces/types_media.MediaCreateParams",children:(0,d.jsx)(i.code,{children:"MediaCreateParams"})})})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{style:{textAlign:"left"},children:(0,d.jsx)(i.code,{children:"config?"})}),(0,d.jsxs)(i.td,{style:{textAlign:"left"},children:[(0,d.jsx)(i.code,{children:"AxiosRequestConfig"}),"<",(0,d.jsx)(i.code,{children:"any"}),">"]})]})]})]}),"\n",(0,d.jsx)(i.h4,{id:"returns-4",children:"Returns"}),"\n",(0,d.jsxs)(i.p,{children:[(0,d.jsx)(i.code,{children:"Promise"}),"<",(0,d.jsx)(i.code,{children:"SCMediaType"}),">"]}),"\n",(0,d.jsx)(i.h4,{id:"defined-in-3",children:"Defined in"}),"\n",(0,d.jsx)(i.p,{children:(0,d.jsx)(i.a,{href:"https://github.com/selfcommunity/community-js/blob/6572d63/packages/api-services/src/services/media/index.ts#L71",children:"services/media/index.ts:71"})}),"\n",(0,d.jsx)(i.hr,{}),"\n",(0,d.jsx)(i.h3,{id:"deletemedia",children:"deleteMedia"}),"\n",(0,d.jsxs)(i.p,{children:["\u25b8 ",(0,d.jsx)(i.strong,{children:"deleteMedia"}),"(",(0,d.jsx)(i.code,{children:"id"}),", ",(0,d.jsx)(i.code,{children:"config?"}),"): ",(0,d.jsx)(i.code,{children:"Promise"}),"<",(0,d.jsx)(i.code,{children:"any"}),">"]}),"\n",(0,d.jsx)(i.p,{children:"This endpoint deletes a media."}),"\n",(0,d.jsx)(i.h4,{id:"parameters-4",children:"Parameters"}),"\n",(0,d.jsxs)(i.table,{children:[(0,d.jsx)(i.thead,{children:(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.th,{style:{textAlign:"left"},children:"Name"}),(0,d.jsx)(i.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,d.jsxs)(i.tbody,{children:[(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{style:{textAlign:"left"},children:(0,d.jsx)(i.code,{children:"id"})}),(0,d.jsxs)(i.td,{style:{textAlign:"left"},children:[(0,d.jsx)(i.code,{children:"string"})," | ",(0,d.jsx)(i.code,{children:"number"})]})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{style:{textAlign:"left"},children:(0,d.jsx)(i.code,{children:"config?"})}),(0,d.jsxs)(i.td,{style:{textAlign:"left"},children:[(0,d.jsx)(i.code,{children:"AxiosRequestConfig"}),"<",(0,d.jsx)(i.code,{children:"any"}),">"]})]})]})]}),"\n",(0,d.jsx)(i.h4,{id:"returns-5",children:"Returns"}),"\n",(0,d.jsxs)(i.p,{children:[(0,d.jsx)(i.code,{children:"Promise"}),"<",(0,d.jsx)(i.code,{children:"any"}),">"]}),"\n",(0,d.jsx)(i.h4,{id:"defined-in-4",children:"Defined in"}),"\n",(0,d.jsx)(i.p,{children:(0,d.jsx)(i.a,{href:"https://github.com/selfcommunity/community-js/blob/6572d63/packages/api-services/src/services/media/index.ts#L109",children:"services/media/index.ts:109"})}),"\n",(0,d.jsx)(i.hr,{}),"\n",(0,d.jsx)(i.h3,{id:"getspecificmedia",children:"getSpecificMedia"}),"\n",(0,d.jsxs)(i.p,{children:["\u25b8 ",(0,d.jsx)(i.strong,{children:"getSpecificMedia"}),"(",(0,d.jsx)(i.code,{children:"id"}),", ",(0,d.jsx)(i.code,{children:"config?"}),"): ",(0,d.jsx)(i.code,{children:"Promise"}),"<",(0,d.jsx)(i.code,{children:"SCMediaType"}),">"]}),"\n",(0,d.jsx)(i.p,{children:"This endpoint retrieves a specific media using ID."}),"\n",(0,d.jsx)(i.h4,{id:"parameters-5",children:"Parameters"}),"\n",(0,d.jsxs)(i.table,{children:[(0,d.jsx)(i.thead,{children:(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.th,{style:{textAlign:"left"},children:"Name"}),(0,d.jsx)(i.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,d.jsxs)(i.tbody,{children:[(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{style:{textAlign:"left"},children:(0,d.jsx)(i.code,{children:"id"})}),(0,d.jsxs)(i.td,{style:{textAlign:"left"},children:[(0,d.jsx)(i.code,{children:"string"})," | ",(0,d.jsx)(i.code,{children:"number"})]})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{style:{textAlign:"left"},children:(0,d.jsx)(i.code,{children:"config?"})}),(0,d.jsxs)(i.td,{style:{textAlign:"left"},children:[(0,d.jsx)(i.code,{children:"AxiosRequestConfig"}),"<",(0,d.jsx)(i.code,{children:"any"}),">"]})]})]})]}),"\n",(0,d.jsx)(i.h4,{id:"returns-6",children:"Returns"}),"\n",(0,d.jsxs)(i.p,{children:[(0,d.jsx)(i.code,{children:"Promise"}),"<",(0,d.jsx)(i.code,{children:"SCMediaType"}),">"]}),"\n",(0,d.jsx)(i.h4,{id:"defined-in-5",children:"Defined in"}),"\n",(0,d.jsx)(i.p,{children:(0,d.jsx)(i.a,{href:"https://github.com/selfcommunity/community-js/blob/6572d63/packages/api-services/src/services/media/index.ts#L90",children:"services/media/index.ts:90"})}),"\n",(0,d.jsx)(i.hr,{}),"\n",(0,d.jsx)(i.h3,{id:"updatemedia",children:"updateMedia"}),"\n",(0,d.jsxs)(i.p,{children:["\u25b8 ",(0,d.jsx)(i.strong,{children:"updateMedia"}),"(",(0,d.jsx)(i.code,{children:"id"}),", ",(0,d.jsx)(i.code,{children:"image"}),", ",(0,d.jsx)(i.code,{children:"config?"}),"): ",(0,d.jsx)(i.code,{children:"Promise"}),"<",(0,d.jsx)(i.code,{children:"SCMediaType"}),">"]}),"\n",(0,d.jsx)(i.p,{children:"This endpoint updates a media."}),"\n",(0,d.jsx)(i.h4,{id:"parameters-6",children:"Parameters"}),"\n",(0,d.jsxs)(i.table,{children:[(0,d.jsx)(i.thead,{children:(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.th,{style:{textAlign:"left"},children:"Name"}),(0,d.jsx)(i.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,d.jsxs)(i.tbody,{children:[(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{style:{textAlign:"left"},children:(0,d.jsx)(i.code,{children:"id"})}),(0,d.jsxs)(i.td,{style:{textAlign:"left"},children:[(0,d.jsx)(i.code,{children:"string"})," | ",(0,d.jsx)(i.code,{children:"number"})]})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{style:{textAlign:"left"},children:(0,d.jsx)(i.code,{children:"image"})}),(0,d.jsx)(i.td,{style:{textAlign:"left"},children:(0,d.jsx)(i.code,{children:"string"})})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{style:{textAlign:"left"},children:(0,d.jsx)(i.code,{children:"config?"})}),(0,d.jsxs)(i.td,{style:{textAlign:"left"},children:[(0,d.jsx)(i.code,{children:"AxiosRequestConfig"}),"<",(0,d.jsx)(i.code,{children:"any"}),">"]})]})]})]}),"\n",(0,d.jsx)(i.h4,{id:"returns-7",children:"Returns"}),"\n",(0,d.jsxs)(i.p,{children:[(0,d.jsx)(i.code,{children:"Promise"}),"<",(0,d.jsx)(i.code,{children:"SCMediaType"}),">"]}),"\n",(0,d.jsx)(i.h4,{id:"defined-in-6",children:"Defined in"}),"\n",(0,d.jsx)(i.p,{children:(0,d.jsx)(i.a,{href:"https://github.com/selfcommunity/community-js/blob/6572d63/packages/api-services/src/services/media/index.ts#L100",children:"services/media/index.ts:100"})})]})}function x(e={}){const{wrapper:i}={...(0,n.a)(),...e.components};return i?(0,d.jsx)(i,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},11151:(e,i,s)=>{s.d(i,{Z:()=>r,a:()=>l});var d=s(67294);const n={},t=d.createContext(n);function l(e){const i=d.useContext(t);return d.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),d.createElement(t.Provider,{value:i},e.children)}}}]);