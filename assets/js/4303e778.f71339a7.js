"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[36402],{3314:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>r,default:()=>a,frontMatter:()=>c,metadata:()=>d,toc:()=>o});var i=n(85893),t=n(11151);const c={id:"services_custom_menu.CustomMenuService",title:"Class: CustomMenuService",sidebar_label:"CustomMenuService",custom_edit_url:null},r=void 0,d={id:"sdk/community-js/api-services/API_Reference/classes/services_custom_menu.CustomMenuService",title:"Class: CustomMenuService",description:"services/custom\\menu.CustomMenuService",source:"@site/docs/sdk/community-js/api-services/API_Reference/classes/services_custom_menu.CustomMenuService.md",sourceDirName:"sdk/community-js/api-services/API_Reference/classes",slug:"/sdk/community-js/api-services/API_Reference/classes/services_custom_menu.CustomMenuService",permalink:"/docs/sdk/community-js/api-services/API_Reference/classes/services_custom_menu.CustomMenuService",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"services_custom_menu.CustomMenuService",title:"Class: CustomMenuService",sidebar_label:"CustomMenuService",custom_edit_url:null},sidebar:"sdkSidebar",previous:{title:"CustomMenuApiClient",permalink:"/docs/sdk/community-js/api-services/API_Reference/classes/services_custom_menu.CustomMenuApiClient"},next:{title:"CustomPageApiClient",permalink:"/docs/sdk/community-js/api-services/API_Reference/classes/services_custom_page.CustomPageApiClient"}},l={},o=[{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Returns",id:"returns",level:4},{value:"Methods",id:"methods",level:2},{value:"getASpecificCustomMenu",id:"getaspecificcustommenu",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"getAllCustomMenus",id:"getallcustommenus",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"getBaseCustomMenu",id:"getbasecustommenu",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"searchCustomMenus",id:"searchcustommenus",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Defined in",id:"defined-in-3",level:4}];function u(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"/docs/sdk/community-js/api-services/API_Reference/modules/services_custom_menu",children:"services/custom_menu"}),".CustomMenuService"]}),"\n",(0,i.jsxs)(s.admonition,{title:"Custom Menu service can be used in the following way:",type:"tip",children:[(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-jsx",children:'1. Import the service from our library:\n\nimport {CustomMenuService} from "@selfcommunity/api-services";\n'})}),(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-jsx",children:"2. Create a function and put the service inside it!\nThe async function `getAllCustomMenus` will return the paginated list of custom menus.\n\nasync getAllCustomMenus() {\n       return await CustomMenuService.getAllCustomMenus();\n     }\n"})}),(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-jsx",children:"In case of required `params`, just add them inside the brackets.\n\nasync getASpecificCustomMenu(customMenuId) {\n       return await CustomMenuService.getASpecificCustomMenu(customMenuId);\n    }\n"})}),(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-jsx",children:"If you need to customize the request, you can add optional config params (`AxiosRequestConfig` type).\n\n1. Declare it(or declare them, it is possible to add multiple params)\n\nconst headers = headers: {Authorization: `Bearer ${yourToken}`}\n\n2. Add it inside the brackets and pass it to the function, as shown in the previous example!\n"})})]}),"\n",(0,i.jsx)(s.h2,{id:"constructors",children:"Constructors"}),"\n",(0,i.jsx)(s.h3,{id:"constructor",children:"constructor"}),"\n",(0,i.jsxs)(s.p,{children:["\u2022 ",(0,i.jsx)(s.strong,{children:"new CustomMenuService"}),"(): ",(0,i.jsx)(s.a,{href:"/docs/sdk/community-js/api-services/API_Reference/classes/services_custom_menu.CustomMenuService",children:(0,i.jsx)(s.code,{children:"CustomMenuService"})})]}),"\n",(0,i.jsx)(s.h4,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"/docs/sdk/community-js/api-services/API_Reference/classes/services_custom_menu.CustomMenuService",children:(0,i.jsx)(s.code,{children:"CustomMenuService"})})}),"\n",(0,i.jsx)(s.h2,{id:"methods",children:"Methods"}),"\n",(0,i.jsx)(s.h3,{id:"getaspecificcustommenu",children:"getASpecificCustomMenu"}),"\n",(0,i.jsxs)(s.p,{children:["\u25b8 ",(0,i.jsx)(s.strong,{children:"getASpecificCustomMenu"}),"(",(0,i.jsx)(s.code,{children:"id"}),", ",(0,i.jsx)(s.code,{children:"config?"}),"): ",(0,i.jsx)(s.code,{children:"Promise"}),"<",(0,i.jsx)(s.code,{children:"SCCustomMenuType"}),">"]}),"\n",(0,i.jsx)(s.h4,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{style:{textAlign:"left"},children:"Name"}),(0,i.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"id"})}),(0,i.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,i.jsx)(s.code,{children:"string"})," | ",(0,i.jsx)(s.code,{children:"number"})]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"config?"})}),(0,i.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,i.jsx)(s.code,{children:"AxiosRequestConfig"}),"<",(0,i.jsx)(s.code,{children:"any"}),">"]})]})]})]}),"\n",(0,i.jsx)(s.h4,{id:"returns-1",children:"Returns"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"Promise"}),"<",(0,i.jsx)(s.code,{children:"SCCustomMenuType"}),">"]}),"\n",(0,i.jsx)(s.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://github.com/selfcommunity/community-js/blob/6572d63/packages/api-services/src/services/custom_menu/index.ts#L93",children:"services/custom_menu/index.ts:93"})}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h3,{id:"getallcustommenus",children:"getAllCustomMenus"}),"\n",(0,i.jsxs)(s.p,{children:["\u25b8 ",(0,i.jsx)(s.strong,{children:"getAllCustomMenus"}),"(",(0,i.jsx)(s.code,{children:"params?"}),", ",(0,i.jsx)(s.code,{children:"config?"}),"): ",(0,i.jsx)(s.code,{children:"Promise"}),"<",(0,i.jsx)(s.a,{href:"/docs/sdk/community-js/api-services/API_Reference/interfaces/types_paginatedResponse.SCPaginatedResponse",children:(0,i.jsx)(s.code,{children:"SCPaginatedResponse"})}),"<",(0,i.jsx)(s.code,{children:"SCCustomMenuType"}),">>"]}),"\n",(0,i.jsx)(s.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{style:{textAlign:"left"},children:"Name"}),(0,i.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"params?"})}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.a,{href:"/docs/sdk/community-js/api-services/API_Reference/interfaces/types_baseParams.BaseGetParams",children:(0,i.jsx)(s.code,{children:"BaseGetParams"})})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"config?"})}),(0,i.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,i.jsx)(s.code,{children:"AxiosRequestConfig"}),"<",(0,i.jsx)(s.code,{children:"any"}),">"]})]})]})]}),"\n",(0,i.jsx)(s.h4,{id:"returns-2",children:"Returns"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"Promise"}),"<",(0,i.jsx)(s.a,{href:"/docs/sdk/community-js/api-services/API_Reference/interfaces/types_paginatedResponse.SCPaginatedResponse",children:(0,i.jsx)(s.code,{children:"SCPaginatedResponse"})}),"<",(0,i.jsx)(s.code,{children:"SCCustomMenuType"}),">>"]}),"\n",(0,i.jsx)(s.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://github.com/selfcommunity/community-js/blob/6572d63/packages/api-services/src/services/custom_menu/index.ts#L96",children:"services/custom_menu/index.ts:96"})}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h3,{id:"getbasecustommenu",children:"getBaseCustomMenu"}),"\n",(0,i.jsxs)(s.p,{children:["\u25b8 ",(0,i.jsx)(s.strong,{children:"getBaseCustomMenu"}),"(",(0,i.jsx)(s.code,{children:"config?"}),"): ",(0,i.jsx)(s.code,{children:"Promise"}),"<",(0,i.jsx)(s.code,{children:"SCCustomMenuType"}),">"]}),"\n",(0,i.jsx)(s.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{style:{textAlign:"left"},children:"Name"}),(0,i.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,i.jsx)(s.tbody,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"config?"})}),(0,i.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,i.jsx)(s.code,{children:"AxiosRequestConfig"}),"<",(0,i.jsx)(s.code,{children:"any"}),">"]})]})})]}),"\n",(0,i.jsx)(s.h4,{id:"returns-3",children:"Returns"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"Promise"}),"<",(0,i.jsx)(s.code,{children:"SCCustomMenuType"}),">"]}),"\n",(0,i.jsx)(s.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://github.com/selfcommunity/community-js/blob/6572d63/packages/api-services/src/services/custom_menu/index.ts#L99",children:"services/custom_menu/index.ts:99"})}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h3,{id:"searchcustommenus",children:"searchCustomMenus"}),"\n",(0,i.jsxs)(s.p,{children:["\u25b8 ",(0,i.jsx)(s.strong,{children:"searchCustomMenus"}),"(",(0,i.jsx)(s.code,{children:"params?"}),", ",(0,i.jsx)(s.code,{children:"config?"}),"): ",(0,i.jsx)(s.code,{children:"Promise"}),"<",(0,i.jsx)(s.a,{href:"/docs/sdk/community-js/api-services/API_Reference/interfaces/types_paginatedResponse.SCPaginatedResponse",children:(0,i.jsx)(s.code,{children:"SCPaginatedResponse"})}),"<",(0,i.jsx)(s.code,{children:"SCCustomMenuType"}),">>"]}),"\n",(0,i.jsx)(s.h4,{id:"parameters-3",children:"Parameters"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{style:{textAlign:"left"},children:"Name"}),(0,i.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"params?"})}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.a,{href:"/docs/sdk/community-js/api-services/API_Reference/interfaces/types_baseParams.BaseSearchParams",children:(0,i.jsx)(s.code,{children:"BaseSearchParams"})})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"config?"})}),(0,i.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,i.jsx)(s.code,{children:"AxiosRequestConfig"}),"<",(0,i.jsx)(s.code,{children:"any"}),">"]})]})]})]}),"\n",(0,i.jsx)(s.h4,{id:"returns-4",children:"Returns"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"Promise"}),"<",(0,i.jsx)(s.a,{href:"/docs/sdk/community-js/api-services/API_Reference/interfaces/types_paginatedResponse.SCPaginatedResponse",children:(0,i.jsx)(s.code,{children:"SCPaginatedResponse"})}),"<",(0,i.jsx)(s.code,{children:"SCCustomMenuType"}),">>"]}),"\n",(0,i.jsx)(s.h4,{id:"defined-in-3",children:"Defined in"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://github.com/selfcommunity/community-js/blob/6572d63/packages/api-services/src/services/custom_menu/index.ts#L102",children:"services/custom_menu/index.ts:102"})})]})}function a(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},11151:(e,s,n)=>{n.d(s,{Z:()=>d,a:()=>r});var i=n(67294);const t={},c=i.createContext(t);function r(e){const s=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(c.Provider,{value:s},e.children)}}}]);