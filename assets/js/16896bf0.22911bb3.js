"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[26752],{42745:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>t,metadata:()=>d,toc:()=>o});var r=n(85893),i=n(11151);const t={},c="OnBoardingService",d={id:"sdk/community-js/api-services/API_Reference/services/onboarding/classes/OnBoardingService",title:"OnBoardingService",description:"Constructors",source:"@site/docs/sdk/community-js/api-services/API_Reference/services/onboarding/classes/OnBoardingService.md",sourceDirName:"sdk/community-js/api-services/API_Reference/services/onboarding/classes",slug:"/sdk/community-js/api-services/API_Reference/services/onboarding/classes/OnBoardingService",permalink:"/docs/sdk/community-js/api-services/API_Reference/services/onboarding/classes/OnBoardingService",draft:!1,unlisted:!1,editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/sdk/community-js/api-services/API_Reference/services/onboarding/classes/OnBoardingService.md",tags:[],version:"current",frontMatter:{},sidebar:"sdkSidebar",previous:{title:"OnBoardingApiClient",permalink:"/docs/sdk/community-js/api-services/API_Reference/services/onboarding/classes/OnBoardingApiClient"},next:{title:"OnBoardingApiClientInterface",permalink:"/docs/sdk/community-js/api-services/API_Reference/services/onboarding/interfaces/OnBoardingApiClientInterface"}},l={},o=[{value:"Constructors",id:"constructors",level:2},{value:"new OnBoardingService()",id:"new-onboardingservice",level:3},{value:"Returns",id:"returns",level:4},{value:"Methods",id:"methods",level:2},{value:"completeAStep()",id:"completeastep",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Source",id:"source",level:4},{value:"getAStep()",id:"getastep",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Source",id:"source-1",level:4},{value:"getAllSteps()",id:"getallsteps",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Source",id:"source-2",level:4},{value:"startAStep()",id:"startastep",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Source",id:"source-3",level:4}];function a(e){const s={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"onboardingservice",children:"OnBoardingService"}),"\n",(0,r.jsxs)(s.admonition,{title:"OnBoarding service can be used in the following way:",type:"tip",children:[(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-jsx",children:'1. Import the service from our library:\n\nimport {OnBoardingService} from "@selfcommunity/api-services";\n'})}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-jsx",children:"2. Create a function and put the service inside it!\nThe async function `getAStep` will return the paginated list of categories.\n\nasync getAStep() {\n  return await OnBoardingService.getAStep();\n}\n"})}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-jsx",children:"In case of required `params`, just add them inside the brackets.\n\nasync create(data) {\n return await OnBoardingService.getAStep(step);\n}\n"})}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-jsx",children:"If you need to customize the request, you can add optional config params (`AxiosRequestConfig` type).\n\n1. Declare it(or declare them, it is possible to add multiple params)\n\nconst headers = headers: {Authorization: `Bearer ${yourToken}`}\n\n2. Add it inside the brackets and pass it to the function, as shown in the previous example!\n"})})]}),"\n",(0,r.jsx)(s.h2,{id:"constructors",children:"Constructors"}),"\n",(0,r.jsx)(s.h3,{id:"new-onboardingservice",children:"new OnBoardingService()"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"new OnBoardingService"}),"(): ",(0,r.jsx)(s.a,{href:"/docs/sdk/community-js/api-services/API_Reference/services/onboarding/classes/OnBoardingService",children:(0,r.jsx)(s.code,{children:"OnBoardingService"})})]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"/docs/sdk/community-js/api-services/API_Reference/services/onboarding/classes/OnBoardingService",children:(0,r.jsx)(s.code,{children:"OnBoardingService"})})}),"\n",(0,r.jsx)(s.h2,{id:"methods",children:"Methods"}),"\n",(0,r.jsx)(s.h3,{id:"completeastep",children:"completeAStep()"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"static"})," ",(0,r.jsx)(s.strong,{children:"completeAStep"}),"(",(0,r.jsx)(s.code,{children:"step"}),", ",(0,r.jsx)(s.code,{children:"config"}),"?): ",(0,r.jsx)(s.code,{children:"Promise"}),"<",(0,r.jsx)(s.code,{children:"any"}),">"]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Parameter"}),(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"step"})}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.a,{href:"/docs/sdk/community-js/api-services/API_Reference/types/onBoarding/enumerations/OnBoardingStep",children:(0,r.jsx)(s.code,{children:"OnBoardingStep"})})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,r.jsx)(s.code,{children:"config"}),"?"]}),(0,r.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,r.jsx)(s.code,{children:"AxiosRequestConfig"}),"<",(0,r.jsx)(s.code,{children:"any"}),">"]})]})]})]}),"\n",(0,r.jsx)(s.h4,{id:"returns-1",children:"Returns"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"Promise"}),"<",(0,r.jsx)(s.code,{children:"any"}),">"]}),"\n",(0,r.jsx)(s.h4,{id:"source",children:"Source"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"https://github.com/selfcommunity/community-js/blob/e662efcd235f7af73f248bd448d664d71e43b1eb/packages/api-services/src/services/onboarding/index.ts#L101",children:"services/onboarding/index.ts:101"})}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"getastep",children:"getAStep()"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"static"})," ",(0,r.jsx)(s.strong,{children:"getAStep"}),"(",(0,r.jsx)(s.code,{children:"step"}),", ",(0,r.jsx)(s.code,{children:"config"}),"?): ",(0,r.jsx)(s.code,{children:"Promise"}),"<",(0,r.jsx)(s.code,{children:"SCStepType"}),">"]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Parameter"}),(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"step"})}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.a,{href:"/docs/sdk/community-js/api-services/API_Reference/types/onBoarding/enumerations/OnBoardingStep",children:(0,r.jsx)(s.code,{children:"OnBoardingStep"})})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,r.jsx)(s.code,{children:"config"}),"?"]}),(0,r.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,r.jsx)(s.code,{children:"AxiosRequestConfig"}),"<",(0,r.jsx)(s.code,{children:"any"}),">"]})]})]})]}),"\n",(0,r.jsx)(s.h4,{id:"returns-2",children:"Returns"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"Promise"}),"<",(0,r.jsx)(s.code,{children:"SCStepType"}),">"]}),"\n",(0,r.jsx)(s.h4,{id:"source-1",children:"Source"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"https://github.com/selfcommunity/community-js/blob/e662efcd235f7af73f248bd448d664d71e43b1eb/packages/api-services/src/services/onboarding/index.ts#L93",children:"services/onboarding/index.ts:93"})}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"getallsteps",children:"getAllSteps()"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"static"})," ",(0,r.jsx)(s.strong,{children:"getAllSteps"}),"(",(0,r.jsx)(s.code,{children:"params"}),"?, ",(0,r.jsx)(s.code,{children:"config"}),"?): ",(0,r.jsx)(s.code,{children:"Promise"})," <",(0,r.jsx)(s.a,{href:"/docs/sdk/community-js/api-services/API_Reference/types/paginatedResponse/interfaces/SCPaginatedResponse",children:(0,r.jsx)(s.code,{children:"SCPaginatedResponse"})}),"<",(0,r.jsx)(s.code,{children:"SCStepType"}),">>"]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Parameter"}),(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,r.jsx)(s.code,{children:"params"}),"?"]}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.a,{href:"/docs/sdk/community-js/api-services/API_Reference/types/baseParams/interfaces/BaseSearchParams",children:(0,r.jsx)(s.code,{children:"BaseSearchParams"})})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,r.jsx)(s.code,{children:"config"}),"?"]}),(0,r.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,r.jsx)(s.code,{children:"AxiosRequestConfig"}),"<",(0,r.jsx)(s.code,{children:"any"}),">"]})]})]})]}),"\n",(0,r.jsx)(s.h4,{id:"returns-3",children:"Returns"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"Promise"})," <",(0,r.jsx)(s.a,{href:"/docs/sdk/community-js/api-services/API_Reference/types/paginatedResponse/interfaces/SCPaginatedResponse",children:(0,r.jsx)(s.code,{children:"SCPaginatedResponse"})}),"<",(0,r.jsx)(s.code,{children:"SCStepType"}),">>"]}),"\n",(0,r.jsx)(s.h4,{id:"source-2",children:"Source"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"https://github.com/selfcommunity/community-js/blob/e662efcd235f7af73f248bd448d664d71e43b1eb/packages/api-services/src/services/onboarding/index.ts#L89",children:"services/onboarding/index.ts:89"})}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"startastep",children:"startAStep()"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"static"})," ",(0,r.jsx)(s.strong,{children:"startAStep"}),"(",(0,r.jsx)(s.code,{children:"step"}),", ",(0,r.jsx)(s.code,{children:"params"}),"?, ",(0,r.jsx)(s.code,{children:"config"}),"?): ",(0,r.jsx)(s.code,{children:"Promise"})," <",(0,r.jsx)(s.a,{href:"/docs/sdk/community-js/api-services/API_Reference/types/paginatedResponse/interfaces/SCPaginatedResponse",children:(0,r.jsx)(s.code,{children:"SCPaginatedResponse"})}),"<",(0,r.jsx)(s.code,{children:"SCStepType"}),">>"]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"parameters-3",children:"Parameters"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Parameter"}),(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"step"})}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.a,{href:"/docs/sdk/community-js/api-services/API_Reference/types/onBoarding/enumerations/OnBoardingStep",children:(0,r.jsx)(s.code,{children:"OnBoardingStep"})})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,r.jsx)(s.code,{children:"params"}),"?"]}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.a,{href:"/docs/sdk/community-js/api-services/API_Reference/types/onBoarding/interfaces/StartStepParams",children:(0,r.jsx)(s.code,{children:"StartStepParams"})})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,r.jsx)(s.code,{children:"config"}),"?"]}),(0,r.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,r.jsx)(s.code,{children:"AxiosRequestConfig"}),"<",(0,r.jsx)(s.code,{children:"any"}),">"]})]})]})]}),"\n",(0,r.jsx)(s.h4,{id:"returns-4",children:"Returns"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"Promise"})," <",(0,r.jsx)(s.a,{href:"/docs/sdk/community-js/api-services/API_Reference/types/paginatedResponse/interfaces/SCPaginatedResponse",children:(0,r.jsx)(s.code,{children:"SCPaginatedResponse"})}),"<",(0,r.jsx)(s.code,{children:"SCStepType"}),">>"]}),"\n",(0,r.jsx)(s.h4,{id:"source-3",children:"Source"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"https://github.com/selfcommunity/community-js/blob/e662efcd235f7af73f248bd448d664d71e43b1eb/packages/api-services/src/services/onboarding/index.ts#L97",children:"services/onboarding/index.ts:97"})})]})}function h(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},11151:(e,s,n)=>{n.d(s,{Z:()=>d,a:()=>c});var r=n(67294);const i={},t=r.createContext(i);function c(e){const s=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),r.createElement(t.Provider,{value:s},e.children)}}}]);