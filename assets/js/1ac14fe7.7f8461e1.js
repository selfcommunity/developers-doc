"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[31520],{38634:(e,i,s)=>{s.r(i),s.d(i,{assets:()=>o,contentTitle:()=>r,default:()=>v,frontMatter:()=>c,metadata:()=>d,toc:()=>l});var n=s(85893),t=s(11151);const c={},r="InviteService",d={id:"sdk/community-js/api-services/API_Reference/services/invite/classes/InviteService",title:"InviteService",description:"Constructors",source:"@site/docs/sdk/community-js/api-services/API_Reference/services/invite/classes/InviteService.md",sourceDirName:"sdk/community-js/api-services/API_Reference/services/invite/classes",slug:"/sdk/community-js/api-services/API_Reference/services/invite/classes/InviteService",permalink:"/docs/sdk/community-js/api-services/API_Reference/services/invite/classes/InviteService",draft:!1,unlisted:!1,editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/sdk/community-js/api-services/API_Reference/services/invite/classes/InviteService.md",tags:[],version:"current",frontMatter:{},sidebar:"sdkSidebar",previous:{title:"InviteApiClient",permalink:"/docs/sdk/community-js/api-services/API_Reference/services/invite/classes/InviteApiClient"},next:{title:"InviteApiClientInterface",permalink:"/docs/sdk/community-js/api-services/API_Reference/services/invite/interfaces/InviteApiClientInterface"}},o={},l=[{value:"Constructors",id:"constructors",level:2},{value:"new InviteService()",id:"new-inviteservice",level:3},{value:"Returns",id:"returns",level:4},{value:"Methods",id:"methods",level:2},{value:"getSpecificInvite()",id:"getspecificinvite",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Source",id:"source",level:4}];function a(e){const i={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h1,{id:"inviteservice",children:"InviteService"}),"\n",(0,n.jsxs)(i.admonition,{title:"Invite service can be used in the following way:",type:"tip",children:[(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-jsx",children:'1. Import the service from our library:\n\nimport {InviteService} from "@selfcommunity/api-services";\n'})}),(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-jsx",children:"2. Create a function and put the service inside it!\nThe async function `create` will return the paginated list of categories.\n\nasync getSpecificInviteCode() {\n  return await InviteService.getSpecificInvite();\n}\n"})}),(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-jsx",children:"In case of required `params`, just add them inside the brackets.\n\nasync create(data) {\n return await InviteService.getSpecificInvite(code);\n}\n"})}),(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-jsx",children:"If you need to customize the request, you can add optional config params (`AxiosRequestConfig` type).\n\n1. Declare it(or declare them, it is possible to add multiple params)\n\nconst headers = headers: {Authorization: `Bearer ${yourToken}`}\n\n2. Add it inside the brackets and pass it to the function, as shown in the previous example!\n"})})]}),"\n",(0,n.jsx)(i.h2,{id:"constructors",children:"Constructors"}),"\n",(0,n.jsx)(i.h3,{id:"new-inviteservice",children:"new InviteService()"}),"\n",(0,n.jsxs)(i.blockquote,{children:["\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"new InviteService"}),"(): ",(0,n.jsx)(i.a,{href:"/docs/sdk/community-js/api-services/API_Reference/services/invite/classes/InviteService",children:(0,n.jsx)(i.code,{children:"InviteService"})})]}),"\n"]}),"\n",(0,n.jsx)(i.h4,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.a,{href:"/docs/sdk/community-js/api-services/API_Reference/services/invite/classes/InviteService",children:(0,n.jsx)(i.code,{children:"InviteService"})})}),"\n",(0,n.jsx)(i.h2,{id:"methods",children:"Methods"}),"\n",(0,n.jsx)(i.h3,{id:"getspecificinvite",children:"getSpecificInvite()"}),"\n",(0,n.jsxs)(i.blockquote,{children:["\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:"static"})," ",(0,n.jsx)(i.strong,{children:"getSpecificInvite"}),"(",(0,n.jsx)(i.code,{children:"code"}),", ",(0,n.jsx)(i.code,{children:"config"}),"?): ",(0,n.jsx)(i.code,{children:"Promise"}),"<",(0,n.jsx)(i.code,{children:"SCInviteType"}),">"]}),"\n"]}),"\n",(0,n.jsx)(i.h4,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{style:{textAlign:"left"},children:"Parameter"}),(0,n.jsx)(i.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,n.jsxs)(i.tbody,{children:[(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{style:{textAlign:"left"},children:(0,n.jsx)(i.code,{children:"code"})}),(0,n.jsx)(i.td,{style:{textAlign:"left"},children:(0,n.jsx)(i.code,{children:"string"})})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsxs)(i.td,{style:{textAlign:"left"},children:[(0,n.jsx)(i.code,{children:"config"}),"?"]}),(0,n.jsxs)(i.td,{style:{textAlign:"left"},children:[(0,n.jsx)(i.code,{children:"AxiosRequestConfig"}),"<",(0,n.jsx)(i.code,{children:"any"}),">"]})]})]})]}),"\n",(0,n.jsx)(i.h4,{id:"returns-1",children:"Returns"}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:"Promise"}),"<",(0,n.jsx)(i.code,{children:"SCInviteType"}),">"]}),"\n",(0,n.jsx)(i.h4,{id:"source",children:"Source"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.a,{href:"https://github.com/selfcommunity/community-js/blob/88ddf460a21d4471fb84839f097f9d428e19bd86/packages/api-services/src/services/invite/index.ts#L59",children:"services/invite/index.ts:59"})})]})}function v(e={}){const{wrapper:i}={...(0,t.a)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},11151:(e,i,s)=>{s.d(i,{Z:()=>d,a:()=>r});var n=s(67294);const t={},c=n.createContext(t);function r(e){const i=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function d(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),n.createElement(c.Provider,{value:i},e.children)}}}]);