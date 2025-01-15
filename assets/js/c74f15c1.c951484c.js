"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[96358],{73618:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var c=t(85893),n=t(11151);const i={},r="CustomAdvService",d={id:"sdk/community-js/api-services/API_Reference/services/custom_adv/classes/CustomAdvService",title:"CustomAdvService",description:"Constructors",source:"@site/docs/sdk/community-js/api-services/API_Reference/services/custom_adv/classes/CustomAdvService.md",sourceDirName:"sdk/community-js/api-services/API_Reference/services/custom_adv/classes",slug:"/sdk/community-js/api-services/API_Reference/services/custom_adv/classes/CustomAdvService",permalink:"/docs/sdk/community-js/api-services/API_Reference/services/custom_adv/classes/CustomAdvService",draft:!1,unlisted:!1,editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/sdk/community-js/api-services/API_Reference/services/custom_adv/classes/CustomAdvService.md",tags:[],version:"current",frontMatter:{},sidebar:"sdkSidebar",previous:{title:"CustomAdvApiClient",permalink:"/docs/sdk/community-js/api-services/API_Reference/services/custom_adv/classes/CustomAdvApiClient"},next:{title:"CustomAdvApiClientInterface",permalink:"/docs/sdk/community-js/api-services/API_Reference/services/custom_adv/interfaces/CustomAdvApiClientInterface"}},o={},l=[{value:"Constructors",id:"constructors",level:2},{value:"new CustomAdvService()",id:"new-customadvservice",level:3},{value:"Returns",id:"returns",level:4},{value:"Methods",id:"methods",level:2},{value:"getASpecificCustomAdv()",id:"getaspecificcustomadv",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Source",id:"source",level:4},{value:"getAllCustomAdv()",id:"getallcustomadv",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Source",id:"source-1",level:4},{value:"searchCustomAdv()",id:"searchcustomadv",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Source",id:"source-2",level:4}];function a(e){const s={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(s.h1,{id:"customadvservice",children:"CustomAdvService"}),"\n",(0,c.jsxs)(s.admonition,{title:"Custom Adv service can be used in the following way:",type:"tip",children:[(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-jsx",children:'1. Import the service from our library:\n\nimport {CustomAdvService} from "@selfcommunity/api-services";\n'})}),(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-jsx",children:"2. Create a function and put the service inside it!\nThe async function `getAllCustomAdv` will return the paginated list of advs.\n\nasync getAllCustomAdv() {\n       return await CustomAdvService.getAllCustomAdv();\n     }\n"})}),(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-jsx",children:"In case of required `params`, just add them inside the brackets.\n\nasync getASpecificCustomAdv(customAdvId) {\n       return await CustomAdvService.getASpecificCustomAdv(customAdvId);\n     }\n"})}),(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-jsx",children:"If you need to customize the request, you can add optional config params (`AxiosRequestConfig` type).\n\n1. Declare it(or declare them, it is possible to add multiple params)\n\nconst headers = headers: {Authorization: `Bearer ${yourToken}`}\n\n2. Add it inside the brackets and pass it to the function, as shown in the previous example!\n"})})]}),"\n",(0,c.jsx)(s.h2,{id:"constructors",children:"Constructors"}),"\n",(0,c.jsx)(s.h3,{id:"new-customadvservice",children:"new CustomAdvService()"}),"\n",(0,c.jsxs)(s.blockquote,{children:["\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.strong,{children:"new CustomAdvService"}),"(): ",(0,c.jsx)(s.a,{href:"/docs/sdk/community-js/api-services/API_Reference/services/custom_adv/classes/CustomAdvService",children:(0,c.jsx)(s.code,{children:"CustomAdvService"})})]}),"\n"]}),"\n",(0,c.jsx)(s.h4,{id:"returns",children:"Returns"}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.a,{href:"/docs/sdk/community-js/api-services/API_Reference/services/custom_adv/classes/CustomAdvService",children:(0,c.jsx)(s.code,{children:"CustomAdvService"})})}),"\n",(0,c.jsx)(s.h2,{id:"methods",children:"Methods"}),"\n",(0,c.jsx)(s.h3,{id:"getaspecificcustomadv",children:"getASpecificCustomAdv()"}),"\n",(0,c.jsxs)(s.blockquote,{children:["\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.code,{children:"static"})," ",(0,c.jsx)(s.strong,{children:"getASpecificCustomAdv"}),"(",(0,c.jsx)(s.code,{children:"id"}),", ",(0,c.jsx)(s.code,{children:"config"}),"?): ",(0,c.jsx)(s.code,{children:"Promise"}),"<",(0,c.jsx)(s.code,{children:"SCCustomAdvType"}),">"]}),"\n"]}),"\n",(0,c.jsx)(s.h4,{id:"parameters",children:"Parameters"}),"\n",(0,c.jsxs)(s.table,{children:[(0,c.jsx)(s.thead,{children:(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.th,{style:{textAlign:"left"},children:"Parameter"}),(0,c.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,c.jsxs)(s.tbody,{children:[(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{style:{textAlign:"left"},children:(0,c.jsx)(s.code,{children:"id"})}),(0,c.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,c.jsx)(s.code,{children:"string"})," | ",(0,c.jsx)(s.code,{children:"number"})]})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,c.jsx)(s.code,{children:"config"}),"?"]}),(0,c.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,c.jsx)(s.code,{children:"AxiosRequestConfig"}),"<",(0,c.jsx)(s.code,{children:"any"}),">"]})]})]})]}),"\n",(0,c.jsx)(s.h4,{id:"returns-1",children:"Returns"}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.code,{children:"Promise"}),"<",(0,c.jsx)(s.code,{children:"SCCustomAdvType"}),">"]}),"\n",(0,c.jsx)(s.h4,{id:"source",children:"Source"}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.a,{href:"https://github.com/selfcommunity/community-js/blob/e662efcd235f7af73f248bd448d664d71e43b1eb/packages/api-services/src/services/custom_adv/index.ts#L84",children:"services/custom_adv/index.ts:84"})}),"\n",(0,c.jsx)(s.hr,{}),"\n",(0,c.jsx)(s.h3,{id:"getallcustomadv",children:"getAllCustomAdv()"}),"\n",(0,c.jsxs)(s.blockquote,{children:["\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.code,{children:"static"})," ",(0,c.jsx)(s.strong,{children:"getAllCustomAdv"}),"(",(0,c.jsx)(s.code,{children:"params"}),"?, ",(0,c.jsx)(s.code,{children:"config"}),"?): ",(0,c.jsx)(s.code,{children:"Promise"})," <",(0,c.jsx)(s.a,{href:"/docs/sdk/community-js/api-services/API_Reference/types/paginatedResponse/interfaces/SCPaginatedResponse",children:(0,c.jsx)(s.code,{children:"SCPaginatedResponse"})}),"<",(0,c.jsx)(s.code,{children:"SCCustomAdvType"}),">>"]}),"\n"]}),"\n",(0,c.jsx)(s.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,c.jsxs)(s.table,{children:[(0,c.jsx)(s.thead,{children:(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.th,{style:{textAlign:"left"},children:"Parameter"}),(0,c.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,c.jsxs)(s.tbody,{children:[(0,c.jsxs)(s.tr,{children:[(0,c.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,c.jsx)(s.code,{children:"params"}),"?"]}),(0,c.jsx)(s.td,{style:{textAlign:"left"},children:(0,c.jsx)(s.a,{href:"/docs/sdk/community-js/api-services/API_Reference/types/customAdv/interfaces/CustomAdvParams",children:(0,c.jsx)(s.code,{children:"CustomAdvParams"})})})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,c.jsx)(s.code,{children:"config"}),"?"]}),(0,c.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,c.jsx)(s.code,{children:"AxiosRequestConfig"}),"<",(0,c.jsx)(s.code,{children:"any"}),">"]})]})]})]}),"\n",(0,c.jsx)(s.h4,{id:"returns-2",children:"Returns"}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.code,{children:"Promise"})," <",(0,c.jsx)(s.a,{href:"/docs/sdk/community-js/api-services/API_Reference/types/paginatedResponse/interfaces/SCPaginatedResponse",children:(0,c.jsx)(s.code,{children:"SCPaginatedResponse"})}),"<",(0,c.jsx)(s.code,{children:"SCCustomAdvType"}),">>"]}),"\n",(0,c.jsx)(s.h4,{id:"source-1",children:"Source"}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.a,{href:"https://github.com/selfcommunity/community-js/blob/e662efcd235f7af73f248bd448d664d71e43b1eb/packages/api-services/src/services/custom_adv/index.ts#L87",children:"services/custom_adv/index.ts:87"})}),"\n",(0,c.jsx)(s.hr,{}),"\n",(0,c.jsx)(s.h3,{id:"searchcustomadv",children:"searchCustomAdv()"}),"\n",(0,c.jsxs)(s.blockquote,{children:["\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.code,{children:"static"})," ",(0,c.jsx)(s.strong,{children:"searchCustomAdv"}),"(",(0,c.jsx)(s.code,{children:"params"}),"?, ",(0,c.jsx)(s.code,{children:"config"}),"?): ",(0,c.jsx)(s.code,{children:"Promise"})," <",(0,c.jsx)(s.a,{href:"/docs/sdk/community-js/api-services/API_Reference/types/paginatedResponse/interfaces/SCPaginatedResponse",children:(0,c.jsx)(s.code,{children:"SCPaginatedResponse"})}),"<",(0,c.jsx)(s.code,{children:"SCCustomAdvType"}),">>"]}),"\n"]}),"\n",(0,c.jsx)(s.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,c.jsxs)(s.table,{children:[(0,c.jsx)(s.thead,{children:(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.th,{style:{textAlign:"left"},children:"Parameter"}),(0,c.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,c.jsxs)(s.tbody,{children:[(0,c.jsxs)(s.tr,{children:[(0,c.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,c.jsx)(s.code,{children:"params"}),"?"]}),(0,c.jsx)(s.td,{style:{textAlign:"left"},children:(0,c.jsx)(s.a,{href:"/docs/sdk/community-js/api-services/API_Reference/types/customAdv/interfaces/CustomAdvParams",children:(0,c.jsx)(s.code,{children:"CustomAdvParams"})})})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,c.jsx)(s.code,{children:"config"}),"?"]}),(0,c.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,c.jsx)(s.code,{children:"AxiosRequestConfig"}),"<",(0,c.jsx)(s.code,{children:"any"}),">"]})]})]})]}),"\n",(0,c.jsx)(s.h4,{id:"returns-3",children:"Returns"}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.code,{children:"Promise"})," <",(0,c.jsx)(s.a,{href:"/docs/sdk/community-js/api-services/API_Reference/types/paginatedResponse/interfaces/SCPaginatedResponse",children:(0,c.jsx)(s.code,{children:"SCPaginatedResponse"})}),"<",(0,c.jsx)(s.code,{children:"SCCustomAdvType"}),">>"]}),"\n",(0,c.jsx)(s.h4,{id:"source-2",children:"Source"}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.a,{href:"https://github.com/selfcommunity/community-js/blob/e662efcd235f7af73f248bd448d664d71e43b1eb/packages/api-services/src/services/custom_adv/index.ts#L90",children:"services/custom_adv/index.ts:90"})})]})}function h(e={}){const{wrapper:s}={...(0,n.a)(),...e.components};return s?(0,c.jsx)(s,{...e,children:(0,c.jsx)(a,{...e})}):a(e)}},11151:(e,s,t)=>{t.d(s,{Z:()=>d,a:()=>r});var c=t(67294);const n={},i=c.createContext(n);function r(e){const s=c.useContext(i);return c.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),c.createElement(i.Provider,{value:s},e.children)}}}]);