"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[4804],{2398:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>n,metadata:()=>l,toc:()=>d});var c=i(85893),t=i(11151);const n={id:"services_locality.LocalityService",title:"Class: LocalityService",sidebar_label:"LocalityService",custom_edit_url:null},r=void 0,l={id:"sdk/community-js/api-services/API_Reference/classes/services_locality.LocalityService",title:"Class: LocalityService",description:"services/locality.LocalityService",source:"@site/docs/sdk/community-js/api-services/API_Reference/classes/services_locality.LocalityService.md",sourceDirName:"sdk/community-js/api-services/API_Reference/classes",slug:"/sdk/community-js/api-services/API_Reference/classes/services_locality.LocalityService",permalink:"/docs/sdk/community-js/api-services/API_Reference/classes/services_locality.LocalityService",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"services_locality.LocalityService",title:"Class: LocalityService",sidebar_label:"LocalityService",custom_edit_url:null},sidebar:"sdkSidebar",previous:{title:"LocalityApiClient",permalink:"/docs/sdk/community-js/api-services/API_Reference/classes/services_locality.LocalityApiClient"},next:{title:"LoyaltyApiClient",permalink:"/docs/sdk/community-js/api-services/API_Reference/classes/services_loyalty.LoyaltyApiClient"}},a={},d=[{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Returns",id:"returns",level:4},{value:"Methods",id:"methods",level:2},{value:"getLocalities",id:"getlocalities",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"searchLocalities",id:"searchlocalities",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-1",level:4}];function o(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.a,{href:"/docs/sdk/community-js/api-services/API_Reference/modules/services_locality",children:"services/locality"}),".LocalityService"]}),"\n",(0,c.jsxs)(s.admonition,{title:"Locality service can be used in the following way:",type:"tip",children:[(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-jsx",children:'1. Import the service from our library:\n\nimport {LocalityService} from "@selfcommunity/api-services";\n'})}),(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-jsx",children:"2. Create a function and put the service inside it!\nThe async function `getLocalities` will return the paginated list of localities.\n\nasync getLocalities() {\n       return await LocalityService.getLocalities();\n     }\n"})}),(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-jsx",children:"If you need to customize the request, you can add optional config params (`AxiosRequestConfig` type).\n\n1. Declare it(or declare them, it is possible to add multiple params)\n\nconst headers = headers: {Authorization: `Bearer ${yourToken}`}\n\n2. Add it inside the brackets and pass it to the function, as shown in the previous example!\n"})})]}),"\n",(0,c.jsx)(s.h2,{id:"constructors",children:"Constructors"}),"\n",(0,c.jsx)(s.h3,{id:"constructor",children:"constructor"}),"\n",(0,c.jsxs)(s.p,{children:["\u2022 ",(0,c.jsx)(s.strong,{children:"new LocalityService"}),"(): ",(0,c.jsx)(s.a,{href:"/docs/sdk/community-js/api-services/API_Reference/classes/services_locality.LocalityService",children:(0,c.jsx)(s.code,{children:"LocalityService"})})]}),"\n",(0,c.jsx)(s.h4,{id:"returns",children:"Returns"}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.a,{href:"/docs/sdk/community-js/api-services/API_Reference/classes/services_locality.LocalityService",children:(0,c.jsx)(s.code,{children:"LocalityService"})})}),"\n",(0,c.jsx)(s.h2,{id:"methods",children:"Methods"}),"\n",(0,c.jsx)(s.h3,{id:"getlocalities",children:"getLocalities"}),"\n",(0,c.jsxs)(s.p,{children:["\u25b8 ",(0,c.jsx)(s.strong,{children:"getLocalities"}),"(",(0,c.jsx)(s.code,{children:"params?"}),", ",(0,c.jsx)(s.code,{children:"config?"}),"): ",(0,c.jsx)(s.code,{children:"Promise"}),"<",(0,c.jsx)(s.a,{href:"/docs/sdk/community-js/api-services/API_Reference/interfaces/types_paginatedResponse.SCPaginatedResponse",children:(0,c.jsx)(s.code,{children:"SCPaginatedResponse"})}),"<",(0,c.jsx)(s.code,{children:"SCLocalityType"}),">>"]}),"\n",(0,c.jsx)(s.h4,{id:"parameters",children:"Parameters"}),"\n",(0,c.jsxs)(s.table,{children:[(0,c.jsx)(s.thead,{children:(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.th,{style:{textAlign:"left"},children:"Name"}),(0,c.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,c.jsxs)(s.tbody,{children:[(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{style:{textAlign:"left"},children:(0,c.jsx)(s.code,{children:"params?"})}),(0,c.jsx)(s.td,{style:{textAlign:"left"},children:(0,c.jsx)(s.a,{href:"/docs/sdk/community-js/api-services/API_Reference/interfaces/types_baseParams.BaseSearchParams",children:(0,c.jsx)(s.code,{children:"BaseSearchParams"})})})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{style:{textAlign:"left"},children:(0,c.jsx)(s.code,{children:"config?"})}),(0,c.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,c.jsx)(s.code,{children:"AxiosRequestConfig"}),"<",(0,c.jsx)(s.code,{children:"any"}),">"]})]})]})]}),"\n",(0,c.jsx)(s.h4,{id:"returns-1",children:"Returns"}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.code,{children:"Promise"}),"<",(0,c.jsx)(s.a,{href:"/docs/sdk/community-js/api-services/API_Reference/interfaces/types_paginatedResponse.SCPaginatedResponse",children:(0,c.jsx)(s.code,{children:"SCPaginatedResponse"})}),"<",(0,c.jsx)(s.code,{children:"SCLocalityType"}),">>"]}),"\n",(0,c.jsx)(s.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.a,{href:"https://github.com/selfcommunity/community-js/blob/6572d63/packages/api-services/src/services/locality/index.ts#L71",children:"services/locality/index.ts:71"})}),"\n",(0,c.jsx)(s.hr,{}),"\n",(0,c.jsx)(s.h3,{id:"searchlocalities",children:"searchLocalities"}),"\n",(0,c.jsxs)(s.p,{children:["\u25b8 ",(0,c.jsx)(s.strong,{children:"searchLocalities"}),"(",(0,c.jsx)(s.code,{children:"params?"}),", ",(0,c.jsx)(s.code,{children:"config?"}),"): ",(0,c.jsx)(s.code,{children:"Promise"}),"<",(0,c.jsx)(s.a,{href:"/docs/sdk/community-js/api-services/API_Reference/interfaces/types_paginatedResponse.SCPaginatedResponse",children:(0,c.jsx)(s.code,{children:"SCPaginatedResponse"})}),"<",(0,c.jsx)(s.code,{children:"SCLocalityType"}),">>"]}),"\n",(0,c.jsx)(s.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,c.jsxs)(s.table,{children:[(0,c.jsx)(s.thead,{children:(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.th,{style:{textAlign:"left"},children:"Name"}),(0,c.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,c.jsxs)(s.tbody,{children:[(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{style:{textAlign:"left"},children:(0,c.jsx)(s.code,{children:"params?"})}),(0,c.jsx)(s.td,{style:{textAlign:"left"},children:(0,c.jsx)(s.a,{href:"/docs/sdk/community-js/api-services/API_Reference/interfaces/types_baseParams.BaseSearchParams",children:(0,c.jsx)(s.code,{children:"BaseSearchParams"})})})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{style:{textAlign:"left"},children:(0,c.jsx)(s.code,{children:"config?"})}),(0,c.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,c.jsx)(s.code,{children:"AxiosRequestConfig"}),"<",(0,c.jsx)(s.code,{children:"any"}),">"]})]})]})]}),"\n",(0,c.jsx)(s.h4,{id:"returns-2",children:"Returns"}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.code,{children:"Promise"}),"<",(0,c.jsx)(s.a,{href:"/docs/sdk/community-js/api-services/API_Reference/interfaces/types_paginatedResponse.SCPaginatedResponse",children:(0,c.jsx)(s.code,{children:"SCPaginatedResponse"})}),"<",(0,c.jsx)(s.code,{children:"SCLocalityType"}),">>"]}),"\n",(0,c.jsx)(s.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.a,{href:"https://github.com/selfcommunity/community-js/blob/6572d63/packages/api-services/src/services/locality/index.ts#L74",children:"services/locality/index.ts:74"})})]})}function h(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,c.jsx)(s,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}},11151:(e,s,i)=>{i.d(s,{Z:()=>l,a:()=>r});var c=i(67294);const t={},n=c.createContext(t);function r(e){const s=c.useContext(n);return c.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),c.createElement(n.Provider,{value:s},e.children)}}}]);